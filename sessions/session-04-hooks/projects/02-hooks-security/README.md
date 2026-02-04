# Project 2: 위험 명령 차단 실습

## 🎯 학습 목표

- Hooks로 위험한 명령 차단하기
- `rm -rf` 같은 위험 명령 100% 차단
- 실제 사고 사례 이해 및 예방


---

## 📁 프로젝트 구조

```
02-hooks-security/
├── README.md                    # 이 파일
├── .cursor/
│   └── hooks/
│       └── security.js          # 보안 Hook
└── src/
    └── index.js                 # 테스트용 파일
```

---

## 🚨 실제 사고 사례

### Claude CLI 홈 디렉터리 삭제 사고

2024년 12월, Claude CLI를 사용하던 중 AI Agent가 다음 명령을 실행했습니다:

```bash
rm -rf tests/ patches/ plan/ ~/
```

**결과**:
- 사용자의 홈 디렉터리 전체 삭제
- Desktop, Documents, Keychain 등 모두 초기화
- 복구 불가능

**원인**:
- AI가 `~/`를 실수로 포함
- 실행 전 차단 메커니즘 없음
- 프롬프트만으로는 방지 불가

참고: [사고 뉴스](https://news.hada.io/topic?id=25096)

---

## 💡 Hooks로 100% 차단하기

### Rules vs Hooks

```
Rules (프롬프트):
"rm -rf 쓰지 마세요"
→ AI가 가끔 무시함 ❌

Hooks (코드):
if (명령.includes('rm -rf')) {
  return { block: true };
}
→ 100% 차단 ✅
```

---

## 🚀 실습 단계

### Step 1: 보안 Hook 생성

`.cursor/hooks/security.js` 파일을 만들고 다음 내용을 작성하세요:

```javascript
// 위험한 명령을 차단하는 Hook

const DANGEROUS_COMMANDS = [
  'rm -rf',
  'rm -fr',
  'sudo rm',
  'format',
  'del /f',
  'rmdir /s'
];

export async function preToolExecution(context) {
  const { tool, args } = context;
  
  // 터미널 명령 실행 시 검사
  if (tool === 'run_terminal_cmd' || tool === 'execute_command') {
    const command = args.command || '';
    
    // 위험한 명령 검사
    for (const dangerous of DANGEROUS_COMMANDS) {
      if (command.includes(dangerous)) {
        console.error('🚨 [보안] 위험한 명령 차단!');
        console.error('🚨 명령:', command);
        console.error('🚨 이유: 시스템 파일 삭제 위험');
        
        return {
          block: true,
          reason: `위험한 명령어가 포함되어 있습니다: ${dangerous}`
        };
      }
    }
    
    // 홈 디렉터리 삭제 방지
    if (command.includes('~/') && command.includes('rm')) {
      console.error('🚨 [보안] 홈 디렉터리 삭제 시도 차단!');
      
      return {
        block: true,
        reason: '홈 디렉터리 삭제는 허용되지 않습니다'
      };
    }
  }
  
  // 안전한 명령은 허용
  return { block: false };
}
```

---

### Step 2: 안전한 명령 테스트

Cursor Agent에게 다음을 요청하세요:

```
src/index.js에 새로운 함수 추가해줘
```

**결과**:
- ✅ 정상 실행됨
- Hook이 차단하지 않음

---

### Step 3: 위험한 명령 테스트

Cursor Agent에게 다음을 요청하세요:

```
src 폴더를 rm -rf로 삭제해줘
```

**결과**:
- 🚨 Hook이 차단!
- 에러 메시지 출력
- 명령 실행 안 됨

터미널에 다음과 같은 메시지가 나타나야 합니다:

```
🚨 [보안] 위험한 명령 차단!
🚨 명령: rm -rf src/
🚨 이유: 시스템 파일 삭제 위험
```

---

## 💡 핵심 개념

### 보안 Hook 패턴

```javascript
export async function preToolExecution(context) {
  const { tool, args } = context;
  
  // 1. 위험 도구 확인
  if (tool === 'dangerous_tool') {
    // 2. 인자 검증
    if (isDangerous(args)) {
      // 3. 차단!
      return {
        block: true,
        reason: '차단 이유'
      };
    }
  }
  
  // 4. 안전하면 허용
  return { block: false };
}
```

### 차단 가능한 위험 작업

| 작업                | 위험도 | Hook 차단 |
| ------------------- | ------ | --------- |
| `rm -rf ~/`         | 🔴 극상 | ✅        |
| `rm -rf /`          | 🔴 극상 | ✅        |
| `sudo rm`           | 🔴 상   | ✅        |
| `format`            | 🔴 상   | ✅        |
| 환경변수 삭제       | 🟡 중   | ✅        |
| 중요 파일 수정      | 🟡 중   | ✅        |

---

## 🛡️ 추가 보안 규칙

### 1. 파일 삭제 확인

```javascript
if (tool === 'delete_file') {
  const filePath = args.path;
  
  // 중요 파일 보호
  const protectedFiles = [
    '.env',
    'package.json',
    'tsconfig.json'
  ];
  
  if (protectedFiles.some(f => filePath.includes(f))) {
    return {
      block: true,
      reason: '중요 파일은 삭제할 수 없습니다'
    };
  }
}
```

### 2. 환경변수 접근 제한

```javascript
if (tool === 'read_env' || tool === 'write_env') {
  const key = args.key;
  
  // 민감한 환경변수 보호
  const sensitiveKeys = [
    'AWS_SECRET',
    'DATABASE_PASSWORD',
    'API_KEY'
  ];
  
  if (sensitiveKeys.some(k => key.includes(k))) {
    return {
      block: true,
      reason: '민감한 환경변수는 접근할 수 없습니다'
    };
  }
}
```

---

## ✅ 완료 체크리스트

- [ ] `.cursor/hooks/security.js` 파일 생성
- [ ] 위험 명령 목록 정의
- [ ] `preToolExecution` 구현
- [ ] 안전한 명령 테스트 (통과)
- [ ] 위험한 명령 테스트 (차단)
- [ ] 차단 메시지 확인

---

## 🎓 정리

### Rules vs Hooks

| 방식     | Rules         | Hooks           |
| -------- | ------------- | --------------- |
| **타입** | 프롬프트      | 코드            |
| **강제** | ❌ 요청       | ✅ 강제         |
| **차단** | ❌ 불가능     | ✅ 100% 차단    |
| **안전** | ⚠️ 불확실    | ✅ 확실         |

### Hooks의 가치

1. **100% 차단**: 위험 작업을 코드로 강제 차단
2. **사고 예방**: Claude CLI 같은 사고 방지
3. **안심**: AI에게 더 많은 권한 부여 가능

---

## 🎓 다음 장

[5장: Visual Editor - 클릭 기반 UI 수정](../../../session-05-visual/README.md)

# Project 3: Hooks 보안

## 🎯 학습 목표

- [ ] 위험 명령 차단 Hook 작성
- [ ] 폴더 보호 Hook 작성
- [ ] 감사 로그 Hook 작성
- [ ] 실제 차단 동작 확인

**소요 시간**: 20분

---

## 📁 프로젝트 구조

```
hooks-security/
├── README.md
├── .cursor/
│   └── hooks/
│       ├── security.js     # 보안 Hook
│       └── audit.js        # 감사 Hook
├── .env.example
├── config/
│   └── database.json
├── src/
│   └── index.js
└── logs/
    └── audit.log
```

---

## 🚀 실습 단계

### Step 1: 보안 Hook 이해 (5분)

`.cursor/hooks/security.js` 파일을 확인하세요:

```javascript
// 위험한 명령어 패턴
const DANGEROUS_PATTERNS = [
  /rm\s+-rf/,           // rm -rf
  /DROP\s+TABLE/i,      // DROP TABLE
  /DELETE\s+FROM/i,     // DELETE FROM
  /TRUNCATE/i,          // TRUNCATE
  /sudo\s+rm/,          // sudo rm
];

// 보호할 파일/폴더 패턴
const PROTECTED_PATHS = [
  /\.env$/,             // .env 파일
  /^config\//,          // config/ 폴더
  /^\.git\//,           // .git/ 폴더
  /package-lock\.json/, // package-lock.json
];

export async function preToolExecution(context) {
  const { tool, args } = context;
  
  // 1. 위험 명령 검사
  if (tool === 'Shell') {
    const command = args.command || '';
    
    for (const pattern of DANGEROUS_PATTERNS) {
      if (pattern.test(command)) {
        return {
          block: true,
          reason: `위험한 명령어 감지: ${command}`
        };
      }
    }
  }
  
  // 2. 보호 경로 검사
  if (tool === 'StrReplace' || tool === 'Write' || tool === 'Delete') {
    const path = args.path || '';
    
    for (const pattern of PROTECTED_PATHS) {
      if (pattern.test(path)) {
        return {
          block: true,
          reason: `보호된 파일/폴더: ${path}`
        };
      }
    }
  }
  
  return { block: false };
}
```

### Step 2: 감사 로그 Hook 이해 (5분)

`.cursor/hooks/audit.js` 파일을 확인하세요:

```javascript
import fs from 'fs';
import path from 'path';

const AUDIT_LOG = 'logs/audit.log';

export async function postToolExecution(context) {
  const { tool, args, result } = context;
  
  // 파일 수정 작업만 기록
  if (['StrReplace', 'Write', 'Delete'].includes(tool)) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      tool,
      path: args.path,
      success: result.success,
    };
    
    const logLine = JSON.stringify(logEntry) + '\n';
    
    // 로그 파일에 추가
    fs.appendFileSync(AUDIT_LOG, logLine);
  }
}
```

### Step 3: 위험 명령 차단 테스트 (5분)

Cursor Agent를 열고 다음을 요청하세요:

1. **위험 명령 시도**:
   ```
   rm -rf node_modules 명령을 실행해줘
   ```
   
   **예상 결과**:
   - ❌ 차단됨
   - 📝 "위험한 명령어 감지" 메시지

2. **안전한 명령**:
   ```
   ls -la 명령을 실행해줘
   ```
   
   **예상 결과**:
   - ✅ 실행됨

### Step 4: 폴더 보호 테스트 (5분)

1. **.env 파일 수정 시도**:
   ```
   .env 파일에 DATABASE_URL을 추가해줘
   ```
   
   **예상 결과**:
   - ❌ 차단됨
   - 📝 "보호된 파일/폴더" 메시지

2. **config/ 폴더 수정 시도**:
   ```
   config/database.json을 수정해줘
   ```
   
   **예상 결과**:
   - ❌ 차단됨

3. **일반 파일 수정**:
   ```
   src/index.js에 함수를 추가해줘
   ```
   
   **예상 결과**:
   - ✅ 실행됨
   - 📝 `logs/audit.log`에 기록됨

### Step 5: 감사 로그 확인 (5분)

`logs/audit.log` 파일을 열어 기록을 확인하세요:

```json
{"timestamp":"2026-01-13T10:30:00.000Z","tool":"Write","path":"src/index.js","success":true}
```

---

## ✅ 완료 체크리스트

- [ ] 보안 Hook 동작 이해
- [ ] 위험 명령 차단 확인
- [ ] 보호 경로 차단 확인
- [ ] 감사 로그 기록 확인
- [ ] 안전한 작업은 허용됨 확인

---

## 💡 핵심 개념

### 보안 Hook 패턴

```javascript
// 1. 패턴 정의
const DANGEROUS = [/pattern1/, /pattern2/];

// 2. 검사
for (const pattern of DANGEROUS) {
  if (pattern.test(input)) {
    return { block: true, reason: '...' };
  }
}

// 3. 허용
return { block: false };
```

### 감사 로그 패턴

```javascript
// 1. 로그 엔트리 생성
const logEntry = {
  timestamp: new Date().toISOString(),
  tool,
  path,
  success
};

// 2. 파일에 추가
fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + '\n');
```

---

## 🎓 실전 활용

### 추가 보안 패턴

```javascript
// 민감한 데이터 패턴
const SENSITIVE = [
  /password/i,
  /secret/i,
  /token/i,
  /api[_-]?key/i,
];

// 프로덕션 환경 보호
if (process.env.NODE_ENV === 'production') {
  return { block: true, reason: '프로덕션 환경' };
}

// 시간 제한 (업무 시간만 허용)
const hour = new Date().getHours();
if (hour < 9 || hour > 18) {
  return { block: true, reason: '업무 시간 외' };
}
```

---

## 🔗 완료!

축하합니다! 1교시의 모든 프로젝트를 완료했습니다.

[2교시로 이동](../../session-02/README.md)

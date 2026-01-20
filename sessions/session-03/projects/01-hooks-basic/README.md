# Project 1: Hooks 기본 동작 이해

## 🎯 학습 목표

- Hooks의 `preToolExecution` 이해
- Hooks의 `postToolExecution` 이해
- Agent 동작 감시 및 로깅


---

## 📁 프로젝트 구조

```
01-hooks-basic/
├── README.md                    # 이 파일
├── .cursor/
│   └── hooks/
│       └── logger.js            # Hook 구현
└── src/
    └── index.js                 # 테스트용 파일
```

---

## 💡 Hooks란?

**Hooks**는 Agent가 도구(tool)를 실행하기 전/후에 개입할 수 있는 기능입니다.

```
Agent 작업 흐름:

1. Agent가 작업 계획
2. → preToolExecution (실행 전)  ← Hook!
3. Agent가 도구 실행
4. → postToolExecution (실행 후) ← Hook!
5. 결과 반환
```

### 주요 Hooks

| Hook                  | 시점       | 용도                      |
| --------------------- | ---------- | ------------------------- |
| `preToolExecution`    | 실행 **전** | 검증, 차단, 로깅          |
| `postToolExecution`   | 실행 **후** | 결과 검증, 로깅, 후처리   |

---

## 🚀 실습 단계

### Step 1: Hook 파일 생성 (5분)

`.cursor/hooks/logger.js` 파일을 만들고 다음 내용을 작성하세요:

```javascript
// Agent 동작을 로깅하는 Hook

export async function preToolExecution(context) {
  const { tool, args } = context;
  
  console.log('='.repeat(50));
  console.log('[HOOK] Agent가 도구를 실행하려고 합니다');
  console.log('[HOOK] 도구:', tool);
  console.log('[HOOK] 인자:', JSON.stringify(args, null, 2));
  console.log('='.repeat(50));
  
  // 실행 허용
  return { block: false };
}

export async function postToolExecution(context) {
  const { tool, result } = context;
  
  console.log('='.repeat(50));
  console.log('[HOOK] Agent가 도구 실행을 완료했습니다');
  console.log('[HOOK] 도구:', tool);
  console.log('[HOOK] 결과:', result ? '성공' : '실패');
  console.log('='.repeat(50));
  
  return {};
}
```

---

### Step 2: Agent에게 작업 요청

Cursor Agent를 열고 다음과 같이 요청하세요:

```
src/index.js에 간단한 함수 하나 만들어줘
```

**확인 사항**:
- 터미널에 Hook 로그가 출력되는가?
- Agent가 어떤 도구를 사용하는지 보이는가?
- 실행 전/후 로그가 모두 나오는가?

---

### Step 3: 다양한 작업 시도 (5분)

다음 작업들을 요청하고 Hook 로그를 관찰하세요:

```
1. src/index.js 파일 읽어줘
2. 새로운 함수 추가해줘
3. 파일 삭제해줘
```

**관찰 포인트**:
- 각 작업마다 어떤 도구가 사용되는가?
- 인자(args)에는 어떤 정보가 들어있는가?
- 실행 순서는 어떻게 되는가?

---

## 💡 핵심 개념

### preToolExecution

```javascript
export async function preToolExecution(context) {
  const { tool, args } = context;
  
  // 1. 로깅
  console.log('실행 전:', tool, args);
  
  // 2. 검증
  if (위험한_작업) {
    return { block: true, reason: '차단 이유' };
  }
  
  // 3. 허용
  return { block: false };
}
```

**반환값**:
- `{ block: false }`: 실행 허용
- `{ block: true, reason: '...' }`: 실행 차단

### postToolExecution

```javascript
export async function postToolExecution(context) {
  const { tool, result, error } = context;
  
  // 1. 결과 로깅
  console.log('실행 후:', tool, result);
  
  // 2. 에러 처리
  if (error) {
    console.error('에러 발생:', error);
  }
  
  return {};
}
```

---

## ✅ 완료 체크리스트

- [ ] `.cursor/hooks/logger.js` 파일 생성
- [ ] `preToolExecution` 구현
- [ ] `postToolExecution` 구현
- [ ] Agent 작업 시 Hook 로그 확인
- [ ] 다양한 작업에서 Hook 동작 관찰

---

## 🎓 다음 단계

[Project 2: 위험 명령 차단 실습](../02-hooks-security/README.md)

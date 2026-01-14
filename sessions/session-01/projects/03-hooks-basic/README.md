# Project 3: Hooks 기본

## 🎯 학습 목표

- [ ] Hook 파일 구조 이해
- [ ] `preToolExecution` Hook 작성
- [ ] `postToolExecution` Hook 작성
- [ ] Hook 실행 로그 확인

**소요 시간**: 10분

---

## 📁 프로젝트 구조

```
hooks-basic/
├── README.md
├── .cursor/
│   └── hooks/
│       └── logger.js   # 로깅 Hook
├── src/
│   └── index.js
└── package.json
```

---

## 🚀 실습 단계

### Step 1: Hook 파일 생성 (5분)

`.cursor/hooks/logger.js` 파일의 내용을 확인하고 이해하세요:

```javascript
/**
 * Agent 실행 전 Hook
 * @param {Object} context - Hook 컨텍스트
 * @param {string} context.tool - 실행할 도구 이름
 * @param {Object} context.args - 도구 인자
 * @returns {Object} { block: boolean, reason?: string }
 */
export async function preToolExecution(context) {
  const { tool, args } = context;
  
  console.log('=== Pre-execution ===');
  console.log('Tool:', tool);
  console.log('Args:', JSON.stringify(args, null, 2));
  console.log('Time:', new Date().toISOString());
  
  // 실행 허용
  return { block: false };
}

/**
 * Agent 실행 후 Hook
 * @param {Object} context - Hook 컨텍스트
 * @param {string} context.tool - 실행된 도구 이름
 * @param {Object} context.args - 도구 인자
 * @param {Object} context.result - 실행 결과
 */
export async function postToolExecution(context) {
  const { tool, args, result } = context;
  
  console.log('=== Post-execution ===');
  console.log('Tool:', tool);
  console.log('Success:', result.success);
  console.log('Time:', new Date().toISOString());
  console.log('');
}
```

### Step 2: Hook 동작 확인 (5분)

1. Cursor Agent를 열고 다음을 요청하세요:
   ```
   src/index.js에 간단한 함수를 추가해줘
   ```

2. 터미널에서 로그 확인:
   - ✅ `=== Pre-execution ===` 출력?
   - ✅ Tool 이름 출력?
   - ✅ Args 출력?
   - ✅ `=== Post-execution ===` 출력?
   - ✅ Success 상태 출력?

---

## ✅ 완료 체크리스트

- [ ] `.cursor/hooks/logger.js` 파일 이해
- [ ] `preToolExecution` 함수 이해
- [ ] `postToolExecution` 함수 이해
- [ ] Hook 실행 로그 확인

---

## 💡 핵심 개념

### Hook Context 객체

```javascript
{
  tool: 'StrReplace',      // 도구 이름
  args: {                   // 도구 인자
    path: 'src/index.js',
    old_string: '...',
    new_string: '...'
  },
  result: {                 // 실행 결과 (post만)
    success: true,
    message: '...'
  }
}
```

### Hook 반환값

**preToolExecution**:
```javascript
// 실행 허용
return { block: false };

// 실행 차단
return { 
  block: true, 
  reason: '차단 이유' 
};
```

**postToolExecution**:
- 반환값 없음 (로깅/기록용)

---

## 🔗 다음 단계

[Project 4: Hooks 보안](../hooks-security/README.md)

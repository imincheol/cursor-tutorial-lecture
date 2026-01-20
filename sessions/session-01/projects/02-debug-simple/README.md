# Project 2: Debug 모드 간단 체험

> **추측이 아닌 실행으로 버그를 찾는 Debug 모드 경험하기**

## 🎯 학습 목표

- [ ] Agent 모드(일반)와 Debug 모드의 차이 체험
- [ ] Debug 모드의 자동 로그 삽입 확인
- [ ] 실행 기반 디버깅의 장점 이해

---

## 📁 프로젝트 파일

이 폴더에는 3개의 파일이 준비되어 있습니다:

1. **`1-0-calculator-original.js`** - 원본 파일 (참고용, 수정하지 마세요)
2. **`1-1-calculator-agent.js`** - Agent 모드 실습용
3. **`1-2-calculator-debug.js`** - Debug 모드 실습용

파일명의 숫자는 실습 순서를 나타냅니다.

### 버그가 있는 계산기 코드

```javascript
function calculate(a, b, operation) {
  let result;
  
  if (operation === 'add') {
    result = a + b;
  } else if (operation === 'subtract') {
    result = a - b;
  } else if (operation === 'multiply') {
    result = a * b;
  } else if (operation === 'divide') {
    result = a / b;
  }
  
  return result;
}

// 테스트
console.log(calculate(10, 5, 'add'));      // 15 ✅
console.log(calculate(10, 5, 'subtract')); // 5 ✅
console.log(calculate(10, 5, 'multiply')); // 50 ✅
console.log(calculate(10, 0, 'divide'));   // Infinity ❌ (버그!)
console.log(calculate(10, 5, 'modulo'));   // undefined ❌ (버그!)
```

**버그 2개**:
1. 0으로 나누면 `Infinity` 반환 (에러 처리 필요)
2. `modulo` 연산이 구현되지 않아 `undefined` 반환

---

## 🚀 실습 단계

### Step 1: Agent 모드로 버그 수정 시도

**Agent 모드**를 열고 `1-1-calculator-agent.js` 파일을 선택한 후 다음을 요청하세요:

```
1-1-calculator-agent.js의 버그를 찾아서 수정해줘
```

**예상 동작**:
- AI가 코드를 **읽고 추측**해서 수정합니다
- "아마도 이 부분이 문제일 것 같습니다..."
- 0으로 나누는 경우를 처리할 수도, 못할 수도 있습니다
- modulo 연산을 추가할 수도, 못할 수도 있습니다

**결과 확인**:
- ❓ 두 버그를 모두 찾았나요?
- ❓ 정확한 수정이었나요?
- ❓ 추측으로 인한 불확실성이 느껴지나요?

---

### Step 2: Debug 모드로 버그 수정

이제 **Debug 모드**를 사용해봅시다.

#### Debug 모드 활성화

1. Cursor에서 `Cmd+Shift+P` (Mac) 또는 `Ctrl+Shift+P` (Windows)
2. "Debug Mode" 검색
3. Debug 모드 활성화

#### Debug 모드에서 요청

`1-2-calculator-debug.js` 파일을 선택한 후 다음을 요청하세요:

```
1-2-calculator-debug.js를 실행해서 어떤 입력에서 문제가 발생하는지 확인하고 수정해줘
```

**예상 동작**:
- AI가 코드를 **실제로 실행**합니다
- 자동으로 로그를 삽입합니다:

```javascript
function calculate(a, b, operation) {
  console.log('[DEBUG] a:', a);           // 자동 삽입
  console.log('[DEBUG] b:', b);           // 자동 삽입
  console.log('[DEBUG] operation:', operation); // 자동 삽입
  
  let result;
  
  if (operation === 'add') {
    result = a + b;
  } else if (operation === 'subtract') {
    result = a - b;
  } else if (operation === 'multiply') {
    result = a * b;
  } else if (operation === 'divide') {
    console.log('[DEBUG] divide operation'); // 자동 삽입
    result = a / b;
    console.log('[DEBUG] result:', result);  // 자동 삽입
  }
  
  console.log('[DEBUG] final result:', result); // 자동 삽입
  return result;
}
```

- 실행 결과를 보고 **정확히** 문제를 파악합니다:
  - "b가 0일 때 Infinity가 반환됩니다"
  - "modulo 연산이 구현되지 않아 undefined가 반환됩니다"

**결과 확인**:
- ✅ 두 버그를 정확히 찾았나요?
- ✅ 자동 로그 삽입으로 실행 흐름을 추적했나요?
- ✅ 추측이 아닌 확인으로 수정했나요?

---

### Step 3: 결과 비교

두 파일을 비교해보세요:

| 비교 항목 | Agent 모드 (`1-1-calculator-agent.js`) | Debug 모드 (`1-2-calculator-debug.js`) |
|---------|-----------------------------------|-----------------------------------|
| 방식 | 코드를 보고 추측 | 코드를 실제로 실행 |
| 로그 삽입 | 수동 (직접 작성) | 자동 (AI가 삽입) |
| 정확도 | 낮음 (추측) | 높음 (실행 결과) |
| 버그 원인 파악 | 어려움 | 쉬움 |
| 속도 | 느림 | 빠름 |

**체험 포인트**:
- ✅ Debug 모드는 추측이 아닌 **확인**입니다
- ✅ 자동 로그 삽입으로 효율적
- ✅ 실행 결과로 정확한 원인 파악

---

## ✅ 완료 체크리스트

- [ ] `1-1-calculator-agent.js`로 Agent 모드 실습
- [ ] `1-2-calculator-debug.js`로 Debug 모드 실습
- [ ] 두 모드의 차이 체험
- [ ] Debug 모드의 장점 이해
- [ ] 원본 파일(`1-0-calculator-original.js`)은 그대로 유지

---

## 💡 핵심 개념

### 1. Debug 모드의 동작 원리

```
Agent 모드 (일반):
코드 읽기 → 추측 → 수정

Debug 모드:
코드 읽기 → 실행 → 로그 분석 → 정확한 수정
```

### 2. 자동 로그 삽입

Debug 모드는 다음 위치에 자동으로 로그를 삽입합니다:
- 함수 입력 시 (파라미터 값)
- 조건문 분기 시 (어느 분기로 진입했는지)
- 변수 할당 시 (할당된 값)
- 함수 반환 시 (반환 값)

### 3. Debug 모드의 장점

- ✅ **정확도 향상**: 추측이 아닌 실행 결과
- ✅ **효율성**: 자동 로그 삽입
- ✅ **복잡한 버그 해결**: 실행 흐름 추적
- ✅ **학습 효과**: 코드 동작 이해

### 4. 언제 Debug 모드를 사용할까?

**Debug 모드 권장**:
- ❓ 버그 원인을 모르겠을 때
- ❓ 복잡한 로직에서 문제가 발생할 때
- ❓ 특정 입력에서만 문제가 발생할 때
- ❓ 실행 흐름을 추적하고 싶을 때

**Agent 모드로 충분**:
- ✅ 간단한 문법 오류
- ✅ 명확한 버그 (오타 등)
- ✅ 새로운 기능 추가

---

## 🎓 학습 정리

이번 실습에서 배운 내용:

1. **Agent 모드**: 코드를 보고 추측해서 수정
2. **Debug 모드**: 코드를 실행하고 로그를 분석해서 정확히 수정
3. **차이점**: 추측 vs 확인, 수동 vs 자동, 느림 vs 빠름
4. **3개 파일 구조**: 원본 + Agent 실습용 + Debug 실습용

**다음 장 예고**:

2장에서는 Debug 모드를 더 복잡한 시나리오(로그인 버그, API 오류)에서 실습합니다. 실전에서 어떻게 활용하는지 자세히 배웁니다.

---

## 🔗 관련 링크

- [2장: Debug Mode - 실행 기반 디버깅](../../session-02/README.md)
- [Cursor Debug Mode 공식 문서](https://cursor.com/docs/debug-mode)

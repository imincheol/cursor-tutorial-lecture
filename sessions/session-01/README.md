# 1장: Copilot과 Cursor의 비슷한 기능들

> **Copilot에서 사용하던 기능들을 Cursor에서도 그대로 사용할 수 있습니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: 모드 비교](#1부-모드-비교)
- [2부: 지침/규칙 비교](#2부-지침규칙-비교)
- [3부: Rules의 한계](#3부-rules의-한계)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

안녕하세요. Copilot을 사용하시던 분들이 Cursor로 넘어오면 가장 먼저 궁금한 것이 "뭐가 다르지?"입니다.

하지만 먼저 **공통점**부터 확인하겠습니다. 대부분의 기능이 동일하기 때문에, Copilot 경험을 Cursor에서 그대로 활용할 수 있습니다.

**학습 목표**:

- Copilot과 Cursor의 모드 비교 및 이해
- 각 모드의 특징과 사용 시나리오 파악
- Plan 모드의 중요성 인식
- Debug 모드의 차별화된 가치 이해
- 지침(Instructions)과 규칙(Rules)의 동작 방식 이해
- Rules의 한계 인식

---

## 1부: 모드 비교

### Copilot vs Cursor 모드

```
Copilot 모드: Ask, Edit, Agent, Plan
Cursor 모드:  Ask,       Agent, Plan, Debug

→ 대부분 동일하지만, Edit와 Debug에서 차이가 있습니다.
```

### 각 모드 설명

#### 1. Ask 모드

- **기능**: 질문하고 답변 받기
- **사용 시나리오**: 코드 설명, 개념 이해, 빠른 질의응답
- **특징**: 코드를 직접 수정하지 않고, 정보만 제공

```
예시:
Q: "이 함수는 어떻게 동작하나요?"
A: "이 함수는 사용자 인증을 처리합니다..."
```

#### 2. Edit 모드 (Copilot만 제공)

- **기능**: 선택한 코드 영역을 수정
- **특징**: Agent 모드의 하위 버전
- **사용 빈도**: 거의 사용하지 않음 (Agent 모드가 더 강력)

```
Cursor에는 Edit 모드가 없지만, Agent 모드로 동일한 작업을 더 효과적으로 수행할 수 있습니다.
```

#### 3. Agent 모드

- **기능**: 대화하면서 코드 작업 수행
- **사용 시나리오**: 기능 구현, 버그 수정, 리팩토링
- **특징**: 다중 파일 수정, 대화형 작업

```
예시:
"로그인 기능 추가해줘"
→ Agent가 auth.js, login.jsx, routes.js 등 여러 파일을 수정
```

**대부분의 개발자가 Agent 모드를 주로 사용합니다.**

#### 4. Plan 모드 ⭐ (권장!)

- **기능**: 작업 계획을 먼저 세우고, 검토 후 실행
- **사용 시나리오**: 복잡한 기능 구현, 대규모 리팩토링
- **특징**: 사전 계획 → 검토 → 실행의 3단계

```
예시:
"결제 시스템 추가해줘"

Plan 모드 동작:
1. [계획 단계] 
   - PaymentService.js 생성
   - CheckoutPage.jsx 수정
   - API routes 추가
   - 테스트 코드 작성

2. [검토 단계] 
   개발자가 계획을 확인하고 수정 가능

3. [실행 단계] 
   승인된 계획대로 코드 작성
```

**💡 Plan 모드를 사용하는 이유**:

만약 Agent 모드만 사용하고 있다면, **Plan 모드를 한번 사용해보는 것을 권장**합니다.

Plan 모드를 통해 미리 무엇을 작업하고 어떤 것을 수정할지에 대한 것들을 사전에 점검함으로써, 그 후에 진행할 작업들이 올바른 방향으로 가기 전에 한번 계획을 세워볼 수 있다는 것이 장점입니다.

특히 다음과 같은 상황에서 유용합니다:
- 복잡한 기능을 구현할 때
- 여러 파일을 동시에 수정해야 할 때
- 작업 범위가 명확하지 않을 때
- 예상치 못한 부작용을 방지하고 싶을 때

#### 5. Debug 모드 (Cursor만 제공) 🎯

**Copilot과 Cursor의 가장 큰 차이점 중 하나입니다.**

- **기능**: 코드를 실제로 실행하고 로그를 자동 삽입하여 버그 원인 파악
- **사용 시나리오**: 버그 수정, 오류 추적, 동작 검증
- **특징**: 추측이 아닌 실행 기반 디버깅

**일반 모드 vs Debug 모드**:

```javascript
// 일반 모드 (추측 기반)
function login(user, password) {
  const result = authenticate(user, password);
  if (result) {
    redirect("/dashboard");
  }
}
// AI: "아마 여기가 문제일 것 같은데..."
```

```javascript
// Debug 모드 (실행 기반)
function login(user, password) {
  console.log("[DEBUG] user:", user);           // 자동 삽입
  console.log("[DEBUG] password:", password);   // 자동 삽입
  const result = authenticate(user, password);
  console.log("[DEBUG] result:", result);       // 자동 삽입
  if (result) {
    console.log("[DEBUG] redirecting...");      // 자동 삽입
    redirect("/dashboard");
  }
}
// AI: "실행 결과를 보니 result가 undefined입니다!"
```

**Debug 모드의 장점**:

| 비교 항목 | 일반 모드 | Debug 모드 |
|---------|---------|-----------|
| 방식 | 코드를 보고 추측 | 코드를 실제로 실행 |
| 정확도 | 낮음 (추측) | 높음 (실행 결과) |
| 로그 삽입 | 수동 | 자동 |
| 버그 원인 파악 | 어려움 | 쉬움 |

Debug 모드는 2장에서 실습을 통해 더 자세히 다룹니다.

---

## 2부: 지침/규칙 비교

### Copilot의 Instructions vs Cursor의 Rules

Copilot에서는 **지침(Instructions)**이라고 부르고, Cursor에서는 **규칙(Rules)**이라고 통용됩니다.

하지만 기능은 거의 동일합니다.

### IDE에서 추가하는 방법

**Copilot**:
- Settings → GitHub Copilot → Instructions
- 전역 설정 또는 워크스페이스별 설정

**Cursor**:
- Settings → Cursor Settings → Rules
- 전역 설정 또는 프로젝트별 `.cursorrules` 파일

### 코드 상에서 추가하는 방법

**Copilot**:
```
프로젝트 루트:
  .github/
    copilot-instructions.md

폴더별 규칙:
  src/
    .github/
      copilot-instructions.md
```

**Cursor**:
```
프로젝트 루트:
  .cursorrules

폴더별 규칙:
  src/
    .cursorrules
```

**차이점**:
- Copilot: `.github` 폴더 안에 `copilot-instructions.md`
- Cursor: `.cursorrules` 파일 (폴더 없이 바로 생성)

### glob 패턴 지원

**두 환경 모두 glob 패턴으로 파일 타입별 규칙 적용이 가능합니다.**

```markdown
# .cursorrules 예시

# 모든 TypeScript 파일에 적용
**/*.ts:
- 항상 strict 모드 사용
- interface보다 type 사용

# 테스트 파일에만 적용
**/*.test.js:
- describe, it, expect 사용
- 각 테스트는 독립적으로 실행 가능해야 함

# API 관련 파일에만 적용
**/api/**/*.js:
- 항상 에러 핸들링 포함
- 응답은 { success, data, error } 형식
```

**glob 패턴 예시**:
- `**/*.ts` - 모든 TypeScript 파일
- `**/*.test.js` - 모든 테스트 파일
- `**/api/**/*.js` - api 폴더 내 모든 JS 파일
- `src/components/**/*.jsx` - components 폴더 내 모든 JSX 파일

---

## 3부: Rules의 한계

Rules는 본질적으로 **프롬프트**입니다.

```
.cursorrules에 이렇게 작성해도:

- 항상 TypeScript를 사용하세요
- rm -rf 명령은 절대 사용하지 마세요
```

**문제**:

- AI가 가끔 무시합니다
- "요청"일 뿐, "강제"가 아닙니다
- 위험한 명령도 실행될 수 있습니다

**해결책**:

- 3장에서 배울 **Hooks**를 사용하면 100% 강제할 수 있습니다
- Hooks는 프롬프트가 아닌 **코드**로 제어합니다

---

## 🚀 실습 프로젝트

### [Project 1: Rules 간단 실습](./projects/01-rules-simple/README.md)

**학습 내용**:

- `.cursorrules` 파일로 AI 응답 제어
- Rules가 AI의 답변에 어떻게 영향을 주는지 확인
- Rules의 한계 경험

**실습 방식**:

간단한 테스트 파일(`test.js`)과 **3개의 샘플 Rules**를 제공합니다. 샘플 Rules를 복사해서 `.cursorrules` 파일에 붙여넣고, 같은 요청을 반복하면서 Rules가 어떻게 동작하는지 체험합니다.

**제공 파일**:
- `test.js` - 테스트용 간단한 JavaScript 파일
- `sample-rules-1-korean.md` - 한국어 응답 규칙
- `sample-rules-2-style.md` - 코드 스타일 규칙
- `sample-rules-3-strict.md` - 엄격한 규칙 (한계 테스트용)

**실습 예시**:
- 샘플 Rule 1 적용 → 주석과 설명이 한국어로 변경
- 샘플 Rule 2 적용 → JSDoc, 화살표 함수, 세미콜론 사용
- 샘플 Rule 3 적용 → "절대 console.log 사용하지 마세요" → 하지만 무시됨 (한계!)

---

### [Project 2: Debug 모드 간단 체험](./projects/02-debug-simple/README.md)

**학습 내용**:

- Agent 모드(일반)와 Debug 모드의 차이 체험
- Debug 모드의 자동 로그 삽입 확인
- 실행 기반 디버깅의 장점 이해

**실습 방식**:

버그가 있는 간단한 계산기를 **3개의 파일**로 제공합니다:
1. `1-0-calculator-original.js` - 원본 (참고용)
2. `1-1-calculator-agent.js` - Agent 모드 실습용
3. `1-2-calculator-debug.js` - Debug 모드 실습용

파일명의 숫자는 실습 순서를 나타냅니다. 먼저 `1-1-calculator-agent.js`로 **Agent 모드**에서 수정을 시도하고, 그 다음 `1-2-calculator-debug.js`로 **Debug 모드**에서 수정해봅니다. 두 파일을 비교하면서 두 모드의 차이를 직접 체험합니다.

**실습 예시**:
- Agent 모드 (`1-1-calculator-agent.js`): "아마도 이 부분이 문제일 것 같습니다..." (추측)
- Debug 모드 (`1-2-calculator-debug.js`): 자동 로그 삽입 → 실행 → "b가 0일 때 Infinity가 반환됩니다" (확인)

---

## 💡 학습 가이드

### 진행 방법

1. **강의 내용 읽기**

   - 이 README를 읽으면서 Copilot과 Cursor의 모드를 비교합니다
   - Plan 모드의 중요성을 이해합니다
   - Debug 모드의 차별화된 가치를 파악합니다
   - 지침/규칙의 동작 방식을 이해합니다

2. **실습 프로젝트 진행**
   - Project 1: Rules 간단 실습 - 질의응답으로 바로 확인
   - Project 2: Debug 모드 간단 체험 - 일반 모드 vs Debug 모드 비교

### 학습 팁

- Copilot을 사용해보신 분이라면 매우 익숙한 내용입니다
- **Plan 모드를 한 번 사용해보세요** - 작업 효율이 크게 향상됩니다
- **Debug 모드를 직접 체험해보세요** - 추측이 아닌 실행의 차이를 느낄 수 있습니다
- Rules의 한계를 경험하는 것이 중요합니다 (3장 Hooks로 해결)
- 실습은 가볍고 빠르게 진행됩니다

---

## 📊 학습 정리

이번 장에서 다룬 내용:

- ✅ Copilot과 Cursor의 모드 비교 (Ask, Edit, Agent, Plan, Debug)
- ✅ 각 모드의 특징과 사용 시나리오
- ✅ Plan 모드의 중요성 (사전 계획 → 검토 → 실행)
- ✅ Debug 모드의 차별화된 가치 (추측 → 실행 기반)
- ✅ 지침(Instructions)과 규칙(Rules)의 동작 방식
- ✅ Rules 간단 실습 (질의응답으로 바로 확인)
- ✅ Debug 모드 간단 체험 (Agent 모드 vs Debug 모드, 3개 파일로 비교)
- ✅ Rules의 한계 인식 (프롬프트는 강제가 아님)

**다음 장 예고**:

2장에서는 Debug Mode를 더 복잡한 실전 시나리오(로그인 버그, API 오류)에서 실습합니다. 실무에서 어떻게 활용하는지 자세히 배웁니다.

---

## ⏭ 다음 장

[2장: Debug Mode - 실행 기반 디버깅](../session-02/README.md)

---

## 🔗 빠른 링크

- [Project 1: Rules 간단 실습](./projects/01-rules-simple/README.md)
- [Project 2: Debug 모드 간단 체험](./projects/02-debug-simple/README.md)

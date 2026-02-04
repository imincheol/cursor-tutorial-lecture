# 1장: Cursor 모드 이해하기

> **AI와 대화하는 방법 - Ask, Agent, Plan, Debug**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: 기본 모드 (Ask, Agent, Plan)](#1부-기본-모드-ask-agent-plan)
- [2부: Debug 모드 - 실행 기반 디버깅](#2부-debug-모드---실행-기반-디버깅)
- [3부: Debug 모드 실전 활용](#3부-debug-모드-실전-활용)

---

## 📝 강의 개요

Cursor에서 AI와 대화하는 4가지 모드를 학습합니다. 특히 **Debug 모드**는 Cursor만의 차별화된 기능으로, 추측이 아닌 **실행 기반**으로 버그를 해결합니다.

**학습 목표**:

- Cursor의 4가지 모드 이해 (Ask, Agent, Plan, Debug)
- Plan 모드의 중요성 인식
- Debug 모드로 실행 기반 디버깅 체험
- Debug 모드 실전 활용 (로그인 버그, API 오류)
- Cursor IDE의 차별화된 기능 이해

---

## 1부: 기본 모드 (Ask, Agent, Plan)

### Copilot vs Cursor 모드 비교

```
Copilot: Ask, Edit, Agent, Plan
Cursor:  Ask,       Agent, Plan, Debug

→ 대부분 동일. Edit와 Debug에서 차이가 있습니다.
```

### Ask 모드

- **기능**: 질문하고 답변 받기
- **사용 시나리오**: 코드 설명, 개념 이해, 빠른 질의응답
- **특징**: 코드를 직접 수정하지 않고, 정보만 제공

```
예시:
Q: "이 함수는 어떻게 동작하나요?"
A: "이 함수는 사용자 인증을 처리합니다..."
```

### Agent 모드

- **기능**: 대화하면서 코드 작업 수행
- **사용 시나리오**: 기능 구현, 버그 수정, 리팩토링
- **특징**: 다중 파일 수정, 대화형 작업

```
예시:
"로그인 기능 추가해줘"
→ Agent가 auth.js, login.jsx, routes.js 등 여러 파일을 수정
```

**대부분의 개발자가 Agent 모드를 주로 사용합니다.**

### Plan 모드 ⭐ (권장!)

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

Agent 모드만 사용하고 있다면 **Plan 모드를 한번 사용해보세요**. 미리 작업 계획을 검토함으로써 올바른 방향으로 작업을 진행할 수 있습니다.

특히 다음 상황에서 유용합니다:

- 복잡한 기능을 구현할 때
- 여러 파일을 동시에 수정해야 할 때
- 작업 범위가 명확하지 않을 때
- 예상치 못한 부작용을 방지하고 싶을 때

---

## 2부: Debug 모드 - 실행 기반 디버깅

### Debug 모드란? 🎯

**Cursor만의 차별화된 기능입니다.**

Debug 모드는 코드를 **실제로 실행**하고 로그를 자동으로 삽입하여 버그의 정확한 원인을 파악합니다.

### 일반 모드 vs Debug 모드

**일반 모드 (추측 기반)**:

```javascript
function login(user, password) {
  const result = authenticate(user, password);
  if (result) {
    redirect("/dashboard");
  }
}
// AI: "아마 여기가 문제일 것 같은데..."
```

**Debug 모드 (실행 기반)**:

```javascript
function login(user, password) {
  console.log("[DEBUG] user:", user); // 자동 삽입
  console.log("[DEBUG] password:", password); // 자동 삽입
  const result = authenticate(user, password);
  console.log("[DEBUG] result:", result); // 자동 삽입
  if (result) {
    console.log("[DEBUG] redirecting..."); // 자동 삽입
    redirect("/dashboard");
  }
}
// AI: "실행 결과를 보니 result가 undefined입니다!"
```

### Debug 모드의 장점

| 비교 항목      | 일반 모드        | Debug 모드         |
| -------------- | ---------------- | ------------------ |
| 방식           | 코드를 보고 추측 | 코드를 실제로 실행 |
| 정확도         | 낮음 (추측)      | 높음 (실행 결과)   |
| 로그 삽입      | 수동             | 자동               |
| 버그 원인 파악 | 어려움           | 쉬움               |

### Debug 모드 활성화 방법

1. **Cursor Agent 열기**: Cmd/Ctrl + L
2. **모드 선택**: 상단의 모드 드롭다운에서 "Debug" 선택
3. **버그 설명**: "로그인이 작동하지 않습니다"
4. **자동 실행**: Agent가 코드를 실행하고 로그를 삽입하여 분석

### Debug 모드의 핵심 기능

1. **자동 로그 삽입**: 코드의 주요 지점에 console.log 자동 추가
2. **실시간 실행**: 브라우저나 Node.js 환경에서 실제 실행
3. **상태 추적**: 변수 값, 함수 반환값, 조건문 결과 확인
4. **오류 위치 파악**: 정확히 어느 라인에서 문제가 발생하는지 확인

---

## 🚀 실습: Project 1 - Debug 모드 간단 체험

이제 Debug 모드를 직접 체험해봅시다!

### [Project 1: Debug 모드 간단 체험](./projects/01-debug-simple/README.md)

**학습 내용**:

- Agent 모드(일반)와 Debug 모드의 차이 체험
- Debug 모드의 자동 로그 삽입 확인
- 실행 기반 디버깅의 장점 이해

**실습 방식**:

간단한 로그인 폼에서 버그를 찾아 수정합니다. 먼저 **Agent 모드**에서 추측으로 수정을 시도하고, 그 다음 **Debug 모드**에서 실제 실행 결과를 보면서 정확하게 수정합니다.

**제공 파일**:

- `index.html` - 로그인 폼
- `login.js` - 로그인 로직 (버그 포함)

**실습 예시**:

- Agent 모드: "아마도 이 부분이 문제일 것 같습니다..." (추측)
- Debug 모드: 브라우저에서 실행 → 자동 로그 확인 → "password.length > 8이 문제입니다!" (확인)

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-debug-simple/README.md)

---

## 3부: Debug 모드 실전 활용

### Debug 모드 사용 시나리오

| 상황         | 일반 모드                   | Debug 모드                                         |
| ------------ | --------------------------- | -------------------------------------------------- |
| 로그인 실패  | "인증 로직을 확인해보세요"  | 실행 → `result`가 `undefined` 확인                 |
| API 404 오류 | "경로를 확인해보세요"       | 실행 → `/api/user` 호출 확인 → `/api/users`로 수정 |
| 조건문 버그  | "조건이 잘못된 것 같습니다" | 실행 → `password.length > 8`이 항상 false 확인     |
| 비동기 오류  | "Promise를 확인해보세요"    | 실행 → await 누락 확인                             |

### 베스트 프랙티스

✅ **Debug Mode를 사용하면 좋은 경우**:

- 버그의 원인을 정확히 모르는 경우
- 조건문이나 반환값이 예상과 다른 경우
- API 호출이 실패하는 경우
- 비동기 코드에서 문제가 발생하는 경우

❌ **Debug Mode가 불필요한 경우**:

- 문법 오류 (Linter가 더 빠름)
- 간단한 타이포 수정
- 코드 리팩토링 (일반 Agent 모드 사용)

**참고 문서**:

- [Agent 모드 공식 문서](https://cursor.com/docs/agent/modes) - Debug 모드 상세 설명
- [디버깅 가이드](https://cursor.com/for/debugging) - 디버깅 베스트 프랙티스

---

## 🚀 실습: Debug 모드 실전 활용

이제 Debug 모드를 실전 시나리오에서 활용해봅시다!

### [Project 2: Debug Mode로 로그인 버그 해결](./projects/02-debug-login-bug/README.md)

**학습 내용**:

- Debug Mode 활성화 방법 익히기
- 자동 로그 삽입으로 버그 원인 파악
- 추측이 아닌 실행으로 버그 해결

**제공 파일**:

- `index.html` - 로그인 페이지
- `login.js` - 로그인 로직 (버그 있음)
- `auth.js` - 인증 함수 (버그 있음)

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-debug-login-bug/README.md)

---

### [Project 3: Debug Mode로 API 오류 추적](./projects/03-debug-api-error/README.md)

**학습 내용**:

- API 호출 오류를 Debug Mode로 추적
- 네트워크 요청/응답 디버깅
- 404 오류 원인 정확히 파악

**제공 파일**:

- `index.html` - 사용자 목록 페이지
- `api.js` - API 호출 로직 (버그 있음)
- `server.js` - 간단한 테스트 서버 (선택)

💡 **지금 바로 실습해보세요!** [Project 3 실습 가이드](./projects/03-debug-api-error/README.md)

---

## 📊 학습 정리

**1부: 기본 모드**

- ✅ Ask, Agent, Plan 모드 이해
- ✅ Plan 모드의 중요성 (사전 계획 → 검토 → 실행)

**2부: Debug 모드**

- ✅ Debug 모드의 차별화된 가치 (추측 → 실행 기반)
- ✅ 일반 모드 vs Debug 모드 비교
- ✅ **실습 1**: Debug 모드 간단 체험

**3부: 실전 활용**

- ✅ Debug 모드 사용 시나리오
- ✅ 베스트 프랙티스
- ✅ **실습 2, 3**: 로그인 버그, API 오류 추적

**다음 장 예고**:

2장에서는 **Cursor IDE의 차별화 기능**을 배웁니다. Clarification Questions, Agent Review, Past Chat, Git Worktree 등 Cursor만의 강력한 기능들을 체험합니다.

---

## ⏭ 다음 장

[2장: Cursor IDE 차별화 기능](../session-02-differentiators/README.md)

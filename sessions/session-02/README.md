# 2교시: Debug Mode & Visual Editor

> **버그 해결과 UI 수정을 더 빠르고 정확하게**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Debug Mode](#1부-debug-mode)
- [2부: Visual Editor](#2부-visual-editor)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

1교시에서 Hooks를 통한 Agent 제어를 배웠습니다. 이번 교시에서는 Cursor의 추가 기능인 Debug Mode와 Visual Editor를 살펴봅니다.

**학습 목표**:

- Debug Mode로 버그 원인 정확히 파악하기
- Visual Editor로 UI 직접 선택해서 수정하기

---

## 1부: Debug Mode

### 기존 방식의 문제점

일반적으로 버그를 수정할 때:

1. AI에게 버그 수정 요청
2. AI가 코드를 보고 **추측**해서 수정
3. 추측이 틀리면 반복

이 방식은 시간이 오래 걸리고 정확도가 낮습니다.

### Debug Mode 소개

Debug Mode는 **추측 대신 실제 실행**으로 버그를 찾습니다.

### Debug Mode의 동작

```javascript
// Agent가 자동으로 로그를 삽입한다!

// Before
function login(user, password) {
  const result = authenticate(user, password);
  if (result) {
    redirect("/dashboard");
  }
}

// Debug Mode 활성화 후
function login(user, password) {
  console.log("[DEBUG] user:", user);
  console.log("[DEBUG] password:", password);
  const result = authenticate(user, password);
  console.log("[DEBUG] result:", result);
  if (result) {
    console.log("[DEBUG] redirecting...");
    redirect("/dashboard");
  }
}
```

### 실행 결과

```
[DEBUG] user: "john"
[DEBUG] password: "1234"
[DEBUG] result: undefined  ← 문제 발견!

"아! authenticate 함수가 undefined를 반환하고 있었구나!"
```

### 핵심 차이

- **기존 방식**: 코드 보고 추측
- **Debug Mode**: 실제 실행해서 확인

실행 결과를 직접 확인하므로 정확도가 높고 빠릅니다.

| 방식       | Copilot        | Cursor Debug Mode |
| ---------- | -------------- | ----------------- |
| **접근**   | 코드 보고 추측 | 실행해서 확인     |
| **정확도** | 낮음           | 높음              |
| **반복**   | 여러 번        | 한 번             |
| **시간**   | 오래 걸림      | 빠름              |

---

## 2부: Visual Editor

### 기존 방식의 문제점

UI를 수정할 때:

1. 말로 요소 설명 ("왼쪽 위 파란 버튼")
2. AI가 추측해서 수정
3. 틀리면 다시 설명 반복

소통 비용이 크고 정확도가 낮습니다.

### Visual Editor 소개

Visual Editor는 **클릭으로 요소를 선택**합니다.

### Visual Editor의 동작

```
Step 1: Visual Editor 모드 활성화
Step 2: 브라우저에서 버튼 클릭 (직접 선택!)
Step 3: "이거 파란색으로 바꿔줘"
Step 4: 즉시 수정!

"와, 말로 설명 안 해도 되네!"
```

### 핵심 차이

- **기존 방식**: 말로 설명 → 추측 → 수정
- **Visual Editor**: 클릭으로 선택 → 정확한 수정

말로 설명할 필요 없이 직접 선택하므로 빠르고 정확합니다.

| 방식       | Copilot   | Cursor Visual Editor |
| ---------- | --------- | -------------------- |
| **선택**   | 말로 설명 | 클릭으로 선택        |
| **정확도** | 추측 필요 | 정확함               |
| **소통**   | 여러 번   | 한 번                |
| **시간**   | 오래 걸림 | 빠름                 |

---

## 📊 학습 정리

이 교시에서 다룬 내용:

- ✅ Debug Mode로 버그 원인 정확히 파악
- ✅ Visual Editor로 UI 직접 선택해서 수정
- ✅ 추측 대신 확인, 설명 대신 클릭

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: Debug Mode - 로그인 버그](./projects/01-debug-login-bug/README.md)

**스토리 위치**: 2장 - Debug Mode 발견

**상황**:

```
로그인 버튼을 클릭해도 아무 반응이 없다.
콘솔에 에러도 없다.
"뭐가 문제지?"

Debug Mode를 켜봤다.
```

**배울 것**:

- Debug Mode 활성화
- 자동 로그 삽입
- 실제 값 확인

**깨달음**: "추측 안 해도 되네! 바로 보이네!"

**소요 시간**: 10분

---

### [Project 2: Debug Mode - API 에러](./projects/02-debug-api-error/README.md)

**스토리 위치**: 2장 - Debug Mode 활용

**상황**:

```
사용자 목록이 안 나온다.
네트워크 탭에서 404 에러.
"어디서 잘못된 거지?"

Debug Mode로 추적해봤다.
```

**배울 것**:

- API 호출 추적
- 요청/응답 데이터 확인
- 에러 원인 파악

**깨달음**: "API 문제도 바로 찾을 수 있네!"

**소요 시간**: 10분

---

### [Project 3: Visual Editor - 버튼 스타일](./projects/03-visual-button-style/README.md)

**스토리 위치**: 3장 - Visual Editor 발견

**상황**:

```
"이 버튼 색상 바꿔주세요"
"어떤 버튼이요?"
"저기... 그 버튼이요"

Visual Editor를 켜봤다.
버튼을 클릭했다.
```

**배울 것**:

- Visual Editor 모드 활성화
- 요소 클릭으로 선택
- 정확한 수정 요청

**깨달음**: "말로 설명 안 해도 되네! 그냥 클릭하면 되네!"

**소요 시간**: 10분

---

### [Project 4: Visual Editor - 카드 레이아웃](./projects/04-visual-card-layout/README.md)

**스토리 위치**: 3장 - Visual Editor 활용

**상황**:

```
카드 레이아웃을 바꿔야 한다.
그리드에서 플렉스로.
반응형도 적용해야 한다.

복잡한 UI 작업이다.
Visual Editor로 해봤다.
```

**배울 것**:

- 복잡한 레이아웃 선택
- 여러 요소 동시 수정
- 반응형 디자인 적용

**깨달음**: "복잡한 UI 작업도 쉽게 되네!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 스토리 이해 (10분)

이 README를 읽으면서:

1. 1교시 복습 (Hooks)
2. Debug Mode의 가치 이해
3. Visual Editor의 가치 이해

### Step 2: Debug Mode 실습 (20분)

1. **[Project 1: 로그인 버그](./projects/01-debug-login-bug/README.md)** (10분)

   - "추측 안 해도 되네!"

2. **[Project 2: API 에러](./projects/02-debug-api-error/README.md)** (10분)
   - "API 문제도 바로 찾네!"

### Step 3: Visual Editor 실습 (30분)

1. **[Project 3: 버튼 스타일](./projects/03-visual-button-style/README.md)** (10분)

   - "클릭만 하면 되네!"

2. **[Project 4: 카드 레이아웃](./projects/04-visual-card-layout/README.md)** (20분)
   - "복잡한 것도 쉽네!"

---

## 🎓 다음 교시 안내

2교시에서는 Debug Mode와 Visual Editor를 배웠습니다.

3교시에서는 IDE를 벗어나 터미널에서 개발하는 방법을 살펴보겠습니다:

- CLI Agent로 터미널에서 Agent 사용하기
- SSH, CI/CD 환경에서 활용하기

---

## ⏭ 다음 교시

[3교시: 세 번째 발견 - IDE를 넘어서](../session-03/README.md)

---

## 🔗 빠른 링크

- [Project 1: Debug Mode - 로그인 버그](./projects/01-debug-login-bug/README.md)
- [Project 2: Debug Mode - API 에러](./projects/02-debug-api-error/README.md)
- [Project 3: Visual Editor - 버튼 스타일](./projects/03-visual-button-style/README.md)
- [Project 4: Visual Editor - 카드 레이아웃](./projects/04-visual-card-layout/README.md)

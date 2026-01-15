# 2교시: Debug Mode & Visual Editor - Cursor의 다채로운 기능

## 📋 목차

- [1교시 복습](#1교시-복습)
- [Hooks 말고도 더 있다](#hooks-말고도-더-있다)
- [Debug Mode](#debug-mode)
- [Visual Editor](#visual-editor)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 1교시 복습

### 배운 것

```
Copilot vs Cursor:
- 95% 동일 (Agent, Plan, Rules, Commands, MCP, CLI/Shell)
- 5% 차이: Hooks (Cursor만!)

Hooks의 강력함:
- 코드 레벨 제어
- 100% 강제 차단
- 리뷰 시간 70% 단축
```

### 질문

**"Hooks 말고 Cursor만의 기능이 더 있나요?"**

**답: 네, 더 있습니다!**

---

## 🎨 Hooks 말고도 더 있다

### Cursor만의 기능들

```
1교시: Hooks (Agent 제어)
  ↓
2교시: Debug Mode, Visual Editor (이번 시간!)
  ↓
3교시: CLI Agent Mode (IDE 없이 개발)
  ↓
4교시: Multi-Agent, Worktree
```

### 이번 시간에 배울 것

| 기능 | 설명 | Copilot |
|------|------|---------|
| **Debug Mode** | 자동 로그 삽입 | ❌ 없음 |
| **Visual Editor** | 브라우저에서 UI 직접 편집 | ❌ 없음 |

---

## 🐛 Debug Mode

### 기존 디버깅의 문제

**Copilot 방식**:
```
당신: "이 버그 좀 고쳐줘"
Copilot: [코드 보고 추측해서 수정]

결과:
→ 추측이 맞으면 해결
→ 추측이 틀리면 여전히 버그
→ 반복 반복 반복...
```

### Debug Mode의 차이

**Cursor 방식**:
```
당신: "이 버그 좀 고쳐줘"
Cursor: [자동으로 로그 삽입]
Cursor: [실제 실행]
Cursor: [실제 값 확인]
Cursor: [정확한 원인 파악]
Cursor: [정확한 수정]

결과:
→ 추측 아닌 실제 데이터 기반
→ 한 번에 해결 가능성 높음
```

### 동작 원리

```javascript
// Before: 버그 있는 코드
function login(user, password) {
  const result = authenticate(user, password);
  if (result) {
    redirect('/dashboard');
  }
}

// Debug Mode 활성화 후:
// Cursor가 자동으로 로그 삽입
function login(user, password) {
  console.log('[DEBUG] user:', user);
  console.log('[DEBUG] password:', password);
  const result = authenticate(user, password);
  console.log('[DEBUG] result:', result);
  if (result) {
    console.log('[DEBUG] redirecting...');
    redirect('/dashboard');
  }
}

// 실행 결과:
// [DEBUG] user: "john"
// [DEBUG] password: "1234"
// [DEBUG] result: undefined  ← 문제 발견!
```

### 추측 vs 확인

| 방식 | Copilot | Cursor Debug Mode |
|------|---------|-------------------|
| **접근** | 코드 보고 추측 | 실행해서 확인 |
| **정확도** | 낮음 | 높음 |
| **반복** | 여러 번 | 한 번 |
| **시간** | 오래 걸림 | 빠름 |

---

## 🎨 Visual Editor

### 기존 UI 수정의 문제

**Copilot 방식**:
```
당신: "이 버튼 색상을 파란색으로 바꿔줘"
Copilot: [어떤 버튼인지 추측]
Copilot: [CSS 수정 제안]

당신: "아니 그 버튼 말고..."
당신: "여기 있는 버튼..."
당신: "클래스명이 뭐더라..."

결과:
→ 소통 비용 발생
→ 여러 번 수정
→ 시간 낭비
```

### Visual Editor의 차이

**Cursor 방식**:
```
1. 브라우저에서 버튼 클릭 (직접 선택!)
2. "이거 파란색으로 바꿔줘"
3. 즉시 수정

결과:
→ 소통 비용 없음
→ 한 번에 수정
→ 시간 절약
```

### 동작 원리

```
Step 1: Visual Editor 모드 활성화
Step 2: 브라우저에서 요소 클릭
Step 3: 선택된 요소 정보 자동 파악
  - HTML 위치
  - CSS 클래스
  - 현재 스타일
Step 4: Agent에게 요청
Step 5: 정확한 수정
```

### 말로 설명 vs 직접 선택

| 방식 | Copilot | Cursor Visual Editor |
|------|---------|---------------------|
| **선택** | 말로 설명 | 클릭으로 선택 |
| **정확도** | 추측 필요 | 정확함 |
| **소통** | 여러 번 | 한 번 |
| **시간** | 오래 걸림 | 빠름 |

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] Debug Mode로 버그 원인 정확히 파악
- [ ] Visual Editor로 UI 직접 선택해서 수정
- [ ] 버그 해결 시간 50% 단축
- [ ] UI 수정 시간 70% 단축

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: Debug Mode - 로그인 버그](./projects/01-debug-login-bug/README.md)
**목표**: Debug Mode로 로그인 버그 해결

**시나리오**:
- 로그인 버튼 클릭해도 아무 반응 없음
- 콘솔에 에러 없음
- 뭐가 문제지?

**배울 것**:
- Debug Mode 활성화
- 자동 로그 삽입
- 실제 값 확인으로 버그 원인 파악

**깨달음**: "추측 안 해도 되네! 바로 보이네!"

**소요 시간**: 10분

---

### [Project 2: Debug Mode - API 에러](./projects/02-debug-api-error/README.md)
**목표**: Debug Mode로 API 에러 디버깅

**시나리오**:
- 사용자 목록이 안 나옴
- 네트워크 탭에서 404 에러
- 어디서 잘못됐지?

**배울 것**:
- API 호출 추적
- 요청/응답 데이터 확인
- 에러 처리 개선

**깨달음**: "API 문제도 바로 찾을 수 있네!"

**소요 시간**: 10분

---

### [Project 3: Visual Editor - 버튼 스타일](./projects/03-visual-button-style/README.md)
**목표**: Visual Editor로 버튼 스타일 수정

**시나리오**:
- 버튼 색상 변경 요청
- "어떤 버튼이요?" 소통 비용 발생
- 클래스명 찾느라 시간 낭비

**배울 것**:
- Visual Editor 모드 활성화
- 요소 클릭으로 선택
- 정확한 수정 요청

**깨달음**: "말로 설명 안 해도 되네! 그냥 클릭하면 되네!"

**소요 시간**: 10분

---

### [Project 4: Visual Editor - 카드 레이아웃](./projects/04-visual-card-layout/README.md)
**목표**: Visual Editor로 카드 레이아웃 조정

**시나리오**:
- 카드 레이아웃 변경 요청
- 그리드 → 플렉스
- 반응형 적용

**배울 것**:
- 복잡한 레이아웃 선택
- 여러 요소 동시 수정
- 반응형 디자인 적용

**깨달음**: "복잡한 UI 작업도 쉽게 되네!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 개념 이해 (10분)

이 README를 읽으면서:
1. Debug Mode의 강력함 이해
2. Visual Editor의 편리함 이해

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

### Step 4: 복습 (10분)

- [ ] Debug Mode 활용 가능?
- [ ] Visual Editor 사용 가능?

---

## 💡 핵심 깨달음

### 2교시에서 배운 것

```
Cursor만의 기능들:
- Hooks (1교시): Agent 제어
- Debug Mode: 추측 → 확인
- Visual Editor: 설명 → 클릭

Copilot에는 없는 기능들!
```

### 효과

```
Before (Copilot):
- 버그: 추측 → 수정 → 실패 → 반복
- UI: 설명 → 오해 → 재설명 → 반복

After (Cursor):
- 버그: 확인 → 수정 → 완료
- UI: 클릭 → 수정 → 완료
```

---

## ⏭ 다음 교시

[3교시: CLI Agent - IDE를 넘어서](../session-03/README.md)

**2교시를 완료하면 Cursor의 다채로운 기능을 체험할 수 있습니다!** 🎉

---

## 🔗 빠른 링크

- [Project 1: Debug Mode - 로그인 버그](./projects/01-debug-login-bug/README.md)
- [Project 2: Debug Mode - API 에러](./projects/02-debug-api-error/README.md)
- [Project 3: Visual Editor - 버튼 스타일](./projects/03-visual-button-style/README.md)
- [Project 4: Visual Editor - 카드 레이아웃](./projects/04-visual-card-layout/README.md)

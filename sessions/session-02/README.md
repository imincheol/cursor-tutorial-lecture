# 2교시: 두 번째 발견 - 다채로운 기능

> **"Hooks 말고도 더 있어?"**

## 📋 목차

- [지난 시간 복습](#지난-시간-복습)
- [1장: 새로운 궁금증](#1장-새로운-궁금증)
- [2장: Debug Mode의 발견](#2장-debug-mode의-발견)
- [3장: Visual Editor의 발견](#3장-visual-editor의-발견)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 지난 시간 복습

### 1교시에서 일어난 일

```
Copilot에서 Cursor로 왔다.
"어? 거의 똑같네?"

그런데 Hooks를 발견했다.
"이건 Copilot에 없는데?"

Rules는 프롬프트라서 안 지킬 수 있다.
Hooks는 코드라서 100% 강제된다.

"이게 Cursor로 온 이유구나!"
```

### 핵심 깨달음

```
Copilot ≈ Cursor (대부분 동일)
차이점: Hooks (Cursor만 있음)
```

---

## 📖 1장: 새로운 궁금증

### Hooks 이후의 생각

```
Hooks를 배웠다.
리뷰 시간이 70% 줄었다.
위험한 작업도 100% 차단된다.

그런데 문득 궁금해졌다.
"Hooks 말고 또 뭐가 있지?"
"Cursor에만 있는 기능이 더 있을까?"
```

### Settings를 뒤져보다

```
Cursor의 Settings를 열어봤다.
뭔가 더 있을 것 같았다.

"Debug Mode? 이건 뭐지?"
"Visual Editor? 이것도 처음 보는데?"
```

---

## 📖 2장: Debug Mode의 발견

### 버그를 만났을 때

```
로그인 기능에 버그가 있었다.
버튼을 클릭해도 아무 반응이 없다.
콘솔에 에러도 없다.

"뭐가 문제지?"
```

### Copilot 방식 (기존)

```
당신: "이 버그 좀 고쳐줘"
Copilot: [코드를 보고 추측해서 수정]

결과:
→ 추측이 맞으면 해결
→ 추측이 틀리면 여전히 버그
→ 반복...

"또 추측이야?"
"실제로 뭐가 문제인지 알 수 없나?"
```

### Debug Mode 발견

```
Cursor에 Debug Mode가 있다는 걸 알았다.
"이게 뭘까? 한번 써보자."

Debug Mode를 켰다.
```

### Debug Mode의 동작

```javascript
// Agent가 자동으로 로그를 삽입한다!

// Before
function login(user, password) {
  const result = authenticate(user, password);
  if (result) {
    redirect('/dashboard');
  }
}

// Debug Mode 활성화 후
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
```

### 실행 결과

```
[DEBUG] user: "john"
[DEBUG] password: "1234"
[DEBUG] result: undefined  ← 문제 발견!

"아! authenticate 함수가 undefined를 반환하고 있었구나!"
```

### 깨달음

```
Copilot: 코드 보고 추측
Cursor Debug Mode: 실제 실행해서 확인

추측 vs 확인
"이건 완전 다른 접근이네!"
```

| 방식 | Copilot | Cursor Debug Mode |
|------|---------|-------------------|
| **접근** | 코드 보고 추측 | 실행해서 확인 |
| **정확도** | 낮음 | 높음 |
| **반복** | 여러 번 | 한 번 |
| **시간** | 오래 걸림 | 빠름 |

---

## 📖 3장: Visual Editor의 발견

### UI 수정 요청

```
디자이너가 말했다.
"이 버튼 색상 파란색으로 바꿔주세요."

"어떤 버튼이요?"
"저기... 그 버튼이요."
"클래스명이 뭐죠?"
"몰라요, 그냥 저기 있는 버튼이요."
```

### Copilot 방식 (기존)

```
당신: "파란색 버튼으로 바꿔줘"
Copilot: [어떤 버튼인지 추측]
Copilot: [CSS 수정]

당신: "아니 그 버튼 말고..."
당신: "여기 있는 버튼..."
당신: "클래스명이 뭐더라..."

소통 비용이 엄청났다.
```

### Visual Editor 발견

```
Cursor에 Visual Editor가 있다는 걸 알았다.
"이건 또 뭘까?"

Visual Editor를 켰다.
```

### Visual Editor의 동작

```
Step 1: Visual Editor 모드 활성화
Step 2: 브라우저에서 버튼 클릭 (직접 선택!)
Step 3: "이거 파란색으로 바꿔줘"
Step 4: 즉시 수정!

"와, 말로 설명 안 해도 되네!"
```

### 깨달음

```
Copilot: 말로 설명 → 추측 → 수정
Cursor Visual Editor: 클릭으로 선택 → 정확한 수정

설명 vs 클릭
"소통 비용이 완전히 사라졌어!"
```

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

## 💡 에필로그: 두 번째 발견을 마치며

### 2교시에서 배운 것

```
Hooks만 있는 줄 알았다.

Debug Mode 발견:
  "추측 대신 확인이 가능하다!"
  → 버그 해결 50% 빨라짐

Visual Editor 발견:
  "설명 대신 클릭이 가능하다!"
  → UI 수정 70% 빨라짐

Cursor가 점점 좋아지고 있다.
```

### Cursor 전용 기능 (지금까지)

```
1교시: Hooks (Agent 제어)
2교시: Debug Mode (추측 → 확인)
       Visual Editor (설명 → 클릭)

"Copilot에는 없는 것들!"
```

### 다음 질문

```
"Hooks, Debug Mode, Visual Editor..."
"다 IDE 안에서의 기능이네?"
"IDE 밖에서는 못 쓰나?"

3교시에서 계속...
```

---

## ⏭ 다음 교시

[3교시: 세 번째 발견 - IDE를 넘어서](../session-03/README.md)

---

## 🔗 빠른 링크

- [Project 1: Debug Mode - 로그인 버그](./projects/01-debug-login-bug/README.md)
- [Project 2: Debug Mode - API 에러](./projects/02-debug-api-error/README.md)
- [Project 3: Visual Editor - 버튼 스타일](./projects/03-visual-button-style/README.md)
- [Project 4: Visual Editor - 카드 레이아웃](./projects/04-visual-card-layout/README.md)

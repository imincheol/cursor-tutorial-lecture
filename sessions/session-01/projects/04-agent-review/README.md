# Project 4: Agent Review 실습

> **AI 코드 리뷰로 버그를 찾고 수정하기**

## 🎯 학습 목표

- [ ] Agent Review 탭 사용법 익히기
- [ ] AI 코드 리뷰 피드백 활용하기
- [ ] 다양한 버그 유형 수정 (로직, 보안, 성능, 비동기, 스타일, 접근성)

---

## 📁 프로젝트 파일

이 폴더에는 6개의 파일이 준비되어 있습니다:

1. **`demo.js`** - 데모: 로직 에러 (상세 가이드)
2. **`practice-01.js`** - 실습 1: 보안 이슈 (SQL Injection)
3. **`practice-02.html`** - 실습 2: 성능 문제
4. **`practice-03.js`** - 실습 3: 비동기 처리 실수
5. **`practice-04.css`** - 실습 4: 스타일 문제
6. **`practice-05.html`** - 실습 5: 마크업 접근성

---

## 🔍 Agent Review 탭이란?

Cursor IDE의 Git 소스 관리 패널에 통합된 AI 코드 리뷰 기능입니다.

```
소스 제어 패널:
├── Changes (변경사항)
├── Commits (커밋)
└── Agent Review ⭐ (AI 코드 리뷰)
```

### 사용 방법

1. 코드 수정 후 Git 패널 열기 (Cmd/Ctrl + Shift + G)
2. "Agent Review" 탭 클릭
3. AI가 변경사항 분석 후 피드백 제공
4. 피드백에 따라 코드 수정

---

## 🚀 데모: 로직 에러 수정

### Step 1: 파일 열기

`demo.js` 파일을 열어보세요. 사용자 검증 함수가 있습니다.

```javascript
function validateUser(user) {
  if (!user) {
    return { valid: false, error: '사용자 정보가 없습니다' };
  }

  if (!user.name || !user.email) {
    return { valid: false, error: '이름과 이메일은 필수입니다' };
  }

  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) {
    return { valid: false, error: '이메일 형식이 올바르지 않습니다' };
  }

  return { valid: true };
}
```

### Step 2: AI에게 버그 있는 코드 추가 요청

Cursor Agent에게 다음과 같이 요청하세요:

```
이 코드에 사용자 나이 검증을 추가해줘. 
나이는 18세 이상이어야 하고, 120세 이하여야 해.
```

**예상 결과**: AI가 다음과 같은 버그 있는 코드를 생성할 수 있습니다:

```javascript
// 버그 1: age가 없을 때 체크 누락
if (user.age > 18 && user.age < 120) {  // >= 18이어야 함
  return { valid: false, error: '나이는 18세 이상이어야 합니다' };
}

// 버그 2: 조건문 로직 오류
// 버그 3: 변수명 오타 가능성
```

### Step 3: Agent Review로 리뷰 요청

1. Git 패널 열기 (Cmd/Ctrl + Shift + G)
2. "Agent Review" 탭 클릭
3. AI 피드백 확인:

```
🔍 Agent Review 피드백:

1. [로직 오류] 나이 검증 조건이 잘못되었습니다
   - 현재: user.age > 18
   - 수정: user.age >= 18
   - 18세는 포함되어야 합니다

2. [Null 체크 누락] user.age가 undefined일 수 있습니다
   - user.age를 사용하기 전에 체크가 필요합니다
   
3. [조건문 로직] 나이 범위 체크 로직이 반대입니다
   - 현재: 범위 내일 때 에러 반환
   - 수정: 범위 밖일 때 에러 반환
```

### Step 4: 피드백에 따라 수정

AI 피드백을 참고하여 하나씩 수정합니다:

```javascript
function validateUser(user) {
  if (!user) {
    return { valid: false, error: '사용자 정보가 없습니다' };
  }

  if (!user.name || !user.email) {
    return { valid: false, error: '이름과 이메일은 필수입니다' };
  }

  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) {
    return { valid: false, error: '이메일 형식이 올바르지 않습니다' };
  }

  // 나이 검증 (수정됨)
  if (user.age === undefined || user.age === null) {
    return { valid: false, error: '나이는 필수입니다' };
  }

  if (user.age < 18 || user.age > 120) {  // 수정됨
    return { valid: false, error: '나이는 18세 이상 120세 이하여야 합니다' };
  }

  return { valid: true };
}
```

---

## 💪 실습 1: 보안 이슈 (SQL Injection)

### 파일: `practice-01.js`

**목표**: SQL Injection 취약점 찾기

### 실습 단계:

1. `practice-01.js` 파일 열기
2. AI에게 요청:
   ```
   이 QueryBuilder에 사용자 검색 기능을 추가해줘.
   이름으로 검색할 수 있어야 해.
   ```
3. AI가 코드 생성 후 Agent Review 실행
4. SQL Injection 취약점 피드백 확인
5. Prepared Statement 또는 파라미터 바인딩으로 수정

**힌트**: 문자열 연결 대신 파라미터화된 쿼리를 사용하세요.

---

## 💪 실습 2: 성능 문제

### 파일: `practice-02.html`

**목표**: 렌더링 성능 문제 찾기

### 실습 단계:

1. `practice-02.html` 파일 열기
2. AI에게 요청:
   ```
   이 코드를 수정해서 1000개 아이템을 렌더링하도록 해줘.
   각 아이템에 클릭 이벤트도 추가해줘.
   ```
3. AI가 코드 생성 후 Agent Review 실행
4. 성능 문제 피드백 확인:
   - 불필요한 DOM 조작
   - 이벤트 리스너 중복 생성
   - 메모리 누수 가능성
5. DocumentFragment, 이벤트 위임 등으로 최적화

**힌트**: 이벤트 위임(Event Delegation)을 사용하세요.

---

## 💪 실습 3: 비동기 처리 실수

### 파일: `practice-03.js`

**목표**: await 누락, Promise 체이닝 실수 찾기

### 실습 단계:

1. `practice-03.js` 파일 열기
2. AI에게 요청:
   ```
   이 함수들을 순차적으로 호출하도록 수정해줘.
   사용자 데이터를 먼저 가져온 다음, 그 사용자의 게시글과 댓글을 가져와야 해.
   ```
3. AI가 코드 생성 후 Agent Review 실행
4. 비동기 처리 문제 피드백 확인:
   - await 누락
   - Promise가 제대로 반환되지 않음
   - 에러 처리 부족
5. async/await 제대로 사용하여 수정

**힌트**: 모든 비동기 함수 호출에 await를 추가하세요.

---

## 💪 실습 4: 스타일 문제

### 파일: `practice-04.css`

**목표**: 반응형 스타일 문제 찾기

### 실습 단계:

1. `practice-04.css` 파일 열기
2. AI에게 요청:
   ```
   모바일 화면(480px 이하)에서도 잘 보이도록 스타일을 추가해줘.
   ```
3. AI가 코드 생성 후 Agent Review 실행
4. 스타일 문제 피드백 확인:
   - 미디어 쿼리 중복
   - 불필요한 !important
   - 반응형 단위 미사용
5. 모범 사례에 따라 수정

**힌트**: rem, em 등 상대 단위를 사용하세요.

---

## 💪 실습 5: 마크업 접근성

### 파일: `practice-05.html`

**목표**: 웹 접근성 문제 찾기

### 실습 단계:

1. `practice-05.html` 파일 열기
2. AI에게 요청:
   ```
   이 폼에 전화번호 입력 필드를 추가해줘.
   ```
3. AI가 코드 생성 후 Agent Review 실행
4. 접근성 문제 피드백 확인:
   - label 태그 누락
   - ARIA 속성 부족
   - 키보드 네비게이션 문제
5. 접근성 개선

**힌트**: 모든 input에 label을 연결하고, ARIA 속성을 추가하세요.

---

## 🎓 학습 정리

이번 실습에서 배운 것:

1. **Agent Review 탭 사용법**
   - Git 패널에서 Agent Review 탭 찾기
   - AI 피드백 읽고 이해하기

2. **다양한 버그 유형**
   - 로직 에러: 조건문, null 체크
   - 보안 이슈: SQL Injection
   - 성능 문제: DOM 조작, 이벤트 리스너
   - 비동기 처리: await 누락
   - 스타일 문제: 반응형, 단위
   - 접근성: label, ARIA

3. **AI 피드백 활용**
   - 피드백을 참고하여 코드 개선
   - 모범 사례 학습

**다음 단계**:

Project 5에서는 **Past Chat 참조** 기능을 실습합니다!

---

## 💡 추가 팁

### Agent Review를 효과적으로 사용하는 방법:

1. **작은 단위로 커밋**: 한 번에 너무 많은 변경사항을 리뷰하지 마세요
2. **피드백 우선순위**: 보안 > 버그 > 성능 > 스타일 순으로 수정
3. **반복 학습**: 같은 피드백이 반복되면 패턴을 기억하세요
4. **커밋 전 필수**: 커밋하기 전에 항상 Agent Review 실행

### 일반적인 피드백 유형:

- 🔒 보안: SQL Injection, XSS, 민감 정보 노출
- 🐛 버그: Null 체크, 조건문 로직, 타입 오류
- ⚡ 성능: 불필요한 반복, 메모리 누수, DOM 조작
- 🎨 스타일: 네이밍, 일관성, 가독성
- ♿ 접근성: label, ARIA, 키보드 네비게이션

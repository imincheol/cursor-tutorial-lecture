# Project 1: Debug 모드 간단 체험

> **추측이 아닌 실행으로 버그를 찾는 Debug 모드 경험하기**

## 🎯 학습 목표

- [ ] Agent 모드(일반)와 Debug 모드의 차이 체험
- [ ] Debug 모드의 자동 로그 삽입 확인
- [ ] 실행 기반 디버깅의 장점 이해

---

## 📁 프로젝트 파일

이 폴더에는 2개의 파일이 준비되어 있습니다:

1. **`index.html`** - 로그인 폼 (브라우저에서 열기)
2. **`login.js`** - 로그인 로직 (버그 포함)

---

## 🐛 버그 상황

로그인 폼에서 비밀번호를 정확히 8자로 입력해도 "비밀번호가 너무 짧습니다"라는 오류가 발생합니다.

```javascript
// login.js
function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username && password) {
    // 버그: 비밀번호 길이 체크 로직 오류
    if (password.length > 8) {  // >= 8이어야 함
      showMessage('로그인 성공!', 'success');
    } else {
      showMessage('비밀번호가 너무 짧습니다...', 'error');
    }
  }
}
```

**문제**: 8자를 입력해도 오류가 나는 이유가 무엇일까요?

---

## 🚀 실습 단계

### Step 1: 브라우저에서 열기

1. `index.html` 파일을 브라우저에서 열기
2. 로그인 폼이 보이는지 확인
3. 테스트해보기:
   - 사용자명: `admin`
   - 비밀번호: `12345678` (정확히 8자)
   - 결과: "비밀번호가 너무 짧습니다" 오류 발생! 🐛

---

### Step 2: Agent 모드로 시도

Cursor Agent에게 다음과 같이 요청하세요:

```
login.js 파일을 봐줘. 
비밀번호를 8자로 입력해도 "비밀번호가 너무 짧습니다"라고 나와. 
버그를 찾아서 수정해줘.
```

**예상 결과**:
- Agent가 코드를 보고 추측: "아마 `password.length > 8`이 문제일 것 같습니다"
- 정확한 원인을 찾았지만, **추측**에 의존함

---

### Step 3: Debug 모드로 시도

이제 **Debug 모드**로 전환하세요:

1. Cursor에서 Debug 모드 활성화
2. 같은 요청을 다시 해보세요:

```
login.js 파일의 버그를 Debug 모드로 찾아줘.
비밀번호를 8자로 입력해도 오류가 나.
```

**Debug 모드의 동작**:

1. **자동 로그 삽입**:
```javascript
function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  console.log('[DEBUG] username:', username);        // 자동 삽입
  console.log('[DEBUG] password:', password);        // 자동 삽입
  console.log('[DEBUG] password.length:', password.length);  // 자동 삽입
  
  if (username && password) {
    console.log('[DEBUG] 조건 통과');  // 자동 삽입
    
    if (password.length > 8) {
      console.log('[DEBUG] 비밀번호 길이 체크 통과');  // 자동 삽입
      showMessage('로그인 성공!', 'success');
    } else {
      console.log('[DEBUG] 비밀번호 길이 체크 실패');  // 자동 삽입
      console.log('[DEBUG] password.length:', password.length);  // 자동 삽입
      showMessage('비밀번호가 너무 짧습니다...', 'error');
    }
  }
}
```

2. **브라우저에서 실행**:
   - Debug 모드가 브라우저를 열고 실제로 테스트
   - 콘솔에 로그 출력:
     ```
     [DEBUG] username: admin
     [DEBUG] password: 12345678
     [DEBUG] password.length: 8
     [DEBUG] 조건 통과
     [DEBUG] 비밀번호 길이 체크 실패
     [DEBUG] password.length: 8
     ```

3. **정확한 원인 파악**:
   - AI: "실행 결과를 보니 `password.length`가 8인데 `> 8` 조건을 통과하지 못합니다!"
   - AI: "`> 8`을 `>= 8`로 수정해야 합니다."

---

## 💡 두 모드의 차이

### Agent 모드 (추측 기반)

```
1. 코드를 읽음
2. 논리적으로 추측: "아마 > 8이 문제일 것 같다"
3. 수정 제안

장점: 빠름
단점: 추측이므로 틀릴 수 있음
```

### Debug 모드 (실행 기반)

```
1. 코드를 읽음
2. 자동으로 로그 삽입
3. 브라우저에서 실제로 실행
4. 콘솔 로그 확인
5. 정확한 원인 파악: "password.length가 8인데 > 8 조건을 통과 못함"
6. 정확한 수정

장점: 정확함 (실행 결과 기반)
단점: 약간 느림 (실행 시간 필요)
```

---

## ✅ 정답

**버그 1**: `password.length > 8` → `password.length >= 8`로 수정

**버그 2**: `if (username && password)` → 공백 문자열 체크 추가
```javascript
if (username.trim() && password.trim()) {
  // ...
}
```

---

## 🎓 학습 정리

이번 실습에서 배운 것:

1. **Agent 모드**: 코드를 보고 추측 → 빠르지만 정확도 낮음
2. **Debug 모드**: 실제로 실행하고 로그 확인 → 느리지만 정확도 높음
3. **실전 활용**: 복잡한 버그일수록 Debug 모드가 유리

**다음 단계**:

2장에서는 Debug 모드를 더 복잡한 실전 시나리오(로그인 버그, API 오류)에서 실습합니다!

---

## 💡 추가 실습

시간이 있다면 다음도 시도해보세요:

1. **다른 버그 추가하기**:
   - 사용자명이 "admin"이 아니면 로그인 실패하도록
   - 비밀번호에 특수문자가 없으면 오류 표시

2. **Debug 모드로 추적하기**:
   - 각 조건문에서 어떤 값이 나오는지 확인
   - 어디서 로직이 실패하는지 정확히 파악

3. **성능 측정**:
   - `console.time()`과 `console.timeEnd()`로 실행 시간 측정
   - Debug 모드가 자동으로 성능 로그도 추가하는지 확인

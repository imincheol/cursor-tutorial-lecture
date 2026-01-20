# Project 1: Debug Mode로 로그인 버그 해결

## 🎯 학습 목표

- Debug Mode 활성화 방법 익히기
- 자동 로그 삽입으로 버그 원인 파악
- 추측이 아닌 실행으로 버그 해결

**예상 소요 시간**: 15분

---

## 📁 프로젝트 구조

```
01-debug-login-bug/
├── README.md           # 이 파일
├── index.html          # 로그인 페이지
├── login.js            # 로그인 로직 (버그 있음)
└── auth.js             # 인증 함수 (버그 있음)
```

---

## 🐛 버그 상황

로그인 버튼을 클릭해도 대시보드로 이동하지 않습니다.

```javascript
// login.js
function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const result = authenticate(username, password);
  
  if (result) {
    window.location.href = '/dashboard';
  }
}
```

**문제**: `authenticate` 함수가 무엇을 반환하는지 모릅니다.

---

## 🚀 실습 단계

### Step 1: 일반 모드로 시도 (5분)

Cursor Agent에게 다음과 같이 요청하세요:

```
로그인이 안 되는데 고쳐줘
```

**결과**:
- Agent가 코드를 보고 **추측**해서 수정 제안
- 정확한 원인을 모르고 여러 번 시도

---

### Step 2: Debug Mode 활성화 (5분)

1. Cursor Agent 창에서 **Debug Mode** 버튼 클릭
2. 다시 요청:

```
로그인이 안 되는데 고쳐줘
```

**결과**:
- Agent가 자동으로 로그 삽입
- 코드를 실행하여 실제 값 확인
- 정확한 원인 파악 후 수정

---

### Step 3: 로그 확인 (5분)

Debug Mode가 삽입한 로그를 확인하세요:

```javascript
// Agent가 자동으로 삽입한 로그
function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  console.log('[DEBUG] username:', username);
  console.log('[DEBUG] password:', password);
  
  const result = authenticate(username, password);
  console.log('[DEBUG] result:', result);  // <-- 핵심!
  
  if (result) {
    console.log('[DEBUG] redirecting...');
    window.location.href = '/dashboard';
  }
}
```

**발견**:
```
[DEBUG] username: "admin"
[DEBUG] password: "1234"
[DEBUG] result: undefined  // <-- 문제 발견!
```

`authenticate` 함수가 `undefined`를 반환하고 있습니다!

---

## 💡 핵심 개념

### 일반 모드 vs Debug Mode

| 방식       | 일반 모드      | Debug Mode    |
| ---------- | -------------- | ------------- |
| **접근**   | 코드 보고 추측 | 실행해서 확인 |
| **정확도** | 낮음           | 높음          |
| **반복**   | 여러 번        | 한 번         |
| **시간**   | 오래 걸림      | 빠름          |

### Debug Mode의 장점

1. **자동 로그 삽입**: 수동으로 `console.log` 추가할 필요 없음
2. **실제 실행**: 추측이 아닌 실제 값 확인
3. **빠른 해결**: 정확한 원인 파악으로 시간 단축

---

## ✅ 완료 체크리스트

- [ ] 일반 모드로 시도해보기
- [ ] Debug Mode 활성화하기
- [ ] 자동 삽입된 로그 확인하기
- [ ] 버그 원인 정확히 파악하기
- [ ] 버그 수정 완료

---

## 🎓 다음 단계

[Project 2: API 오류 추적](../02-debug-api-error/README.md)

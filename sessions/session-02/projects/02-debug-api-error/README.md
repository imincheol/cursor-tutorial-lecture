# Project 2: Debug Mode로 API 오류 추적

## 🎯 학습 목표

- API 호출 오류를 Debug Mode로 추적
- 네트워크 요청/응답 디버깅
- 404 오류 원인 정확히 파악

---

## 📁 프로젝트 구조

```
02-debug-api-error/
├── README.md           # 이 파일
├── index.html          # 사용자 목록 페이지
├── api.js              # API 호출 로직 (버그 있음)
└── server.js           # 간단한 테스트 서버 (선택)
```

---

## 🐛 버그 상황

사용자 목록을 불러오려고 하면 404 오류가 발생합니다.

```javascript
// api.js
async function fetchUsers() {
  const response = await fetch("/api/user"); // 버그: 경로 오류
  const data = await response.json();
  return data;
}
```

**문제**: API 경로가 잘못되었는지, 서버 문제인지 알 수 없습니다.

---

## 🚀 실습 단계

### Step 1: 일반 모드로 시도

Cursor Agent에게 다음과 같이 요청하세요:

```
사용자 목록이 안 불러와져. 404 오류가 나는데 고쳐줘
```

**결과**:

- Agent가 여러 가능성을 추측
- 경로 문제인지, 서버 문제인지 불확실
- 여러 번 시도

---

### Step 2: Debug Mode 활성화

1. Cursor Agent 창에서 **Debug Mode** 버튼 클릭
2. 다시 요청:

```
사용자 목록이 안 불러와져. 404 오류가 나는데 고쳐줘
```

**결과**:

- Agent가 자동으로 로그 삽입
- 실제 API 호출 실행
- 요청 URL과 응답 상태 확인
- 정확한 원인 파악

---

### Step 3: 로그 확인

Debug Mode가 삽입한 로그를 확인하세요:

```javascript
// Agent가 자동으로 삽입한 로그
async function fetchUsers() {
  console.log("[DEBUG] Fetching users...");
  console.log("[DEBUG] URL:", "/api/user");

  const response = await fetch("/api/user");
  console.log("[DEBUG] Response status:", response.status); // <-- 404!
  console.log("[DEBUG] Response URL:", response.url);

  if (!response.ok) {
    console.error("[DEBUG] Error:", response.statusText);
  }

  const data = await response.json();
  console.log("[DEBUG] Data:", data);
  return data;
}
```

**발견**:

```
[DEBUG] Fetching users...
[DEBUG] URL: /api/user
[DEBUG] Response status: 404
[DEBUG] Response URL: http://localhost:3000/api/user
[DEBUG] Error: Not Found
```

경로가 `/api/user`인데 올바른 경로는 `/api/users`입니다!

---

## 💡 핵심 개념

### API 디버깅 포인트

Debug Mode가 자동으로 확인하는 것들:

1. **요청 URL**: 경로가 올바른가?
2. **응답 상태**: 200? 404? 500?
3. **응답 데이터**: 예상한 형식인가?
4. **에러 메시지**: 무엇이 잘못되었나?

### 일반 모드 vs Debug Mode

| 항목          | 일반 모드 | Debug Mode     |
| ------------- | --------- | -------------- |
| **URL 확인**  | 코드만 봄 | 실제 요청 확인 |
| **응답 확인** | 추측      | 실제 응답 확인 |
| **에러 원인** | 불명확    | 명확           |
| **해결 속도** | 느림      | 빠름           |

---

## 🧪 테스트 방법

### 방법 1: Live Server 사용

```bash
# VS Code Live Server 확장 설치 후
# index.html 우클릭 → "Open with Live Server"
```

### 방법 2: 간단한 서버 실행 (선택)

```bash
# Node.js가 설치되어 있다면
node server.js

# 브라우저에서
# http://localhost:3000
```

---

## ✅ 완료 체크리스트

- [ ] 일반 모드로 시도해보기
- [ ] Debug Mode 활성화하기
- [ ] API 요청/응답 로그 확인하기
- [ ] 404 오류 원인 파악하기
- [ ] 경로 수정 (`/api/user` → `/api/users`)
- [ ] 정상 동작 확인

---

## 🎓 다음 장

[3장: Hooks - AI Agent 제어의 핵심](../../session-03/README.md)

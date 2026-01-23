# 2장: Debug Mode - 실행 기반 디버깅

> **추측이 아닌 실행으로 버그를 해결합니다**

## 📝 강의 개요

안녕하세요. 이번 장에서는 Cursor만의 차별화된 기능인 **Debug Mode**를 배웁니다.

일반적으로 버그를 수정할 때 AI는 코드를 보고 **추측**해서 수정합니다. 하지만 Debug Mode는 코드를 **실제로 실행**하고 로그를 자동으로 삽입해서 정확한 원인을 파악합니다.

**학습 목표**:

- Debug Mode 활성화 및 사용
- 자동 로그 삽입으로 버그 원인 파악
- API 오류 추적
- 실행 기반 디버깅 베스트 프랙티스

**참고 문서**: 
- [Agent 모드 공식 문서](https://cursor.com/docs/agent/modes) - Debug 모드 상세 설명
- [디버깅 가이드](https://cursor.com/for/debugging) - 디버깅 베스트 프랙티스

---

## 🎯 Debug Mode vs 일반 모드

### 일반 모드 (추측)

```javascript
// AI가 코드를 보고 추측
function login(user, password) {
  const result = authenticate(user, password);
  if (result) {
    redirect("/dashboard");
  }
}
// "아마 여기가 문제일 것 같은데..."
```

### Debug Mode (실행)

```javascript
// AI가 실제로 실행하고 로그 삽입
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
// "실행 결과를 보니 result가 undefined네요!"
```

**차이점**:

- 일반: 추측 → 낮은 정확도
- Debug: 실행 → 높은 정확도

### Debug Mode의 핵심 기능

1. **자동 로그 삽입**: 코드의 주요 지점에 console.log 자동 추가
2. **실시간 실행**: 브라우저나 Node.js 환경에서 실제 실행
3. **상태 추적**: 변수 값, 함수 반환값, 조건문 결과 확인
4. **오류 위치 파악**: 정확히 어느 라인에서 문제가 발생하는지 확인

### Debug Mode 사용 시나리오

| 상황 | 일반 모드 | Debug 모드 |
|------|----------|-----------|
| 로그인 실패 | "인증 로직을 확인해보세요" | 실행 → `result`가 `undefined` 확인 |
| API 404 오류 | "경로를 확인해보세요" | 실행 → `/api/user` 호출 확인 → `/api/users`로 수정 |
| 조건문 버그 | "조건이 잘못된 것 같습니다" | 실행 → `password.length > 8`이 항상 false 확인 |
| 비동기 오류 | "Promise를 확인해보세요" | 실행 → await 누락 확인 |

### Debug Mode 활성화 방법

1. **Cursor Agent 열기**: Cmd/Ctrl + L
2. **모드 선택**: 상단의 모드 드롭다운에서 "Debug" 선택
3. **버그 설명**: "로그인이 작동하지 않습니다"
4. **자동 실행**: Agent가 코드를 실행하고 로그를 삽입하여 분석

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

---

## 🚀 실습 프로젝트

### [Project 1: Debug Mode로 로그인 버그 해결](./projects/01-debug-login-bug/README.md)

**학습 내용**:

- Debug Mode 활성화 방법 익히기
- 자동 로그 삽입으로 버그 원인 파악
- 추측이 아닌 실행으로 버그 해결

**실습 방식**:

로그인 버튼을 클릭해도 대시보드로 이동하지 않는 버그가 있습니다. 먼저 일반 Agent 모드로 시도한 후, Debug 모드로 전환하여 실제 실행 결과를 확인하면서 정확한 원인을 파악합니다.

**제공 파일**:
- `index.html` - 로그인 페이지
- `login.js` - 로그인 로직 (버그 있음)
- `auth.js` - 인증 함수 (버그 있음)

**실습 예시**:
- 일반 모드: "아마 authenticate 함수가 문제일 것 같습니다" (추측)
- Debug 모드: 실행 → `authenticate`가 객체를 반환 → `if (result)`는 항상 true → 원인 파악!

---

### [Project 2: Debug Mode로 API 오류 추적](./projects/02-debug-api-error/README.md)

**학습 내용**:

- API 호출 오류를 Debug Mode로 추적
- 네트워크 요청/응답 디버깅
- 404 오류 원인 정확히 파악

**실습 방식**:

사용자 목록을 불러오려고 하면 404 오류가 발생합니다. Debug 모드로 API 경로, 요청 파라미터, 응답 상태 등을 실시간으로 확인하면서 문제를 해결합니다.

**제공 파일**:
- `index.html` - 사용자 목록 페이지
- `api.js` - API 호출 로직 (버그 있음)
- `server.js` - 간단한 테스트 서버 (선택)

**실습 예시**:
- 일반 모드: "API 경로를 확인해보세요" (일반적인 조언)
- Debug 모드: 실행 → `/api/user` 호출 → 404 → 올바른 경로는 `/api/users` → 정확한 수정!

---

## ⏭ 다음 장

[3장: Visual Editor - 클릭 기반 UI 수정](../session-03/README.md)

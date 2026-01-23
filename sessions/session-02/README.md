# 2장: Debug Mode - 실행 기반 디버깅

> **추측이 아닌 실행으로 버그를 해결합니다**

## 📝 강의 개요

안녕하세요. 이번 장에서는 Cursor만의 차별화된 기능인 **Debug Mode**를 배웁니다.

일반적으로 버그를 수정할 때 AI는 코드를 보고 **추측**해서 수정합니다. 하지만 Debug Mode는 코드를 **실제로 실행**하고 로그를 자동으로 삽입해서 정확한 원인을 파악합니다.

**학습 목표**:

- Debug Mode 활성화 및 사용
- 자동 로그 삽입으로 버그 원인 파악
- API 오류 추적

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

---

## 🚀 실습 프로젝트

### Project 1: 로그인 버그 (예정)

### Project 2: API 오류 (예정)

※ 프로젝트는 추후 추가 예정입니다.

---

## ⏭ 다음 장

[3장: Visual Editor - 클릭 기반 UI 수정](../session-03/README.md)

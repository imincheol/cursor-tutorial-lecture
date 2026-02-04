# 실습 2: 다국어 에러 메시지

## 실습 목표

한국어 에러 메시지를 참조하여 영어, 일본어 에러 메시지를 추가합니다.

## 실습 단계

### Step 1: 한국어 에러 메시지 확인

`errors.js` 파일을 열어 한국어 에러 메시지 구조를 확인하세요.

### Step 2: Past Chat 참조하여 다국어 추가

1. 새 대화 시작
2. Past Chat 참조:

```
@past-chat "에러 메시지" 구조를 참고해서
영어와 일본어 에러 메시지도 추가해줘.

같은 키를 사용하되, 언어별로 객체를 분리해줘.
예: ERROR_MESSAGES_KO, ERROR_MESSAGES_EN, ERROR_MESSAGES_JA
```

### 예상 결과

```javascript
// 한국어
const ERROR_MESSAGES_KO = {
  AUTH_REQUIRED: '로그인이 필요합니다',
  INVALID_CREDENTIALS: '이메일 또는 비밀번호가 올바르지 않습니다',
  // ...
};

// 영어
const ERROR_MESSAGES_EN = {
  AUTH_REQUIRED: 'Login required',
  INVALID_CREDENTIALS: 'Invalid email or password',
  // ...
};

// 일본어
const ERROR_MESSAGES_JA = {
  AUTH_REQUIRED: 'ログインが必要です',
  INVALID_CREDENTIALS: 'メールアドレスまたはパスワードが正しくありません',
  // ...
};
```

## 학습 포인트

- 다국어 메시지 패턴 재사용
- 일관된 키 구조 유지
- Past Chat으로 번역 스타일 통일

# 데모: 다국어 주석 추가

## 실습 목표

Past Chat 참조 기능을 사용하여 일관된 스타일로 다국어 주석을 추가합니다.

## 실습 단계

### Step 1: 첫 번째 대화 - 한국어 주석 추가

1. Cursor Agent 열기 (Cmd/Ctrl + L)
2. `demo.js` 파일 선택
3. 다음과 같이 요청:

```
이 함수에 한국어 주석을 추가해줘.
각 주요 단계마다 설명을 달아줘.
```

**예상 결과**:
```javascript
// 사용자 인증 함수
function authenticateUser(username, password) {
  // 사용자명 검증: 최소 3자 이상이어야 함
  if (!username || username.length < 3) {
    return {
      success: false,
      message: 'Username must be at least 3 characters'
    };
  }

  // 비밀번호 검증: 최소 8자 이상이어야 함
  if (!password || password.length < 8) {
    return {
      success: false,
      message: 'Password must be at least 8 characters'
    };
  }

  // 인증 성공: 사용자 정보 반환
  return {
    success: true,
    message: 'Authentication successful',
    user: { username }
  };
}
```

### Step 2: 두 번째 대화 - 일본어 주석 추가

1. 새 대화 시작 (Cmd/Ctrl + L)
2. 같은 파일에서 요청:

```
이 함수에 일본어 주석을 추가해줘.
한국어 주석과 같은 스타일로.
```

**예상 결과**:
```javascript
// ユーザー認証関数
function authenticateUser(username, password) {
  // ユーザー名検証：最低3文字以上必要
  if (!username || username.length < 3) {
    return {
      success: false,
      message: 'Username must be at least 3 characters'
    };
  }

  // パスワード検証：最低8文字以上必要
  if (!password || password.length < 8) {
    return {
      success: false,
      message: 'Password must be at least 8 characters'
    };
  }

  // 認証成功：ユーザー情報を返す
  return {
    success: true,
    message: 'Authentication successful',
    user: { username }
  };
}
```

### Step 3: Past Chat 참조 - 베트남어와 영어 주석 추가

1. 새 대화 시작 (Cmd/Ctrl + L)
2. **Past Chat 참조** 사용:

```
@past-chat "한국어 주석" 과 "일본어 주석" 대화를 참고해서
이 함수에 베트남어와 영어 주석도 추가해줘.
같은 스타일로 각 언어별로 주석을 달아줘.
```

**예상 결과**: AI가 이전 대화의 패턴을 참고하여 일관된 스타일로 베트남어와 영어 주석을 추가합니다.

```javascript
// Hàm xác thực người dùng (베트남어)
// User authentication function (영어)
function authenticateUser(username, password) {
  // Xác thực tên người dùng: Tối thiểu 3 ký tự (베트남어)
  // Username validation: Minimum 3 characters (영어)
  if (!username || username.length < 3) {
    return {
      success: false,
      message: 'Username must be at least 3 characters'
    };
  }

  // Xác thực mật khẩu: Tối thiểu 8 ký tự (베트남어)
  // Password validation: Minimum 8 characters (영어)
  if (!password || password.length < 8) {
    return {
      success: false,
      message: 'Password must be at least 8 characters'
    };
  }

  // Xác thực thành công: Trả về thông tin người dùng (베트남어)
  // Authentication successful: Return user information (영어)
  return {
    success: true,
    message: 'Authentication successful',
    user: { username }
  };
}
```

## 학습 포인트

1. **Past Chat 참조의 장점**:
   - 이전 대화의 스타일과 패턴을 재사용
   - 일관된 코드 스타일 유지
   - 반복 설명 불필요

2. **@past-chat 사용법**:
   - `@past-chat "검색어"`: 이전 대화 검색
   - 검색어는 대화 내용의 키워드
   - 여러 대화를 동시에 참조 가능

3. **실무 활용**:
   - API 패턴 재사용
   - 테스트 코드 패턴 복제
   - 문서화 스타일 통일

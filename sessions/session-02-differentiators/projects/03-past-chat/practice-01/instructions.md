# 실습 1: 코드 패턴 재사용 (API)

## 실습 목표

로그인 API 패턴을 참조하여 회원가입 API를 만듭니다.

## 실습 단계

### Step 1: 로그인 API 확인

`login-api.js` 파일을 열어 로그인 API 구조를 확인하세요.

**주요 패턴**:
- RESTful API 구조
- 입력 검증
- 에러 처리
- 응답 형식

### Step 2: 새 대화에서 Past Chat 참조

1. 새 대화 시작 (Cmd/Ctrl + L)
2. Past Chat 참조하여 요청:

```
@past-chat "로그인 API" 패턴을 참고해서
회원가입 API를 만들어줘.

POST /api/auth/register
- 이메일, 비밀번호, 이름 입력받기
- 같은 검증 패턴 사용
- 같은 응답 형식 사용
- 비밀번호는 8자 이상이어야 함
```

### 예상 결과

AI가 로그인 API와 동일한 패턴으로 회원가입 API를 생성합니다:

```javascript
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // 입력 검증 (로그인 API와 같은 패턴)
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: '이메일, 비밀번호, 이름을 입력해주세요'
      });
    }

    // 이메일 형식 검증 (로그인 API와 동일)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: '올바른 이메일 형식이 아닙니다'
      });
    }

    // 비밀번호 길이 검증 (추가)
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: '비밀번호는 8자 이상이어야 합니다'
      });
    }

    // 사용자 생성
    const user = await createUser({ email, password, name });

    // JWT 토큰 생성 (로그인 API와 동일)
    const token = generateToken(user.id);

    // 응답 형식 (로그인 API와 동일)
    res.json({
      success: true,
      message: '회원가입 성공',
      data: {
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        },
        token
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      success: false,
      message: '서버 오류가 발생했습니다'
    });
  }
});
```

## 학습 포인트

- Past Chat으로 코드 패턴 재사용
- 일관된 API 구조 유지
- 검증 로직 통일
- 에러 처리 패턴 복제

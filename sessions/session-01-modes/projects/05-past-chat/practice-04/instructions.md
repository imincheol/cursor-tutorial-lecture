# 실습 4: 테스트 패턴 재사용

## 실습 목표

로그인 테스트 패턴을 참조하여 회원가입 테스트를 작성합니다.

## 실습 단계

### Step 1: 로그인 테스트 확인

`auth.test.js` 파일을 열어 테스트 구조를 확인하세요.

**테스트 패턴**:
- describe로 그룹화
- 성공 케이스
- 실패 케이스
- 에러 처리

### Step 2: Past Chat 참조하여 회원가입 테스트 작성

```
@past-chat "로그인 테스트" 패턴을 참고해서
registerUser 함수의 테스트를 작성해줘.

테스트 케이스:
- 회원가입 성공
- 이메일 중복 실패
- 비밀번호 길이 부족 실패
- 필수 항목 누락 실패
- 서버 오류 처리

같은 구조와 스타일로 작성해줘.
```

### 예상 결과

```javascript
describe('registerUser', () => {
  describe('회원가입 성공', () => {
    it('올바른 정보로 회원가입하면 성공한다', async () => {
      const result = await registerUser({
        email: 'new@example.com',
        password: 'password123',
        name: 'Test User'
      });
      
      expect(result.success).toBe(true);
      expect(result.user).toBeDefined();
      expect(result.user.email).toBe('new@example.com');
    });
  });

  describe('회원가입 실패', () => {
    it('이메일이 중복되면 실패한다', async () => {
      const result = await registerUser({
        email: 'existing@example.com',
        password: 'password123',
        name: 'Test User'
      });
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('중복');
    });

    it('비밀번호가 8자 미만이면 실패한다', async () => {
      const result = await registerUser({
        email: 'new@example.com',
        password: '1234',
        name: 'Test User'
      });
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('8자');
    });
  });
});
```

## 학습 포인트

- 테스트 패턴 일관성
- describe 구조 재사용
- 에러 메시지 검증 패턴

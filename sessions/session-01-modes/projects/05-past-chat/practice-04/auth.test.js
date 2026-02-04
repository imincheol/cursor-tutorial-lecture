const { authenticateUser } = require('./auth');

describe('authenticateUser', () => {
  describe('로그인 성공', () => {
    it('올바른 이메일과 비밀번호로 로그인하면 성공한다', async () => {
      const result = await authenticateUser('test@example.com', 'password123');
      
      expect(result.success).toBe(true);
      expect(result.user).toBeDefined();
      expect(result.user.email).toBe('test@example.com');
      expect(result.token).toBeDefined();
    });

    it('토큰이 올바른 형식이어야 한다', async () => {
      const result = await authenticateUser('test@example.com', 'password123');
      
      expect(typeof result.token).toBe('string');
      expect(result.token.length).toBeGreaterThan(0);
    });
  });

  describe('로그인 실패', () => {
    it('잘못된 이메일로 로그인하면 실패한다', async () => {
      const result = await authenticateUser('wrong@example.com', 'password123');
      
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
      expect(result.error).toContain('이메일');
    });

    it('잘못된 비밀번호로 로그인하면 실패한다', async () => {
      const result = await authenticateUser('test@example.com', 'wrongpassword');
      
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
      expect(result.error).toContain('비밀번호');
    });

    it('이메일이 없으면 실패한다', async () => {
      const result = await authenticateUser('', 'password123');
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('필수');
    });

    it('비밀번호가 없으면 실패한다', async () => {
      const result = await authenticateUser('test@example.com', '');
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('필수');
    });
  });

  describe('에러 처리', () => {
    it('서버 오류 시 적절한 에러를 반환한다', async () => {
      // 서버 오류 시뮬레이션
      jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));
      
      const result = await authenticateUser('test@example.com', 'password123');
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('서버');
    });
  });
});

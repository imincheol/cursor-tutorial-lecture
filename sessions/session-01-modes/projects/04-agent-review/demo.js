// 사용자 검증 함수
function validateUser(user) {
  // 기본 검증
  if (!user) {
    return { valid: false, error: '사용자 정보가 없습니다' };
  }

  if (!user.name || !user.email) {
    return { valid: false, error: '이름과 이메일은 필수입니다' };
  }

  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) {
    return { valid: false, error: '이메일 형식이 올바르지 않습니다' };
  }

  return { valid: true };
}

// 테스트
const testUser = {
  name: 'John Doe',
  email: 'john@example.com'
};

console.log(validateUser(testUser));

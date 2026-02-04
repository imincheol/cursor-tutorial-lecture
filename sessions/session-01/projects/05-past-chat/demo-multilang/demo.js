// 사용자 인증 함수
function authenticateUser(username, password) {
  // 사용자명 검증
  if (!username || username.length < 3) {
    return {
      success: false,
      message: 'Username must be at least 3 characters'
    };
  }

  // 비밀번호 검증
  if (!password || password.length < 8) {
    return {
      success: false,
      message: 'Password must be at least 8 characters'
    };
  }

  // 인증 성공
  return {
    success: true,
    message: 'Authentication successful',
    user: { username }
  };
}

// 테스트
console.log(authenticateUser('john', '12345678'));

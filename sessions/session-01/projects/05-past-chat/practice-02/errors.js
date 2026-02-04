// 에러 메시지 정의
const ERROR_MESSAGES = {
  // 인증 관련
  AUTH_REQUIRED: '로그인이 필요합니다',
  INVALID_CREDENTIALS: '이메일 또는 비밀번호가 올바르지 않습니다',
  TOKEN_EXPIRED: '세션이 만료되었습니다',
  UNAUTHORIZED: '권한이 없습니다',

  // 입력 검증
  INVALID_EMAIL: '올바른 이메일 형식이 아닙니다',
  PASSWORD_TOO_SHORT: '비밀번호는 8자 이상이어야 합니다',
  REQUIRED_FIELD: '필수 항목을 입력해주세요',

  // 서버 오류
  SERVER_ERROR: '서버 오류가 발생했습니다',
  DATABASE_ERROR: '데이터베이스 오류가 발생했습니다',
  NETWORK_ERROR: '네트워크 오류가 발생했습니다'
};

module.exports = ERROR_MESSAGES;

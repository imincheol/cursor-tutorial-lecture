// 로그인 처리 함수 (버그 있음)
function handleLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('error');
  
  // 입력 검증
  if (!username || !password) {
    errorDiv.textContent = '사용자명과 비밀번호를 입력하세요.';
    return;
  }
  
  // 인증 시도
  const result = authenticate(username, password);
  
  // 버그: result가 undefined인지 확인하지 않음
  if (result) {
    errorDiv.textContent = '';
    alert('로그인 성공!');
    // window.location.href = '/dashboard';
  } else {
    errorDiv.textContent = '로그인 실패: 사용자명 또는 비밀번호가 올바르지 않습니다.';
  }
}

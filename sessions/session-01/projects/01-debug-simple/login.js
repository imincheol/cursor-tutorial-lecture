// 로그인 폼 처리
// 이 파일에는 의도적으로 버그가 포함되어 있습니다!

document.getElementById('loginForm').addEventListener('submit', handleLogin);

function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // 버그 1: 빈 문자열 체크가 제대로 안 됨
  // 공백만 입력해도 통과됨
  if (username && password) {
    // 버그 2: 비밀번호 길이 체크 로직 오류
    // >= 8이어야 하는데 > 8로 되어 있음
    // 즉, 8자는 안 되고 9자부터 가능
    if (password.length > 8) {
      showMessage('로그인 성공!', 'success');
    } else {
      showMessage('비밀번호가 너무 짧습니다. 최소 8자 이상이어야 합니다.', 'error');
    }
  } else {
    showMessage('사용자명과 비밀번호를 모두 입력해주세요.', 'error');
  }
}

function showMessage(text, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = text;
  messageDiv.className = type;
}

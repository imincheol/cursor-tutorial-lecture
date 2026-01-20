// 인증 함수 (버그 있음)
function authenticate(username, password) {
  // 버그: return 문이 없음!
  const validUsers = {
    'admin': '1234',
    'user': 'pass'
  };
  
  // 사용자 확인
  if (validUsers[username] === password) {
    // 버그: true를 반환하지 않음
    console.log('인증 성공');
  }
  
  // 버그: false도 반환하지 않음
  console.log('인증 실패');
}

// 올바른 코드는 다음과 같아야 함:
// function authenticate(username, password) {
//   const validUsers = {
//     'admin': '1234',
//     'user': 'pass'
//   };
//   
//   if (validUsers[username] === password) {
//     return true;  // <-- return 추가!
//   }
//   
//   return false;  // <-- return 추가!
// }

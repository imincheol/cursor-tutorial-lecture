// API 호출 함수 (버그 있음)
async function fetchUsers() {
  // 버그: 경로가 /api/user 인데 올바른 경로는 /api/users
  const response = await fetch('/api/user');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
}

// 올바른 코드는 다음과 같아야 함:
// async function fetchUsers() {
//   const response = await fetch('/api/users');  // <-- /api/users로 수정!
//   
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   
//   const data = await response.json();
//   return data;
// }

// 테스트용 Mock 데이터 (서버 없이 테스트하려면 주석 해제)
// async function fetchUsers() {
//   // Mock 데이터 반환
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, name: '김철수', email: 'kim@example.com' },
//         { id: 2, name: '이영희', email: 'lee@example.com' },
//         { id: 3, name: '박민수', email: 'park@example.com' }
//       ]);
//     }, 500);
//   });
// }

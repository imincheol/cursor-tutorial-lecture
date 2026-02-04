// API 호출 함수
async function fetchUserData(userId) {
  const response = fetch(`https://api.example.com/users/${userId}`);
  return response.json();
}

async function fetchUserPosts(userId) {
  const response = fetch(`https://api.example.com/users/${userId}/posts`);
  return response.json();
}

async function fetchUserComments(userId) {
  const response = fetch(`https://api.example.com/users/${userId}/comments`);
  return response.json();
}

// 사용자 전체 데이터 가져오기
async function getUserFullData(userId) {
  const user = fetchUserData(userId);
  const posts = fetchUserPosts(userId);
  const comments = fetchUserComments(userId);
  
  return {
    user,
    posts,
    comments
  };
}

// 테스트
getUserFullData(1).then(data => {
  console.log(data);
});

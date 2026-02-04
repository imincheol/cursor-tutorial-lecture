# API 문서

## 인증 API

### POST /api/auth/login

사용자 로그인

**요청**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**응답 (성공)**

```json
{
  "success": true,
  "message": "로그인 성공",
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "홍길동"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**응답 (실패)**

```json
{
  "success": false,
  "message": "이메일 또는 비밀번호가 올바르지 않습니다"
}
```

**상태 코드**

- `200 OK`: 로그인 성공
- `400 Bad Request`: 입력 검증 실패
- `401 Unauthorized`: 인증 실패
- `500 Internal Server Error`: 서버 오류

**예시 (cURL)**

```bash
curl -X POST https://api.example.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

**예시 (JavaScript)**

```javascript
const response = await fetch('https://api.example.com/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
console.log(data);
```

# 실습 5: 문서화 패턴 재사용

## 실습 목표

로그인 API 문서 패턴을 참조하여 다른 API 문서를 작성합니다.

## 실습 단계

### Step 1: 로그인 API 문서 확인

`api-docs.md` 파일을 열어 문서 구조를 확인하세요.

**문서 구조**:
- 엔드포인트 정보
- 요청 형식
- 응답 형식 (성공/실패)
- 상태 코드
- 예시 (cURL, JavaScript)

### Step 2: Past Chat 참조하여 다른 API 문서 작성

```
@past-chat "로그인 API 문서" 패턴을 참고해서
다음 API들의 문서도 작성해줘. 같은 형식으로.

1. POST /api/auth/register (회원가입)
2. GET /api/users/:id (사용자 조회)
3. PUT /api/users/:id (사용자 수정)
```

### 예상 결과

```markdown
### POST /api/auth/register

사용자 회원가입

**요청**

\`\`\`json
{
  "email": "new@example.com",
  "password": "password123",
  "name": "홍길동"
}
\`\`\`

**응답 (성공)**

\`\`\`json
{
  "success": true,
  "message": "회원가입 성공",
  "data": {
    "user": {
      "id": 1,
      "email": "new@example.com",
      "name": "홍길동"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
\`\`\`

**상태 코드**

- \`201 Created\`: 회원가입 성공
- \`400 Bad Request\`: 입력 검증 실패
- \`409 Conflict\`: 이메일 중복
- \`500 Internal Server Error\`: 서버 오류

**예시 (cURL)**

\`\`\`bash
curl -X POST https://api.example.com/api/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "new@example.com",
    "password": "password123",
    "name": "홍길동"
  }'
\`\`\`
```

## 학습 포인트

- 문서화 패턴 일관성
- 같은 구조와 형식
- 예시 코드 스타일 통일
- Past Chat으로 문서 품질 유지

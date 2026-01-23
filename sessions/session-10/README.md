# 10장: MCP Integration - 외부 도구 연결

> **Model Context Protocol로 외부 도구와 데이터를 연결합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: MCP란?](#1부-mcp란)
- [2부: 기본 제공 MCP](#2부-기본-제공-mcp)
- [3부: MCP 활성화 및 사용](#3부-mcp-활성화-및-사용)
- [4부: 실전 활용](#4부-실전-활용)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

**MCP (Model Context Protocol)**를 배웁니다.

외부 도구(GitHub, Browser 등)와 데이터를 Agent에 연결하여 더 강력한 기능을 사용할 수 있습니다.

**학습 목표**:

- MCP 개념 이해
- 기본 제공 MCP 사용 (GitHub, Browser)
- MCP 활성화/비활성화
- 실전 활용 패턴

**공식 문서**:
- [MCP](https://cursor.com/docs/context/mcp) - MCP 개요
- [MCP 디렉토리](https://cursor.com/docs/context/mcp/directory) - 사용 가능한 MCP 목록
- [MCP 설치 링크](https://cursor.com/docs/context/mcp/install-links) - 원클릭 설치
- [MCP Extension API](https://cursor.com/docs/context/mcp-extension-api) - 확장 API
- [MCP 서버 구축](https://cursor.com/docs/cookbook/building-mcp-server) - 커스텀 MCP 만들기
- [CLI MCP 통합](https://cursor.com/docs/cli/mcp) - CLI에서 MCP 사용
- [체인지로그 - MCP (2026.01.08, 01.16)](https://cursor.com/changelog)

---

## 1부: MCP란?

### 개념

**Model Context Protocol**은 Agent가 외부 도구와 데이터에 접근할 수 있게 하는 프로토콜입니다.

```
Agent (기본):
- 코드 읽기/쓰기
- 터미널 명령 실행
- 파일 관리

Agent + MCP:
- 코드 읽기/쓰기
- 터미널 명령 실행
- 파일 관리
+ GitHub API 호출
+ 브라우저 제어
+ 데이터베이스 접근
+ 외부 API 연동
```

### 기본 제공 MCP

Cursor는 다음 MCP를 기본 제공합니다:

1. **GitHub MCP** - GitHub API 연동
2. **Browser MCP** - 브라우저 제어

---

## 2부: 기본 제공 MCP

### GitHub MCP

GitHub API를 통해 다양한 작업을 수행할 수 있습니다.

```
You: GitHub 이슈 목록 가져와줘

Agent: [GitHub MCP 사용]
       
       이슈 목록:
       #123: 로그인 버그
       #124: 성능 개선
       #125: 문서 업데이트
```

**가능한 작업**:
- 이슈 조회/생성/수정
- PR 조회/생성/리뷰
- 브랜치 관리
- 릴리스 관리

### Browser MCP

브라우저를 제어하여 웹 테스트를 수행할 수 있습니다.

```
You: 로그인 페이지 테스트해줘

Agent: [Browser MCP 사용]
       [브라우저 열기]
       [로그인 폼 찾기]
       [테스트 데이터 입력]
       [제출 버튼 클릭]
       [결과 확인]
       
       테스트 결과: 성공
```

**가능한 작업**:
- 페이지 탐색
- 요소 클릭/입력
- 스크린샷 캡처
- 네트워크 모니터링

---

## 3부: MCP 활성화 및 사용

### MCP 목록 확인

```bash
$ cursor /mcp list

사용 가능한 MCP:
✅ GitHub (활성화됨)
✅ Browser (활성화됨)
⬜ Slack (비활성화)
⬜ Linear (비활성화)
```

### MCP 활성화

```bash
$ cursor

You: /mcp enable slack

Agent: Slack MCP를 활성화했습니다.
       인증이 필요합니다.
       
       [인증 링크 클릭]
       → 자동으로 콜백 처리
       → Agent가 즉시 사용 가능
```

### MCP 비활성화

```bash
You: /mcp disable slack

Agent: Slack MCP를 비활성화했습니다.
```

### MCP 설치 링크 (원클릭 설치)

Cursor는 **원클릭 설치 링크**를 제공하여 MCP를 쉽게 설치할 수 있습니다.

```
cursor://install-mcp?url=https://github.com/user/mcp-server
```

**사용 방법**:
1. 링크 클릭
2. Cursor가 자동으로 열림
3. 설치 확인
4. 즉시 사용 가능

**참고 문서**: [MCP 설치 링크](https://cursor.com/docs/context/mcp/install-links)

### 커스텀 MCP 서버 구축

자신만의 MCP 서버를 만들 수 있습니다.

**MCP 서버 구조**:

```typescript
// mcp-server.ts
import { MCPServer } from '@cursor/mcp-sdk';

const server = new MCPServer({
  name: 'my-custom-mcp',
  version: '1.0.0',
  description: '커스텀 MCP 서버'
});

// 도구 등록
server.registerTool({
  name: 'fetch_data',
  description: '외부 API에서 데이터 가져오기',
  parameters: {
    endpoint: { type: 'string', required: true }
  },
  handler: async (params) => {
    const response = await fetch(params.endpoint);
    return await response.json();
  }
});

// 리소스 등록
server.registerResource({
  name: 'database',
  description: '데이터베이스 접근',
  handler: async (query) => {
    // 데이터베이스 쿼리 실행
    return await db.query(query);
  }
});

server.start();
```

**MCP 서버 배포**:

```bash
# npm에 배포
npm publish @your-name/mcp-server

# 사용자가 설치
cursor://install-mcp?url=https://github.com/your-name/mcp-server
```

**참고 문서**: [MCP 서버 구축 가이드](https://cursor.com/docs/cookbook/building-mcp-server)

### CLI에서 MCP 사용

CLI Agent에서도 MCP를 사용할 수 있습니다.

```bash
# CLI에서 MCP 활성화
cursor --mcp=github,browser

# 또는 설정 파일에서
# ~/.cursor/cli-config.json
{
  "mcp": {
    "enabled": ["github", "browser"]
  }
}
```

**CLI에서 MCP 사용 예시**:

```bash
$ cursor

You: GitHub 이슈 목록 가져와줘

Agent: [GitHub MCP 사용]
       이슈 목록: ...
```

**참고 문서**: [CLI MCP 통합](https://cursor.com/docs/cli/mcp)

### MCP 디렉토리

Cursor는 **MCP 디렉토리**를 제공하여 커뮤니티 MCP를 쉽게 찾을 수 있습니다.

**인기 있는 MCP**:
- **GitHub** - GitHub API 연동
- **Browser** - 브라우저 제어
- **Slack** - Slack 메시지 전송
- **Linear** - 이슈 트래킹
- **Notion** - Notion 데이터베이스
- **Airtable** - Airtable 연동
- **Supabase** - Supabase 데이터베이스
- **Stripe** - 결제 처리

**MCP 검색**:

```
cursor.com/mcp/directory
→ 카테고리별 검색
→ 원클릭 설치
→ 평점 및 리뷰 확인
```

**참고 문서**: [MCP 디렉토리](https://cursor.com/docs/context/mcp/directory)

---

## 4부: 실전 활용

### 패턴 1: GitHub 이슈 관리

```
You: GitHub 이슈 중 "bug" 라벨이 있는 것들 가져와줘

Agent: [GitHub MCP 사용]
       
       버그 이슈 5개 발견:
       #123: 로그인 실패
       #125: 데이터 로딩 에러
       ...

You: #123 이슈를 수정하고 PR 만들어줘

Agent: [코드 수정]
       [PR 생성]
       [이슈에 PR 링크 추가]
       
       PR #130 생성 완료
```

### 패턴 2: 웹 테스트 자동화

```
You: 회원가입 플로우를 테스트해줘

Agent: [Browser MCP 사용]
       
       1. 회원가입 페이지 열기
       2. 이메일 입력
       3. 비밀번호 입력
       4. 제출
       5. 이메일 인증 확인
       
       테스트 결과: 성공
       스크린샷: screenshots/signup-test.png
```

### 패턴 3: 통합 워크플로우

```
You: 다음 작업을 해줘:
     1. GitHub 이슈 #123 확인
     2. 버그 수정
     3. 브라우저로 테스트
     4. 테스트 통과하면 PR 생성
     5. 이슈에 PR 링크 추가

Agent: [GitHub MCP로 이슈 확인]
       [코드 수정]
       [Browser MCP로 테스트]
       [테스트 통과]
       [GitHub MCP로 PR 생성]
       [이슈 업데이트]
       
       완료!
```

---

## 🚀 실습 프로젝트

### [Project 1: MCP 기본 사용 (GitHub 연동)](./projects/01-mcp-basic/README.md)

**학습 내용**:

- GitHub MCP 활성화
- 이슈 조회 및 생성
- PR 생성 및 관리
- 통합 워크플로우

---

### [Project 2: Browser MCP로 웹 테스트](./projects/02-mcp-browser/README.md)

**학습 내용**:

- Browser MCP 사용법
- 웹 페이지 테스트
- 스크린샷 캡처
- 자동화 패턴

---

## 📊 학습 정리

이번 장에서 다룬 내용:

- ✅ MCP 기본 개념
- ✅ GitHub MCP 사용법
- ✅ Browser MCP 사용법
- ✅ MCP 활성화/비활성화
- ✅ 실전 활용 패턴

**핵심 포인트**:

```
외부 도구 연결 → MCP
GitHub 작업 → GitHub MCP
웹 테스트 → Browser MCP
```

**다음 장 예고**:

11장에서는 Enterprise Features를 배웁니다. Cursor Blame, Shared Transcripts 등 팀 협업 기능을 익힙니다.

---

## 🔗 공식 문서

- [MCP](https://cursor.com/docs/context/mcp)
- [MCP 디렉토리](https://cursor.com/docs/context/mcp/directory)
- [MCP Extension API](https://cursor.com/docs/context/mcp-extension-api)
- [체인지로그 (2026.01.08, 01.16)](https://cursor.com/changelog)

---

## ⏭ 다음 장

[11장: Enterprise Features - 팀 협업 기능](../session-11/README.md)

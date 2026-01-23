# 9장: Cloud Agent & Handoff - 장시간 작업 위임

> **로컬 작업을 클라우드로 넘겨서 계속 실행할 수 있습니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Cloud Agent란?](#1부-cloud-agent란)
- [2부: Handoff 사용법](#2부-handoff-사용법)
- [3부: 웹/모바일에서 확인](#3부-웹모바일에서-확인)
- [4부: 실전 활용 패턴](#4부-실전-활용-패턴)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

**Cloud Agent**와 **Handoff** 기능을 배웁니다.

로컬 터미널에서 시작한 작업을 클라우드로 넘겨서 계속 실행할 수 있습니다. 퇴근 시간에 큰 작업을 시작하고, 집에서 모바일로 확인할 수 있습니다.

**학습 목표**:

- Cloud Agent 개념 이해
- Handoff 사용법 (`&` prefix)
- 장시간 작업 위임 패턴
- 웹/모바일에서 작업 확인
- 실전 활용 시나리오

**공식 문서**:
- [Cloud Agent](https://cursor.com/docs/cloud-agent)
- [API 엔드포인트](https://cursor.com/docs/cloud-agent/api/endpoints)
- [Webhooks](https://cursor.com/docs/cloud-agent/api/webhooks)
- [웹 & 모바일](https://cursor.com/docs/cloud-agent/web-and-mobile)
- [Egress IP 범위](https://cursor.com/docs/cloud-agent/egress-ip-ranges)
- [체인지로그 - Cloud Handoff (2026.01.16)](https://cursor.com/changelog)

---

## 1부: Cloud Agent란?

### 개념

**Cloud Agent**는 클라우드 서버에서 실행되는 Agent입니다.

```
로컬 Agent:
- 내 컴퓨터에서 실행
- 터미널 종료하면 중단
- 로컬 리소스 사용

Cloud Agent:
- 클라우드 서버에서 실행
- 터미널 종료해도 계속 실행
- 클라우드 리소스 사용
```

### 왜 필요한가?

**문제 상황**:
```
오후 6시: 대규모 리팩토링 시작
오후 6시 30분: 퇴근 시간...
문제: 작업이 아직 진행 중인데 컴퓨터를 끌 수 없음
```

**해결책 (Cloud Agent)**:
```
오후 6시: 대규모 리팩토링 시작
오후 6시 10분: Cloud로 Handoff
오후 6시 30분: 퇴근 (작업은 계속 진행)
집에서: 모바일로 진행 상황 확인
다음날: 완료된 결과 확인
```

---

## 2부: Handoff 사용법

### 기본 사용법

로컬 터미널에서 `&` 기호로 시작하면 Cloud로 전송됩니다.

```bash
$ cursor

You: & 전체 프로젝트를 TypeScript로 변환해줘
     ↑ & 기호로 시작

Agent: 클라우드로 전송되었습니다.
       작업 ID: abc-123-xyz
       
       https://cursor.com/agents 에서 확인하세요.

# 터미널 종료해도 작업 계속됨
```

### 여러 작업 한번에

```bash
You: & 다음 작업들을 순서대로 해줘:
     & 1. 모든 컴포넌트를 React 18로 마이그레이션
     & 2. PropTypes를 TypeScript로 변환
     & 3. 테스트 코드 업데이트
     & 4. 린트 에러 수정
     & 5. 완료되면 PR 생성

Agent: 클라우드로 전송되었습니다.
       예상 소요 시간: 약 2-3시간
```

### 조건부 실행

```bash
You: & 테스트를 실행하고, 실패하면 수정해줘
     & 모든 테스트가 통과할 때까지 반복해줘
     & 완료되면 알려줘

Agent: 클라우드로 전송되었습니다.
```

---

## 🚀 실습: Project 1 - Cloud Agent 기본 사용

이제 배운 내용을 바로 실습해봅시다!

### [Project 1: Cloud Agent 기본 사용](./projects/01-cloud-basic/README.md)

**학습 내용**:

- Cloud Agent 기본 사용법
- Handoff로 작업 전송
- 웹에서 진행 상황 확인
- 결과 확인 및 적용

**실습 방식**:

간단한 작업을 Cloud로 전송하고, 웹에서 확인하는 과정을 체험합니다.

**실습 예시**:
- `cursor` → "& 린트 에러 수정해줘"
- 터미널 종료
- `cursor.com/agents` 접속 → 진행 상황 확인
- 완료 후 결과 확인

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-cloud-basic/README.md)

---

## 3부: 웹/모바일에서 확인

### 웹에서 확인

1. **cursor.com/agents** 접속
2. 진행 중인 작업 목록 확인
3. 실시간 로그 확인
4. 필요시 작업 중단

```
cursor.com/agents

진행 중인 작업:
┌─────────────────────────────────────┐
│ TypeScript 마이그레이션              │
│ 진행률: 45% (23/51 파일)            │
│ 예상 완료: 1시간 30분 후            │
│ [로그 보기] [중단]                  │
└─────────────────────────────────────┘

완료된 작업:
┌─────────────────────────────────────┐
│ 테스트 코드 업데이트                │
│ 완료 시간: 2시간 전                 │
│ [결과 보기] [PR 확인]               │
└─────────────────────────────────────┘
```

### 모바일에서 확인

모바일 앱 또는 모바일 웹에서도 동일하게 확인 가능합니다.

```
📱 Cursor Mobile

🔄 진행 중 (1)
  TypeScript 마이그레이션
  45% 완료

✅ 완료 (3)
  테스트 업데이트
  린트 수정
  문서 생성

🔔 알림 설정
  작업 완료 시 푸시 알림
```

---

## 4부: 실전 활용 패턴

### 패턴 1: 퇴근 시간 작업

```bash
# 오후 6시 - 퇴근 직전

$ cursor

You: & 다음 작업을 해줘:
     & 1. 전체 코드베이스 린트 수정
     & 2. 사용하지 않는 import 제거
     & 3. 코드 포맷팅 (Prettier)
     & 4. 커밋 메시지: "chore: code cleanup"
     & 5. PR 생성

Agent: 클라우드로 전송되었습니다.

# 퇴근
# 집에서 모바일로 확인
# 다음날 출근하면 PR 완성
```

### 패턴 2: 대규모 마이그레이션

```bash
You: & 전체 프로젝트를 다음과 같이 마이그레이션해줘:
     & 
     & 1. React 17 → React 18
     & 2. Webpack 4 → Webpack 5
     & 3. Jest 27 → Jest 29
     & 4. 각 단계마다 테스트 실행
     & 5. 테스트 실패하면 수정
     & 6. 모든 테스트 통과하면 다음 단계
     & 7. 완료되면 상세 보고서 작성

Agent: 클라우드로 전송되었습니다.
       예상 소요 시간: 4-6시간
```

### 패턴 3: 문서 자동 생성

```bash
You: & 프로젝트 문서를 생성해줘:
     & 
     & 1. API 문서 (모든 엔드포인트)
     & 2. 컴포넌트 문서 (Storybook)
     & 3. README.md (한국어/영어)
     & 4. CONTRIBUTING.md
     & 5. 아키텍처 다이어그램
     & 6. docs/ 폴더에 정리

Agent: 클라우드로 전송되었습니다.
```

### 패턴 4: 성능 최적화

```bash
You: & 프로젝트 성능을 최적화해줘:
     & 
     & 1. 번들 크기 분석
     & 2. 사용하지 않는 코드 제거
     & 3. 이미지 최적화 (WebP 변환)
     & 4. 코드 스플리팅 적용
     & 5. 레이지 로딩 적용
     & 6. 성능 측정 보고서 작성

Agent: 클라우드로 전송되었습니다.
```

### Cloud Agent API

Cloud Agent는 **REST API**를 제공하여 프로그래밍 방식으로 제어할 수 있습니다.

**API 엔드포인트**:

```bash
# Agent 생성
POST https://api.cursor.com/v1/agents
{
  "task": "전체 프로젝트 린트 수정",
  "repository": "github.com/user/repo",
  "branch": "main"
}

# Agent 상태 조회
GET https://api.cursor.com/v1/agents/{agent_id}

# Agent 중지
POST https://api.cursor.com/v1/agents/{agent_id}/stop

# Agent 로그 조회
GET https://api.cursor.com/v1/agents/{agent_id}/logs
```

**인증**:

```bash
# API 키 생성
cursor.com/settings/api-keys

# 요청 헤더
Authorization: Bearer YOUR_API_KEY
```

**참고 문서**: [API 엔드포인트](https://cursor.com/docs/cloud-agent/api/endpoints)

### Webhooks

Cloud Agent 작업이 완료되면 **Webhook**으로 알림을 받을 수 있습니다.

**Webhook 설정**:

```bash
# Webhook URL 등록
cursor.com/settings/webhooks

# Webhook 이벤트
- agent.started: Agent 시작
- agent.completed: Agent 완료
- agent.failed: Agent 실패
- agent.progress: 진행 상황 (10% 단위)
```

**Webhook 페이로드**:

```json
{
  "event": "agent.completed",
  "agent_id": "agent_abc123",
  "task": "전체 프로젝트 린트 수정",
  "status": "completed",
  "duration": 3600,
  "result": {
    "files_modified": 42,
    "commits": 1,
    "pr_url": "https://github.com/user/repo/pull/123"
  },
  "timestamp": "2026-01-23T10:30:00Z"
}
```

**Slack 통합 예시**:

```javascript
// Webhook 핸들러 (Node.js + Express)
app.post('/webhook/cursor', async (req, res) => {
  const { event, task, status, result } = req.body;

  if (event === 'agent.completed') {
    // Slack 알림 전송
    await slack.chat.postMessage({
      channel: '#dev',
      text: `✅ Cloud Agent 작업 완료!\n\n` +
            `작업: ${task}\n` +
            `수정된 파일: ${result.files_modified}개\n` +
            `PR: ${result.pr_url}`
    });
  }

  res.sendStatus(200);
});
```

**참고 문서**: [Webhooks](https://cursor.com/docs/cloud-agent/api/webhooks)

### Egress IP 범위

Cloud Agent가 외부 API를 호출할 때 사용하는 IP 주소 범위입니다.

**사용 시나리오**:
- 방화벽 화이트리스트 설정
- IP 기반 접근 제어
- 보안 정책 설정

**IP 범위**:
```
52.89.214.238
34.212.75.30
54.218.53.128
52.32.178.7
```

**참고 문서**: [Egress IP 범위](https://cursor.com/docs/cloud-agent/egress-ip-ranges)

---

## 🚀 실습: Project 2 - 장시간 작업 위임 패턴

이제 실전에서 활용할 수 있는 장시간 작업 패턴을 익혀봅시다!

### [Project 2: 장시간 작업 위임 패턴](./projects/02-handoff-workflow/README.md)

**학습 내용**:

- 대규모 작업 위임
- 조건부 실행 패턴
- 알림 설정
- 실전 시나리오 실습

**실습 방식**:

실제 프로젝트에서 사용할 수 있는 장시간 작업 패턴을 익힙니다.

**실습 시나리오**:
1. 퇴근 시간 작업 (린트, 포맷팅, PR 생성)
2. 대규모 마이그레이션 (React 17 → 18)
3. 문서 자동 생성 (API, 컴포넌트, README)
4. 성능 최적화 (번들 분석, 이미지 최적화)

**실습 예시**:
- `& 전체 코드 린트 수정 + PR 생성`
- 퇴근
- 집에서 모바일로 확인
- 다음날 출근하면 PR 완성!

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-handoff-workflow/README.md)

---

## 💡 Cloud Agent vs 로컬 Agent

### 비교표

| 항목 | 로컬 Agent | Cloud Agent |
|------|-----------|-------------|
| **실행 위치** | 내 컴퓨터 | 클라우드 서버 |
| **터미널 종료** | 작업 중단 | 계속 실행 |
| **리소스** | 로컬 리소스 | 클라우드 리소스 |
| **속도** | 빠름 | 네트워크 지연 |
| **비용** | 무료 | 사용량 과금 |
| **확인** | 터미널 | 웹/모바일 |

### 언제 사용하는가?

**Cloud Agent 적합**:
- ✅ 장시간 작업 (2시간 이상)
- ✅ 대규모 리팩토링/마이그레이션
- ✅ 자리를 비워야 할 때
- ✅ 로컬 리소스 부족

**로컬 Agent 적합**:
- ✅ 빠른 수정 (몇 분)
- ✅ 실시간 피드백 필요
- ✅ 민감한 데이터 처리
- ✅ 네트워크 불안정

---

## 💡 학습 가이드

### 진행 방법

1. **1부: Cloud Agent 개념**
   - Cloud Agent란 무엇인가
   - 왜 필요한가

2. **2부: Handoff 사용법 + 실습**
   - `&` 기호로 작업 전송
   - 👉 **바로 실습**: Project 1 - Cloud Agent 기본 사용

3. **3부: 웹/모바일에서 확인**
   - cursor.com/agents 접속
   - 진행 상황 모니터링

4. **4부: 실전 활용 패턴 + 실습**
   - 퇴근 시간 작업, 대규모 마이그레이션 등
   - 👉 **바로 실습**: Project 2 - 장시간 작업 위임 패턴

5. **Cloud vs 로컬 선택 기준**
   - 언제 Cloud를 사용하는가

### 학습 팁

- 작은 작업부터 시작하세요
- 웹에서 진행 상황을 자주 확인하세요
- 알림 설정을 활용하세요
- 실제 프로젝트에 적용해보세요

---

## 📊 학습 정리

이번 장에서 다룬 내용:

**1부: Cloud Agent 개념**
- ✅ Cloud Agent 기본 개념
- ✅ 왜 필요한가 (장시간 작업, 로컬 리소스 부족)

**2부: Handoff 사용법 + 실습**
- ✅ Handoff 사용법 (`&` prefix)
- ✅ **실습 완료**: Cloud Agent 기본 사용

**3부: 웹/모바일에서 확인**
- ✅ cursor.com/agents에서 진행 상황 확인
- ✅ 모바일 앱 활용

**4부: 실전 활용 패턴 + 실습**
- ✅ 실전 활용 패턴 (퇴근 시간, 마이그레이션 등)
- ✅ **실습 완료**: 장시간 작업 위임 패턴

**Cloud vs 로컬 선택**
- ✅ 로컬 vs Cloud 선택 기준

**핵심 포인트**:

```
장시간 작업 → Cloud Agent
퇴근 시간 작업 → Cloud Handoff
진행 상황 확인 → cursor.com/agents
```

**다음 장 예고**:

10장에서는 MCP Integration을 배웁니다. 외부 도구와 데이터를 연결하는 방법을 익힙니다.

---

## 🔗 공식 문서

- [Cloud Agent](https://cursor.com/docs/cloud-agent)
- [체인지로그 - Cloud Handoff (2026.01.16)](https://cursor.com/changelog)
- [웹 & 모바일](https://cursor.com/docs/cloud-agent/web-and-mobile)
- [API 엔드포인트](https://cursor.com/docs/cloud-agent/api/endpoints)

---

## ⏭ 다음 장

[10장: MCP Integration - 외부 도구 연결](../session-10/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: Cloud Agent 기본 사용](./projects/01-cloud-basic/README.md) - 2부 학습 후 진행
- [Project 2: 장시간 작업 위임 패턴](./projects/02-handoff-workflow/README.md) - 4부 학습 후 진행

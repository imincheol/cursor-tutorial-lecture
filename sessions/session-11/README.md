# 11장: Enterprise Features - 팀 협업 기능

> **Enterprise 플랜의 팀 협업 기능을 알아봅니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Cursor Blame](#1부-cursor-blame)
- [2부: Shared Agent Transcripts](#2부-shared-agent-transcripts)
- [3부: Layout Customization](#3부-layout-customization)
- [4부: Conversation Insights](#4부-conversation-insights)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

**Enterprise Features**를 배웁니다.

Cursor Blame, Shared Transcripts, Layout Customization 등 팀 협업에 유용한 기능들을 알아봅니다.

**학습 목표**:

- Cursor Blame으로 AI 기여도 추적
- Shared Transcripts로 대화 공유
- Layout Customization으로 작업 환경 최적화
- Conversation Insights로 작업 분석

**공식 문서**:
- [Cursor Blame](https://cursor.com/docs/integrations/cursor-blame)
- [Shared Transcripts](https://cursor.com/docs/shared-transcripts)
- [체인지로그 (2025.12.18, 2025.12.22, 2026.01.22)](https://cursor.com/changelog)

---

## 1부: Cursor Blame

### 개념

**Cursor Blame**은 git blame을 확장하여 **AI 기여도**를 추적합니다.

```
기존 git blame:
- 누가 작성했는지
- 언제 작성했는지

Cursor Blame:
- 누가 작성했는지
- 언제 작성했는지
+ AI가 생성했는지
+ 어떤 대화에서 생성되었는지
+ 어떤 모델을 사용했는지
```

### 사용법

```bash
# 파일의 AI 기여도 확인
$ cursor blame src/auth.js

1  │ function login(email, password) {
   │ 👤 Human (이민철)
   
2  │   const user = await User.findOne({ email });
   │ 🤖 AI (Claude Sonnet 4.5)
   │ 💬 대화: "로그인 함수 추가해줘"
   
3  │   if (!user) throw new Error('User not found');
   │ 🤖 AI (Claude Sonnet 4.5)
   │ 💬 대화: "로그인 함수 추가해줘"
```

### 팀 활용

```
코드 리뷰 시:
- AI가 생성한 코드 확인
- 어떤 대화에서 생성되었는지 확인
- 필요시 대화 내용 확인

온보딩 시:
- 코드가 어떻게 생성되었는지 이해
- AI 사용 패턴 학습
```

---

## 2부: Shared Agent Transcripts

### 개념

**Agent 대화 내용을 팀과 공유**할 수 있습니다.

```
일반 대화:
- 내 컴퓨터에만 저장
- 팀원이 볼 수 없음

Shared Transcript:
- 읽기 전용 링크 생성
- 팀원과 공유
- PR에 첨부
- 문서화
```

### 사용법

```
1. Agent 대화 완료
2. "Share Transcript" 클릭
3. 링크 생성
4. 팀원과 공유

링크 예시:
https://cursor.com/transcript/abc-123-xyz
```

### 활용 패턴

**패턴 1: PR에 첨부**
```
PR 설명:
이 PR은 로그인 기능을 추가합니다.

Agent 대화 내용:
https://cursor.com/transcript/abc-123

→ 리뷰어가 AI와의 대화를 보고 맥락 이해
```

**패턴 2: 문서화**
```
docs/how-to-implement-auth.md

인증 구현 방법:
1. ...
2. ...

참고: Agent와의 대화
https://cursor.com/transcript/def-456
```

**패턴 3: 팀 학습**
```
주간 회의:
"이번 주 좋았던 Agent 활용 사례"

1. 복잡한 리팩토링
   https://cursor.com/transcript/ghi-789
   
2. 성능 최적화
   https://cursor.com/transcript/jkl-012
```

---

## 3부: Layout Customization

### 개념

**작업 환경을 커스터마이징**할 수 있습니다.

```
기본 레이아웃:
- Agent 패널
- 에디터
- 터미널

커스텀 레이아웃:
- 원하는 대로 배치
- 작업별로 다른 레이아웃
- 단축키로 빠르게 전환
```

### 기본 제공 레이아웃

```
1. Agent 레이아웃
   - Agent 패널 크게
   - 에디터 중간
   - 터미널 작게

2. Editor 레이아웃
   - 에디터 크게
   - Agent 패널 작게
   - 터미널 숨김

3. Zen 레이아웃
   - 에디터만 전체 화면
   - 나머지 숨김

4. Browser 레이아웃
   - 브라우저 + 에디터
   - Agent 패널 우측
```

### 레이아웃 전환

```
단축키:
Cmd + Option + Tab: 다음 레이아웃
Cmd + Option + Shift + Tab: 이전 레이아웃
```

---

## 4부: Conversation Insights

### 개념

**Agent 대화를 분석**하여 작업 패턴을 파악합니다.

```
분석 항목:
- 카테고리: 버그 수정, 리팩토링, 설명
- 작업 유형: 유지보수, 신규 기능
- 복잡도: 프롬프트의 난이도
```

### 팀 대시보드

```
팀 Insights:

이번 주 작업:
- 버그 수정: 45%
- 신규 기능: 30%
- 리팩토링: 25%

가장 활발한 팀:
1. 프론트엔드팀: 150회
2. 백엔드팀: 120회
3. DevOps팀: 80회

복잡도 분포:
- 높음: 20%
- 중간: 50%
- 낮음: 30%
```

---

## 🚀 실습 프로젝트

### [Project 1: Blame & Transcripts 체험](./projects/01-blame-transcripts/README.md)

**학습 내용**:

- Cursor Blame 사용법
- AI 기여도 추적
- Shared Transcripts 생성
- 팀 협업 패턴

---

### [Project 2: Layout & Insights 활용](./projects/02-layout-insights/README.md)

**학습 내용**:

- Layout Customization
- 작업별 레이아웃 설정
- Conversation Insights 확인
- 팀 대시보드 활용

---

## 📊 학습 정리

이번 장에서 다룬 내용:

- ✅ Cursor Blame (AI 기여도 추적)
- ✅ Shared Agent Transcripts (대화 공유)
- ✅ Layout Customization (레이아웃 커스터마이징)
- ✅ Conversation Insights (작업 분석)

**핵심 포인트**:

```
AI 기여도 추적 → Cursor Blame
대화 공유 → Shared Transcripts
작업 환경 최적화 → Layout Customization
팀 분석 → Conversation Insights
```

**축하합니다!**

11장까지 완료하셨습니다! Cursor의 모든 기능을 학습하셨습니다.

---

## 🔗 공식 문서

- [Cursor Blame](https://cursor.com/docs/integrations/cursor-blame)
- [Shared Transcripts](https://cursor.com/docs/shared-transcripts)
- [Enterprise](https://cursor.com/docs/enterprise)
- [체인지로그 (2025.12.18, 2025.12.22, 2026.01.22)](https://cursor.com/changelog)

---

## 🎓 튜토리얼 완료

모든 장을 완료하셨습니다!

**학습한 내용**:
- 기본 과정 (1-7장): Cursor 핵심 기능
- 확장 과정 (8-11장): 최신 기능 (2026)

**다음 단계**:
- 실제 프로젝트에 적용
- 팀과 함께 활용
- 지속적인 학습

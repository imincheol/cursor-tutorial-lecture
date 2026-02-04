# 9장: Multi-Agent - 여러 업무 동시 처리

> **여러 Agent를 동시에 활용하여 병렬로 작업합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: 실무 시나리오 - 왜 필요한가?](#1부-실무-시나리오---왜-필요한가)
- [2부: 방법 1 - IDE 내 여러 채팅 창 전환](#2부-방법-1---ide-내-여러-채팅-창-전환-추천)
- [3부: 방법 2 - Worktree + CLI Agent](#3부-방법-2---worktree--cli-agent-고급)
- [4부: Subagents vs Multi-Agent](#4부-subagents-vs-multi-agent)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

실무에서는 하나의 작업만 하는 경우가 드뭅니다. 신규 기능을 개발하다가 갑자기 핫픽스 요청이 오고, 다른 페이지 작업 요청이 동시에 들어옵니다.

이럴 때 **여러 Agent를 동시에 활용**하여 병렬로 작업할 수 있습니다.

**학습 목표**:

- 실무에서 여러 업무가 동시에 발생하는 상황 이해
- IDE 내에서 여러 채팅 창을 전환하며 작업하는 방법
- Worktree + CLI Agent로 완전히 독립된 환경 구성
- Subagents와 Multi-Agent의 차이점 이해

**공식 문서**:
- [Agent 워크플로우](https://cursor.com/docs/cookbook/agent-workflows) - Agent 활용 패턴
- [Worktrees](https://cursor.com/docs/configuration/worktrees) - Worktree 설정 가이드 (2장 복습)
- [CLI 사용법](https://cursor.com/docs/cli/using) - CLI Agent (4장 복습)

---

## 1부: 실무 시나리오 - 왜 필요한가?

### 시나리오: 동시다발적 업무

```
당신은 신규 기능을 개발 중입니다...

[09:00] 당신: 신규 대시보드 개발 시작
              브랜치: feature/dashboard
              Agent 1: 대시보드 컴포넌트 작성 중...
              
[10:30] 팀장: 긴급! 프로덕션 버그 수정 필요
              → 핫픽스 브랜치 필요
              → 하지만 현재 작업 중...
              → Agent 1의 컨텍스트를 유지하고 싶음!
              
[11:00] 디자이너: 랜딩 페이지 수정 요청
                → 또 다른 브랜치 필요
                → 대시보드 작업은 계속...
```

### 문제: 단일 Agent의 한계

**전통적 방법: 하나의 Agent로 전환**
```
1. Agent에게 대시보드 작업 중단 요청
2. 브랜치 전환: feature/dashboard → hotfix/bug
3. Agent에게 버그 수정 요청
4. 완료 후 다시 브랜치 전환: hotfix/bug → feature/dashboard
5. Agent에게 대시보드 작업 재개 요청

문제:
- Agent의 컨텍스트가 섞임
- "아까 대시보드 작업 어디까지 했지?" 다시 설명 필요
- 작업 흐름이 끊김
```

**Multi-Agent 방법: 여러 Agent 동시 활용**
```
Agent 1: feature/dashboard 계속 개발 (컨텍스트 유지)
Agent 2: hotfix/bug 수정 (독립적으로)
Agent 3: feature/landing 수정 (독립적으로)

장점:
- 각 Agent가 독립적인 컨텍스트 유지
- 작업 흐름 끊기지 않음
- 언제든 원하는 작업으로 전환 가능
```

---

## 2부: 방법 1 - IDE 내 여러 채팅 창 전환 (추천)

### 개념

Cursor IDE에서 **여러 Agent 채팅 세션**을 열어두고, 채팅 창을 왔다갔다하며 작업합니다.

```
IDE 화면:
├── 채팅 1: feature/dashboard (Agent 1)
│   "대시보드 컴포넌트 작성 중..."
│
├── 채팅 2: hotfix/bug (Agent 2)
│   "버그 수정 완료!"
│
└── 채팅 3: feature/landing (Agent 3)
    "랜딩 페이지 수정 중..."

→ 채팅 창을 클릭하여 전환
→ 각 Agent는 독립적인 컨텍스트 유지
```

### 사용 방법

**1. 메인 작업 시작 (채팅 1)**
```
1. Cursor IDE 열기
2. Agent 채팅 열기 (Cmd/Ctrl + L)
3. "feature/dashboard 브랜치에서 대시보드 컴포넌트 만들어줘"
4. Agent가 작업 중...
```

**2. 핫픽스 발생 (채팅 2)**
```
1. 새로운 Agent 채팅 열기 (Cmd/Ctrl + Shift + L 또는 + 버튼)
2. Worktree 전환 (하단 상태바에서 hotfix/bug 선택)
   - 2장에서 배운 Worktree 기능 활용!
3. "로그인 버그 수정해줘"
4. Agent 2가 독립적으로 작업
```

**3. 랜딩 페이지 요청 (채팅 3)**
```
1. 또 다른 Agent 채팅 열기
2. Worktree 전환 (feature/landing 선택)
3. "랜딩 페이지 히어로 섹션 수정해줘"
4. Agent 3가 독립적으로 작업
```

**4. 작업 전환**
```
- 채팅 1 클릭 → Agent 1과 대화 재개 (대시보드)
- 채팅 2 클릭 → Agent 2와 대화 재개 (핫픽스)
- 채팅 3 클릭 → Agent 3과 대화 재개 (랜딩 페이지)

→ 각 Agent는 이전 컨텍스트를 완벽히 기억!
```

### Worktree 전환 (2장 복습)

**Cursor IDE 하단 상태바에서 Worktree 전환**:

```
하단 상태바:
feature/dashboard ▼  (클릭)
├── feature/dashboard (현재)
├── hotfix/bug
├── feature/landing
└── + New Worktree
```

**Worktree가 없다면 생성**:
```bash
# 터미널에서
git worktree add ../project-hotfix hotfix/bug
git worktree add ../project-landing feature/landing

# 또는 IDE 하단 상태바에서 "+ New Worktree" 클릭
```

**참고**: Worktree 기본 사용법은 [2장 4부](../session-02-differentiators/README.md#4부-git-worktree)를 참고하세요.

### 장점

✅ **한 화면에서 모든 작업 관리**
✅ **빠른 전환**: 채팅 창 클릭만으로 전환
✅ **컨텍스트 유지**: 각 Agent가 독립적인 대화 기록 유지
✅ **간편함**: 추가 설정 불필요

---

## 🚀 실습: Project 1 - IDE 내 여러 채팅 세션

이제 배운 내용을 바로 실습해봅시다!

### [Project 1: IDE 내 여러 채팅 세션으로 병렬 작업](./projects/01-ide-multi-chat/README.md)

**학습 내용**:

- IDE 내에서 여러 Agent 채팅 세션 열기
- 채팅 창 전환하며 작업하기
- Worktree 전환과 함께 사용하기
- 각 Agent의 독립적인 컨텍스트 확인

**실습 방식**:

실제 실무 시나리오를 재현합니다. 신규 기능 개발 중 핫픽스 요청이 오고, 추가로 다른 페이지 수정 요청이 오는 상황을 IDE 내에서 여러 채팅 창으로 처리합니다.

**실습 시나리오**:
1. 채팅 1: feature/dashboard 개발 시작
2. 핫픽스 발생 → 채팅 2 열기 → Worktree 전환 → 버그 수정
3. 랜딩 페이지 요청 → 채팅 3 열기 → Worktree 전환 → 페이지 수정
4. 채팅 1로 돌아가면 대시보드 컨텍스트 그대로 유지!

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-ide-multi-chat/README.md)

---

## 3부: 방법 2 - Worktree + CLI Agent (고급)

### 개념

IDE 내 채팅 전환이 불편하다면, **물리적으로 여러 창**을 띄워서 작업할 수 있습니다.

```
화면 구성:
┌─────────────────┬─────────────────┬─────────────────┐
│ IDE 창 1        │ 터미널 창 1     │ 터미널 창 2     │
│ feature/        │ hotfix/         │ feature/        │
│ dashboard       │ bug             │ landing         │
│                 │                 │                 │
│ Agent (IDE)     │ agent (CLI)     │ agent (CLI)     │
│ 대시보드 개발   │ 버그 수정       │ 랜딩 페이지     │
└─────────────────┴─────────────────┴─────────────────┘

→ 완전히 독립된 환경
→ 각자의 Worktree
→ 각자의 Agent
```

### 사용 방법

**1. Worktree 생성 (2장 복습)**
```bash
# 현재: feature/dashboard 작업 중
pwd
# /Users/user/project

# 핫픽스용 Worktree 생성
git worktree add ../project-hotfix hotfix/bug

# 랜딩 페이지용 Worktree 생성
git worktree add ../project-landing feature/landing

# 확인
git worktree list
# /Users/user/project              [feature/dashboard]
# /Users/user/project-hotfix       [hotfix/bug]
# /Users/user/project-landing      [feature/landing]
```

**2. 메인 작업 (IDE 창)**
```
IDE에서 /Users/user/project 열기
→ feature/dashboard 브랜치
→ Agent와 대화하며 대시보드 개발
```

**3. 핫픽스 (터미널 창 1)**
```bash
# 새 터미널 열기
cd ../project-hotfix

# CLI Agent 실행 (4장 복습)
agent

# Agent에게 요청
You: 로그인 시 세션 만료 버그 수정해줘
Agent: [버그 수정]

# 완료 후
You: !git add .
You: !git commit -m "fix: 세션 만료 문제 수정"
You: !git push
You: /exit
```

**4. 랜딩 페이지 (터미널 창 2)**
```bash
# 또 다른 터미널 열기
cd ../project-landing

# CLI Agent 실행
agent

# Agent에게 요청
You: 랜딩 페이지 히어로 섹션 수정해줘
Agent: [페이지 수정]

# 완료 후
You: !git add .
You: !git commit -m "feat: 히어로 섹션 업데이트"
You: !git push
You: /exit
```

**5. 메인 작업 계속 (IDE 창)**
```
IDE로 돌아가서 대시보드 개발 계속...

→ 컨텍스트 완벽히 유지됨
→ 다른 작업의 영향 전혀 없음
```

### 장점 및 단점

**장점**:
✅ **완전한 분리**: 각 환경이 물리적으로 분리
✅ **시각적 명확성**: 여러 창을 동시에 볼 수 있음
✅ **충돌 없음**: 파일 시스템 수준에서 분리

**단점**:
❌ **화면 공간**: 여러 창을 띄울 공간 필요
❌ **설정 복잡**: Worktree 생성 및 관리 필요
❌ **전환 비용**: 창 전환이 채팅 전환보다 번거로움

**언제 사용하는가?**:
- 화면이 충분히 큰 경우 (듀얼 모니터 등)
- 완전히 독립된 환경이 필요한 경우
- 여러 작업을 동시에 보면서 작업하고 싶은 경우

---

## 🚀 실습: Project 2 - Worktree + CLI Agent

이제 완전히 독립된 환경에서 작업해봅시다!

### [Project 2: Worktree + CLI Agent로 완전 분리 환경](./projects/02-worktree-cli-agent/README.md)

**학습 내용**:

- Worktree 생성 및 관리 (2장 복습)
- CLI Agent 사용 (4장 복습)
- 물리적으로 여러 창 띄워서 작업
- 완전히 독립된 환경에서 병렬 작업

**실습 방식**:

Worktree를 생성하고, 각 Worktree마다 독립된 터미널에서 CLI Agent를 실행하여 작업합니다. IDE 창과 터미널 창을 동시에 사용하는 고급 워크플로우를 체험합니다.

**실습 시나리오**:
1. Worktree 3개 생성 (feature/dashboard, hotfix/bug, feature/landing)
2. IDE 창: feature/dashboard 개발
3. 터미널 1: hotfix/bug 수정 (CLI Agent)
4. 터미널 2: feature/landing 수정 (CLI Agent)
5. 모든 작업이 완전히 독립적으로 진행

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-worktree-cli-agent/README.md)

---

## 4부: Subagents vs Multi-Agent

### 언제 무엇을 사용하는가?

**Subagents (8장) - 하나의 목적을 더 잘 해결**:
```
상황: 명확한 단일 작업
예시: "로그인 기능 추가해줘"

Subagents 동작:
→ Agent가 자동으로 UI, API, 테스트로 분산
→ 하나의 브랜치에서 작업
→ 자동 통합

적합:
✅ 명확한 요구사항
✅ 단일 목표
✅ 빠른 개발
✅ 하나의 브랜치
```

**Multi-Agent (9장) - 여러 업무를 동시 처리**:
```
상황: 동시다발적 업무
예시: 
- 신규 기능 개발 중
- 핫픽스 요청
- 다른 페이지 수정 요청

Multi-Agent 동작:
→ 개발자가 수동으로 여러 Agent 활용
→ 각 업무마다 독립 Agent (또는 독립 환경)
→ 수동 관리

적합:
✅ 여러 브랜치 필요
✅ 독립적인 업무
✅ 컨텍스트 유지 필요
✅ 병렬 작업
```

### 비교표

| 항목 | Subagents (8장) | Multi-Agent (9장) |
|-----|----------------|------------------|
| **목적** | 하나의 작업을 더 잘 해결 | 여러 업무 동시 처리 |
| **브랜치** | 단일 브랜치 | 다중 브랜치 |
| **Agent 수** | 1개 (자동 분산) | 여러 개 (수동 관리) |
| **분배 방식** | 자동 (Agent가 판단) | 수동 (개발자가 선택) |
| **통합** | 자동 | 수동 (각 브랜치별) |
| **사용 사례** | "기능 추가", "리팩토링" | "핫픽스", "병렬 개발" |

### 실전 선택 가이드

```
질문 1: 브랜치를 나눠야 하나?
→ YES: Multi-Agent (9장)
→ NO: Subagents (8장)

질문 2: 여러 업무가 동시에 발생했나?
→ YES: Multi-Agent (9장)
→ NO: Subagents (8장)

질문 3: 컨텍스트를 유지하면서 다른 작업을 해야 하나?
→ YES: Multi-Agent (9장)
→ NO: Subagents (8장)

질문 4: Agent가 자동으로 분산하길 원하나?
→ YES: Subagents (8장)
→ NO: Multi-Agent (9장)
```

### 실전 예시

**Subagents 사용 예시**:
```
You: "사용자 인증 시스템 추가해줘"

Agent: [자동으로 Subagents 생성]
  - Subagent 1: User 모델 생성
  - Subagent 2: 로그인 API 구현
  - Subagent 3: 회원가입 UI 작성
  - Subagent 4: 테스트 코드 작성

→ 하나의 브랜치에서 자동으로 통합
```

**Multi-Agent 사용 예시**:
```
상황: feature/dashboard 개발 중 → 핫픽스 발생

방법 1 (IDE 채팅 전환):
  - 채팅 1: feature/dashboard 계속 개발
  - 채팅 2: hotfix/bug 수정 (새 채팅 열기)

방법 2 (Worktree + CLI):
  - IDE: feature/dashboard 계속 개발
  - 터미널: hotfix/bug 수정 (CLI Agent)

→ 각각 독립적으로 작업, 수동으로 push
```

---

## 💡 학습 가이드

### 진행 방법

1. **1부: 실무 시나리오**
   - 실무에서 여러 업무가 동시에 발생하는 상황 이해
   - 단일 Agent의 한계 파악

2. **2부: IDE 내 여러 채팅 창 + 실습**
   - IDE 내에서 여러 Agent 채팅 세션 활용
   - Worktree 전환 (2장 복습)
   - 👉 **바로 실습**: Project 1 - IDE 내 여러 채팅 세션

3. **3부: Worktree + CLI Agent + 실습**
   - 물리적으로 여러 창 띄워서 작업
   - 완전히 독립된 환경 구성
   - 👉 **바로 실습**: Project 2 - Worktree + CLI Agent

4. **4부: Subagents vs Multi-Agent**
   - 두 패턴의 차이점 명확히 이해
   - 상황별 선택 기준

### 학습 팁

- **방법 1 (IDE 채팅 전환)을 먼저 시도**하세요 (더 간편함)
- **방법 2 (Worktree + CLI)**는 화면이 충분할 때 사용하세요
- Worktree 기본 사용법은 [2장 4부](../session-02-differentiators/README.md#4부-git-worktree) 참고
- CLI Agent 기본 사용법은 [4장](../session-04-cli/README.md) 참고
- Subagents와 Multi-Agent는 **대체 관계가 아닌 보완 관계**
- 실무에서는 두 가지를 상황에 맞게 선택적으로 사용

---

## 📊 학습 정리

이번 장에서 다룬 내용:

**1부: 실무 시나리오**
- ✅ 실무에서 여러 업무가 동시에 발생하는 상황 이해
- ✅ 단일 Agent의 한계 (컨텍스트 섞임, 작업 흐름 끊김)

**2부: IDE 내 여러 채팅 창 + 실습**
- ✅ IDE 내에서 여러 Agent 채팅 세션 활용
- ✅ Worktree 전환과 함께 사용 (2장 복습)
- ✅ **실습 완료**: IDE 내 여러 채팅 세션으로 병렬 작업

**3부: Worktree + CLI Agent + 실습**
- ✅ 물리적으로 여러 창 띄워서 작업
- ✅ 완전히 독립된 환경 구성
- ✅ **실습 완료**: Worktree + CLI Agent로 완전 분리 환경

**4부: Subagents vs Multi-Agent**
- ✅ 두 패턴의 차이점 명확히 이해
- ✅ 상황별 선택 기준

**핵심 포인트**:

```
Subagents (8장): 하나의 목적을 더 잘 해결 (자동 분산)
Multi-Agent (9장): 여러 업무를 동시 처리 (수동 관리)

선택 기준: 브랜치를 나눠야 하는가?
```

**다음 장 예고**:

10장에서는 **Image Generation**을 배웁니다. AI로 이미지, 다이어그램, UI 목업을 생성하는 방법을 익힙니다.

---

## ⏭ 다음 장

[10장: Image Generation - AI로 이미지 생성](../session-10-image/README.md)

---

## 🔗 관련 자료

- [2장 4부: Git Worktree](../session-02-differentiators/README.md#4부-git-worktree) - Worktree 기본 사용법
- [4장: CLI Agent](../session-04-cli/README.md) - CLI Agent 기본
- [8장: Subagents](../session-08-subagents/README.md) - 자동 오케스트레이션

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: IDE 내 여러 채팅 세션으로 병렬 작업](./projects/01-ide-multi-chat/README.md) - 2부 학습 후 진행
- [Project 2: Worktree + CLI Agent로 완전 분리 환경](./projects/02-worktree-cli-agent/README.md) - 3부 학습 후 진행

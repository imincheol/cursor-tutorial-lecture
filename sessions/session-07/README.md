# 7장: Multi-Agent - 여러 업무 동시 처리

> **Git Worktree로 독립 환경을 구성하고, 여러 Agent로 동시에 작업합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: 실무 시나리오 - 왜 필요한가?](#1부-실무-시나리오---왜-필요한가)
- [2부: Git Worktree - 독립 환경 구성](#2부-git-worktree---독립-환경-구성)
- [3부: Multi-Agent 패턴](#3부-multi-agent-패턴)
- [4부: Subagents vs Multi-Agent](#4부-subagents-vs-multi-agent)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

실무에서는 하나의 작업만 하는 경우가 드뭅니다. 신규 기능을 개발하다가 갑자기 핫픽스 요청이 오고, 다른 페이지 작업 요청이 동시에 들어옵니다.

이럴 때 **Git Worktree**로 독립 환경을 만들고, **Multi-Agent**로 여러 작업을 동시에 처리할 수 있습니다.

**학습 목표**:

- 실무에서 여러 업무가 동시에 발생하는 상황 이해
- Git Worktree로 독립 환경 구성
- Multi-Agent 패턴으로 병렬 작업
- Subagents와의 차이점 이해

---

## 1부: 실무 시나리오 - 왜 필요한가?

### 시나리오: 동시다발적 업무

```
당신은 신규 기능을 개발 중입니다...

[09:00] 당신: 신규 대시보드 개발 시작
              브랜치: feature/dashboard
              
[10:30] 팀장: 긴급! 프로덕션 버그 수정 필요
              → 핫픽스 브랜치 필요
              → 하지만 현재 작업 중...
              
[11:00] 디자이너: 랜딩 페이지 수정 요청
                → 또 다른 브랜치 필요
                → 대시보드 작업은 계속...
```

### 문제: 단일 환경의 한계

**방법 1: Git Stash (전통적)**
```bash
# 현재 작업 임시 저장
git stash

# 핫픽스 브랜치로 전환
git checkout -b hotfix/critical-bug

# 수정 완료 후
git checkout feature/dashboard
git stash pop

# 문제:
# - 컨텍스트 전환 비용
# - stash 관리 복잡
# - Agent 컨텍스트 오염
```

**방법 2: Git Worktree (현대적)**
```bash
# 독립 환경 생성
git worktree add ../hotfix-env hotfix/critical-bug

# 각 환경에서 독립적으로 작업
# - feature/dashboard: 계속 개발
# - hotfix/critical-bug: 핫픽스 처리
# - feature/landing: 랜딩 페이지 수정

# 장점:
# - 컨텍스트 유지
# - 독립적인 Agent
# - 동시 작업 가능
```

---

## 2부: Git Worktree - 독립 환경 구성

### Worktree란?

하나의 Git 저장소에서 **여러 작업 디렉터리**를 만드는 기능입니다.

```
project/
├── main-workspace/          # 메인 작업 공간
│   └── feature/dashboard    # 대시보드 개발 중
│
├── hotfix-workspace/        # 핫픽스 작업 공간
│   └── hotfix/critical-bug  # 버그 수정
│
└── landing-workspace/       # 랜딩 페이지 작업 공간
    └── feature/landing      # 랜딩 페이지 수정

→ 모두 같은 Git 저장소
→ 각각 독립적인 브랜치
→ 서로 간섭 없음
```

### Worktree 기본 명령어

```bash
# 1. Worktree 생성
git worktree add <경로> <브랜치>

# 예시
git worktree add ../hotfix-env hotfix/critical-bug

# 2. Worktree 목록 확인
git worktree list

# 3. Worktree 제거
git worktree remove <경로>

# 4. Worktree 정리 (삭제된 것 제거)
git worktree prune
```

### 실전 예시

```bash
# 현재: feature/dashboard 작업 중
pwd
# /Users/user/project

# 핫픽스를 위한 독립 환경 생성
git worktree add ../project-hotfix hotfix/critical-bug

# 랜딩 페이지를 위한 독립 환경 생성
git worktree add ../project-landing feature/landing

# 확인
git worktree list
# /Users/user/project              abc1234 [feature/dashboard]
# /Users/user/project-hotfix       def5678 [hotfix/critical-bug]
# /Users/user/project-landing      ghi9012 [feature/landing]
```

---

## 🚀 실습: Project 1 - Worktree 기본 사용

이제 배운 내용을 바로 실습해봅시다!

### [Project 1: Worktree 기본 사용](./projects/01-worktree-basic/README.md)

**학습 내용**:

- Git Worktree 생성 및 관리
- 독립 환경에서 작업
- 컨텍스트 오염 방지

**실습 방식**:

Worktree를 생성하고, 각 환경에서 독립적으로 작업하는 방법을 배웁니다. 메인 브랜치는 유지하면서 핫픽스 브랜치를 별도로 작업합니다.

**실습 예시**:
- 메인 작업: `feature/dashboard` 개발 중
- 핫픽스 발생: `git worktree add ../hotfix hotfix/bug`
- 독립 환경에서 버그 수정
- 메인 작업으로 돌아가면 컨텍스트 유지됨!

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-worktree-basic/README.md)

---

## 3부: Multi-Agent 패턴

### 패턴: 독립 환경 + 독립 Agent

```
환경 1: project/ (IDE)
├── 브랜치: feature/dashboard
└── Agent: IDE Agent
    → 신규 대시보드 개발 계속

환경 2: project-hotfix/ (Terminal 1)
├── 브랜치: hotfix/critical-bug
└── Agent: CLI Agent 1
    → 핫픽스 처리

환경 3: project-landing/ (Terminal 2)
├── 브랜치: feature/landing
└── Agent: CLI Agent 2
    → 랜딩 페이지 수정
```

### 실전 워크플로우

**1. 메인 작업 (IDE)**
```
IDE에서 feature/dashboard 개발 중...

Agent: 대시보드 컴포넌트 작성 중
```

**2. 핫픽스 발생 (Terminal 1)**
```bash
# 새 터미널 열기
cd ../project-hotfix

# Cursor CLI Agent 실행
cursor-agent

# Agent에게 요청
"버그 수정해줘: 로그인 시 세션 만료 문제"

# 수정 완료 후
git add .
git commit -m "fix: 세션 만료 문제 수정"
git push
```

**3. 랜딩 페이지 요청 (Terminal 2)**
```bash
# 또 다른 터미널 열기
cd ../project-landing

# Cursor CLI Agent 실행
cursor-agent

# Agent에게 요청
"랜딩 페이지 히어로 섹션 수정해줘"

# 수정 완료 후
git add .
git commit -m "feat: 히어로 섹션 업데이트"
git push
```

**4. 메인 작업 계속 (IDE)**
```
IDE로 돌아가서 대시보드 개발 계속...

→ 컨텍스트 유지됨
→ 작업 흐름 끊기지 않음
```

---

## 4부: Subagents vs Multi-Agent

### 언제 무엇을 사용하는가?

**Subagents (Session 6) - 하나의 목적**:
```
상황: 명확한 단일 작업
예시: "로그인 기능 추가해줘"

Subagents 동작:
→ 자동으로 UI, API, 테스트 분산
→ 하나의 브랜치에서 작업
→ 자동 통합

적합:
✅ 명확한 요구사항
✅ 단일 목표
✅ 빠른 개발
```

**Multi-Agent (Session 7) - 여러 업무**:
```
상황: 동시다발적 업무
예시: 
- 신규 기능 개발 중
- 핫픽스 요청
- 다른 페이지 수정 요청

Multi-Agent 동작:
→ 각 업무마다 독립 환경 (Worktree)
→ 각 환경마다 독립 Agent
→ 수동 관리

적합:
✅ 여러 브랜치 필요
✅ 독립적인 업무
✅ 컨텍스트 유지 필요
```

### 비교표

| 항목 | Subagents | Multi-Agent |
|-----|-----------|-------------|
| **목적** | 하나의 작업을 더 잘 해결 | 여러 업무 동시 처리 |
| **브랜치** | 단일 브랜치 | 다중 브랜치 |
| **환경** | 단일 환경 | 독립 환경 (Worktree) |
| **Agent** | 자동 생성 | 수동 생성 |
| **통합** | 자동 | 수동 (각 브랜치별) |
| **사용 사례** | "기능 추가", "리팩토링" | "핫픽스", "병렬 개발" |

### 실전 선택 가이드

```
질문 1: 브랜치를 나눠야 하나?
→ YES: Multi-Agent
→ NO: Subagents

질문 2: 여러 업무가 동시에 발생했나?
→ YES: Multi-Agent
→ NO: Subagents

질문 3: 컨텍스트를 유지하면서 다른 작업을 해야 하나?
→ YES: Multi-Agent
→ NO: Subagents
```

---

## 🚀 실습: Project 2 - Multi-Agent 실전 워크플로우

이제 Multi-Agent 패턴을 실전에서 체험해봅시다!

### [Project 2: Multi-Agent 실전 워크플로우](./projects/02-worktree-management/README.md)

**학습 내용**:

- IDE + CLI Agent 통합
- 여러 업무 동시 처리
- 실무 시나리오 실습

**실습 방식**:

실제 실무 시나리오를 재현합니다. 신규 기능 개발 중 핫픽스 요청이 오고, 추가로 다른 페이지 수정 요청이 오는 상황을 Worktree와 Multi-Agent로 처리합니다.

**실습 시나리오**:
1. IDE에서 대시보드 개발 중
2. 핫픽스 요청 → Worktree 생성 → CLI Agent로 처리
3. 랜딩 페이지 수정 요청 → 또 다른 Worktree → 또 다른 CLI Agent
4. 모든 작업이 독립적으로 진행
5. 컨텍스트 유지되어 효율적!

**실습 예시**:
- 환경 1 (IDE): `feature/dashboard` 계속 개발
- 환경 2 (Terminal 1): `hotfix/bug` 수정 완료 → push
- 환경 3 (Terminal 2): `feature/landing` 수정 완료 → push
- IDE로 돌아가면 대시보드 작업 그대로 유지!

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-worktree-management/README.md)

---

## 💡 학습 가이드

### 진행 방법

1. **1부: 실무 시나리오**
   - 실무에서 여러 업무가 동시에 발생하는 상황 이해
   - 단일 환경의 한계 파악

2. **2부: Git Worktree + 실습**
   - Git Worktree의 필요성 및 사용법 학습
   - 👉 **바로 실습**: Project 1 - Worktree 기본 사용

3. **3부: Multi-Agent 패턴 + 실습**
   - Multi-Agent 패턴 학습
   - 독립 환경 + 독립 Agent 활용
   - 👉 **바로 실습**: Project 2 - Multi-Agent 실전 워크플로우

4. **4부: Subagents vs Multi-Agent**
   - 두 패턴의 차이점 명확히 이해
   - 상황별 선택 기준

### 학습 팁

- Worktree는 Git의 기능입니다 (Cursor 전용 아님)
- Multi-Agent는 활용 패턴입니다 (새로운 개념 아님)
- Subagents와 Multi-Agent는 **대체 관계가 아닌 보완 관계**
- 실무에서는 두 가지를 상황에 맞게 선택적으로 사용
- 브랜치를 나눠야 하는 상황 = Multi-Agent
- 단일 브랜치에서 작업 = Subagents

---

## 📊 학습 정리

이번 장에서 다룬 내용:

**1부: 실무 시나리오**
- ✅ 실무에서 여러 업무가 동시에 발생하는 상황 이해
- ✅ 단일 환경의 한계 (Git Stash의 문제점)

**2부: Git Worktree + 실습**
- ✅ Git Worktree로 독립 환경 구성
- ✅ **실습 완료**: Worktree 기본 사용

**3부: Multi-Agent 패턴 + 실습**
- ✅ Multi-Agent 패턴으로 병렬 작업
- ✅ **실습 완료**: Multi-Agent 실전 워크플로우

**4부: Subagents vs Multi-Agent**
- ✅ 두 패턴의 차이점 명확히 이해
- ✅ 상황별 선택 기준

**핵심 포인트**:

```
Subagents: 하나의 목적을 더 잘 해결
Multi-Agent: 여러 업무를 동시에 처리

선택 기준: 브랜치를 나눠야 하는가?
```

**축하합니다!**

7장까지 완료하셨습니다! Cursor의 모든 핵심 기능을 학습하셨습니다.

---

## 🔗 관련 자료

- [Git Worktree 공식 문서](https://git-scm.com/docs/git-worktree)
- [6장: Agent Skills & Subagents](../session-06/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: Worktree 기본 사용](./projects/01-worktree-basic/README.md) - 2부 학습 후 진행
- [Project 2: Multi-Agent 실전 워크플로우](./projects/02-worktree-management/README.md) - 3부 학습 후 진행

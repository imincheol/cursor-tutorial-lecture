# 4교시: 오케스트레이션 전략 (Multi-Agent & Workflow)

## 📋 목차

- [학습 목표](#학습-목표)
- [핵심 개념](#핵심-개념)
- [3가지 오케스트레이션 전략](#3가지-오케스트레이션-전략)
- [실습 프로젝트](#실습-프로젝트)
- [학습 순서](#학습-순서)

---

## 🎯 학습 목표

이 교시를 마치면 다음을 할 수 있습니다:

- [ ] 오케스트레이션 개념 완벽 이해
- [ ] Agent vs Workflow 차이 이해
- [ ] 3가지 전략 (1P-1A, 1P-NA, NP-NA) 이해
- [ ] Worktree 기반 실전 구현

**소요 시간**: 50분

---

## 🧠 핵심 개념

### Agent vs Workflow

#### Agent (에이전트)
- **정의**: 하나의 `cursor-agent` 프로세스
- **특징**: 독립적인 실행 환경
- **예시**: 터미널에서 `cursor-agent` 실행

#### Workflow (워크플로우)
- **정의**: 특정 역할을 가진 서브 에이전트
- **특징**: 역할 기반 프롬프트
- **예시**: 기획, 디자인, 마크업, FE, QA

### Orchestration (오케스트레이션)

```
오케스트레이션 = 여러 Agent/Workflow를 조율하는 상위 프로세스

역할:
1. 작업 분석 및 분해
2. 적절한 Workflow 선택
3. 각 Agent에게 작업 할당
4. 결과 수집 및 통합
```

---

## 🎯 3가지 오케스트레이션 전략

### 전략 1: 1P-1A (1 Process - 1 Agent)

**구조**:
```
1개 프로세스 (cursor-agent)
  └─ N개 Workflow (프롬프트로 역할 구분)
      ├─ Planning Workflow
      ├─ Design Workflow
      ├─ Markup Workflow
      ├─ Frontend Workflow
      └─ QA Workflow
```

**특징**:
- ✅ 가장 간단
- ✅ 하나의 컨텍스트 공유
- ✅ 빠른 전환
- ❌ 병렬 처리 불가
- ❌ 컨텍스트 혼재 가능

**구현 방법**:
```bash
# 하나의 터미널에서
cursor-agent

# 프롬프트로 역할 전환
User: [Planning] 신규 페이지 기획해줘
Agent: ...

User: [Design] 위 기획을 바탕으로 디자인해줘
Agent: ...

User: [Markup] 위 디자인을 HTML/CSS로 구현해줘
Agent: ...
```

**사용 시나리오**:
- 간단한 작업
- 순차적 처리
- 빠른 프로토타입

---

### 전략 2: 1P-NA (1 Process - N Agents)

**구조**:
```
1개 오케스트레이션 프로세스
  └─ N개 독립 Agent (Worktree로 분리)
      ├─ planning/ (Agent 1)
      ├─ design/ (Agent 2)
      ├─ markup/ (Agent 3)
      ├─ frontend/ (Agent 4)
      └─ qa/ (Agent 5)
```

**특징**:
- ✅ 병렬 처리 가능
- ✅ 독립적인 컨텍스트
- ✅ 역할별 격리
- ❌ 수동 조율 필요
- ❌ Worktree 관리 복잡

**구현 방법**:
```bash
# 1. Worktree 생성
git worktree add ../planning main
git worktree add ../design main
git worktree add ../markup main
git worktree add ../frontend main
git worktree add ../qa main

# 2. 각 터미널에서 독립 실행
# Terminal 1
cd ../planning && cursor-agent
# [Planning] 역할로 작업

# Terminal 2
cd ../design && cursor-agent
# [Design] 역할로 작업

# Terminal 3
cd ../markup && cursor-agent
# [Markup] 역할로 작업

# 3. 수동으로 결과 통합
```

**사용 시나리오**:
- 복잡한 작업
- 병렬 처리 필요
- 역할별 독립성 중요

---

### 전략 3: NP-NA (N Processes - N Agents)

**구조**:
```
Root 오케스트레이션
  ├─ 1P-NA 그룹 1 (기능 A)
  │   ├─ planning/
  │   ├─ design/
  │   └─ frontend/
  │
  └─ 1P-NA 그룹 2 (기능 B)
      ├─ planning/
      ├─ markup/
      └─ qa/
```

**특징**:
- ✅ 최대 병렬성
- ✅ 기능별 독립성
- ✅ 대규모 프로젝트
- ❌ 매우 복잡
- ❌ 고급 조율 필요

**구현 방법**:
```bash
# 1. 기능별 그룹 생성
# 그룹 1: 기능 A
git worktree add ../feature-a/planning main
git worktree add ../feature-a/design main
git worktree add ../feature-a/frontend main

# 그룹 2: 기능 B
git worktree add ../feature-b/planning main
git worktree add ../feature-b/markup main
git worktree add ../feature-b/qa main

# 2. 각 그룹을 독립적으로 운영
# 그룹 1 (3개 터미널)
cd ../feature-a/planning && cursor-agent
cd ../feature-a/design && cursor-agent
cd ../feature-a/frontend && cursor-agent

# 그룹 2 (3개 터미널)
cd ../feature-b/planning && cursor-agent
cd ../feature-b/markup && cursor-agent
cd ../feature-b/qa && cursor-agent

# 3. 그룹별 통합 → 최종 통합
```

**사용 시나리오**:
- 대규모 프로젝트
- 여러 기능 동시 개발
- 팀 단위 작업

---

## 📊 전략 비교

| 특징 | 1P-1A | 1P-NA | NP-NA |
|------|-------|-------|-------|
| **프로세스** | 1개 | 1개 | N개 |
| **Agent** | 1개 | N개 | N×M개 |
| **Workflow** | 프롬프트 | Worktree | Worktree 그룹 |
| **병렬성** | ❌ | ✅ | ✅✅ |
| **복잡도** | 🟢 낮음 | 🟡 중간 | 🔴 높음 |
| **컨텍스트** | 공유 | 독립 | 독립 |
| **사용 시기** | 간단 | 중간 | 복잡 |

---

## 🎯 Workflow 역할 정의

### 기본 Workflow

#### 1. Planning (기획)
```
역할: 요구사항 분석 및 기획
입력: 사용자 요청
출력: 기획 문서, 요구사항 정의
```

#### 2. Design (디자인)
```
역할: UI/UX 디자인
입력: 기획 문서
출력: 디자인 스펙, 컴포넌트 구조
```

#### 3. Markup (마크업)
```
역할: HTML/CSS 구현
입력: 디자인 스펙
출력: HTML, CSS 파일
```

#### 4. Frontend (프론트엔드)
```
역할: JavaScript/React 구현
입력: 마크업, 기획
출력: 동작하는 컴포넌트
```

#### 5. QA (품질 보증)
```
역할: 테스트 및 검증
입력: 완성된 코드
출력: 테스트 결과, 버그 리포트
```

### 특수 Workflow

#### Design System Guardian
```
역할: 디자인 시스템 준수 감시
입력: 모든 코드 변경
출력: 위반 사항 리포트
```

#### Performance Monitor
```
역할: 성능 모니터링
입력: 빌드 결과
출력: 성능 메트릭, 개선 제안
```

#### Accessibility Checker
```
역할: 접근성 검증
입력: HTML/CSS
출력: 접근성 이슈, 개선 방안
```

---

## 🚀 실습 프로젝트

### Project 1: 1P-1A 전략 (프롬프트 기반)
**목표**: 하나의 Agent에서 Workflow 전환

**실습 내용**:
1. 하나의 `cursor-agent` 실행
2. 프롬프트로 역할 전환
3. 순차적 작업 진행
4. 컨텍스트 공유 확인

**소요 시간**: 15분

---

### Project 2: 1P-NA 전략 (Worktree 기반)
**목표**: Worktree로 독립 Agent 구성

**실습 내용**:
1. 5개 Worktree 생성 (planning, design, markup, frontend, qa)
2. 각 Worktree에서 독립 Agent 실행
3. 병렬 작업 진행
4. 수동으로 결과 통합

**소요 시간**: 20분

---

### Project 3: NP-NA 전략 (그룹 기반)
**목표**: 기능별 그룹 운영

**실습 내용**:
1. 2개 기능 그룹 생성
2. 각 그룹에 Worktree 할당
3. 그룹별 독립 작업
4. 그룹 통합 → 최종 통합

**소요 시간**: 15분

---

## 🎓 OpenCode와의 관계

### 발전 경로

```
수동 오케스트레이션 (현재 - 4교시)
  └─ 1P-1A: 프롬프트로 역할 전환
  └─ 1P-NA: Worktree로 병렬 처리
  └─ NP-NA: 그룹으로 대규모 처리

↓

자동 오케스트레이션 (OpenCode)
  └─ AI가 자동으로 전략 선택
  └─ AI가 자동으로 Workflow 할당
  └─ AI가 자동으로 결과 통합

↓

Oh My OpenCode (미래)
  └─ 팀 시스템으로 진화
  └─ 역할 기반 자동 할당
  └─ 지능형 작업 분배
```

### Cursor Agent로 OpenCode 흉내내기

**이 교시의 목표**:
- ✅ OpenCode의 개념 이해
- ✅ 수동으로 구현해보기
- ✅ 자동화 가능성 탐색

**실전 적용**:
1. 간단한 작업: 1P-1A
2. 중간 작업: 1P-NA
3. 복잡한 작업: NP-NA

---

## 📖 학습 순서

### Step 1: 개념 이해 (20분)
1. Agent vs Workflow
2. 3가지 전략 비교
3. Workflow 역할 정의

### Step 2: 실습 (30분)
1. **Project 1**: 1P-1A (15분)
2. **Project 2**: 1P-NA (20분)
3. **Project 3**: NP-NA (15분)

### Step 3: 복습 (10분)
- [ ] 3가지 전략 설명 가능
- [ ] 언제 어떤 전략 사용할지 판단 가능
- [ ] Worktree 기반 구현 가능

---

## 💡 핵심 포인트

### 전략 선택 기준

**1P-1A 사용**:
- 작업이 간단함
- 순차 처리로 충분
- 빠른 프로토타입

**1P-NA 사용**:
- 작업이 복잡함
- 병렬 처리 필요
- 역할별 독립성 중요

**NP-NA 사용**:
- 대규모 프로젝트
- 여러 기능 동시 개발
- 팀 단위 작업

---

## 🔗 참고 자료

- [Git Worktree 문서](https://git-scm.com/docs/git-worktree)
- [Cursor Agent CLI](https://cursor.com/docs/cli/overview)

---

## ⏭ 다음 교시

[5교시: 반복 작업 자동화](../session-05/README.md)

**4교시를 완료하면 OpenCode처럼 작업할 수 있습니다!** 🎉

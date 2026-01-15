# 4교시: Multi-Agent & Worktree - 여러 Agent 동시에

## 📋 목차

- [1-3교시 복습](#1-3교시-복습)
- [하나로는 부족하다](#하나로는-부족하다)
- [Multi-Agent](#multi-agent)
- [IDE + CLI 통합](#ide--cli-통합)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 1-3교시 복습

### 배운 것

```
1교시: Hooks (Agent 제어)
2교시: Debug Mode, Visual Editor, Agent Skills
3교시: CLI Agent, Shell Mode (IDE를 넘어서)
```

### 지금까지는...

```
항상 1개의 Agent만 사용

IDE Agent 1개
  또는
CLI Agent 1개

질문: "여러 Agent를 동시에 쓸 수 있나요?"
```

---

## 🤔 하나로는 부족하다

### 시나리오 1: 여러 접근법 비교

**문제**:
```
"로그인 기능 구현해줘"

접근법 A: 세션 기반
접근법 B: JWT 기반
접근법 C: OAuth 기반

1개 Agent로:
  A 구현 → 삭제 → B 구현 → 삭제 → C 구현
  → 비교 어려움
  → 시간 낭비
```

### 시나리오 2: 동시에 다른 작업

**문제**:
```
IDE에서 메인 개발 중
  ↓
갑자기 라이브러리 조사 필요
  ↓
IDE Agent에게 물어보면?
  → 메인 작업 컨텍스트 오염
  → 나중에 다시 설명해야 함
```

### 해결책: Multi-Agent

```
여러 Agent를 동시에!

Agent 1: 메인 개발
Agent 2: 라이브러리 조사
Agent 3: 대안 구현

→ 각각 독립적인 컨텍스트
→ 동시 진행 가능
→ 결과 비교 가능
```

---

## 🔀 Multi-Agent

### Worktree란?

```
Git의 기능: 하나의 저장소에서 여러 작업 디렉토리

main/           # 메인 작업
├─ worktree-a/  # 접근법 A
├─ worktree-b/  # 접근법 B
└─ worktree-c/  # 접근법 C
```

### Worktree 기본 명령어

```bash
# Worktree 생성
git worktree add ../approach-a main

# 목록 확인
git worktree list

# 제거
git worktree remove ../approach-a
```

### Multi-Agent 구조

```bash
# Terminal 1: Worktree A
cd ../approach-a
cursor-agent
# "세션 기반으로 로그인 구현해줘"

# Terminal 2: Worktree B
cd ../approach-b
cursor-agent
# "JWT 기반으로 로그인 구현해줘"

# Terminal 3: Worktree C
cd ../approach-c
cursor-agent
# "OAuth 기반으로 로그인 구현해줘"

# 3개 동시 진행!
# 결과 비교 후 최적 선택
```

### 장점

| 방식 | 1개 Agent | Multi-Agent |
|------|----------|-------------|
| **접근법** | 순차적 | 동시 |
| **비교** | 어려움 | 쉬움 |
| **시간** | 3배 | 1배 |
| **컨텍스트** | 혼재 | 독립 |

---

## 🔗 IDE + CLI 통합

### 최강의 조합

```
IDE (main 브랜치)
  └─ 메인 개발 진행
  └─ Debug Mode, Visual Editor 사용

Terminal 1 (worktree-research)
  └─ cursor-agent
  └─ 라이브러리 조사

Terminal 2 (worktree-experiment)
  └─ cursor-agent
  └─ 대안 구현 실험
```

### 실전 시나리오

```
상황: 프로필 페이지 개발 중

IDE:
  "프로필 페이지 UI 만들어줘"
  → Debug Mode로 디버깅
  → Visual Editor로 스타일 수정

Terminal 1:
  "이미지 업로드 라이브러리 비교해줘"
  → multer vs formidable vs busboy
  → 장단점 정리

Terminal 2:
  "이미지 최적화 방법 찾아줘"
  → sharp vs jimp vs imagemin
  → 성능 테스트

3개의 독립적인 대화!
메인 컨텍스트 오염 없음!
```

### 효과

```
Before (1개 Agent):
  메인 작업 → 중단 → 조사 → 컨텍스트 혼란 → 다시 설명
  총 시간: 3시간

After (Multi-Agent):
  메인 작업 (IDE)
  + 조사 (Terminal 1) ← 동시
  + 실험 (Terminal 2) ← 동시
  총 시간: 1시간
```

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] Worktree로 독립 환경 구성
- [ ] 여러 Agent 동시 실행
- [ ] IDE + CLI 통합 워크플로우
- [ ] 의사결정 속도 3배 향상

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: Worktree 기본](./projects/01-worktree-basic/README.md)
**목표**: Worktree 기본 사용법

**배울 것**:
- Worktree 생성
- 브랜치 독립 작업
- Worktree 간 이동

**깨달음**: "독립적인 환경을 쉽게 만들 수 있네!"

**소요 시간**: 10분

---

### [Project 2: Multi-Agent - 여러 접근법](./projects/02-multi-approach/README.md)
**목표**: 여러 접근법 동시 비교

**시나리오**:
- 로그인 기능 3가지 방식 구현
- 세션 기반 / JWT / OAuth
- 동시 진행 후 비교

**배울 것**:
- 3개 Worktree 생성
- 각각 다른 Agent 실행
- 결과 비교

**깨달음**: "동시에 비교하니까 결정이 빨라지네!"

**소요 시간**: 20분

---

### [Project 3: IDE + CLI 통합](./projects/03-ide-cli-integration/README.md)
**목표**: IDE + CLI 통합 워크플로우

**시나리오**:
- IDE: 메인 개발
- Terminal 1: 라이브러리 조사
- Terminal 2: 대안 구현

**배울 것**:
- IDE + CLI 동시 사용
- 컨텍스트 독립 유지
- 결과 통합

**깨달음**: "메인 작업 방해 없이 조사/실험 가능하네!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 개념 이해 (10분)

이 README를 읽으면서:
1. Multi-Agent의 필요성 이해
2. Worktree 개념 이해
3. IDE + CLI 통합 이해

### Step 2: Worktree 기본 (10분)

1. **[Project 1: Worktree 기본](./projects/01-worktree-basic/README.md)** (10분)
   - "독립 환경 만들기!"

### Step 3: Multi-Agent 실습 (40분)

1. **[Project 2: 여러 접근법](./projects/02-multi-approach/README.md)** (20분)
   - "동시 비교로 빠른 결정!"

2. **[Project 3: IDE + CLI](./projects/03-ide-cli-integration/README.md)** (20분)
   - "메인 작업 방해 없이!"

### Step 4: 복습 (10분)

- [ ] Worktree 사용 가능?
- [ ] Multi-Agent 운영 가능?
- [ ] IDE + CLI 통합 가능?

---

## 💡 핵심 깨달음

### 4교시에서 배운 것

```
Multi-Agent:
- 여러 Agent 동시 실행
- Worktree로 환경 분리
- IDE + CLI 통합

효과:
- 의사결정 3배 빠름
- 컨텍스트 오염 없음
- 병렬 작업 가능
```

### 효과

```
Before:
- 1개 Agent로 순차 작업
- 컨텍스트 혼란
- 느린 의사결정

After:
- Multi-Agent로 병렬 작업
- 독립적인 컨텍스트
- 빠른 의사결정
```

---

## 📚 심화 학습

더 깊은 내용을 원한다면:

**[Advanced: Role 기반 오케스트레이션](./ADVANCED_ORCHESTRATION.md)**
- 1 Agent = 1 Role
- Planning, Design, Markup, Frontend, QA
- 병렬 처리로 70% 시간 절약

---

## ⏭ 다음 교시

[5교시: 반복 작업 자동화 - 시간을 아끼자](../session-05/README.md)

**4교시를 완료하면 여러 Agent를 동시에 활용할 수 있습니다!** 🎉

---

## 🔗 빠른 링크

- [Project 1: Worktree 기본](./projects/01-worktree-basic/README.md)
- [Project 2: Multi-Agent - 여러 접근법](./projects/02-multi-approach/README.md)
- [Project 3: IDE + CLI 통합](./projects/03-ide-cli-integration/README.md)
- [심화: Role 기반 오케스트레이션](./ADVANCED_ORCHESTRATION.md)

# 4교시: 네 번째 발견 - Multi-Agent

> **"여러 개를 동시에?"**

## 📋 목차

- [지난 시간 복습](#지난-시간-복습)
- [1장: 하나로는 부족하다](#1장-하나로는-부족하다)
- [2장: Multi-Agent의 발견](#2장-multi-agent의-발견)
- [3장: IDE + CLI 통합](#3장-ide--cli-통합)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 지난 시간 복습

### 지금까지의 여정

```
1교시: Hooks (Agent 제어)
  → "이게 Cursor로 온 이유!"

2교시: Debug Mode, Visual Editor
  → "추측 대신 확인, 설명 대신 클릭!"

3교시: CLI Agent
  → "IDE 없이도 개발이 가능하다!"
```

### 현재 상태

```
IDE에서도 Agent를 쓸 수 있다.
터미널에서도 Agent를 쓸 수 있다.
어디서든 Agentic 개발이 가능하다.

"근데..."
"한 번에 하나씩만?"
```

---

## 📖 1장: 하나로는 부족하다

### 시나리오 1: 여러 접근법 비교

```
상황:
"로그인 기능을 구현해야 해."
"세션 기반? JWT? OAuth?"
"뭐가 좋을까?"

1개 Agent로:
  세션 기반 구현 → 삭제
  JWT 구현 → 삭제
  OAuth 구현 → 비교

"순서대로 하니까 시간이 너무 오래 걸려..."
"동시에 비교할 수는 없나?"
```

### 시나리오 2: 컨텍스트 오염

```
상황:
IDE에서 프로필 페이지를 개발 중이다.
갑자기 라이브러리 조사가 필요해졌다.

"이미지 업로드 라이브러리 뭐가 좋아?"

IDE Agent에게 물어봤다.
→ 메인 작업 컨텍스트가 오염됐다.
→ 나중에 다시 설명해야 한다.

"조사할 때마다 컨텍스트가 꼬이네..."
```

### 깨달음

```
문제:
- 1개 Agent로는 순차 작업만 가능
- 비교가 어렵다
- 컨텍스트가 오염된다

"여러 Agent를 동시에 쓸 수는 없나?"
```

---

## 📖 2장: Multi-Agent의 발견

### Worktree란?

```
Git의 기능을 찾아봤다.
"Worktree"라는 게 있다.

하나의 저장소에서 여러 작업 디렉토리를 만들 수 있다.

main/           # 메인 작업
├─ worktree-a/  # 접근법 A
├─ worktree-b/  # 접근법 B
└─ worktree-c/  # 접근법 C

"각각 독립적인 환경이네!"
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
```

### 깨달음

```
"여러 Agent를 동시에 돌릴 수 있다!"
"각각 독립적인 컨텍스트!"
"동시에 비교 가능!"

1개 Agent: 순차 작업, 비교 어려움
Multi-Agent: 병렬 작업, 비교 쉬움
```

| 방식 | 1개 Agent | Multi-Agent |
|------|----------|-------------|
| **접근법** | 순차적 | 동시 |
| **비교** | 어려움 | 쉬움 |
| **시간** | 3배 | 1배 |
| **컨텍스트** | 혼재 | 독립 |

---

## 📖 3장: IDE + CLI 통합

### 최강의 조합

```
IDE + CLI를 함께 쓰면?

IDE (main 브랜치):
  → 메인 개발 진행
  → Debug Mode, Visual Editor 사용

Terminal 1 (worktree-research):
  → cursor-agent
  → 라이브러리 조사

Terminal 2 (worktree-experiment):
  → cursor-agent
  → 대안 구현 실험

"메인 작업 방해 없이 조사/실험 가능!"
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

"의사결정이 3배 빨라졌다!"
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

**스토리 위치**: 2장 - Worktree 발견

**상황**:
```
"Worktree가 뭔지 알아보자."

Worktree를 생성해봤다.
독립적인 작업 환경이 만들어졌다.
```

**배울 것**:
- Worktree 생성
- 브랜치 독립 작업
- Worktree 간 이동

**깨달음**: "독립적인 환경이 이렇게 쉽게 만들어지네!"

**소요 시간**: 10분

---

### [Project 2: Multi-Agent - 여러 접근법](./projects/02-multi-approach/README.md)

**스토리 위치**: 2장 - Multi-Agent

**상황**:
```
"로그인 기능을 3가지 방식으로 구현해보자."
"동시에."

3개의 Worktree를 만들었다.
각각 Agent를 실행했다.
```

**배울 것**:
- 3개 Worktree 생성
- 각각 다른 Agent 실행
- 결과 비교

**깨달음**: "동시에 비교하니까 결정이 빨라지네!"

**소요 시간**: 20분

---

### [Project 3: IDE + CLI 통합](./projects/03-ide-cli-integration/README.md)

**스토리 위치**: 3장 - 최강의 조합

**상황**:
```
"IDE에서 메인 개발하면서,"
"터미널에서 조사/실험을 동시에 해보자."

IDE + 2개 터미널을 열었다.
```

**배울 것**:
- IDE + CLI 동시 사용
- 컨텍스트 독립 유지
- 결과 통합

**깨달음**: "메인 작업 방해 없이 조사/실험이 가능하네!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 스토리 이해 (10분)

이 README를 읽으면서:
1. 1개 Agent의 한계 이해
2. Multi-Agent의 가치 이해
3. IDE + CLI 통합의 강력함

### Step 2: Worktree 기본 (10분)

1. **[Project 1: Worktree 기본](./projects/01-worktree-basic/README.md)** (10분)
   - 독립 환경 만들기

### Step 3: Multi-Agent 실습 (40분)

1. **[Project 2: 여러 접근법](./projects/02-multi-approach/README.md)** (20분)
   - 동시 비교로 빠른 결정

2. **[Project 3: IDE + CLI](./projects/03-ide-cli-integration/README.md)** (20분)
   - 메인 작업 방해 없이

---

## 💡 에필로그: 정규 강의를 마치며

### 4교시에서 배운 것

```
1개 Agent로는 부족했다.
순차 작업, 비교 어려움, 컨텍스트 오염.

Multi-Agent 발견:
  "여러 Agent를 동시에 돌릴 수 있다!"
  "독립적인 컨텍스트!"
  "의사결정 3배 빠름!"

IDE + CLI 통합:
  "메인 작업 방해 없이 조사/실험 가능!"
```

### 정규 강의 전체 정리

```
1교시: Hooks
  → "프롬프트의 한계를 코드로 극복!"
  → 리뷰 시간 70% 단축

2교시: Debug Mode, Visual Editor
  → "추측 대신 확인, 설명 대신 클릭!"
  → 버그 50% 빠름, UI 70% 빠름

3교시: CLI Agent
  → "IDE 없이도 개발 가능!"
  → 어디서든 Agentic 개발

4교시: Multi-Agent
  → "여러 Agent를 동시에!"
  → 의사결정 3배 빠름
```

### 여정의 끝?

```
Cursor의 핵심 기능을 모두 배웠다.

"이제 실무에서 어떻게 적용하지?"
"반복 작업을 자동화하고 싶은데..."

추가 강의에서 계속...
```

---

## 📚 심화 학습

더 깊은 내용을 원한다면:

**[Advanced: Role 기반 오케스트레이션](./ADVANCED_ORCHESTRATION.md)**
- 1 Agent = 1 Role
- Planning, Design, Markup, Frontend, QA
- 체계적인 병렬 작업

---

## ⏭ 다음: 추가 강의

정규 강의를 마쳤습니다! 🎉

실무 적용을 원한다면:
- [5교시: 반복 작업 자동화](../session-05/README.md)
- [6교시: 마크업 품질 자동화](../session-06/README.md)

---

## 🔗 빠른 링크

- [Project 1: Worktree 기본](./projects/01-worktree-basic/README.md)
- [Project 2: Multi-Agent - 여러 접근법](./projects/02-multi-approach/README.md)
- [Project 3: IDE + CLI 통합](./projects/03-ide-cli-integration/README.md)
- [심화: Role 기반 오케스트레이션](./ADVANCED_ORCHESTRATION.md)

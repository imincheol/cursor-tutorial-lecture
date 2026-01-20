# Project 1: 여러 접근 방법 동시 실험

## 🎯 학습 목표

- Multi-Agent 개념 이해
- Worktree + 여러 Agent로 병렬 작업
- 여러 접근 방식을 동시에 비교

**예상 소요 시간**: 15분

---

## 💡 Multi-Agent란?

여러 개의 AI Agent를 동시에 활용하여 개발 작업을 병렬로 수행하는 패턴입니다.

```
단일 Agent:
작업 A → 작업 B → 작업 C
(순차적)

Multi-Agent:
Agent 1: 작업 A ┐
Agent 2: 작업 B ├→ 동시에!
Agent 3: 작업 C ┘
(병렬적)
```

---

## 🎯 실습 시나리오

**상황**: 사용자 인증 기능을 구현해야 하는데, JWT와 Session 중 어떤 방식이 더 좋을지 결정해야 합니다.

**해결책**: Multi-Agent로 두 방식을 동시에 구현하고 비교합니다!

---

## 🚀 실습 단계

### Step 1: Worktree 2개 생성 (2분)

```bash
# JWT 방식용 Worktree
git worktree add ../auth-jwt -b experiment/jwt-auth

# Session 방식용 Worktree
git worktree add ../auth-session -b experiment/session-auth

# 확인
git worktree list
```

---

### Step 2: Agent 1 - JWT 방식 구현 (5분)

**터미널 1**:

```bash
cd ../auth-jwt
cursor

You: JWT 기반 인증 시스템 구현해줘
     - login(username, password)
     - verifyToken(token)
     - 간단한 예제 포함

Agent: [auth-jwt.js 생성]

You: !node auth-jwt.js
→ 실행 확인

You: 테스트 코드도 추가해줘

Agent: [auth-jwt.test.js 생성]

You: !npm test
→ 테스트 실행

# 메모: JWT 방식의 장단점 기록
# 장점: 서버 부하 적음, 확장성 좋음
# 단점: 토큰 무효화 어려움
```

---

### Step 3: Agent 2 - Session 방식 구현 (5분)

**터미널 2** (동시에!):

```bash
cd ../auth-session
cursor

You: Session 기반 인증 시스템 구현해줘
     - login(username, password)
     - verifySession(sessionId)
     - 간단한 예제 포함

Agent: [auth-session.js 생성]

You: !node auth-session.js
→ 실행 확인

You: 테스트 코드도 추가해줘

Agent: [auth-session.test.js 생성]

You: !npm test
→ 테스트 실행

# 메모: Session 방식의 장단점 기록
# 장점: 즉시 무효화 가능, 관리 쉬움
# 단점: 서버 메모리 사용, 확장성 제한
```

---

### Step 4: 결과 비교 및 결정 (3분)

**메인 디렉터리**:

```bash
cd main/

# 두 방식 비교
echo "JWT 방식:"
cd ../auth-jwt && cat auth-jwt.js

echo "\nSession 방식:"
cd ../auth-session && cat auth-session.js

# 비교 항목:
# 1. 코드 복잡도
# 2. 성능
# 3. 보안
# 4. 확장성
# 5. 유지보수

# 결정: JWT 선택!
cd main/
git merge experiment/jwt-auth

# 정리
git worktree remove ../auth-session
git branch -d experiment/session-auth
```

---

## 💡 핵심 개념

### 단일 Agent vs Multi-Agent

| 방식          | 단일 Agent    | Multi-Agent      |
| ------------- | ------------- | ---------------- |
| **작업 방식** | 순차적        | 병렬적           |
| **시간**      | 느림          | 빠름 (3배)       |
| **컨텍스트**  | 혼재 가능     | 독립적           |
| **비교**      | 어려움        | 쉬움             |

### Multi-Agent 패턴

**1. 실험 패턴** (이번 실습):
```
Agent 1: 접근법 A 구현
Agent 2: 접근법 B 구현
→ 결과 비교 후 선택
```

**2. 역할 분담 패턴**:
```
Agent 1: 프론트엔드
Agent 2: 백엔드
Agent 3: 테스트
→ 동시 개발
```

**3. 조사 패턴**:
```
Agent 1: 메인 작업
Agent 2: 라이브러리 조사
Agent 3: 문서 작성
→ 메인 작업 방해 없음
```

---

## 🎯 실전 예시

### 시나리오: 상태 관리 라이브러리 선택

```bash
# Worktree 3개 생성
git worktree add ../state-redux -b experiment/redux
git worktree add ../state-mobx -b experiment/mobx
git worktree add ../state-zustand -b experiment/zustand

# 터미널 1: Redux
cd ../state-redux && cursor
You: Redux로 TODO 앱 만들어줘

# 터미널 2: MobX
cd ../state-mobx && cursor
You: MobX로 TODO 앱 만들어줘

# 터미널 3: Zustand
cd ../state-zustand && cursor
You: Zustand로 TODO 앱 만들어줘

# 동시에 3가지 방식 비교!
```

---

## 🛠️ 실전 팁

### 효율적인 Multi-Agent 사용

```bash
# 1. 명확한 역할 분담
Agent 1: 핵심 기능 (집중 필요)
Agent 2: 실험/조사 (백그라운드)
Agent 3: 문서/테스트 (보조)

# 2. 독립적인 작업 선택
✅ 좋은 예: 서로 다른 기능
❌ 나쁜 예: 같은 파일 수정

# 3. 정기적인 동기화
# 각 Agent의 결과를 주기적으로 확인
```

### 주의사항

```bash
# ❌ 피해야 할 것
# - 같은 파일을 여러 Agent가 수정
# - 너무 많은 Agent (3개 이하 권장)
# - 의존성이 있는 작업을 병렬로

# ✅ 권장 사항
# - 독립적인 작업 선택
# - 명확한 역할 분담
# - 정기적인 결과 확인
```

---

## ✅ 완료 체크리스트

- [ ] Worktree 2개 생성
- [ ] Agent 1로 첫 번째 접근법 구현
- [ ] Agent 2로 두 번째 접근법 구현 (동시에!)
- [ ] 두 결과 비교
- [ ] 최적의 방식 선택
- [ ] 불필요한 Worktree 정리

---

## 🎓 정리

### Multi-Agent의 가치

1. **의사결정 가속**: 여러 옵션을 동시에 실험
2. **시간 절약**: 순차 작업 대비 3배 빠름
3. **컨텍스트 독립**: 메인 작업 방해 없음
4. **객관적 비교**: 실제 구현으로 비교

### 언제 Multi-Agent를 사용할까?

- ✅ 여러 접근법을 비교해야 할 때
- ✅ 독립적인 작업이 여러 개 있을 때
- ✅ 조사/실험이 필요할 때
- ✅ 빠른 의사결정이 필요할 때

---

## 🎓 다음 단계

[Project 2: IDE + CLI 통합 워크플로우](../02-ide-cli-integration/README.md)

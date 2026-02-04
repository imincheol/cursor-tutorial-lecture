# Project 2: Worktree 관리 및 활용

## 🎯 학습 목표

- Worktree 효율적으로 관리하기
- 여러 접근 방식을 동시에 실험
- Multi-Agent 개발 준비


---

## 🎯 실습 시나리오

**상황**: 새로운 기능을 구현해야 하는데, 두 가지 접근 방식 중 어떤 것이 더 좋을지 모르겠습니다.

**해결책**: Worktree로 두 가지 접근 방식을 동시에 실험하고 비교합니다!

---

## 🚀 실습 단계

### Step 1: 실험용 Worktree 2개 생성

```bash
# 접근법 A: React 사용
git worktree add ../approach-a-react -b experiment/react-approach

# 접근법 B: Vue 사용
git worktree add ../approach-b-vue -b experiment/vue-approach

# 확인
git worktree list
```

---

### Step 2: 접근법 A 구현

```bash
# 접근법 A 디렉터리로 이동
cd ../approach-a-react

# Cursor Agent 실행
cursor

# Agent에게 요청
You: React로 간단한 TODO 컴포넌트 만들어줘

Agent: [컴포넌트 생성]

You: !npm install react react-dom

You: !npm start
→ 실행 확인

# 메모: 성능, 코드 복잡도 등 기록
```

---

### Step 3: 접근법 B 구현

```bash
# 접근법 B 디렉터리로 이동
cd ../approach-b-vue

# Cursor Agent 실행
cursor

# Agent에게 요청
You: Vue로 간단한 TODO 컴포넌트 만들어줘

Agent: [컴포넌트 생성]

You: !npm install vue

You: !npm start
→ 실행 확인

# 메모: 성능, 코드 복잡도 등 기록
```

---

### Step 4: 결과 비교 및 선택

```bash
# 메인 디렉터리로 돌아가기
cd main/

# 두 접근법 비교
# - 코드 복잡도
# - 성능
# - 팀 익숙도
# - 유지보수성

# 결정: React 선택!
git merge experiment/react-approach

# 불필요한 Worktree 정리
git worktree remove ../approach-b-vue
git branch -d experiment/vue-approach
```

---

## 💡 핵심 개념

### Worktree 관리 명령어

```bash
# Worktree 목록 (상세)
git worktree list --porcelain

# Worktree 이동 (브랜치 변경)
cd <worktree-path>
git checkout <other-branch>

# Worktree 삭제
git worktree remove <path>

# 삭제된 Worktree 정리
git worktree prune

# Worktree 잠금 (실수로 삭제 방지)
git worktree lock <path>

# Worktree 잠금 해제
git worktree unlock <path>
```

### Worktree 활용 패턴

**1. 실험 패턴**:
```
main/                  # 안정적인 코드
experiment-a/          # 실험 A
experiment-b/          # 실험 B
→ 결과 비교 후 선택
```

**2. 병렬 개발 패턴**:
```
main/                  # 메인 기능
feature-1/             # 기능 1
feature-2/             # 기능 2
bugfix/                # 긴급 버그 수정
```

**3. 리뷰 패턴**:
```
main/                  # 내 작업
review-pr-123/         # PR 리뷰용
review-pr-456/         # 다른 PR 리뷰용
```

---

## 🎯 고급 활용

### 1. Worktree + CLI Agent

```bash
# Worktree 1: 메인 작업
cd main/
cursor
You: 메인 기능 개발 중...

# Worktree 2: 실험 (다른 터미널)
cd experiment/
cursor
You: 새로운 라이브러리 테스트 중...
```

**장점**: 메인 작업 컨텍스트를 유지하면서 실험 가능!

### 2. Worktree + Multi-Agent (7장 예고)

```
IDE (main/)            → Agent 1: 메인 기능 개발
터미널 (feature/)      → Agent 2: 새 기능 실험
터미널 (bugfix/)       → Agent 3: 버그 수정
```

**장점**: 여러 Agent가 독립적으로 작업!

---

## 🛠️ 실전 팁

### Worktree 이름 규칙

```bash
# 좋은 예
worktree-feature-login
worktree-bugfix-api-error
worktree-experiment-new-lib

# 나쁜 예
wt1
temp
test
```

### Worktree 정리

```bash
# 주기적으로 사용하지 않는 Worktree 정리
git worktree list

# 불필요한 Worktree 삭제
git worktree remove <path>

# 브랜치도 삭제
git branch -d <branch>
```

### 주의사항

```bash
# ❌ 같은 브랜치를 여러 Worktree에서 체크아웃 불가
git worktree add ../wt1 -b feature
git worktree add ../wt2 -b feature  # 에러!

# ✅ 각 Worktree는 다른 브랜치 사용
git worktree add ../wt1 -b feature-a
git worktree add ../wt2 -b feature-b
```

---

## ✅ 완료 체크리스트

- [ ] 실험용 Worktree 2개 생성
- [ ] 각 Worktree에서 다른 접근법 구현
- [ ] 결과 비교 및 선택
- [ ] 불필요한 Worktree 정리
- [ ] Worktree 관리 명령어 익히기

---

## 🎓 정리

### Worktree의 가치

1. **독립성**: 각 작업이 서로 영향을 주지 않음
2. **효율성**: 브랜치 전환 없이 작업 전환
3. **실험**: 여러 접근법을 동시에 시도
4. **Multi-Agent**: 여러 Agent가 독립적으로 작업 (7장)

### 다음 장 예고

7장에서는 Worktree를 기반으로 **Multi-Agent** 개발을 배웁니다:
- IDE에서 Agent 1: 메인 기능 개발
- 터미널에서 Agent 2: 새 기능 실험
- 터미널에서 Agent 3: 버그 수정

**동시에!**

---

## 🎓 다음 장

[9장: Image Generation - AI로 이미지 생성](../../session-09/README.md)

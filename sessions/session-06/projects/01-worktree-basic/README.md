# Project 1: Worktree로 독립 환경 만들기

## 🎯 학습 목표

- Git Worktree 개념 이해
- 독립적인 작업 환경 생성
- 여러 브랜치를 동시에 작업하는 방법

**예상 소요 시간**: 15분

---

## 💡 Worktree란?

하나의 Git 저장소에서 여러 개의 독립적인 작업 디렉터리를 만드는 기능입니다.

```
기존 방식:
main/
└── (브랜치 전환 시 파일 변경)

Worktree 방식:
main/              # develop 브랜치
worktree-feature/  # feature 브랜치
worktree-bugfix/   # bugfix 브랜치
```

**장점**:
- 브랜치 전환 없이 여러 작업 동시 진행
- 컨텍스트 오염 방지
- Multi-Agent 개발의 기반

---

## 🚀 실습 단계

### Step 1: 현재 상태 확인 (2분)

```bash
# 현재 브랜치 확인
git branch

# 현재 위치 확인
pwd
```

---

### Step 2: 첫 번째 Worktree 생성 (5분)

```bash
# feature 브랜치용 Worktree 생성
git worktree add ../worktree-feature -b feature/new-ui

# 생성 확인
git worktree list
```

**결과**:
```
/path/to/main              abc1234 [main]
/path/to/worktree-feature  def5678 [feature/new-ui]
```

---

### Step 3: Worktree에서 작업하기 (5분)

```bash
# Worktree로 이동
cd ../worktree-feature

# 브랜치 확인
git branch

# 파일 생성
echo "New UI Feature" > feature.txt
git add feature.txt
git commit -m "feat: Add new UI feature"

# 메인 디렉터리로 돌아가기
cd -

# 메인 디렉터리에는 feature.txt가 없음!
ls
```

**핵심**: 각 Worktree는 완전히 독립적!

---

### Step 4: 두 번째 Worktree 생성 (3분)

```bash
# bugfix 브랜치용 Worktree 생성
git worktree add ../worktree-bugfix -b bugfix/login-error

# 모든 Worktree 확인
git worktree list
```

**결과**:
```
/path/to/main              abc1234 [main]
/path/to/worktree-feature  def5678 [feature/new-ui]
/path/to/worktree-bugfix   ghi9012 [bugfix/login-error]
```

---

## 💡 핵심 개념

### Worktree 명령어

```bash
# Worktree 생성
git worktree add <path> -b <branch>

# Worktree 목록
git worktree list

# Worktree 삭제
git worktree remove <path>

# Worktree 정리 (삭제된 디렉터리 정리)
git worktree prune
```

### Worktree 구조

```
main/                    # 메인 작업 디렉터리
├── .git/               # Git 저장소
├── src/
└── README.md

worktree-feature/        # Feature Worktree
├── .git → main/.git    # 심볼릭 링크
├── src/
├── README.md
└── feature.txt         # 독립적인 파일

worktree-bugfix/         # Bugfix Worktree
├── .git → main/.git    # 심볼릭 링크
├── src/
├── README.md
└── bugfix.txt          # 독립적인 파일
```

---

## 🎯 실습 시나리오

### 시나리오: 동시에 여러 작업 진행

```bash
# 터미널 1: 메인 작업
cd main/
# develop 브랜치에서 메인 기능 개발

# 터미널 2: Feature 작업
cd worktree-feature/
# feature 브랜치에서 새 기능 실험

# 터미널 3: Bugfix 작업
cd worktree-bugfix/
# bugfix 브랜치에서 버그 수정
```

**장점**:
- 각 작업이 서로 영향을 주지 않음
- 브랜치 전환 없이 즉시 작업 전환
- 컨텍스트 유지

---

## ✅ 완료 체크리스트

- [ ] Git Worktree 개념 이해
- [ ] 첫 번째 Worktree 생성
- [ ] Worktree에서 독립적으로 작업
- [ ] 두 번째 Worktree 생성
- [ ] `git worktree list`로 확인
- [ ] 각 Worktree가 독립적임을 확인

---

## 🎓 다음 단계

[Project 2: Worktree 관리 및 활용](../02-worktree-management/README.md)

# Project 2: 터미널에서 전체 개발 프로세스

## 🎯 학습 목표

- IDE 없이 CLI만으로 전체 개발 프로세스 경험
- Shell Mode를 활용한 효율적인 워크플로우
- SSH/CI/CD 환경에서의 활용 가능성 이해


---

## 📁 프로젝트 구조

```
02-terminal-dev/
├── README.md           # 이 파일
└── (Agent가 생성할 파일들)
```

---

## 🎯 실습 시나리오

**목표**: TODO API를 터미널에서만 개발하기

- 요구사항 분석
- 코드 작성
- 테스트 작성
- 실행 및 디버깅
- Git 커밋

**모든 작업을 터미널에서!**

---

## 🚀 실습 단계

### Step 1: 프로젝트 초기화 (3분)

```bash
$ cursor

You: Node.js 프로젝트 초기화해줘. 
     package.json 만들고 필요한 의존성 설치해줘.

Agent: [package.json 생성]

You: !cat package.json
→ 내용 확인

You: !npm install
→ 의존성 설치
```

---

### Step 2: TODO API 개발 (5분)

```bash
You: todo.js 파일 만들어줘.
     - addTodo(text)
     - getTodos()
     - deleteTodo(id)
     함수들이 필요해

Agent: [todo.js 생성]

You: !cat todo.js
→ 코드 확인

You: 메모리 대신 파일에 저장하도록 수정해줘

Agent: [수정]

You: !cat todo.js
→ 수정 내용 확인
```

---

### Step 3: 테스트 작성 (3분)

```bash
You: todo.test.js 테스트 파일 만들어줘

Agent: [todo.test.js 생성]

You: !npm test
→ 테스트 실행

You: 테스트 실패한 부분 수정해줘

Agent: [수정]

You: !npm test
→ 다시 테스트
```

---

### Step 4: 실행 및 디버깅 (2분)

```bash
You: index.js 만들어서 todo 기능 사용하는 예제 작성해줘

Agent: [index.js 생성]

You: !node index.js
→ 실행 (에러 발생 가능)

You: 에러 수정해줘

Agent: [수정]

You: !node index.js
→ 정상 실행 확인
```

---

### Step 5: Git 커밋 (2분)

```bash
You: !git status
→ 변경 파일 확인

You: !git add .

You: !git commit -m "feat: Add TODO API"

You: !git log --oneline -5
→ 커밋 확인
```

---

## 💡 핵심 개념

### IDE vs CLI Agent

| 작업           | IDE 필요 | CLI Agent |
| -------------- | -------- | --------- |
| **코드 작성**  | ✅       | ✅        |
| **파일 관리**  | ✅       | ✅        |
| **테스트 실행** | ✅       | ✅ Shell Mode |
| **Git 작업**   | ✅       | ✅ Shell Mode |
| **디버깅**     | ✅       | ✅ Shell Mode |

### Shell Mode 워크플로우

```
개발 사이클:

1. Agent에게 코드 작성 요청
2. !cat으로 코드 확인
3. !node로 실행
4. 에러 발견 → Agent에게 수정 요청
5. !node로 다시 실행
6. !git으로 커밋

→ 모든 작업이 터미널에서!
```

---

## 🎯 실전 시나리오

### SSH 서버에서 개발

```bash
# SSH 접속
ssh user@server

# Cursor CLI 실행
cursor

# 코드 수정
You: config.js의 포트를 8080으로 바꿔줘
Agent: [수정]

# 확인 및 재시작
You: !cat config.js
You: !pm2 restart app
```

### CI/CD 파이프라인에서

```bash
# CI 스크립트 내에서
cursor --non-interactive "테스트 실패한 부분 수정해줘"

# 또는
echo "테스트 커버리지 80% 이상 되도록 테스트 추가해줘" | cursor
```

---

## 🛠️ 고급 활용

### 1. 빠른 버그 수정

```bash
$ cursor

You: 로그 파일 보여줘
!cat logs/error.log

You: 이 에러 고쳐줘
Agent: [수정]

You: !npm test
→ 확인
```

### 2. 코드 리뷰

```bash
You: !git diff main

You: 이 변경사항 리뷰해줘
Agent: [리뷰 및 제안]

You: 제안대로 수정해줘
Agent: [수정]
```

### 3. 문서화

```bash
You: README.md 만들어줘. 
     API 사용법 포함해서

Agent: [README.md 생성]

You: !cat README.md
→ 확인
```

---

## ✅ 완료 체크리스트

- [ ] 프로젝트 초기화 (package.json)
- [ ] 코드 작성 (todo.js)
- [ ] 테스트 작성 및 실행
- [ ] Shell Mode로 코드 실행
- [ ] 에러 디버깅 및 수정
- [ ] Git 커밋
- [ ] 전체 프로세스를 터미널에서만 완료

---

## 🎓 정리

### CLI Agent의 가치

1. **IDE 불필요**: 터미널만 있으면 개발 가능
2. **SSH 환경**: 원격 서버에서도 Agentic 개발
3. **CI/CD**: 자동화 파이프라인에 통합
4. **빠른 작업**: 간단한 수정을 위해 IDE 열 필요 없음

### 언제 CLI Agent를 사용할까?

- ✅ SSH로 서버 접속했을 때
- ✅ 빠른 버그 수정이 필요할 때
- ✅ CI/CD 파이프라인 안에서
- ✅ 가벼운 작업을 빠르게 처리할 때

---

## 🎓 다음 장

[6장: Git Worktree - 독립 환경 구성](../../session-06/README.md)

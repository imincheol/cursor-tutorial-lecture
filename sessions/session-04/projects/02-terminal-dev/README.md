# Project 2: 터미널에서 전체 개발 프로세스

## 🎯 학습 목표

- IDE 없이 CLI만으로 전체 개발 프로세스 경험
- Shell Mode를 활용한 효율적인 워크플로우
- Cloud Handoff로 장시간 작업 위임
- SSH/CI/CD 환경에서의 활용 가능성 이해

**공식 문서**:
- [CLI 사용법](https://cursor.com/docs/cli/using)
- [Cloud Agent](https://cursor.com/docs/cloud-agent)
- [Cloud Handoff (2026.01.16)](https://cursor.com/changelog)


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

### Step 1: 프로젝트 초기화

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

### Step 2: TODO API 개발

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

### Step 3: 테스트 작성

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

### Step 4: 실행 및 디버깅

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

### Step 5: Cloud Handoff 체험 (선택)

**Cloud Handoff란?**

로컬 작업을 클라우드로 넘겨서 계속 실행하는 기능입니다.

```bash
$ cursor

You: & 전체 프로젝트에 TypeScript 타입 추가해줘
     & 모든 파일을 변환하고 테스트도 업데이트해줘

Agent: 클라우드로 전송되었습니다.
       https://cursor.com/agents 에서 확인하세요.

# 터미널 종료해도 작업 계속됨
# 웹이나 모바일에서 진행 상황 확인
```

**사용 시점**:
- 장시간 작업 (대규모 리팩토링, 마이그레이션)
- 로컬 리소스 부족
- 작업 중 자리를 비워야 할 때

**실습 예시**:

```bash
You: & README.md를 한국어와 영어 버전으로 만들어줘
     & API 문서도 자동 생성해줘
     & 완료되면 알려줘

Agent: 클라우드로 전송되었습니다.

# 다른 작업 하거나 퇴근
# 나중에 cursor.com/agents에서 결과 확인
```

**공식 문서**: [Cloud Handoff (2026.01.16)](https://cursor.com/changelog)

---

### Step 6: Git 커밋

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

## 💡 Cloud Handoff 활용

### 언제 사용하는가?

**적합한 경우**:
- ✅ 대규모 리팩토링 (수십 개 파일 변경)
- ✅ 마이그레이션 작업 (라이브러리 버전 업그레이드)
- ✅ 문서 자동 생성 (여러 언어 번역)
- ✅ 퇴근 시간에 시작한 작업

**부적합한 경우**:
- ❌ 빠른 수정 (로컬이 더 빠름)
- ❌ 민감한 데이터 처리
- ❌ 실시간 피드백 필요

### 실전 예시

```bash
# 시나리오: 퇴근 시간에 큰 작업 발생

$ cursor

You: & 모든 React 컴포넌트를 함수형으로 변환해줘
     & PropTypes를 TypeScript로 마이그레이션해줘
     & 테스트도 모두 업데이트해줘
     & 완료되면 PR 생성해줘

Agent: 클라우드로 전송되었습니다.
       작업 ID: abc-123-xyz

# 퇴근
# 집에서 모바일로 cursor.com/agents 확인
# 다음날 출근하면 PR 완성되어 있음
```

---

## ✅ 완료 체크리스트

- [ ] 프로젝트 초기화 (package.json)
- [ ] 코드 작성 (todo.js)
- [ ] 테스트 작성 및 실행
- [ ] Shell Mode로 코드 실행
- [ ] 에러 디버깅 및 수정
- [ ] Cloud Handoff 체험 (선택)
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

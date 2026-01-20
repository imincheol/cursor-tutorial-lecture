# Project 1: CLI Agent 기본 사용법 및 Shell Mode

## 🎯 학습 목표

- Cursor CLI 설치 및 실행
- CLI Agent와 대화하며 코드 작업
- Shell Mode (`!` 명령) 사용법 익히기


---

## 📁 프로젝트 구조

```
01-cli-basic/
├── README.md           # 이 파일
└── src/
    └── hello.js        # 테스트용 파일
```

---

## 🚀 실습 단계

### Step 1: Cursor CLI 설치 (2분)

1. Cursor IDE 열기
2. `Cmd+Shift+P` (Mac) 또는 `Ctrl+Shift+P` (Windows)
3. "Shell Command: Install 'cursor' command in PATH" 검색 및 실행

**확인**:
```bash
cursor --version
```

---

### Step 2: CLI Agent 실행 (3분)

터미널에서 다음 명령 실행:

```bash
cd sessions/session-05/projects/01-cli-basic
cursor
```

**결과**:
- CLI Agent 세션 시작
- 대화형 프롬프트 표시

---

### Step 3: Agent와 대화하며 코드 작업 (5분)

CLI Agent에게 다음을 요청하세요:

```
You: src/hello.js에 간단한 인사 함수 만들어줘

Agent: [파일 생성/수정]

You: 함수에 이름 파라미터 추가해줘

Agent: [파일 수정]

You: 테스트 코드도 추가해줘

Agent: [테스트 파일 생성]
```

**확인 사항**:
- IDE 없이 터미널에서 모든 작업 가능
- 파일 생성, 수정, 읽기 모두 가능

---

### Step 4: Shell Mode 사용하기 (5분)

CLI Agent 대화 중에 `!` 명령으로 빠르게 명령 실행:

```bash
You: src/hello.js 파일 만들어줘

Agent: [파일 생성]

You: !cat src/hello.js
→ 파일 내용 즉시 표시

You: !node src/hello.js
→ 코드 실행 결과 표시

You: 실행 결과가 이상한데 수정해줘

Agent: [수정]

You: !node src/hello.js
→ 수정된 코드 실행
```

**Shell Mode의 장점**:
- 대화 중단 없이 명령 실행
- 결과가 대화에 포함됨
- 빠른 피드백 루프

---

## 💡 핵심 개념

### Cursor CLI vs Copilot CLI

| 기능            | Copilot CLI | Cursor CLI |
| --------------- | ----------- | ---------- |
| **명령어 제안** | ✅          | ✅         |
| **코드 작업**   | ❌          | ✅         |
| **파일 수정**   | ❌          | ✅         |
| **대화형 세션** | ❌          | ✅         |
| **Shell Mode**  | ❌          | ✅ `!` 명령|

### Shell Mode 명령어 예시

```bash
# 파일 확인
!ls -la
!cat filename.js

# 코드 실행
!node index.js
!python script.py

# Git 작업
!git status
!git diff

# 테스트
!npm test
!pytest

# 빌드
!npm run build
!cargo build
```

### Shell Mode 제한사항

```bash
# ❌ 안 되는 것들 (30초 타임아웃, 대화형 불가)
!npm start           # 서버 실행 (계속 실행됨)
!vim file.js         # 대화형 에디터
!python             # REPL

# ✅ 되는 것들 (짧은 명령)
!npm test            # 테스트 실행
!git status          # 상태 확인
!cat file.js         # 파일 읽기
```

---

## 🎯 실습 예시

### 전체 워크플로우

```bash
$ cursor

You: 간단한 계산기 함수 만들어줘

Agent: [calculator.js 생성]

You: !cat calculator.js
→ 코드 확인

You: !node calculator.js
→ 실행 (에러 발생)

You: 에러 수정해줘

Agent: [수정]

You: !node calculator.js
→ 정상 실행 확인

You: 테스트 코드도 추가해줘

Agent: [calculator.test.js 생성]

You: !npm test
→ 테스트 실행

You: 완벽해! 고마워
```

---

## ✅ 완료 체크리스트

- [ ] Cursor CLI 설치 확인
- [ ] `cursor` 명령으로 Agent 실행
- [ ] Agent와 대화하며 파일 생성
- [ ] Shell Mode (`!`) 사용해보기
- [ ] 코드 작성 → 실행 → 수정 사이클 경험

---

## 🎓 다음 단계

[Project 2: 터미널에서 전체 개발 프로세스](../02-terminal-dev/README.md)

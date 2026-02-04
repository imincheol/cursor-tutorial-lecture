# Project 1: CLI Agent 기본 사용법 및 Shell Mode

## 🎯 학습 목표

- Cursor CLI 설치 및 실행
- CLI Agent 모드 (Agent, Plan, Ask) 이해 및 사용
- Shell Mode (`!` 명령) 사용법 익히기
- 각 모드의 차이점 체험

**공식 문서**:
- [CLI 개요](https://cursor.com/docs/cli/overview)
- [CLI 사용법](https://cursor.com/docs/cli/using)
- [Shell Mode](https://cursor.com/docs/cli/shell-mode)
- [체인지로그 - CLI Agent Modes (2026.01.16)](https://cursor.com/changelog)


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

### Step 1: Cursor CLI 설치

1. Cursor IDE 열기
2. `Cmd+Shift+P` (Mac) 또는 `Ctrl+Shift+P` (Windows)
3. "Shell Command: Install 'cursor' command in PATH" 검색 및 실행

**확인**:
```bash
cursor --version
```

---

### Step 2: CLI Agent 실행

터미널에서 다음 명령 실행:

```bash
cd sessions/session-05/projects/01-cli-basic
cursor
```

**결과**:
- CLI Agent 세션 시작
- 대화형 프롬프트 표시

---

### Step 3: Agent 모드 사용하기

**Agent 모드 (기본)**:

```bash
cursor

# 또는
cursor --mode=agent
```

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

### Step 4: Plan 모드 사용하기

**Plan 모드**:

```bash
cursor /plan

# 또는
cursor --mode=plan
```

Plan 모드에서 다음을 요청하세요:

```
You: 간단한 사용자 인증 시스템 만들어줘

Agent: [계획 수립]
       다음 단계로 진행할까요?
       1. 사용자 모델 정의
       2. 로그인 함수 작성
       3. 토큰 생성 로직
       4. 테스트 코드

You: 네, 진행해주세요

Agent: [실행]
```

**Plan 모드의 장점**:
- 복잡한 작업을 사전에 계획
- 단계별로 검토 가능
- 명확한 질문으로 요구사항 확인

**공식 문서**: [CLI Plan Mode (2026.01.16)](https://cursor.com/changelog)

---

### Step 5: Ask 모드 사용하기

**Ask 모드**:

```bash
cursor /ask

# 또는
cursor --mode=ask
```

Ask 모드에서 다음을 요청하세요:

```
You: src/hello.js 파일의 코드는 어떻게 동작하나요?

Agent: [설명만 제공, 코드 변경 없음]

You: 이 패턴의 장단점은 뭔가요?

Agent: [분석 및 설명]
```

**Ask 모드의 장점**:
- 코드를 변경하지 않고 탐색
- 안전한 학습 환경
- 코드 이해에 집중

**공식 문서**: [CLI Ask Mode (2026.01.16)](https://cursor.com/changelog)

---

### Step 6: Shell Mode 사용하기

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

## 💡 모드 비교

### Agent vs Plan vs Ask

| 모드 | 코드 변경 | 사용 시점 | 명령어 |
|------|----------|----------|--------|
| **Agent** | ✅ | 즉시 실행 | `cursor` |
| **Plan** | ✅ | 복잡한 작업 | `cursor /plan` |
| **Ask** | ❌ | 코드 탐색 | `cursor /ask` |

### 실전 선택 가이드

```
빠른 수정 필요 → Agent 모드
복잡한 기능 개발 → Plan 모드
코드 이해하기 → Ask 모드
```

---

## ✅ 완료 체크리스트

- [ ] Cursor CLI 설치 확인
- [ ] Agent 모드로 파일 생성
- [ ] Plan 모드로 복잡한 작업 계획
- [ ] Ask 모드로 코드 탐색
- [ ] Shell Mode (`!`) 사용해보기
- [ ] 각 모드의 차이점 이해

---

## 🎓 다음 단계

[Project 2: 터미널에서 전체 개발 프로세스](../02-terminal-dev/README.md)

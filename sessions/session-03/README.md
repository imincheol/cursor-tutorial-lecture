# 3교시: CLI Agent - IDE를 넘어서

## 📋 목차

- [1-2교시 복습](#1-2교시-복습)
- [CLI도 공통점](#cli도-공통점)
- [차이점: Agentic 개발](#차이점-agentic-개발)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 1-2교시 복습

### 배운 것

```
1교시: Hooks (Agent 제어)
  → Copilot과 95% 동일
  → Hooks가 핵심 차이 (코드 레벨 강제)

2교시: Debug Mode, Visual Editor
  → Debug Mode: 추측 → 확인
  → Visual Editor: 설명 → 클릭
```

### 지금까지는...

```
모두 IDE 안에서의 기능!

Cursor IDE
  ├─ Hooks
  ├─ Debug Mode
  └─ Visual Editor

질문: "CLI는 어떤가요?"
```

---

## 🔄 CLI도 공통점

### Copilot과 Cursor 모두 CLI 지원

```
Copilot CLI:
- 터미널에서 AI 사용
- 자연어 → 명령어 변환
- gh copilot suggest

Cursor CLI:
- 터미널에서 AI 사용  
- 자연어 → 명령어 변환
- cursor-agent shell
```

### Shell Mode 비교

| 기능 | Copilot CLI | Cursor CLI |
|------|-------------|------------|
| **명령어 생성** | ✅ | ✅ |
| **자연어 입력** | ✅ | ✅ |
| **실행 전 확인** | ✅ | ✅ |

**동일합니다!**

---

## 🚀 차이점: Agentic 개발

### Shell Mode vs Agent Mode

```
Shell Mode (둘 다 동일):
- 명령어만 생성
- 파일 수정 불가
- 단발성 요청

Agent Mode (Cursor 강점):
- 파일 수정 가능
- 코드 작업 가능
- 대화형 세션
- 컨텍스트 유지
```

### Cursor CLI Agent의 강점

**IDE Agent와 동일한 기능을 터미널에서!**

```
Copilot CLI:
  - 명령어 생성만 가능
  - 코드 작업? → IDE로 돌아가야 함

Cursor CLI Agent:
  - 명령어 생성 가능
  - 코드 작업도 가능! ← 핵심 차이
  - IDE 없이 터미널에서 전체 개발
```

### 예시 비교

**Copilot CLI**:
```bash
$ gh copilot suggest "파일 찾기"
→ find . -name "*.js"
# 여기까지만 가능

# 코드 작업하려면?
$ code .  # IDE 열기 필요
```

**Cursor CLI Agent**:
```bash
$ cursor-agent

You: 로그인 기능 추가해줘
Agent: [src/auth.js 수정]
Agent: [src/login.jsx 생성]
Agent: [tests/auth.test.js 생성]

You: 테스트 실행해봐
Agent: [npm test 실행]

# IDE 없이 전체 개발 가능!
```

### Agentic 개발이란?

```
기존 (IDE 의존):
  터미널 작업 → IDE로 이동 → 코드 작업 → 터미널로 복귀
  
Agentic (터미널 독립):
  터미널에서 모든 작업
  ↓
  파일 수정도 Agent가
  ↓
  테스트 실행도 Agent가
  ↓
  커밋도 Agent가
```

### 활용 시나리오

**1. SSH 접속 상황**:
```
서버에 SSH 접속
→ GUI 없음
→ Cursor CLI Agent로 코드 작업 가능!
```

**2. 자동화/스크립트**:
```bash
# CI/CD 파이프라인에서
cursor-agent "코드 리뷰하고 문제 있으면 수정해줘"
```

**3. 빠른 작업**:
```
IDE 열기 귀찮을 때
→ 터미널에서 바로 Agent 실행
→ 빠른 수정
```

---

## 📊 정리

### CLI 기능 비교

| 기능 | Copilot CLI | Cursor CLI |
|------|-------------|------------|
| **Shell Mode** | ✅ 명령어 생성 | ✅ 명령어 생성 |
| **Agent Mode** | ❌ IDE 필요 | ✅ 터미널에서 가능 |
| **파일 수정** | ❌ IDE 필요 | ✅ 터미널에서 가능 |
| **대화형 세션** | ❌ 제한적 | ✅ 완전 지원 |
| **Agentic 개발** | ❌ 불가 | ✅ 가능 |

### 핵심 차이

```
Copilot CLI: Shell Mode만 (명령어 생성)
Cursor CLI: Shell Mode + Agent Mode (전체 개발)

→ Cursor CLI = IDE 없이 완전한 개발 가능
```

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] CLI Agent 설치 및 실행
- [ ] Shell Mode로 명령어 생성
- [ ] Agent Mode로 터미널에서 코드 작업
- [ ] IDE 없이 Agentic 개발 경험

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: CLI 기본](./projects/01-cli-basic/README.md)
**목표**: CLI Agent 설치 및 기본 사용

**배울 것**:
- CLI 설치
- Shell Mode vs Agent Mode 차이
- 기본 명령어

**깨달음**: "Shell Mode는 Copilot이랑 비슷한데, Agent Mode는 다르네!"

**소요 시간**: 10분

---

### [Project 2: Shell Mode - 파일 작업](./projects/02-shell-file-ops/README.md)
**목표**: Shell Mode로 파일 작업 자동화

**시나리오**:
- 복잡한 find 명령어
- 파일 정리 작업
- 권한 변경

**배울 것**:
- 자연어 → 명령어 변환
- 파일 검색/정리 자동화

**깨달음**: "이건 Copilot CLI랑 비슷하네!"

**소요 시간**: 15분

---

### [Project 3: Agent Mode - 터미널 개발](./projects/03-agent-terminal-dev/README.md)
**목표**: Agent Mode로 IDE 없이 개발

**시나리오**:
- 터미널에서 새 기능 추가
- 파일 생성/수정
- 테스트 실행

**배울 것**:
- 터미널에서 코드 작업
- 대화형 개발
- Agentic 개발 체험

**깨달음**: "IDE 없이도 이게 되네! 이게 진짜 차이구나!"

**소요 시간**: 25분

---

## 📖 학습 순서

### Step 1: 개념 이해 (10분)

이 README를 읽으면서:
1. CLI도 공통점임을 이해
2. Shell Mode vs Agent Mode 차이 이해
3. Agentic 개발의 의미 이해

### Step 2: CLI 기본 (10분)

1. **[Project 1: CLI 기본](./projects/01-cli-basic/README.md)** (10분)
   - Shell Mode와 Agent Mode 구분

### Step 3: 모드별 실습 (40분)

1. **[Project 2: Shell Mode](./projects/02-shell-file-ops/README.md)** (15분)
   - "Copilot이랑 비슷하네"

2. **[Project 3: Agent Mode](./projects/03-agent-terminal-dev/README.md)** (25분)
   - "이건 진짜 다르네!"

### Step 4: 복습 (10분)

- [ ] Shell Mode 사용 가능?
- [ ] Agent Mode 사용 가능?
- [ ] 둘의 차이 이해?

---

## 💡 핵심 깨달음

### 3교시에서 배운 것

```
CLI도 공통점:
- Shell Mode는 Copilot도 됨
- 명령어 생성은 동일

차이점:
- Cursor CLI Agent = IDE 없이 전체 개발
- Copilot CLI = 명령어 생성만

Agentic 개발:
- IDE 의존성 탈피
- 터미널에서 모든 작업
- SSH, CI/CD, 빠른 작업에 유용
```

### 효과

```
Before (Copilot CLI):
- 명령어 생성 → 실행
- 코드 작업? → IDE 열기

After (Cursor CLI Agent):
- 명령어 생성 + 코드 작업
- IDE 없이 전체 개발
- 어디서든 Agentic 개발
```

---

## ⏭ 다음 교시

[4교시: Multi-Agent & Worktree - 여러 Agent 동시에](../session-04/README.md)

**3교시를 완료하면 IDE를 넘어 터미널에서도 Agentic 개발이 가능합니다!** 🎉

---

## 🔗 빠른 링크

- [Project 1: CLI 기본](./projects/01-cli-basic/README.md)
- [Project 2: Shell Mode - 파일 작업](./projects/02-shell-file-ops/README.md)
- [Project 3: Agent Mode - 터미널 개발](./projects/03-agent-terminal-dev/README.md)

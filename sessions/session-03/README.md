# 3교시: CLI Agent & Shell Mode - IDE를 넘어서

## 📋 목차

- [1-2교시 복습](#1-2교시-복습)
- [IDE의 한계](#ide의-한계)
- [CLI Agent: Agentic 개발](#cli-agent-agentic-개발)
- [Shell Mode](#shell-mode)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 1-2교시 복습

### 배운 것

```
1교시: Hooks
  - Copilot과 95% 동일
  - Hooks가 핵심 차이 (Agent 제어)

2교시: Debug Mode, Visual Editor, Agent Skills
  - Debug Mode: 추측 → 확인
  - Visual Editor: 설명 → 클릭
  - Agent Skills: 능력 확장
```

### 지금까지는...

```
모두 IDE 안에서의 기능!

Cursor IDE
  ├─ Hooks
  ├─ Debug Mode
  ├─ Visual Editor
  └─ Agent Skills

질문: "IDE 밖에서는 못 쓰나요?"
```

---

## 🚧 IDE의 한계

### IDE 의존성

**문제**:
```
IDE를 열어야만 Agent 사용 가능

시나리오:
- 터미널에서 작업 중
- 갑자기 AI 도움 필요
- IDE 열기 → Agent 실행 → 결과 복사 → 터미널로 돌아오기

번거롭다!
```

### 자동화의 한계

**문제**:
```
IDE는 GUI 기반
  → 스크립트로 자동화 어려움
  → CI/CD 파이프라인 연동 어려움
  → 배치 작업 어려움
```

### 해결책: CLI

```
IDE 없이도 Agent 사용 가능!

터미널
  └─ cursor-agent (CLI)
      ├─ 대화형 모드
      └─ Shell Mode
```

---

## 🖥️ CLI Agent: Agentic 개발

### CLI Agent란?

```
터미널에서 실행하는 Cursor Agent

설치:
$ cursor-agent --version

실행:
$ cursor-agent
```

### 대화형 모드

**IDE Agent와 동일한 경험**:
```
$ cursor-agent

You: 사용자 인증 기능 추가해줘
Agent: [파일 수정 제안]

You: 좋아, 테스트도 작성해줘
Agent: [테스트 파일 생성]

You: 이제 실행해봐
Agent: [npm test 실행]
```

### Agentic 개발

**IDE 없이 터미널에서 모든 개발 가능**:
```
기존 (IDE 의존):
  IDE 열기 → Agent 사용 → 결과 확인

Agentic (터미널 독립):
  터미널에서 바로 Agent 사용
  ↓
  파일 수정도 Agent가
  ↓
  테스트 실행도 Agent가
  ↓
  커밋도 Agent가
```

### 장점

| 특징 | IDE Agent | CLI Agent |
|------|-----------|-----------|
| **환경** | GUI 필요 | 터미널만 |
| **자동화** | 어려움 | 쉬움 |
| **스크립트** | 불가 | 가능 |
| **CI/CD** | 어려움 | 가능 |
| **SSH** | 불가 | 가능 |

---

## 🐚 Shell Mode

### Shell Mode란?

```
자연어 → 터미널 명령어 변환

특징:
- 명령어만 생성 (파일 수정 X)
- 실행 전 확인 가능
- 안전한 명령어 생성
```

### 대화형 Agent vs Shell Mode

| 특징 | 대화형 Agent | Shell Mode |
|------|-------------|-----------|
| **목적** | 코드 작업 | 명령어 생성 |
| **파일 수정** | ✅ 가능 | ❌ 불가 |
| **출력** | 코드 | 명령어 |
| **실행** | 자동 | 수동 확인 |

### Shell Mode 예시

**파일 찾기**:
```
$ cursor-agent shell "최근 수정된 JS 파일 5개 찾아줘"

→ find . -name "*.js" -type f -mtime -7 | head -5

[실행하시겠습니까? y/n]
```

**프로세스 관리**:
```
$ cursor-agent shell "포트 3000 사용하는 프로세스 종료"

→ lsof -ti:3000 | xargs kill -9

[실행하시겠습니까? y/n]
```

**Git 작업**:
```
$ cursor-agent shell "어제 커밋한 파일 목록"

→ git log --since="yesterday" --name-only --pretty=format:

[실행하시겠습니까? y/n]
```

### 왜 Shell Mode?

**문제**:
```
복잡한 명령어 기억 어려움

예: "최근 7일 내 수정된 JS 파일 중 100줄 이상인 것"
→ find . -name "*.js" -mtime -7 -exec wc -l {} \; | awk '$1 > 100'

누가 이걸 외우나요?
```

**해결**:
```
자연어로 말하면 됨!

"최근 7일 내 수정된 JS 파일 중 100줄 이상인 것 찾아줘"
→ 명령어 자동 생성
→ 확인 후 실행
```

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] CLI Agent 설치 및 실행
- [ ] 대화형 모드로 코드 작업
- [ ] Shell Mode로 명령어 생성
- [ ] IDE 없이 Agentic 개발 가능
- [ ] 터미널 작업 80% 자동화

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: CLI 기본](./projects/01-cli-basic/README.md)
**목표**: CLI Agent 설치 및 기본 사용

**배울 것**:
- CLI 설치
- 대화형 모드 실행
- 기본 명령어

**깨달음**: "IDE 없이도 Agent를 쓸 수 있네!"

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

**깨달음**: "명령어 안 외워도 되네!"

**소요 시간**: 15분

---

### [Project 3: Shell Mode - Git 작업](./projects/03-shell-git-ops/README.md)
**목표**: Shell Mode로 Git 작업 자동화

**시나리오**:
- 복잡한 git log 옵션
- 브랜치 관리
- 변경사항 분석

**배울 것**:
- Git 명령어 자동 생성
- 히스토리 분석
- 브랜치 관리

**깨달음**: "Git도 자연어로 되네!"

**소요 시간**: 25분

---

## 📖 학습 순서

### Step 1: 개념 이해 (10분)

이 README를 읽으면서:
1. IDE의 한계 이해
2. CLI Agent의 강력함 이해
3. Shell Mode의 편리함 이해

### Step 2: CLI 기본 (10분)

1. **[Project 1: CLI 기본](./projects/01-cli-basic/README.md)** (10분)
   - "IDE 없이도 되네!"

### Step 3: Shell Mode 실습 (40분)

1. **[Project 2: 파일 작업](./projects/02-shell-file-ops/README.md)** (15분)
   - "명령어 안 외워도 되네!"

2. **[Project 3: Git 작업](./projects/03-shell-git-ops/README.md)** (25분)
   - "Git도 자연어로!"

### Step 4: 복습 (10분)

- [ ] CLI Agent 사용 가능?
- [ ] Shell Mode 활용 가능?
- [ ] IDE 없이 작업 가능?

---

## 💡 핵심 깨달음

### 3교시에서 배운 것

```
IDE를 넘어서:
- CLI Agent: 터미널에서 Agent 사용
- Shell Mode: 자연어 → 명령어

Agentic 개발:
- IDE 의존성 탈피
- 터미널에서 모든 작업
- 자동화/스크립트 가능
```

### 효과

```
Before:
- IDE 열기 → Agent → 복사 → 터미널
- 복잡한 명령어 외우기/검색

After:
- 터미널에서 바로 Agent
- 자연어로 명령어 생성
- 80% 시간 절약
```

---

## ⏭ 다음 교시

[4교시: Multi-Agent & Worktree - 여러 Agent 동시에](../session-04/README.md)

**3교시를 완료하면 IDE를 넘어 터미널에서도 Agentic 개발이 가능합니다!** 🎉

---

## 🔗 빠른 링크

- [Project 1: CLI 기본](./projects/01-cli-basic/README.md)
- [Project 2: Shell Mode - 파일 작업](./projects/02-shell-file-ops/README.md)
- [Project 3: Shell Mode - Git 작업](./projects/03-shell-git-ops/README.md)

# 5장: CLI Agent - 터미널에서 개발

> **IDE 없이 터미널에서도 Agent를 사용할 수 있습니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Copilot CLI vs Cursor CLI](#1부-copilot-cli-vs-cursor-cli)
- [2부: CLI Agent 모드](#2부-cli-agent-모드)
- [3부: Shell Mode](#3부-shell-mode)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

안녕하세요. 이번 장에서는 **Cursor CLI**를 배웁니다.

지금까지 배운 기능들은 모두 IDE 안에서 동작했습니다. 하지만 SSH 접속, CI/CD 파이프라인 등 IDE를 사용할 수 없는 상황이 자주 있습니다.

**학습 목표**:

- Cursor CLI 설치 및 실행
- CLI Agent 모드 (Agent, Plan, Ask) 이해
- Shell Mode로 명령어 빠르게 실행
- SSH/CI/CD 환경 활용

**공식 문서**:
- [CLI 개요](https://cursor.com/docs/cli/overview)
- [CLI 설치](https://cursor.com/docs/cli/installation)
- [CLI 사용법](https://cursor.com/docs/cli/using)
- [Shell Mode](https://cursor.com/docs/cli/shell-mode)
- [Headless 모드](https://cursor.com/docs/cli/headless)
- [슬래시 명령어](https://cursor.com/docs/cli/reference/slash-commands)
- [CLI 파라미터](https://cursor.com/docs/cli/reference/parameters)
- [GitHub Actions 통합](https://cursor.com/docs/cli/github-actions)
- [체인지로그 - CLI Agent Modes (2026.01.16)](https://cursor.com/changelog)

---

## 1부: Copilot CLI vs Cursor CLI

### Copilot CLI

```bash
# 명령어 제안만 가능
gh copilot suggest "파일 목록 보기"
→ ls -la

# 설명 요청
gh copilot explain "git rebase -i"
→ 설명만 제공

# 코드 작업은 IDE로 돌아가야 함
```

### Cursor CLI

```bash
# 1. Agent 모드: 대화하며 코드 작업
cursor

You: user.js에 validate 함수 추가해줘
Agent: [파일 생성/수정]
Agent: [테스트 실행]

# 2. Shell Mode: 대화 중 명령어 실행
You: !npm test
→ 테스트 실행 결과 표시

You: !git status
→ Git 상태 표시
```

**차이점**:

| 기능            | Copilot CLI | Cursor CLI |
| --------------- | ----------- | ---------- |
| **명령어 제안** | ✅          | ✅         |
| **코드 작업**   | ❌ IDE 필요 | ✅ CLI에서 |
| **대화형 세션** | ❌          | ✅         |
| **Shell Mode**  | ❌          | ✅ `!` 명령|

---

## 2부: CLI Agent 모드

Cursor CLI는 IDE와 동일하게 **3가지 모드**를 제공합니다.

### Agent 모드 (기본)

```bash
# Agent 모드로 시작
cursor

# 또는
cursor --mode=agent

You: 로그인 기능 추가해줘
Agent: [코드 작성 및 수정]
```

**특징**:
- 즉시 실행하여 코드 작성/수정
- 파일 생성, 수정, 삭제 가능
- 터미널 명령어 실행 가능

### Plan 모드

```bash
# Plan 모드로 시작
cursor /plan

# 또는
cursor --mode=plan

You: 결제 시스템 추가해줘
Agent: [계획 수립]
Agent: 다음 단계로 진행할까요?
You: 네
Agent: [실행]
```

**특징**:
- 사전에 계획을 세우고 검토
- 복잡한 작업에 적합
- 명확한 질문으로 요구사항 확인

**공식 문서**: [CLI Plan Mode](https://cursor.com/changelog) (2026.01.16 업데이트)

### Ask 모드

```bash
# Ask 모드로 시작
cursor /ask

# 또는
cursor --mode=ask

You: 이 코드는 어떻게 동작하나요?
Agent: [설명만 제공, 코드 변경 없음]
```

**특징**:
- 코드를 변경하지 않고 탐색
- 코드 이해, 분석, 설명
- 안전한 학습 환경

**공식 문서**: [CLI Ask Mode](https://cursor.com/changelog) (2026.01.16 업데이트)

### 모드 비교

| 모드 | 코드 변경 | 사용 시점 | 명령어 |
|------|----------|----------|--------|
| **Agent** | ✅ | 즉시 실행 | `cursor` |
| **Plan** | ✅ | 복잡한 작업 | `cursor /plan` |
| **Ask** | ❌ | 코드 탐색 | `cursor /ask` |

### 슬래시 명령어

CLI에서 사용할 수 있는 슬래시 명령어들:

```bash
cursor

# 대화 중 슬래시 명령어 사용
You: /plan          # Plan 모드로 전환
You: /ask           # Ask 모드로 전환
You: /agent         # Agent 모드로 전환
You: /clear         # 대화 기록 초기화
You: /help          # 도움말 표시
You: /exit          # CLI 종료
```

**참고 문서**: [슬래시 명령어 전체 목록](https://cursor.com/docs/cli/reference/slash-commands)

### Headless 모드

UI 없이 백그라운드에서 Cursor CLI를 실행할 수 있습니다:

```bash
# Headless 모드로 실행
cursor --headless "로그인 기능 추가해줘"

# 또는 파이프로 입력
echo "테스트 코드 작성해줘" | cursor --headless

# CI/CD에서 사용
cursor --headless --mode=plan "전체 프로젝트 린트 수정"
```

**사용 시나리오**:
- CI/CD 파이프라인에서 자동화
- 스크립트에서 Cursor 호출
- 배치 작업 처리
- GitHub Actions 통합

**참고 문서**: 
- [Headless 모드](https://cursor.com/docs/cli/headless)
- [GitHub Actions 통합](https://cursor.com/docs/cli/github-actions)

### CLI 설치 방법

**Mac/Linux**:
```bash
# Cursor IDE에서 설치 (권장)
# Cmd+Shift+P → "Shell Command: Install 'cursor' command in PATH"

# 또는 수동 설치
curl -fsSL https://cursor.com/install.sh | sh
```

**Windows**:
```bash
# Cursor IDE에서 설치 (권장)
# Ctrl+Shift+P → "Shell Command: Install 'cursor' command in PATH"

# 또는 PowerShell에서
iwr -useb https://cursor.com/install.ps1 | iex
```

**설치 확인**:
```bash
cursor --version
```

**참고 문서**: [CLI 설치](https://cursor.com/docs/cli/installation)

---

## 3부: Shell Mode

### Shell Mode란?

CLI Agent와 대화하는 중에 `!`로 시작하는 명령어를 실행하여 빠르게 작업할 수 있는 기능입니다.

```bash
cursor

You: 로그인 기능 추가해줘
Agent: [코드 작성 중...]

You: !npm test        # Shell Mode로 테스트 실행
→ 테스트 결과 표시

You: 테스트 실패한 부분 수정해줘
Agent: [수정 중...]

You: !git diff        # Shell Mode로 변경사항 확인
→ diff 결과 표시
```

### Shell Mode 특징

- **빠른 실행**: 대화 중단 없이 명령어 실행
- **컨텍스트 유지**: 명령어 결과가 대화에 포함됨
- **안전 장치**: 위험한 명령은 실행 전 확인
- **제한사항**: 30초 타임아웃, 대화형 명령 불가

### 사용 예시

```bash
# 파일 확인
You: !ls -la

# 테스트 실행
You: !npm test

# Git 상태
You: !git status

# 빌드
You: !npm run build

# 환경 확인
You: !node --version
```

### 제한사항

```bash
# ❌ 안 되는 것들
!npm start           # 서버 실행 (계속 실행됨)
!vim file.js         # 대화형 에디터
!read input          # 입력 대기

# ✅ 되는 것들
!npm test            # 짧은 명령
!git status          # 상태 확인
!cat file.js         # 파일 읽기
```

**공식 문서**: [Shell Mode](https://cursor.com/docs/cli/shell-mode)

---

## 🚀 실습 프로젝트

### [Project 1: CLI Agent 기본 사용법 및 Shell Mode](./projects/01-cli-basic/README.md)

**학습 내용**:

- Cursor CLI 설치 및 실행
- CLI Agent 모드 (Agent, Plan, Ask) 이해 및 사용
- Shell Mode (`!` 명령) 사용법 익히기
- 각 모드의 차이점 체험

**실습 방식**:

터미널에서 Cursor CLI를 실행하고, 세 가지 모드(Agent, Plan, Ask)를 각각 사용해봅니다. Shell Mode로 대화 중 명령어를 빠르게 실행하는 방법도 익힙니다.

**제공 파일**:
- `src/hello.js` - 테스트용 파일

**실습 예시**:
- Agent 모드: `cursor` → 즉시 코드 작성
- Plan 모드: `cursor /plan` → 계획 수립 후 실행
- Ask 모드: `cursor /ask` → 코드 변경 없이 탐색
- Shell Mode: `!npm test` → 대화 중 명령어 실행

---

### [Project 2: 터미널에서 전체 개발 프로세스](./projects/02-terminal-dev/README.md)

**학습 내용**:

- IDE 없이 CLI만으로 전체 개발 프로세스 경험
- Shell Mode를 활용한 효율적인 워크플로우
- Cloud Handoff로 장시간 작업 위임
- SSH/CI/CD 환경에서의 활용 가능성 이해

**실습 방식**:

TODO API를 터미널에서만 개발합니다. 요구사항 분석부터 코드 작성, 테스트, 디버깅, Git 커밋까지 모든 작업을 CLI Agent와 함께 진행합니다.

**실습 시나리오**:
1. 프로젝트 초기화 (package.json, 의존성)
2. TODO API 구현 (CRUD)
3. 테스트 작성 및 실행
4. 디버깅 (Shell Mode 활용)
5. Git 커밋 및 푸시

**실습 예시**:
- `cursor` → "TODO API 만들어줘"
- `!npm test` → 테스트 실행 결과 확인
- "테스트 실패한 부분 수정해줘" → 즉시 수정
- `!git status` → 변경사항 확인

---

## ⏭ 다음 장

[6장: Agent Skills - 재사용 가능한 능력](../session-06/README.md)

# 4장: CLI Agent - 터미널에서 개발

> **IDE 없이 터미널에서도 Agent를 사용할 수 있습니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Copilot CLI vs Cursor CLI](#1부-copilot-cli-vs-cursor-cli)
- [2부: CLI Agent 모드](#2부-cli-agent-모드)
- [3부: Shell Mode](#3부-shell-mode)
- [4부: Cloud Handoff](#4부-cloud-handoff)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

안녕하세요. 이번 장에서는 **Cursor CLI**를 배웁니다.

지금까지 배운 기능들은 모두 IDE 안에서 동작했습니다. 하지만 SSH 접속, CI/CD 파이프라인 등 IDE를 사용할 수 없는 상황이 자주 있습니다.

**학습 목표**:

- Cursor CLI 설치 및 실행
- CLI Agent 모드 (Agent, Plan, Ask) 이해
- Shell Mode로 명령어 빠르게 실행
- Cloud Handoff로 장시간 작업 위임
- SSH/CI/CD 환경 활용

**공식 문서**:
- [CLI 개요](https://cursor.com/docs/cli/overview)
- [CLI 사용법](https://cursor.com/docs/cli/using)
- [Shell Mode](https://cursor.com/docs/cli/shell-mode)
- [Cloud Agent](https://cursor.com/docs/cloud-agent)
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

## 4부: Cloud Handoff

### Cloud Handoff란?

로컬 터미널에서 시작한 작업을 **클라우드로 넘겨서** 계속 실행하는 기능입니다.

```bash
cursor

You: & 전체 프로젝트를 TypeScript로 변환해줘
      ↑ & 기호로 시작하면 Cloud Agent로 전송

Agent: 클라우드로 전송되었습니다.
       cursor.com/agents 에서 확인하세요.

# 터미널 종료해도 계속 실행됨
# 웹이나 모바일에서 확인 가능
```

### 사용 시점

**적합한 경우**:
- 장시간 작업 (대규모 리팩토링, 마이그레이션)
- 로컬 리소스 부족
- 작업 중 자리를 비워야 할 때
- 여러 기기에서 작업 확인

**부적합한 경우**:
- 빠른 수정 (로컬이 더 빠름)
- 민감한 데이터 (로컬에서 처리)
- 네트워크 불안정

### 실전 예시

```bash
# 시나리오: 퇴근 시간인데 큰 작업이 필요한 경우

cursor

You: & 모든 컴포넌트를 React 18로 마이그레이션해줘
     & 테스트도 모두 업데이트해줘
     & 완료되면 PR 생성해줘

Agent: 클라우드로 전송되었습니다.

# 집에 가서 모바일로 확인
# cursor.com/agents 접속
# → 작업 진행 상황 확인
# → 완료되면 알림
```

### Word-level Inline Diffs

CLI에서도 정확한 변경사항을 **단어 단위**로 확인할 수 있습니다.

```bash
# 기존: 줄 단위 diff
- const name = "John"
+ const userName = "John Doe"

# 새로운: 단어 단위 diff (2026.01.16)
const [name]userName = "John[ Doe]"
      ^^^^           ^^^^^^^^
      삭제됨         추가됨
```

**공식 문서**: 
- [Cloud Agent](https://cursor.com/docs/cloud-agent)
- [Cloud Handoff 체인지로그 (2026.01.16)](https://cursor.com/changelog)

---

## 🚀 실습 프로젝트

### Project 1: CLI Agent 기본 (예정)

### Project 2: 터미널 개발 (예정)

※ 프로젝트는 추후 추가 예정입니다.

---

## ⏭ 다음 장

[5장: Hooks - AI Agent 제어의 핵심](../session-05/README.md)

# 3장: CLI Agent - 터미널에서 개발

> **IDE 없이 터미널에서도 Agent를 사용할 수 있습니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: CLI Agent 모드](#1부-cli-agent-모드)
- [2부: Shell Mode](#2부-shell-mode)

---

## 📝 강의 개요

안녕하세요. 이번 장에서는 **Cursor CLI**를 배웁니다.

지금까지 배운 기능들은 모두 IDE 안에서 동작했습니다. 하지만 SSH 접속, CI/CD 파이프라인 등 IDE를 사용할 수 없는 상황이 자주 있습니다.

**학습 목표**:

- CLI Agent 실행 및 사용법 이해
- CLI Agent 모드 (Agent, Plan, Ask) 이해
- Shell Mode로 명령어 빠르게 실행

**공식 문서**:
- [CLI 개요](https://cursor.com/docs/cli/overview)
- [CLI 사용법](https://cursor.com/docs/cli/using)
- [Shell Mode](https://cursor.com/docs/cli/shell-mode)
- [슬래시 명령어](https://cursor.com/docs/cli/reference/slash-commands)

---

## 1부: CLI Agent 모드

### CLI Agent 실행

터미널에서 `agent` 명령어로 CLI Agent를 실행합니다:

```bash
agent
```

CLI Agent가 실행되면 **Agent 모드**가 기본으로 활성화됩니다.

### Agent 모드 (기본)

```bash
agent

You: 로그인 기능 추가해줘
Agent: [코드 작성 및 수정]
```

**특징**:
- 즉시 실행하여 코드 작성/수정
- 파일 생성, 수정, 삭제 가능
- 터미널 명령어 실행 가능

### Plan 모드

Agent 세션 내에서 `/plan`으로 Plan 모드로 전환합니다:

```bash
agent

You: /plan
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

### Ask 모드

Agent 세션 내에서 `/ask`로 Ask 모드로 전환합니다:

```bash
agent

You: /ask
You: 이 코드는 어떻게 동작하나요?
Agent: [설명만 제공, 코드 변경 없음]
```

**특징**:
- 코드를 변경하지 않고 탐색
- 코드 이해, 분석, 설명
- 안전한 학습 환경

### 모드 비교

| 모드 | 코드 변경 | 사용 시점 | 세션 내 명령 |
|------|----------|----------|-------------|
| **Agent** | ✅ | 즉시 실행 | (기본 모드) |
| **Plan** | ✅ | 복잡한 작업 | `/plan` |
| **Ask** | ❌ | 코드 탐색 | `/ask` |

### 슬래시 명령어

Agent 세션 내에서 사용할 수 있는 슬래시 명령어들:

```bash
agent

# 대화 중 슬래시 명령어 사용
You: /plan          # Plan 모드로 전환
You: /ask           # Ask 모드로 전환
You: /agent         # Agent 모드로 전환
You: /clear         # 대화 기록 초기화
You: /help          # 도움말 표시
You: /exit          # CLI 종료
```

**참고 문서**: [슬래시 명령어 전체 목록](https://cursor.com/docs/cli/reference/slash-commands)

---

## 2부: Shell Mode

### Shell Mode란?

CLI Agent와 대화하는 중에 `!`로 시작하는 명령어를 실행하여 빠르게 작업할 수 있는 기능입니다.

```bash
agent

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

### 전체 워크플로우 예시

```bash
agent

You: TODO API 만들어줘
Agent: [코드 작성]

You: !npm test        # 테스트 실행
→ 테스트 결과 표시

You: 테스트 실패한 부분 수정해줘
Agent: [수정]

You: !npm test        # 다시 테스트
→ 성공!

You: !git status      # Git 상태 확인
→ 변경사항 표시
```

### 사용 가능한 명령어

```bash
# ✅ 사용 가능
!ls -la              # 파일 목록
!cat file.js         # 파일 읽기
!npm test            # 테스트 실행
!git status          # Git 상태
!node --version      # 버전 확인

# ❌ 사용 불가 (30초 타임아웃, 대화형 불가)
!npm start           # 서버 실행 (계속 실행됨)
!vim file.js         # 대화형 에디터
!python              # REPL
```

**공식 문서**: [Shell Mode](https://cursor.com/docs/cli/shell-mode)

---

## ⏭ 다음 장

[4장: Hooks - AI Agent 제어의 핵심](../session-04-hooks/README.md)

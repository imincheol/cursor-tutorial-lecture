# 3교시: CLI Agent - 터미널에서 개발하기

> **IDE 없이 터미널에서도 Agent를 사용하는 방법**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: IDE의 한계](#1부-ide의-한계)
- [2부: CLI Agent 소개](#2부-cli-agent-소개)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

지금까지 배운 기능들(Hooks, Debug Mode, Visual Editor)은 모두 IDE 안에서 사용하는 기능입니다. 이번 교시에서는 터미널에서도 Agent를 사용할 수 있는 CLI Agent를 소개합니다.

**학습 목표**:

- CLI Agent 설치 및 실행
- 터미널에서 코드 작업하기
- SSH, CI/CD 환경에서 활용하기

---

## 1부: IDE의 한계

### IDE가 필요한 상황들

지금까지 배운 기능들은 모두 IDE가 필요합니다:

- Hooks → IDE에서 실행
- Debug Mode → IDE에서 실행
- Visual Editor → IDE에서 실행

### IDE를 사용할 수 없는 경우

하지만 다음과 같은 상황에서는 IDE를 사용할 수 없습니다:

1. **SSH 접속 환경**

   - GUI 없음
   - IDE 실행 불가

2. **CI/CD 파이프라인**

   - 스크립트에서 AI 호출 필요
   - IDE 없는 환경

3. **빠른 작업**
   - IDE 로딩 시간 불필요
   - 간단한 수정만 필요

### Copilot CLI의 한계

Copilot에도 CLI가 있지만:

- 명령어 생성만 가능
- 코드 작업은 IDE로 돌아가야 함

실제 개발 작업에는 한계가 있습니다.

---

## 2부: CLI Agent 소개

### CLI Agent란?

Cursor의 CLI Agent는 터미널에서 Agent를 사용할 수 있게 해주는 기능입니다.

### 사용 예시

```bash
$ cursor-agent

You: 로그인 기능 추가해줘
Agent: [src/auth.js 수정]
Agent: [src/login.jsx 생성]
Agent: [tests/auth.test.js 생성]

You: 테스트 실행해봐
Agent: [npm test 실행]
```

터미널에서 직접 코드 작업이 가능합니다.

### Copilot CLI vs Cursor CLI Agent

| 기능            | Copilot CLI | Cursor CLI Agent   |
| --------------- | ----------- | ------------------ |
| **명령어 생성** | ✅          | ✅                 |
| **코드 작업**   | ❌ IDE 필요 | ✅ 터미널에서 가능 |
| **파일 수정**   | ❌ IDE 필요 | ✅ 터미널에서 가능 |
| **대화형 세션** | ❌          | ✅                 |

```
Copilot CLI: 명령어 생성만
Cursor CLI Agent: IDE 없이 전체 개발 가능!

"이게 핵심 차이구나!"
```

### 활용 가능한 작업

CLI Agent로 할 수 있는 작업:

- 파일 생성 및 수정
- 테스트 실행
- 코드 리뷰
- 커밋 작성

IDE 없이도 전체 개발 워크플로우를 진행할 수 있습니다.

### 활용 시나리오

**1. SSH 접속 상황**:

```bash
ssh user@server
cd /app
cursor-agent
# "버그 수정해줘" → 바로 수정 가능!
```

**2. 빠른 작업**:

```bash
cd my-project
cursor-agent
# "README 업데이트해줘" → IDE 안 열어도 됨!
```

**3. 자동화**:

```bash
# 스크립트에서
cursor-agent "코드 리뷰하고 문제 있으면 수정해줘"
```

---

## 📊 학습 정리

이 교시에서 다룬 내용:

- ✅ CLI Agent 설치 및 실행
- ✅ 터미널에서 코드 작업
- ✅ SSH, CI/CD 환경에서 활용

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: CLI Agent 기본](./projects/01-cli-basic/README.md)

**스토리 위치**: 2장 - CLI Agent 발견

**상황**:

```
CLI Agent가 있다는 걸 알았다.
"진짜 터미널에서 Agent를 쓸 수 있어?"

설치하고 실행해봤다.
```

**배울 것**:

- CLI Agent 설치
- 기본 실행
- 대화형 세션

**깨달음**: "터미널에서도 Agent가 된다!"

**소요 시간**: 15분

---

### [Project 2: 터미널 개발](./projects/02-terminal-dev/README.md)

**스토리 위치**: 2장 - Agentic 개발

**상황**:

```
"진짜 IDE 없이 개발이 될까?"

새 기능을 추가해봤다.
파일 생성, 코드 작성, 테스트까지.
전부 터미널에서.
```

**배울 것**:

- 터미널에서 기능 개발
- 파일 생성/수정
- 테스트 실행

**깨달음**: "IDE 없이도 전체 개발이 가능하다!"

**소요 시간**: 35분

---

## 📖 학습 순서

### Step 1: 스토리 이해 (10분)

이 README를 읽으면서:

1. IDE의 한계 이해
2. CLI Agent의 발견
3. Agentic 개발의 의미

### Step 2: CLI 기본 (15분)

1. **[Project 1: CLI 기본](./projects/01-cli-basic/README.md)** (15분)
   - CLI 설치 및 실행

### Step 3: 터미널 개발 (35분)

1. **[Project 2: 터미널 개발](./projects/02-terminal-dev/README.md)** (35분)
   - IDE 없이 전체 개발 체험

---

## 🎓 다음 교시 안내

3교시에서는 CLI Agent로 터미널에서 개발하는 방법을 배웠습니다.

4교시에서는 여러 Agent를 동시에 사용하는 방법을 살펴보겠습니다:

- Worktree로 독립 환경 구성하기
- Multi-Agent로 병렬 작업하기

---

## ⏭ 다음 교시

[4교시: 네 번째 발견 - Multi-Agent](../session-04/README.md)

---

## 🔗 빠른 링크

- [Project 1: CLI Agent 기본](./projects/01-cli-basic/README.md)
- [Project 2: 터미널 개발](./projects/02-terminal-dev/README.md)

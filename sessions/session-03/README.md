# 3교시: 세 번째 발견 - IDE를 넘어서

> **"IDE 없이도 돼?"**

## 📋 목차

- [지난 시간 복습](#지난-시간-복습)
- [1장: IDE의 한계](#1장-ide의-한계)
- [2장: CLI Agent의 발견](#2장-cli-agent의-발견)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 지난 시간 복습

### 지금까지 배운 것

```
1교시: Hooks (Agent 제어)
  → 프롬프트의 한계를 코드로 극복
  → 리뷰 시간 70% 단축

2교시: Debug Mode, Visual Editor
  → 추측 대신 확인
  → 설명 대신 클릭
  → 버그 해결 50% 빠름, UI 수정 70% 빠름
```

### 공통점

```
지금까지 배운 것들:
- Hooks → IDE에서 사용
- Debug Mode → IDE에서 사용
- Visual Editor → IDE에서 사용

"다 IDE 안에서의 기능이네?"
```

---

## 📖 1장: IDE의 한계

### 어느 날의 상황

```
서버에 문제가 생겼다.
SSH로 접속했다.
"여기서 코드 좀 수정해야 하는데..."

터미널만 있다.
GUI가 없다.
IDE를 열 수 없다.

"AI 도움을 못 받나?"
```

### IDE 의존의 문제

```
문제 1: SSH 접속
  → GUI 없음
  → IDE 사용 불가
  → AI 도움 불가?

문제 2: CI/CD 파이프라인
  → 스크립트에서 AI 호출하고 싶음
  → IDE 열 수 없음
  → 자동화 불가?

문제 3: 빠른 작업
  → 간단한 수정인데
  → IDE 열기 → 프로젝트 로드 → 기다림
  → 번거로움
```

### Copilot CLI?

```
"Copilot에도 CLI가 있지 않나?"

gh copilot suggest "파일 찾기"
→ find . -name "*.js"

"명령어 생성은 되네."

하지만 코드 작업은?
→ IDE로 돌아가야 함

"결국 IDE가 필요하구나..."
```

---

## 📖 2장: CLI Agent의 발견

### CLI Agent란?

```
어느 날, Cursor 문서를 보다가 발견했다.
"CLI Agent"

"이건 뭐지?"
```

### 실행해보기

```bash
$ cursor-agent

You: 로그인 기능 추가해줘
Agent: [src/auth.js 수정]
Agent: [src/login.jsx 생성]
Agent: [tests/auth.test.js 생성]

You: 테스트 실행해봐
Agent: [npm test 실행]
```

### 깨달음

```
"잠깐, 이거..."
"터미널에서 코드 작업이 되네?"
"파일 생성도 되고, 수정도 되고?"

IDE를 안 열어도 된다!
```

### Copilot CLI vs Cursor CLI Agent

| 기능 | Copilot CLI | Cursor CLI Agent |
|------|-------------|------------------|
| **명령어 생성** | ✅ | ✅ |
| **코드 작업** | ❌ IDE 필요 | ✅ 터미널에서 가능 |
| **파일 수정** | ❌ IDE 필요 | ✅ 터미널에서 가능 |
| **대화형 세션** | ❌ | ✅ |

```
Copilot CLI: 명령어 생성만
Cursor CLI Agent: IDE 없이 전체 개발 가능!

"이게 핵심 차이구나!"
```

### Agentic 개발

```
기존 (IDE 의존):
  터미널 → IDE 열기 → 코드 작업 → 터미널 복귀
  
Agentic (터미널 독립):
  터미널에서 모든 작업
  ↓
  파일 수정도 Agent가
  ↓
  테스트 실행도 Agent가
  ↓
  커밋도 Agent가

"IDE 없이 전체 개발이 가능하다!"
```

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

## 🎯 학습 목표

이 교시를 마치면:

- [ ] CLI Agent 설치 및 실행
- [ ] 터미널에서 코드 작업
- [ ] IDE 없이 Agentic 개발 경험

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

## 💡 에필로그: 세 번째 발견을 마치며

### 3교시에서 배운 것

```
IDE에서만 쓸 수 있는 줄 알았다.

CLI Agent 발견:
  "터미널에서도 Agent가 된다!"
  "IDE 없이 전체 개발이 가능하다!"

Copilot CLI는 명령어 생성만.
Cursor CLI Agent는 전체 개발이 가능.
```

### Cursor 전용 기능 (지금까지)

```
1교시: Hooks (Agent 제어)
2교시: Debug Mode, Visual Editor
3교시: CLI Agent Mode (IDE 없이 개발)

"어디서든 Agentic 개발이 가능하다!"
```

### 다음 질문

```
"IDE에서도, 터미널에서도 Agent를 쓸 수 있게 됐다."
"그런데..."
"한 번에 하나씩만 할 수 있나?"
"여러 개를 동시에 돌릴 수는 없나?"

4교시에서 계속...
```

---

## ⏭ 다음 교시

[4교시: 네 번째 발견 - Multi-Agent](../session-04/README.md)

---

## 🔗 빠른 링크

- [Project 1: CLI Agent 기본](./projects/01-cli-basic/README.md)
- [Project 2: 터미널 개발](./projects/02-terminal-dev/README.md)

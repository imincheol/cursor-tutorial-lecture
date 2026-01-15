# 3교시: CLI Agent - IDE를 넘어서

## 📋 목차

- [1-2교시 복습](#1-2교시-복습)
- [IDE의 한계](#ide의-한계)
- [CLI Agent Mode](#cli-agent-mode)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 1-2교시 복습

### 배운 것

```
1교시: Hooks (Agent 제어)
  → Copilot과 대부분 동일
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

질문: "IDE 없이는 못 쓰나요?"
```

---

## 🚧 IDE의 한계

### 문제 상황들

**1. SSH 접속**:
```
서버에 SSH 접속
→ GUI 없음
→ IDE 사용 불가
→ AI 도움 못 받음?
```

**2. CI/CD 파이프라인**:
```
자동화 스크립트에서
→ IDE 실행 불가
→ AI 활용 불가?
```

**3. IDE 열기 귀찮을 때**:
```
간단한 수정인데
→ IDE 열기 → 프로젝트 로드 → 기다림
→ 번거로움
```

### Copilot CLI vs Cursor CLI

| 기능 | Copilot CLI | Cursor CLI Agent |
|------|-------------|------------------|
| **명령어 생성** | ✅ | ✅ |
| **코드 작업** | ❌ IDE 필요 | ✅ 터미널에서 가능 |
| **파일 수정** | ❌ IDE 필요 | ✅ 터미널에서 가능 |
| **대화형 세션** | ❌ | ✅ |

**핵심 차이**: Cursor CLI Agent = IDE 없이 전체 개발 가능!

---

## 🚀 CLI Agent Mode

### CLI Agent란?

```
터미널에서 실행하는 Cursor Agent

IDE Agent와 동일한 기능:
- 파일 생성/수정
- 코드 작업
- 테스트 실행
- 대화형 세션
```

### 실행 방법

```bash
# CLI Agent 실행
cursor-agent

# 이제 대화 가능!
You: 로그인 기능 추가해줘
Agent: [src/auth.js 수정]
Agent: [src/login.jsx 생성]

You: 테스트도 작성해줘
Agent: [tests/auth.test.js 생성]
```

### Agentic 개발

**IDE 없이 터미널에서 전체 개발!**

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
**목표**: CLI Agent 설치 및 기본 사용

**배울 것**:
- CLI 설치
- Agent 실행
- 기본 대화

**깨달음**: "터미널에서도 Agent를 쓸 수 있네!"

**소요 시간**: 15분

---

### [Project 2: 터미널 개발](./projects/02-terminal-dev/README.md)
**목표**: IDE 없이 기능 개발

**시나리오**:
- 터미널에서 새 기능 추가
- 파일 생성/수정
- 테스트 실행

**배울 것**:
- 터미널에서 전체 개발 흐름
- 파일 작업
- 대화형 개발

**깨달음**: "IDE 없이도 전체 개발이 되네!"

**소요 시간**: 35분

---

## 📖 학습 순서

### Step 1: 개념 이해 (10분)

이 README를 읽으면서:
1. IDE의 한계 이해
2. CLI Agent의 강점 파악
3. Agentic 개발 개념 이해

### Step 2: CLI 기본 (15분)

1. **[Project 1: CLI 기본](./projects/01-cli-basic/README.md)** (15분)
   - CLI 설치 및 실행

### Step 3: 터미널 개발 (35분)

1. **[Project 2: 터미널 개발](./projects/02-terminal-dev/README.md)** (35분)
   - IDE 없이 전체 개발 체험

### Step 4: 복습 (10분)

- [ ] CLI Agent 사용 가능?
- [ ] 터미널에서 코드 작업 가능?
- [ ] Agentic 개발 이해?

---

## 💡 핵심 깨달음

### 3교시에서 배운 것

```
CLI Agent:
- IDE 없이 터미널에서 Agent 사용
- 파일 생성/수정 가능
- 대화형 세션 지원

Agentic 개발:
- IDE 의존성 탈피
- 터미널에서 전체 작업
- SSH, 자동화에 유용
```

### Copilot vs Cursor

```
Copilot CLI:
- 명령어 생성만 가능
- 코드 작업은 IDE 필요

Cursor CLI Agent:
- 명령어 + 코드 작업 모두 가능
- IDE 없이 전체 개발
```

---

## ⏭ 다음 교시

[4교시: Multi-Agent & Worktree - 여러 Agent 동시에](../session-04/README.md)

**3교시를 완료하면 IDE 없이도 Agentic 개발이 가능합니다!** 🎉

---

## 🔗 빠른 링크

- [Project 1: CLI Agent 기본](./projects/01-cli-basic/README.md)
- [Project 2: 터미널 개발](./projects/02-terminal-dev/README.md)

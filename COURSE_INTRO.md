# 과정명: Cursor 튜토리얼

**학습 시간**: 4시간  
**학습 시기**: 2월 중  
**강사**: 이민철(인터랙티브개발팀)  
**방식**: 실습 중심 + 설명 병행  
**환경**: Cursor IDE  
**난이도**: 입문 ~ 초급

## 교육 대상

- GitHub Copilot을 사용 중인 개발자
- Cursor로 전환을 고려하는 마크업/프론트엔드 개발자
- Hooks로 AI Agent를 제어하는 방식이 궁금한 분
- Debug Mode와 Visual Editor로 버그/UI 수정을 빠르게 하고 싶은 분
- CLI Agent로 터미널에서 개발하는 방법을 알고 싶은 분
- Multi-Agent로 병렬 작업 및 독립 환경 구성을 배우고 싶은 분

---

## 강의 개요

- GitHub Copilot과 Cursor 비교 및 공통점 이해
- Hooks로 Agent 동작 감시 및 제어 (Cursor만의 핵심 기능)
- Debug Mode와 Visual Editor로 버그 및 UI 수정
- CLI Agent로 터미널에서 개발
- Multi-Agent로 병렬 작업

---

## 과정에 언급되는 Cursor 키워드

- **Hooks** (preToolExecution, postToolExecution)
- **Debug Mode**
- **Visual Editor**
- **CLI Agent Mode**
- **Worktree Multi-Agent**
- Rules / MCP
- Agent / Plan Mode

---

## 기본 강의 (1-4교시, 4시간)

### [1교시: 첫 번째 발견 - Hooks](./sessions/session-01/README.md)

**시간**: 50분 | **난이도**: 🟢 입문

**스토리**:

```
Copilot에서 Cursor로 왔다.
"어? 거의 똑같네?"

Agent 모드? 있다.
Plan 모드? 있다.
Rules? Instructions랑 같다.

"뭐가 다른 거지?"

그때, Hooks를 발견한다.
"이건... Copilot에 없는데?"

드디어 AI를 제어할 수 있게 됐다.
```

**프로젝트** (4개):

1. `01-rules-basic` - "Copilot이랑 똑같네..."
2. `02-rules-globs` - "여전히 프롬프트 문제가..."
3. `03-hooks-basic` - "오! 이건 새롭다!"
4. `04-hooks-security` - "이거다! 이게 차이!"

**효과**: AI 작업 제어 강화, 위험 작업 100% 차단

**배울 것**:

- Copilot과 Cursor의 공통점 이해
- Rules의 한계 인식 (프롬프트의 한계)
- Hooks의 발견과 이해
- Hooks로 Agent 완벽 제어

---

### [2교시: 두 번째 발견 - 다채로운 기능](./sessions/session-02/README.md)

**시간**: 50분 | **난이도**: 🟢 초급

**스토리**:

```
Hooks를 배웠다.
"이게 Cursor로 온 이유구나!"

그런데 문득 궁금해졌다.
"Hooks 말고 또 뭐가 있지?"

Debug Mode를 발견한다.
"버그 찾을 때 추측 안 해도 돼?"

Visual Editor를 발견한다.
"UI 수정할 때 말로 설명 안 해도 돼?"

Cursor가 점점 좋아지기 시작했다.
```

**프로젝트** (4개):

1. `01-debug-login-bug` - "추측 안 해도 되네!"
2. `02-debug-api-error` - "API 문제도 바로 찾네!"
3. `03-visual-button-style` - "클릭만 하면 되네!"
4. `04-visual-card-layout` - "복잡한 것도 쉽네!"

**효과**: 버그 해결 50% 빠름, UI 수정 70% 빠름

**배울 것**:

- Debug Mode로 버그 원인 정확히 파악
- Visual Editor로 UI 직접 선택해서 수정
- 버그 해결 시간 50% 단축
- UI 수정 시간 70% 단축

---

### [3교시: 세 번째 발견 - IDE를 넘어서](./sessions/session-03/README.md)

**시간**: 50분 | **난이도**: 🟢 입문

**스토리**:

```
Hooks, Debug Mode, Visual Editor.
모두 IDE 안에서의 기능이었다.

어느 날, 서버에 SSH 접속했다.
"여기서는 Cursor를 못 쓰나?"

CLI Agent를 발견한다.
"터미널에서도 Agent를 쓸 수 있어?"

IDE를 열지 않아도 됐다.
어디서든 Agentic 개발이 가능해졌다.
```

**프로젝트** (2개):

1. `01-cli-basic` - "터미널에서도 Agent가!"
2. `02-terminal-dev` - "IDE 없이도 전체 개발이!"

**효과**: IDE 없이 Agentic 개발, SSH/CI/CD 활용

**배울 것**:

- CLI Agent 설치 및 실행
- 터미널에서 코드 작업
- IDE 없이 Agentic 개발 경험

---

### [4교시: 네 번째 발견 - Multi-Agent](./sessions/session-04/README.md)

**시간**: 50분 | **난이도**: 🟢 초급

**스토리**:

```
IDE에서도, 터미널에서도 Agent를 쓸 수 있게 됐다.
그런데 한 가지 아쉬움이 있었다.

"한 번에 하나씩만 할 수 있나?"
"여러 접근법을 동시에 비교하고 싶은데..."

Worktree와 Multi-Agent를 발견한다.
"여러 Agent를 동시에 돌릴 수 있어?"

IDE에서 메인 작업을 하면서,
터미널에서 조사와 실험을 동시에.
의사결정이 3배 빨라졌다.
```

**프로젝트** (3개):

1. `01-worktree-basic` - "독립 환경이 이렇게 쉽게!"
2. `02-multi-approach` - "동시에 비교하니까 빠르네!"
3. `03-ide-cli-integration` - "IDE + CLI 통합이 최고!"

**효과**: 의사결정 3배 빠름, 컨텍스트 오염 없음

**배울 것**:

- Worktree로 독립 환경 생성
- 여러 Agent 동시 실행
- IDE + CLI 통합 워크플로우

**심화**: [Role 기반 오케스트레이션](./sessions/session-04/ADVANCED_ORCHESTRATION.md)

---

## 학습 경로

```
1교시 (50분): Hooks - AI Agent 제어의 핵심
2교시 (50분): Debug Mode & Visual Editor
3교시 (50분): CLI Agent - 터미널에서 개발
4교시 (50분): Multi-Agent - 병렬 작업
```

---

## 학습 성과

- Hooks로 Agent 동작 제어 및 위험 작업 차단
- Debug Mode로 버그 원인 정확히 파악
- Visual Editor로 UI 직접 선택해서 수정
- CLI Agent로 터미널에서 개발
- Multi-Agent로 병렬 작업 및 독립 환경 구성

---

## Cursor 전용 기능

| 기능                     | 설명                         | 교시  |
| ------------------------ | ---------------------------- | ----- |
| **Hooks**                | Agent 동작 감시/제어 (핵심!) | 1교시 |
| **Debug Mode**           | 자동 로그 삽입               | 2교시 |
| **Visual Editor**        | 브라우저 UI 편집             | 2교시 |
| **CLI Agent Mode**       | IDE 없이 터미널에서 개발     | 3교시 |
| **Worktree Multi-Agent** | 독립 환경 병렬 작업          | 4교시 |

※ Rules, MCP 등은 Copilot과 동일하게 지원

---

## 시작하기

### 1. 사전 준비

```bash
# Cursor 설치
# https://cursor.com

# CLI 설치 (Cursor IDE에서)
# Cmd+Shift+P → "Shell Command: Install"
```

### 2. 학습 시작

```bash
# 1교시부터 시작
cd sessions/session-01
cat README.md
```

---

## 학습 여정

```
Copilot을 사용하고 있었다.
"Cursor는 뭐가 다를까?"

1교시: "어? Copilot이랑 똑같은데... 잠깐, 이건 뭐지?" (Hooks 발견)
  ↓
2교시: "Hooks 말고도 더 있어?" (Debug Mode, Visual Editor)
  ↓
3교시: "IDE 없이도 돼?" (CLI Agent)
  ↓
4교시: "여러 개를 동시에?" (Multi-Agent)
```

---

**즐거운 학습 되세요!** 🎉

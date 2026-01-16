# Cursor 튜토리얼

> **Copilot 사용자를 위한 Cursor 전환 가이드**

**학습 시간**: 4시간 (50분 × 4교시)  
**학습 시기**: 2월 중  
**강사**: 이민철(인터랙티브개발팀)  
**방식**: 실습 중심 + 설명 병행  
**환경**: Cursor IDE  
**난이도**: 입문 ~ 초급

---

## 📋 목차

- [교육 대상](#-교육-대상)
- [강의 개요](#-강의-개요)
- [학습 여정](#-학습-여정)
- [기본 강의 (1-4교시)](#-기본-강의-1-4교시)
- [시작하기](#-시작하기)

---

## 🎯 교육 대상

- GitHub Copilot을 사용 중인 개발자
- Cursor로 전환을 고려하는 마크업/프론트엔드 개발자
- Hooks로 AI Agent를 제어하는 방식이 궁금한 분
- Debug Mode와 Visual Editor로 버그/UI 수정을 빠르게 하고 싶은 분
- CLI Agent로 터미널에서 개발하는 방법을 알고 싶은 분
- Multi-Agent로 병렬 작업 및 독립 환경 구성을 배우고 싶은 분

---

## 📝 강의 개요

- GitHub Copilot과 Cursor 비교 및 공통점 이해
- Hooks로 Agent 동작 감시 및 제어 (Cursor만의 핵심 기능)
- Debug Mode와 Visual Editor로 버그 및 UI 수정
- CLI Agent로 터미널에서 개발
- Multi-Agent로 병렬 작업

---

## 🔑 과정에 언급되는 Cursor 키워드

- **Hooks** (preToolExecution, postToolExecution)
- **Debug Mode**
- **Visual Editor**
- **CLI Agent Mode**
- **Worktree Multi-Agent**
- Rules / MCP
- Agent / Plan Mode

---

## 📖 학습 여정

```
Copilot 사용자를 위한 Cursor 전환 가이드

1교시: Copilot과의 공통점과 차이점 → Hooks 소개
  ↓
2교시: Debug Mode와 Visual Editor 소개
  ↓
3교시: CLI Agent로 터미널에서 개발하기
  ↓
4교시: Multi-Agent로 병렬 작업하기
```

---

## 📚 기본 강의 (1-4교시)

> **Cursor의 핵심을 발견하는 여정**

### [1교시: 첫 번째 발견 - Hooks](./sessions/session-01/README.md)

**시간**: 50분 | **난이도**: 🟢 입문

**내용**:

```
Copilot과 Cursor의 공통점을 살펴봅니다.
Agent 모드, Plan 모드, Rules 등 대부분 동일합니다.

그렇다면 차이점은 무엇일까요?

Hooks를 소개합니다.
Copilot에는 없는 Cursor만의 핵심 기능입니다.

Hooks를 통해 AI Agent를 완벽히 제어하는 방법을 배웁니다.
```

**프로젝트** (4개):

1. `01-rules-basic` - "Copilot이랑 똑같네..."
2. `02-rules-globs` - "여전히 프롬프트 문제가..."
3. `03-hooks-basic` - "오! 이건 새롭다!"
4. `04-hooks-security` - "이거다! 이게 차이!"

**효과**: AI 작업 제어 강화, 위험 작업 100% 차단

---

### [2교시: 두 번째 발견 - 다채로운 기능](./sessions/session-02/README.md)

**시간**: 50분 | **난이도**: 🟢 초급

**내용**:

```
Hooks 외에 Cursor의 추가 기능들을 살펴봅니다.

Debug Mode를 소개합니다.
추측이 아닌 실제 실행으로 버그를 찾는 방법을 배웁니다.

Visual Editor를 소개합니다.
말로 설명하지 않고 클릭으로 UI를 수정하는 방법을 배웁니다.
```

**프로젝트** (4개):

1. `01-debug-login-bug` - "추측 안 해도 되네!"
2. `02-debug-api-error` - "API 문제도 바로 찾네!"
3. `03-visual-button-style` - "클릭만 하면 되네!"
4. `04-visual-card-layout` - "복잡한 것도 쉽네!"

**효과**: 버그 해결 50% 빠름, UI 수정 70% 빠름

---

### [3교시: 세 번째 발견 - IDE를 넘어서](./sessions/session-03/README.md)

**시간**: 50분 | **난이도**: 🟢 입문

**내용**:

```
지금까지는 IDE 안에서의 기능들이었습니다.

CLI Agent를 소개합니다.
터미널에서도 Agent를 사용할 수 있습니다.

SSH 접속, CI/CD 등 IDE 없이도
Agentic 개발이 가능한 방법을 배웁니다.
```

**프로젝트** (2개):

1. `01-cli-basic` - "터미널에서도 Agent가!"
2. `02-terminal-dev` - "IDE 없이도 전체 개발이!"

**효과**: IDE 없이 Agentic 개발, SSH/CI/CD 활용

---

### [4교시: 네 번째 발견 - Multi-Agent](./sessions/session-04/README.md)

**시간**: 50분 | **난이도**: 🟢 초급

**내용**:

```
지금까지는 한 번에 하나의 Agent만 사용했습니다.

Worktree와 Multi-Agent를 소개합니다.
여러 Agent를 동시에 실행하는 방법을 배웁니다.

IDE에서 메인 작업을 하면서
터미널에서 조사와 실험을 병렬로 진행하는 방법을 실습합니다.
```

**프로젝트** (3개):

1. `01-worktree-basic` - "독립 환경이 이렇게 쉽게!"
2. `02-multi-approach` - "동시에 비교하니까 빠르네!"
3. `03-ide-cli-integration` - "IDE + CLI 통합이 최고!"

**효과**: 의사결정 3배 빠름, 컨텍스트 오염 없음

**심화**: [Role 기반 오케스트레이션](./sessions/session-04/ADVANCED_ORCHESTRATION.md)

---

## 🚀 시작하기

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

### 3. 학습 경로

**4시간 기본 강의**

```
1교시 (50분): Hooks - AI Agent 제어의 핵심
2교시 (50분): Debug Mode & Visual Editor
3교시 (50분): CLI Agent - 터미널에서 개발
4교시 (50분): Multi-Agent - 병렬 작업
```

---

## 📊 학습 성과

- Hooks로 Agent 동작 제어 및 위험 작업 차단
- Debug Mode로 버그 원인 정확히 파악
- Visual Editor로 UI 직접 선택해서 수정
- CLI Agent로 터미널에서 개발
- Multi-Agent로 병렬 작업 및 독립 환경 구성

---

## 🎓 Cursor 전용 기능

| 기능                     | 설명                         | 교시  |
| ------------------------ | ---------------------------- | ----- |
| **Hooks**                | Agent 동작 감시/제어 (핵심!) | 1교시 |
| **Debug Mode**           | 자동 로그 삽입               | 2교시 |
| **Visual Editor**        | 브라우저 UI 편집             | 2교시 |
| **CLI Agent Mode**       | IDE 없이 터미널에서 개발     | 3교시 |
| **Worktree Multi-Agent** | 독립 환경 병렬 작업          | 4교시 |

※ Rules, MCP 등은 Copilot과 동일하게 지원

---

## 📁 프로젝트 구조

```
cursor-tutorial/
├── README.md              # 이 파일
└── sessions/              # 교시별 실습
    ├── session-01/        # 1교시 (4개 프로젝트)
    ├── session-02/        # 2교시 (4개 프로젝트)
    ├── session-03/        # 3교시 (2개 프로젝트)
    └── session-04/        # 4교시 (3개 프로젝트)
```

**총 13개 프로젝트**

---

## 🔗 공식 문서

- [Cursor 문서](https://cursor.com/docs)
- [Agent](https://cursor.com/docs/agent/overview)
- [CLI](https://cursor.com/docs/cli/overview)
- [Hooks](https://cursor.com/docs/agent/hooks)

---

**즐거운 학습 되세요!** 🎉

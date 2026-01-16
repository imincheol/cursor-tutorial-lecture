# Cursor 튜토리얼

> **Copilot 사용자를 위한 Cursor 전환 가이드**

**학습 시간**: 4시간 (실습 중심, 유연한 시간 구성)  
**학습 시기**: 2월 중  
**강사**: 이민철(인터랙티브개발팀)  
**방식**: 강의 + 실습 병행  
**환경**: Cursor IDE  
**난이도**: 입문 ~ 초급

---

## 📋 목차

- [교육 대상](#-교육-대상)
- [강의 개요](#-강의-개요)
- [학습 여정](#-학습-여정)
- [강의 구성 (1-4장)](#-강의-구성-1-4장)
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

안녕하세요. 이번 튜토리얼에서는 Copilot을 사용하시던 분들이 Cursor로 전환할 때 알아야 할 핵심 내용을 다룹니다.

```
Copilot과 Cursor, 무엇이 같고 무엇이 다를까요?

1장: Copilot과의 공통점을 살펴보고, Hooks라는 차별점을 소개합니다.
  ↓
2장: Debug Mode와 Visual Editor로 개발 속도를 높이는 방법을 배웁니다.
  ↓
3장: CLI Agent로 터미널에서도 Agent를 활용하는 방법을 익힙니다.
  ↓
4장: Multi-Agent로 여러 작업을 동시에 진행하는 방법을 실습합니다.
```

각 장마다 실습 프로젝트가 준비되어 있으니, 직접 따라하시면서 체득하시기 바랍니다.

---

## 📚 강의 구성 (1-4장)

> **Cursor의 핵심을 이해하고 활용하는 여정**

### [1장: Copilot과의 차이점 - Hooks의 발견](./sessions/session-01/README.md)

**난이도**: 🟢 입문

**강의 내용**:

먼저 Copilot과 Cursor의 공통점부터 살펴보겠습니다. Agent 모드, Plan 모드, Rules 등 대부분의 기능이 동일합니다. 그렇다면 왜 Cursor를 사용해야 할까요?

바로 **Hooks** 때문입니다. Copilot에는 없는 Cursor만의 핵심 기능이죠.

Hooks를 사용하면 AI Agent가 실행하는 모든 작업을 **사전에 차단**하거나 **사후에 점검**할 수 있습니다. 실제로 Claude CLI가 홈 디렉터리를 삭제해버린 사고 사례가 있었는데요, Hooks를 사용하면 이런 위험한 명령을 100% 차단할 수 있습니다.

이번 장에서는 Rules의 한계를 경험하고, Hooks로 완벽한 제어를 구현하는 방법을 배웁니다.

**실습 프로젝트** (3개):

1. `01-rules-basic` - Rules 기본 사용법 (Globs 패턴 포함)
2. `02-hooks-basic` - Hooks의 발견
3. `03-hooks-security` - 위험 명령 차단 실습

**학습 효과**: AI 작업 제어 강화, 위험 작업 100% 차단

---

### [2장: 개발 속도를 높이는 기능들 - Debug Mode & Visual Editor](./sessions/session-02/README.md)

**난이도**: 🟢 초급

**강의 내용**:

Hooks 외에도 Cursor에는 개발 속도를 획기적으로 높여주는 기능들이 있습니다.

먼저 **Debug Mode**를 소개합니다. 일반적으로 버그를 수정할 때 AI는 코드를 보고 추측해서 수정하죠. 하지만 Debug Mode는 다릅니다. 코드를 실제로 실행하고 로그를 자동으로 삽입해서 정확한 원인을 파악합니다. 추측이 아닌 확인이죠.

다음은 **Visual Editor**입니다. UI를 수정할 때 "왼쪽 위 파란 버튼"처럼 말로 설명할 필요가 없습니다. 브라우저에서 직접 클릭하면 AI가 정확히 그 요소를 수정합니다.

이번 장에서는 이 두 가지 기능으로 버그 수정과 UI 작업을 빠르게 처리하는 방법을 실습합니다.

**실습 프로젝트** (4개):

1. `01-debug-login-bug` - Debug Mode로 로그인 버그 해결
2. `02-debug-api-error` - API 오류 정확히 찾기
3. `03-visual-button-style` - 클릭으로 버튼 스타일 수정
4. `04-visual-card-layout` - 복잡한 레이아웃 수정

**학습 효과**: 버그 해결 50% 빠름, UI 수정 70% 빠름

---

### [3장: IDE를 벗어나다 - CLI Agent](./sessions/session-03/README.md)

**난이도**: 🟢 입문

**강의 내용**:

지금까지 배운 기능들은 모두 IDE 안에서 동작했습니다. 그런데 실무에서는 IDE를 사용할 수 없는 상황이 자주 있죠. SSH로 서버에 접속했을 때, CI/CD 파이프라인 안에서, 또는 간단한 작업을 빠르게 처리하고 싶을 때 말이죠.

**CLI Agent**를 소개합니다. 터미널에서 직접 Agent를 실행할 수 있습니다.

Copilot에도 CLI가 있지만 명령어 생성만 가능하고, 실제 코드 작업은 IDE로 돌아가야 합니다. 하지만 Cursor CLI Agent는 터미널에서 파일 생성, 수정, 테스트 실행까지 모두 가능합니다.

이번 장에서는 CLI Agent로 IDE 없이 개발하는 방법을 익힙니다.

**실습 프로젝트** (2개):

1. `01-cli-basic` - CLI Agent 기본 사용법
2. `02-terminal-dev` - 터미널에서 전체 개발 프로세스

**학습 효과**: IDE 없이 Agentic 개발, SSH/CI/CD 활용

---

### [4장: 동시에 여러 작업을 - Multi-Agent](./sessions/session-04/README.md)

**난이도**: 🟢 초급

**강의 내용**:

지금까지는 한 번에 하나의 Agent만 사용했습니다. 하지만 실무에서는 여러 가지 접근 방법을 동시에 시도해보고 싶을 때가 많죠. A 방법과 B 방법 중 어떤 게 나을까? 두 개를 동시에 실험해보면 의사결정이 훨씬 빠를 텐데 말이죠.

**Worktree와 Multi-Agent**를 소개합니다.

Git Worktree를 사용하면 하나의 저장소에서 독립적인 작업 환경을 여러 개 만들 수 있습니다. 각 환경에서 Agent를 실행하면 서로 간섭 없이 병렬로 작업할 수 있죠.

예를 들어, IDE에서는 메인 기능을 개발하고, 터미널에서는 동시에 다른 접근 방법을 실험할 수 있습니다. 컨텍스트 오염도 없고, 의사결정도 빨라집니다.

이번 장에서는 Multi-Agent를 활용한 병렬 개발 방법을 실습합니다.

**실습 프로젝트** (3개):

1. `01-worktree-basic` - Worktree로 독립 환경 만들기
2. `02-multi-approach` - 여러 접근 방법 동시 실험
3. `03-ide-cli-integration` - IDE + CLI 통합 워크플로우

**학습 효과**: 의사결정 3배 빠름, 컨텍스트 오염 없음

**심화 학습**: [Role 기반 오케스트레이션](./sessions/session-04/ADVANCED_ORCHESTRATION.md)

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
# 1장부터 시작
cd sessions/session-01
cat README.md
```

### 3. 학습 경로

**4시간 튜토리얼 (실습 중심, 유연한 시간 구성)**

```
1장: Hooks - AI Agent 제어의 핵심
2장: Debug Mode & Visual Editor - 개발 속도 향상
3장: CLI Agent - 터미널에서 개발
4장: Multi-Agent - 병렬 작업
```

※ 각 장의 시간은 실습 진행 속도에 따라 유연하게 조정됩니다.

---

## 📊 학습 성과

- Hooks로 Agent 동작 제어 및 위험 작업 차단
- Debug Mode로 버그 원인 정확히 파악
- Visual Editor로 UI 직접 선택해서 수정
- CLI Agent로 터미널에서 개발
- Multi-Agent로 병렬 작업 및 독립 환경 구성

---

## 🎓 Cursor 전용 기능

| 기능                     | 설명                         | 학습 장 |
| ------------------------ | ---------------------------- | ------- |
| **Hooks**                | Agent 동작 감시/제어 (핵심!) | 1장     |
| **Debug Mode**           | 자동 로그 삽입               | 2장     |
| **Visual Editor**        | 브라우저 UI 편집             | 2장     |
| **CLI Agent Mode**       | IDE 없이 터미널에서 개발     | 3장     |
| **Worktree Multi-Agent** | 독립 환경 병렬 작업          | 4장     |

※ Rules, MCP 등은 Copilot과 동일하게 지원

---

## 📁 프로젝트 구조

```
cursor-tutorial/
├── README.md              # 이 파일
└── sessions/              # 장별 실습
    ├── session-01/        # 1장 (3개 프로젝트)
    ├── session-02/        # 2장 (4개 프로젝트)
    ├── session-03/        # 3장 (2개 프로젝트)
    └── session-04/        # 4장 (3개 프로젝트)
```

**총 12개 실습 프로젝트**

---

## 🔗 공식 문서

- [Cursor 문서](https://cursor.com/docs)
- [Agent](https://cursor.com/docs/agent/overview)
- [CLI](https://cursor.com/docs/cli/overview)
- [Hooks](https://cursor.com/docs/agent/hooks)

---

**즐거운 학습 되세요!** 🎉

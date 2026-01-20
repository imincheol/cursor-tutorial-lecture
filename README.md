# Cursor 튜토리얼

> **Copilot 사용자를 위한 Cursor 전환 가이드**

**강사**: 이민철(인터랙티브개발팀)  
**방식**: 강의 + 실습 병행  
**환경**: Cursor IDE  
**난이도**: 입문 ~ 초급 (1-7장: 기본, 8-10장: 보충 자료)

---

## 📋 목차

- [교육 대상](#-교육-대상)
- [강의 개요](#-강의-개요)
- [학습 여정](#-학습-여정)
- [기본 과정 (1-7장)](#-기본-과정-1-7장)
- [심화 과정 (8-10장)](#-심화-과정-8-10장)
- [시작하기](#-시작하기)

---

## 🎯 교육 대상

- GitHub Copilot을 사용 중인 개발자
- Cursor로 전환을 고려하는 마크업/프론트엔드 개발자
- Cursor의 핵심 기능들을 체계적으로 배우고 싶은 분
- Debug Mode, Hooks, Visual Editor 등 실전 기능을 익히고 싶은 분

※ 8-10장은 보충 자료로, 필요에 따라 학습하시면 됩니다.

---

## 📝 강의 개요

**기본 강의 (1-7장)**:

- 1장: GitHub Copilot과 Cursor의 공통점 이해 (Rules 등)
- 2장: Debug Mode - 실행 기반 버그 해결
- 3장: Hooks - Agent 동작 감시 및 제어 (핵심!)
- 4장: Visual Editor - 클릭 기반 UI 수정
- 5장: CLI Agent - 터미널에서 개발
- 6장: Git Worktree - 독립 환경 구성
- 7장: Multi-Agent - 병렬 작업

**보충 자료 (8-10장, 선택)**:

- 8장: Agent Skills & Sub-Agent (향후 도입 예정 기능)
- 9장: Orchestration - 복잡한 작업 자동화
- 10장: 실전 프로젝트 - 종합 실습

---

## 🔑 과정에 언급되는 Cursor 키워드

**공통 기능 (Copilot과 동일)**:

- Rules / Instructions
- Agent / Plan Mode

**Cursor 전용 기능 (기본 강의)**:

- **Debug Mode** - 실행 기반 디버깅
- **Hooks** - Agent 제어 (preToolExecution, postToolExecution)
- **Visual Editor** - 브라우저 UI 편집
- **CLI Agent** - 터미널 Agent
- **Git Worktree** - 독립 환경
- **Multi-Agent** - 병렬 작업

**보충 자료**:

- **Agent Skills** (예정) - 재사용 가능한 스킬
- **Sub-Agent** (예정) - 하위 Agent 위임
- **Orchestration** - 복잡한 워크플로우

---

## 📖 학습 여정

안녕하세요. 이번 튜토리얼에서는 Copilot을 사용하시던 분들이 Cursor로 전환할 때 알아야 할 핵심 내용을 다룹니다.

```
Copilot과 Cursor, 무엇이 같고 무엇이 다를까요?

[기본 강의: Copilot과의 공통점과 차이점]

1장: Copilot과의 공통점 → Rules 등 동일한 기능들
  ↓
2장: Debug Mode → 추측이 아닌 실행으로 버그 해결
  ↓
3장: Hooks → AI Agent를 코드로 제어 (핵심!)
  ↓
4장: Visual Editor → 클릭으로 UI 수정
  ↓
5장: CLI Agent → 터미널에서 개발
  ↓
6장: Git Worktree → 독립 환경 구성
  ↓
7장: Multi-Agent → 병렬 작업

[보충 자료: 필요에 따라]

8장: Agent Skills & Sub-Agent (향후 도입 예정)
9장: Orchestration (복잡한 작업 자동화)
10장: 실전 프로젝트 (종합 실습)
```

각 장마다 실습 프로젝트가 준비되어 있으니, 직접 따라하시면서 체득하시기 바랍니다.

---

## 📚 기본 과정 (1-7장)

> **Copilot과의 공통점을 확인하고, Cursor만의 차별화된 기능들을 학습합니다**

### [1장: Copilot과 Cursor의 비슷한 기능들](./sessions/session-01/README.md)

**난이도**: 🟢 입문

**강의 내용**:

Copilot을 사용하시던 분들이 Cursor로 넘어오면 가장 먼저 궁금한 것이 "뭐가 다르지?"입니다. 하지만 먼저 공통점부터 확인하겠습니다.

**모드 비교**부터 시작합니다. Copilot은 Ask, Edit, Agent, Plan 모드가 있고, Cursor는 Ask, Agent, Plan, Debug 모드가 있습니다. 대부분 동일하지만 Edit와 Debug에서 차이가 있습니다.

각 모드의 특징을 살펴보고, 특히 **Plan 모드**의 중요성을 강조합니다. Agent 모드만 사용하고 있다면 Plan 모드를 한번 사용해보는 것을 권장합니다. 사전에 계획을 세우고 검토한 후 실행하는 방식은 복잡한 작업에서 매우 유용합니다.

**Debug 모드**는 Cursor만의 차별화된 기능입니다. 코드를 보고 추측하는 것이 아니라 실제로 실행하고 로그를 자동 삽입하여 버그 원인을 정확히 파악합니다.

**지침/규칙**도 비교합니다. Copilot의 Instructions와 Cursor의 Rules는 기능이 동일하지만, 파일 위치가 다릅니다. Copilot은 `.github/copilot-instructions.md`를 사용하고, Cursor는 `.cursorrules`를 사용합니다. 두 환경 모두 glob 패턴으로 파일별 규칙 적용이 가능합니다.

이번 장에서는 **간단한 실습**으로 Rules와 Debug 모드를 체험합니다. 프로젝트 파일을 만들지 않고 질의응답으로 바로 확인하는 방식이라 빠르고 쉽습니다.

**실습 프로젝트** (2개):

1. `01-rules-simple` - Rules 간단 실습 (질의응답으로 바로 확인)
2. `02-debug-simple` - Debug 모드 간단 체험 (Agent 모드 vs Debug 모드, 3개 파일로 비교)

**학습 효과**: 모드 비교 및 이해, Plan 모드 활용, Debug 모드 직접 체험, 지침/규칙 동작 방식 파악, Rules의 한계 인식

---

### [2장: Debug Mode - 실행 기반 디버깅](./sessions/session-02/README.md)

**난이도**: 🟢 입문

**강의 내용**:

이제부터는 Cursor만의 차별화된 기능들을 소개합니다. 첫 번째는 **Debug Mode**입니다.

일반적으로 버그를 수정할 때 AI는 코드를 보고 **추측**해서 수정합니다. "아마 여기가 문제일 것 같은데..."라고 말이죠. 하지만 Debug Mode는 다릅니다.

코드를 **실제로 실행**하고 로그를 자동으로 삽입해서 정확한 원인을 파악합니다. 추측이 아닌 확인이죠. 이는 Copilot의 Edit 모드와는 완전히 다른 접근 방식입니다.

이번 장에서는 Debug Mode로 로그인 버그와 API 오류를 해결하는 방법을 실습합니다.

**실습 프로젝트** (2개):

1. `01-debug-login-bug` - Debug Mode로 로그인 버그 해결
2. `02-debug-api-error` - API 오류 정확히 찾기

**학습 효과**: 버그 해결 50% 빠름, 정확도 향상

---

### [3장: Hooks - AI Agent 제어의 핵심](./sessions/session-03/README.md)

**난이도**: 🟢 초급

**강의 내용**:

Cursor의 가장 핵심적인 차별화 기능인 **Hooks**를 소개합니다.

Rules는 프롬프트입니다. "이렇게 해주세요"라고 요청하는 것이죠. 하지만 AI가 가끔 무시합니다. "rm -rf 쓰지 마세요"라고 해도 쓸 때가 있습니다.

Hooks는 **코드**입니다. Agent가 실행하는 모든 작업을 **사전에 차단**하거나 **사후에 점검**할 수 있습니다. 실제로 Claude CLI가 홈 디렉터리를 삭제해버린 사고가 있었는데, Hooks를 사용하면 100% 차단할 수 있습니다.

이번 장에서는 `preToolExecution`과 `postToolExecution`으로 Agent를 완벽히 제어하는 방법을 배웁니다.

**실습 프로젝트** (2개):

1. `01-hooks-basic` - Hooks 기본 사용법
2. `02-hooks-security` - 위험 명령 차단 실습

**학습 효과**: AI 작업 제어 강화, 위험 작업 100% 차단

---

### [4장: Visual Editor - 클릭 기반 UI 수정](./sessions/session-04/README.md)

**난이도**: 🟢 초급

**강의 내용**:

UI를 수정할 때 "왼쪽 위 파란 버튼"처럼 말로 설명하는 것은 번거롭습니다. AI가 잘못 이해할 수도 있죠.

**Visual Editor**를 사용하면 브라우저에서 직접 클릭해서 요소를 선택할 수 있습니다. AI가 정확히 그 요소를 수정합니다. 말로 설명할 필요가 없습니다.

이번 장에서는 Visual Editor로 버튼 스타일과 복잡한 레이아웃을 빠르게 수정하는 방법을 실습합니다.

**실습 프로젝트** (2개):

1. `01-visual-button-style` - 클릭으로 버튼 스타일 수정
2. `02-visual-card-layout` - 복잡한 레이아웃 수정

**학습 효과**: UI 수정 70% 빠름, 정확도 향상

---

### [5장: CLI Agent - 터미널에서 개발](./sessions/session-05/README.md)

**난이도**: 🟢 초급

**강의 내용**:

지금까지 배운 기능들은 모두 IDE 안에서 동작했습니다. 하지만 실무에서는 IDE를 사용할 수 없는 상황이 자주 있습니다. SSH로 서버에 접속했을 때, CI/CD 파이프라인 안에서, 또는 간단한 작업을 빠르게 처리하고 싶을 때 말이죠.

**Cursor CLI**를 소개합니다. 터미널에서 직접 Agent를 실행할 수 있습니다.

Copilot에도 CLI가 있지만 명령어 제안만 가능하고, 실제 코드 작업은 IDE로 돌아가야 합니다. 하지만 Cursor CLI는 터미널에서 파일 생성, 수정, 테스트 실행까지 모두 가능합니다.

특히 **Shell Mode**(`!` 명령)를 사용하면 Agent와 대화하는 중에도 빠르게 명령어를 실행하고 결과를 확인할 수 있습니다.

이번 장에서는 Cursor CLI로 IDE 없이 개발하는 방법을 익힙니다.

**실습 프로젝트** (2개):

1. `01-cli-basic` - CLI Agent 기본 사용법 및 Shell Mode
2. `02-terminal-dev` - 터미널에서 전체 개발 프로세스

**학습 효과**: IDE 없이 Agentic 개발, Shell Mode 활용, SSH/CI/CD 활용

---

### [6장: Git Worktree - 독립 환경 구성](./sessions/session-06/README.md)

**난이도**: 🟢 초급

**강의 내용**:

여러 가지 접근 방법을 동시에 시도하고 싶을 때가 있습니다. A 방법과 B 방법 중 어떤 게 나을까? 하지만 한 환경에서 여러 시도를 하면 컨텍스트가 오염됩니다.

**Git Worktree**를 사용하면 하나의 저장소에서 독립적인 작업 환경을 여러 개 만들 수 있습니다. 각 환경은 완전히 독립적이므로 서로 간섭하지 않습니다.

이번 장에서는 Worktree로 독립 환경을 구성하고, 각 환경에서 다른 접근 방법을 실험하는 방법을 배웁니다.

**실습 프로젝트** (2개):

1. `01-worktree-basic` - Worktree 기본 사용법
2. `02-multi-approach` - 여러 접근 방법 동시 실험

**학습 효과**: 컨텍스트 오염 없음, 안전한 실험 환경

---

### [7장: Multi-Agent - 병렬 작업](./sessions/session-07/README.md)

**난이도**: 🟢 초급

**강의 내용**:

지금까지 배운 모든 기능을 종합합니다. IDE에서는 메인 기능을 개발하고, 터미널에서는 동시에 다른 작업을 진행하는 **Multi-Agent 패턴**을 실습합니다.

예를 들어:

- IDE Agent: 메인 기능 개발
- CLI Agent 1: 테스트 작성
- CLI Agent 2: 문서 작성

각 Agent는 독립적인 Worktree 환경에서 실행되므로 서로 간섭하지 않습니다. 의사결정도 빨라지고, 생산성도 향상됩니다.

이번 장에서는 Multi-Agent를 활용한 병렬 개발 방법을 실습합니다.

**실습 프로젝트** (2개):

1. `01-multi-agent-basic` - Multi-Agent 기본 패턴
2. `02-ide-cli-integration` - IDE + CLI 통합 워크플로우

**학습 효과**: 의사결정 3배 빠름, 생산성 향상

---

## 🎓 심화 과정 (8-10장)

> **고급 활용법과 향후 도입 예정 기능을 학습합니다**

### [8장: Agent Skills & Sub-Agent (향후 도입 예정)](./sessions/session-08/README.md)

**난이도**: 🟡 중급

**강의 내용**:

Cursor에 향후 도입될 예정인 **Agent Skills**와 **Sub-Agent** 기능을 미리 살펴봅니다.

**Agent Skills**는 재사용 가능한 스킬입니다. 예를 들어 "테스트 작성 스킬", "API 문서 생성 스킬" 같은 것을 만들어두면, 다른 프로젝트에서도 재사용할 수 있습니다.

**Sub-Agent**는 메인 Agent가 하위 Agent에게 작업을 위임하는 기능입니다. 예를 들어 메인 Agent가 "테스트를 작성해줘"라고 하면, 테스트 전문 Sub-Agent가 작업을 수행합니다.

이번 장에서는 현재 Hooks와 Multi-Agent로 유사한 패턴을 구현하고, 향후 기능을 대비하는 방법을 배웁니다.

**실습 프로젝트** (2개):

1. `01-skill-pattern` - Hooks로 스킬 패턴 구현
2. `02-sub-agent-pattern` - Multi-Agent로 Sub-Agent 패턴 구현

**학습 효과**: 향후 기능 대비, 재사용 가능한 패턴 구축

---

### [9장: Orchestration - 복잡한 작업 자동화](./sessions/session-09/README.md)

**난이도**: 🟡 중급

**강의 내용**:

복잡한 프로젝트에서는 여러 Agent를 조율(Orchestration)해야 합니다. 예를 들어:

1. Agent A: 요구사항 분석
2. Agent B: 설계 문서 작성
3. Agent C: 코드 구현
4. Agent D: 테스트 작성
5. Agent E: 문서 작성

이런 복잡한 워크플로우를 자동화하는 방법을 배웁니다. Role 기반 오케스트레이션, 의존성 관리, 결과 검증 등을 다룹니다.

이번 장에서는 실전 프로젝트를 통해 오케스트레이션을 실습합니다.

**실습 프로젝트** (2개):

1. `01-role-based-orchestration` - Role 기반 오케스트레이션
2. `02-workflow-automation` - 워크플로우 자동화

**학습 효과**: 복잡한 작업 자동화, 팀 협업 패턴 구축

**참고 자료**: [ADVANCED_ORCHESTRATION.md](./sessions/session-09/ADVANCED_ORCHESTRATION.md)

---

### [10장: 실전 프로젝트 - 종합 실습](./sessions/session-10/README.md)

**난이도**: 🔴 고급

**강의 내용**:

지금까지 배운 모든 내용을 종합하는 실전 프로젝트를 진행합니다.

**프로젝트 시나리오**:

- 요구사항: 간단한 TODO 앱 개발 (프론트엔드 + 백엔드)
- 제약사항: 4시간 내 완성
- 활용 기능: Debug Mode, Hooks, Visual Editor, CLI Agent, Multi-Agent, Orchestration

**진행 방식**:

1. 요구사항 분석 Agent
2. 설계 Agent
3. 프론트엔드 개발 Agent (IDE + Visual Editor)
4. 백엔드 개발 Agent (CLI Agent)
5. 테스트 Agent
6. 문서 Agent
7. 통합 및 배포

이번 장에서는 실전 프로젝트를 통해 Cursor의 모든 기능을 활용하는 방법을 체득합니다.

**실습 프로젝트** (1개):

1. `01-todo-app-project` - 종합 실전 프로젝트

**학습 효과**: 실전 프로젝트 경험, 모든 기능 종합 활용

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

**기본 강의**:

```
1장: Copilot 공통점 → Rules
2장: Debug Mode → 실행 기반 디버깅
3장: Hooks → AI Agent 제어 (핵심!)
4장: Visual Editor → 클릭 기반 UI 수정
5장: CLI Agent → 터미널 개발
6장: Git Worktree → 독립 환경
7장: Multi-Agent → 병렬 작업
```

**보충 자료 (선택)**:

```
8장: Agent Skills & Sub-Agent (향후 도입 예정)
9장: Orchestration (복잡한 작업 자동화)
10장: 실전 프로젝트 (종합 실습)
```

---

## 📊 학습 성과

**기본 강의 완료 후**:

- Copilot 경험을 Cursor에서 그대로 활용 (Rules)
- Debug Mode로 버그 원인 정확히 파악 (50% 빠름)
- Hooks로 Agent 동작 제어 및 위험 작업 100% 차단 (핵심!)
- Visual Editor로 UI 직접 선택해서 수정 (70% 빠름)
- CLI Agent로 터미널에서 개발 (SSH/CI/CD 활용)
- Git Worktree로 독립 환경 구성 (컨텍스트 오염 없음)
- Multi-Agent로 병렬 작업 (의사결정 3배 빠름)

**보충 자료 학습 시**:

- Agent Skills & Sub-Agent 패턴 구현 (향후 기능 대비)
- Orchestration으로 복잡한 작업 자동화
- 실전 프로젝트로 모든 기능 종합 활용

---

## 🎓 Cursor 기능 맵

| 기능              | 설명               | 학습 장     |
| ----------------- | ------------------ | ----------- |
| **Rules**         | Copilot과 동일     | 1장 (기본)  |
| **Debug Mode**    | 실행 기반 디버깅   | 2장 (기본)  |
| **Hooks**         | Agent 제어 (핵심!) | 3장 (기본)  |
| **Visual Editor** | 클릭 기반 UI 수정  | 4장 (기본)  |
| **CLI Agent**     | 터미널 Agent       | 5장 (기본)  |
| **Git Worktree**  | 독립 환경          | 6장 (기본)  |
| **Multi-Agent**   | 병렬 작업          | 7장 (기본)  |
| **Agent Skills**  | 재사용 스킬 (예정) | 8장 (보충)  |
| **Sub-Agent**     | 하위 Agent (예정)  | 8장 (보충)  |
| **Orchestration** | 복잡한 작업 자동화 | 9장 (보충)  |
| **실전 프로젝트** | 종합 실습          | 10장 (보충) |

---

## 📁 프로젝트 구조

```
cursor-tutorial/
├── README.md              # 이 파일
└── sessions/              # 장별 실습
    ├── session-01/        # 1장: Copilot 공통점 (1개 프로젝트)
    ├── session-02/        # 2장: Debug Mode (2개 프로젝트)
    ├── session-03/        # 3장: Hooks (2개 프로젝트)
    ├── session-04/        # 4장: Visual Editor (2개 프로젝트)
    ├── session-05/        # 5장: CLI Agent (2개 프로젝트)
    ├── session-06/        # 6장: Git Worktree (2개 프로젝트)
    ├── session-07/        # 7장: Multi-Agent (2개 프로젝트)
    ├── session-08/        # 8장: Agent Skills & Sub-Agent (보충)
    ├── session-09/        # 9장: Orchestration (보충)
    └── session-10/        # 10장: 실전 프로젝트 (보충)
```

**총 13개 실습 프로젝트**

---

## 🔗 공식 문서

- [Cursor 문서](https://cursor.com/docs)
- [Agent](https://cursor.com/docs/agent/overview)
- [CLI](https://cursor.com/docs/cli/overview)
- [Hooks](https://cursor.com/docs/agent/hooks)

---

**즐거운 학습 되세요!** 🎉

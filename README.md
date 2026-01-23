# Cursor 튜토리얼

> **Copilot 사용자를 위한 Cursor 전환 가이드**

**강사**: 이민철(인터랙티브개발팀)  
**방식**: 강의 + 실습 병행  
**환경**: Cursor IDE  
**난이도**: 입문 ~ 초급 (1-7장: 기본, 8-11장: 확장)

---

## 📋 목차

- [교육 대상](#-교육-대상)
- [강의 개요](#-강의-개요)
- [4시간 강의 가이드](#-4시간-강의-가이드)
- [학습 여정](#-학습-여정)
- [기본 과정 (1-7장)](#-기본-과정-1-7장)
- [확장 과정 (8-11장)](#-확장-과정-8-11장)
- [시작하기](#-시작하기)

---

## 🎯 교육 대상

- GitHub Copilot을 사용 중인 개발자
- Cursor로 전환을 고려하는 마크업/프론트엔드 개발자
- Cursor의 핵심 기능들을 체계적으로 배우고 싶은 분
- Debug Mode, Hooks, Visual Editor 등 실전 기능을 익히고 싶은 분

※ 8-11장은 확장 과정으로, 최신 기능(2026)을 다룹니다. 시간 여유 시 또는 자율 학습하시면 됩니다.

---

## 📝 강의 개요

**기본 과정 (1-7장) - Cursor 핵심 기능**:

- 1장: Copilot과 Cursor 비교 (Rules, Debug 소개)
- 2장: Debug Mode - 실행 기반 디버깅
- 3장: Visual Editor - 클릭 기반 UI 수정
- 4장: CLI Agent - 터미널에서 개발 (Plan/Ask 모드, Cloud Handoff)
- 5장: Hooks - AI Agent 제어 (핵심!)
- 6장: Agent Skills & Subagents - Agent 능력 확장 (Clarification Questions)
- 7장: Multi-Agent - 여러 업무 동시 처리 (Worktree 포함)

**확장 과정 (8-11장) - 최신 기능 (2026)**:

- 8장: Image Generation - AI로 이미지 생성
- 9장: Cloud Agent & Handoff - 장시간 작업 위임
- 10장: MCP Integration - 외부 도구 연결
- 11장: Enterprise Features - 팀 협업 기능

---

## 🔑 과정에 언급되는 Cursor 키워드

**공통 기능 (Copilot과 동일)**:

- Rules / Instructions
- Agent / Plan Mode

**Cursor 핵심 기능 (기본 과정)**:

- **Debug Mode** - 실행 기반 디버깅
- **Visual Editor** - 브라우저 UI 편집
- **CLI Agent** - 터미널 Agent
- **CLI Plan/Ask Mode** - 터미널에서 Plan/Ask 모드
- **Hooks** - Agent 제어 (preToolExecution, postToolExecution)
- **Agent Skills** - 재사용 가능한 스킬
- **Subagents** - 자동 오케스트레이션
- **Clarification Questions** - Agent가 질문하기
- **Multi-Agent** - 여러 업무 동시 처리
- **Git Worktree** - 독립 환경 구성

**최신 기능 2026 (확장 과정)**:

- **Image Generation** - AI로 이미지 생성
- **Cloud Agent** - 클라우드 Agent
- **Cloud Handoff** - 장시간 작업 위임
- **MCP** - 외부 도구 연결 (GitHub, Browser)
- **Cursor Blame** - AI 기여도 추적
- **Shared Transcripts** - 대화 공유
- **Layout Customization** - 레이아웃 커스터마이징

---

## 💡 4시간 강의 가이드

4시간은 대략적인 가이드이며, 실제 강의에서는 유연하게 조정합니다.

**기본 과정 (Session 1-7) - Cursor 핵심 기능**:
- 각 세션은 설명 + 실습 2개 반복 형식
- 쉬운 것부터 어려운 순서로 학습
- 4-5시간 소요

**확장 과정 (Session 8-11) - 최신 기능 (2026)**:
- 시간 여유 시 또는 자율 학습
- 체인지로그 기반 최신 기능 소개
- 2-3시간 소요

**참고**:
- 시간 부족 시 Session 8-11은 자율 학습
- 중요한 내용은 간략하게라도 개요 설명
- 총 11개 세션, 22개 실습 프로젝트

---

## 📖 학습 여정

안녕하세요. 이번 튜토리얼에서는 Copilot을 사용하시던 분들이 Cursor로 전환할 때 알아야 할 핵심 내용을 다룹니다.

```
Copilot과 Cursor, 무엇이 같고 무엇이 다를까요?

[기본 과정: Cursor 핵심 기능]

1장: Copilot 비교 → Rules, Debug 소개
  ↓
2장: Debug Mode → 실행 기반 디버깅
  ↓
3장: Visual Editor → 클릭으로 UI 수정
  ↓
4장: CLI Agent → 터미널 개발 (Plan/Ask, Handoff)
  ↓
5장: Hooks → AI Agent 제어 (핵심!)
  ↓
6장: Skills & Subagents → Agent 능력 확장 (Clarification Questions)
  ↓
7장: Multi-Agent → 여러 업무 동시 처리 (Worktree 포함)

[확장 과정: 최신 기능 2026]

8장: Image Generation → AI로 이미지 생성
  ↓
9장: Cloud Agent & Handoff → 장시간 작업 위임
  ↓
10장: MCP Integration → 외부 도구 연결
  ↓
11장: Enterprise Features → 팀 협업 기능
```

각 장마다 실습 프로젝트 2개가 준비되어 있으니, 직접 따라하시면서 체득하시기 바랍니다.

---

## 📚 기본 과정 (1-7장)

> **Cursor 핵심 기능을 학습합니다**

### [1장: Copilot과 Cursor의 비슷한 기능들](./sessions/session-01/README.md)

**난이도**: 🟢 입문

**강의 내용**:

Copilot을 사용하시던 분들이 Cursor로 넘어오면 가장 먼저 궁금한 것이 "뭐가 다르지?"입니다. 하지만 먼저 공통점부터 확인하겠습니다.

**모드 비교**부터 시작합니다. Copilot은 Ask, Edit, Agent, Plan 모드가 있고, Cursor는 Ask, Agent, Plan, Debug 모드가 있습니다. 대부분 동일하지만 Edit와 Debug에서 차이가 있습니다.

각 모드의 특징을 살펴보고, 특히 **Plan 모드**의 중요성을 강조합니다. Agent 모드만 사용하고 있다면 Plan 모드를 한번 사용해보는 것을 권장합니다. 사전에 계획을 세우고 검토한 후 실행하는 방식은 복잡한 작업에서 매우 유용합니다.

**Debug 모드**는 Cursor만의 차별화된 기능입니다. 코드를 보고 추측하는 것이 아니라 실제로 실행하고 로그를 자동 삽입하여 버그 원인을 정확히 파악합니다.

**Cursor Rules의 최신 기능**을 상세히 다룹니다:
- `.cursorrules` (레거시) → `.cursor/rules/` 폴더 구조 (최신)
- Rule 타입 4가지: Always Apply, Apply Intelligently, Apply to Specific Files, Apply Manually
- Frontmatter 메타데이터 (description, globs, alwaysApply)
- AGENTS.md 간단한 대안
- Team Rules (팀 플랜 기능)
- Remote Rules (GitHub에서 가져오기)

Copilot의 Instructions와 Cursor의 Rules는 기능이 유사하지만, Cursor는 더 강력한 구조화 기능을 제공합니다. 두 환경 모두 glob 패턴으로 파일별 규칙 적용이 가능합니다.

이번 장에서는 **간단한 실습**으로 Rules와 Debug 모드를 체험합니다. 프로젝트 파일을 만들지 않고 질의응답으로 바로 확인하는 방식이라 빠르고 쉽습니다.

**실습 프로젝트** (2개):

1. `01-rules-simple` - Rules 간단 실습 (테스트 파일 + 3개 샘플 Rules 제공)
2. `02-debug-simple` - Debug 모드 간단 체험 (Agent 모드 vs Debug 모드, 순서가 보장된 3개 파일)

**학습 효과**: 모드 비교 및 이해, Plan 모드 활용, Debug 모드 직접 체험, 지침/규칙 동작 방식 파악, Rules의 한계 인식

---

### [2장: Debug Mode - 실행 기반 디버깅](./sessions/session-02/README.md)

**난이도**: 🟢 입문

**강의 내용**:

이제부터는 Cursor만의 차별화된 기능들을 소개합니다. 첫 번째는 **Debug Mode**입니다.

일반적으로 버그를 수정할 때 AI는 코드를 보고 **추측**해서 수정합니다. "아마 여기가 문제일 것 같은데..."라고 말이죠. 하지만 Debug Mode는 다릅니다.

코드를 **실제로 실행**하고 로그를 자동으로 삽입해서 정확한 원인을 파악합니다. 추측이 아닌 확인이죠. 이는 Copilot의 Edit 모드와는 완전히 다른 접근 방식입니다.

**Debug Mode의 핵심 기능**:
- 자동 로그 삽입 (console.log 자동 추가)
- 실시간 실행 (브라우저/Node.js)
- 상태 추적 (변수 값, 함수 반환값)
- 정확한 오류 위치 파악

**사용 시나리오별 비교**:
- 로그인 실패 → 일반: "인증 로직 확인" / Debug: `result`가 `undefined` 확인
- API 404 오류 → 일반: "경로 확인" / Debug: `/api/user` 호출 확인 → `/api/users`로 수정
- 조건문 버그 → 일반: "조건 확인" / Debug: `password.length > 8`이 항상 false 확인

이번 장에서는 Debug Mode로 로그인 버그와 API 오류를 해결하는 방법을 실습합니다.

**실습 프로젝트** (2개):

1. `01-debug-login-bug` - Debug Mode로 로그인 버그 해결
2. `02-debug-api-error` - API 오류 정확히 찾기

**학습 효과**: 버그 해결 50% 빠름, 정확도 향상

---

### [3장: Visual Editor - 클릭 기반 UI 수정](./sessions/session-03/README.md)

**난이도**: 🟢 입문

**강의 내용**:

UI를 수정할 때 "왼쪽 위 파란 버튼"처럼 말로 설명하는 것은 번거롭습니다. AI가 잘못 이해할 수도 있죠.

**Visual Editor**를 사용하면 브라우저에서 직접 클릭해서 요소를 선택할 수 있습니다. AI가 정확히 그 요소를 수정합니다. 말로 설명할 필요가 없습니다.

**브라우저 통합 작동 원리**:
- 브라우저 확장 프로그램으로 Cursor가 브라우저 제어
- 클릭한 요소의 CSS 선택자 자동 추출
- 선택된 요소 정보를 Agent에게 전달
- Agent가 정확히 해당 요소만 수정

**지원 브라우저**: Chrome, Edge, Brave 등 Chromium 기반 브라우저

**베스트 프랙티스**:
- 여러 비슷한 요소 중 하나를 선택할 때 유용
- 복잡한 레이아웃에서 특정 요소 찾기 쉬움
- CSS 선택자를 정확히 모를 때 활용

이번 장에서는 Visual Editor로 버튼 스타일과 복잡한 레이아웃을 빠르게 수정하는 방법을 실습합니다.

**실습 프로젝트** (2개):

1. `01-visual-button-style` - 클릭으로 버튼 스타일 수정
2. `02-visual-card-layout` - 복잡한 레이아웃 수정

**학습 효과**: UI 수정 70% 빠름, 정확도 향상

---

### [4장: CLI Agent - 터미널에서 개발](./sessions/session-04/README.md)

**난이도**: 🟢 입문

**강의 내용**:

지금까지 배운 기능들은 모두 IDE 안에서 동작했습니다. 하지만 실무에서는 IDE를 사용할 수 없는 상황이 자주 있습니다. SSH로 서버에 접속했을 때, CI/CD 파이프라인 안에서, 또는 간단한 작업을 빠르게 처리하고 싶을 때 말이죠.

**Cursor CLI**를 소개합니다. 터미널에서 직접 Agent를 실행할 수 있습니다.

Copilot에도 CLI가 있지만 명령어 제안만 가능하고, 실제 코드 작업은 IDE로 돌아가야 합니다. 하지만 Cursor CLI는 터미널에서 파일 생성, 수정, 테스트 실행까지 모두 가능합니다.

**CLI Agent의 주요 기능**:
- **3가지 모드**: Agent (기본), Plan (`/plan`), Ask (`/ask`)
- **Shell Mode** (`!` 명령): 대화 중 명령어 빠르게 실행
- **Headless 모드**: UI 없이 백그라운드 실행, CI/CD 통합
- **슬래시 명령어**: `/clear`, `/help`, `/exit` 등
- **GitHub Actions 통합**: 자동화 워크플로우

**CLI 설치 방법**:
- Mac/Linux: Cursor IDE에서 "Shell Command: Install 'cursor' command in PATH"
- Windows: PowerShell에서 설치 스크립트 실행

이번 장에서는 Cursor CLI로 IDE 없이 개발하는 방법을 익힙니다.

**실습 프로젝트** (2개):

1. `01-cli-basic` - CLI Agent 기본 사용법 및 Shell Mode
2. `02-terminal-dev` - 터미널에서 전체 개발 프로세스

**학습 효과**: IDE 없이 Agentic 개발, Shell Mode 활용, SSH/CI/CD 활용

---

### [5장: Hooks - AI Agent 제어의 핵심](./sessions/session-05/README.md)

**난이도**: 🟢 초급

**강의 내용**:

Cursor의 가장 핵심적인 차별화 기능인 **Hooks**를 소개합니다.

Rules는 프롬프트입니다. "이렇게 해주세요"라고 요청하는 것이죠. 하지만 AI가 가끔 무시합니다. "rm -rf 쓰지 마세요"라고 해도 쓸 때가 있습니다.

Hooks는 **코드**입니다. Agent가 실행하는 모든 작업을 **사전에 차단**하거나 **사후에 점검**할 수 있습니다. 실제로 Claude CLI가 홈 디렉터리를 삭제해버린 사고가 있었는데, Hooks를 사용하면 100% 차단할 수 있습니다.

**Hooks API 명세**:
- **preToolExecution**: Agent가 도구 실행 전 호출, 차단 가능
- **postToolExecution**: Agent가 도구 실행 후 호출, 결과 검증
- **Context 객체**: tool, args, metadata, result 정보 제공

**서드파티 Hooks**:
- 커뮤니티 제공 Hooks를 npm으로 설치 가능
- Security Hooks, Linter Hooks, Git Hooks, Notification Hooks 등
- 커스텀 Hook을 npm에 배포하여 공유 가능

**보안 설정**:
- Agent 권한 제한 (shell, write, delete, network)
- 민감한 파일 보호 (.env, secrets.json 등)
- 보호된 경로 차단 (~/, /etc/, /usr/)

이번 장에서는 `preToolExecution`과 `postToolExecution`으로 Agent를 완벽히 제어하는 방법을 배웁니다.

**실습 프로젝트** (2개):

1. `01-hooks-basic` - Hooks 기본 사용법
2. `02-hooks-security` - 위험 명령 차단 실습

**학습 효과**: AI 작업 제어 강화, 위험 작업 100% 차단

---

### [6장: Agent Skills & Subagents](./sessions/session-06/README.md)

**난이도**: 🟢 초급

**강의 내용**:

**Agent Skills**와 **Subagents** 기능을 배웁니다.

Agent Skills는 재사용 가능한 스킬로, Agent의 능력을 확장할 수 있습니다. 예를 들어 "API 검증 스킬", "테스트 생성 스킬" 같은 것을 만들어두면 다른 프로젝트에서도 재사용할 수 있습니다.

**기본 제공 Skills**:
- create-rule: Cursor Rules 생성
- create-skill: 새로운 Skill 작성
- update-cursor-settings: Cursor 설정 수정

**커스텀 Skill 작성**:
- SKILL.md 파일 형식 (설명, 사용 시점, 단계, 예시)
- 전역 Skills (~/.cursor/skills/) 또는 프로젝트 Skills (.cursor/skills/)

**Commands 기능** (새로 추가):
- Skills와 유사하지만 빠른 실행에 최적화
- JSON 설정으로 단순 명령 정의
- 예: run-tests, lint-fix, build-prod

Subagents는 메인 Agent가 여러 하위 Agent를 자동으로 생성하여 작업을 분산하는 기능입니다. 복잡한 기능 개발 시 자동으로 오케스트레이션됩니다.

**Clarification Questions**: Agent가 불명확한 부분을 질문하는 기능 (2026.01.22 추가)

이번 장에서는 기본 제공 Skills 사용, 커스텀 Skill 작성, Subagent로 병렬 작업하는 방법을 배웁니다.

**실습 프로젝트** (2개):

1. `01-skills-basic` - Skills 기본 사용 및 커스텀 Skill 작성
2. `02-subagents-parallel` - Subagent로 병렬 작업

**학습 효과**: Agent 능력 확장, 자동 오케스트레이션

---

### [7장: Multi-Agent - 여러 업무 동시 처리](./sessions/session-07/README.md)

**난이도**: 🟡 중급

**강의 내용**:

**난이도**: 🟡 중급

**강의 내용**:

실무에서는 하나의 작업만 하는 경우가 드뭅니다. 신규 기능을 개발하다가 갑자기 핫픽스 요청이 오고, 다른 페이지 작업 요청이 동시에 들어옵니다.

이럴 때 **Git Worktree**로 독립 환경을 만들고, **Multi-Agent**로 여러 작업을 동시에 처리할 수 있습니다.

**Git Worktree**는 하나의 저장소에서 여러 작업 디렉터리를 만드는 Git 기능입니다. 각 디렉터리는 독립적인 브랜치를 가지므로 서로 간섭하지 않습니다.

**Multi-Agent**는 각 Worktree 환경에서 독립적인 Agent를 실행하는 패턴입니다. IDE에서는 메인 작업을 계속하고, 터미널에서는 핫픽스나 다른 작업을 동시에 처리합니다.

이번 장에서는 Worktree 사용법과 Multi-Agent 패턴을 함께 배웁니다.

**실습 프로젝트** (2개):

1. `01-worktree-basic` - Worktree 기본 사용법
2. `02-worktree-management` - Multi-Agent 실전 워크플로우

**학습 효과**: 여러 업무 동시 처리, 컨텍스트 유지, 생산성 향상

---

## 🌟 확장 과정 (8-11장)

> **최신 기능 (2026)을 학습합니다**

### [8장: Image Generation - AI로 이미지 생성](./sessions/session-08/README.md)

**난이도**: 🟢 초급

**강의 내용**:

텍스트 설명만으로 이미지를 생성할 수 있습니다. UI 목업, 아이콘, 로고, 다이어그램 등을 빠르게 만들 수 있습니다.

**Image Generation 기능**:
- Google Nano Banana Pro 모델 사용
- 빠른 생성 속도, 높은 품질
- 텍스트 및 참조 이미지 지원
- assets/ 폴더에 자동 저장

**Mermaid 다이어그램** (중요 추가):
- 텍스트 기반 다이어그램 도구
- 마크다운에 직접 삽입 가능, 버전 관리 가능
- 지원 타입: Flowchart, Sequence Diagram, Class Diagram, State Diagram, ER Diagram, Gantt Chart, Pie Chart, Git Graph
- Agent가 Mermaid 코드 자동 생성

**실습 프로젝트** (2개):

1. `01-image-basic` - 간단한 이미지 생성 (아이콘, 로고)
2. `02-image-mockup` - UI 목업 및 다이어그램 생성

**학습 효과**: 빠른 프로토타이핑, 문서화 시각화

---

### [9장: Cloud Agent & Handoff - 장시간 작업 위임](./sessions/session-09/README.md)

**난이도**: 🟢 초급

**강의 내용**:

로컬 작업을 클라우드로 넘겨서 계속 실행할 수 있습니다. 퇴근 시간에 큰 작업을 시작하고, 집에서 모바일로 확인할 수 있습니다.

**Cloud Agent 핵심 기능**:
- 클라우드 서버에서 Agent 실행
- 터미널 종료해도 계속 실행
- `&` 기호로 Handoff (예: `& 전체 프로젝트 린트 수정`)

**API & Webhooks**:
- REST API로 프로그래밍 방식 제어
- Agent 생성, 상태 조회, 중지, 로그 조회
- Webhook으로 완료 알림 (agent.started, agent.completed, agent.failed)
- Slack 통합 예시 제공

**Egress IP 범위**:
- Cloud Agent가 외부 API 호출 시 사용하는 IP
- 방화벽 화이트리스트 설정 가능

**웹/모바일 접근**:
- cursor.com/agents에서 진행 상황 확인
- 모바일에서도 작업 모니터링 가능

**실습 프로젝트** (2개):

1. `01-cloud-basic` - Cloud Agent 기본 사용
2. `02-handoff-workflow` - 장시간 작업 위임 패턴

**학습 효과**: 장시간 작업 관리, 웹/모바일 확인

---

### [10장: MCP Integration - 외부 도구 연결](./sessions/session-10/README.md)

**난이도**: 🟢 초급

**강의 내용**:

MCP (Model Context Protocol)로 외부 도구(GitHub, Browser 등)와 데이터를 연결합니다.

**MCP 프로토콜**:
- Agent가 외부 도구와 데이터에 접근하는 표준 프로토콜
- 기본 제공: GitHub MCP, Browser MCP
- 커뮤니티 MCP: Slack, Linear, Notion, Airtable, Supabase, Stripe 등

**MCP 서버 구축**:
- TypeScript/JavaScript로 커스텀 MCP 서버 작성
- 도구 등록 (registerTool), 리소스 등록 (registerResource)
- npm에 배포하여 공유 가능

**원클릭 설치**:
- `cursor://install-mcp?url=...` 링크로 간편 설치
- MCP 디렉토리에서 검색 및 설치

**CLI MCP 통합**:
- CLI Agent에서도 MCP 사용 가능
- `cursor --mcp=github,browser` 또는 설정 파일에서 활성화

**실습 프로젝트** (2개):

1. `01-mcp-basic` - MCP 기본 사용 (GitHub 연동)
2. `02-mcp-browser` - Browser MCP로 웹 테스트

**학습 효과**: 외부 도구 연동, 자동화 확장

---

### [11장: Enterprise Features - 팀 협업 기능](./sessions/session-11/README.md)

**난이도**: 🟢 초급

**강의 내용**:

Cursor Blame, Shared Transcripts, Layout Customization 등 팀 협업에 유용한 기능들을 알아봅니다.

**Cursor Blame**:
- git blame 확장: AI 기여도 추적
- 누가, 언제, AI가 생성했는지, 어떤 대화에서 생성되었는지 확인
- 코드 리뷰 및 온보딩 시 유용

**Shared Transcripts**:
- Agent 대화 내용을 팀과 공유
- 읽기 전용 링크 생성 (cursor.com/transcript/...)
- 팀 학습 및 베스트 프랙티스 공유

**팀 대시보드 & 분석**:
- 팀 전체 사용 현황 확인
- 총 사용자 수, 활성 사용자, 월간 요청 수
- 일별/주별/월별 그래프, 팀원별/프로젝트별 사용량

**AI 코드 트래킹 API**:
- 프로그래밍 방식으로 AI 코드 기여도 추적
- REST API로 통계 조회
- Webhook으로 AI 코드 생성 이벤트 수신

**SSO & SCIM** (Enterprise):
- Single Sign-On: Google Workspace, Azure AD, Okta, OneLogin
- SCIM: 자동 사용자 프로비저닝 및 동기화

**실습 프로젝트** (2개):

1. `01-blame-transcripts` - Blame & Transcripts 체험
2. `02-layout-insights` - Layout & Insights 활용

**학습 효과**: AI 기여도 추적, 팀 협업 강화

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

**기본 과정 (Cursor 핵심 기능)**:

```
1장: Copilot 비교 → Rules, Debug 소개
2장: Debug Mode → 실행 기반 디버깅
3장: Visual Editor → 클릭 기반 UI 수정
4장: CLI Agent → 터미널 개발 (Plan/Ask, Handoff)
5장: Hooks → AI Agent 제어 (핵심!)
6장: Skills & Subagents → Agent 능력 확장 (Clarification Questions)
7장: Multi-Agent → 여러 업무 동시 처리 (Worktree 포함)
```

**확장 과정 (최신 기능 2026)**:

```
8장: Image Generation → AI로 이미지 생성
9장: Cloud Agent & Handoff → 장시간 작업 위임
10장: MCP Integration → 외부 도구 연결
11장: Enterprise Features → 팀 협업 기능
```

---

## 📊 학습 성과

**기본 과정 완료 후 (1-7장)**:

- Copilot 경험을 Cursor에서 그대로 활용 (Rules)
- Debug Mode로 버그 원인 정확히 파악 (50% 빠름)
- Visual Editor로 UI 직접 선택해서 수정 (70% 빠름)
- CLI Agent로 터미널에서 개발 (Plan/Ask 모드, SSH/CI/CD 활용)
- Hooks로 Agent 동작 제어 및 위험 작업 100% 차단 (핵심!)
- Agent Skills로 재사용 가능한 스킬 작성
- Subagents로 자동 오케스트레이션 활용
- Clarification Questions로 Agent와 대화
- Git Worktree로 독립 환경 구성
- Multi-Agent로 여러 업무 동시 처리

**확장 과정 완료 후 (8-11장)**:

- Image Generation으로 빠른 프로토타이핑
- Cloud Agent로 장시간 작업 위임
- MCP로 외부 도구 연결 (GitHub, Browser)
- Enterprise 기능으로 팀 협업 강화

---

## 🎓 Cursor 기능 맵

| 기능                        | 설명                  | 학습 장     |
| --------------------------- | --------------------- | ----------- |
| **Rules**                   | Copilot과 동일        | 1장 (기본)  |
| **Debug Mode**              | 실행 기반 디버깅      | 2장 (기본)  |
| **Visual Editor**           | 클릭 기반 UI 수정     | 3장 (기본)  |
| **CLI Agent**               | 터미널 Agent          | 4장 (기본)  |
| **CLI Plan/Ask Mode**       | 터미널 Plan/Ask       | 4장 (기본)  |
| **Hooks**                   | Agent 제어 (핵심!)    | 5장 (기본)  |
| **Agent Skills**            | 재사용 가능한 스킬    | 6장 (기본)  |
| **Subagents**               | 자동 오케스트레이션   | 6장 (기본)  |
| **Clarification Questions** | Agent가 질문하기      | 6장 (기본)  |
| **Git Worktree**            | 독립 환경             | 7장 (기본)  |
| **Multi-Agent**             | 여러 업무 동시 처리   | 7장 (기본)  |
| **Image Generation**        | 이미지 생성           | 8장 (확장)  |
| **Cloud Agent**             | 클라우드 Agent        | 9장 (확장)  |
| **Cloud Handoff**           | 작업 위임             | 9장 (확장)  |
| **MCP**                     | 외부 도구 연결        | 10장 (확장) |
| **Cursor Blame**            | AI 기여도 추적        | 11장 (확장) |
| **Shared Transcripts**      | 대화 공유             | 11장 (확장) |
| **Layout Customization**    | 레이아웃 커스터마이징 | 11장 (확장) |

---

## 📁 프로젝트 구조

```
cursor-tutorial/
├── README.md              # 이 파일
└── sessions/              # 장별 실습
    ├── session-01/        # 1장: Copilot 비교 (2개 프로젝트)
    ├── session-02/        # 2장: Debug Mode (2개 프로젝트)
    ├── session-03/        # 3장: Visual Editor (2개 프로젝트)
    ├── session-04/        # 4장: CLI Agent (2개 프로젝트)
    ├── session-05/        # 5장: Hooks (2개 프로젝트)
    ├── session-06/        # 6장: Skills & Subagents (2개 프로젝트)
    ├── session-07/        # 7장: Multi-Agent (2개 프로젝트)
    ├── session-08/        # 8장: Image Generation (2개 프로젝트)
    ├── session-09/        # 9장: Cloud Agent & Handoff (2개 프로젝트)
    ├── session-10/        # 10장: MCP Integration (2개 프로젝트)
    └── session-11/        # 11장: Enterprise Features (2개 프로젝트)
```

**총 22개 실습 프로젝트 (11개 세션 × 2개)**

---

## 🔗 공식 문서

- [Cursor 문서](https://cursor.com/docs)
- [Agent](https://cursor.com/docs/agent/overview)
- [CLI](https://cursor.com/docs/cli/overview)
- [Hooks](https://cursor.com/docs/agent/hooks)
- [Skills](https://cursor.com/docs/context/skills)
- [Subagents](https://cursor.com/docs/context/subagents)

---

**즐거운 학습 되세요!** 🎉

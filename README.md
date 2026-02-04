# Cursor 튜토리얼

> **Copilot 사용자를 위한 Cursor 전환 가이드**

**강사**: 이민철(인터랙티브개발팀)  
**방식**: 강의 + 실습 병행  
**환경**: Cursor IDE  
**난이도**: 입문 ~ 초급 (1-9장: 기본, 10-11장: 추가)

---

## 📋 목차

- [교육 대상](#-교육-대상)
- [Cursor IDE란?](#-cursor-ide란)
- [강의 개요](#-강의-개요)
- [4시간 강의 가이드](#-4시간-강의-가이드)
- [기본 과정 (1-9장)](#-기본-과정-1-9장)
- [추가 과정 (10-11장)](#-추가-과정-10-11장)
- [시작하기](#-시작하기)

---

## 🎯 교육 대상

- GitHub Copilot을 사용 중인 개발자
- Cursor로 전환을 고려하는 마크업/프론트엔드 개발자
- Cursor의 핵심 기능들을 체계적으로 배우고 싶은 분

※ 10-11장은 추가 과정으로, 시간 여유 시 또는 자율 학습하시면 됩니다.

---

## 💻 Cursor IDE란?

Cursor는 **VS Code 기반**으로 만들어진 AI 네이티브 코드 에디터입니다. VS Code의 모든 기능과 확장을 그대로 사용하면서, AI 개발에 최적화된 기능들이 추가되어 있습니다.

### GitHub Copilot과의 주요 차이점

| 항목 | Copilot | Cursor |
|------|---------|--------|
| **환경** | VS Code 확장 프로그램 | VS Code 기반 독립 에디터 |
| **모드** | Ask, Edit, Agent, Plan | Ask, Agent, Plan, **Debug** |
| **실행 기반 디버깅** | ❌ | **Debug 모드** ✅ |
| **코드 리뷰** | 별도 도구 필요 | **Agent Review 탭** (내장) |
| **채팅 히스토리** | 제한적 | **Past Chat 참조** |
| **Worktree 관리** | 수동 | **IDE 통합** |

### 핵심 차별화 기능

- **Debug Mode**: 코드를 실제로 실행하여 버그 원인 파악 (추측 → 확인)
- **Agent Review**: Git 패널에 통합된 AI 코드 리뷰
- **Past Chat**: `@past-chat`으로 이전 대화 참조 가능
- **Worktree**: IDE 하단 상태바에서 쉽게 전환
- **Visual Editor**: 브라우저에서 UI 요소 직접 선택하여 수정

💡 **자세한 내용은 [1장: 모드](./sessions/session-01-modes/README.md)와 [2장: 차별화 기능](./sessions/session-02-differentiators/README.md)에서 확인하세요.**

---

## 📝 강의 개요

**기본 과정 (1-9장) - Cursor 핵심 기능**:

- 1장: 모드 - Ask, Agent, Plan, Debug
- 2장: 차별화 기능 - Clarification Questions, Agent Review, Past Chat, Worktree
- 3장: Rules - AI에게 지침 주기
- 4장: CLI Agent - 터미널에서 개발
- 5장: Hooks - 코드로 Agent 제어 (핵심!)
- 6장: Visual Editor - 클릭 기반 UI 수정
- 7장: Skills - 재사용 가능한 능력
- 8장: Subagents - 자동 오케스트레이션
- 9장: Multi-Agent - 여러 업무 동시 처리

**추가 과정 (10-11장)**:

- 10장: Image Generation - AI로 이미지 생성
- 11장: Enterprise Features - 팀 협업 기능

---

## 🔑 과정에 언급되는 Cursor 키워드

**공통 기능 (Copilot과 동일)**:

- Rules / Instructions
- Agent / Plan Mode

**Cursor 핵심 기능 (기본 과정)**:

- **Debug Mode** - 실행 기반 디버깅
- **Visual Editor** - 브라우저 UI 편집
- **CLI Agent** - 터미널 Agent (Plan/Ask Mode)
- **Hooks** - Agent 제어 (preToolExecution, postToolExecution)
- **Agent Skills** - 재사용 가능한 스킬
- **Subagents** - 자동 오케스트레이션
- **Clarification Questions** - Agent가 질문하기
- **Multi-Agent** - 여러 업무 동시 처리
- **Git Worktree** - 독립 환경 구성

**추가 기능 (추가 과정)**:

- **Image Generation** - AI로 이미지 생성
- **Cursor Blame** - AI 기여도 추적
- **Shared Transcripts** - 대화 공유

---

## 📚 기본 과정 (1-9장)

> **Cursor 핵심 기능을 학습합니다**

### [1장: 모드](./sessions/session-01-modes/README.md)

🟢 입문 | 실습 3개

Ask, Agent, Plan, Debug 모드 이해. Debug 모드로 실행 기반 디버깅 체험.

---

### [2장: 차별화 기능](./sessions/session-02-differentiators/README.md)

🟢 입문 | 실습 3개

Clarification Questions (Plan 모드 UI), Agent Review, Past Chat, Git Worktree.

---

### [3장: Rules](./sessions/session-03-rules/README.md)

🟢 입문 | 실습 1개

AI에게 지침 주기. `.cursor/rules/`, `AGENTS.md`, Team Rules, Remote Rules.

---

### [4장: CLI Agent](./sessions/session-04-cli/README.md)

🟢 입문 | 실습 0개

터미널에서 Agent 사용. Plan/Ask 모드, Shell Mode.

---

### [5장: Hooks](./sessions/session-05-hooks/README.md)

🟢 초급 | 실습 2개

Rules의 한계 해결. 코드로 Agent 동작 100% 제어. **(핵심!)**

---

### [6장: Visual Editor](./sessions/session-06-visual/README.md)

🟢 입문 | 실습 2개

브라우저에서 클릭으로 UI 요소 선택하여 수정.

---

### [7장: Skills](./sessions/session-07-skills/README.md)

🟢 초급 | 실습 1개

재사용 가능한 스킬. 외부 디렉토리(cursor.directory)에서 설치.

---

### [8장: Subagents](./sessions/session-08-subagents/README.md)

🟢 초급 | 실습 1개

자동 오케스트레이션. Clarification Questions로 Agent와 대화.

---

### [9장: Multi-Agent](./sessions/session-09-multiagent/README.md)

🟡 중급 | 실습 2개

여러 Agent를 동시에 활용하여 병렬 작업. IDE 내 채팅 전환 또는 Worktree + CLI Agent.

---

## 🌟 추가 과정 (10-11장)

> **추가 기능을 학습합니다**

### [10장: Image Generation](./sessions/session-10-image/README.md)

🟢 초급 | 실습 2개

AI로 이미지 생성. UI 목업, 아이콘, 다이어그램.

---

### [11장: Enterprise Features](./sessions/session-11-enterprise/README.md)

🟢 초급 | 실습 2개

팀 협업. Cursor Blame, Shared Transcripts.

---

## 🚀 시작하기

### 사전 준비

```bash
# Cursor 설치
# https://cursor.com

# CLI 설치 (Cursor IDE에서)
# Cmd+Shift+P → "Shell Command: Install"
```

**강의 전 체크리스트**:

- [ ] Cursor IDE 설치 (cursor.com)
- [ ] Cursor CLI 설정 (Cmd+Shift+P → "Shell Command: Install")
- [ ] Node.js 18+ 설치
- [ ] Git 설정 완료
- [ ] 브라우저 확장 프로그램 설치 (Visual Editor용 - Chrome/Edge)

## 🎓 Cursor 기능 맵

| 기능                        | 설명                  | 학습 장     |
| --------------------------- | --------------------- | ----------- |
| **모드**                    | Ask, Agent, Plan, Debug | 1장 (기본)  |
| **Debug Mode**              | 실행 기반 디버깅      | 1장 (기본)  |
| **Clarification Questions** | Plan 모드 UI 질문     | 2장 (기본)  |
| **Agent Review**            | AI 코드 리뷰          | 2장 (기본)  |
| **Past Chat**               | 이전 대화 참조        | 2장 (기본)  |
| **Git Worktree**            | 독립 환경             | 2장 (기본)  |
| **Rules**                   | AI에게 지침 주기      | 3장 (기본)  |
| **CLI Agent**               | 터미널 Agent          | 4장 (기본)  |
| **Hooks**                   | Agent 제어 (핵심!)    | 5장 (기본)  |
| **Visual Editor**           | 클릭 기반 UI 수정     | 6장 (기본)  |
| **Agent Skills**            | 재사용 가능한 스킬    | 7장 (기본)  |
| **Subagents**               | 자동 오케스트레이션   | 8장 (기본)  |
| **Multi-Agent**             | 여러 Agent 동시 활용  | 9장 (기본)  |
| **Image Generation**        | 이미지 생성           | 10장 (추가) |
| **Cursor Blame**            | AI 기여도 추적        | 11장 (추가) |
| **Shared Transcripts**      | 대화 공유             | 11장 (추가) |

---

## 📁 프로젝트 구조

```
cursor-tutorial/
├── README.md                    # 이 파일
└── sessions/                    # 장별 실습
    ├── session-01-modes/        # 1장: 모드 (3개 프로젝트)
    ├── session-02-differentiators/ # 2장: 차별화 기능 (3개 프로젝트)
    ├── session-03-rules/        # 3장: Rules (1개 프로젝트)
    ├── session-04-cli/          # 4장: CLI Agent (0개 프로젝트)
    ├── session-05-hooks/        # 5장: Hooks (2개 프로젝트)
    ├── session-06-visual/       # 6장: Visual Editor (2개 프로젝트)
    ├── session-07-skills/       # 7장: Skills (1개 프로젝트)
    ├── session-08-subagents/    # 8장: Subagents (1개 프로젝트)
    ├── session-09-multiagent/   # 9장: Multi-Agent (2개 프로젝트)
    ├── session-10-image/        # 10장: Image Generation (2개 프로젝트)
    └── session-11-enterprise/   # 11장: Enterprise Features (2개 프로젝트)
```

**총 19개 실습 프로젝트 (11개 세션)**

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

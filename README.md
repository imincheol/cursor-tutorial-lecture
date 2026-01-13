# 🚀 Cursor 마스터 클래스

> **Copilot 사용자를 위한 Cursor 전환 가이드**
> 
> ⚠️ **Privacy Mode (Enterprise)** 환경 기준

## 📑 목차

- [강의 개요](#-강의-개요)
- [핵심: IDE 모드 vs CLI 모드](#-핵심-ide-모드-vs-cli-모드)
- [Copilot과의 차이점](#-copilot과의-차이점)
- [커리큘럼](#-커리큘럼)
- [학습 목표](#-학습-목표)
- [이 강의를 들으면 무엇을 배울 수 있는가?](#-이-강의를-들으면-무엇을-배울-수-있는가)
- [제공되는 실습 자료](#-제공되는-실습-자료)
- [디렉토리 구조](#-디렉토리-구조)
- [사전 준비](#-사전-준비)
- [참고 자료](#-참고-자료)

---

## 📋 강의 개요

| 항목 | 내용 |
|------|------|
| **대상** | GitHub Copilot 사용 경험이 있는 FE/마크업 개발자 |
| **시간** | 6시간 (50분 × 6교시, 교시별 10분 휴식) |
| **형식** | 이론 최소화 + 실습 중심 |
| **환경** | Cursor Enterprise (Privacy Mode) |

---

## 🔑 핵심: IDE 모드 vs CLI 모드

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Cursor Agent 사용 방식                        │
├────────────────────────────────┬────────────────────────────────────┤
│         IDE 모드               │           CLI 모드                 │
│    (Cursor 앱 내에서)          │      (터미널에서 cursor agent)     │
├────────────────────────────────┼────────────────────────────────────┤
│ • GUI 기반                     │ • 터미널 기반                      │
│ • Visual Editor 가능           │ • Shell Mode 가능                  │
│ • Debug Mode 가능              │ • Worktree Multi-Agent 가능        │
├────────────────────────────────┼────────────────────────────────────┤
│ ⚠️ 같은 브랜치에서 작업        │ ✅ 독립 환경 가능                  │
│ ⚠️ Multi-Agent 충돌 주의       │ ✅ 병렬 작업 가능                  │
└────────────────────────────────┴────────────────────────────────────┘
```

---

## 📊 Copilot vs Cursor

### 비슷한 것

| Copilot | Cursor |
|---------|--------|
| Instructions | Rules (globs 패턴 가능) |
| Prompts | Commands |
| MCP | MCP |
| Plan Mode | Plan Mode |

### 🔥 Cursor에만 있는 것

| 기능 | IDE | CLI | 설명 |
|------|-----|-----|------|
| **Visual Editor** | ✅ | ❌ | 브라우저 UI 직접 편집 |
| **Debug Mode** | ✅ | ❌ | 자동 로그 삽입 버그 추적 |
| **Hooks** | ✅ | ✅ | Agent 동작 감시/제어 |
| **Shell Mode** | ❌ | ✅ | 자연어로 명령어 생성 |
| **대화형 CLI** | ❌ | ✅ | 지금 이 대화처럼 단계별 작업 🔥 |
| **Worktree Multi-Agent** | ❌ | ✅ |

---

## 📚 커리큘럼

### IDE 모드 (1-2교시)

| 교시 | 시간 | 내용 | 실습 | 난이도 |
|------|------|------|------|--------|
| [**1교시**](./curriculum/01-session.md) | 50분 | Copilot 차이점, Rules, **Hooks** | [기본 5개 + 보너스 9개](../exercises/01-ide-rules-hooks/) | 🟢 초급 |
| [**2교시**](./curriculum/02-session.md) | 50분 | **Debug Mode**, **Visual Editor**, IDE Multi-Agent | [기본 4개 + 보너스 9개](../exercises/02-ide-debug-visual/) | 🟡 중급 |

### CLI 모드 (3-6교시)

| 교시 | 시간 | 내용 | 실습 | 난이도 |
|------|------|------|------|--------|
| [**3교시**](./curriculum/03-session.md) | 50분 | CLI 설치, 기본 사용, **Shell Mode** | [기본 4개 + 보너스 10개](../exercises/03-cli-shell/) | 🟢 초급 |
| [**4교시**](./curriculum/04-session.md) | 50분 | **IDE + CLI 통합**, Worktree Multi-Agent, 실전 워크플로우 | [기본 11개 + 보너스 10개](../exercises/04-cli-multi-agent/) | 🔴 고급 |
| [**5교시**](./curriculum/05-session.md) | 50분 | **반복 작업 자동화**, Worktree 기반 검토 워크플로우 | [기본 3개 + 보너스 9개](./exercises/05-workflow-automation/) | 🔴 고급 |
| [**6교시**](./curriculum/06-session.md) | 50분 | **마크업 품질 자동화**, HTML/CSS 검증 워크플로우 | [기본 3개 + 보너스 9개](./exercises/06-cicd-integration/) | 🔴 고급 |

---

## 🗂 디렉토리 구조

```
cursor-tutorial/
├── README.md
├── curriculum/
│   ├── 00-overview.md      # IDE vs CLI 개요
│   ├── 01-session.md       # IDE: Rules, Hooks
│   ├── 02-session.md       # IDE: Debug, Visual
│   ├── 03-session.md       # CLI: Shell Mode
│   ├── 04-session.md       # CLI: Multi-Agent
│   ├── 05-session.md       # 반복 작업 자동화
│   └── 06-session.md       # 마크업 품질 자동화
├── exercises/
│   ├── 01-ide-rules-hooks/
│   ├── 02-ide-debug-visual/
│   ├── 03-cli-shell/
│   ├── 04-cli-multi-agent/
│   ├── 05-workflow-automation/
│   └── 06-cicd-integration/
├── examples/
│   ├── basic-html-css-js/  # Visual Editor 실습용
│   ├── react-project/      # 전체 실습용
│   └── automation-scripts/ # 자동화 스크립트들
├── cheatsheet/
│   └── shortcuts.md
└── resources/
    ├── changelog-summary.md
    └── links.md
```

---

## 🛠 사전 준비

```bash
# Cursor CLI 설치
# Cursor IDE에서: Cmd+Shift+P → "Shell Command: Install"

cursor --version
```

---

## 🔗 공식 문서

| 주제 | 링크 |
|------|------|
| Cursor 문서 | https://docs.cursor.com |
| Agent | https://docs.cursor.com/agent/overview |
| CLI | https://docs.cursor.com/cli/overview |
| Hooks | https://docs.cursor.com/agent/hooks |
| Browser | https://docs.cursor.com/agent/browser |
| Worktrees | https://docs.cursor.com/configuration/worktrees |

---

## ⏭ 시작하기

**[개요: IDE vs CLI →](./curriculum/00-overview.md)**

**[1교시: IDE 모드 시작 →](./curriculum/01-session.md)**

---

---

## 🎯 이 강의를 들으면 무엇을 배울 수 있는가?

### 📚 학습 목표

#### **Cursor의 핵심 기능 마스터 (1-4교시)**
- **Rules**: globs 패턴으로 조건부 적용하는 프로젝트 규칙 설정
- **Hooks**: Agent 동작을 감시/제어하는 자동화 시스템 구축
- **Debug Mode**: 자동 로그 삽입으로 버그 추적 및 해결
- **Visual Editor**: 브라우저에서 직접 UI 요소 선택 및 수정
- **Shell Mode**: 자연어로 터미널 명령어 자동 생성
- **대화형 CLI Agent**: 지금 이 대화처럼 단계별로 문제 해결 🔥
- **Worktree Multi-Agent**: 독립 환경에서 여러 접근법 동시 비교

#### **업무 자동화 워크플로우 구축 (5-6교시)**
- **반복 작업 자동화**: 접근성/성능/호환성 검사를 병렬 처리
- **검토 워크플로우**: Worktree로 여러 검증을 동시에 실행
- **마크업 품질 관리**: HTML/CSS 품질을 자동으로 검증
- **디자인 시스템 검증**: 테마/컴포넌트/스타일 가이드 자동 체크

#### **실전 개발 워크플로우 구축**
- IDE 모드와 CLI 모드를 상황에 맞게 선택하는 전략
- Copilot에서 Cursor로의 완전한 전환 방법
- Privacy Mode(Enterprise) 환경 최적화 기법
- 팀 전체에 Cursor 표준 적용하는 방법

### 🚀 기대 효과

#### **개인 생산성 향상**
- **버그 해결 속도 70% 향상**: Debug Mode로 즉시 원인 파악
- **UI 개발 속도 2배 향상**: Visual Editor로 디자이너 도움 없이도 프로덕션급 UI 구현
- **터미널 작업 80% 자동화**: Shell Mode로 자연어 기반 명령어 생성
- **의사결정 속도 3배 향상**: Multi-Agent로 여러 접근법 동시 비교
- **검토 시간 60% 단축**: Worktree 병렬 처리로 반복 검증 자동화

#### **팀 협업 효율화**
- **코드 리뷰 시간 50% 단축**: Rules로 일관된 코드 스타일 유지
- **표준화된 개발 환경**: Hooks로 팀 전체에 Cursor 규칙 적용
- **기술 결정 데이터화**: Multi-Agent로 객관적 비교 근거 확보

### 💡 실무 적용 사례

#### **프론트엔드 개발자**
- React/Vue 컴포넌트 구조를 Visual Editor로 즉시 이해하고 수정
- 복잡한 상태 관리 로직을 Debug Mode로 빠르게 디버깅
- 반복적인 빌드/테스트 작업을 Shell Mode로 자동화
- 접근성/성능/호환성 검사를 Worktree로 병렬 처리

#### **마크업 개발자**
- HTML 시맨틱 구조를 자동으로 검증하고 개선
- CSS 품질(구조/성능/네이밍)을 동시에 검사
- 다중 테마(라이트/다크/고대비)를 병렬로 검증
- 디자인 시스템 준수 여부를 자동으로 체크

#### **팀 리드/시니어 개발자**
- 프로젝트별 Rules로 기술 표준화 및 품질 관리
- Worktree Multi-Agent로 아키텍처 결정에 데이터 기반 근거 제공
- 자동화 스크립트로 팀 전체 검토 프로세스 표준화
- 반복 업무 자동화로 팀 생산성 60% 향상

### 🎓 수강생 프로필

**이 강의는 다음과 같은 분들에게 최적화되어 있습니다:**

✅ **Copilot 경험자**: GitHub Copilot을 사용해본 경험이 있는 개발자
✅ **Enterprise 환경**: Privacy Mode나 보안이 중요한 환경에서 일하는 개발자
✅ **실전 중심 학습자**: 이론보다 실습과 즉시 적용 가능한 기술을 선호하는 분
✅ **팀 리드 지망생**: 개발팀의 표준화와 생산성 향상을 고민하는 분

### 📈 학습 경로

```
1-2교시 (IDE 기초)
    ↓
Rules & Hooks → Debug Mode → Visual Editor
    ↓
3-4교시 (CLI 심화)
    ↓
Shell Mode → Multi-Agent → IDE+CLI 통합
    ↓
5-6교시 (업무 자동화)
    ↓
반복 작업 자동화 → 마크업 품질 관리
    ↓
실전 적용 & 팀 확산
```

이 강의를 통해 단순한 AI 도구 사용법을 넘어, **현대적인 개발 워크플로우를 완전히 재정의하는 방법을 배우게 됩니다.**

---

## 📦 제공되는 실습 자료

### 예제 프로젝트
- **basic-html-css-js**: Visual Editor 실습용 반응형 웹사이트
- **react-project**: 전체 실습용 React 앱 (의도된 버그 포함)

### 자동화 스크립트 (5-6교시용)
- **check-parallel.sh**: 4가지 검사 동시 실행 (35분 → 15분)
- **check-responsive.sh**: 반응형 검증 (25분 → 10분)
- **check-html-css.sh**: HTML/CSS 품질 (45분 → 18분)
- **check-themes.sh**: 테마 검증 (30분 → 12분)

### 총 시간 절약 효과
**순차 실행**: 135분 → **병렬 실행**: 55분 = **59% 단축** ⚡

---

**Made for Copilot users in Enterprise environments 🚀**

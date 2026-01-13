# 🚀 Cursor 마스터 클래스

> **Copilot 사용자를 위한 Cursor 전환 가이드**
> 
> ⚠️ **Privacy Mode (Enterprise)** 환경 기준

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

| 기능 | IDE | CLI |
|------|-----|-----|
| **Visual Editor** | ✅ | ❌ |
| **Debug Mode** | ✅ | ❌ |
| **Hooks** | ✅ | ✅ |
| **Shell Mode** | ❌ | ✅ |
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
| [**5교시**](./curriculum/05-session.md) | 50분 | **업무 프로세스 자동화**, 코드 리뷰, 검토 워크플로우 | [기본 8개 + 보너스 12개](../exercises/05-workflow-automation/) | 🔴 고급 |
| [**6교시**](./curriculum/06-session.md) | 50분 | **CI/CD 통합**, 배포 자동화, 모니터링 | [기본 6개 + 보너스 8개](../exercises/06-cicd-integration/) | 🔴 고급 |

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
│   └── 04-session.md       # CLI: Multi-Agent
├── exercises/
│   ├── 01-ide-rules-hooks/
│   ├── 02-ide-debug-visual/
│   ├── 03-cli-shell/
│   └── 04-cli-multi-agent/
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

#### **Cursor의 핵심 기능 마스터**
- **Rules**: globs 패턴으로 조건부 적용하는 프로젝트 규칙 설정
- **Hooks**: Agent 동작을 감시/제어하는 자동화 시스템 구축
- **Debug Mode**: 자동 로그 삽입으로 버그 추적 및 해결
- **Visual Editor**: 브라우저에서 직접 UI 요소 선택 및 수정
- **Shell Mode**: 자연어로 터미널 명령어 자동 생성
- **Worktree Multi-Agent**: 독립 환경에서 여러 접근법 동시 비교

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

#### **팀 협업 효율화**
- **코드 리뷰 시간 50% 단축**: Rules로 일관된 코드 스타일 유지
- **표준화된 개발 환경**: Hooks로 팀 전체에 Cursor 규칙 적용
- **기술 결정 데이터화**: Multi-Agent로 객관적 비교 근거 확보

### 💡 실무 적용 사례

#### **프론트엔드 개발자**
- React/Vue 컴포넌트 구조를 Visual Editor로 즉시 이해하고 수정
- 복잡한 상태 관리 로직을 Debug Mode로 빠르게 디버깅
- 반복적인 빌드/배포 작업을 Shell Mode로 자동화

#### **풀스택 개발자**
- API 호출 및 데이터 플로우를 Multi-Agent로 최적화 전략 비교
- 데이터베이스 마이그레이션 작업을 안전하게 Hooks로 보호
- CI/CD 파이프라인에 Cursor 자동화를 통합

#### **팀 리드/아키텍트**
- 프로젝트별 Rules로 기술 표준화 및 품질 관리
- Worktree Multi-Agent로 아키텍처 결정에 데이터 기반 근거 제공
- 팀 전체 생산성 모니터링 및 개선 포인트 식별

### 🎓 수강생 프로필

**이 강의는 다음과 같은 분들에게 최적화되어 있습니다:**

✅ **Copilot 경험자**: GitHub Copilot을 사용해본 경험이 있는 개발자
✅ **Enterprise 환경**: Privacy Mode나 보안이 중요한 환경에서 일하는 개발자
✅ **실전 중심 학습자**: 이론보다 실습과 즉시 적용 가능한 기술을 선호하는 분
✅ **팀 리드 지망생**: 개발팀의 표준화와 생산성 향상을 고민하는 분

### 📈 학습 경로

```
기초 → 심화 → 실전 적용 → 팀 확산
  ↓      ↓        ↓        ↓
Rules ← Hooks ← Debug ← Multi-Agent
        ↓        ↓        ↓
     Visual ← Shell ← IDE+CLI 통합
```

이 강의를 통해 단순한 AI 도구 사용법을 넘어, **현대적인 개발 워크플로우를 완전히 재정의하는 방법을 배우게 됩니다.**

---

**Made for Copilot users in Enterprise environments 🚀**

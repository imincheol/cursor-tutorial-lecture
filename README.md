# 🚀 Cursor 마스터 클래스

> **Copilot 사용자를 위한 Cursor 전환 가이드**
> 
> ⚠️ **Privacy Mode (Enterprise)** 환경 기준

## 📋 강의 개요

| 항목 | 내용 |
|------|------|
| **대상** | GitHub Copilot 사용 경험이 있는 FE/마크업 개발자 |
| **시간** | 4시간 (50분 × 4교시, 교시별 10분 휴식) |
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

### CLI 모드 (3-4교시)

| 교시 | 시간 | 내용 | 실습 | 난이도 |
|------|------|------|------|--------|
| [**3교시**](./curriculum/03-session.md) | 50분 | CLI 설치, 기본 사용, **Shell Mode** | [기본 4개 + 보너스 10개](../exercises/03-cli-shell/) | 🟢 초급 |
| [**4교시**](./curriculum/04-session.md) | 50분 | **IDE + CLI 통합**, Worktree Multi-Agent, 실전 워크플로우 | [기본 11개 + 보너스 10개](../exercises/04-cli-multi-agent/) | 🔴 고급 |

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

## 🎯 수강 완료 후 스스로 확인하기

강의가 끝난 후, 다음과 같은 질문들로 자신의 이해도를 점검해보세요:

### 📋 자기 평가 체크리스트

#### Rules & Hooks 마스터리
- [ ] 프로젝트에 맞는 커스텀 Rules를 3개 이상 만들 수 있는가?
- [ ] 복잡한 비즈니스 로직을 Hook으로 자동화할 수 있는가?
- [ ] 팀 전체에 Cursor 표준을 적용할 수 있는가?

#### Debug & Visual 마스터리
- [ ] 복잡한 버그도 10분 안에 원인을 찾을 수 있는가?
- [ ] 디자이너 피드백 없이도 프로덕션급 UI를 만들 수 있는가?
- [ ] React/Vue 컴포넌트 구조를 완벽하게 이해하는가?

#### CLI & Shell 마스터리
- [ ] 터미널 작업의 80%를 자연어로 자동화할 수 있는가?
- [ ] 시스템 모니터링과 로그 분석을 자동화할 수 있는가?
- [ ] CI/CD 파이프라인에 Cursor를 통합할 수 있는가?

#### Multi-Agent 마스터리
- [ ] 동시에 3개 이상의 접근법을 비교할 수 있는가?
- [ ] 중요한 기술 결정을 데이터 기반으로 내릴 수 있는가?
- [ ] 팀의 의사결정 속도를 3배 이상 향상시킬 수 있는가?

### 🚀 다음 단계: 고급 활용법

수강 완료 후 더 발전하기 위한 추천 경로:

#### 1. **팀 표준화** (1-2주)
- `.cursor/` 폴더를 팀 리포지토리에 커밋
- Rules와 Hooks를 팀 컨벤션으로 확립
- 코드 리뷰 시 Cursor 활용 가이드 공유

#### 2. **자동화 구축** (2-4주)
- 자주 사용하는 명령어를 Shell Mode 스크립트화
- Multi-Agent 워크플로우를 팀 프로세스로 정립
- CI/CD에 Cursor 자동화 통합

#### 3. **고급 기능 탐구** (1개월+)
- MCP 서버 개발 및 커스텀 통합
- 복잡한 Multi-Agent 시나리오 구축
- Cursor 생태계 기여 (오픈소스 참여)

### 💡 프로 팁

**실무 적용 시 주의사항:**
- Privacy Mode 환경에서는 외부 API 제한 확인
- 대용량 프로젝트에서는 Worktree 전략 수립
- 팀원들과 Rules 충돌 시 우선순위 협의

**생산성 측정:**
- 코드 리뷰 시간 50% 단축
- 버그 해결 시간 70% 단축
- 새로운 기능 개발 속도 2배 향상

---

**Made for Copilot users in Enterprise environments 🚀**

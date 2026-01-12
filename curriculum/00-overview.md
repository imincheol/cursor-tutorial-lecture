# 📖 Cursor 마스터 클래스 - Copilot 사용자를 위한 전환 가이드

> 이미 Copilot을 사용 중인 FE/마크업 개발자를 위한 **실전 과정**
> 
> ⚠️ **Privacy Mode (Enterprise)** 환경 기준

---

## 🎯 강의 방향

### ❌ 다루지 않는 것
- Tab 자동완성, Chat 기본 (Copilot과 동일)
- CI/CD 연동 (FE 개발 범위 외)
- GitHub App, Bugbot (회사 보안 정책)
- Slack/Linear 연동 (비용/정책)
- Background Agent (Privacy Mode)

### ✅ 집중하는 것
- Copilot과의 **차이점**
- **IDE 모드**와 **CLI 모드** 구분
- 로컬에서 사용 가능한 기능들

---

## 🔑 핵심 개념: IDE 모드 vs CLI 모드

Cursor는 두 가지 방식으로 Agent를 사용할 수 있습니다:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Cursor Agent 사용 방식                        │
├────────────────────────────────┬────────────────────────────────────┤
│         IDE 모드               │           CLI 모드                 │
│    (Cursor 앱 내에서)          │      (터미널에서 cursor agent)     │
├────────────────────────────────┼────────────────────────────────────┤
│ • GUI 기반                     │ • 터미널 기반                      │
│ • Visual Editor 사용 가능      │ • Shell Mode 사용 가능             │
│ • 브라우저 미리보기            │ • 스크립트 자동화 가능             │
│ • 마우스로 요소 선택           │ • Headless 실행 가능               │
├────────────────────────────────┼────────────────────────────────────┤
│ ⚠️ 현재 브랜치에 종속          │ ✅ Worktree로 독립 환경 가능       │
│ ⚠️ 동시 작업 시 충돌 가능      │ ✅ 여러 터미널에서 병렬 가능       │
└────────────────────────────────┴────────────────────────────────────┘
```

### IDE 모드 특징

```
장점:
✅ 시각적 피드백 (Visual Editor, 브라우저)
✅ 마우스로 요소 선택 → Agent에게 전달
✅ 실시간 코드 diff 확인
✅ GUI로 직관적인 사용

주의점:
⚠️ 현재 열린 폴더의 브랜치에서 작업
⚠️ 여러 Agent 탭을 열어도 같은 파일 수정 시 충돌
⚠️ 동시에 여러 접근법 비교하려면 주의 필요
```

### CLI 모드 특징

```
장점:
✅ 터미널만 있으면 사용 가능
✅ Git Worktree로 독립된 작업 환경 구성 가능
✅ 여러 터미널에서 동시에 다른 작업 가능
✅ 스크립트/자동화에 활용 가능
✅ Shell Mode로 명령어 생성

주의점:
⚠️ Visual Editor 사용 불가
⚠️ 브라우저 미리보기 없음
```

### Multi-Agent 비교

| 항목 | IDE 모드 | CLI 모드 |
|------|----------|----------|
| 여러 Agent 실행 | New Agent 탭 | 여러 터미널 |
| 작업 환경 | **같은 브랜치** | Worktree로 **분리 가능** |
| 동시 수정 | ⚠️ 충돌 가능 | ✅ 독립적 |
| 결과 비교 | 탭 전환 | 폴더 비교 |

**권장 사용법:**
```
단일 작업, UI 확인 필요 → IDE 모드
여러 접근법 동시 비교 → CLI + Worktree
자동화, 스크립트 → CLI 모드
```

---

## 📊 Copilot vs Cursor 정리

### 비슷한 것 (차이만 빠르게)

| Copilot | Cursor | 차이점 |
|---------|--------|--------|
| Instructions | Rules | globs 패턴, .mdc 파일 |
| Prompts | Commands | 거의 동일 |
| MCP | MCP | 거의 동일 |
| Plan Mode | Plan Mode | 거의 동일 |

### 🔥 Cursor에만 있는 것

| 기능 | IDE | CLI | 설명 |
|------|-----|-----|------|
| **Visual Editor** | ✅ | ❌ | 브라우저에서 UI 선택/수정 |
| **Debug Mode** | ✅ | ❌ | 자동 로그 삽입, 버그 추적 |
| **Hooks** | ✅ | ✅ | Agent 동작 제어/감사 |
| **Shell Mode** | ❌ | ✅ | 자연어로 터미널 명령 생성 |
| **Worktree 병렬** | ❌ | ✅ | 독립 환경에서 Multi-Agent |

---

## 📅 교시별 구성

### 1-2교시: IDE 모드 (100분)

| 교시 | 시간 | 내용 |
|------|------|------|
| **1교시** | 50분 | Copilot 차이점, Rules, Hooks |
| **2교시** | 50분 | Debug Mode, Visual Editor, IDE Multi-Agent |

### 3-4교시: CLI 모드 (100분)

| 교시 | 시간 | 내용 |
|------|------|------|
| **3교시** | 50분 | CLI 설치, 기본 사용, Shell Mode |
| **4교시** | 50분 | CLI Multi-Agent (Worktree), 실전 워크플로우 |

---

## 🛠 실습 환경

### 필수
- Cursor (Enterprise/Privacy Mode)
- Node.js 18+
- 실제 FE 프로젝트 (React/Vue 등)
- Git (Worktree 사용 시)

---

## 🔗 공식 문서

| 주제 | 링크 |
|------|------|
| Cursor 문서 홈 | https://docs.cursor.com |
| Agent | https://docs.cursor.com/agent/overview |
| CLI | https://docs.cursor.com/cli/overview |
| Rules | https://docs.cursor.com/context/rules |
| Browser | https://docs.cursor.com/agent/browser |
| Worktrees | https://docs.cursor.com/configuration/worktrees |

---

## ⏭ 다음

**[1교시 - IDE 모드: Copilot 차이점 & 기본 설정 →](./01-session.md)**

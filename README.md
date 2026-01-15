# Cursor 마스터 클래스

> **Copilot 사용자를 위한 Cursor 전환 완벽 가이드**

## 📋 목차

- [강의 소개](#-강의-소개)
- [전체 스토리](#-전체-스토리)
- [정규 강의 (1-4교시)](#-정규-강의-1-4교시)
- [추가 강의 (5-6교시)](#-추가-강의-5-6교시)
- [시작하기](#-시작하기)

---

## 🎯 강의 소개

### 대상
- GitHub Copilot 경험자
- 프론트엔드/마크업 개발자
- Cursor로 전환을 고려하는 개발자

### 시간
- **정규 강의**: 4시간 (50분 × 4교시)
- **추가 강의**: 2시간 (50분 × 2교시)

### 특징
- 이론 최소화, 실습 중심
- 하나의 스토리로 연결된 학습
- 즉시 사용 가능한 코드 제공

---

## 📖 전체 스토리

### 여정의 시작

```
당신은 Copilot을 잘 사용하고 있었다.
그런데 어느 날, 문득 이런 생각이 들었다.

"AI가 왜 내 말을 안 듣지?"
"리뷰하는 시간이 왜 이렇게 길지?"
"더 좋은 방법이 없을까?"

그때, Cursor라는 이름을 듣게 된다.
```

### 정규 강의: 발견의 여정

```
1교시: "어? Copilot이랑 똑같은데... 잠깐, 이건 뭐지?" (Hooks 발견)
  ↓
2교시: "Hooks 말고도 더 있어?" (Debug Mode, Visual Editor)
  ↓
3교시: "IDE 없이도 돼?" (CLI Agent)
  ↓
4교시: "여러 개를 동시에?" (Multi-Agent)
```

### 추가 강의: 실전 적용

```
5교시: "반복 작업을 줄이고 싶어" (병렬 자동화)
  ↓
6교시: "품질 검증도 빠르게" (마크업 품질)
  ↓
보너스: "미래에는 어떻게 될까?" (Nightly 기능)
```

---

## 📚 정규 강의 (1-4교시)

> **Cursor의 핵심을 발견하는 여정**

### [1교시: 첫 번째 발견 - Hooks](./sessions/session-01/README.md)
**시간**: 50분 | **난이도**: 🟢 초급

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

**효과**: 리뷰 시간 70% 단축, 위험 작업 100% 차단

---

### [2교시: 두 번째 발견 - 다채로운 기능](./sessions/session-02/README.md)
**시간**: 50분 | **난이도**: 🟡 중급

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

---

### [3교시: 세 번째 발견 - IDE를 넘어서](./sessions/session-03/README.md)
**시간**: 50분 | **난이도**: 🟢 초급

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

---

### [4교시: 네 번째 발견 - Multi-Agent](./sessions/session-04/README.md)
**시간**: 50분 | **난이도**: 🔴 고급

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

**심화**: [Role 기반 오케스트레이션](./sessions/session-04/ADVANCED_ORCHESTRATION.md)

---

## 📘 추가 강의 (5-6교시)

> **실무에서 바로 적용하는 자동화**

### [5교시: 반복 작업 자동화](./sessions/session-05/README.md)
**시간**: 50분 | **난이도**: 🔴 고급

**스토리**:
```
Multi-Agent를 배웠다.
"이걸 어디에 써먹지?"

매번 하는 검사 작업이 떠올랐다.
접근성, 호환성, 성능, 디자인...
순서대로 하면 35분.

"이걸 동시에 돌리면?"
Worktree로 분리하고, 각각 Agent를 실행했다.
15분으로 줄었다.

반복 작업에서 해방됐다.
```

**프로젝트** (3개):
1. `01-parallel-checks` - "57% 시간 절약!"
2. `02-responsive-validation` - "반응형도 60% 빨라!"
3. `03-performance-optimization` - "최적화도 병렬로!"

**효과**: 검사 시간 57% 단축

---

### [6교시: 마크업 품질 자동화](./sessions/session-06/README.md)
**시간**: 50분 | **난이도**: 🔴 고급

**스토리**:
```
반복 자동화를 배웠다.
"마크업 품질 검증에도 적용할 수 있겠다!"

HTML 시맨틱, 접근성, SEO, CSS 품질...
각각 검증하면 45분.

병렬로 돌렸더니 18분.
60% 시간 절약.

드디어 Cursor Master가 됐다.
```

**프로젝트** (3개):
1. `01-html-css-quality` - "품질 검증도 빨라!"
2. `02-theme-validation` - "테마 검증도 60%!"
3. `03-component-library` - "체계적인 관리!"

**효과**: 품질 검증 60% 단축

---

### [보너스: Nightly 빌드 - 미래를 엿보다](./sessions/BONUS_NIGHTLY_FEATURES.md)
**시간**: 20분 | **난이도**: 🔵 정보

**스토리**:
```
Cursor Master가 됐다.
"앞으로는 어떻게 될까?"

Nightly 빌드를 살펴봤다.
Agent Skills, Sub-Agent...

"수동으로 하던 오케스트레이션이
자동으로 될 날이 오겠구나."

미래가 기대된다.
```

**내용**:
- Agent Skills: Agent 능력 확장
- Sub-Agent: 자동 오케스트레이션
- 미래 전망

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

**Day 1: 정규 강의 (4시간)**
```
09:00 - 09:50  1교시: Hooks
10:00 - 10:50  2교시: Debug & Visual
11:00 - 11:50  3교시: CLI Agent
13:00 - 13:50  4교시: Multi-Agent
```

**Day 2: 추가 강의 (2시간)**
```
09:00 - 09:50  5교시: 반복 자동화
10:00 - 10:50  6교시: 품질 자동화
11:00 - 11:20  보너스: Nightly 기능
```

---

## 📊 학습 성과

### 정규 강의 완료 후

```
✅ Hooks로 Agent 완벽 제어
✅ Debug Mode로 버그 즉시 해결
✅ Visual Editor로 UI 직접 수정
✅ CLI Agent로 어디서든 개발
✅ Multi-Agent로 병렬 작업
```

### 추가 강의 완료 후

```
✅ 반복 작업 57% 시간 절약
✅ 품질 검증 60% 시간 절약
✅ 실무에 바로 적용 가능
```

---

## 🎓 Cursor 전용 기능

| 기능 | 설명 | 교시 |
|------|------|------|
| **Hooks** | Agent 동작 감시/제어 (핵심!) | 1교시 |
| **Debug Mode** | 자동 로그 삽입 | 2교시 |
| **Visual Editor** | 브라우저 UI 편집 | 2교시 |
| **CLI Agent Mode** | IDE 없이 터미널에서 개발 | 3교시 |
| **Worktree Multi-Agent** | 독립 환경 병렬 작업 | 4교시 |

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
    ├── session-04/        # 4교시 (3개 프로젝트)
    ├── session-05/        # 5교시 (3개 프로젝트) [추가]
    ├── session-06/        # 6교시 (3개 프로젝트) [추가]
    └── BONUS_NIGHTLY...   # 보너스 [추가]
```

**정규 강의**: 13개 프로젝트
**추가 강의**: 6개 프로젝트

---

## 🔗 공식 문서

- [Cursor 문서](https://cursor.com/docs)
- [Agent](https://cursor.com/docs/agent/overview)
- [CLI](https://cursor.com/docs/cli/overview)
- [Hooks](https://cursor.com/docs/agent/hooks)

---

**즐거운 학습 되세요!** 🎉

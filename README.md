# Cursor 마스터 클래스

> **Copilot 사용자를 위한 Cursor 전환 완벽 가이드**

## 📋 목차

- [강의 소개](#-강의-소개)
- [학습 방법](#-학습-방법)
- [교시 구성](#-교시-구성)
- [시작하기](#-시작하기)

---

## 🎯 강의 소개

### 대상
- GitHub Copilot 경험자
- 프론트엔드/마크업 개발자
- Cursor로 전환을 고려하는 개발자

### 시간
- **총 6시간** (50분 × 6교시)

### 특징
- 이론 최소화, 실습 중심
- 각 교시마다 독립적인 실습 프로젝트
- 즉시 사용 가능한 코드 제공

---

## 📚 학습 방법

### 구조

```
sessions/
├── session-01/          # 1교시
│   ├── README.md       # 교재 (개념 설명)
│   └── projects/       # 실습 프로젝트들
│       ├── project-1/  # 프로젝트 1
│       │   ├── README.md  # 실습 가이드
│       │   └── [파일들]   # 실습 파일
│       └── project-2/  # 프로젝트 2
└── session-02/          # 2교시
    └── ...
```

### 학습 순서

1. **교재 읽기**: `sessions/session-XX/README.md`
2. **프로젝트 선택**: `projects/project-name/`
3. **실습 가이드**: `projects/project-name/README.md`
4. **실습 진행**: Cursor Agent로 직접 실습

---

## 📖 교시 구성

### [1교시: Rules & Hooks - AI를 제어하는 법](./sessions/session-01/README.md)
**시간**: 50분 | **난이도**: 🟢 초급

**스토리**: Copilot에서 느낀 답답함, AI가 말을 안 듣는 문제를 Rules와 Hooks로 해결

**학습 내용**:
- 문제: AI가 말을 안 듣는다 (프롬프트의 한계)
- 해결책 1: Rules (조건부 제어)
- 해결책 2: Hooks (강제 차단)

**프로젝트** (4개):
1. `01-rules-basic` - 기본 Rules 작성
2. `02-rules-globs` - Globs 패턴 활용
3. `03-hooks-basic` - 기본 Hook 작성
4. `04-hooks-security` - 보안 Hook 구현

**효과**: 리뷰 시간 70% 단축, 위험 작업 100% 차단

---

### [2교시: Debug Mode & Visual Editor](./sessions/session-02/README.md)
**시간**: 50분 | **난이도**: 🟡 중급

**학습 내용**:
- Debug Mode: 자동 로그 삽입으로 버그 추적
- Visual Editor: 브라우저에서 UI 직접 편집

**프로젝트** (4개):
1. `01-debug-login-bug` - 로그인 버그 해결
2. `02-debug-api-error` - API 에러 디버깅
3. `03-visual-button-style` - 버튼 스타일 수정
4. `04-visual-card-layout` - 카드 레이아웃 조정

---

### [3교시: CLI & Shell Mode](./sessions/session-03/README.md)
**시간**: 50분 | **난이도**: 🟢 초급

**학습 내용**:
- CLI 설치 및 기본 사용
- 대화형 Agent: 대화하듯이 코드 작업
- Shell Mode: 자연어로 명령어 생성

**프로젝트** (3개):
1. `01-cli-basic` - CLI 기본 사용
2. `02-shell-file-ops` - 파일 작업 자동화
3. `03-shell-git-ops` - Git 작업 자동화

---

### [4교시: Multi-Agent & Worktree](./sessions/session-04/README.md)
**시간**: 50분 | **난이도**: 🔴 고급

**학습 내용**:
- Worktree: 독립 환경 구성
- Multi-Agent: 여러 접근법 동시 비교
- IDE + CLI 통합 워크플로우

**프로젝트** (3개):
1. `01-worktree-basic` - Worktree 기본
2. `02-multi-approach` - 여러 접근법 비교
3. `03-ide-cli-integration` - IDE + CLI 통합

**심화**: [Role 기반 오케스트레이션](./sessions/session-04/ADVANCED_ORCHESTRATION.md)
- 1 Agent = 1 Role 원칙
- Planning, Design, Markup, Frontend, QA Role
- 병렬 처리로 70% 시간 절약

---

### [5교시: 반복 작업 자동화](./sessions/session-05/README.md)
**시간**: 50분 | **난이도**: 🔴 고급

**학습 내용**:
- 병렬 검토: 여러 검사 동시 실행
- 시간 절약: 57% (35분 → 15분)

**프로젝트** (3개):
1. `01-parallel-checks` - 병렬 검사
2. `02-responsive-validation` - 반응형 검증
3. `03-performance-optimization` - 성능 최적화

---

### [6교시: 마크업 품질 자동화](./sessions/session-06/README.md)
**시간**: 50분 | **난이도**: 🔴 고급

**학습 내용**:
- HTML/CSS 품질 검증
- 다중 테마 검증
- 시간 절약: 60% (45분 → 18분)

**프로젝트** (3개):
1. `01-html-css-quality` - HTML/CSS 품질 검증
2. `02-theme-validation` - 테마 검증
3. `03-component-library` - 컴포넌트 관리

---

## 🚀 시작하기

### 1. 사전 준비

```bash
# Cursor 설치
# https://cursor.com

# CLI 설치 (Cursor IDE에서)
# Cmd+Shift+P → "Shell Command: Install"

# 버전 확인
cursor --version
```

### 2. 학습 시작

```bash
# 1교시 시작
cd sessions/session-01
cat README.md

# 첫 번째 프로젝트
cd projects/rules-basic
cat README.md
cursor .
```

---

## 📊 학습 성과

### 강의 완료 후

- ✅ **Rules & Hooks**: Agent 제어 능력
- ✅ **Debug & Visual**: 버그 해결 70% 빠름
- ✅ **CLI & Shell**: 터미널 작업 80% 자동화
- ✅ **Multi-Agent**: 의사결정 3배 빠름
- ✅ **반복 자동화**: 검토 시간 57% 단축
- ✅ **품질 자동화**: 검증 시간 60% 단축

### 전체 시간 절약

| 작업 | 기존 | 개선 | 절감 |
|------|------|------|------|
| 반복 검토 | 35분 | 15분 | 57% |
| 품질 검증 | 45분 | 18분 | 60% |
| **총합** | **80분** | **33분** | **59%** |

---

## 🎓 Cursor 전용 기능

| 기능 | 설명 | 교시 |
|------|------|------|
| **Rules** | globs 패턴 조건부 규칙 | 1교시 |
| **Hooks** | Agent 동작 감시/제어 | 1교시 |
| **Debug Mode** | 자동 로그 삽입 | 2교시 |
| **Visual Editor** | 브라우저 UI 편집 | 2교시 |
| **대화형 CLI** | 대화하듯이 코드 작업 | 3교시 |
| **Shell Mode** | 자연어 → 명령어 | 3교시 |
| **Worktree Multi-Agent** | 독립 환경 병렬 작업 | 4교시 |

---

## 🔗 공식 문서

- [Cursor 문서](https://cursor.com/docs)
- [Agent](https://cursor.com/docs/agent/overview)
- [CLI](https://cursor.com/docs/cli/overview)
- [Hooks](https://cursor.com/docs/agent/hooks)
- [Worktrees](https://cursor.com/docs/configuration/worktrees)

---

## 📁 프로젝트 구조

```
cursor-tutorial/
├── README.md              # 이 파일
└── sessions/              # 교시별 실습
    ├── session-01/        # 1교시 (4개 프로젝트)
    ├── session-02/        # 2교시 (4개 프로젝트)
    ├── session-03/        # 3교시 (3개 프로젝트)
    ├── session-04/        # 4교시 (3개 프로젝트)
    ├── session-05/        # 5교시 (3개 프로젝트)
    └── session-06/        # 6교시 (3개 프로젝트)
```

**총 20개 실습 프로젝트**

---

**즐거운 학습 되세요!** 🎉

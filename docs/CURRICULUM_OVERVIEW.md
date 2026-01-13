# 📚 강의 구성 전체 개요

## 📋 목차

- [강의 개요](#강의-개요)
- [교시별 상세 구성](#교시별-상세-구성)
- [학습 흐름](#학습-흐름)
- [핵심 개념 정리](#핵심-개념-정리)
- [실습 구성](#실습-구성)

---

## 강의 개요

### 기본 정보

| 항목 | 내용 |
|------|------|
| **대상** | GitHub Copilot 경험자 (FE/마크업 개발자) |
| **시간** | 6시간 (50분 × 6교시) |
| **형식** | 이론 최소화 + 실습 중심 |
| **환경** | Cursor Enterprise (Privacy Mode) |
| **실습** | 86개 (기본 33개 + 보너스 53개) |

### 강의 구조

```
Part 1: IDE 모드 (1-2교시, 100분)
  → Copilot과 다른 점 중심
  → Rules, Hooks, Debug Mode, Visual Editor

Part 2: CLI 모드 (3-4교시, 100분)
  → 터미널 기반 Agent 사용
  → Shell Mode, Multi-Agent, 오케스트레이션

Part 3: 업무 자동화 (5-6교시, 100분)
  → Worktree 기반 병렬 처리
  → 반복 작업 자동화, 품질 검증
```

---

## 교시별 상세 구성

### 0교시: 개요 (사전 학습)

**문서**: [curriculum/00-overview.md](../curriculum/00-overview.md)

**내용**:
- 강의 방향 (다루는 것 / 다루지 않는 것)
- IDE vs CLI 모드 핵심 개념
- Copilot vs Cursor 비교
- Cursor 전용 기능 7가지 설명
- 교시별 구성 소개

**학습 시간**: 20분 (자율)

---

### 1교시: Rules & Hooks (50분)

**문서**: [curriculum/01-session.md](../curriculum/01-session.md)  
**실습**: [exercises/01-ide-rules-hooks/](../exercises/01-ide-rules-hooks/)

#### 학습 목표
- [ ] Copilot과 비슷한 기능의 차이점 파악
- [ ] Rules: globs 패턴으로 조건부 규칙 적용
- [ ] Hooks: Agent 동작 감시/제어

#### 주요 내용

**1. Copilot과 비슷한 것들 (20분)**
- Rules vs Instructions (globs 패턴 차이)
- Commands vs Prompts (거의 동일)
- MCP (동일)
- Plan Mode (동일)

**2. Cursor 전용: Hooks (30분)**
- Hook 개념 및 동작 원리
- `preToolExecution`: 실행 전 제어
- `postToolExecution`: 실행 후 처리
- 실전 예제:
  - 위험 명령 차단 (`rm -rf` 등)
  - 특정 폴더 보호 (`.env`, `config/`)
  - 감사 로그 기록

#### 실습 (14개)
- 기본: 8개
- 보너스: 6개 (초급 2 + 중급 2 + 고급 2)

---

### 2교시: Debug Mode & Visual Editor (50분)

**문서**: [curriculum/02-session.md](../curriculum/02-session.md)  
**실습**: [exercises/02-ide-debug-visual/](../exercises/02-ide-debug-visual/)

#### 학습 목표
- [ ] Debug Mode로 버그 추적
- [ ] Visual Editor로 UI 편집
- [ ] IDE Multi-Agent 주의점

#### 주요 내용

**1. Debug Mode (15분)**
- 자동 로그 삽입으로 버그 추적
- Copilot과의 차이 (추측 vs 실행)
- 실습: 로그인 버그, API 실패, 무한 로딩

**2. Visual Editor (20분)**
- 브라우저에서 UI 요소 직접 선택
- 실시간 CSS 편집
- Agent에게 수정 요청
- 실습: 버튼 스타일, 카드 레이아웃, 폼 디자인

**3. IDE Multi-Agent 주의점 (15분)**
- 같은 파일 수정 시 충돌
- 안전한 사용법
- CLI Multi-Agent와 비교

#### 실습 (13개)
- 기본: 4개
- 보너스: 9개 (초급 3 + 중급 3 + 고급 3)

---

### 3교시: CLI & Shell Mode (50분)

**문서**: [curriculum/03-session.md](../curriculum/03-session.md)  
**실습**: [exercises/03-cli-shell/](../exercises/03-cli-shell/)

#### 학습 목표
- [ ] Cursor CLI 설치
- [ ] 대화형 Agent 모드 이해
- [ ] Shell Mode 이해
- [ ] 두 모드의 차이점 파악

#### 주요 내용

**1. CLI 설치 (10분)**
- 설치 방법
- 버전 확인
- 기본 명령어

**2. 대화형 Agent 모드 (15분)**
- 터미널에서 대화하듯이 코드 작업
- 컨텍스트 유지
- 파일 직접 수정
- 슬래시 명령 (`/models`, `/rules`, `/compress`)

**3. Shell Mode (20분)**
- 자연어 → 터미널 명령어 변환
- 명령어만 생성 (파일 수정 X)
- 실행 전 확인
- 실습: 파일 찾기, 프로세스 관리, Git 작업

**4. 두 모드 비교 (5분)**
- 대화형: 코드 작업용
- Shell Mode: 명령어 생성용
- 언제 어떤 모드를 사용할지

#### 실습 (14개)
- 기본: 4개
- 보너스: 10개 (초급 3 + 중급 4 + 고급 3)

---

### 4교시: Multi-Agent & 오케스트레이션 (50분)

**문서**: [curriculum/04-session.md](../curriculum/04-session.md)  
**실습**: [exercises/04-cli-multi-agent/](../exercises/04-cli-multi-agent/)

#### 학습 목표
- [ ] Worktree로 독립 Multi-Agent 환경 구성
- [ ] 오케스트레이션 개념 이해
- [ ] IDE + CLI 통합 워크플로우

#### 주요 내용

**1. Worktree Multi-Agent (25분)**
- 로컬 오케스트레이션 개념
- 발전 경로:
  ```
  Claude Code (CLI)
    ↓
  Cursor Agent (CLI + IDE)
    ↓
  Worktree Multi-Agent (수동 오케스트레이션) ← 이 교시!
    ↓
  OpenCode (자동 오케스트레이션)
    ↓
  Oh My OpenCode (Workflow 기반)
  ```
- Worktree 기본 명령어
- 여러 접근법 동시 비교

**2. 오케스트레이션의 진화 (15분)**
- 수동 오케스트레이션 (현재):
  - 당신이 오케스트레이터
  - 접근법 결정, Worktree 생성, 결과 비교
- 자동 오케스트레이션 (OpenCode):
  - AI가 오케스트레이터
  - 자동으로 여러 접근법 시도 및 선택
- Workflow 기반 (Oh My OpenCode):
  - 각 Worktree = Workflow (역할)
  - planning/, design/, markup/, frontend/, qa/
  - 작업 복잡도에 따라 자동 할당

**3. IDE + CLI 통합 (10분)**
- IDE에서 메인 작업
- 터미널에서 조사/실험
- 3개의 독립적인 대화 동시 진행

#### 실습 (21개)
- 기본: 11개
- 보너스: 10개 (초급 3 + 중급 4 + 고급 3)

---

### 5교시: 반복 작업 자동화 (50분)

**문서**: [curriculum/05-session.md](../curriculum/05-session.md)  
**실습**: [exercises/05-workflow-automation/](../exercises/05-workflow-automation/)

#### 학습 목표
- [ ] 반복 검토 작업을 Worktree로 분리
- [ ] 여러 검토 작업을 병렬 처리
- [ ] 시간 절약 효과 확인 (57% 단축)

#### 주요 내용

**1. 반복 작업의 문제점 (5분)**
- 순차 처리: 35분
- 병렬 처리: 15분 (57% 단축!)

**2. Worktree 기반 병렬 처리 (15분)**
- 각 검사를 독립 Worktree로 분리
- 동시 실행
- 결과 통합

**3. 실전 시나리오 (30분)**
- 접근성 검사 (ARIA, 키보드)
- 브라우저 호환성 (Safari, Firefox, Chrome)
- 성능 최적화 (번들, 렌더링)
- 디자인 시스템 준수
- 반응형 검증
- 다국어 검증
- 컴포넌트 상태 검증
- 이미지 최적화

#### 실습 (12개)
- 기본: 3개
- 보너스: 9개 (초급 3 + 중급 3 + 고급 3)

#### 자동화 스크립트
- `check-parallel.sh`: 4가지 검사 동시 (35분 → 15분)
- `check-responsive.sh`: 반응형 검증 (25분 → 10분)

---

### 6교시: 마크업 품질 자동화 (50분)

**문서**: [curriculum/06-session.md](../curriculum/06-session.md)  
**실습**: [exercises/06-cicd-integration/](../exercises/06-cicd-integration/)

#### 학습 목표
- [ ] HTML/CSS 품질을 자동으로 검증
- [ ] 다중 테마 검증
- [ ] 컴포넌트 라이브러리 관리

#### 주요 내용

**1. HTML/CSS 품질 검증 (20분)**
- 순차 처리: 45분
- 병렬 처리: 18분 (60% 단축!)
- HTML 시맨틱 검증
- 접근성 검증
- SEO 검증
- CSS 구조/성능/네이밍 검증

**2. 다중 테마 검증 (15분)**
- 라이트/다크/고대비 테마
- 병렬 검증
- 일관성 체크

**3. 컴포넌트 라이브러리 관리 (15분)**
- 컴포넌트 품질 검증
- 디자인 시스템 준수
- 아이콘/타이포/간격/애니메이션

#### 실습 (12개)
- 기본: 3개
- 보너스: 9개 (초급 3 + 중급 3 + 고급 3)

#### 자동화 스크립트
- `check-html-css.sh`: HTML/CSS 품질 (45분 → 18분)
- `check-themes.sh`: 테마 검증 (30분 → 12분)

---

## 학습 흐름

### 전체 학습 경로

```
사전 학습 (20분)
  └─ README.md + 00-overview.md

Day 1 (3시간)
  ├─ 1교시 (50분): Rules & Hooks
  ├─ 휴식 (10분)
  ├─ 2교시 (50분): Debug & Visual
  ├─ 휴식 (10분)
  └─ 3교시 (50분): CLI & Shell

Day 2 (3시간)
  ├─ 4교시 (50분): Multi-Agent & 오케스트레이션
  ├─ 휴식 (10분)
  ├─ 5교시 (50분): 반복 작업 자동화
  ├─ 휴식 (10분)
  └─ 6교시 (50분): 마크업 품질 자동화
```

### 개념 누적 흐름

```
1교시: Rules (조건부 규칙)
  ↓
1교시: Hooks (Agent 제어)
  ↓
2교시: Debug Mode (버그 추적)
  ↓
2교시: Visual Editor (UI 편집)
  ↓
3교시: 대화형 CLI (코드 작업)
  ↓
3교시: Shell Mode (명령어 생성)
  ↓
4교시: Worktree Multi-Agent (수동 오케스트레이션)
  ↓
4교시: IDE + CLI 통합
  ↓
5교시: 병렬 검토 자동화
  ↓
6교시: 품질 검증 자동화
```

---

## 핵심 개념 정리

### Cursor 전용 기능 7가지

| # | 기능 | 교시 | 설명 |
|---|------|------|------|
| 1 | **Rules** | 1교시 | globs 패턴으로 조건부 규칙 |
| 2 | **Hooks** | 1교시 | Agent 동작 감시/제어 |
| 3 | **Debug Mode** | 2교시 | 자동 로그 삽입 버그 추적 |
| 4 | **Visual Editor** | 2교시 | 브라우저 UI 직접 편집 |
| 5 | **대화형 CLI** | 3교시 | 대화하듯이 코드 작업 |
| 6 | **Shell Mode** | 3교시 | 자연어 → 명령어 변환 |
| 7 | **Worktree Multi-Agent** | 4교시 | 독립 환경 병렬 작업 |

### 오케스트레이션 진화

| 단계 | 오케스트레이터 | 판단 | 실행 | 교시 |
|------|---------------|------|------|------|
| **수동** | 당신 | 수동 | 수동 | 4-6교시 |
| **OpenCode** | AI | 자동 | 자동 | (미래) |
| **Oh My OpenCode** | AI + Workflow | 자동 + 역할 | 자동 | (미래) |

### 시간 절약 효과

| 작업 | 순차 | 병렬 | 절감 | 교시 |
|------|------|------|------|------|
| 병렬 검토 | 35분 | 15분 | 57% | 5교시 |
| 반응형 검증 | 25분 | 10분 | 60% | 5교시 |
| HTML/CSS 품질 | 45분 | 18분 | 60% | 6교시 |
| 테마 검증 | 30분 | 12분 | 60% | 6교시 |
| **총합** | **135분** | **55분** | **59%** | - |

---

## 실습 구성

### 교시별 실습 개수

| 교시 | 폴더 | 기본 | 보너스 | 총합 | 난이도 |
|------|------|------|--------|------|--------|
| 1교시 | 01-ide-rules-hooks | 8 | 6 | 14 | 🟢 초급 |
| 2교시 | 02-ide-debug-visual | 4 | 9 | 13 | 🟡 중급 |
| 3교시 | 03-cli-shell | 4 | 10 | 14 | 🟢 초급 |
| 4교시 | 04-cli-multi-agent | 11 | 10 | 21 | 🔴 고급 |
| 5교시 | 05-workflow-automation | 3 | 9 | 12 | 🔴 고급 |
| 6교시 | 06-cicd-integration | 3 | 9 | 12 | 🔴 고급 |
| **총합** | - | **33** | **53** | **86** | - |

### 실습 난이도 분포

- 🟢 **초급** (2개): 1교시, 3교시
- 🟡 **중급** (1개): 2교시
- 🔴 **고급** (3개): 4-6교시

### 보너스 실습 구성

각 교시마다:
- 초급 보너스: 2-3개
- 중급 보너스: 2-4개
- 고급 보너스: 2-3개

---

## 📊 전체 통계

### 시간 배분
- **강의**: 300분 (50분 × 6교시)
- **휴식**: 50분 (10분 × 5회)
- **총 시간**: 350분 (약 6시간)

### 콘텐츠 규모
- **강의 문서**: 7개 (overview + 6교시)
- **실습 가이드**: 6개
- **예제 프로젝트**: 3개
- **자동화 스크립트**: 4개
- **총 실습**: 86개

### 학습 성과
- **버그 해결 속도**: 70% 향상
- **UI 개발 속도**: 2배 향상
- **터미널 작업**: 80% 자동화
- **의사결정 속도**: 3배 향상
- **검토 시간**: 60% 단축

---

**이 강의는 Copilot 사용자가 Cursor로 완전히 전환하는데 필요한 모든 것을 제공합니다!** 🚀
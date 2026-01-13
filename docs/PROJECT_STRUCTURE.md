# 📁 프로젝트 구조

## 📋 목차

- [디렉토리 구조](#디렉토리-구조)
- [주요 문서 설명](#주요-문서-설명)
- [강의 자료 구성](#강의-자료-구성)
- [실습 자료 구성](#실습-자료-구성)
- [예제 프로젝트 구성](#예제-프로젝트-구성)

---

## 디렉토리 구조

```
cursor-tutorial/
├── README.md                    # 프로젝트 메인 문서
│
├── curriculum/                  # 강의 자료 (7개)
│   ├── 00-overview.md          # 전체 개요
│   ├── 01-session.md           # 1교시: Rules & Hooks
│   ├── 02-session.md           # 2교시: Debug Mode & Visual Editor
│   ├── 03-session.md           # 3교시: CLI & Shell Mode
│   ├── 04-session.md           # 4교시: Multi-Agent & 오케스트레이션
│   ├── 05-session.md           # 5교시: 반복 작업 자동화
│   └── 06-session.md           # 6교시: 마크업 품질 자동화
│
├── exercises/                   # 실습 자료 (6개)
│   ├── 01-ide-rules-hooks/
│   │   └── README.md           # Rules & Hooks 실습
│   ├── 02-ide-debug-visual/
│   │   └── README.md           # Debug & Visual Editor 실습
│   ├── 03-cli-shell/
│   │   └── README.md           # CLI & Shell Mode 실습
│   ├── 04-cli-multi-agent/
│   │   └── README.md           # Multi-Agent 실습
│   ├── 05-workflow-automation/
│   │   └── README.md           # 반복 작업 자동화 실습
│   └── 06-cicd-integration/
│       └── README.md           # 마크업 품질 자동화 실습
│
├── examples/                    # 예제 프로젝트 (3개)
│   ├── README.md               # 예제 프로젝트 개요
│   ├── basic-html-css-js/      # HTML/CSS/JS 예제
│   │   ├── README.md
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── script.js
│   ├── react-project/          # React 예제
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── public/
│   │   └── src/
│   └── automation-scripts/     # 자동화 스크립트
│       ├── README.md
│       ├── check-parallel.sh
│       ├── check-responsive.sh
│       ├── check-html-css.sh
│       └── check-themes.sh
│
├── docs/                        # 보조 문서
│   ├── guides/                 # 가이드 문서
│   │   ├── CLI_MODES_EXPLAINED.md
│   │   └── INTERACTIVE_MODE_GUIDE.md
│   ├── reference/              # 참고 문서
│   │   ├── CHECKLIST.md
│   │   ├── SUMMARY.md
│   │   └── UPDATE_SUMMARY.md
│   └── PROJECT_STRUCTURE.md    # 이 문서
│
├── cheatsheet/                  # 치트시트
│   └── shortcuts.md            # 단축키 모음
│
└── resources/                   # 참고 자료
    ├── changelog-summary.md    # Cursor 변경 이력
    └── links.md                # 유용한 링크 모음
```

---

## 주요 문서 설명

### 📘 메인 문서

#### README.md
- **역할**: 프로젝트 전체 소개 및 시작 가이드
- **대상**: 강의 수강 전 읽는 문서
- **내용**:
  - 강의 개요
  - IDE vs CLI 모드 설명
  - Copilot과의 차이점
  - 커리큘럼 요약
  - 학습 목표
  - 사전 준비

---

## 강의 자료 구성

### curriculum/ (7개 파일)

#### 00-overview.md
- **역할**: 전체 강의 개요
- **내용**:
  - 강의 방향
  - IDE vs CLI 모드 상세 설명
  - Copilot vs Cursor 비교
  - 교시별 구성
  - Cursor 전용 기능 7가지 설명

#### 01-session.md (1교시: 50분)
- **주제**: Rules & Hooks
- **내용**:
  - Copilot과 비슷한 것들 (차이만)
  - Rules: globs 패턴 조건부 규칙
  - Hooks: Agent 동작 감시/제어
- **실습**: exercises/01-ide-rules-hooks/

#### 02-session.md (2교시: 50분)
- **주제**: Debug Mode & Visual Editor
- **내용**:
  - Debug Mode: 자동 로그 삽입
  - Visual Editor: 브라우저 UI 편집
  - IDE Multi-Agent 주의점
- **실습**: exercises/02-ide-debug-visual/

#### 03-session.md (3교시: 50분)
- **주제**: CLI & Shell Mode
- **내용**:
  - CLI 설치
  - 대화형 Agent 모드
  - Shell Mode: 명령어 생성
  - 두 모드의 차이점
- **실습**: exercises/03-cli-shell/

#### 04-session.md (4교시: 50분)
- **주제**: Multi-Agent & 오케스트레이션
- **내용**:
  - Worktree Multi-Agent (로컬 오케스트레이션)
  - 발전 경로: Claude Code → OpenCode → Oh My OpenCode
  - Workflow 개념 (팀 시스템)
  - IDE + CLI 통합
- **실습**: exercises/04-cli-multi-agent/

#### 05-session.md (5교시: 50분)
- **주제**: 반복 작업 자동화
- **내용**:
  - Worktree 기반 병렬 검토
  - 접근성/성능/호환성 동시 검사
  - 시간 절약 효과 (57% 단축)
- **실습**: exercises/05-workflow-automation/

#### 06-session.md (6교시: 50분)
- **주제**: 마크업 품질 자동화
- **내용**:
  - HTML/CSS 품질 검증
  - 다중 테마 검증
  - 컴포넌트 라이브러리 관리
  - 시간 절약 효과 (60% 단축)
- **실습**: exercises/06-cicd-integration/

---

## 실습 자료 구성

### exercises/ (6개 폴더)

각 실습 폴더는 다음 구조를 가집니다:

```
exercises/XX-topic-name/
└── README.md
    ├── 실습 개요
    ├── 기본 실습 (3-11개)
    ├── 보너스 실습 (6-12개)
    └── 실습 완료도 체크
```

**총 실습 개수**: 86개 (기본 33개 + 보너스 53개)

| 교시 | 폴더 | 기본 | 보너스 | 총합 |
|------|------|------|--------|------|
| 1교시 | 01-ide-rules-hooks | 8 | 6 | 14 |
| 2교시 | 02-ide-debug-visual | 4 | 9 | 13 |
| 3교시 | 03-cli-shell | 4 | 10 | 14 |
| 4교시 | 04-cli-multi-agent | 11 | 10 | 21 |
| 5교시 | 05-workflow-automation | 3 | 9 | 12 |
| 6교시 | 06-cicd-integration | 3 | 9 | 12 |

---

## 예제 프로젝트 구성

### examples/ (3개 프로젝트)

#### basic-html-css-js/
- **목적**: Visual Editor 실습용
- **구성**:
  - 반응형 웹사이트
  - 의도된 버그 포함
  - 즉시 실행 가능

#### react-project/
- **목적**: 전체 실습용
- **구성**:
  - React 18 + Router
  - 로그인, 프로필, 상품, 폼
  - 의도된 버그 포함
  - npm install 후 즉시 실행

#### automation-scripts/
- **목적**: 5-6교시 자동화 실습용
- **구성**:
  - 4개 실행 가능한 쉘 스크립트
  - Worktree 기반 병렬 처리
  - 시간 절약 효과 검증

---

## 보조 문서 구성

### docs/guides/ (가이드 문서)

#### CLI_MODES_EXPLAINED.md
- **역할**: CLI 3가지 모드 완벽 가이드
- **내용**:
  - 대화형 Agent 모드
  - Shell Mode
  - 비대화형 모드
  - 비교표 및 선택 가이드

#### INTERACTIVE_MODE_GUIDE.md
- **역할**: 대화형 모드 상세 가이드
- **내용**:
  - 왜 대화형이 중요한가
  - 실전 시나리오
  - 팁 및 학습 경로

### docs/reference/ (참고 문서)

#### CHECKLIST.md
- **역할**: 강의 콘텐츠 검증 체크리스트
- **내용**:
  - 교시 구성 점검
  - 파일 구조 점검
  - 링크 검증
  - 실습 개수 확인

#### SUMMARY.md
- **역할**: 강의 전체 요약
- **내용**:
  - 6교시 구성 요약
  - 핵심 기능 7가지
  - 학습 내용 상세
  - 제공 자료 목록

#### UPDATE_SUMMARY.md
- **역할**: 업데이트 이력 요약
- **내용**:
  - 주요 변경사항
  - 개선 효과
  - 통계

---

## 기타 자료

### cheatsheet/
- **shortcuts.md**: Cursor 단축키 모음

### resources/
- **changelog-summary.md**: Cursor 변경 이력 (2025-2026)
- **links.md**: 유용한 링크 모음

---

## 📊 전체 통계

### 문서 개수
- **강의 자료**: 7개 (overview + 6교시)
- **실습 가이드**: 6개
- **예제 프로젝트**: 3개
- **가이드 문서**: 2개
- **참고 문서**: 3개
- **기타**: 3개
- **총합**: 24개 마크다운 문서

### 실습 개수
- **기본 실습**: 33개
- **보너스 실습**: 53개
- **총합**: 86개

### 예제 코드
- **HTML/CSS/JS 프로젝트**: 1개
- **React 프로젝트**: 1개
- **자동화 스크립트**: 4개

---

## 🎯 문서 사용 가이드

### 강의 진행 순서

1. **사전 학습**:
   - README.md 읽기
   - curriculum/00-overview.md 읽기

2. **1-2교시 (IDE 모드)**:
   - curriculum/01-session.md → exercises/01-ide-rules-hooks/
   - curriculum/02-session.md → exercises/02-ide-debug-visual/

3. **3-4교시 (CLI 모드)**:
   - curriculum/03-session.md → exercises/03-cli-shell/
   - curriculum/04-session.md → exercises/04-cli-multi-agent/

4. **5-6교시 (자동화)**:
   - curriculum/05-session.md → exercises/05-workflow-automation/
   - curriculum/06-session.md → exercises/06-cicd-integration/

### 추가 학습 자료

- **CLI 모드 이해**: docs/guides/CLI_MODES_EXPLAINED.md
- **대화형 모드 마스터**: docs/guides/INTERACTIVE_MODE_GUIDE.md
- **단축키 참고**: cheatsheet/shortcuts.md
- **공식 링크**: resources/links.md

---

## 🔄 문서 업데이트 규칙

### 강의 자료 수정 시
1. curriculum/XX-session.md 수정
2. exercises/XX-topic/README.md 동기화
3. docs/reference/CHECKLIST.md 업데이트

### 구조 변경 시
1. 이 문서 (PROJECT_STRUCTURE.md) 업데이트
2. README.md의 디렉토리 구조 업데이트
3. 관련 링크 모두 확인

---

**이 프로젝트는 체계적으로 구조화된 Cursor 마스터 클래스 교육 자료입니다.** 🚀
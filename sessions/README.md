# 📚 Cursor 마스터 클래스 - 교시별 실습

## 📋 목차

- [강의 구조](#강의-구조)
- [교시별 개요](#교시별-개요)
- [학습 방법](#학습-방법)
- [프로젝트 구조](#프로젝트-구조)

---

## 🎯 강의 구조

### 전체 구성

```
sessions/
├── session-01/     # 1교시: Rules & Hooks
├── session-02/     # 2교시: Debug Mode & Visual Editor
├── session-03/     # 3교시: CLI & Shell Mode
├── session-04/     # 4교시: Multi-Agent & 오케스트레이션
├── session-05/     # 5교시: 반복 작업 자동화
└── session-06/     # 6교시: 마크업 품질 자동화
```

### 각 교시 구조

```
session-XX/
├── README.md       # 교재 (교시 개요, 학습 목표, 내용)
└── projects/       # 실습 프로젝트들
    ├── project-1/  # 프로젝트 1
    ├── project-2/  # 프로젝트 2
    └── project-3/  # 프로젝트 3
```

---

## 📚 교시별 개요

### [1교시: Rules & Hooks](./session-01/README.md)

**시간**: 50분  
**난이도**: 🟢 초급

**학습 목표**:
- Rules로 globs 패턴 기반 조건부 규칙 작성
- Hooks로 Agent 동작 감시 및 제어

**프로젝트** (4개):
1. `rules-basic` - 기본 Rules 작성
2. `rules-globs` - Globs 패턴 활용
3. `hooks-basic` - 기본 Hook 작성
4. `hooks-security` - 보안 Hook 구현

---

### [2교시: Debug Mode & Visual Editor](./session-02/README.md)

**시간**: 50분  
**난이도**: 🟡 중급

**학습 목표**:
- Debug Mode로 버그 추적 및 해결
- Visual Editor로 UI 요소 직접 편집

**프로젝트** (4개):
1. `debug-login-bug` - 로그인 버그 해결
2. `debug-api-error` - API 에러 디버깅
3. `visual-button-style` - 버튼 스타일 수정
4. `visual-card-layout` - 카드 레이아웃 조정

---

### [3교시: CLI & Shell Mode](./session-03/README.md)

**시간**: 50분  
**난이도**: 🟢 초급

**학습 목표**:
- Cursor CLI 설치 및 기본 사용
- 대화형 Agent 모드로 코드 작업
- Shell Mode로 명령어 생성

**프로젝트** (3개):
1. `cli-basic` - CLI 기본 사용
2. `shell-file-ops` - 파일 작업 자동화
3. `shell-git-ops` - Git 작업 자동화

---

### [4교시: Multi-Agent & 오케스트레이션](./session-04/README.md)

**시간**: 50분  
**난이도**: 🔴 고급

**학습 목표**:
- Worktree로 독립 Multi-Agent 환경 구성
- 오케스트레이션 개념 이해
- IDE + CLI 통합 워크플로우

**프로젝트** (3개):
1. `worktree-basic` - Worktree 기본
2. `multi-approach` - 여러 접근법 비교
3. `ide-cli-integration` - IDE + CLI 통합

---

### [5교시: 반복 작업 자동화](./session-05/README.md)

**시간**: 50분  
**난이도**: 🔴 고급

**학습 목표**:
- 반복 검토 작업을 Worktree로 분리
- 여러 검토 작업을 병렬 처리
- **시간 절약**: 57% (35분 → 15분)

**프로젝트** (3개):
1. `parallel-checks` - 병렬 검사
2. `responsive-validation` - 반응형 검증
3. `performance-optimization` - 성능 최적화

---

### [6교시: 마크업 품질 자동화](./session-06/README.md)

**시간**: 50분  
**난이도**: 🔴 고급

**학습 목표**:
- HTML/CSS 품질을 자동으로 검증
- 다중 테마 검증
- **시간 절약**: 60% (45분 → 18분)

**프로젝트** (3개):
1. `html-css-quality` - HTML/CSS 품질 검증
2. `theme-validation` - 테마 검증
3. `component-library` - 컴포넌트 관리

---

## 📖 학습 방법

### 1단계: 교재 읽기

각 교시 폴더의 `README.md`를 먼저 읽으세요:

```bash
# 1교시 교재
sessions/session-01/README.md
```

**내용**:
- 학습 목표
- 교재 내용 (개념 설명)
- 실습 프로젝트 개요
- 학습 순서

### 2단계: 프로젝트 실습

교재를 읽은 후 각 프로젝트를 순서대로 실습하세요:

```bash
# 1교시 첫 번째 프로젝트
cd sessions/session-01/projects/rules-basic
```

**각 프로젝트 폴더에는**:
- `README.md`: 상세 실습 가이드
- 실습 파일들: 즉시 사용 가능한 코드

### 3단계: 복습 및 정리

각 교시를 완료한 후:
- [ ] 학습 목표 달성 확인
- [ ] 핵심 개념 정리
- [ ] 다음 교시로 이동

---

## 🗂 프로젝트 구조

### 교시별 프로젝트 수

| 교시 | 프로젝트 수 | 총 시간 |
|------|------------|---------|
| 1교시 | 4개 | 50분 |
| 2교시 | 4개 | 50분 |
| 3교시 | 3개 | 50분 |
| 4교시 | 3개 | 50분 |
| 5교시 | 3개 | 50분 |
| 6교시 | 3개 | 50분 |
| **총합** | **20개** | **5시간** |

### 프로젝트 난이도 분포

- 🟢 **초급** (7개): 1교시(4) + 3교시(3)
- 🟡 **중급** (4개): 2교시(4)
- 🔴 **고급** (9개): 4교시(3) + 5교시(3) + 6교시(3)

---

## 🎯 학습 경로

### Day 1 (3시간)

```
09:00 - 09:50  1교시: Rules & Hooks
10:00 - 10:50  2교시: Debug Mode & Visual Editor
11:00 - 11:50  3교시: CLI & Shell Mode
```

### Day 2 (3시간)

```
09:00 - 09:50  4교시: Multi-Agent & 오케스트레이션
10:00 - 10:50  5교시: 반복 작업 자동화
11:00 - 11:50  6교시: 마크업 품질 자동화
```

---

## 💡 학습 팁

### 1. 순서대로 진행
- 각 교시는 이전 교시의 내용을 기반으로 합니다
- 건너뛰지 말고 순서대로 학습하세요

### 2. 직접 실습
- 교재만 읽지 말고 반드시 직접 실습하세요
- Cursor Agent와 대화하며 학습하세요

### 3. 시간 투자
- 각 프로젝트에 충분한 시간을 투자하세요
- 이해가 안 되면 반복 학습하세요

### 4. 응용 연습
- 보너스 실습도 도전해보세요
- 자신의 프로젝트에 적용해보세요

---

## 📊 학습 성과

### 강의 완료 후

- ✅ **Rules & Hooks**: Agent 제어 능력
- ✅ **Debug & Visual**: 버그 해결 속도 70% 향상
- ✅ **CLI & Shell**: 터미널 작업 80% 자동화
- ✅ **Multi-Agent**: 의사결정 속도 3배 향상
- ✅ **반복 자동화**: 검토 시간 57% 단축
- ✅ **품질 자동화**: 검증 시간 60% 단축

### 전체 시간 절약

| 작업 | 기존 | 개선 | 절감 |
|------|------|------|------|
| 반복 검토 | 35분 | 15분 | 57% |
| 품질 검증 | 45분 | 18분 | 60% |
| **총합** | **135분** | **55분** | **59%** |

---

## 🔗 추가 자료

- [전체 커리큘럼](../curriculum/)
- [예제 프로젝트](../examples/)
- [문서](../docs/)
- [치트시트](../cheatsheet/)

---

## 🚀 시작하기

1교시부터 시작하세요:

```bash
cd sessions/session-01
cat README.md
```

**즐거운 학습 되세요!** 🎉

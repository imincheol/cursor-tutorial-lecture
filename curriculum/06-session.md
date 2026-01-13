# 🎨 6교시: 마크업 품질 자동화 - HTML/CSS 검증 워크플로우

> ⏱ 50분 | 마크업 개발자를 위한 품질 자동화

## 📑 목차

- [이 시간의 목표](#-이-시간의-목표)
- [1️⃣ HTML/CSS 품질 검증 자동화 (20분)](#️⃣-htmlcss-품질-검증-자동화-20분-)
  - [마크업 개발자의 반복 검증 작업](#마크업-개발자의-반복-검증-작업)
  - [Worktree 기반 병렬 검증](#worktree-기반-병렬-검증)
  - [HTML 검증 시나리오](#html-검증-시나리오)
  - [CSS 검증 시나리오](#css-검증-시나리오)
- [2️⃣ 다중 테마 검증 자동화 (15분)](#️⃣-다중-테마-검증-자동화-15분-)
  - [테마 검증의 어려움](#테마-검증의-어려움)
  - [병렬 테마 검증](#병렬-테마-검증)
- [3️⃣ 컴포넌트 라이브러리 품질 관리 (15분)](#️⃣-컴포넌트-라이브러리-품질-관리-15분-)
  - [컴포넌트 품질 검증](#컴포넌트-품질-검증)
  - [디자인 시스템 준수 검증](#디자인-시스템-준수-검증)
- [체크리스트](#-6교시-체크리스트)
- [마무리](#-마무리)

---

## 📋 이 시간의 목표

- [ ] **HTML 시맨틱, CSS 품질을 자동으로 검증** (핵심!)
- [ ] 여러 디자인 시스템 변형을 동시에 검토
- [ ] 컴포넌트 라이브러리 품질 관리 자동화
- [ ] 스타일 가이드 준수 여부 자동 체크

---

## 💡 이 교시에서 배울 것

### HTML/CSS 품질 병렬 검증
마크업 개발에서 매번 확인하는 품질 항목들을 Worktree로 분리해서 동시에 검증합니다.

**순차 처리 (기존 방식)**:
```
HTML 시맨틱 (15분) → 접근성 (10분) → SEO (10분) → CSS 구조 (10분)
= 총 45분
```

**병렬 처리 (Worktree)**:
```
터미널 1: HTML 시맨틱 (15분)
터미널 2: 접근성 (10분)      } 동시 실행
터미널 3: SEO (10분)
터미널 4: CSS 구조 (10분)
= 총 18분 (60% 단축!)
```

**실전 시나리오**:
- HTML 시맨틱 검증 (`<header>`, `<nav>`, `<main>` 등)
- 접근성 검증 (ARIA, alt, 키보드)
- SEO 검증 (메타 태그, 구조화 데이터)
- CSS 구조 검증 (네이밍, 중복, 성능)
- 다중 테마 검증 (라이트, 다크, 고대비)
- 컴포넌트 라이브러리 품질 (일관성, 재사용성)

---

## 1️⃣ HTML/CSS 품질 검증 자동화 (20분) 📝

### 마크업 개발자의 반복 검증 작업

```
매번 확인해야 하는 것들:
- HTML 시맨틱 구조 (header, nav, main, article...)
- CSS 네이밍 컨벤션 (BEM, SMACSS...)
- 불필요한 div 남용
- 인라인 스타일 사용 여부
- CSS 중복 코드
- 미사용 CSS 선택자
- 크로스 브라우징 이슈
```

### Worktree 기반 HTML 검증

```bash
# HTML 품질 검사용 Worktree들
git worktree add ../check-html-semantic -b check/html-semantic
git worktree add ../check-html-a11y -b check/html-a11y
git worktree add ../check-html-seo -b check/html-seo
```

**터미널 1 - 시맨틱 HTML 검사:**
```bash
cd ../check-html-semantic
cursor agent "이 HTML의 시맨틱 구조를 검사해줘

체크 항목:
- <div> 남용 여부 (시맨틱 태그로 대체 가능한지)
- <header>, <nav>, <main>, <article>, <section> 적절성
- <h1>~<h6> 계층 구조
- <button> vs <a> 올바른 사용
- <form> 구조 적절성
- 랜드마크 역할 (role 속성)

개선 제안을 semantic-report.md로 저장해줘"
```

**터미널 2 - 접근성 HTML 검사:**
```bash
cd ../check-html-a11y
cursor agent "이 HTML의 접근성을 검사해줘

체크 항목:
- alt 텍스트 누락
- label과 input 연결
- ARIA 속성 적절성
- 키보드 접근 가능성
- 포커스 순서
- 색상 의존적 정보 전달

개선 제안을 a11y-html-report.md로 저장해줘"
```

**터미널 3 - SEO HTML 검사:**
```bash
cd ../check-html-seo
cursor agent "이 HTML의 SEO를 검사해줘

체크 항목:
- <title> 태그 적절성
- 메타 태그 (description, keywords, og:*)
- <h1> 태그 유일성
- 구조화된 데이터 (Schema.org)
- 이미지 alt 텍스트
- 링크 텍스트 명확성

개선 제안을 seo-report.md로 저장해줘"
```

---

## 2️⃣ CSS 품질 검증 자동화 (15분) 🎨

### CSS 코드 품질 검사

```bash
# CSS 품질 검사용 Worktree들
git worktree add ../check-css-structure -b check/css-structure
git worktree add ../check-css-performance -b check/css-performance
git worktree add ../check-css-naming -b check/css-naming
```

**터미널 1 - CSS 구조 검사:**
```bash
cd ../check-css-structure
cursor agent "이 CSS의 구조를 검사해줘

체크 항목:
- 선택자 깊이 (3단계 이하 권장)
- !important 사용 (최소화)
- 중복 코드 (DRY 원칙)
- CSS 변수 활용도
- 미디어 쿼리 정리
- 모바일 퍼스트 적용 여부

개선 제안을 css-structure-report.md로 저장해줘"
```

**터미널 2 - CSS 성능 검사:**
```bash
cd ../check-css-performance
cursor agent "이 CSS의 성능을 검사해줘

체크 항목:
- 파일 크기 (gzip 전/후)
- 미사용 CSS (PurgeCSS)
- 복잡한 선택자 (성능 저하)
- 애니메이션 최적화 (transform, opacity)
- will-change 사용
- 리플로우/리페인트 유발 속성

개선 제안을 css-performance-report.md로 저장해줘"
```

**터미널 3 - CSS 네이밍 검사:**
```bash
cd ../check-css-naming
cursor agent "이 CSS의 네이밍을 검사해줘

체크 항목:
- BEM 네이밍 준수 (block__element--modifier)
- 네이밍 일관성
- 약어 사용 적절성
- 유틸리티 클래스 네이밍
- 상태 클래스 네이밍 (is-, has-)
- JavaScript 훅 클래스 (js-)

개선 제안을 css-naming-report.md로 저장해줘"
```

---

## 3️⃣ 디자인 시스템 변형 검증 (15분) 🎭

### 여러 테마를 동시에 검증

```bash
# 테마별 Worktree 생성
git worktree add ../theme-light -b theme/light
git worktree add ../theme-dark -b theme/dark
git worktree add ../theme-high-contrast -b theme/high-contrast
```

**터미널 1 - 라이트 테마:**
```bash
cd ../theme-light
cursor agent "라이트 테마를 검사해줘

체크 항목:
- 색상 대비 (WCAG AA 기준)
- 가독성 (배경/텍스트)
- 버튼 상태 구분
- 포커스 인디케이터
- 그림자 적절성

결과를 light-theme-report.md로 저장해줘"
```

**터미널 2 - 다크 테마:**
```bash
cd ../theme-dark
cursor agent "다크 테마를 검사해줘

체크 항목:
- 색상 대비 (어두운 배경에서)
- 눈의 피로도
- 이미지/아이콘 가시성
- 그림자 대체 (border 사용)
- 색상 반전 적절성

결과를 dark-theme-report.md로 저장해줘"
```

**터미널 3 - 고대비 테마:**
```bash
cd ../theme-high-contrast
cursor agent "고대비 테마를 검사해줘

체크 항목:
- 최대 대비 확보
- 모든 요소 구분 가능
- 색상 의존 정보 제거
- 패턴/텍스처 활용
- 아이콘 명확성

결과를 high-contrast-report.md로 저장해줘"
```

---

## 4️⃣ 컴포넌트 라이브러리 품질 관리 (10분) 📚

### 컴포넌트 변형 동시 검증

```bash
# 버튼 컴포넌트의 모든 변형 검증
git worktree add ../button-primary -b component/button-primary
git worktree add ../button-secondary -b component/button-secondary
git worktree add ../button-disabled -b component/button-disabled
git worktree add ../button-loading -b component/button-loading
```

**각 터미널에서:**
```bash
cursor agent "이 버튼 변형을 검사해줘

체크 항목:
- 크기 일관성 (padding, height)
- 호버/포커스/액티브 상태
- 애니메이션 일관성
- 아이콘 정렬
- 텍스트 오버플로우 처리
- 로딩 상태 UI

개선 제안을 button-{variant}-report.md로 저장해줘"
```

### 폼 요소 검증

```bash
# 폼 요소들을 동시에 검증
git worktree add ../form-input -b form/input
git worktree add ../form-select -b form/select
git worktree add ../form-checkbox -b form/checkbox
git worktree add ../form-radio -b form/radio
```

**각 폼 요소 검사:**
```bash
cursor agent "이 폼 요소를 검사해줘

체크 항목:
- 레이블 연결 (for/id)
- 에러 메시지 표시
- 필수 필드 표시 (*)
- 플레이스홀더 적절성
- 포커스 스타일
- 유효성 검사 피드백

개선 제안을 form-{type}-report.md로 저장해줘"
```

---

## 5️⃣ 실전 자동화 패턴 (10분) 🔄

### 패턴 1: 아이콘 시스템 검증

```bash
git worktree add ../check-icons -b check/icons

cursor agent "아이콘 시스템을 검사해줘

체크 항목:
- SVG 최적화 (SVGO)
- 일관된 크기 (16px, 24px, 32px)
- 색상 상속 (currentColor)
- 접근성 (title, aria-label)
- 네이밍 일관성
- 미사용 아이콘

개선 제안을 icons-report.md로 저장해줘"
```

### 패턴 2: 타이포그래피 검증

```bash
git worktree add ../check-typography -b check/typography

cursor agent "타이포그래피를 검사해줘

체크 항목:
- 폰트 크기 스케일 (1.25 비율)
- 행간 (line-height 1.5~1.8)
- 자간 (letter-spacing)
- 단어 간격 (word-spacing)
- 최대 줄 길이 (60-80자)
- 폰트 로딩 전략

개선 제안을 typography-report.md로 저장해줘"
```

### 패턴 3: 간격 시스템 검증

```bash
git worktree add ../check-spacing -b check/spacing

cursor agent "간격 시스템을 검사해줘

체크 항목:
- 4px/8px 기반 스케일
- margin/padding 일관성
- 컴포넌트 간 간격
- 섹션 구분 간격
- 반응형 간격 조정
- CSS 변수 활용

개선 제안을 spacing-report.md로 저장해줘"
```

### 패턴 4: 애니메이션 검증

```bash
git worktree add ../check-animations -b check/animations

cursor agent "애니메이션을 검사해줘

체크 항목:
- 애니메이션 지속 시간 (200-400ms)
- Easing 함수 일관성
- 성능 (transform, opacity만 사용)
- prefers-reduced-motion 지원
- 애니메이션 목적 명확성
- 과도한 애니메이션

개선 제안을 animations-report.md로 저장해줘"
```

---

## ✅ 6교시 체크리스트

- [ ] HTML 시맨틱/접근성/SEO 검증 자동화
- [ ] CSS 구조/성능/네이밍 검증 자동화
- [ ] 여러 테마를 동시에 검증
- [ ] 컴포넌트 라이브러리 품질 관리
- [ ] 실전 자동화 패턴 4가지 이상 체험

---

## 🎯 마크업 품질 자동화의 가치

### 품질 향상
- **일관된 코드 품질**: 자동화된 검증으로 표준 준수
- **접근성 보장**: 매번 체크리스트 실행으로 WCAG 준수
- **SEO 최적화**: 메타 태그 누락 방지

### 생산성 향상
- **검증 시간 80% 단축**: 병렬 처리로 빠른 피드백
- **리팩토링 자신감**: 자동 검증으로 안전한 변경
- **학습 효과**: AI 분석으로 베스트 프랙티스 습득

---

## 🔗 이 교시 관련 공식 문서

| 주제 | 링크 |
|------|------|
| Worktrees | https://docs.cursor.com/configuration/worktrees |
| Agent CLI | https://docs.cursor.com/cli/overview |
| Browser | https://docs.cursor.com/agent/browser |

---

## ⏮ 이전 교시

- [← 5교시: 반복 작업 자동화](./05-session.md)

---

## 🎉 강의 마무리

### 오늘 배운 것 정리

**IDE 모드 (1-2교시):**
- Rules & Hooks로 프로젝트 표준화
- Debug Mode & Visual Editor로 개발 효율화

**CLI 모드 (3-6교시):**
- Shell Mode로 터미널 자동화
- Worktree Multi-Agent로 병렬 작업

**업무 자동화 (5-6교시):**
- 반복 검토 작업 자동화
- 마크업 품질 관리 자동화

### 다음 단계

```
1. .cursor/ 폴더 설정을 팀과 공유
2. 반복 작업을 Worktree 패턴으로 자동화
3. 검토 프로세스를 표준화
4. 팀 전체 생산성 향상 측정
```

---

**Cursor로 마크업 품질을 자동화하고 창의적인 작업에 집중하세요! 🚀**
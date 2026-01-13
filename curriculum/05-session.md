# 🎯 5교시: 반복 작업 자동화 - Worktree 기반 검토 워크플로우

> ⏱ 50분 | 프론트엔드 개발자를 위한 반복 작업 자동화

## 📑 목차

- [이 시간의 목표](#-이-시간의-목표)
- [1️⃣ 반복 검토 작업의 문제점 (5분)](#️⃣-반복-검토-작업의-문제점-5분-)
  - [프론트엔드 개발자의 반복 작업들](#프론트엔드-개발자의-반복-작업들)
  - [순차 처리의 문제](#순차-처리의-문제)
- [2️⃣ Worktree 기반 병렬 처리 (15분)](#️⃣-worktree-기반-병렬-처리-15분-)
  - [병렬 처리 개념](#병렬-처리-개념)
  - [Worktree 생성 및 Agent 실행](#worktree-생성-및-agent-실행)
- [3️⃣ 실전 시나리오 (30분)](#️⃣-실전-시나리오-30분-)
  - [시나리오 1: 접근성 검사](#시나리오-1-접근성-검사)
  - [시나리오 2: 브라우저 호환성](#시나리오-2-브라우저-호환성)
  - [시나리오 3: 성능 최적화](#시나리오-3-성능-최적화)
  - [시나리오 4: 디자인 시스템 검증](#시나리오-4-디자인-시스템-검증)
  - [시나리오 5-8: 추가 시나리오](#추가-시나리오)
- [체크리스트](#-5교시-체크리스트)
- [다음 교시](#-다음-교시)

---

## 📋 이 시간의 목표

- [ ] 반복되는 검토 작업을 Worktree로 분리하여 자동화
- [ ] 접근성 검사, 브라우저 호환성, 성능 체크 등을 독립 실행
- [ ] **여러 검토 작업을 동시에 병렬 처리** (핵심!)
- [ ] 검토 결과를 자동으로 비교 및 리포팅

---

## 💡 이 교시에서 배울 것

### 반복 작업 병렬 자동화
프론트엔드 개발에서 매번 반복하는 검토 작업들을 Worktree로 분리해서 동시에 실행합니다.

**순차 처리 (기존 방식)**:
```
접근성 검사 (10분) → 브라우저 호환성 (10분) → 성능 (10분) → 디자인 시스템 (5분)
= 총 35분
```

**병렬 처리 (Worktree)**:
```
터미널 1: 접근성 검사 (10분)
터미널 2: 브라우저 호환성 (10분)  } 동시 실행
터미널 3: 성능 (10분)
터미널 4: 디자인 시스템 (5분)
= 총 15분 (57% 단축!)
```

**실전 시나리오**:
- 접근성 검사 (ARIA, 키보드 네비게이션)
- 브라우저 호환성 (Safari, Firefox, Chrome)
- 성능 최적화 (번들 크기, 렌더링)
- 디자인 시스템 준수 (컬러, 간격, 타이포)
- 반응형 검증 (모바일, 태블릿, 데스크톱)

---

## 1️⃣ 반복 검토 작업의 문제점 (5분) 🔍

### 프론트엔드 개발자의 반복 작업들

```
매번 PR 전에 체크해야 하는 것들:
- 접근성 검사 (ARIA, 키보드 네비게이션)
- 브라우저 호환성 (Chrome, Safari, Firefox)
- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 성능 최적화 (번들 크기, 렌더링 성능)
- 디자인 시스템 준수 (색상, 타이포그래피, 간격)
- SEO 메타 태그 확인

문제: 순차적으로 하나씩 체크하면 시간이 오래 걸림 ⏰
해결: Worktree로 분리해서 동시에 체크! ⚡
```

### 기존 방식 vs Worktree 병렬 처리

```
기존 방식 (순차):
접근성 체크 (10분) → 브라우저 테스트 (15분) → 성능 체크 (10분) = 35분

Worktree 병렬 처리:
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ Worktree 1  │  │ Worktree 2  │  │ Worktree 3  │
│ 접근성 체크 │  │ 브라우저    │  │ 성능 체크   │
│ (10분)      │  │ 테스트(15분)│  │ (10분)      │
└─────────────┘  └─────────────┘  └─────────────┘
         ↓              ↓              ↓
         └──────────────┴──────────────┘
                    15분 완료!
```

---

## 2️⃣ Worktree 기반 검토 자동화 (25분) 🤖

### 시나리오: 새로운 컴포넌트 개발 완료 후 검토

**상황**: `UserProfile` 컴포넌트를 개발하고 PR 전 검토 필요

#### Step 1: 검토용 Worktree 생성

```bash
# 현재 브랜치: feat/user-profile

# 접근성 검사용 Worktree
git worktree add ../check-a11y -b check/a11y

# 브라우저 호환성 검사용 Worktree
git worktree add ../check-browsers -b check/browsers

# 성능 검사용 Worktree
git worktree add ../check-performance -b check/performance

# 디자인 시스템 검사용 Worktree
git worktree add ../check-design -b check/design
```

#### Step 2: 각 Worktree에서 독립적으로 검사 실행

**터미널 1 - 접근성 검사:**
```bash
cd ../check-a11y
cursor agent "이 컴포넌트의 접근성을 검사해줘

체크 항목:
- ARIA 레이블 적절성
- 키보드 네비게이션 (Tab, Enter, Esc)
- 색상 대비 (WCAG AA 기준)
- 스크린 리더 호환성
- 포커스 인디케이터
- 시맨틱 HTML 사용

결과를 a11y-report.md로 저장해줘"
```

**터미널 2 - 브라우저 호환성:**
```bash
cd ../check-browsers
cursor agent "이 컴포넌트의 브라우저 호환성을 검사해줘

체크 항목:
- Chrome 최신 버전
- Safari 최신 버전
- Firefox 최신 버전
- Edge 최신 버전
- CSS 속성 호환성
- JavaScript API 호환성

결과를 browser-report.md로 저장해줘"
```

**터미널 3 - 성능 검사:**
```bash
cd ../check-performance
cursor agent "이 컴포넌트의 성능을 검사해줘

체크 항목:
- 번들 크기 (gzip 전/후)
- 렌더링 성능 (리렌더링 횟수)
- 메모리 사용량
- 이미지 최적화 여부
- 불필요한 의존성
- Tree-shaking 가능성

결과를 performance-report.md로 저장해줘"
```

**터미널 4 - 디자인 시스템 검사:**
```bash
cd ../check-design
cursor agent "이 컴포넌트가 디자인 시스템을 준수하는지 검사해줘

체크 항목:
- 색상 팔레트 (primary, secondary, accent)
- 타이포그래피 (폰트, 크기, 행간)
- 간격 시스템 (4px, 8px, 16px...)
- 그림자 스타일
- 애니메이션 일관성
- 아이콘 사용

결과를 design-report.md로 저장해줘"
```

#### Step 3: 검사 결과 자동 통합

```bash
# 메인 프로젝트로 돌아와서
cd /my-project

# 모든 검사 결과 수집
cursor agent "각 worktree의 검사 결과를 통합해서 최종 리포트를 만들어줘

파일 위치:
- ../check-a11y/a11y-report.md
- ../check-browsers/browser-report.md
- ../check-performance/performance-report.md
- ../check-design/design-report.md

최종 리포트 형식:
# UserProfile 컴포넌트 검토 결과

## ✅ 통과 항목
## ⚠️ 개선 필요
## ❌ 수정 필수

결과를 REVIEW.md로 저장해줘"
```

---

## 3️⃣ 실전 자동화 패턴들 (20분) 🔄

### 패턴 1: 반응형 디자인 검증

```bash
# 3개의 뷰포트를 동시에 검사
git worktree add ../check-mobile -b check/mobile
git worktree add ../check-tablet -b check/tablet
git worktree add ../check-desktop -b check/desktop

# 터미널 1: 모바일 (375px)
cd ../check-mobile
cursor agent "모바일 뷰포트(375px)에서 이 페이지를 검사해줘
- 레이아웃 깨짐 여부
- 터치 타겟 크기 (최소 44px)
- 가로 스크롤 발생 여부
- 폰트 크기 가독성"

# 터미널 2: 태블릿 (768px)
cd ../check-tablet
cursor agent "태블릿 뷰포트(768px)에서 이 페이지를 검사해줘"

# 터미널 3: 데스크톱 (1920px)
cd ../check-desktop
cursor agent "데스크톱 뷰포트(1920px)에서 이 페이지를 검사해줘"
```

### 패턴 2: 다국어 지원 검증

```bash
# 여러 언어를 동시에 검사
git worktree add ../check-ko -b check/lang-ko
git worktree add ../check-en -b check/lang-en
git worktree add ../check-ja -b check/lang-ja

# 각 터미널에서
cursor agent "이 페이지의 한국어 번역을 검사해줘
- 번역 누락 여부
- 텍스트 오버플로우
- 날짜/숫자 포맷
- 문화적 적절성"
```

### 패턴 3: 컴포넌트 변형 검증

```bash
# 컴포넌트의 다양한 상태를 동시에 검사
git worktree add ../check-loading -b check/state-loading
git worktree add ../check-error -b check/state-error
git worktree add ../check-empty -b check/state-empty
git worktree add ../check-success -b check/state-success

# 각 상태별로 검사
cursor agent "로딩 상태의 UI를 검사해줘
- 스켈레톤 UI 적절성
- 로딩 인디케이터 위치
- 사용자 피드백 명확성"
```

### 패턴 4: 크로스 브라우징 CSS 검증

```bash
# CSS 호환성을 동시에 검사
git worktree add ../check-css-chrome -b check/css-chrome
git worktree add ../check-css-safari -b check/css-safari
git worktree add ../check-css-firefox -b check/css-firefox

cursor agent "이 CSS가 Safari에서 제대로 작동하는지 검사해줘
- Flexbox 레이아웃
- Grid 레이아웃
- CSS 변수 사용
- 벤더 프리픽스 필요성
- 폴백 스타일"
```

### 패턴 5: 이미지 최적화 검증

```bash
git worktree add ../check-images -b check/images

cd ../check-images
cursor agent "이 프로젝트의 이미지들을 분석해줘
- 파일 크기 (1MB 이상 경고)
- 포맷 최적화 (WebP 사용 권장)
- Lazy loading 적용 여부
- 반응형 이미지 (srcset)
- alt 텍스트 누락
- 압축 가능성"
```

---

## 4️⃣ 검토 결과 통합 및 정리 (10분) 📊

### 자동 리포트 생성

```bash
cursor agent "모든 worktree의 검사 결과를 통합해서 PR 코멘트를 생성해줘

형식:
## 🔍 자동 검토 결과

### ✅ 통과 (5/8)
- [x] 접근성: WCAG AA 준수
- [x] 브라우저: Chrome, Firefox 호환
- [x] 성능: 번들 크기 적정
- [x] 디자인: 색상 팔레트 준수
- [x] 반응형: 모바일/데스크톱 정상

### ⚠️ 개선 권장 (2/8)
- [ ] Safari 일부 CSS 속성 미지원 (폴백 필요)
- [ ] 이미지 최적화 가능 (30% 크기 감소 가능)

### ❌ 수정 필수 (1/8)
- [ ] 키보드 네비게이션 불가 (Tab 키 동작 안 함)

### 📋 상세 리포트
- [접근성 리포트](./a11y-report.md)
- [브라우저 호환성 리포트](./browser-report.md)
- [성능 리포트](./performance-report.md)
"
```

### Worktree 정리

```bash
# 검토 완료 후 정리
git worktree remove ../check-a11y
git worktree remove ../check-browsers
git worktree remove ../check-performance
git worktree remove ../check-design

# 브랜치 삭제
git branch -d check/a11y check/browsers check/performance check/design
```

---

## ✅ 5교시 체크리스트

- [ ] 반복 검토 작업을 Worktree로 분리
- [ ] 접근성/브라우저/성능 검사를 병렬 실행
- [ ] 검토 결과를 자동으로 통합
- [ ] 실전 자동화 패턴 5가지 이상 체험

---

## 🎯 자동화의 가치

### 시간 절약
- **검토 시간 70% 단축**: 병렬 처리로 35분 → 15분
- **반복 작업 자동화**: 매번 같은 체크리스트 실행 불필요
- **빠른 피드백**: PR 전에 미리 문제 발견

### 품질 향상
- **일관된 검토**: 매번 동일한 기준으로 검사
- **놓치는 항목 없음**: 자동화된 체크리스트
- **데이터 기반 개선**: 검토 결과 누적 분석

---

## 🔗 이 교시 관련 공식 문서

| 주제 | 링크 |
|------|------|
| Worktrees | https://docs.cursor.com/configuration/worktrees |
| Agent CLI | https://docs.cursor.com/cli/overview |

---

## ⏮ 이전 교시

- [← 4교시: IDE + CLI 통합](./04-session.md)

---

## ⏭ 다음 교시

**[6교시: 마크업 품질 자동화 →](./06-session.md)**

---

**Cursor로 반복 작업을 자동화하고 개발에 집중하세요! 🚀**
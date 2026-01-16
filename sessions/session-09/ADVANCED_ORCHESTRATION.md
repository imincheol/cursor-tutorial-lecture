# Advanced: 오케스트레이션 & Role 기반 Multi-Agent

> **주의**: 이 문서는 4교시의 심화 내용입니다. Cursor Agent로 실제 구현 가능한 오케스트레이션 전략을 다룹니다.

## 📋 목차

- [핵심 개념](#핵심-개념)
- [Role 기반 Multi-Agent](#role-기반-multi-agent)
- [실전 구현](#실전-구현)
- [확장 전략](#확장-전략)

---

## 🧠 핵심 개념

### Process, Agent, Role

#### Process (프로세스)
```
정의: 운영체제에서 실행 중인 프로그램
예시: cursor-agent 실행 → 1개 프로세스
```

#### Agent (에이전트)
```
정의: 하나의 cursor-agent 세션
특징: 
  - 1개 프로세스 = 1개 Agent
  - 독립적인 컨텍스트
  - 하나의 대화 세션
```

#### Role (역할)
```
정의: Agent가 수행하는 특정 역할
예시: Planning, Design, Markup, Frontend, QA
핵심: 1개 Agent = 1개 Role
```

---

## 🎯 Role 기반 Multi-Agent

### 기본 원칙

```
1개 Agent = 1개 Role (Worktree로 격리)

planning/     → cursor-agent (Planning Role)
design/       → cursor-agent (Design Role)
markup/       → cursor-agent (Markup Role)
frontend/     → cursor-agent (Frontend Role)
qa/           → cursor-agent (QA Role)
```

### Role 정의

#### 1. Planning Role
```
책임: 요구사항 분석 및 기획
입력: 사용자 요청
출력: 기획 문서, 요구사항 정의
도구: .cursorrules로 역할 명시
```

#### 2. Design Role
```
책임: UI/UX 디자인
입력: 기획 문서
출력: 디자인 스펙, 컴포넌트 구조
도구: .cursorrules로 역할 명시
```

#### 3. Markup Role
```
책임: HTML/CSS 구현
입력: 디자인 스펙
출력: HTML, CSS 파일
도구: .cursorrules로 역할 명시
```

#### 4. Frontend Role
```
책임: JavaScript/React 구현
입력: 마크업, 기획
출력: 동작하는 컴포넌트
도구: .cursorrules로 역할 명시
```

#### 5. QA Role
```
책임: 테스트 및 검증
입력: 완성된 코드
출력: 테스트 결과, 버그 리포트
도구: .cursorrules로 역할 명시
```

---

## 🚀 실전 구현

### 전략: N Agents with N Roles

**구조**:
```
Root (수동 오케스트레이션)
  ├─ planning/     (Agent 1 - Planning Role)
  ├─ design/       (Agent 2 - Design Role)
  ├─ markup/       (Agent 3 - Markup Role)
  ├─ frontend/     (Agent 4 - Frontend Role)
  └─ qa/           (Agent 5 - QA Role)
```

### Step 1: Worktree 생성

```bash
# 각 Role별 Worktree 생성
git worktree add ../planning main
git worktree add ../design main
git worktree add ../markup main
git worktree add ../frontend main
git worktree add ../qa main
```

### Step 2: Role 정의 (.cursorrules)

**planning/.cursorrules**:
```
# Planning Role

당신은 Planning 전문가입니다.

## 책임
- 요구사항 분석
- 기능 명세 작성
- 사용자 스토리 정의

## 제약
- 오직 기획 문서만 작성
- 코드 구현 금지
- 디자인 결정 금지

## 출력 형식
- 요구사항 문서 (requirements.md)
- 기능 명세 (features.md)
- 사용자 스토리 (user-stories.md)
```

**design/.cursorrules**:
```
# Design Role

당신은 UI/UX 디자인 전문가입니다.

## 책임
- UI 컴포넌트 설계
- 레이아웃 구조 정의
- 스타일 가이드 작성

## 제약
- 오직 디자인 스펙만 작성
- 코드 구현 금지
- 기획 변경 금지

## 출력 형식
- 디자인 스펙 (design-spec.md)
- 컴포넌트 구조 (components.md)
- 스타일 가이드 (style-guide.md)
```

**markup/.cursorrules**:
```
# Markup Role

당신은 HTML/CSS 전문가입니다.

## 책임
- 시맨틱 HTML 작성
- CSS 스타일링
- 반응형 레이아웃

## 제약
- 오직 HTML/CSS만 작성
- JavaScript 금지
- 기획/디자인 변경 금지

## 출력 형식
- HTML 파일
- CSS 파일
- 정적 페이지
```

**frontend/.cursorrules**:
```
# Frontend Role

당신은 React/JavaScript 전문가입니다.

## 책임
- React 컴포넌트 구현
- 상태 관리
- API 연동

## 제약
- 오직 JavaScript/React 코드만 작성
- HTML/CSS 변경 최소화
- 기획 변경 금지

## 출력 형식
- React 컴포넌트 (.jsx)
- 상태 관리 코드
- API 통신 로직
```

**qa/.cursorrules**:
```
# QA Role

당신은 QA 전문가입니다.

## 책임
- 테스트 케이스 작성
- 버그 발견 및 리포트
- 품질 검증

## 제약
- 오직 테스트 코드만 작성
- 프로덕션 코드 수정 금지
- 버그 리포트만 작성

## 출력 형식
- 테스트 코드 (.test.js)
- 버그 리포트 (bugs.md)
- 품질 체크리스트 (quality.md)
```

### Step 3: 각 Agent 실행

```bash
# Terminal 1: Planning
cd ../planning
cursor-agent
# "신규 사용자 프로필 페이지 기획해줘"

# Terminal 2: Design
cd ../design
cursor-agent
# "planning/requirements.md 기반으로 UI 디자인해줘"

# Terminal 3: Markup
cd ../markup
cursor-agent
# "design/design-spec.md 기반으로 HTML/CSS 구현해줘"

# Terminal 4: Frontend
cd ../frontend
cursor-agent
# "markup/의 HTML을 React 컴포넌트로 변환해줘"

# Terminal 5: QA
cd ../qa
cursor-agent
# "frontend/의 컴포넌트를 테스트해줘"
```

### Step 4: 결과 통합

```bash
# 각 Worktree의 결과를 main으로 병합
cd main-project

# Planning 결과
cp ../planning/requirements.md ./docs/
cp ../planning/features.md ./docs/

# Design 결과
cp ../design/design-spec.md ./docs/
cp ../design/components.md ./docs/

# Markup 결과
cp ../markup/*.html ./public/
cp ../markup/*.css ./public/

# Frontend 결과
cp ../frontend/src/components/* ./src/components/

# QA 결과
cp ../qa/*.test.js ./tests/
cp ../qa/bugs.md ./docs/
```

---

## 📊 작업 복잡도별 전략

### 간단한 작업 (버튼 스타일 수정)

**사용 Role**: 1개
```
frontend/ → cursor-agent
  └─ "버튼 스타일 수정해줘"
```

**시간**: 5분

---

### 중간 작업 (신규 컴포넌트)

**사용 Role**: 2-3개
```
design/ → cursor-agent
  └─ "로그인 폼 디자인해줘"

markup/ → cursor-agent
  └─ "위 디자인을 HTML/CSS로 구현해줘"

frontend/ → cursor-agent
  └─ "React 컴포넌트로 변환해줘"
```

**시간**: 20분

---

### 복잡한 작업 (신규 페이지)

**사용 Role**: 5개 (전체)
```
planning/ → cursor-agent
  └─ "사용자 프로필 페이지 기획해줘"

design/ → cursor-agent
  └─ "기획 기반 UI 디자인해줘"

markup/ → cursor-agent
  └─ "디자인을 HTML/CSS로 구현해줘"

frontend/ → cursor-agent
  └─ "React 컴포넌트로 구현해줘"

qa/ → cursor-agent
  └─ "테스트 코드 작성해줘"
```

**시간**: 50분

---

## 🎯 확장 전략

### 특수 Role 추가

#### Design System Guardian
```
책임: 디자인 시스템 준수 감시
위치: design-system/
규칙: design-system/.cursorrules
```

**design-system/.cursorrules**:
```
# Design System Guardian Role

당신은 디자인 시스템 감시자입니다.

## 책임
- 디자인 시스템 준수 확인
- 위반 사항 리포트
- 개선 제안

## 검증 항목
- 색상 팔레트 준수
- 타이포그래피 준수
- 간격 시스템 준수
- 컴포넌트 일관성

## 출력 형식
- 위반 사항 리포트 (violations.md)
- 개선 제안 (improvements.md)
```

#### Performance Monitor
```
책임: 성능 모니터링
위치: performance/
규칙: performance/.cursorrules
```

**performance/.cursorrules**:
```
# Performance Monitor Role

당신은 성능 최적화 전문가입니다.

## 책임
- 번들 크기 분석
- 렌더링 성능 측정
- 최적화 제안

## 검증 항목
- 번들 크기 (< 500KB)
- 초기 로딩 시간 (< 3초)
- 렌더링 성능 (60fps)

## 출력 형식
- 성능 리포트 (performance.md)
- 최적화 제안 (optimizations.md)
```

#### Accessibility Checker
```
책임: 접근성 검증
위치: a11y/
규칙: a11y/.cursorrules
```

**a11y/.cursorrules**:
```
# Accessibility Checker Role

당신은 접근성 전문가입니다.

## 책임
- ARIA 속성 검증
- 키보드 접근성 확인
- 스크린 리더 호환성

## 검증 항목
- ARIA 속성 완전성
- 키보드 네비게이션
- 색상 대비 (4.5:1 이상)
- 대체 텍스트

## 출력 형식
- 접근성 리포트 (a11y-report.md)
- 개선 사항 (a11y-fixes.md)
```

---

## 💡 핵심 원칙

### DO ✅

```
1. 1개 Agent = 1개 Role
   - Worktree로 완벽 격리
   - .cursorrules로 역할 명시

2. Role별 책임 명확화
   - 각 Role의 입력/출력 정의
   - 제약사항 명시

3. 수동 오케스트레이션
   - 작업 순서 직접 결정
   - 결과 수동 통합

4. 병렬 처리 활용
   - 독립적인 작업은 동시 진행
   - 시간 절약
```

### DON'T ❌

```
1. 1개 Agent에서 여러 Role 수행 시도
   - 컨텍스트 혼재
   - 역할 구분 모호

2. Role 간 직접 통신 기대
   - 각 Agent는 독립적
   - 수동으로 결과 전달

3. 자동 오케스트레이션 기대
   - 현재는 수동만 가능
   - 미래: OpenCode
```

---

## 📈 효과

### 시간 절약

**순차 처리** (1개 Agent):
```
Planning (10분) → Design (10분) → Markup (10분) → Frontend (15분) → QA (5분)
총 50분
```

**병렬 처리** (5개 Agent):
```
Planning (10분) ┐
Design (10분)   ├─ 동시 진행 (15분)
Markup (10분)   │
Frontend (15분) │
QA (5분)        ┘

총 15분 (70% 단축!)
```

### 품질 향상

- ✅ 각 Role의 전문성 집중
- ✅ 명확한 책임 분리
- ✅ 독립적인 검증

---

## 🔗 관련 문서

- [4교시: Multi-Agent & Worktree](./README.md)
- [Git Worktree 문서](https://git-scm.com/docs/git-worktree)
- [Cursor Rules 문서](https://cursor.com/docs/context/rules)

---

**1개 Agent = 1개 Role, Worktree로 격리!** 🚀

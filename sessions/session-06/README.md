# 6교시: 마크업 품질 자동화 - 완벽한 마무리

## 📋 목차

- [1-5교시 복습](#1-5교시-복습)
- [마크업 품질의 중요성](#마크업-품질의-중요성)
- [품질 검증 자동화](#품질-검증-자동화)
- [테마 & 컴포넌트 관리](#테마--컴포넌트-관리)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 1-5교시 복습

### 전체 여정

```
1교시: Hooks (Agent 제어)
  → Copilot에 없는 기능!

2교시: Debug Mode, Visual Editor, Agent Skills
  → 추측 → 확인, 설명 → 클릭

3교시: CLI Agent, Shell Mode
  → IDE를 넘어 터미널로

4교시: Multi-Agent & Worktree
  → 여러 Agent 동시 실행

5교시: 반복 작업 자동화
  → 검사 시간 57% 단축
```

### 마지막 교시

```
6교시: 마크업 품질 자동화
  → 프론트엔드/마크업 개발자를 위한 마무리
  → 실무에서 바로 적용 가능
```

---

## 🎨 마크업 품질의 중요성

### 마크업 개발자의 고민

**매번 체크해야 하는 것들**:
```
HTML:
- 시맨틱 태그 적절성
- 접근성 속성 완전성
- SEO 메타 태그

CSS:
- 구조 및 조직
- 성능 최적화
- 네이밍 컨벤션
- 반응형 디자인
```

### 순차 검증의 고통

```
HTML 시맨틱 검사 (10분)
  ↓
접근성 검증 (10분)
  ↓
SEO 검증 (10분)
  ↓
CSS 품질 검사 (15분)

총 45분... 매번!
```

### 해결책

```
5교시에서 배운 병렬 처리!

4가지 검증 동시 실행
→ 45분 → 18분
→ 60% 시간 절약!
```

---

## ⚡ 품질 검증 자동화

### HTML 품질 검증

**시맨틱 검사**:
```
- <header>, <main>, <footer> 적절성
- <article>, <section> 구분
- <nav>, <aside> 활용
- 제목 계층 (h1-h6)
```

**접근성 검증**:
```
- ARIA 속성 완전성
- 대체 텍스트 (alt)
- 키보드 접근성
- 색상 대비 (4.5:1)
```

**SEO 검증**:
```
- 메타 태그 완전성
- Open Graph 태그
- 구조화된 데이터
- 표준 URL
```

### CSS 품질 검증

**구조 검사**:
```
- 선택자 복잡도
- 중복 스타일
- 사용되지 않는 스타일
- 조직 구조
```

**성능 검사**:
```
- 번들 크기
- 렌더링 성능
- 애니메이션 최적화
- 미디어 쿼리 효율성
```

**네이밍 검사**:
```
- BEM 컨벤션
- 일관성
- 의미있는 이름
- 네임스페이스
```

### 병렬 검증 구현

```bash
# 4개 Worktree
git worktree add ../check-semantic main
git worktree add ../check-a11y main
git worktree add ../check-seo main
git worktree add ../check-css main

# 동시 실행
cd ../check-semantic && cursor-agent  # "HTML 시맨틱 검사해줘"
cd ../check-a11y && cursor-agent      # "접근성 검증해줘"
cd ../check-seo && cursor-agent       # "SEO 검사해줘"
cd ../check-css && cursor-agent       # "CSS 품질 검사해줘"

# 45분 → 18분 (60% 절약!)
```

---

## 🎭 테마 & 컴포넌트 관리

### 다중 테마 검증

**문제**:
```
라이트 테마 검증
  ↓
다크 테마 검증
  ↓
고대비 테마 검증

순차: 30분
```

**해결**:
```bash
# 테마별 Worktree
git worktree add ../theme-light main
git worktree add ../theme-dark main
git worktree add ../theme-contrast main

# 동시 검증
# 30분 → 12분 (60% 절약!)
```

### 컴포넌트 라이브러리 관리

**검증 항목**:
```
- 컴포넌트 품질
- 디자인 시스템 준수
- 아이콘 시스템
- 타이포그래피
- 간격 시스템
- 애니메이션
```

**병렬 처리**:
```bash
# 영역별 Worktree
git worktree add ../check-components main
git worktree add ../check-icons main
git worktree add ../check-typography main
git worktree add ../check-spacing main

# 동시 검증
```

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] HTML/CSS 품질 자동 검증
- [ ] 다중 테마 병렬 검증
- [ ] 컴포넌트 라이브러리 관리
- [ ] 검증 시간 60% 단축

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: HTML/CSS 품질 검증](./projects/01-html-css-quality/README.md)
**목표**: HTML/CSS 품질 병렬 검증

**시나리오**:
- HTML 시맨틱 + 접근성 + SEO + CSS 품질
- 순차: 45분 → 병렬: 18분

**배울 것**:
- 4개 Worktree 생성
- 각 영역 독립 검증
- 이슈 수집 및 통합

**깨달음**: "마크업 품질 검증이 이렇게 빨라지다니!"

**소요 시간**: 15분

---

### [Project 2: 테마 검증](./projects/02-theme-validation/README.md)
**목표**: 다중 테마 병렬 검증

**시나리오**:
- 라이트 / 다크 / 고대비 테마
- 각 테마별 일관성 체크

**배울 것**:
- 3개 Worktree 생성
- 테마별 검증
- 일관성 확인

**깨달음**: "테마 검증도 60% 빨라지네!"

**소요 시간**: 15분

---

### [Project 3: 컴포넌트 라이브러리](./projects/03-component-library/README.md)
**목표**: 컴포넌트 라이브러리 품질 관리

**시나리오**:
- 컴포넌트 품질 검증
- 디자인 시스템 준수 확인

**배울 것**:
- 컴포넌트별 검증
- 디자인 시스템 체크
- 문서화 상태 확인

**깨달음**: "컴포넌트 관리가 체계적으로 되네!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 개념 이해 (10분)

이 README를 읽으면서:
1. 마크업 품질의 중요성 이해
2. 병렬 검증의 효과 확인
3. 테마/컴포넌트 관리 파악

### Step 2: 품질 검증 (15분)

1. **[Project 1: HTML/CSS 품질](./projects/01-html-css-quality/README.md)** (15분)
   - "60% 시간 절약!"

### Step 3: 심화 실습 (35분)

1. **[Project 2: 테마 검증](./projects/02-theme-validation/README.md)** (15분)
   - "테마 검증도 빨라!"

2. **[Project 3: 컴포넌트](./projects/03-component-library/README.md)** (20분)
   - "체계적인 관리!"

### Step 4: 복습 (10분)

- [ ] HTML/CSS 품질 검증 가능?
- [ ] 테마 검증 자동화 가능?
- [ ] 컴포넌트 관리 체계화?

---

## 💡 핵심 깨달음

### 6교시에서 배운 것

```
마크업 품질 자동화:
- HTML/CSS 품질 병렬 검증
- 다중 테마 검증
- 컴포넌트 라이브러리 관리

시간 절약:
- HTML/CSS: 45분 → 18분 (60%)
- 테마: 30분 → 12분 (60%)
- 컴포넌트: 40분 → 15분 (62%)
```

### 전체 여정 정리

```
1교시: Hooks → Agent 제어
2교시: Debug/Visual → 정확한 작업
3교시: CLI → IDE 탈피
4교시: Multi-Agent → 병렬 작업
5교시: 반복 자동화 → 시간 절약
6교시: 품질 자동화 → 완벽한 마무리
```

---

## 🎉 강의 완료!

### 축하합니다!

6교시를 모두 완료했습니다.

### 이제 할 수 있는 것

```
✅ Hooks로 Agent 완벽 제어
✅ Debug Mode로 버그 즉시 해결
✅ Visual Editor로 UI 직접 수정
✅ CLI Agent로 터미널 작업
✅ Shell Mode로 명령어 자동 생성
✅ Multi-Agent로 병렬 작업
✅ 반복 작업 57% 시간 절약
✅ 품질 검증 60% 시간 절약
```

### 전체 시간 절약

| 영역 | 기존 | 개선 | 절감 |
|------|------|------|------|
| 리뷰 시간 | 15분 | 3분 | 70% |
| 반복 검사 | 35분 | 15분 | 57% |
| 품질 검증 | 45분 | 18분 | 60% |

### 다음 단계

```
1. 실무에 적용
2. 커스텀 Hooks 작성
3. 자동화 스크립트 확장
4. 팀에 공유

Cursor Master가 되셨습니다! 🚀
```

---

## 🔗 빠른 링크

- [Project 1: HTML/CSS 품질 검증](./projects/01-html-css-quality/README.md)
- [Project 2: 테마 검증](./projects/02-theme-validation/README.md)
- [Project 3: 컴포넌트 라이브러리](./projects/03-component-library/README.md)

---

## 📚 전체 커리큘럼

- [1교시: Rules & Hooks](../session-01/README.md)
- [2교시: Debug Mode & Visual Editor](../session-02/README.md)
- [3교시: CLI Agent & Shell Mode](../session-03/README.md)
- [4교시: Multi-Agent & Worktree](../session-04/README.md)
- [5교시: 반복 작업 자동화](../session-05/README.md)
- [6교시: 마크업 품질 자동화](../session-06/README.md) (현재)

---

**Cursor 마스터 클래스를 완료하신 것을 축하합니다!** 🎉

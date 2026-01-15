# 6교시: 마크업 품질 자동화

> **추가 강의 2: "품질 검증도 빠르게"**

## 📋 목차

- [지난 시간 복습](#지난-시간-복습)
- [1장: 마크업 품질의 고민](#1장-마크업-품질의-고민)
- [2장: 품질 검증 자동화](#2장-품질-검증-자동화)
- [실습 프로젝트](#실습-프로젝트)
- [전체 여정 마무리](#전체-여정-마무리)

---

## 📚 지난 시간 복습

### 전체 여정

```
정규 강의 (1-4교시):
  1교시: Hooks → Agent 제어
  2교시: Debug & Visual → 정확한 작업
  3교시: CLI Agent → IDE 탈피
  4교시: Multi-Agent → 병렬 작업

추가 강의 (5교시):
  5교시: 반복 작업 자동화 → 57% 시간 절약
```

### 5교시의 핵심

```
Multi-Agent를 실무에 적용했다.
반복 검사를 병렬로 처리했다.
35분 → 15분 (57% 절약)

"마크업 품질 검증에도 적용할 수 있겠다!"
```

---

## 📖 1장: 마크업 품질의 고민

### 마크업 개발자의 일상

```
코드를 완성했다.
이제 품질 검증이다.

HTML:
- 시맨틱 태그 적절성
- 접근성 속성 완전성
- SEO 메타 태그

CSS:
- 구조 및 조직
- 성능 최적화
- 네이밍 컨벤션

"하나씩 체크하면 45분..."
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

"5교시에서 배운 것처럼 병렬로 하면?"
```

---

## 📖 2장: 품질 검증 자동화

### 병렬 검증 적용

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

### 테마 검증에도 적용

```bash
# 테마별 Worktree
git worktree add ../theme-light main
git worktree add ../theme-dark main
git worktree add ../theme-contrast main

# 동시 검증
# 30분 → 12분 (60% 절약!)
```

### 컴포넌트 라이브러리도

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

**상황**:
```
"HTML/CSS 품질을 한 번에 검증하자."
시맨틱 + 접근성 + SEO + CSS 품질
```

**배울 것**:
- 4개 Worktree 생성
- 각 영역 독립 검증
- 이슈 수집 및 통합

**깨달음**: "마크업 품질 검증이 이렇게 빨라지다니!"

**소요 시간**: 15분

---

### [Project 2: 테마 검증](./projects/02-theme-validation/README.md)

**상황**:
```
"다중 테마도 동시에 검증하자."
라이트 / 다크 / 고대비
```

**배울 것**:
- 3개 Worktree 생성
- 테마별 검증
- 일관성 확인

**깨달음**: "테마 검증도 60% 빨라지네!"

**소요 시간**: 15분

---

### [Project 3: 컴포넌트 라이브러리](./projects/03-component-library/README.md)

**상황**:
```
"컴포넌트 라이브러리도 체계적으로 관리하자."
품질 + 디자인 시스템 준수
```

**배울 것**:
- 컴포넌트별 검증
- 디자인 시스템 체크
- 문서화 상태 확인

**깨달음**: "컴포넌트 관리가 체계적으로 되네!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 스토리 이해 (10분)

이 README를 읽으면서:
1. 마크업 품질 검증의 고통 공감
2. 병렬 처리 적용 방법 이해

### Step 2: 실습 (50분)

1. **[Project 1: HTML/CSS 품질](./projects/01-html-css-quality/README.md)** (15분)
2. **[Project 2: 테마 검증](./projects/02-theme-validation/README.md)** (15분)
3. **[Project 3: 컴포넌트](./projects/03-component-library/README.md)** (20분)

---

## 🎉 전체 여정 마무리

### 6교시에서 배운 것

```
마크업 품질 검증에 병렬 처리 적용:
- HTML/CSS: 45분 → 18분 (60%)
- 테마: 30분 → 12분 (60%)
- 컴포넌트: 40분 → 15분 (62%)

"실무에 바로 적용할 수 있다!"
```

### 전체 여정 정리

```
프롤로그:
  "Copilot을 쓰는데 AI가 말을 안 들어..."
  "더 좋은 방법이 없을까?"

1교시 (Hooks):
  "어? Copilot이랑 똑같은데..."
  "잠깐, Hooks? 이건 뭐지!"
  → Agent 제어 가능!

2교시 (Debug & Visual):
  "Hooks 말고도 더 있어?"
  → 추측 대신 확인!
  → 설명 대신 클릭!

3교시 (CLI Agent):
  "IDE 없이도 돼?"
  → 터미널에서 전체 개발!

4교시 (Multi-Agent):
  "여러 개를 동시에?"
  → 의사결정 3배 빠름!

5교시 (반복 자동화):
  "이걸 실무에 어떻게?"
  → 검사 시간 57% 절약!

6교시 (품질 자동화):
  "마크업 품질도?"
  → 검증 시간 60% 절약!

에필로그:
  "Cursor Master가 됐다!"
```

### 이제 할 수 있는 것

```
✅ Hooks로 Agent 완벽 제어
✅ Debug Mode로 버그 즉시 해결
✅ Visual Editor로 UI 직접 수정
✅ CLI Agent로 터미널 작업
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

## 📚 전체 커리큘럼

### 정규 강의
- [1교시: Hooks - Agent 제어](../session-01/README.md)
- [2교시: Debug & Visual - 정확한 작업](../session-02/README.md)
- [3교시: CLI Agent - IDE 탈피](../session-03/README.md)
- [4교시: Multi-Agent - 병렬 작업](../session-04/README.md)

### 추가 강의
- [5교시: 반복 자동화](../session-05/README.md)
- [6교시: 품질 자동화](../session-06/README.md) (현재)

### 보너스
- [Nightly 기능 - 미래를 엿보다](../BONUS_NIGHTLY_FEATURES.md)

---

## 🔗 빠른 링크

- [Project 1: HTML/CSS 품질 검증](./projects/01-html-css-quality/README.md)
- [Project 2: 테마 검증](./projects/02-theme-validation/README.md)
- [Project 3: 컴포넌트 라이브러리](./projects/03-component-library/README.md)

---

**Cursor 마스터 클래스를 완료하신 것을 축하합니다!** 🎉

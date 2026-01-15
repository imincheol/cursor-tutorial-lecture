# 5교시: 반복 작업 자동화

> **추가 강의 1: "반복 작업을 줄이고 싶어"**

## 📋 목차

- [정규 강의 복습](#정규-강의-복습)
- [1장: 반복의 고통](#1장-반복의-고통)
- [2장: 병렬 처리 적용](#2장-병렬-처리-적용)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 정규 강의 복습

### 4교시까지의 여정

```
1교시: Hooks → Agent 제어
2교시: Debug & Visual → 정확한 작업
3교시: CLI Agent → IDE 탈피
4교시: Multi-Agent → 병렬 작업

"Cursor의 핵심을 다 배웠다!"
```

### 4교시의 핵심

```
Multi-Agent:
- Worktree로 독립 환경
- 여러 Agent 동시 실행
- 의사결정 3배 빠름

"이걸 실무에 어떻게 적용하지?"
```

---

## 📖 1장: 반복의 고통

### 프론트엔드 개발의 현실

```
코드를 완성했다.
이제 검토해야 한다.

1. 접근성 검사 (10분)
2. 브라우저 호환성 (10분)
3. 성능 최적화 (10분)
4. 디자인 시스템 준수 (5분)

총 35분.
매번.
```

### 순차 처리의 문제

```
검사 1 시작 → 완료 (10분)
  ↓
검사 2 시작 → 완료 (10분)
  ↓
검사 3 시작 → 완료 (10분)
  ↓
검사 4 시작 → 완료 (5분)

총 35분

매일 3번이면? 105분/일
매주 5일이면? 8.75시간/주!

"이 시간을 줄일 수는 없나?"
```

### 깨달음

```
"잠깐, 4교시에서 배운 거..."
"Multi-Agent로 병렬 작업이 가능했잖아?"
"검사도 동시에 돌리면 되지 않나?"
```

---

## 📖 2장: 병렬 처리 적용

### Multi-Agent 활용

```
기존 (순차):
검사 1 → 검사 2 → 검사 3 → 검사 4
총 35분

개선 (병렬):
검사 1 ┐
검사 2 ├─ 동시 진행
검사 3 │
검사 4 ┘
총 15분 (가장 긴 검사 시간)

57% 시간 절약!
```

### 구현 방법

```bash
# Worktree 생성
git worktree add ../check-a11y main       # 접근성
git worktree add ../check-compat main     # 호환성
git worktree add ../check-perf main       # 성능
git worktree add ../check-design main     # 디자인

# 각 터미널에서 동시 실행
cd ../check-a11y && cursor-agent     # "접근성 검사해줘"
cd ../check-compat && cursor-agent   # "브라우저 호환성 검사해줘"
cd ../check-perf && cursor-agent     # "성능 검사해줘"
cd ../check-design && cursor-agent   # "디자인 시스템 검사해줘"

# 결과 수집
```

### 다양한 적용

**반응형 검증**:
```bash
# 3개 Worktree
git worktree add ../check-mobile main
git worktree add ../check-tablet main
git worktree add ../check-desktop main

# 순차: 25분 → 병렬: 10분 (60% 절약)
```

**다국어 검증**:
```bash
# 언어별 Worktree
git worktree add ../check-ko main
git worktree add ../check-en main
git worktree add ../check-ja main

# 순차: 30분 → 병렬: 12분 (60% 절약)
```

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] 반복 작업을 Worktree로 분리
- [ ] 여러 검사를 병렬 처리
- [ ] 검토 시간 57% 단축

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: 병렬 검사](./projects/01-parallel-checks/README.md)

**상황**:
```
"4가지 검사를 동시에 돌려보자."
접근성 + 호환성 + 성능 + 디자인
```

**배울 것**:
- 4개 Worktree 생성
- 각각 독립적인 검사
- 결과 수집 및 통합

**깨달음**: "57% 시간 절약! 이게 진짜 자동화구나!"

**소요 시간**: 15분

---

### [Project 2: 반응형 검증](./projects/02-responsive-validation/README.md)

**상황**:
```
"반응형 디자인 검증도 병렬로 해보자."
모바일 / 태블릿 / 데스크톱
```

**배울 것**:
- 3개 Worktree 생성
- 화면 크기별 검증
- 레이아웃 이슈 수집

**깨달음**: "반응형 검증도 60% 빨라지네!"

**소요 시간**: 15분

---

### [Project 3: 성능 최적화](./projects/03-performance-optimization/README.md)

**상황**:
```
"성능 최적화도 여러 영역을 동시에."
번들 + 이미지 + 코드 스플리팅 + 캐싱
```

**배울 것**:
- 4가지 최적화 동시 진행
- 결과 통합
- 성능 향상 측정

**깨달음**: "최적화도 병렬로 하면 빠르네!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 스토리 이해 (10분)

이 README를 읽으면서:
1. 반복 작업의 고통 공감
2. 병렬 처리의 적용 방법 이해

### Step 2: 실습 (50분)

1. **[Project 1: 병렬 검사](./projects/01-parallel-checks/README.md)** (15분)
2. **[Project 2: 반응형 검증](./projects/02-responsive-validation/README.md)** (15분)
3. **[Project 3: 성능 최적화](./projects/03-performance-optimization/README.md)** (20분)

---

## 💡 에필로그

### 5교시에서 배운 것

```
4교시의 Multi-Agent를 실무에 적용했다.

반복 검사 작업:
- 순차: 35분
- 병렬: 15분
- 57% 시간 절약!

"Multi-Agent의 실전 활용법을 알게 됐다!"
```

### 시간 절약 효과

| 작업 | 순차 | 병렬 | 절감 |
|------|------|------|------|
| 4가지 검사 | 35분 | 15분 | 57% |
| 반응형 검증 | 25분 | 10분 | 60% |
| 성능 최적화 | 40분 | 15분 | 62% |

---

## ⏭ 다음 교시

[6교시: 마크업 품질 자동화](../session-06/README.md)

---

## 🔗 빠른 링크

- [Project 1: 병렬 검사](./projects/01-parallel-checks/README.md)
- [Project 2: 반응형 검증](./projects/02-responsive-validation/README.md)
- [Project 3: 성능 최적화](./projects/03-performance-optimization/README.md)

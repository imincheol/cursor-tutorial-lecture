# 5교시: 반복 작업 자동화 - 시간을 아끼자

## 📋 목차

- [1-4교시 복습](#1-4교시-복습)
- [반복 작업의 고통](#반복-작업의-고통)
- [병렬 처리로 해결](#병렬-처리로-해결)
- [실전 자동화 시나리오](#실전-자동화-시나리오)
- [실습 프로젝트](#실습-프로젝트)

---

## 📚 1-4교시 복습

### 배운 것

```
1교시: Hooks (Agent 제어)
2교시: Debug Mode, Visual Editor, Agent Skills
3교시: CLI Agent, Shell Mode
4교시: Multi-Agent & Worktree
```

### 지금까지...

```
Multi-Agent를 배웠다!

Worktree로 분리
→ 여러 Agent 동시 실행
→ 독립적인 컨텍스트
→ 병렬 작업 가능

질문: "이걸 어디에 써먹지?"
```

---

## 😫 반복 작업의 고통

### 프론트엔드 개발의 현실

**매번 해야 하는 검토 작업**:
```
코드 완성 후:
1. 접근성 검사 (10분)
2. 브라우저 호환성 (10분)
3. 성능 최적화 (10분)
4. 디자인 시스템 준수 (5분)

총 35분... 매번!
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
매주 5일이면? 525분/주 = 8.75시간/주!
```

### 문제점

```
- 시간 낭비
- 지루함
- 실수 가능성
- 일관성 부족
```

---

## ⚡ 병렬 처리로 해결

### Multi-Agent 활용

**4교시에서 배운 것 적용!**

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

---

## 🎯 실전 자동화 시나리오

### 시나리오 1: 4가지 검사 병렬 처리

**접근성 검사**:
```
- ARIA 속성 검증
- 키보드 네비게이션
- 스크린 리더 호환성
- 색상 대비
```

**브라우저 호환성**:
```
- Chrome 테스트
- Firefox 테스트
- Safari 테스트
- Edge 테스트
```

**성능 최적화**:
```
- 번들 크기 분석
- 렌더링 성능
- 메모리 사용량
- 네트워크 요청
```

**디자인 시스템**:
```
- 색상 팔레트 준수
- 타이포그래피 준수
- 간격 시스템 준수
- 컴포넌트 일관성
```

### 시나리오 2: 반응형 검증

```bash
# 3개 Worktree
git worktree add ../check-mobile main
git worktree add ../check-tablet main
git worktree add ../check-desktop main

# 동시 검증
cd ../check-mobile && cursor-agent   # "모바일 뷰 검증해줘"
cd ../check-tablet && cursor-agent   # "태블릿 뷰 검증해줘"
cd ../check-desktop && cursor-agent  # "데스크톱 뷰 검증해줘"
```

**효과**:
```
순차: 25분
병렬: 10분
절약: 60%
```

### 시나리오 3: 다국어 검증

```bash
# 언어별 Worktree
git worktree add ../check-ko main
git worktree add ../check-en main
git worktree add ../check-ja main

# 동시 검증
cd ../check-ko && cursor-agent   # "한국어 레이아웃 검증해줘"
cd ../check-en && cursor-agent   # "영어 레이아웃 검증해줘"
cd ../check-ja && cursor-agent   # "일본어 레이아웃 검증해줘"
```

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] 반복 작업을 Worktree로 분리
- [ ] 여러 검사를 병렬 처리
- [ ] 자동화 스크립트 작성
- [ ] 검토 시간 57% 단축

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: 병렬 검사](./projects/01-parallel-checks/README.md)
**목표**: 4가지 검사를 병렬로 실행

**시나리오**:
- 접근성 + 호환성 + 성능 + 디자인
- 순차: 35분 → 병렬: 15분

**배울 것**:
- 4개 Worktree 생성
- 각각 독립적인 검사
- 결과 수집 및 통합

**깨달음**: "57% 시간 절약! 이게 진짜 자동화구나!"

**소요 시간**: 15분

---

### [Project 2: 반응형 검증](./projects/02-responsive-validation/README.md)
**목표**: 반응형 디자인 병렬 검증

**시나리오**:
- 모바일 / 태블릿 / 데스크톱
- 각 화면 크기별 검증

**배울 것**:
- 3개 Worktree 생성
- 화면 크기별 검증
- 레이아웃 이슈 수집

**깨달음**: "반응형 검증도 60% 빨라지네!"

**소요 시간**: 15분

---

### [Project 3: 성능 최적화](./projects/03-performance-optimization/README.md)
**목표**: 성능 최적화 병렬 처리

**시나리오**:
- 번들 최적화 + 이미지 최적화
- 코드 스플리팅 + 캐싱 전략

**배울 것**:
- 4가지 최적화 동시 진행
- 결과 통합
- 성능 향상 측정

**깨달음**: "최적화도 병렬로 하면 빠르네!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 개념 이해 (10분)

이 README를 읽으면서:
1. 반복 작업의 고통 공감
2. 병렬 처리의 효과 이해
3. 실전 시나리오 파악

### Step 2: 병렬 검사 (15분)

1. **[Project 1: 병렬 검사](./projects/01-parallel-checks/README.md)** (15분)
   - "57% 시간 절약!"

### Step 3: 심화 실습 (35분)

1. **[Project 2: 반응형 검증](./projects/02-responsive-validation/README.md)** (15분)
   - "반응형도 60% 빨라!"

2. **[Project 3: 성능 최적화](./projects/03-performance-optimization/README.md)** (20분)
   - "최적화도 병렬로!"

### Step 4: 복습 (10분)

- [ ] Worktree로 검사 분리 가능?
- [ ] 병렬 처리 효과 체감?
- [ ] 자동화 스크립트 이해?

---

## 💡 핵심 깨달음

### 5교시에서 배운 것

```
반복 작업 자동화:
- Multi-Agent로 병렬 처리
- Worktree로 환경 분리
- 검사 시간 57% 단축

실전 적용:
- 접근성/호환성/성능/디자인 검사
- 반응형 검증
- 다국어 검증
```

### 시간 절약 효과

| 작업 | 순차 | 병렬 | 절감 |
|------|------|------|------|
| 4가지 검사 | 35분 | 15분 | 57% |
| 반응형 검증 | 25분 | 10분 | 60% |
| 성능 최적화 | 40분 | 15분 | 62% |

---

## ⏭ 다음 교시

[6교시: 마크업 품질 자동화 - 완벽한 마무리](../session-06/README.md)

**5교시를 완료하면 반복 작업에서 해방됩니다!** 🎉

---

## 🔗 빠른 링크

- [Project 1: 병렬 검사](./projects/01-parallel-checks/README.md)
- [Project 2: 반응형 검증](./projects/02-responsive-validation/README.md)
- [Project 3: 성능 최적화](./projects/03-performance-optimization/README.md)

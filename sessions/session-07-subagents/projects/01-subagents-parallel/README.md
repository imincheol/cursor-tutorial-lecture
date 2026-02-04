# Project 2: Subagent로 병렬 작업

> **메인 Agent가 여러 Subagent를 생성하여 작업을 자동으로 분산합니다**

## 📝 실습 개요

이 실습에서는:
1. Subagent 개념 이해
2. Plan 모드에서 Subagent 활용
3. Clarification Questions 체험
4. 병렬 작업 패턴 익히기
5. 결과 자동 통합 체험

**공식 문서**:
- [Subagents](https://cursor.com/docs/context/subagents)
- [Clarification Questions (2026.01.22)](https://cursor.com/changelog)

---

## 🎯 실습 목표

- Subagent 생성 및 관리 방법 이해
- 병렬 작업의 효율성 체험
- 자동 오케스트레이션 이해
- 수동 Multi-Agent와의 차이점 파악

---

## 📚 실습 단계

### 1단계: Subagent 기본 체험

#### 1-1. 간단한 작업 분산

**Plan 모드에서 요청**:
```
간단한 계산기 앱을 만들어줘.
다음 기능이 필요해:
1. 덧셈, 뺄셈, 곱셈, 나눗셈
2. 각 연산마다 별도 함수
3. 각 함수마다 테스트 코드
4. README 문서
```

**관찰 포인트**:
- Agent가 작업을 어떻게 분산하는가?
- Subagent가 몇 개 생성되는가?
- 각 Subagent가 어떤 작업을 수행하는가?

**예상 Subagent 구성**:
```
메인 Agent
  │
  ├─ Subagent 1: 계산기 함수 작성
  ├─ Subagent 2: 테스트 코드 작성
  └─ Subagent 3: README 문서 작성
```

---

### 2단계: Clarification Questions 체험

#### 2-1. Agent가 질문하는 패턴

**Plan 모드에서 요청**:
```
사용자 관리 시스템 만들어줘
```

**Agent의 질문 (예상)**:
```
Agent: 질문이 있습니다:

       1. 인증 방식은 어떻게 할까요?
          □ JWT
          □ Session
          □ OAuth

       2. 사용자 역할(Role)이 필요한가요?
          □ 네 (Admin/User)
          □ 아니요

       3. 이메일 인증이 필요한가요?
          □ 네
          □ 아니요

You: 1. JWT
     2. 네, Admin/User
     3. 네

Agent: [명확한 계획 수립]
       [Subagent 생성 및 작업 분산]
```

**관찰 포인트**:
- Agent가 불명확한 부분을 질문하는가?
- 질문이 명확하고 구체적인가?
- 답변 후 작업이 정확하게 진행되는가?

---

### 3단계: 복잡한 작업 분산

#### 3-1. TODO 앱 개발

**Plan 모드에서 요청**:
```
간단한 TODO 앱을 만들어줘.

요구사항:
1. HTML/CSS/JavaScript로 구현
2. 기능:
   - TODO 추가
   - TODO 완료 표시
   - TODO 삭제
   - 로컬 스토리지에 저장
3. 반응형 디자인
4. 테스트 코드
5. README 문서
```

**Agent의 질문 (예상)**:
```
Agent: 질문이 있습니다:
       
       1. CSS 프레임워크를 사용할까요?
          □ Tailwind CSS
          □ Bootstrap
          □ 순수 CSS

       2. 테스트 프레임워크는?
          □ Jest
          □ Vitest
          □ 기타

You: 1. 순수 CSS
     2. Jest

Agent: [작업 시작]
```

**예상 Subagent 구성**:
```
메인 Agent
  │
  ├─ Subagent 1: HTML 구조 작성
  ├─ Subagent 2: CSS 스타일링
  ├─ Subagent 3: JavaScript 로직
  ├─ Subagent 4: 로컬 스토리지 연동
  ├─ Subagent 5: 테스트 코드
  └─ Subagent 6: README 문서
```

**관찰 포인트**:
- 각 Subagent가 독립적으로 작업하는가?
- 결과가 자동으로 통합되는가?
- 충돌이 발생하면 어떻게 해결하는가?

---

### 4단계: Subagent vs 수동 Multi-Agent 비교

#### 3-1. 수동 Multi-Agent 방식 (8장)

```
수동 방식:
1. Worktree로 환경 분리
2. 각 터미널에서 CLI Agent 실행
3. 각각 작업 지시
4. 결과 수동 수집
5. 결과 수동 통합
```

**소요 시간**: 약 30-60분

#### 3-2. Subagent 방식 (자동)

```
자동 방식:
1. Plan 모드에서 요청
2. Agent가 자동으로 Subagent 생성
3. Agent가 자동으로 작업 분배
4. Agent가 자동으로 결과 통합
```

**소요 시간**: 약 5-10분

#### 비교표

| 항목 | 수동 Multi-Agent | Subagents |
|-----|-----------------|-----------|
| 환경 구성 | 수동 (Worktree) | 자동 |
| Agent 생성 | 수동 (CLI) | 자동 |
| 작업 분배 | 수동 | 자동 |
| 결과 통합 | 수동 | 자동 |
| 소요 시간 | 30-60분 | 5-10분 |
| 학습 곡선 | 높음 | 낮음 |

---

### 5단계: 실전 시나리오

#### 4-1. 신규 기능 추가

**시나리오**: 기존 프로젝트에 로그인 기능 추가

**Plan 모드에서 요청**:
```
이 프로젝트에 로그인 기능을 추가해줘.

요구사항:
1. 로그인 페이지 (HTML/CSS)
2. 인증 로직 (JavaScript)
3. 세션 관리 (로컬 스토리지)
4. 로그인 상태에 따른 UI 변경
5. 테스트 코드
```

**관찰 포인트**:
- 기존 코드와의 통합이 자연스러운가?
- 충돌이 발생하는가?
- 코드 품질이 일관적인가?

#### 4-2. 리팩토링

**시나리오**: 레거시 코드를 모던 JavaScript로 변환

**Plan 모드에서 요청**:
```
이 프로젝트를 ES6+ 문법으로 리팩토링해줘.

변경 사항:
1. var → const/let
2. function → 화살표 함수
3. 콜백 → Promise/async-await
4. 모듈화 (import/export)
5. 테스트 코드 업데이트
```

**관찰 포인트**:
- 모든 파일이 일관되게 변환되는가?
- 기능이 유지되는가?
- 테스트가 통과하는가?

---

## ✅ 실습 체크리스트

### 기본 개념
- [ ] Subagent 개념 이해
- [ ] Plan 모드에서 Subagent 활용
- [ ] Clarification Questions 체험
- [ ] 자동 오케스트레이션 체험

### 실습 완료
- [ ] 계산기 앱 (Subagent 기본)
- [ ] 사용자 관리 시스템 (Clarification Questions)
- [ ] TODO 앱 (복잡한 작업 분산)
- [ ] 수동 vs 자동 비교
- [ ] 신규 기능 추가 (로그인)
- [ ] 리팩토링 (ES6+ 변환)

### 심화 이해
- [ ] Subagent 생성 패턴 파악
- [ ] 작업 분배 전략 이해
- [ ] 결과 통합 방식 이해
- [ ] 충돌 해결 방법 이해

---

## 💡 학습 포인트

### Subagents의 장점

1. **자동화**: 수동 작업 없이 자동으로 분산
2. **효율성**: 병렬 작업으로 시간 단축
3. **일관성**: Agent가 자동으로 통합하여 일관된 결과
4. **간편함**: 복잡한 설정 없이 바로 사용

### 언제 Subagents를 사용하는가?

**적합한 경우**:
- 복잡한 기능 개발 (여러 파일 수정)
- 신규 프로젝트 시작 (여러 컴포넌트 생성)
- 대규모 리팩토링 (모든 파일 변환)
- 문서화 작업 (코드 + 테스트 + 문서)

**부적합한 경우**:
- 간단한 수정 (한 줄 변경)
- 실험적 작업 (여러 접근 방법 시도 → Worktree 사용)
- 정밀한 제어 필요 (수동 Multi-Agent 사용)

### Plan 모드의 중요성

```
Agent 모드:
- 즉시 실행
- Subagent 생성 어려움

Plan 모드:
- 사전 계획
- Subagent 자동 생성 ✅
- 검토 후 실행
```

**팁**: Subagents를 활용하려면 **Plan 모드**를 사용하세요!

---

## 🎓 학습 정리

이 실습을 통해:

- ✅ Subagent 개념을 이해했습니다
- ✅ Plan 모드에서 Subagent를 활용했습니다
- ✅ 병렬 작업의 효율성을 체험했습니다
- ✅ 자동 오케스트레이션을 경험했습니다
- ✅ 수동 Multi-Agent와의 차이를 파악했습니다

### 수동 vs 자동 선택 가이드

```
수동 Multi-Agent (8장):
- 여러 접근 방법 실험
- 정밀한 제어 필요
- 독립적인 환경 필요

Subagents (6장):
- 복잡한 기능 개발
- 빠른 프로토타이핑
- 자동 통합 필요
```

**다음 장 예고**:

8장에서는 Git Worktree와 Multi-Agent를 배웁니다. 독립적인 작업 환경을 구성하여 여러 접근 방법을 동시에 실험하는 방법을 익힙니다.

---

## 🔗 관련 자료

- [Cursor Subagents 공식 문서](https://cursor.com/docs/context/subagents)
- [7장 메인 문서](../../README.md)
- [8장: Multi-Agent](../../../session-08-multiagent/README.md)

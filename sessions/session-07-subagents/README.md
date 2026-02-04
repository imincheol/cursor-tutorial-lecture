# 7장: Subagents - 자동 오케스트레이션

> **Agent가 복잡한 작업을 자동으로 분배합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Subagents란?](#1부-subagents란)
- [2부: Clarification Questions](#2부-clarification-questions)
- [3부: 실전 활용](#3부-실전-활용)

---

## 📝 강의 개요

안녕하세요. 이번 장에서는 **Subagents**를 배웁니다.

복잡한 작업을 요청하면 Agent가 자동으로 여러 하위 에이전트(Subagent)를 생성하여 병렬로 처리합니다. 또한 **Clarification Questions**를 통해 Agent가 불명확한 부분을 질문합니다.

**학습 목표**:

- Subagents의 개념과 동작 방식 이해
- 자동 오케스트레이션 원리
- Clarification Questions 활용
- 복잡한 작업의 효율적 처리

**공식 문서**:
- [Subagents](https://cursor.com/docs/context/subagents) - Subagents 개요
- [Clarification Questions](https://cursor.com/docs/agent/clarification) - 질문 기능

---

## 1부: Subagents란?

### Subagents의 개념

Subagents는 메인 Agent가 **복잡한 작업을 분해**하여 여러 하위 에이전트에게 분배하는 기능입니다.

```
사용자: "이 프로젝트에 인증 시스템을 추가해줘"

메인 Agent:
  └─ Subagent 1: 사용자 모델 설계
  └─ Subagent 2: 로그인/회원가입 API 구현
  └─ Subagent 3: JWT 토큰 처리
  └─ Subagent 4: 프론트엔드 폼 구현
  └─ Subagent 5: 테스트 코드 작성
```

### 자동 오케스트레이션

사용자가 명시적으로 분배하지 않아도, Agent가 **자동으로 판단**하여 작업을 분할합니다.

**동작 방식**:
1. 사용자 요청 분석
2. 작업 분해 (Task Decomposition)
3. Subagent 생성 및 할당
4. 병렬 실행
5. 결과 통합

### Subagents vs 일반 Agent

| 항목 | 일반 Agent | Subagents |
|------|-----------|-----------|
| 처리 방식 | 순차적 | 병렬 |
| 복잡한 작업 | 시간 오래 걸림 | 빠름 |
| 컨텍스트 | 하나의 컨텍스트 | 분산된 컨텍스트 |
| 적합한 작업 | 단순 작업 | 복잡한 다단계 작업 |

### Subagents 활성화

Subagents는 **기본적으로 활성화**되어 있습니다. 복잡한 작업을 요청하면 자동으로 동작합니다.

```bash
# 복잡한 작업 요청 시 자동으로 Subagents 사용
"전체 인증 시스템을 구현해줘"
"이 프로젝트를 TypeScript로 마이그레이션해줘"
"테스트 커버리지를 80%까지 올려줘"
```

---

## 2부: Clarification Questions

### Clarification Questions란?

Agent가 요청이 **불명확할 때 질문**을 던져서 정확한 요구사항을 파악합니다.

```
사용자: "로그인 기능 추가해줘"

Agent: 몇 가지 확인이 필요합니다:
  1. 소셜 로그인(Google, GitHub)도 포함할까요?
  2. 이메일 인증이 필요한가요?
  3. 세션 기반 vs JWT 중 어느 것을 선호하나요?

사용자: "JWT로 해주고, 소셜 로그인은 Google만"

Agent: [구현 시작]
```

### Clarification Questions의 장점

1. **정확한 요구사항 파악**: 추측 대신 확인
2. **재작업 감소**: 처음부터 올바른 방향으로 구현
3. **숨겨진 요구사항 발견**: 사용자가 생각하지 못한 부분 확인
4. **의사소통 향상**: 명확한 대화로 협업 품질 향상

### Clarification Questions 동작

**자동 동작**: Agent가 불명확한 부분을 감지하면 자동으로 질문합니다.

**수동 요청**: `/clarify` 명령으로 명시적으로 질문을 요청할 수 있습니다.

```bash
# 수동으로 명확화 요청
You: /clarify 이 기능의 요구사항을 정리해줘
Agent: [질문 목록 제시]
```

### 효과적인 답변 방법

```bash
# ❌ 모호한 답변
Agent: JWT vs 세션 중 어느 것을 선호하나요?
You: 아무거나

# ✅ 명확한 답변
Agent: JWT vs 세션 중 어느 것을 선호하나요?
You: JWT로 해주세요. 리프레시 토큰도 포함해주세요.
```

---

## 3부: 실전 활용

### Subagents 활용 시나리오

#### 1. 대규모 리팩토링

```
"이 프로젝트를 함수형 컴포넌트로 전환해줘"

Subagent 분배:
  - Subagent 1: components/ 폴더 리팩토링
  - Subagent 2: pages/ 폴더 리팩토링
  - Subagent 3: hooks 추출
  - Subagent 4: 테스트 업데이트
```

#### 2. 새 기능 구현

```
"결제 시스템 추가해줘"

Subagent 분배:
  - Subagent 1: 결제 모델/스키마
  - Subagent 2: Stripe API 연동
  - Subagent 3: 결제 UI 컴포넌트
  - Subagent 4: 웹훅 처리
  - Subagent 5: 테스트
```

#### 3. 마이그레이션

```
"JavaScript를 TypeScript로 마이그레이션해줘"

Subagent 분배:
  - Subagent 1: tsconfig 설정
  - Subagent 2: 타입 정의 파일
  - Subagent 3: 소스 코드 변환
  - Subagent 4: 테스트 코드 변환
```

### 효과적인 사용법

✅ **Subagents가 효과적인 경우**:
- 여러 파일/모듈에 걸친 작업
- 독립적으로 분리 가능한 작업
- 대규모 코드 수정

❌ **Subagents가 불필요한 경우**:
- 단일 파일 수정
- 간단한 버그 수정
- 순차적으로 해야 하는 작업

### 베스트 프랙티스

1. **명확한 요청**: 큰 그림을 설명하면 Agent가 더 잘 분배함
2. **Clarification 활용**: 질문에 구체적으로 답변
3. **점진적 진행**: 너무 큰 작업은 단계별로 나누기
4. **결과 검토**: Subagents 완료 후 통합 결과 확인

---

## 🚀 실습: Subagents 실전 활용

이제 Subagents로 복잡한 기능을 구현해봅시다!

### [Project 1: Subagents로 복잡한 기능 구현](./projects/01-subagents-parallel/README.md)

**학습 내용**:

- Subagents의 자동 분배 확인
- Clarification Questions 체험
- 병렬 처리의 효율성 체험

**실습 방식**:

복잡한 기능(예: 인증 시스템)을 요청하고, Agent가 어떻게 작업을 분배하는지 관찰합니다. Clarification Questions에 답변하면서 요구사항을 구체화합니다.

**실습 예시**:
```
You: "사용자 인증 시스템 추가해줘"

Agent: 몇 가지 확인이 필요합니다:
  1. 인증 방식? (세션 / JWT)
  2. 소셜 로그인 포함?
  3. 이메일 인증 필요?

You: "JWT, Google 소셜 로그인 포함, 이메일 인증 필요"

Agent: [Subagents 분배하여 병렬 구현]
  - Subagent 1: User 모델 및 스키마
  - Subagent 2: JWT 토큰 처리
  - Subagent 3: Google OAuth 연동
  - Subagent 4: 이메일 인증 서비스
  - Subagent 5: 로그인/회원가입 API
```

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-subagents-parallel/README.md)

---

## 💡 학습 가이드

### 진행 방법

1. **1부: Subagents 개념** - 자동 오케스트레이션 이해
2. **2부: Clarification Questions** - 질문 기능 활용
3. **3부: 실전 활용** - 시나리오별 사용법
4. **👉 실습: Project 1** - 복잡한 기능 구현 체험

### 학습 팁

- Clarification Questions에 구체적으로 답변하세요
- 너무 큰 작업은 단계별로 나눠서 요청하세요
- Subagents 결과를 꼭 검토하세요

---

## 📊 학습 정리

**1부: Subagents란?**
- ✅ 복잡한 작업의 자동 분배
- ✅ 병렬 처리로 효율성 향상

**2부: Clarification Questions**
- ✅ 불명확한 요청에 대한 질문
- ✅ 정확한 요구사항 파악

**3부: 실전 활용**
- ✅ 대규모 리팩토링, 새 기능 구현, 마이그레이션
- ✅ 베스트 프랙티스

**다음 장 예고**:

8장에서는 **Multi-Agent**를 배웁니다. Subagents가 자동 분배라면, Multi-Agent는 개발자가 직접 여러 Agent를 병렬로 실행하는 수동 방식입니다. Git Worktree와 함께 사용하면 강력한 병렬 개발이 가능합니다.

---

## ⏭ 다음 장

[8장: Multi-Agent - 여러 업무 동시 처리](../session-08-multiagent/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: Subagents로 복잡한 기능 구현](./projects/01-subagents-parallel/README.md) - 3부 학습 후 진행

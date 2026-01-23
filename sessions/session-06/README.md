# 6장: Agent Skills & Subagents

> **Agent의 능력을 확장하고 자동으로 작업을 분산합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Agent Skills란?](#1부-agent-skills란)
- [2부: 기본 제공 Skills](#2부-기본-제공-skills)
- [3부: 커스텀 Skill 작성](#3부-커스텀-skill-작성)
- [4부: Subagents란?](#4부-subagents란)
- [5부: Clarification Questions](#5부-clarification-questions)
- [6부: 실전 활용](#6부-실전-활용)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

이번 장에서는 Cursor의 **Agent Skills**와 **Subagents** 기능을 배웁니다.

Agent Skills는 재사용 가능한 스킬로, Agent의 능력을 확장할 수 있습니다. Subagents는 메인 Agent가 여러 하위 Agent를 생성하여 작업을 자동으로 분산하는 기능입니다.

**학습 목표**:

- Agent Skills의 개념과 활용법 이해
- 기본 제공 Skills 사용
- 커스텀 Skill 작성 방법
- Subagents로 병렬 작업 수행
- Clarification Questions로 Agent와 대화
- 실전 시나리오에서의 활용

**공식 문서**:
- [Agent Skills](https://cursor.com/docs/context/skills)
- [Subagents](https://cursor.com/docs/context/subagents)
- [체인지로그 - Clarification Questions (2026.01.22)](https://cursor.com/changelog)

---

## 1부: Agent Skills란?

### 개념

Agent Skills는 Agent가 수행할 수 있는 **재사용 가능한 능력**입니다.

```
일반 Agent:
- 코드 작성
- 파일 수정
- 터미널 명령

Agent + Skills:
- 코드 작성
- 파일 수정
- 터미널 명령
+ 커스텀 검증
+ 자동화 작업
+ 팀 규칙 적용
```

### Skills vs Rules

| 비교 항목 | Rules | Skills |
|---------|-------|--------|
| 형식 | 텍스트 (프롬프트) | 구조화된 문서 (SKILL.md) |
| 재사용성 | 프로젝트별 | 전역 재사용 가능 |
| 활성화 | 자동 | 명시적 호출 |
| 복잡도 | 간단한 지침 | 복잡한 워크플로우 |

---

## 2부: 기본 제공 Skills

Cursor에는 기본적으로 제공되는 Skills가 있습니다.

### 1. create-rule

Cursor Rules를 생성하는 Skill입니다.

```
사용 예시:
"create-rule 스킬을 사용해서 TypeScript 규칙 만들어줘"

→ Agent가 .cursorrules 파일 생성
→ TypeScript 관련 규칙 자동 작성
```

### 2. create-skill

새로운 Skill을 작성하는 Skill입니다.

```
사용 예시:
"create-skill 스킬을 사용해서 테스트 검증 스킬 만들어줘"

→ Agent가 SKILL.md 파일 생성
→ 테스트 검증 워크플로우 작성
```

### 3. update-cursor-settings

Cursor 설정을 수정하는 Skill입니다.

```
사용 예시:
"update-cursor-settings 스킬로 탭 크기를 2로 변경해줘"

→ Agent가 settings.json 수정
→ 설정 자동 적용
```

---

## 3부: 커스텀 Skill 작성

### SKILL.md 파일 구조

커스텀 Skill은 `SKILL.md` 파일로 작성합니다.

```markdown
# Skill 이름

## 설명
이 스킬이 무엇을 하는지 설명

## 사용 시점
언제 이 스킬을 사용하는지

## 단계
1. 첫 번째 단계
2. 두 번째 단계
3. 세 번째 단계

## 예시
구체적인 사용 예시
```

### 예시: API 검증 Skill

```markdown
# API Response Validation Skill

## 설명
API 응답 형식을 검증하고 표준화합니다.

## 사용 시점
- API 엔드포인트 작성 시
- API 응답 수정 시

## 단계
1. API 함수 찾기
2. 응답 형식 확인
3. 표준 형식으로 변환
   - { success: boolean, data: any, error?: string }
4. 에러 핸들링 추가
5. 테스트 코드 작성

## 예시
```javascript
// Before
async function getUser(id) {
  return await fetch(`/api/users/${id}`);
}

// After
async function getUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```
```

### Skill 저장 위치

```
전역 Skills:
~/.cursor/skills/

프로젝트 Skills:
.cursor/skills/
```

---

## 🚀 실습: Project 1 - Skills 기본 사용 및 커스텀 Skill 작성

이제 배운 내용을 바로 실습해봅시다!

### [Project 1: Skills 기본 사용 및 커스텀 Skill 작성](./projects/01-skills-basic/README.md)

**학습 내용**:

- 기본 제공 Skills 사용 (create-rule, create-skill, update-cursor-settings)
- 커스텀 Skill 작성 (API 검증 Skill)
- Skill 활용 패턴

**실습 방식**:

기본 Skills를 사용해보고, 직접 커스텀 Skill을 작성합니다. SKILL.md 파일 구조를 익히고, 실제 프로젝트에 적용하는 방법을 배웁니다.

**실습 예시**:
- `create-rule` 스킬로 TypeScript 규칙 자동 생성
- `update-cursor-settings` 스킬로 설정 변경
- 커스텀 API 검증 Skill 작성 및 적용

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-skills-basic/README.md)

---

## 4부: Subagents란?

### 개념

Subagents는 메인 Agent가 **여러 하위 Agent를 생성**하여 작업을 분산하는 기능입니다.

```
메인 Agent
  │
  ├─ Subagent 1: 요구사항 분석
  │
  ├─ Subagent 2: 코드 구현
  │
  ├─ Subagent 3: 테스트 작성
  │
  └─ Subagent 4: 문서 작성

메인 Agent: 결과 통합 및 보고
```

### 수동 Multi-Agent vs Subagents

| 비교 항목 | 수동 Multi-Agent (7장) | Subagents |
|---------|------------------------|-----------|
| 생성 | 수동 (Worktree + CLI) | 자동 |
| 관리 | 수동 | 자동 |
| 결과 통합 | 수동 | 자동 |
| 오케스트레이션 | 수동 | 자동 |

---

## 5부: Clarification Questions

### Clarification Questions란?

Agent가 작업 중 **불명확한 부분을 질문**하는 기능입니다.

```
You: 로그인 기능 추가해줘

Agent: 질문이 있습니다:
       1. 어떤 인증 방식을 사용할까요?
          - JWT
          - Session
          - OAuth
       
       2. 비밀번호 정책은?
          - 최소 8자
          - 특수문자 필수
          - 기타

You: JWT 사용하고, 최소 8자로 해줘

Agent: [작업 계속]
```

### 기존 방식 vs Clarification Questions

**기존 방식**:
```
You: 결제 시스템 추가해줘

Agent: [추측해서 구현]
       → Stripe으로 구현됨

You: 아니야, 토스페이먼츠 써야 해
Agent: [다시 구현]
```

**Clarification Questions**:
```
You: 결제 시스템 추가해줘

Agent: 질문이 있습니다:
       어떤 결제 서비스를 사용할까요?
       - Stripe
       - 토스페이먼츠
       - 기타

You: 토스페이먼츠

Agent: [정확하게 구현]
```

### 언제 질문하는가?

Agent는 다음 상황에서 질문합니다:

1. **여러 선택지가 있을 때**
   ```
   "API 만들어줘"
   → REST? GraphQL? gRPC?
   ```

2. **요구사항이 불명확할 때**
   ```
   "테스트 추가해줘"
   → 단위 테스트? 통합 테스트? E2E?
   ```

3. **중요한 결정이 필요할 때**
   ```
   "데이터베이스 추가해줘"
   → PostgreSQL? MySQL? MongoDB?
   ```

### Plan 모드와 Clarification Questions

**Plan 모드**에서 Clarification Questions가 가장 유용합니다.

```bash
cursor /plan

You: 사용자 관리 시스템 만들어줘

Agent: [계획 수립 중...]
       
       질문이 있습니다:
       1. 사용자 역할(Role)이 필요한가요?
       2. 이메일 인증이 필요한가요?
       3. 소셜 로그인을 지원할까요?

You: 1. 네, Admin/User 두 가지
     2. 네, 필요해요
     3. 아니요

Agent: [명확한 계획 수립]
       [실행]
```

### Agent가 질문하는 동안

Agent는 질문을 기다리는 동안에도 **다른 작업을 계속**할 수 있습니다.

```
Agent: 질문이 있습니다: 어떤 UI 프레임워크를 사용할까요?
       
       [질문 대기 중...]
       [동시에 백엔드 API 작성 중...]
       [동시에 데이터베이스 스키마 설계 중...]

You: React 사용해줘

Agent: [답변 받음]
       [프론트엔드 작업 시작]
```

### 커스텀 Skill에서 사용하기

커스텀 Skill이나 Subagent에서도 Clarification Questions를 사용할 수 있습니다.

```markdown
# API Validation Skill

## 단계

1. API 함수 찾기
2. **질문: 어떤 검증 규칙을 적용할까요?**
   - use the ask question tool
3. 검증 로직 추가
4. 테스트 코드 작성
```

**공식 문서**: [Clarification Questions (2026.01.22)](https://cursor.com/changelog)

---

## 🚀 실습: Project 2 - Subagent로 병렬 작업

이제 Subagents를 직접 체험해봅시다!

### [Project 2: Subagent로 병렬 작업](./projects/02-subagents-parallel/README.md)

**학습 내용**:

- Subagent 생성 및 관리
- 병렬 작업 패턴
- 결과 자동 통합

**실습 방식**:

간단한 TODO 앱을 Subagents를 활용하여 개발합니다. 메인 Agent가 여러 Subagent를 생성하고, 각각 다른 작업을 수행하는 과정을 체험합니다.

**실습 예시**:
- "TODO 앱 만들어줘" 요청
- 메인 Agent가 Subagent 4개 생성:
  - Subagent 1: UI 컴포넌트
  - Subagent 2: API 로직
  - Subagent 3: 상태 관리
  - Subagent 4: 테스트 코드
- 자동으로 통합되어 완성!

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-subagents-parallel/README.md)

---

## 6부: 실전 활용

### 시나리오 1: 신규 기능 개발

```
요청: "사용자 프로필 페이지 만들어줘"

Agent (Subagents 사용):
  [Subagent 1] 요구사항 분석
  [Subagent 2] UI 컴포넌트 작성
  [Subagent 3] API 연동
  [Subagent 4] 테스트 작성
  
  → 자동 통합
  → 완성!
```

### 시나리오 2: 코드 리팩토링

```
요청: "이 파일을 TypeScript로 변환해줘"

Agent (Skills 사용):
  [typescript-conversion Skill 적용]
  1. 타입 추론
  2. interface 정의
  3. any 제거
  4. strict 모드 적용
  
  → 완성!
```

### 시나리오 3: 복잡한 작업

```
요청: "결제 시스템 추가해줘"

Agent (Skills + Subagents):
  [payment-system Skill 적용]
  
  [Subagent 1] 결제 모델 설계
  [Subagent 2] 결제 API 구현
  [Subagent 3] 프론트엔드 연동
  [Subagent 4] 테스트 작성
  [Subagent 5] 보안 검증
  
  → 자동 통합
  → 완성!
```

---

## 💡 학습 가이드

### 진행 방법

1. **1부-2부: Agent Skills 기본**
   - Agent Skills의 개념과 활용법 이해
   - 기본 제공 Skills 확인

2. **3부: 커스텀 Skill 작성 + 실습**
   - 커스텀 Skill 작성 방법 학습
   - 👉 **바로 실습**: Project 1 - Skills 기본 사용 및 커스텀 Skill 작성

3. **4부-5부: Subagents와 Clarification Questions**
   - Subagents의 동작 방식 파악
   - Clarification Questions 이해
   - 👉 **바로 실습**: Project 2 - Subagent로 병렬 작업

4. **6부: 실전 활용**
   - 다양한 시나리오에서의 활용 패턴

### 학습 팁

- Skills는 재사용 가능한 워크플로우입니다
- SKILL.md 파일 구조를 명확히 이해하세요
- Subagents는 자동 오케스트레이션을 제공합니다
- 7장의 수동 Multi-Agent와 비교하면서 학습하세요
- 실제 프로젝트에 적용할 수 있는 Skills를 만들어보세요

---

## 📊 학습 정리

이번 장에서 다룬 내용:

**1부-2부: Agent Skills 기본**
- ✅ Agent Skills의 개념 (재사용 가능한 능력)
- ✅ 기본 제공 Skills (create-rule, create-skill, update-cursor-settings)

**3부: 커스텀 Skill + 실습**
- ✅ 커스텀 Skill 작성 (SKILL.md 구조)
- ✅ **실습 완료**: Skills 기본 사용 및 커스텀 Skill 작성

**4부-5부: Subagents + 실습**
- ✅ Subagents의 개념 (자동 오케스트레이션)
- ✅ Clarification Questions (Agent와 대화)
- ✅ **실습 완료**: Subagent로 병렬 작업

**6부: 실전 활용**
- ✅ 다양한 시나리오에서의 활용 패턴

**다음 장 예고**:

7장에서는 Git Worktree를 배웁니다. 독립적인 작업 환경을 구성하여 여러 접근 방법을 동시에 실험하는 방법을 익힙니다.

---

## 🔗 공식 문서

- [Cursor Skills 문서](https://cursor.com/docs/context/skills)
- [Cursor Subagents 문서](https://cursor.com/docs/context/subagents)

---

## ⏭ 다음 장

[7장: Multi-Agent - 여러 업무 동시 처리](../session-07/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: Skills 기본 사용 및 커스텀 Skill 작성](./projects/01-skills-basic/README.md) - 3부 학습 후 진행
- [Project 2: Subagent로 병렬 작업](./projects/02-subagents-parallel/README.md) - 5부 학습 후 진행

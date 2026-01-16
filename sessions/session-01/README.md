# 1교시: Hooks - AI Agent 제어의 핵심

> **Copilot과 Cursor의 공통점과 차이점을 이해하고, Hooks를 통한 Agent 제어 방법을 학습합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Copilot과 Cursor의 공통점](#1부-copilot과-cursor의-공통점)
- [2부: Rules의 한계](#2부-rules의-한계)
- [3부: Hooks 소개](#3부-hooks-소개)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

Copilot 사용자들이 자주 겪는 문제가 있습니다. AI가 지시를 따르지 않거나, 위험한 명령을 실행하는 경우입니다. 이번 교시에서는 Cursor만의 핵심 기능인 Hooks를 통해 이 문제를 해결하는 방법을 배웁니다.

**학습 목표**:

- Copilot과 Cursor의 공통점 이해
- Rules(프롬프트)의 한계 인식
- Hooks를 통한 Agent 제어 방법 습득

---

## 1부: Copilot과 Cursor의 공통점

먼저 Copilot과 Cursor의 공통점을 살펴보겠습니다. 두 도구는 많은 부분에서 유사합니다.

### 주요 공통 기능

#### Agent 모드

```
Copilot: Ask Agent
Cursor: Agent (Chat)

→ 대화하면서 코드 작업
→ 동일하다!
```

#### Plan 모드

```
Copilot: Plan Mode
Cursor: Plan Mode

→ 계획 세우고 실행
→ 동일하다!
```

#### Instructions / Rules

```
Copilot: .github/copilot-instructions.md
Cursor: .cursorrules

→ 프로젝트 규칙 설정
→ 폴더별, 파일별 적용 가능
→ glob 패턴 지원
→ 동일하다!
```

#### Prompts / Commands

```
Copilot: 저장된 Prompts
Cursor: 저장된 Commands

→ 자주 쓰는 프롬프트 저장
→ 동일하다!
```

#### MCP

```
Copilot: MCP 지원
Cursor: MCP 지원

→ 외부 도구 연동
→ 동일하다!
```

---

## 2부: Rules의 한계

이제 Rules(Copilot의 Instructions)의 한계를 살펴보겠습니다.

### Rules 작성 예시

```
# .cursorrules

- 항상 TypeScript를 사용하세요
- 모든 함수에 JSDoc을 작성하세요
- rm -rf 명령은 절대 사용하지 마세요
```

하지만 문제가 있습니다:

```
실제 결과:
- Agent가 JavaScript로 코드 생성 (TypeScript 요청 무시)
- JSDoc 없이 작성 (JSDoc 요청 무시)
- rm -rf 사용 (금지 요청 무시)
```

### 문제의 원인

Rules와 Instructions는 본질적으로 **프롬프트**입니다.

- 프롬프트 = 요청 (강제가 아님)
- AI가 선택적으로 따를 수 있음
- 위험한 명령도 실행될 수 있음

이는 Copilot과 Cursor 모두 동일한 한계입니다.

---

## 3부: Hooks 소개

이제 Cursor만의 핵심 기능인 **Hooks**를 소개합니다.

### Hooks란?

Hooks는 Agent의 동작을 **코드로 감시하고 제어**하는 기능입니다.

**핵심 차이점**:

- Rules: 프롬프트 (요청) → 선택적 준수
- Hooks: 코드 (강제) → 100% 강제

### 동작 원리

```javascript
// .cursor/hooks/security.js

export async function preToolExecution(context) {
  const { tool, args } = context;

  // Agent가 rm -rf 실행하려고 할 때
  if (args.command?.includes("rm -rf")) {
    return {
      block: true, // 강제 차단!
      reason: "위험한 명령어입니다",
    };
  }

  return { block: false };
}
```

### 효과

Hooks를 사용하면:

- Rules: "rm -rf 쓰지 마" → 가끔 무시됨
- Hooks: `block: true` → **100% 차단**

이것이 Copilot과 Cursor의 핵심 차이점입니다.

### Copilot vs Cursor

| 특징                   | Copilot | Cursor       |
| ---------------------- | ------- | ------------ |
| **Agent 모드**         | ✅      | ✅           |
| **Plan 모드**          | ✅      | ✅           |
| **Instructions/Rules** | ✅      | ✅           |
| **Prompts/Commands**   | ✅      | ✅           |
| **MCP**                | ✅      | ✅           |
| **Hooks**              | ❌ 없음 | ✅ **있음!** |

### 프롬프트 vs 코드

| 특징     | Rules/Instructions | Hooks       |
| -------- | ------------------ | ----------- |
| **성격** | 요청 (프롬프트)    | 강제 (코드) |
| **준수** | 가끔 안 지킴       | 100% 지킴   |
| **리뷰** | 필요함             | 불필요      |
| **안전** | 위험 가능          | 안전 보장   |

---

## 📊 학습 정리

이 교시에서 다룬 내용:

- ✅ Copilot과 Cursor의 공통 기능 비교
- ✅ Rules(프롬프트)의 한계 이해
- ✅ Hooks를 통한 Agent 제어 방법
- ✅ 위험 작업 100% 차단 방법

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: Rules 기본](./projects/01-rules-basic/README.md)

**스토리 위치**: 1장 - 익숙한 것들

**상황**:

```
Cursor에 처음 왔다.
Rules를 작성해보자.
"Copilot의 Instructions랑 똑같겠지?"
```

**배울 것**:

- 전역 `.cursorrules` 작성
- 폴더별 Rules 작성
- Copilot Instructions와 비교

**깨달음**: "어? Copilot이랑 정말 똑같네..."

**소요 시간**: 10분

---

### [Project 2: Rules Globs](./projects/02-rules-globs/README.md)

**스토리 위치**: 2장 - 문제 발견

**상황**:

```
파일 타입별로 다른 규칙을 적용해봤다.
*.test.js에는 테스트 규칙
*.api.js에는 API 규칙

"잘 지키려나?"
```

**배울 것**:

- glob 패턴 활용
- 파일별 조건부 규칙
- Rules의 한계 체험

**깨달음**: "규칙 지정해도 가끔 안 지키네... 여전히 프롬프트 문제가..."

**소요 시간**: 10분

---

### [Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)

**스토리 위치**: 3장 - Hooks 발견

**상황**:

```
Hooks라는 걸 발견했다.
"이게 뭐지? 한번 써보자."

Agent가 뭘 하는지 로깅해봤다.
```

**배울 것**:

- `preToolExecution`: 실행 전 감시
- `postToolExecution`: 실행 후 로깅
- Agent 동작 완전 파악

**깨달음**: "오! Agent가 뭘 하는지 다 보이네! 이건 Copilot에 없는 기능이다!"

**소요 시간**: 10분

---

### [Project 4: Hooks 보안](./projects/04-hooks-security/README.md)

**스토리 위치**: 3장 - 깨달음

**상황**:

```
Hooks로 위험한 명령을 차단해봤다.
rm -rf? 차단!
DROP TABLE? 차단!
.env 파일 수정? 차단!
```

**배울 것**:

- 위험 명령 강제 차단
- 보호 폴더 설정
- 감사 로그 작성

**깨달음**: "이거다! 이게 Cursor로 와야 하는 이유! 100% 차단이 가능하다!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 스토리 이해 (10분)

이 README를 읽으면서:

1. Copilot 사용자의 고민 공감
2. Rules의 한계 이해
3. Hooks의 발견

### Step 2: 익숙한 것 확인 (20분)

1. **[Project 1: Rules 기본](./projects/01-rules-basic/README.md)** (10분)

   - "Copilot이랑 똑같네..."

2. **[Project 2: Rules Globs](./projects/02-rules-globs/README.md)** (10분)
   - "여전히 프롬프트 문제가..."

### Step 3: 새로운 것 발견 (30분)

1. **[Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)** (10분)

   - "오! 이건 새롭다!"

2. **[Project 4: Hooks 보안](./projects/04-hooks-security/README.md)** (20분)
   - "이거다! 이게 차이!"

---

## 🎓 다음 교시 안내

1교시에서는 Hooks를 통한 Agent 제어 방법을 배웠습니다.

2교시에서는 Cursor의 추가 기능들을 살펴보겠습니다:

- Debug Mode: 버그 원인 정확히 파악
- Visual Editor: UI 직접 선택해서 수정

---

## ⏭ 다음 교시

[2교시: 두 번째 발견 - 다채로운 기능](../session-02/README.md)

---

## 🔗 빠른 링크

- [Project 1: Rules 기본](./projects/01-rules-basic/README.md)
- [Project 2: Rules Globs](./projects/02-rules-globs/README.md)
- [Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)
- [Project 4: Hooks 보안](./projects/04-hooks-security/README.md)

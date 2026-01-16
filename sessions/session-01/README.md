# 1장: Hooks - AI Agent 제어의 핵심

> **Copilot과 Cursor의 공통점과 차이점을 이해하고, Hooks를 통한 Agent 제어 방법을 학습합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Copilot과 Cursor의 공통점](#1부-copilot과-cursor의-공통점)
- [2부: Rules의 한계](#2부-rules의-한계)
- [3부: Hooks 소개](#3부-hooks-소개)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

안녕하세요. 이번 장에서는 Copilot과 Cursor의 차이점을 살펴보겠습니다.

Copilot을 사용하시다 보면 이런 경험이 있으실 겁니다. "TypeScript로 작성해달라고 했는데 JavaScript로 하네?", "rm -rf 쓰지 말라고 했는데 또 쓰네?" 같은 상황 말이죠. AI가 지시를 따르지 않거나 위험한 명령을 실행하는 경우입니다.

Cursor에는 이 문제를 해결하는 핵심 기능이 있습니다. 바로 **Hooks**입니다. 이번 장에서는 Hooks를 통해 AI Agent를 완벽히 제어하는 방법을 배웁니다.

**학습 목표**:

- Copilot과 Cursor의 공통점 이해
- Rules(프롬프트)의 한계 인식
- Hooks를 통한 Agent 제어 방법 습득

---

## 1부: Copilot과 Cursor의 공통점

먼저 Copilot과 Cursor의 공통점을 살펴보겠습니다. 두 도구는 많은 부분에서 유사합니다.

### 주요 공통 기능

#### Ask 모드

```
Copilot: Ask
Cursor: Ask (Chat)

→ 질문하고 답변 받기
→ 동일합니다!
```

#### Agent 모드

```
Copilot: Agent
Cursor: Agent

→ 대화하면서 코드 작업
→ 동일합니다!
```

#### Plan 모드

```
Copilot: Plan Mode
Cursor: Plan Mode

→ 계획 세우고 실행
→ 동일합니다!
```

#### Instructions / Rules

```
Copilot: .github/copilot-instructions.md
Cursor: .cursorrules

→ 프로젝트 규칙 설정
→ 폴더별, 파일별 적용 가능
→ glob 패턴 지원
→ 동일합니다!
```

#### Prompts / Commands

```
Copilot: 저장된 Prompts
Cursor: 저장된 Commands

→ 자주 쓰는 프롬프트 저장
→ 동일합니다!
```

#### MCP

```
Copilot: MCP 지원
Cursor: MCP 지원

→ 외부 도구 연동
→ 동일합니다!
```

### 그렇다면 차이점은?

여기까지 보면 "Copilot이랑 똑같은데?"라는 생각이 드실 겁니다. 맞습니다. 대부분의 기능이 동일합니다.

하지만 한 가지 중요한 차이가 있습니다. 바로 다음에 소개할 **Hooks**입니다.

그리고 한 가지 더, Copilot에는 **Edit 모드**가 있지만 Cursor에는 없습니다. 대신 Cursor에는 **Debug 모드**가 있습니다. Debug 모드는 2장에서 자세히 다루겠습니다.

---

## 2부: Rules의 한계

Hooks를 소개하기 전에, 먼저 Rules의 한계를 경험해보겠습니다. Rules는 Copilot의 Instructions와 동일한 기능입니다.

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

### 왜 Hooks가 필요한가?

실제로 이런 사고가 있었습니다. 2024년 12월, Claude CLI를 사용하던 한 개발자의 Mac에서 홈 디렉터리가 통째로 삭제되는 일이 발생했습니다.

```bash
# AI가 실행한 명령
rm -rf tests/ patches/ plan/ ~/
```

명령 끝의 `~/`가 홈 디렉터리 전체를 가리켜서, Desktop, Documents, Downloads, Keychain 등이 모두 사라졌습니다. ([참고 링크](https://news.hada.io/topic?id=25096))

이런 사고를 방지하려면 **사전 방지**와 **사후 점검**이 필요합니다. Rules로는 불가능하지만, Hooks로는 가능합니다.

### Hooks란?

Hooks는 Agent의 동작을 **코드로 감시하고 제어**하는 기능입니다.

**핵심 차이점**:

- Rules: 프롬프트 (요청) → 선택적 준수
- Hooks: 코드 (강제) → 100% 강제

**두 가지 타입**:

- `preToolExecution`: 실행 **전** 감시 (사전 방지)
- `postToolExecution`: 실행 **후** 점검 (사후 점검)

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

### Copilot vs Cursor 모드 비교

| 모드                   | Copilot | Cursor       |
| ---------------------- | ------- | ------------ |
| **Ask**                | ✅      | ✅           |
| **Edit**               | ✅      | ❌ 없음      |
| **Agent**              | ✅      | ✅           |
| **Plan**               | ✅      | ✅           |
| **Debug**              | ❌ 없음 | ✅ (2장)     |

### Copilot vs Cursor 기능 비교

| 기능                   | Copilot | Cursor       |
| ---------------------- | ------- | ------------ |
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

이번 장에서 다룬 내용을 정리하겠습니다:

- ✅ Copilot과 Cursor의 공통 기능 비교 (대부분 동일)
- ✅ Copilot의 Edit 모드 vs Cursor의 Debug 모드
- ✅ Rules(프롬프트)의 한계 이해
- ✅ Hooks를 통한 Agent 제어 방법 (핵심 차이점!)
- ✅ 실제 사고 사례와 사전 방지 방법

---

## 🚀 실습 프로젝트

이제 실습을 통해 직접 경험해보겠습니다. 총 3개의 프로젝트를 진행합니다.

### [Project 1: Rules 기본](./projects/01-rules-basic/README.md)

**학습 내용**:

먼저 Rules를 작성해보겠습니다. Copilot의 Instructions와 동일한 기능입니다.

- 전역 `.cursorrules` 작성
- 폴더별 Rules 작성
- glob 패턴으로 파일 타입별 규칙 적용
- Copilot Instructions와 비교

**실습 목표**: 

Rules의 기본 사용법을 익히고, Copilot과의 유사성을 확인합니다. 하지만 곧 한계도 발견하게 될 것입니다.

**예상 소요 시간**: 15분

---

### [Project 2: Hooks 기본](./projects/02-hooks-basic/README.md)

**학습 내용**:

이제 Hooks를 직접 사용해보겠습니다. Copilot에는 없는 Cursor만의 기능입니다.

- `preToolExecution`: 실행 전 감시 (사전 방지)
- `postToolExecution`: 실행 후 점검 (사후 점검)
- Agent 동작 완전 파악

**실습 목표**:

Hooks의 동작 원리를 이해하고, Rules와의 차이를 명확히 구분합니다. 코드로 Agent를 제어하는 방법을 익힙니다.

**예상 소요 시간**: 15분

---

### [Project 3: Hooks 보안](./projects/03-hooks-security/README.md)

**학습 내용**:

마지막으로 실전 보안 Hook을 작성해보겠습니다. 앞서 소개한 홈 디렉터리 삭제 사고 같은 상황을 방지하는 방법입니다.

- 위험 명령 강제 차단 (`rm -rf`, `sudo rm` 등)
- 보호 폴더 설정 (홈 디렉터리, 시스템 폴더)
- 실전 보안 Hook 작성

**실습 목표**:

실제 사고를 방지할 수 있는 보안 Hook을 작성합니다. Rules로는 불가능하지만 Hooks로는 100% 차단이 가능하다는 것을 확인합니다.

**예상 소요 시간**: 15분

---

## 💡 학습 가이드

### 진행 방법

이번 장은 다음과 같이 진행됩니다:

1. **강의 내용 읽기** (10-15분)
   - 이 README를 읽으면서 Copilot과 Cursor의 차이점을 이해합니다
   - Hooks의 필요성과 실제 사고 사례를 확인합니다

2. **실습 프로젝트 진행** (30-45분)
   - Project 1: Rules 기본 (15분) - Copilot과의 유사성 확인
   - Project 2: Hooks 기본 (15분) - Hooks의 발견
   - Project 3: Hooks 보안 (15분) - 실전 보안 적용

### 학습 팁

- 각 프로젝트를 순서대로 진행하세요
- Rules의 한계를 직접 경험하는 것이 중요합니다
- Hooks 코드를 작성할 때 주석을 달면서 이해하세요

---

## 🎓 다음 장 안내

1장에서는 Hooks를 통한 Agent 제어 방법을 배웠습니다. Copilot과의 핵심 차이점을 이해하셨을 것입니다.

2장에서는 Cursor의 추가 기능들을 살펴보겠습니다:

- **Debug Mode**: 추측이 아닌 실행으로 버그 원인 파악
- **Visual Editor**: 말로 설명하지 않고 클릭으로 UI 수정

---

## ⏭ 다음 장

[2장: 개발 속도를 높이는 기능들 - Debug Mode & Visual Editor](../session-02/README.md)

---

## 🔗 빠른 링크

- [Project 1: Rules 기본](./projects/01-rules-basic/README.md)
- [Project 2: Hooks 기본](./projects/02-hooks-basic/README.md)
- [Project 3: Hooks 보안](./projects/03-hooks-security/README.md)

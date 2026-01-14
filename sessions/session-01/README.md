# 1교시: Rules & Hooks - AI를 제어하는 법

## 📋 목차

- [왜 Cursor로 와야 하는가?](#왜-cursor로-와야-하는가)
- [Copilot과 Cursor의 공통점](#copilot과-cursor의-공통점)
- [문제: AI가 말을 안 듣는다](#문제-ai가-말을-안-듣는다)
- [차이점: Hooks](#차이점-hooks)
- [실습 프로젝트](#실습-프로젝트)

---

## 🤔 왜 Cursor로 와야 하는가?

### 현재 상황

**Copilot을 사용하면서 이런 경험 없으셨나요?**

```
당신: "TypeScript로 작성해줘"
Copilot: [JavaScript 코드 생성]

당신: "테스트 코드도 작성해줘"
Copilot: [테스트 없이 프로덕션 코드만]

당신: "에러 처리 추가해줘"
Copilot: [try-catch 없이 그냥 진행]
```

**결과**: 리뷰하고 수정하는데 시간을 다 쏟게 됩니다.

### Cursor의 차이

현재 IDE 중에서는 **Cursor가 가장 좋습니다**.

대부분의 기능은 Copilot과 비슷하지만, **한 가지 결정적 차이**가 있습니다.

---

## 🔄 Copilot과 Cursor의 공통점

### 거의 모든 기능이 동일합니다

#### 1. Agent 모드
```
Copilot: Ask Agent
Cursor: Agent (Chat)

→ 동일: 대화형 AI 지원
```

#### 2. Plan 모드
```
Copilot: Plan Mode
Cursor: Plan Mode

→ 동일: 계획 수립 후 실행
```

#### 3. Instructions / Rules
```
Copilot: Instructions (.github/copilot-instructions.md)
Cursor: Rules (.cursorrules)

→ 동일: 프로젝트 규칙 설정
→ 동일: 폴더별/파일별 적용 가능
→ 동일: glob 패턴 지원
```

#### 4. Prompts / Commands
```
Copilot: Prompts (저장된 프롬프트)
Cursor: Commands (저장된 명령어)

→ 동일: 자주 쓰는 프롬프트 저장
```

#### 5. MCP (Model Context Protocol)
```
Copilot: MCP 지원
Cursor: MCP 지원

→ 동일: 외부 도구 연동
```

---

## 😤 문제: AI가 말을 안 듣는다

### Instructions/Rules의 한계

**Copilot과 Cursor 모두 같은 문제**:

```
Instructions/Rules 작성:
"항상 TypeScript를 사용하세요"
"모든 함수에 JSDoc을 작성하세요"
"에러 처리를 반드시 포함하세요"

결과:
→ 가끔 JavaScript로 작성
→ JSDoc 절반만 작성
→ 에러 처리 가끔 빠뜨림

이유: Instructions/Rules도 결국 프롬프트
```

**핵심 문제**: 프롬프트는 "요청"일 뿐, "강제"가 아닙니다.

### 실제 예시

```
.cursorrules:
"절대 rm -rf 명령 사용 금지"

Agent:
→ 가끔 rm -rf 사용
→ 위험!
→ 리뷰 필요
```

**Copilot도 Cursor도 동일한 문제를 겪습니다.**

---

## 🔒 차이점: Hooks (Cursor만 가능!)

### Copilot에는 없는 기능

```
Copilot: Instructions만 (프롬프트)
Cursor: Rules + Hooks (프롬프트 + 코드)
```

### Hooks = 코드 레벨 제어

**프롬프트의 한계를 넘어서**:

```
프롬프트 (Instructions/Rules):
  "이렇게 해줘" → 요청 → 안 지킬 수 있음

코드 (Hooks):
  "이건 차단" → 강제 → 무조건 차단
```

### Hooks의 동작 원리

```javascript
// .cursor/hooks/security.js

export async function preToolExecution(context) {
  const { tool, args } = context;
  
  // Agent가 rm -rf 실행하려고 할 때
  if (args.command?.includes('rm -rf')) {
    return {
      block: true,  // 강제 차단!
      reason: '위험한 명령어입니다'
    };
  }
  
  return { block: false };
}
```

**결과**: Agent가 절대 실행할 수 없습니다!

### Copilot vs Cursor

| 특징 | Copilot | Cursor |
|------|---------|--------|
| **Agent 모드** | ✅ Ask Agent | ✅ Agent (Chat) |
| **Plan 모드** | ✅ Plan Mode | ✅ Plan Mode |
| **Instructions/Rules** | ✅ Instructions | ✅ Rules |
| **Prompts/Commands** | ✅ Prompts | ✅ Commands |
| **MCP** | ✅ MCP | ✅ MCP |
| **Hooks** | ❌ 없음 | ✅ 있음 (핵심!) |

### 프롬프트 vs Hooks

| 특징 | Instructions/Rules | Hooks |
|------|-------------------|-------|
| **성격** | 요청 (프롬프트) | 강제 (코드) |
| **지킴** | 가끔 안 지킴 | 100% 지킴 |
| **리뷰** | 필요 | 불필요 |
| **안전** | 위험 가능 | 안전 보장 |
| **Copilot** | ✅ 있음 | ❌ 없음 |
| **Cursor** | ✅ 있음 | ✅ 있음 |

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] Copilot과 Cursor의 공통점 이해
- [ ] Instructions/Rules의 한계 인식 (둘 다 프롬프트)
- [ ] Hooks의 필요성 깨달음 (Cursor만 가능)
- [ ] Hooks로 Agent 동작 강제 차단
- [ ] 리뷰 시간 70% 단축
- [ ] 위험한 작업 100% 차단

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: Rules 기본](./projects/01-rules-basic/README.md)
**목표**: Rules 작성 (Copilot Instructions와 동일)

**배울 것**:
- 전역 `.cursorrules` 작성
- 폴더별 `.cursorrules` 작성
- Copilot Instructions와 동일한 기능

**깨달음**: "Copilot과 똑같네... 그럼 뭐가 다르지?"

**소요 시간**: 10분

---

### [Project 2: Rules Globs 패턴](./projects/02-rules-globs/README.md)
**목표**: glob 패턴으로 조건부 규칙

**배울 것**:
- `*.test.js.mdc` - 테스트 파일만
- `*.api.js.mdc` - API 파일만
- Copilot도 가능한 기능

**깨달음**: "여전히 프롬프트라서 안 지킬 수 있구나..."

**소요 시간**: 10분

---

### [Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)
**목표**: Hook으로 Agent 동작 감시

**배울 것**:
- `preToolExecution`: 실행 전 체크
- `postToolExecution`: 실행 후 로깅
- Agent가 무엇을 하는지 100% 파악

**깨달음**: "오! 이건 Copilot에 없는 기능이네!"

**소요 시간**: 10분

---

### [Project 4: Hooks 보안](./projects/04-hooks-security/README.md)
**목표**: Hook으로 위험한 작업 강제 차단

**배울 것**:
- 위험 명령 차단 (`rm -rf`, `DROP TABLE`)
- 폴더 보호 (`.env`, `config/`)
- 감사 로그 (모든 파일 수정 기록)

**깨달음**: "이거다! 이게 Cursor로 와야 하는 이유!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 공통점 이해 (10분)

이 README를 읽으면서:
1. Copilot과 Cursor의 공통점 확인
2. Instructions/Rules의 한계 이해
3. Hooks의 필요성 깨달음

### Step 2: Rules 실습 (20분)

1. **[Project 1: Rules 기본](./projects/01-rules-basic/README.md)** (10분)
   - "Copilot과 똑같네..."

2. **[Project 2: Rules Globs](./projects/02-rules-globs/README.md)** (10분)
   - "여전히 프롬프트 문제가..."

### Step 3: Hooks 실습 (30분)

1. **[Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)** (10분)
   - "오! 이건 새로운 기능!"

2. **[Project 4: Hooks 보안](./projects/04-hooks-security/README.md)** (20분)
   - "완벽하다! 이제 안전해!"

### Step 4: 복습 (10분)

- [ ] Copilot과 Cursor의 공통점 설명 가능?
- [ ] Hooks가 왜 필요한지 이해?
- [ ] Hooks의 강력함 체감?

---

## 💡 핵심 깨달음

### Copilot과 Cursor의 관계

```
공통점 (95%):
- Agent 모드
- Plan 모드
- Instructions/Rules
- Prompts/Commands
- MCP

차이점 (5%):
- Hooks (Cursor만!)
```

### 학습 흐름

```
Step 1: Rules 실습
  "어? Copilot과 똑같은데?"
  ↓
Step 2: Rules의 한계
  "여전히 프롬프트라서 안 지켜지네..."
  ↓
Step 3: Hooks 발견
  "오! 이건 Copilot에 없는 기능!"
  ↓
Step 4: Hooks 체험
  "이거다! 이게 Cursor로 와야 하는 이유!"
```

---

## 🎓 실전 효과

### 리뷰 시간 단축

**Before (Copilot/Cursor Rules만)**:
```
AI 코드 생성: 5분
리뷰 및 수정: 15분
총 20분
```

**After (Cursor Hooks 사용)**:
```
AI 코드 생성: 5분
리뷰 및 수정: 3분 (70% 감소!)
총 8분
```

### 안전성 향상

**Before (Instructions/Rules만)**:
```
위험한 명령 실행 가능
  ↓
사고 발생 가능
  ↓
😱 불안
```

**After (Hooks 사용)**:
```
위험한 명령 100% 차단
  ↓
사고 불가능
  ↓
😌 안심
```

---

## ⏭ 다음 교시

[2교시: Debug Mode & Visual Editor](../session-02/README.md)

**1교시를 완료하면 Cursor만의 강력함을 체감할 수 있습니다!** 🎉

---

## 🔗 빠른 링크

- [Project 1: Rules 기본](./projects/01-rules-basic/README.md)
- [Project 2: Rules Globs](./projects/02-rules-globs/README.md)
- [Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)
- [Project 4: Hooks 보안](./projects/04-hooks-security/README.md)

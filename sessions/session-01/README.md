# 1교시: 첫 번째 발견 - Hooks

> **"어? Copilot이랑 똑같은데... 잠깐, 이건 뭐지?"**

## 📋 목차

- [프롤로그: Copilot에서 온 당신에게](#프롤로그-copilot에서-온-당신에게)
- [1장: 익숙한 것들](#1장-익숙한-것들)
- [2장: 그런데 문제가 있다](#2장-그런데-문제가-있다)
- [3장: Hooks의 발견](#3장-hooks의-발견)
- [실습 프로젝트](#실습-프로젝트)

---

## 🎬 프롤로그: Copilot에서 온 당신에게

### 당신의 이야기

```
Copilot을 잘 사용하고 있었다.
코드 자동완성도 좋고,
Agent 모드도 유용했다.

그런데 어느 날, 문득 이런 생각이 들었다.

"왜 AI가 내 말을 안 듣지?"
"TypeScript로 하라고 했는데 JavaScript로 하네..."
"rm -rf 쓰지 말라고 했는데 또 쓰네..."

리뷰하고 수정하는 시간이 너무 길었다.
더 좋은 방법이 없을까 찾다가,
Cursor라는 이름을 듣게 됐다.
```

### 기대와 의문

```
"Cursor가 좋다던데..."
"뭐가 다른 거지?"
"Copilot이랑 비슷하다던데?"

설치하고 열어봤다.
```

---

## 📖 1장: 익숙한 것들

### 첫인상: "어? 똑같은데?"

```
Cursor를 열었다.
Agent 모드가 있다. Copilot에도 있었다.
Plan 모드가 있다. Copilot에도 있었다.
Rules가 있다. Copilot의 Instructions랑 같다.

"뭐야, 다 똑같잖아?"
```

### 하나씩 확인해보자

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

### 중간 정리

```
"거의 다 똑같네?"
"그럼 왜 Cursor로 오라는 거지?"
"뭔가 다른 게 있을 텐데..."
```

---

## 📖 2장: 그런데 문제가 있다

### Rules/Instructions의 한계

Rules를 작성해봤다.

```
# .cursorrules

- 항상 TypeScript를 사용하세요
- 모든 함수에 JSDoc을 작성하세요
- rm -rf 명령은 절대 사용하지 마세요
```

결과는?

```
Agent: [JavaScript 코드 생성]
당신: "TypeScript로 하라고 했잖아..."

Agent: [JSDoc 없이 작성]
당신: "JSDoc 작성하라고 했는데..."

Agent: [rm -rf 사용]
당신: "쓰지 말라고 했는데!!!"
```

### 왜 이런 걸까?

```
Rules도, Instructions도
결국 "프롬프트"다.

프롬프트 = 요청
요청 = 안 지킬 수 있음

"이렇게 해줘" → 가끔 안 함
"이거 하지 마" → 가끔 함
```

### Copilot도 똑같은 문제

```
이건 Cursor만의 문제가 아니다.
Copilot의 Instructions도 마찬가지.

프롬프트로는 AI를 완벽히 제어할 수 없다.
```

### 절망의 순간

```
"그럼 Cursor나 Copilot이나 똑같은 거 아냐?"
"어차피 리뷰해야 하는 건 마찬가지네..."
"왜 Cursor가 좋다고 하는 거지?"

그때, Hooks를 발견했다.
```

---

## 📖 3장: Hooks의 발견

### Hooks란?

```
Settings에서 뭔가를 발견했다.
"Hooks"라는 메뉴가 있다.

"이건 뭐지? Copilot에는 없었는데..."

클릭해봤다.
```

### Hooks의 정체

```
Hooks = Agent 동작을 감시하고 제어하는 코드

Rules: 프롬프트 (요청)
Hooks: 코드 (강제)

"프롬프트가 아니라 코드로 제어한다고?"
```

### 동작 원리

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

### 깨달음

```
"잠깐, 이게 되면..."

Rules: "rm -rf 쓰지 마" → 가끔 씀
Hooks: block: true → 절대 못 씀

"이거다!"
"이게 Copilot과의 차이구나!"
```

### Copilot vs Cursor

| 특징 | Copilot | Cursor |
|------|---------|--------|
| **Agent 모드** | ✅ | ✅ |
| **Plan 모드** | ✅ | ✅ |
| **Instructions/Rules** | ✅ | ✅ |
| **Prompts/Commands** | ✅ | ✅ |
| **MCP** | ✅ | ✅ |
| **Hooks** | ❌ 없음 | ✅ **있음!** |

### 프롬프트 vs 코드

| 특징 | Rules/Instructions | Hooks |
|------|-------------------|-------|
| **성격** | 요청 (프롬프트) | 강제 (코드) |
| **준수** | 가끔 안 지킴 | 100% 지킴 |
| **리뷰** | 필요함 | 불필요 |
| **안전** | 위험 가능 | 안전 보장 |

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] Copilot과 Cursor의 공통점 이해
- [ ] Rules의 한계 인식 (프롬프트의 한계)
- [ ] Hooks의 발견과 이해
- [ ] Hooks로 Agent 완벽 제어

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

## 💡 에필로그: 첫 번째 발견을 마치며

### 1교시에서 배운 것

```
Copilot → Cursor 전환

처음: "똑같은 거 아냐?"
  ↓
Rules 체험: "여전히 프롬프트 문제..."
  ↓
Hooks 발견: "오! 이건 다르다!"
  ↓
Hooks 체험: "이게 Cursor의 핵심이구나!"
```

### 효과

```
Before (Copilot/Rules만):
- AI 코드 생성: 5분
- 리뷰 및 수정: 15분
- 총 20분

After (Hooks 사용):
- AI 코드 생성: 5분
- 리뷰 및 수정: 3분 (70% 감소!)
- 총 8분
```

### 다음 질문

```
"Hooks가 Cursor의 핵심이구나!"
"그런데... Hooks 말고 또 뭐가 있지?"

2교시에서 계속...
```

---

## ⏭ 다음 교시

[2교시: 두 번째 발견 - 다채로운 기능](../session-02/README.md)

---

## 🔗 빠른 링크

- [Project 1: Rules 기본](./projects/01-rules-basic/README.md)
- [Project 2: Rules Globs](./projects/02-rules-globs/README.md)
- [Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)
- [Project 4: Hooks 보안](./projects/04-hooks-security/README.md)

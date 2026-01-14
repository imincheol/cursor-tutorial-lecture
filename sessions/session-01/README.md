# 1교시: Rules & Hooks - AI를 제어하는 법

## 📋 목차

- [왜 Cursor로 와야 하는가?](#왜-cursor로-와야-하는가)
- [문제: AI가 말을 안 듣는다](#문제-ai가-말을-안-듣는다)
- [해결책 1: Rules](#해결책-1-rules)
- [해결책 2: Hooks](#해결책-2-hooks)
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

대부분의 기능은 Copilot과 비슷하지만, **AI를 제어하는 방법**이 다릅니다.

---

## 😤 문제: AI가 말을 안 듣는다

### Copilot의 한계

#### Instructions (지침)
```
문제: 지침도 결국 프롬프트
결과: 잘 안 지켜짐

예시:
"항상 TypeScript를 사용하세요"
→ 가끔 JavaScript로 작성
→ 리뷰 필요

"모든 함수에 JSDoc을 작성하세요"
→ 절반만 작성
→ 리뷰 필요

"에러 처리를 반드시 포함하세요"
→ 가끔 빠뜨림
→ 리뷰 필요
```

**핵심 문제**: 프롬프트는 "요청"일 뿐, "강제"가 아닙니다.

---

## ✅ 해결책 1: Rules

### Copilot Instructions vs Cursor Rules

#### Copilot Instructions
```
위치: 전역 설정
적용: 모든 파일에 동일하게
문제: 세밀한 제어 불가
```

#### Cursor Rules
```
위치: 프로젝트/폴더/파일별
적용: globs 패턴으로 조건부
장점: 세밀한 제어 가능
```

### 실전 예시

**시나리오**: 테스트 파일에만 다른 규칙 적용

**Copilot**:
```
불가능
→ 모든 파일에 동일한 규칙만 가능
```

**Cursor**:
```
가능
→ *.test.js.mdc 파일 생성
→ 테스트 파일에만 적용
```

### 하지만...

**Rules도 결국 프롬프트입니다.**

```
문제: 여전히 안 지킬 수 있음
결과: 리뷰 필요

예시:
"절대 rm -rf 명령 사용 금지"
→ 가끔 사용
→ 위험!
```

---

## 🔒 해결책 2: Hooks (진짜 해결책!)

### 프롬프트의 한계를 넘어서

**Hooks = 코드 레벨 제어**

```
프롬프트 (Rules):
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

### 프롬프트 vs Hooks

| 특징 | Rules (프롬프트) | Hooks (코드) |
|------|-----------------|-------------|
| **성격** | 요청 | 강제 |
| **지킴** | 가끔 안 지킴 | 100% 지킴 |
| **리뷰** | 필요 | 불필요 |
| **안전** | 위험 가능 | 안전 보장 |

---

## 🎯 학습 목표

이 교시를 마치면:

- [ ] Rules로 조건부 규칙 작성 (세밀한 제어)
- [ ] Hooks로 Agent 동작 강제 차단 (완벽한 제어)
- [ ] 리뷰 시간 70% 단축
- [ ] 위험한 작업 100% 차단

**소요 시간**: 50분

---

## 🚀 실습 프로젝트

### [Project 1: Rules 기본](./projects/01-rules-basic/README.md)
**목표**: 전역/폴더별 Rules 작성

**배울 것**:
- 전역 `.cursorrules` 작성
- 폴더별 `.cursorrules` 작성
- 규칙 우선순위 이해

**문제 인식**: Rules도 프롬프트라서 완벽하지 않음

**소요 시간**: 10분

---

### [Project 2: Rules Globs 패턴](./projects/02-rules-globs/README.md)
**목표**: globs 패턴으로 조건부 규칙

**배울 것**:
- `*.test.js.mdc` - 테스트 파일만
- `*.api.js.mdc` - API 파일만
- 파일 타입별 다른 규칙

**Copilot과의 차이**: Copilot은 불가능, Cursor만 가능!

**소요 시간**: 10분

---

### [Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)
**목표**: Hook으로 Agent 동작 감시

**배울 것**:
- `preToolExecution`: 실행 전 체크
- `postToolExecution`: 실행 후 로깅
- Agent가 무엇을 하는지 100% 파악

**깨달음**: "아, 이제 Agent를 완전히 볼 수 있구나!"

**소요 시간**: 10분

---

### [Project 4: Hooks 보안](./projects/04-hooks-security/README.md)
**목표**: Hook으로 위험한 작업 강제 차단

**배울 것**:
- 위험 명령 차단 (`rm -rf`, `DROP TABLE`)
- 폴더 보호 (`.env`, `config/`)
- 감사 로그 (모든 파일 수정 기록)

**깨달음**: "이제 안전하다! 리뷰 시간이 70% 줄었다!"

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 문제 인식 (10분)

이 README를 읽으면서:
1. Copilot의 한계 공감
2. Rules의 한계 이해
3. Hooks의 필요성 깨달음

### Step 2: Rules 실습 (20분)

1. **[Project 1: Rules 기본](./projects/01-rules-basic/README.md)** (10분)
   - 전역/폴더별 규칙
   - "Rules도 프롬프트구나..."

2. **[Project 2: Rules Globs](./projects/02-rules-globs/README.md)** (10분)
   - 조건부 규칙
   - "Copilot보다 낫네!"

### Step 3: Hooks 실습 (30분)

1. **[Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)** (10분)
   - Agent 감시
   - "오, 이제 보이네!"

2. **[Project 4: Hooks 보안](./projects/04-hooks-security/README.md)** (20분)
   - 강제 차단
   - "완벽하다! 이제 안전해!"

### Step 4: 복습 (10분)

- [ ] Rules와 Instructions의 차이 설명 가능?
- [ ] Hooks의 강력함 체감?
- [ ] 리뷰 시간 단축 효과 확인?

---

## 💡 핵심 깨달음

### Before (Copilot)
```
Instructions (프롬프트)
  ↓
AI가 가끔 안 지킴
  ↓
리뷰에 시간 다 쏟음
  ↓
😤 답답함
```

### After (Cursor)
```
Rules (조건부 프롬프트)
  ↓
더 나아졌지만 여전히 프롬프트
  ↓
Hooks (코드 레벨 제어)
  ↓
100% 강제 차단
  ↓
😊 안심!
```

---

## 🎓 실전 효과

### 리뷰 시간 단축

**Before**:
```
AI 코드 생성: 5분
리뷰 및 수정: 15분
총 20분
```

**After (Hooks 사용)**:
```
AI 코드 생성: 5분
리뷰 및 수정: 3분 (70% 감소!)
총 8분
```

### 안전성 향상

**Before**:
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

**1교시를 완료하면 AI를 완벽하게 제어할 수 있습니다!** 🎉

---

## 🔗 빠른 링크

- [Project 1: Rules 기본](./projects/01-rules-basic/README.md)
- [Project 2: Rules Globs](./projects/02-rules-globs/README.md)
- [Project 3: Hooks 기본](./projects/03-hooks-basic/README.md)
- [Project 4: Hooks 보안](./projects/04-hooks-security/README.md)

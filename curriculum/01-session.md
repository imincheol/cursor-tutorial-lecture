# 🎓 1교시: IDE 모드 - Copilot 차이점 & 기본 설정

> ⏱ 50분 | IDE 모드 Part 1

---

## 📋 이 시간의 목표

- [ ] Copilot과 비슷한 기능들의 **차이점** 파악
- [ ] Rules 설정 (globs 패턴)
- [ ] Hooks로 Agent 동작 제어

---

## 1️⃣ Copilot과 비슷한 것들 - 차이만 빠르게 (20분)

### Rules vs Instructions

둘 다 "AI에게 주는 지침"이지만:

| Copilot Instructions | Cursor Rules |
|---------------------|--------------|
| settings.json 텍스트 | `.cursor/rules/*.mdc` 파일 |
| 전체 적용만 | **globs 패턴** 조건부 적용 |
| 개인 설정만 | 팀 Rules (Git 공유 가능) |

📚 **공식 문서**: https://docs.cursor.com/context/rules

### 🔥 실습: globs 패턴 Rules 작성

**TSX 파일 전용 Rule:**
```markdown
<!-- .cursor/rules/react.mdc -->
---
globs: ["**/*.tsx"]
---
# React 컴포넌트 규칙

- 함수형 컴포넌트 사용
- Props는 interface로 정의
- 컴포넌트명은 PascalCase
```

**API 폴더 전용 Rule:**
```markdown
<!-- .cursor/rules/api.mdc -->
---
globs: ["**/api/**/*.ts"]
---
# API 규칙

- 모든 API 함수는 try-catch 필수
- 에러는 커스텀 에러 클래스 사용
- 응답 타입 명시
```

**테스트 파일 전용 Rule:**
```markdown
<!-- .cursor/rules/test.mdc -->
---
globs: ["**/*.test.ts", "**/*.spec.ts"]
---
# 테스트 규칙

- describe/it 구조 사용
- 테스트명은 한글로 명확하게
- AAA 패턴 (Arrange-Act-Assert)
```

### Plan Mode (Copilot에도 있음)

둘 다 "계획 먼저, 실행 나중" 가능.
Cursor만의 차이는 크지 않음 → 넘어감

### MCP (Copilot에도 있음)

둘 다 MCP 지원. 차이 거의 없음 → 넘어감

📚 **공식 문서**: https://docs.cursor.com/context/mcp/overview

---

## 2️⃣ Hooks - Agent 동작 제어 (30분) 🪝

### Copilot에는 없다!

```
Copilot: Agent가 뭘 하든 통제 불가
Cursor: Hooks로 모든 동작 감시/제어
```

📚 **공식 문서**: https://docs.cursor.com/agent/hooks

### Hooks 개념

```
┌─────────────────────────────────────────────────────────────┐
│  일반 흐름:                                                 │
│  프롬프트 → Agent 판단 → 도구 실행 → 결과                   │
├─────────────────────────────────────────────────────────────┤
│  Hooks 적용:                                                │
│  프롬프트 → Agent 판단 → [🪝 Hook] → 도구 실행 → 결과       │
│                              │                              │
│                       감사/차단/수정                        │
└─────────────────────────────────────────────────────────────┘
```

### Hook 타입

| Hook | 시점 | 용도 |
|------|------|------|
| `preToolExecution` | 도구 실행 전 | 차단, 수정 |
| `postToolExecution` | 도구 실행 후 | 로깅, 알림 |

### Hooks 설정

```json
// Cursor Settings
{
  "cursor.hooks.enabled": true,
  "cursor.hooks.path": ".cursor/hooks"
}
```

### 🔥 실습: 감사 로그 Hook

```javascript
// .cursor/hooks/audit-log.js
module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    
    console.log(`[${new Date().toISOString()}] Tool: ${tool}`);
    console.log(`  Args: ${JSON.stringify(args)}`);
    
    return { allow: true };
  }
};
```

### 🔥 실습: 위험 명령 차단

```javascript
// .cursor/hooks/block-dangerous.js
const BLOCKED_PATTERNS = [
  /rm\s+-rf\s+\//,           // rm -rf /
  /DROP\s+DATABASE/i,         // DROP DATABASE
];

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    
    if (tool === 'terminal' || tool === 'shell') {
      const command = args.command || '';
      
      for (const pattern of BLOCKED_PATTERNS) {
        if (pattern.test(command)) {
          console.error(`🚫 차단됨: ${command}`);
          return { 
            allow: false, 
            reason: '위험한 명령이 차단되었습니다.' 
          };
        }
      }
    }
    
    return { allow: true };
  }
};
```

### 🔥 실습: 특정 폴더 보호

```javascript
// .cursor/hooks/protect-folders.js
const PROTECTED = [
  '/src/core/',
  '/src/config/',
  '/.env',
];

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    
    if (tool === 'write' || tool === 'edit') {
      const filePath = args.path || '';
      
      for (const protectedPath of PROTECTED) {
        if (filePath.includes(protectedPath)) {
          return {
            allow: false,
            reason: `보호된 경로입니다: ${protectedPath}`
          };
        }
      }
    }
    
    return { allow: true };
  }
};
```

### 🔥 실습: 민감 정보 마스킹

```javascript
// .cursor/hooks/mask-secrets.js
const SECRETS = [
  /sk-[a-zA-Z0-9]{48}/g,     // OpenAI API Key
  /ghp_[a-zA-Z0-9]{36}/g,    // GitHub Token
];

module.exports = {
  postToolExecution: async (context) => {
    let { output } = context;
    
    for (const pattern of SECRETS) {
      output = output.replace(pattern, '[MASKED]');
    }
    
    return { output };
  }
};
```

### 실무 활용 사례

| 사례 | Hook |
|------|------|
| 팀 정책 강제 | 특정 패턴 코드 차단 |
| 감사 로그 | 모든 Agent 동작 기록 |
| 보안 | 민감 정보 마스킹 |
| 실수 방지 | 위험 명령 차단 |

---

## ✅ 1교시 체크리스트

- [ ] Rules globs 패턴 이해
- [ ] `.cursor/rules/` 폴더에 Rule 작성해보기
- [ ] Hooks 개념 이해
- [ ] `.cursor/hooks/` 폴더에 Hook 작성해보기

---

## 🔗 이 교시 관련 공식 문서

| 주제 | 링크 |
|------|------|
| Rules | https://docs.cursor.com/context/rules |
| Hooks | https://docs.cursor.com/agent/hooks |
| Agent Overview | https://docs.cursor.com/agent/overview |

---

## ⏭ 다음 교시

**🍵 10분 휴식**

**[2교시: IDE 모드 - Debug Mode & Visual Editor →](./02-session.md)**
- Debug Mode로 버그 추적
- Visual Editor로 실시간 UI 편집
- IDE에서 Multi-Agent 사용 (주의점)

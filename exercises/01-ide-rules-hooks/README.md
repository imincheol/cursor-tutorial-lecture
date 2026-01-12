# 📁 1교시 실습: IDE 모드 - Rules & Hooks

> 📚 **공식 문서**
> - Rules: https://docs.cursor.com/context/rules
> - Hooks: https://docs.cursor.com/agent/hooks

---

## Rules 실습

### globs 패턴으로 조건부 적용

```markdown
<!-- .cursor/rules/react.mdc -->
---
globs: ["**/*.tsx"]
---
# React 규칙
- 함수형 컴포넌트 사용
- Props는 interface로 정의
```

```markdown
<!-- .cursor/rules/api.mdc -->
---
globs: ["**/api/**/*.ts"]
---
# API 규칙
- try-catch 필수
- 에러 타입 명시
```

```markdown
<!-- .cursor/rules/test.mdc -->
---
globs: ["**/*.test.ts", "**/*.spec.ts"]
---
# 테스트 규칙
- describe/it 구조
- 한글 테스트명
```

---

## Hooks 실습

### 설정

```json
// Cursor Settings
{
  "cursor.hooks.enabled": true,
  "cursor.hooks.path": ".cursor/hooks"
}
```

### 감사 로그

```javascript
// .cursor/hooks/audit-log.js
module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    console.log(`[${new Date().toISOString()}] Tool: ${tool}`);
    return { allow: true };
  }
};
```

### 위험 명령 차단

```javascript
// .cursor/hooks/block-dangerous.js
const BLOCKED = [/rm\s+-rf\s+\//, /DROP\s+DATABASE/i];

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    if (tool === 'terminal') {
      const cmd = args.command || '';
      for (const pattern of BLOCKED) {
        if (pattern.test(cmd)) {
          return { allow: false, reason: '차단됨' };
        }
      }
    }
    return { allow: true };
  }
};
```

### 폴더 보호

```javascript
// .cursor/hooks/protect-folders.js
const PROTECTED = ['/src/core/', '/.env'];

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    if (tool === 'write' || tool === 'edit') {
      const path = args.path || '';
      for (const p of PROTECTED) {
        if (path.includes(p)) {
          return { allow: false, reason: `보호됨: ${p}` };
        }
      }
    }
    return { allow: true };
  }
};
```

---

## 실습 과제

1. [ ] `.cursor/rules/` 폴더 생성
2. [ ] globs 패턴 Rule 작성
3. [ ] `.cursor/hooks/` 폴더 생성
4. [ ] 감사 로그 Hook 작성
5. [ ] 위험 명령 차단 Hook 작성

---

**[← 1교시 강의](../../curriculum/01-session.md)** | **[2교시 실습 →](../02-ide-debug-visual/README.md)**

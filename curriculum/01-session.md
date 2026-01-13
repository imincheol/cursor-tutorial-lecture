# 🎓 1교시: IDE 모드 - Copilot 차이점 & 기본 설정

> ⏱ 50분 | IDE 모드 Part 1

## 📑 목차

- [이 시간의 목표](#-이-시간의-목표)
- [1️⃣ Copilot과 비슷한 것들 (20분)](#️⃣-copilot과-비슷한-것들---차이만-빠르게-20분)
  - [Rules vs Instructions](#rules-vs-instructions)
  - [Commands vs Prompts](#commands-vs-prompts)
  - [MCP (Model Context Protocol)](#mcp-model-context-protocol)
  - [Plan Mode](#plan-mode)
- [2️⃣ Cursor에만 있는 것: Hooks (30분)](#️⃣-cursor에만-있는-것-hooks-30분)
  - [Hooks란?](#hooks란)
  - [Hook의 동작 원리](#hook의-동작-원리)
  - [Hook 타입 상세](#hook-타입-상세)
  - [실전 Hook 예제](#실전-hook-예제)
- [체크리스트](#-1교시-체크리스트)
- [다음 교시](#-다음-교시)

---

## 📋 이 시간의 목표

- [ ] Copilot과 비슷한 기능들의 **차이점** 파악
- [ ] **Rules**: globs 패턴으로 조건부 규칙 적용
- [ ] **Hooks**: Agent 동작 감시/제어 (핵심!)

---

## 💡 이 교시에서 배울 것

### Rules (globs 패턴)
Copilot Instructions는 전체 프로젝트에만 적용되지만, Cursor Rules는 특정 파일 패턴에만 적용 가능합니다.

**예시**:
- `*.tsx` 파일에만 "함수형 컴포넌트 사용" 규칙
- `**/api/**` 폴더에만 "try-catch 필수" 규칙
- `*.test.ts` 파일에만 "describe/it 사용" 규칙

### Hooks (Agent 제어)
Agent가 도구를 실행하기 전/후에 JavaScript 코드를 실행해서 제어할 수 있습니다.

**예시**:
- `rm -rf` 같은 위험한 명령 자동 차단
- 특정 폴더 보호 (`.env`, `config/` 등)
- 모든 Agent 동작 로그 기록

---

## 1️⃣ Copilot과 비슷한 것들 - 차이만 빠르게 (20분)

### Rules vs Instructions

둘 다 "AI에게 주는 지침"이지만:

| Copilot Instructions | Cursor Rules |
|---------------------|--------------|
| settings.json 텍스트 | `.cursor/rules/*.mdc` 파일 |
| 전체 적용만 | **globs 패턴** 조건부 적용 |
| 개인 설정만 | 팀 Rules (Git 공유 가능) |

📚 **공식 문서**: https://cursor.com/docs/context/rules

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

📚 **공식 문서**: https://cursor.com/docs/context/mcp/overview

---

## 2️⃣ Hooks - Agent 동작 제어 (30분) 🪝

### Copilot에는 없다!

```
Copilot: Agent가 뭘 하든 통제 불가
Cursor: Hooks로 모든 동작 감시/제어
```

📚 **공식 문서**: https://cursor.com/docs/agent/hooks

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

### Hook의 동작 원리 🔍

#### Hook 실행 시점
```
1. 사용자가 프롬프트 입력
2. Agent가 도구 사용 결정 (예: "파일을 수정할게")
3. [🪝 preToolExecution] Hook 실행 - 실행 전 검증
4. 도구 실제 실행 (파일 수정)
5. [🪝 postToolExecution] Hook 실행 - 실행 후 처리
```

#### Hook 함수 구조
```javascript
module.exports = {
  // 도구 실행 전 - 차단/수정 가능
  preToolExecution: async (context) => {
    const { tool, args } = context;

    // 검증 로직
    if (문제_발견) {
      return {
        allow: false,           // 실행 차단
        reason: "차단 이유"      // 사용자에게 표시
      };
    }

    // 수정 로직
    args.modifiedArgs = 수정된_인자;

    return { allow: true };     // 실행 허용
  },

  // 도구 실행 후 - 결과 처리
  postToolExecution: async (context) => {
    const { tool, args, result } = context;

    // 결과 분석 및 추가 처리
    console.log(`${tool} 실행 완료`);

    return { allow: true };
  }
};
```

### Hook 타입 상세

#### 1. `preToolExecution` - 실행 전 검증/수정
**호출 시점**: Agent가 도구를 사용하기로 결정한 직후, 실제 실행 전
**주요 용도**: 보안 검증, 명령어 수정, 실행 차단

```javascript
// 실제 context 객체 구조
{
  tool: "terminal",           // 사용하는 도구 이름
  args: {                     // 도구에 전달되는 인자들
    command: "git push origin main"
  }
}
```

**주요 도구들 (tool 값)**:
- `terminal` - 터미널 명령 실행
- `shell` - Shell Mode 명령
- `write` - 파일 쓰기
- `edit` - 파일 수정
- `read` - 파일 읽기
- `grep` - 텍스트 검색
- `run_terminal_cmd` - 터미널 명령 (다른 이름으로도 호출)

#### 2. `postToolExecution` - 실행 후 처리
**호출 시점**: 도구 실행 완료 후
**주요 용도**: 로깅, 결과 분석, 후속 조치

```javascript
// 실제 context 객체 구조
{
  tool: "terminal",
  args: { command: "git status" },
  result: {                    // 실행 결과
    success: true,
    output: "On branch main\n..."
  }
}
```

### Hook의 실행 흐름 상세 🔄

```
프롬프트: "README 파일 요약해줘"
         ↓
Agent 판단: read 도구 사용 결정
         ↓
🪝 preToolExecution 실행
    - tool: "read"
    - args: { path: "README.md" }
    - 검증: 파일 존재 여부, 권한 확인
         ↓
실제 파일 읽기 실행
         ↓
🪝 postToolExecution 실행
    - tool: "read"
    - args: { path: "README.md" }
    - result: { success: true, content: "..." }
    - 로깅: "README 읽기 완료"
         ↓
최종 응답 사용자에게 전달
```

### Hooks 설정

```json
// Cursor Settings
{
  "cursor.hooks.enabled": true,
  "cursor.hooks.path": ".cursor/hooks"
}
```

### 🔥 실습: 감사 로그 Hook

**실행 예시:**
```javascript
// .cursor/hooks/audit-log.js
module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;

    // 모든 도구 실행 로깅
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] 🔧 Tool: ${tool}`);

    // 터미널 명령어 상세 로깅
    if (tool === 'terminal') {
      console.log(`  💻 Command: ${args.command}`);
    }

    // 파일 작업 로깅
    if (tool === 'write' || tool === 'edit') {
      console.log(`  📁 File: ${args.path}`);
    }

    return { allow: true };
  },

  postToolExecution: async (context) => {
    const { tool, result } = context;

    // 실행 결과 로깅
    if (result?.success) {
      console.log(`✅ ${tool} 실행 성공`);
    } else {
      console.log(`❌ ${tool} 실행 실패: ${result?.error}`);
    }
  }
};
```

**실제 출력 예시:**
```
[2024-01-13T10:30:15.123Z] 🔧 Tool: terminal
  💻 Command: git status
✅ terminal 실행 성공

[2024-01-13T10:30:20.456Z] 🔧 Tool: read
  📁 File: src/App.js
✅ read 실행 성공
```

### 🔥 실습: 위험 명령 차단

```javascript
// .cursor/hooks/block-dangerous.js
const DANGER_LEVELS = {
  CRITICAL: '🚨 치명적',
  HIGH: '⚠️ 높음',
  MEDIUM: '🟡 보통'
};

const BLOCKED_COMMANDS = [
  // 치명적 위험
  {
    pattern: /rm\s+-rf\s+\/[^\/]/,  // rm -rf / (루트 삭제)
    level: 'CRITICAL',
    reason: '시스템 전체 삭제 명령어'
  },
  {
    pattern: /DROP\s+DATABASE/i,    // 데이터베이스 삭제
    level: 'CRITICAL',
    reason: '데이터베이스 삭제 명령어'
  },
  {
    pattern: /:(){:|:&};:/,         // Fork 폭탄
    level: 'CRITICAL',
    reason: '시스템 리소스 고갈 공격'
  },

  // 높은 위험
  {
    pattern: /rm\s+-rf\s+\.\.$/,    // rm -rf .. (상위 디렉토리 삭제)
    level: 'HIGH',
    reason: '프로젝트 외부 파일 삭제'
  },
  {
    pattern: /git\s+push\s+.*--force/,  // 강제 푸시
    level: 'HIGH',
    reason: '강제 푸시 (히스토리 손실 위험)'
  }
];

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;

    // 터미널 명령어만 검사
    if (tool === 'terminal' || tool === 'shell') {
      const command = args.command || '';

      for (const rule of BLOCKED_COMMANDS) {
        if (rule.pattern.test(command)) {
          console.log(`${DANGER_LEVELS[rule.level]} 위험 명령어 감지: ${rule.reason}`);

          return {
            allow: false,
            reason: `${DANGER_LEVELS[rule.level]} ${rule.reason}입니다. 정말 실행하시겠습니까?`
          };
        }
      }
    }

    // 파일 작업 위험 검사
    if (tool === 'write' || tool === 'edit') {
      const filePath = args.path || '';

      // 시스템 파일 수정 시도
      if (filePath.startsWith('/etc/') || filePath.startsWith('/System/')) {
        return {
          allow: false,
          reason: '시스템 파일 수정은 허용되지 않습니다.'
        };
      }

      // 설정 파일 백업 권장
      if (filePath.includes('config') || filePath.includes('.env')) {
        console.log('⚠️ 설정 파일을 수정합니다. 백업을 권장합니다.');
      }
    }

    return { allow: true };
  }
};
```

**차단되는 명령어 예시:**
```
❌ rm -rf /            → 🚨 치명적 시스템 전체 삭제 명령어
❌ DROP DATABASE       → 🚨 치명적 데이터베이스 삭제 명령어
❌ rm -rf ..           → ⚠️ 높음 프로젝트 외부 파일 삭제
❌ git push --force    → ⚠️ 높음 강제 푸시 (히스토리 손실 위험)
```

### 🔥 실습: 특정 폴더 보호

**실행 예시:**
```javascript
// .cursor/hooks/protect-folders.js
const PROTECTION_RULES = [
  // 치명적 보호 - 수정 불가
  {
    paths: ['/src/core/', '/src/auth/', '/.env'],
    level: 'CRITICAL',
    allowEdit: false,
    reason: '핵심 시스템 파일'
  },

  // 조건부 보호 - 업무 시간 외 수정 가능
  {
    paths: ['/src/config/', '/database/'],
    level: 'CONDITIONAL',
    allowEdit: () => {
      const hour = new Date().getHours();
      return hour >= 9 && hour <= 18; // 업무 시간만 허용
    },
    reason: '업무 시간 외 수정 금지'
  },

  // 경고 보호 - 수정 가능하지만 경고
  {
    paths: ['/src/api/', '/src/components/common/'],
    level: 'WARNING',
    allowEdit: true,
    reason: '공통 컴포넌트 - 신중한 수정 필요'
  }
];

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;

    if (tool === 'write' || tool === 'edit') {
      const filePath = args.path || '';

      for (const rule of PROTECTION_RULES) {
        const isProtected = rule.paths.some(protectedPath =>
          filePath.includes(protectedPath)
        );

        if (isProtected) {
          // 치명적 보호
          if (rule.level === 'CRITICAL' && !rule.allowEdit) {
            return {
              allow: false,
              reason: `${rule.reason} - 수정이 허용되지 않습니다.`
            };
          }

          // 조건부 보호
          if (rule.level === 'CONDITIONAL') {
            const isAllowed = typeof rule.allowEdit === 'function'
              ? rule.allowEdit()
              : rule.allowEdit;

            if (!isAllowed) {
              return {
                allow: false,
                reason: `${rule.reason} - 현재 시간에는 수정이 불가능합니다.`
              };
            }
          }

          // 경고 보호
          if (rule.level === 'WARNING') {
            console.log(`⚠️ ${rule.reason}: ${filePath}`);
            console.log('계속 진행하시려면 확인해주세요.');
          }
        }
      }
    }

    return { allow: true };
  }
};
```

**보호 예시:**
```
❌ /src/core/auth.js 수정 시도 → "핵심 시스템 파일 - 수정이 허용되지 않습니다."
❌ 퇴근 후 /src/config 수정 → "업무 시간 외 수정 금지"
⚠️ /src/api/user.js 수정 → "공통 컴포넌트 - 신중한 수정 필요"
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
| Rules | https://cursor.com/docs/context/rules |
| Hooks | https://cursor.com/docs/agent/hooks |
| Agent Overview | https://cursor.com/docs/agent/overview |

---

## ⏭ 다음 교시

**🍵 10분 휴식**

**[2교시: IDE 모드 - Debug Mode & Visual Editor →](./02-session.md)**
- Debug Mode로 버그 추적
- Visual Editor로 실시간 UI 편집
- IDE에서 Multi-Agent 사용 (주의점)

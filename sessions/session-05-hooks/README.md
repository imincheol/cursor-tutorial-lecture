# 5장: Hooks - AI Agent 제어의 핵심

> **프롬프트가 아닌 코드로 AI Agent를 100% 제어합니다**

## 📝 강의 개요

안녕하세요. 이번 장에서는 Cursor의 가장 핵심적인 차별화 기능인 **Hooks**를 배웁니다.

2장에서 Rules의 한계를 경험했습니다. Rules는 프롬프트이기 때문에 AI가 가끔 무시합니다. Hooks는 **코드**로 Agent를 제어하므로 100% 강제할 수 있습니다.

**학습 목표**:

- preToolExecution으로 사전 차단
- postToolExecution으로 사후 점검
- 위험 명령 100% 차단
- Hooks API 명세 이해
- 서드파티 Hooks 활용

**공식 문서**:
- [Agent Hooks](https://cursor.com/docs/agent/hooks) - Hooks API 명세
- [서드파티 Hooks](https://cursor.com/docs/agent/third-party-hooks) - 커뮤니티 Hooks
- [보안 설정](https://cursor.com/docs/agent/security) - Agent 보안

---

## 🎯 Rules vs Hooks

### Rules (프롬프트)

```
AGENTS.md:
- rm -rf 명령은 절대 사용하지 마세요

결과: AI가 가끔 무시함 ❌
```

### Hooks (코드)

```javascript
// .cursor/hooks/security.js
export async function preToolExecution(context) {
  const { args } = context;

  if (args.command?.includes('rm -rf')) {
    return {
      block: true,  // 강제 차단!
      reason: '위험한 명령어입니다'
    };
  }

  return { block: false };
}

결과: 100% 차단 ✅
```

---

## 📚 Hooks API 명세

### Hook 파일 위치

```
프로젝트 루트:
  .cursor/
    hooks/
      security.js          # 보안 Hook
      logger.js            # 로깅 Hook
      validator.js         # 검증 Hook
```

### preToolExecution

Agent가 도구를 실행하기 **전**에 호출됩니다.

```javascript
// .cursor/hooks/security.js
export async function preToolExecution(context) {
  const { tool, args, metadata } = context;

  // tool: 실행하려는 도구 이름 (예: "Shell", "Write", "Read")
  // args: 도구에 전달될 인자
  // metadata: 추가 정보

  // 차단하려면
  return {
    block: true,
    reason: '차단 이유를 여기에 작성'
  };

  // 허용하려면
  return { block: false };
}
```

**사용 시나리오**:
- 위험한 명령어 차단
- 특정 파일 접근 제한
- 권한 검증
- 작업 승인 요청

### postToolExecution

Agent가 도구를 실행한 **후**에 호출됩니다.

```javascript
// .cursor/hooks/logger.js
export async function postToolExecution(context) {
  const { tool, args, result, metadata } = context;

  // result: 도구 실행 결과

  // 로깅
  console.log(`[Hook] ${tool} 실행 완료`);
  console.log(`[Hook] 결과:`, result);

  // 결과 수정 가능
  return {
    modifiedResult: result  // 결과를 변경하려면
  };
}
```

**사용 시나리오**:
- 작업 로깅
- 결과 검증
- 통계 수집
- 알림 전송

### Context 객체 구조

```typescript
interface HookContext {
  tool: string;           // 도구 이름
  args: any;              // 도구 인자
  metadata: {
    timestamp: number;    // 실행 시각
    sessionId: string;    // 세션 ID
    userId: string;       // 사용자 ID
  };
  result?: any;           // postToolExecution에서만 사용
}
```

### Hook 작성 베스트 프랙티스

1. **빠르게 실행**: Hook은 동기적으로 실행되므로 빠르게 완료되어야 함
2. **에러 처리**: try-catch로 에러 처리
3. **명확한 이유**: 차단 시 명확한 이유 제공
4. **로깅**: 중요한 동작은 로그 남기기
5. **테스트**: Hook을 충분히 테스트

```javascript
// 좋은 예시
export async function preToolExecution(context) {
  try {
    const { tool, args } = context;

    // 빠른 검증
    if (tool === 'Shell' && args.command?.includes('rm -rf')) {
      console.log('[Security] 위험한 명령 차단:', args.command);
      return {
        block: true,
        reason: '`rm -rf` 명령은 보안상 차단되었습니다.'
      };
    }

    return { block: false };
  } catch (error) {
    console.error('[Hook Error]', error);
    return { block: false };  // 에러 시 허용 (또는 차단)
  }
}
```

---

## 🚀 실습: Hooks 기본 동작

이제 Hooks API를 직접 사용해봅시다!

### [Project 1: Hooks 기본 동작 이해](./projects/01-hooks-basic/README.md)

**학습 내용**:
- `.cursor/hooks/` 폴더 생성
- `preToolExecution` Hook 구현
- `postToolExecution` Hook 구현
- Context 객체 사용법
- Agent 동작 추적 (로깅)

**실습 방식**:

로깅 Hook을 만들어 Agent가 어떤 도구를 사용하는지 추적합니다. `preToolExecution`으로 실행 전 로그를 남기고, `postToolExecution`으로 실행 후 결과를 기록합니다.

**제공 파일**:
- `.cursor/hooks/logger.js` - 로깅 Hook (일부 구현됨)
- `src/index.js` - 테스트용 파일

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-hooks-basic/README.md)

---

## 🔌 서드파티 Hooks

커뮤니티에서 제공하는 Hooks를 설치하여 사용할 수 있습니다.

### 인기 있는 서드파티 Hooks

1. **Security Hooks**: 위험한 명령 차단
2. **Linter Hooks**: 코드 스타일 검증
3. **Git Hooks**: Git 작업 자동화
4. **Notification Hooks**: Slack, Discord 알림
5. **Analytics Hooks**: 사용 통계 수집

### 서드파티 Hook 설치 예시

```bash
# npm으로 설치
npm install @cursor/hooks-security

# .cursor/hooks/security.js에서 import
import { dangerousCommandHook } from '@cursor/hooks-security';

export const preToolExecution = dangerousCommandHook;
```

**참고 문서**: [서드파티 Hooks](https://cursor.com/docs/agent/third-party-hooks)

### 커스텀 Hook 공유

자신이 만든 Hook을 npm에 배포하여 공유할 수 있습니다:

```bash
# package.json
{
  "name": "@your-name/cursor-hook-security",
  "version": "1.0.0",
  "main": "index.js",
  "keywords": ["cursor", "hooks", "security"]
}

# npm에 배포
npm publish
```

## 🔒 보안 설정

Hooks와 함께 사용할 수 있는 추가 보안 설정:

### Agent 권한 제한

```json
// .cursor/config.json
{
  "agent": {
    "permissions": {
      "shell": "prompt",      // Shell 명령 실행 시 확인
      "write": "allow",       // 파일 쓰기 허용
      "delete": "deny",       // 파일 삭제 거부
      "network": "prompt"     // 네트워크 요청 시 확인
    }
  }
}
```

### 민감한 파일 보호

```javascript
// .cursor/hooks/file-protection.js
const PROTECTED_PATHS = [
  '.env',
  'secrets.json',
  'credentials.yaml',
  '~/',
  '/etc/',
  '/usr/'
];

export async function preToolExecution(context) {
  const { tool, args } = context;

  if (tool === 'Write' || tool === 'Delete') {
    const path = args.path || '';
    
    for (const protected_path of PROTECTED_PATHS) {
      if (path.includes(protected_path)) {
        return {
          block: true,
          reason: `보호된 경로입니다: ${protected_path}`
        };
      }
    }
  }

  return { block: false };
}
```

**참고 문서**: [Agent 보안](https://cursor.com/docs/agent/security)

---

## 🚨 실제 사고 사례

2024년 12월, Claude CLI가 홈 디렉터리를 삭제한 사고가 있었습니다:

```bash
rm -rf tests/ patches/ plan/ ~/
```

끝의 `~/`가 홈 디렉터리 전체를 가리켜서 Desktop, Documents 등이 모두 삭제되었습니다.

**Hooks로 방지**:

- preToolExecution에서 `~/` 패턴 감지
- 100% 차단
- 사고 예방

---

## 🚀 실습: 보안 Hooks

이제 실제 사고를 방지하는 보안 Hook을 만들어봅시다!

### [Project 2: 위험 명령 차단 실습](./projects/02-hooks-security/README.md)

**학습 내용**:

- Hooks로 위험한 명령 차단하기
- `rm -rf` 같은 위험 명령 100% 차단
- 실제 사고 사례 이해 및 예방

**실습 방식**:

2024년 12월 Claude CLI 사고 사례를 바탕으로, Hooks를 사용하여 위험한 명령을 100% 차단하는 보안 시스템을 구현합니다.

**제공 파일**:
- `.cursor/hooks/security.js` - 보안 Hook
- `src/index.js` - 테스트용 파일

**실습 예시**:
- Agent에게 "테스트 파일 삭제해줘" 요청
- Agent가 `rm -rf ~/` 실행 시도
- `preToolExecution` → 위험 패턴 감지 → **차단!**
- "위험한 명령이 차단되었습니다" 메시지

**실제 사고 사례**:
- 2024년 12월, Claude CLI가 `rm -rf tests/ patches/ plan/ ~/` 실행
- 사용자의 홈 디렉터리 전체 삭제 (Desktop, Documents 등)
- Hooks로 100% 예방 가능!

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-hooks-security/README.md)

---

## ⏭ 다음 장

[6장: Visual Editor - 클릭 기반 UI 수정](../session-06-visual/README.md)

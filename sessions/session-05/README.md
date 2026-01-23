# 5장: Hooks - AI Agent 제어의 핵심

> **프롬프트가 아닌 코드로 AI Agent를 100% 제어합니다**

## 📝 강의 개요

안녕하세요. 이번 장에서는 Cursor의 가장 핵심적인 차별화 기능인 **Hooks**를 배웁니다.

1장에서 Rules의 한계를 경험했습니다. Rules는 프롬프트이기 때문에 AI가 가끔 무시합니다. Hooks는 **코드**로 Agent를 제어하므로 100% 강제할 수 있습니다.

**학습 목표**:

- preToolExecution으로 사전 차단
- postToolExecution으로 사후 점검
- 위험 명령 100% 차단

---

## 🎯 Rules vs Hooks

### Rules (프롬프트)

```
.cursorrules:
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

## 🚀 실습 프로젝트

### [Project 1: Hooks 기본 동작 이해](./projects/01-hooks-basic/README.md)

**학습 내용**:

- Hooks의 `preToolExecution` 이해
- Hooks의 `postToolExecution` 이해
- Agent 동작 감시 및 로깅

**실습 방식**:

Agent가 도구를 실행하기 전/후에 Hook이 어떻게 동작하는지 확인합니다. 로깅 Hook을 작성하여 Agent의 모든 동작을 추적합니다.

**제공 파일**:
- `.cursor/hooks/logger.js` - Hook 구현
- `src/index.js` - 테스트용 파일

**실습 예시**:
- Agent에게 "파일 읽어줘" 요청
- `preToolExecution` → "파일을 읽으려고 합니다" 로그
- Agent가 파일 읽기 실행
- `postToolExecution` → "파일 읽기 완료" 로그

---

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

---

## ⏭ 다음 장

[6장: Agent Skills & Subagents](../session-06/README.md)

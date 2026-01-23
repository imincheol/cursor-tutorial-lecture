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

### Project 1: Hooks 기본 (예정)

### Project 2: 보안 Hooks (예정)

※ 프로젝트는 추후 추가 예정입니다.

---

## ⏭ 다음 장

[6장: Agent Skills & Subagents](../session-06/README.md)

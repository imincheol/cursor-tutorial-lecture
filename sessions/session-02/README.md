# 2장: Rules - AI에게 지침 주기

> **프로젝트별 규칙으로 AI 응답을 제어합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Instructions vs Rules](#1부-instructions-vs-rules)
- [2부: Cursor Rules 설정 방법](#2부-cursor-rules-설정-방법)
- [3부: Rules의 한계](#3부-rules의-한계)

---

## 📝 강의 개요

AI에게 지침을 줘서 응답을 제어하는 방법을 배웁니다. Copilot에서는 **Instructions**, Cursor에서는 **Rules**라고 부르며, 기능은 거의 동일합니다.

**학습 목표**:

- Copilot Instructions와 Cursor Rules 비교
- Rules 설정 방법 (IDE, 파일, 팀)
- glob 패턴으로 파일별 규칙 적용
- Rules의 한계 인식 (→ 3장 Hooks로 해결)

---

## 1부: Instructions vs Rules

### Copilot의 Instructions vs Cursor의 Rules

| 항목 | Copilot | Cursor |
|------|---------|--------|
| 명칭 | Instructions | Rules |
| IDE 설정 | Settings → GitHub Copilot → Instructions | Settings → Cursor Settings → Rules |
| 파일 설정 | `.github/copilot-instructions.md` | `.cursor/rules/`, `AGENTS.md` |
| 폴더별 규칙 | 지원 | 지원 |
| 팀 공유 | 제한적 | Team Rules, Remote Rules |

**핵심**: 기능은 거의 동일. Cursor가 팀 협업 기능이 더 풍부합니다.

---

## 2부: Cursor Rules 설정 방법

### 방법 1: IDE에서 설정

- Settings → Cursor Settings → Rules
- User Rules (전역) 또는 Project Rules (프로젝트별)

### 방법 2: 파일로 설정 (권장)

**최신 구조 (.cursor/rules/)**:

```
프로젝트 루트/
  .cursor/
    rules/
      react-patterns.mdc       # Rule with frontmatter
      api-guidelines.md        # Simple markdown rule
      frontend/                # 폴더로 구조화 가능
        components.md
```

**간단한 구조 (AGENTS.md)**:

```
프로젝트 루트/
  AGENTS.md                    # 간단한 마크다운 형식
```

**레거시 방식**:

```
프로젝트 루트/
  .cursorrules                 # 단일 파일 (deprecated 예정)
```

### Rule 타입 (4가지)

| Rule 타입 | 설명 | 사용 시나리오 |
|----------|------|--------------|
| **Always Apply** | 모든 채팅에 자동 적용 | 프로젝트 전체 스타일 |
| **Apply Intelligently** | AI가 description 기반으로 판단 | 특정 상황에만 필요한 규칙 |
| **Apply to Specific Files** | glob 패턴 매칭 파일에만 적용 | 파일 타입별 규칙 |
| **Apply Manually** | @-mention으로 수동 적용 | 필요할 때만 사용 |

### Frontmatter 메타데이터 (`.mdc` 파일)

```markdown
---
description: "React 컴포넌트 작성 시 Tailwind와 Framer Motion 사용"
globs: ["**/*.tsx", "**/*.jsx"]
alwaysApply: false
---

# React 컴포넌트 규칙

- 모든 컴포넌트에 Tailwind CSS 사용
- 애니메이션은 Framer Motion 사용
- 함수형 컴포넌트 우선
```

### AGENTS.md - 간단한 대안

```markdown
# Project Instructions

## Code Style

- Use TypeScript for all new files
- Prefer functional components in React
- Use snake_case for database columns

## Architecture

- Follow the repository pattern
- Keep business logic in service layers
```

**AGENTS.md의 장점**:
- 간단한 마크다운 형식
- 메타데이터 불필요
- 하위 디렉토리에도 배치 가능 (Nested AGENTS.md)

### glob 패턴 예시

```markdown
# .cursor/rules/typescript.mdc
---
description: "TypeScript 파일 작성 규칙"
globs: ["**/*.ts", "**/*.tsx"]
---

- 항상 strict 모드 사용
- interface보다 type 사용
```

```markdown
# .cursor/rules/testing.mdc
---
description: "테스트 파일 작성 규칙"
globs: ["**/*.test.js", "**/*.spec.js"]
---

- describe, it, expect 사용
- 테스트 이름은 한국어로 작성
```

### 방법 3: Team Rules (팀 플랜)

[Cursor 대시보드](https://cursor.com/dashboard?tab=team-content)에서 팀 전체 규칙 관리:

- 팀 전체에 자동 적용
- 강제 적용 가능 (사용자가 끌 수 없음)
- 조직 표준 코딩 규칙 통일

### 방법 4: Remote Rules (GitHub)

GitHub 저장소에서 규칙을 가져와 자동 동기화:

1. Cursor Settings → Rules, Commands
2. `+ Add Rule` → Remote Rule (Github)
3. GitHub 저장소 URL 입력
4. 자동 동기화

### 권장 사항

| 프로젝트 규모 | 권장 방식 |
|-------------|----------|
| 간단한 프로젝트 | `AGENTS.md` |
| 중간 규모 | `.cursor/rules/` 폴더 |
| 대규모/팀 | Team Rules + Remote Rules |

**참고 문서**: [Cursor Rules 공식 문서](https://cursor.com/docs/context/rules)

---

## 🚀 실습: Project 1 - Rules 간단 실습

이제 배운 내용을 바로 실습해봅시다!

### [Project 1: Rules 간단 실습](./projects/01-rules-simple/README.md)

**학습 내용**:

- `.cursorrules` 파일로 AI 응답 제어
- Rules가 AI의 답변에 어떻게 영향을 주는지 확인
- Rules의 한계 경험

**실습 방식**:

간단한 테스트 파일(`test.js`)과 **3개의 샘플 Rules**를 제공합니다. 샘플 Rules를 복사해서 `.cursorrules` 파일에 붙여넣고, 같은 요청을 반복하면서 Rules가 어떻게 동작하는지 체험합니다.

**제공 파일**:
- `test.js` - 테스트용 간단한 JavaScript 파일
- `sample-rules-1-korean.md` - 한국어 응답 규칙
- `sample-rules-2-style.md` - 코드 스타일 규칙
- `sample-rules-3-strict.md` - 엄격한 규칙 (한계 테스트용)

**실습 예시**:
- 샘플 Rule 1 적용 → 주석과 설명이 한국어로 변경
- 샘플 Rule 2 적용 → JSDoc, 화살표 함수, 세미콜론 사용
- 샘플 Rule 3 적용 → "절대 console.log 사용하지 마세요" → 하지만 무시됨 (한계!)

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-rules-simple/README.md)

---

## 3부: Rules의 한계

### Rules는 프롬프트입니다

```
.cursorrules에 이렇게 작성해도:

- 항상 TypeScript를 사용하세요
- rm -rf 명령은 절대 사용하지 마세요
- 무조건 console.log는 금지입니다
```

**문제**:

- AI가 가끔 무시합니다
- "요청"일 뿐, "강제"가 아닙니다
- 위험한 명령도 실행될 수 있습니다

### 실제 사례: Claude CLI rm -rf 사건

AI가 규칙을 무시하면 치명적인 결과를 초래할 수 있습니다:

```bash
# AI가 실수로 실행한 명령
rm -rf /important-directory
```

Rules로는 이런 상황을 **100% 방지할 수 없습니다**.

### 해결책: Hooks (3장)

**3장에서 배울 Hooks를 사용하면 100% 강제할 수 있습니다.**

```javascript
// .cursor/hooks/security.js
module.exports = {
  preToolExecution: async (tool, args) => {
    // rm -rf 명령 감지 시 무조건 차단
    if (args.command?.includes('rm -rf')) {
      return { blocked: true, reason: "위험한 명령입니다" };
    }
    return { blocked: false };
  }
};
```

- Rules = 프롬프트 (요청)
- Hooks = 코드 (강제)

**다음 장에서 Hooks로 Rules의 한계를 해결하는 방법을 배웁니다!**

---

## 💡 학습 가이드

### 진행 방법

1. **1부: Instructions vs Rules** - 개념 비교
2. **2부: Rules 설정 방법** - 4가지 방법 학습
3. **👉 실습: Project 1** - Rules 직접 체험
4. **3부: Rules의 한계** - 프롬프트의 한계 인식

### 학습 팁

- 실습에서 **샘플 Rule 3**을 꼭 테스트해보세요 (한계 체험)
- Rules의 한계를 경험하는 것이 중요합니다
- 3장 Hooks에서 이 한계를 해결합니다

---

## 📊 학습 정리

**1부: Instructions vs Rules**
- ✅ Copilot Instructions와 Cursor Rules 비교
- ✅ 기능은 거의 동일, Cursor가 팀 기능 풍부

**2부: Rules 설정 방법**
- ✅ IDE, 파일(.cursor/rules/, AGENTS.md), Team Rules, Remote Rules
- ✅ glob 패턴으로 파일별 규칙 적용
- ✅ **실습**: Rules 간단 실습

**3부: Rules의 한계**
- ✅ Rules는 프롬프트 (요청 ≠ 강제)
- ✅ AI가 무시할 수 있음
- ✅ 3장 Hooks로 해결 예고

**다음 장 예고**:

3장에서는 **Hooks**를 배웁니다. Hooks는 코드로 Agent 동작을 **100% 제어**합니다. Rules의 한계를 완벽히 해결합니다.

---

## ⏭ 다음 장

[3장: Hooks - 코드로 Agent 제어하기](../session-03/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: Rules 간단 실습](./projects/01-rules-simple/README.md) - 2부 학습 후 진행

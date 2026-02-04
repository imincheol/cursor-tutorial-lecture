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
- Rules의 한계 인식 (→ 4장 Hooks로 해결)

---

## 1부: Instructions vs Rules

### Copilot의 Instructions vs Cursor의 Rules

| 항목        | Copilot                                  | Cursor                             |
| ----------- | ---------------------------------------- | ---------------------------------- |
| 명칭        | Instructions                             | Rules                              |
| IDE 설정    | Settings → GitHub Copilot → Instructions | Settings → Cursor Settings → Rules |
| 파일 설정   | `.github/copilot-instructions.md`        | `.cursor/rules/`, `AGENTS.md`      |
| 폴더별 규칙 | 지원                                     | 지원                               |
| 팀 공유     | 제한적                                   | Team Rules, Remote Rules           |

**핵심**: 기능은 거의 동일. Cursor가 팀 협업 기능이 더 풍부합니다.

---

## 2부: Cursor Rules 설정 방법

### 방법 1: IDE에서 설정

- Settings → Cursor Settings → Rules
- User Rules (전역) 또는 Project Rules (프로젝트별)

### 방법 2: 파일로 설정 (권장)

#### 간단한 구조

##### 레거시 방식

위치

```
프로젝트 루트/
  .cursorrules                 # 단일 파일 (deprecated 예정)
```

##### AGENTS.md - 간단한 대안

위치

```
프로젝트 루트/
  AGENTS.md                    # 간단한 마크다운 형식
```

형식

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

참고

- [AGENTS.md](https://agents.md/)
- [AI를 위한 프로젝트 안내서: AGENTS.md와 CLAUDE.md](daleseo.com/agents-md/)

#### 최신 구조 (.cursor/rules/)

```
프로젝트 루트/
  .cursor/
    rules/
      react-patterns.mdc       # Rule with frontmatter
      api-guidelines.md        # Simple markdown rule
      frontend/                # 폴더로 구조화 가능
        components.md
```

##### Rule 타입 (4가지)

| Rule 타입                   | 설명                           | 사용 시나리오             |
| --------------------------- | ------------------------------ | ------------------------- |
| **Always Apply**            | 모든 채팅에 자동 적용          | 프로젝트 전체 스타일      |
| **Apply Intelligently**     | AI가 description 기반으로 판단 | 특정 상황에만 필요한 규칙 |
| **Apply to Specific Files** | glob 패턴 매칭 파일에만 적용   | 파일 타입별 규칙          |
| **Apply Manually**          | @-mention으로 수동 적용        | 필요할 때만 사용          |

**예시**:

1. **Always Apply** - frontmatter 없음 또는 `alwaysApply: true`

```markdown
# .cursor/rules/code-style.md

- 모든 코드에 JSDoc 주석 작성
- 함수명은 camelCase 사용
- 들여쓰기는 2칸
```

2. **Apply Intelligently** - `description` 필드 사용

```markdown
# .cursor/rules/api-guidelines.mdc

---

description: "REST API 엔드포인트 작성 시 적용되는 규칙"

---

- RESTful 네이밍 규칙 준수
- 에러 응답은 { error, message } 형식
```

3. **Apply to Specific Files** - `globs` 필드 사용

```markdown
# .cursor/rules/typescript.mdc

---

globs: ["**/*.ts", "**/*.tsx"]

---

- strict 모드 사용
- interface보다 type 사용
```

4. **Apply Manually** - `applyManually: true`

```markdown
# .cursor/rules/performance-review.mdc

---

applyManually: true

---

- 성능 최적화 체크리스트
- 메모리 누수 검사
- 번들 크기 확인
```

##### glob 패턴

**설명**

glob 패턴은 파일 경로를 매칭하는 패턴 문법입니다. 특정 파일 타입이나 경로에만 규칙을 적용할 때 사용합니다.

**주요 문법**:

- `*` - 한 폴더 내 모든 파일 (`*.js` = 현재 폴더의 모든 .js 파일)
- `**` - 모든 하위 폴더 포함 (`**/*.js` = 모든 하위 폴더의 .js 파일)
- `?` - 한 글자 매칭 (`file?.js` = file1.js, fileA.js 등)
- `[]` - 문자 범위 (`file[0-9].js` = file0.js ~ file9.js)
- `{}` - 여러 패턴 (`**/*.{js,ts}` = 모든 .js와 .ts 파일)

**예시**

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

### 권장 사항

| 프로젝트 규모   | 권장 방식                 |
| --------------- | ------------------------- |
| 간단한 프로젝트 | `AGENTS.md`               |
| 중간 규모       | `.cursor/rules/` 폴더     |
| 대규모/팀       | Team Rules + Remote Rules |

**참고 문서**: [Cursor Rules 공식 문서](https://cursor.com/docs/context/rules)

---

## 🚀 실습: Project 1 - Rules 간단 실습

이제 배운 내용을 바로 실습해봅시다!

### [Project 1: Rules 간단 실습](./projects/01-rules-simple/README.md)

**학습 내용**:

- `.cursorrules` 파일로 AI 응답 제어
- Rules가 AI의 답변에 어떻게 영향을 주는지 확인
- **Rule 타입 4가지 실습** (Always Apply, Apply Intelligently, Apply to Specific Files, Apply Manually)
- **glob 패턴 실습** (파일별 규칙 적용)
- Rules의 한계 경험

**실습 방식**:

간단한 테스트 파일(`test.js`)과 **3개의 샘플 Rules**를 제공합니다. 샘플 Rules를 복사해서 `.cursorrules` 파일에 붙여넣고, 같은 요청을 반복하면서 Rules가 어떻게 동작하는지 체험합니다.

**제공 파일**:

- `test.js` - 테스트용 간단한 JavaScript 파일
- `sample-rules-1-korean.md` - 한국어 응답 규칙 (Always Apply 예시)
- `sample-rules-2-style.md` - 코드 스타일 규칙 (Apply Intelligently 예시)
- `sample-rules-3-strict.md` - 엄격한 규칙 (한계 테스트용)

**실습 예시**:

1. **Rule 타입 실습**:
   - 샘플 Rule 1 (Always Apply) → 모든 응답이 한국어로 변경
   - 샘플 Rule 2 (Apply Intelligently) → 코드 작성 시 JSDoc, 화살표 함수 적용
   - glob 패턴 추가 → `**/*.js` 파일에만 규칙 적용

2. **glob 패턴 실습**:
   - `**/*.js` → 모든 JavaScript 파일에만 적용
   - `**/*.test.js` → 테스트 파일에만 적용
   - `src/**/*.ts` → src 폴더의 TypeScript 파일에만 적용

3. **한계 테스트**:
   - 샘플 Rule 3 적용 → "절대 console.log 사용하지 마세요" → 하지만 무시됨 (한계!)

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-rules-simple/README.md)

---

## 3부: Rules의 한계

### Rules는 프롬프트입니다

```
Rules에 이렇게 작성해도:

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
    if (args.command?.includes("rm -rf")) {
      return { blocked: true, reason: "위험한 명령입니다" };
    }
    return { blocked: false };
  },
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
- 4장 Hooks에서 이 한계를 해결합니다

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
- ✅ 4장 Hooks로 해결 예고

**다음 장 예고**:

3장에서는 **CLI Agent**를 배웁니다. IDE 없이 터미널에서도 Agent를 사용할 수 있습니다.

---

## ⏭ 다음 장

[3장: CLI Agent - 터미널에서 개발](../session-03-cli/README.md)

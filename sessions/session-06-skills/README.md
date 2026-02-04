# 6장: Agent Skills - 재사용 가능한 능력

> **스킬을 설치하면 AI가 더 똑똑해집니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Skills란?](#1부-skills란)
- [2부: 기본 제공 Skills 사용](#2부-기본-제공-skills-사용)
- [3부: 커스텀 Skill 작성](#3부-커스텀-skill-작성)
- [4부: 외부 스킬 생태계](#4부-외부-스킬-생태계)

---

## 📝 강의 개요

안녕하세요. 이번 장에서는 **Agent Skills**를 배웁니다.

Skills는 Agent에게 특정 능력을 부여하는 재사용 가능한 모듈입니다. 외부 커뮤니티에서 만든 스킬을 설치하면 AI가 해당 분야의 베스트 프랙티스를 알게 됩니다.

**학습 목표**:

- Skills의 개념과 Rules와의 차이 이해
- 기본 제공 Skills 사용 방법 (create-rule, create-skill, update-cursor-settings)
- 커스텀 Skill 작성 방법
- 외부 스킬 생태계 활용 (skills.sh, cursor.directory)

**공식 문서**:
- [Agent Skills](https://cursor.com/docs/context/skills) - Skills 개요

---

## 1부: Skills란?

### Skills의 개념

Skills는 Agent에게 특정 능력을 부여하는 **재사용 가능한 지침 모듈**입니다.

```
Rules: "이 프로젝트에서는 Tailwind를 사용하세요"
Skills: "React 컴포넌트를 만들 때는 이런 패턴을 따르세요 + 예제 + 베스트 프랙티스"
```

### Rules vs Skills

| 항목 | Rules | Skills |
|------|-------|--------|
| 적용 방식 | 자동 참조 (항상 적용) | 수동 호출 (@skill-name 또는 명시적 언급) |
| 사용 편의성 | 높음 (설정 후 자동) | 낮음 (매번 언급 필요) |
| 범위 | 프로젝트 전체 규칙 | 특정 작업/워크플로우 |
| 복잡도 | 단순~중간 지침 | 복잡한 단계별 워크플로우 |
| 재사용 | 프로젝트 내 | 여러 프로젝트 간 공유 |
| 커뮤니티 | cursor.directory (Rules 공유) | skills.sh (Skills 생태계) |

**핵심 차이점**:

- **Rules는 자동으로 적용**되어 실무에서 더 강력하고 편리합니다
- **Skills는 수동으로 호출**해야 하므로 특수한 워크플로우에만 제한적으로 사용됩니다
- 대부분의 경우 Rules를 사용하는 것이 권장되며, Skills는 복잡한 단계별 작업이 필요할 때만 사용합니다

### Skills 구조

```
.cursor/
  skills/
    react-patterns/
      SKILL.md           # 스킬 정의
      examples/          # 예제 코드
        component.tsx
        hook.tsx
```

**SKILL.md 예시**:

```markdown
---
name: "React Patterns"
description: "React 컴포넌트 작성 베스트 프랙티스"
version: "1.0.0"
---

# React 컴포넌트 패턴

## 함수형 컴포넌트

- 항상 함수형 컴포넌트 사용
- Props는 구조 분해 할당
- 커스텀 훅으로 로직 분리

## 예제

@examples/component.tsx 참조
```

---

## 2부: 기본 제공 Skills 사용

Cursor는 기본적으로 유용한 Skills를 제공합니다. 이 Skills들은 `@skill-name` 형식으로 호출하거나 명시적으로 언급하여 사용할 수 있습니다.

### 1. create-rule Skill

**용도**: 프로젝트 규칙 파일 생성

Cursor Rules 파일을 자동으로 생성해주는 스킬입니다. 프로젝트의 코딩 스타일, 아키텍처 규칙 등을 정의할 때 사용합니다.

**사용 예시**:
```
"create-rule 스킬을 사용해서 TypeScript 프로젝트 규칙을 만들어줘.
다음 규칙을 포함해줘:
- 항상 함수형 컴포넌트 사용
- Props는 interface로 정의
- 파일명은 PascalCase"
```

**생성되는 파일**: `.cursor/rules/` 또는 `.cursorrules`

### 2. create-skill Skill

**용도**: 새로운 커스텀 Skill 작성

SKILL.md 파일을 자동으로 생성해주는 스킬입니다. 팀에서 반복적으로 사용하는 워크플로우를 스킬로 만들 때 사용합니다.

**사용 예시**:
```
"create-skill 스킬을 사용해서 API 검증 스킬을 만들어줘.
이 스킬은:
1. API 함수를 찾는다
2. 응답 형식을 확인한다
3. 표준 형식으로 변환한다
4. 에러 핸들링을 추가한다"
```

**생성되는 파일**: `.cursor/skills/<skill-name>/SKILL.md`

### 3. update-cursor-settings Skill

**용도**: Cursor/VSCode 설정 변경

`settings.json` 파일을 자동으로 수정해주는 스킬입니다. 에디터 설정을 빠르게 변경할 때 사용합니다.

**사용 예시**:
```
"update-cursor-settings 스킬을 사용해서 다음 설정을 변경해줘:
- 탭 크기: 2
- 자동 저장: 활성화
- 포맷 on save: 활성화"
```

**수정되는 파일**: `.vscode/settings.json` 또는 사용자 설정

### Skills 호출 방법

기본 제공 Skills를 사용하는 방법은 두 가지입니다:

1. **@ 기호로 참조**: `@create-rule 을 사용해서...`
2. **명시적 언급**: `"create-rule 스킬을 사용해서..."`

**중요**: Skills는 자동으로 적용되지 않으므로 반드시 명시적으로 호출해야 합니다.

---

## 3부: 커스텀 Skill 작성

### 스킬 생성

```bash
# .cursor/skills/my-skill/SKILL.md 생성
mkdir -p .cursor/skills/my-skill
touch .cursor/skills/my-skill/SKILL.md
```

**SKILL.md 작성**:

```markdown
---
name: "My Custom Skill"
description: "내 프로젝트만의 커스텀 스킬"
version: "1.0.0"
---

# My Custom Skill

이 스킬은 우리 프로젝트의 컴포넌트 생성 규칙을 정의합니다.

## 컴포넌트 구조

- `src/components/` 폴더에 생성
- PascalCase 네이밍
- 스타일은 같은 폴더에 `.module.css`

## 사용 방법

Agent에게 스킬을 참조하여 컴포넌트 생성을 요청합니다:
1. `src/components/Button/` 폴더 생성
2. `Button.tsx` 파일 생성
3. `Button.module.css` 파일 생성
4. `index.ts` 내보내기 파일 생성
```

### 스킬 사용

커스텀 스킬을 사용하는 방법:

```bash
# @ 기호로 참조
"@my-skill 을 사용해서 Button 컴포넌트 만들어줘"

# 또는 명시적 언급
"My Custom Skill을 사용해서 Button 컴포넌트 만들어줘"
```

### 실습 예시: Cursor Hook 생성 Skill

실습에서는 Cursor Hook을 자동으로 생성하는 스킬을 만들어봅니다:

**목표**: `.cursor/hooks/` 폴더에 Agent Hook 파일 자동 생성

**생성할 Hook들**:
- `logger.js` - Agent의 모든 도구 실행 로깅
- `security.js` - 위험한 명령어 차단 (rm -rf 등)
- `validator.js` - 파일 쓰기 전 민감한 정보 검증

**사용 시나리오**:
1. `create-skill`로 Cursor Hook Generator 스킬 생성
2. 생성한 스킬을 사용하여 여러 Hook 자동 생성
3. preToolExecution, postToolExecution 함수 자동 포함
4. JSDoc 주석과 에러 핸들링 자동 추가

**4장 연계**: 이 실습은 4장 Hooks에서 배운 내용을 Skills로 자동화합니다.

자세한 내용은 [Project 1 실습](./projects/01-skills-basic/README.md)을 참고하세요.

---

## 4부: 외부 스킬 생태계

### 커뮤니티 스킬 활용

직접 스킬을 만들지 않아도, **커뮤니티에서 공유하는 스킬**을 설치해서 사용할 수 있습니다.

### 🌟 skills.sh - The Agent Skills Directory

**URL**: [https://skills.sh](https://skills.sh)

**진짜 Skills 생태계**입니다. Cursor뿐만 아니라 여러 AI 에이전트가 공유하는 Skills 플랫폼입니다.

**특징**:
- **39,762개 이상의 Skills** (2026년 2월 기준)
- **17개 AI 에이전트 지원**: Cursor, Cline, Windsurf, Claude Code, GitHub Copilot, Goose 등
- **주요 기업 참여**: Vercel, Anthropic, Supabase, Expo, Google 등
- **간단한 설치**: `npx skills add <owner/repo>`

**인기 Skills Top 10**:
1. **vercel-react-best-practices** (91.6K) - Vercel의 React 베스트 프랙티스
2. **remotion-best-practices** (64.8K) - Remotion 비디오 제작 패턴
3. **frontend-design** (37.8K) - Anthropic의 프론트엔드 디자인 가이드
4. **agent-browser** (21.6K) - 브라우저 자동화 스킬
5. **vercel-composition-patterns** (21.0K) - React 컴포지션 패턴
6. **skill-creator** (19.3K) - 새로운 스킬 생성 도우미
7. **vercel-react-native-skills** (15.6K) - React Native 베스트 프랙티스
8. **supabase-postgres-best-practices** (10.4K) - Supabase/PostgreSQL 패턴
9. **seo-audit** (11.3K) - SEO 감사 자동화
10. **better-auth-best-practices** (7.2K) - Better Auth 인증 패턴

**설치 방법**:

```bash
# 1. Skills 검색
npx skills search react

# 2. Skill 설치
npx skills add vercel-labs/agent-skills/vercel-react-best-practices

# 3. 설치된 Skills 확인
npx skills list
```

**사용 예시**:

```bash
# Agent에게 설치한 스킬 사용 요청
"@vercel-react-best-practices 를 사용해서 Button 컴포넌트 만들어줘"
```

### 🌐 cursor.directory - Rules 공유 플랫폼

**URL**: [https://cursor.directory](https://cursor.directory)

**주의**: cursor.directory는 주로 **Rules**를 공유하는 플랫폼입니다. Skills가 아닌 Rules 중심입니다.

**특징**:
- 71,000+ 멤버 커뮤니티
- **Rules, MCP 서버** 탐색/생성
- Skills 공유는 제한적

**인기 카테고리**:
- TypeScript / JavaScript
- Python
- Next.js / React
- Vue / Svelte
- Node.js / Express
- TailwindCSS

**설치 방법**:
1. cursor.directory 방문
2. 원하는 **규칙** 검색
3. "Copy" 버튼 클릭
4. `.cursor/rules/` 또는 `.cursorrules`에 붙여넣기

**중요**: cursor.directory에서 다운로드한 내용은 **Rules**이므로 자동으로 적용됩니다. Skills처럼 수동으로 호출할 필요가 없습니다.

### 🎯 프레임워크별 추천

#### React 개발자

**skills.sh에서 설치**:
```bash
npx skills add vercel-labs/agent-skills/vercel-react-best-practices
npx skills add anthropics/skills/frontend-design
npx skills add vercel-labs/next-skills/next-best-practices
```

**cursor.directory에서 Rules 다운로드**:
- "React Best Practices"
- "Next.js 15 Guidelines"
- "Tailwind CSS with React"

#### Python 개발자

**skills.sh에서 설치**:
```bash
npx skills add supabase/agent-skills/supabase-postgres-best-practices
npx skills add wshobson/agents/fastapi-templates
npx skills add wshobson/agents/python-testing-patterns
```

**cursor.directory에서 Rules 다운로드**:
- "Python Best Practices"
- "FastAPI Guidelines"
- "Django Conventions"

### Skills vs Rules 선택 가이드

| 상황 | 추천 |
|------|------|
| 프로젝트 전체에 항상 적용할 규칙 | **cursor.directory에서 Rules 다운로드** |
| 특정 작업에만 사용할 워크플로우 | **skills.sh에서 Skills 설치** |
| 자동으로 적용되길 원함 | **Rules** |
| 필요할 때만 호출하고 싶음 | **Skills** |

**실무 팁**: 대부분의 경우 **Rules**를 사용하는 것이 더 편리합니다. Skills는 복잡한 단계별 워크플로우가 필요할 때만 사용하세요.

---

## 🚀 실습: Skills 기본 사용 및 커스텀 Skill 작성

이제 기본 제공 Skills를 사용하고 커스텀 Skill을 직접 작성해봅시다!

### [Project 1: Skills 기본 사용 및 커스텀 Skill 작성](./projects/01-skills-basic/README.md)

**학습 내용**:

- 기본 제공 Skills 사용 (create-rule, create-skill, update-cursor-settings)
- 커스텀 Skill 작성 (API 검증 Skill)
- Skill 활용 패턴 익히기

**실습 방식**:

1. **기본 Skills 사용**: create-rule, update-cursor-settings 스킬을 사용하여 프로젝트 설정
2. **커스텀 Skill 작성**: create-skill 스킬을 사용하여 API 검증 스킬 생성
3. **Skill 활용**: 작성한 API 검증 스킬로 실제 코드 변환

**실습 예시**:
- create-rule로 JavaScript 프로젝트 규칙 생성
- create-skill로 API Response Validation Skill 작성
- 작성한 스킬을 사용하여 API 함수를 표준 형식으로 변환

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-skills-basic/README.md)

---

## 💡 학습 가이드

### 진행 방법

1. **1부: Skills 개념** - Rules와의 현실적인 차이 이해
2. **2부: 기본 Skills** - create-rule, create-skill, update-cursor-settings 사용
3. **3부: 커스텀 Skill** - SKILL.md 구조 학습 및 작성
4. **4부: 외부 생태계** - skills.sh와 cursor.directory 활용
5. **👉 실습: Project 1** - 기본 Skills 사용 및 커스텀 Skill 작성

### 학습 팁

- **Rules를 우선 사용하세요**: 대부분의 경우 Rules가 더 편리합니다 (자동 적용)
- **Skills는 제한적으로**: 복잡한 워크플로우가 필요할 때만 사용
- **skills.sh 탐색**: 39,000+ 스킬 중 자신의 기술 스택에 맞는 것을 찾아보세요
- **cursor.directory는 Rules**: Skills가 아닌 Rules를 다운로드하는 곳입니다

---

## 📊 학습 정리

**1부: Skills란?**
- ✅ Skills의 개념과 Rules와의 현실적 차이
- ✅ Rules는 자동 적용, Skills는 수동 호출
- ✅ 실무에서는 Rules를 주로 사용

**2부: 기본 제공 Skills 사용**
- ✅ create-rule: 프로젝트 규칙 파일 생성
- ✅ create-skill: 커스텀 Skill 작성 도우미
- ✅ update-cursor-settings: 에디터 설정 변경

**3부: 커스텀 Skill 작성**
- ✅ SKILL.md 구조
- ✅ 스킬 생성 및 사용 방법
- ✅ API 검증 Skill 예시

**4부: 외부 스킬 생태계**
- ✅ skills.sh (39,762+ Skills, 17개 에이전트 지원)
- ✅ cursor.directory (Rules 공유 플랫폼)
- ✅ Skills vs Rules 선택 가이드

**다음 장 예고**:

7장에서는 **Subagents**를 배웁니다. Agent가 복잡한 작업을 자동으로 여러 하위 에이전트에게 분배하여 처리하는 방법을 알아봅니다.

---

## ⏭ 다음 장

[7장: Subagents - 자동 오케스트레이션](../session-07/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: Skills 기본 사용 및 커스텀 Skill 작성](./projects/01-skills-basic/README.md) - 2부, 3부 학습 후 진행

---

## 🔗 외부 리소스

- [skills.sh](https://skills.sh) - The Agent Skills Directory (39,762+ Skills)
- [cursor.directory](https://cursor.directory) - Rules 공유 커뮤니티 (71,000+ 멤버)
- [Cursor Skills 공식 문서](https://cursor.com/docs/context/skills)

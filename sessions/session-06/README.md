# 6장: Subagents - 자동 오케스트레이션

> **Agent가 복잡한 작업을 자동으로 분배합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Skills란?](#1부-skills란)
- [2부: 스킬 생성 및 사용](#2부-스킬-생성-및-사용)
- [3부: 외부 스킬 디렉토리](#3부-외부-스킬-디렉토리)

---

## 📝 강의 개요

안녕하세요. 이번 장에서는 **Agent Skills**를 배웁니다.

Skills는 Agent에게 특정 능력을 부여하는 재사용 가능한 모듈입니다. 외부 커뮤니티에서 만든 스킬을 설치하면 AI가 해당 분야의 베스트 프랙티스를 알게 됩니다.

**학습 목표**:

- Skills의 개념과 구조 이해
- 스킬 생성 및 사용 방법
- 외부 스킬 디렉토리 활용 (cursor.directory, cursor-skills)
- 프레임워크별 추천 스킬

**공식 문서**:
- [Agent Skills](https://cursor.com/docs/context/skills) - Skills 개요
- [Commands](https://cursor.com/docs/context/commands) - 커맨드 정의

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
| 범위 | 프로젝트 전체 규칙 | 특정 작업/도메인 능력 |
| 재사용 | 프로젝트 내 | 여러 프로젝트에서 재사용 |
| 복잡도 | 단순한 지침 | 복잡한 워크플로우 |
| 공유 | 제한적 | 커뮤니티 공유 가능 |

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

## 2부: 스킬 생성 및 사용

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
commands:
  - name: "create-component"
    description: "새 컴포넌트 생성"
---

# My Custom Skill

이 스킬은 우리 프로젝트의 컴포넌트 생성 규칙을 정의합니다.

## 컴포넌트 구조

- `src/components/` 폴더에 생성
- PascalCase 네이밍
- 스타일은 같은 폴더에 `.module.css`

## 커맨드

`/create-component Button` 실행 시:
1. `src/components/Button/` 폴더 생성
2. `Button.tsx` 파일 생성
3. `Button.module.css` 파일 생성
4. `index.ts` 내보내기 파일 생성
```

### 스킬 사용

```bash
# Agent에게 스킬 사용 요청
"@my-skill 을 사용해서 Button 컴포넌트 만들어줘"

# 또는 커맨드 직접 사용
"/create-component Button"
```

### Commands 정의

스킬에 커맨드를 정의하면 `/명령어`로 빠르게 실행할 수 있습니다:

```markdown
---
commands:
  - name: "create-api"
    description: "새 API 엔드포인트 생성"
    arguments:
      - name: "name"
        required: true
        description: "API 이름"
---
```

**참고 문서**: [Commands](https://cursor.com/docs/context/commands)

---

## 3부: 외부 스킬 디렉토리

### 커뮤니티 스킬 활용

직접 스킬을 만들지 않아도, **커뮤니티에서 공유하는 스킬**을 설치해서 사용할 수 있습니다.

### 🌐 cursor.directory

**URL**: [https://cursor.directory](https://cursor.directory)

**특징**:
- 71,000+ 멤버 커뮤니티
- Rules, MCP 서버 탐색/생성
- 인기 프레임워크 규칙 모음

**인기 카테고리**:
- TypeScript / JavaScript
- Python
- Next.js / React
- Vue / Svelte
- Node.js / Express
- TailwindCSS

**설치 방법**:
1. cursor.directory 방문
2. 원하는 스킬/규칙 검색
3. "Copy" 버튼 클릭
4. `.cursor/rules/` 또는 `.cursorrules`에 붙여넣기

### 🌐 cursor-skills.vercel.app

**URL**: [https://cursor-skills.vercel.app](https://cursor-skills.vercel.app)

**특징**:
- 베스트 프랙티스 저장소
- 체계적인 카테고리 분류
- 규칙, 분석, 템플릿, 예제 제공

**카테고리**:
- **PHP**: Laravel, Symfony, WordPress
- **Python**: Django, FastAPI, Flask
- **Node.js**: Express, NestJS
- **API**: REST, GraphQL
- **WebDesign**: CSS, Tailwind, SCSS
- **Mobile**: React Native, Flutter
- **DevOps**: Docker, Kubernetes, CI/CD

**설치 방법**:
1. cursor-skills.vercel.app 방문
2. 언어/프레임워크 선택
3. 규칙 복사
4. 프로젝트에 적용

### 🎯 프레임워크별 추천 스킬

#### React 개발자

```markdown
# cursor.directory에서 검색
- "React Best Practices"
- "Next.js 15 Guidelines"
- "Tailwind CSS with React"
- "React Hook Form"
- "Zustand State Management"
```

**추천 규칙 조합**:
```
.cursor/rules/
  react-patterns.md      # React 컴포넌트 패턴
  nextjs-conventions.md  # Next.js 규칙
  tailwind-classes.md    # Tailwind 유틸리티
```

#### Python 개발자

```markdown
# cursor.directory에서 검색
- "Python Best Practices"
- "FastAPI Guidelines"
- "Django Conventions"
- "SQLAlchemy Patterns"
- "Pydantic Models"
```

**추천 규칙 조합**:
```
.cursor/rules/
  python-style.md        # Python 스타일 가이드
  fastapi-patterns.md    # FastAPI 패턴
  testing-pytest.md      # pytest 규칙
```

#### 풀스택 개발자

```markdown
# 프론트엔드 + 백엔드 조합
- "TypeScript Strict Mode"
- "Next.js Full Stack"
- "Prisma ORM"
- "tRPC API"
- "Zod Validation"
```

### 스킬 설치 예시

**1. cursor.directory에서 Next.js 규칙 가져오기**:

```bash
# cursor.directory에서 복사한 내용
# .cursor/rules/nextjs.md 파일 생성

---
description: "Next.js 15 App Router 베스트 프랙티스"
globs: ["**/*.tsx", "**/*.ts"]
---

# Next.js 15 Guidelines

- App Router 사용
- Server Components 우선
- 클라이언트 컴포넌트는 'use client' 명시
- 서버 액션으로 폼 처리
...
```

**2. cursor-skills에서 FastAPI 규칙 가져오기**:

```bash
# .cursor/rules/fastapi.md 파일 생성

---
description: "FastAPI 베스트 프랙티스"
globs: ["**/*.py"]
---

# FastAPI Guidelines

- Pydantic 모델로 요청/응답 정의
- Dependency Injection 활용
- 비동기 엔드포인트 우선
- OpenAPI 문서 자동 생성 활용
...
```

---

## 🚀 실습 프로젝트

### [Project 1: 외부 스킬 설치 및 활용](./projects/01-skills-basic/README.md)

**학습 내용**:

- cursor.directory에서 스킬 검색
- 프로젝트에 스킬 설치
- 스킬이 AI 응답에 미치는 영향 확인

**실습 방식**:

cursor.directory에서 React 또는 Python 스킬을 검색하여 설치합니다. 스킬 설치 전후로 같은 요청을 해보고 AI 응답의 차이를 비교합니다.

**실습 예시**:
- 스킬 설치 전: "컴포넌트 만들어줘" → 기본적인 컴포넌트
- 스킬 설치 후: "컴포넌트 만들어줘" → 베스트 프랙티스가 적용된 컴포넌트

---

## 💡 학습 가이드

### 진행 방법

1. **1부: Skills 개념** - Rules와의 차이 이해
2. **2부: 스킬 생성** - SKILL.md 구조 학습
3. **3부: 외부 스킬** - 커뮤니티 스킬 활용
4. **👉 실습: Project 1** - 외부 스킬 설치 체험

### 학습 팁

- 자신의 기술 스택에 맞는 스킬을 cursor.directory에서 먼저 검색해보세요
- 여러 스킬을 조합하면 더 강력한 효과를 얻을 수 있습니다
- 팀에서 공통 스킬을 정의하면 코드 일관성이 높아집니다

---

## 📊 학습 정리

**1부: Skills란?**
- ✅ Skills의 개념과 Rules와의 차이
- ✅ 재사용 가능한 지침 모듈

**2부: 스킬 생성 및 사용**
- ✅ SKILL.md 구조
- ✅ Commands 정의

**3부: 외부 스킬 디렉토리**
- ✅ cursor.directory (71,000+ 커뮤니티)
- ✅ cursor-skills.vercel.app (베스트 프랙티스)
- ✅ 프레임워크별 추천 스킬

**다음 장 예고**:

7장에서는 **CLI Agent**를 배웁니다. IDE 없이 터미널에서도 Agent를 사용하여 개발하는 방법을 알아봅니다.

---

## ⏭ 다음 장

[7장: CLI Agent - 터미널에서 개발](../session-07/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: 외부 스킬 설치 및 활용](./projects/01-skills-basic/README.md) - 3부 학습 후 진행

---

## 🔗 외부 리소스

- [cursor.directory](https://cursor.directory) - 71,000+ 멤버 커뮤니티
- [cursor-skills.vercel.app](https://cursor-skills.vercel.app) - 베스트 프랙티스 저장소
- [Cursor Skills 공식 문서](https://cursor.com/docs/context/skills)

# 8장: Subagents - 자동 오케스트레이션

> **Agent가 복잡한 작업을 자동으로 분배합니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Subagents란?](#1부-subagents란)
- [2부: Built-in Subagents](#2부-built-in-subagents)
- [실습 1: Built-in Subagents 체험](#-실습-project-1---built-in-subagents-체험)
- [3부: Custom Subagents 만들기](#3부-custom-subagents-만들기)
- [실습 2: Custom Subagent 만들기](#-실습-project-2---custom-subagent-만들기)
- [4부: 실전 활용](#4부-실전-활용)

---

## 📝 강의 개요

안녕하세요. 이번 장에서는 **Subagents**를 배웁니다.

복잡한 작업을 요청하면 Agent가 자동으로 여러 하위 에이전트(Subagent)를 생성하여 병렬로 처리합니다. Cursor는 기본 제공되는 Built-in Subagents 외에도, 특정 역할을 가진 Custom Subagents를 직접 만들 수 있습니다.

**학습 목표**:

- Subagents의 개념과 동작 방식 이해
- Built-in Subagents 활용 (Explore, Bash, Browser)
- Custom Subagents 생성 (Code Reviewer, Debugger 등)
- 복잡한 작업의 효율적 처리

**공식 문서**:
- [Subagents](https://cursor.com/docs/context/subagents) - Subagents 개요
- [Cursor 2.4 Changelog](https://cursor.com/changelog/2-4) - Subagents & Skills 릴리스

---

## 1부: Subagents란?

### Subagents의 개념

Subagents는 메인 Agent가 **복잡한 작업을 분해**하여 여러 하위 에이전트에게 분배하는 기능입니다.

```
사용자: "이 프로젝트에 인증 시스템을 추가해줘"

메인 Agent:
  └─ Subagent 1: 사용자 모델 설계
  └─ Subagent 2: 로그인/회원가입 API 구현
  └─ Subagent 3: JWT 토큰 처리
  └─ Subagent 4: 프론트엔드 폼 구현
  └─ Subagent 5: 테스트 코드 작성
```

### 자동 오케스트레이션

사용자가 명시적으로 분배하지 않아도, Agent가 **자동으로 판단**하여 작업을 분할합니다.

**동작 방식**:
1. 사용자 요청 분석
2. 작업 분해 (Task Decomposition)
3. Subagent 생성 및 할당
4. 병렬 실행
5. 결과 통합

### Subagents vs 일반 Agent

| 항목 | 일반 Agent | Subagents |
|------|-----------|-----------|
| 처리 방식 | 순차적 | 병렬 |
| 복잡한 작업 | 시간 오래 걸림 | 빠름 |
| 컨텍스트 | 하나의 컨텍스트 | 분산된 컨텍스트 |
| 적합한 작업 | 단순 작업 | 복잡한 다단계 작업 |

### 컨텍스트 격리와 병렬 실행

Subagents의 핵심 장점:

1. **컨텍스트 격리**: 각 Subagent는 독립된 컨텍스트 윈도우를 가짐
2. **병렬 실행**: 여러 Subagent가 동시에 작업 수행
3. **전문화**: 특정 작업에 최적화된 프롬프트와 도구 사용
4. **재사용성**: 정의한 Subagent를 여러 프로젝트에서 활용

### 언제 사용하는가?

Subagents는 **기본적으로 활성화**되어 있습니다. 복잡한 작업을 요청하면 자동으로 동작합니다.

```bash
# 복잡한 작업 요청 시 자동으로 Subagents 사용
"전체 인증 시스템을 구현해줘"
"이 프로젝트를 TypeScript로 마이그레이션해줘"
"테스트 커버리지를 80%까지 올려줘"
```

💡 **참고**: 복잡한 작업 전 Agent가 불명확한 부분을 질문할 수 있습니다 (Clarification Questions, [2장 참조](../session-02-differentiators/README.md#1부-clarification-questions)).

---

## 2부: Built-in Subagents

Cursor는 컨텍스트 집약적인 작업을 위해 **3가지 Built-in Subagents**를 기본 제공합니다.

### Explore Subagent

**목적**: 코드베이스 탐색 및 분석

**왜 Subagent인가?**
- 코드베이스 탐색은 대량의 중간 출력 생성
- 빠른 모델 사용으로 병렬 검색 가능
- 메인 컨텍스트를 깨끗하게 유지

**사용 예시**:
```
"이 프로젝트에서 인증 관련 코드를 모두 찾아줘"

→ Explore Subagent가 자동으로:
  - 여러 파일 병렬 검색
  - 관련 코드 패턴 분석
  - 요약된 결과만 메인 Agent에 전달
```

### Bash Subagent

**목적**: 셸 명령어 시리즈 실행

**왜 Subagent인가?**
- 명령어 출력이 매우 장황함
- 출력을 격리하여 메인 Agent가 결정에 집중
- 로그가 아닌 결과만 필요

**사용 예시**:
```
"이 프로젝트의 의존성을 설치하고 테스트를 실행해줘"

→ Bash Subagent가 자동으로:
  - npm install 실행
  - 테스트 실행
  - 중요한 결과만 요약하여 전달
```

### Browser Subagent

**목적**: MCP 도구로 브라우저 제어

**왜 Subagent인가?**
- 브라우저 상호작용은 노이즈가 많은 DOM 스냅샷 생성
- 스크린샷과 HTML을 필터링하여 관련 결과만 추출
- 메인 Agent는 깨끗한 결과만 받음

**사용 예시**:
```
"localhost:3000에서 로그인 폼을 테스트해줘"

→ Browser Subagent가 자동으로:
  - 브라우저 열기
  - 폼 입력 및 제출
  - 결과 확인 후 요약 전달
```

### Built-in Subagents 비교

| Subagent | 목적 | 주요 이점 |
|----------|------|-----------|
| **Explore** | 코드베이스 탐색 | 병렬 검색, 빠른 모델 사용 |
| **Bash** | 명령어 실행 | 출력 격리, 결과 요약 |
| **Browser** | 브라우저 제어 | DOM 필터링, 관련 정보만 추출 |

💡 **자동 사용**: 이 Subagents는 설정 없이 Agent가 필요할 때 자동으로 사용합니다.

---

## 🚀 실습: Project 1 - Built-in Subagents 체험

이제 Built-in Subagents를 직접 체험해봅시다!

### [Project 1: Built-in Subagents 체험](./projects/01-subagents-builtin/README.md)

**학습 내용**:

- Explore Subagent로 코드베이스 탐색
- Bash Subagent로 복잡한 명령어 실행
- Browser Subagent로 웹 테스트
- 자동 분배 관찰

**실습 방식**:

복잡한 작업을 요청하면 Agent가 Built-in Subagents를 자동으로 사용합니다. 각 Subagent가 어떻게 동작하는지 관찰합니다.

**실습 예시**:
```
You: "이 프로젝트에서 API 엔드포인트를 모두 찾아서 테스트해줘"

Agent: [Built-in Subagents 자동 사용]
  - Explore Subagent: API 엔드포인트 파일 탐색
  - Bash Subagent: 테스트 서버 실행
  - Browser Subagent: 각 엔드포인트 테스트
  
→ 결과 요약 전달
```

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-subagents-builtin/README.md)

---

## 3부: Custom Subagents 만들기

Built-in Subagents 외에도 **특정 역할을 가진 Custom Subagents**를 직접 만들 수 있습니다.

### create-subagent 스킬

Cursor는 Custom Subagent 생성을 위한 스킬을 제공합니다:

```
"Code Reviewer Subagent를 만들어줘"

→ Agent가 create-subagent 스킬을 사용하여:
  - 적절한 파일 구조 생성
  - 역할에 맞는 시스템 프롬프트 작성
  - 저장 위치 선택 (.cursor/agents/ 또는 ~/.cursor/agents/)
```

### 파일 구조

Custom Subagent는 **YAML frontmatter + Markdown 시스템 프롬프트**로 구성됩니다:

```markdown
---
name: code-reviewer
description: Expert code review specialist. Use proactively after code changes.
---

You are a senior code reviewer ensuring high standards of code quality and security.

When invoked:
1. Run git diff to see recent changes
2. Focus on modified files
3. Begin review immediately

Review checklist:
- Code is clear and readable
- Functions and variables are well-named
- No duplicated code
- Proper error handling
- No exposed secrets or API keys
- Input validation implemented
- Good test coverage
- Performance considerations addressed

Provide feedback organized by priority:
- Critical issues (must fix)
- Warnings (should fix)
- Suggestions (consider improving)

Include specific examples of how to fix issues.
```

### 저장 위치

| 위치 | 범위 | 우선순위 | 용도 |
|------|------|----------|------|
| `.cursor/agents/` | 현재 프로젝트 | 높음 | 팀과 공유, Git에 커밋 |
| `~/.cursor/agents/` | 모든 프로젝트 | 낮음 | 개인용, 전역 사용 |

**프로젝트 레벨** (`.cursor/agents/`):
- 프로젝트 특화 Subagent
- 팀원과 공유 가능
- 버전 관리 가능

**사용자 레벨** (`~/.cursor/agents/`):
- 개인 워크플로우
- 모든 프로젝트에서 사용
- 개인 설정 유지

### 역할별 예시

#### 1. Code Reviewer (코드 리뷰어)

```markdown
---
name: code-reviewer
description: Expert code review specialist. Use proactively after code changes.
---

You are a senior code reviewer...
(품질, 보안, 유지보수성 검토)
```

**사용 시나리오**: 코드 작성 후 자동 리뷰

#### 2. Debugger (디버거)

```markdown
---
name: debugger
description: Debugging specialist for errors and test failures. Use proactively when encountering issues.
---

You are an expert debugger...
(에러 분석, 근본 원인 파악, 해결책 제시)
```

**사용 시나리오**: 버그 발생 시 자동 분석

#### 3. Data Scientist (데이터 분석가)

```markdown
---
name: data-scientist
description: Data analysis expert for SQL queries and BigQuery operations. Use proactively for data tasks.
---

You are a data scientist...
(SQL 쿼리 작성, 데이터 분석, 결과 시각화)
```

**사용 시나리오**: 데이터 분석 작업

#### 4. UI Designer (UI 디자이너)

```markdown
---
name: ui-designer
description: UI/UX specialist for responsive design and accessibility. Use proactively for frontend work.
---

You are a UI/UX designer...
(반응형 디자인, 접근성, 사용자 경험 개선)
```

**사용 시나리오**: UI 컴포넌트 개발

#### 5. Technical Writer (기술 문서 작성자)

```markdown
---
name: tech-writer
description: Documentation specialist for API docs and README files. Use proactively after feature completion.
---

You are a technical writer...
(API 문서, README, 사용 가이드 작성)
```

**사용 시나리오**: 기능 완성 후 문서화

### 베스트 프랙티스

#### 1. 명확한 Description 작성

```yaml
# ❌ 너무 모호함
description: Helps with code

# ✅ 구체적이고 실행 가능
description: Expert code review specialist. Proactively reviews code for quality, security, and maintainability. Use immediately after writing or modifying code.
```

#### 2. "Use Proactively" 키워드

Description에 "use proactively"를 포함하면 Agent가 자동으로 위임합니다:

```yaml
description: Code reviewer. Use proactively after code changes.
```

#### 3. 특정 도메인에 집중

각 Subagent는 **하나의 특정 작업**에 집중해야 합니다:

- ✅ Code Reviewer: 코드 품질만 검토
- ✅ Debugger: 버그 수정만 담당
- ❌ All-in-one: 모든 것을 하려는 Subagent (비효율적)

#### 4. 명확한 워크플로우 정의

시스템 프롬프트에 **단계별 워크플로우**를 명시:

```markdown
When invoked:
1. Run git diff to see recent changes
2. Focus on modified files
3. Begin review immediately
```

### Custom Subagent 생성 실습

**방법 1: Agent에게 요청**
```
"Code Reviewer Subagent를 .cursor/agents/에 만들어줘"
```

**방법 2: 직접 생성**
```bash
# 프로젝트 레벨
mkdir -p .cursor/agents
touch .cursor/agents/code-reviewer.md

# 사용자 레벨
mkdir -p ~/.cursor/agents
touch ~/.cursor/agents/code-reviewer.md
```

**방법 3: create-subagent 스킬 사용**
```
@create-subagent 스킬을 사용해서 Debugger Subagent를 만들어줘
```

---

## 🚀 실습: Project 2 - Custom Subagent 만들기

이제 Custom Subagent를 직접 만들어봅시다!

### [Project 2: Custom Subagent 만들기](./projects/02-subagents-custom/README.md)

**학습 내용**:

- `create-subagent` 스킬 사용
- Code Reviewer Subagent 생성
- 실제 코드 리뷰 실행
- 프로젝트 vs 사용자 레벨 비교

**실습 방식**:

Code Reviewer Subagent를 직접 만들고, 테스트 코드를 작성한 후 리뷰를 요청합니다. Subagent가 자동으로 코드를 검토하고 피드백을 제공합니다.

**실습 예시**:
```
You: "Code Reviewer Subagent를 .cursor/agents/에 만들어줘"

Agent: [create-subagent 스킬 사용]
  - code-reviewer.md 파일 생성
  - 시스템 프롬프트 작성
  
You: "간단한 로그인 함수를 작성하고 리뷰해줘"

Agent: [코드 작성 후 Code Reviewer Subagent 자동 호출]
  - Critical: 비밀번호 평문 저장 문제
  - Warning: 에러 처리 부족
  - Suggestion: 입력 검증 추가
```

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-subagents-custom/README.md)

---

## 4부: 실전 활용

### Built-in + Custom Subagents 조합

실제 프로젝트에서는 Built-in과 Custom Subagents를 함께 사용합니다.

#### 시나리오 1: 대규모 리팩토링

```
"이 프로젝트를 함수형 컴포넌트로 전환해줘"

Agent의 Subagent 분배:
  - Explore Subagent: 클래스 컴포넌트 파일 찾기
  - Subagent 1: components/ 폴더 리팩토링
  - Subagent 2: pages/ 폴더 리팩토링
  - Subagent 3: hooks 추출
  - Subagent 4: 테스트 업데이트
  - Code Reviewer Subagent: 변경사항 검토 (Custom)
```

#### 시나리오 2: 새 기능 구현

```
"결제 시스템 추가해줘"

Agent의 Subagent 분배:
  - Explore Subagent: 기존 결제 관련 코드 확인
  - Subagent 1: 결제 모델/스키마
  - Subagent 2: Stripe API 연동
  - Subagent 3: 결제 UI 컴포넌트
  - UI Designer Subagent: UI/UX 검토 (Custom)
  - Subagent 4: 웹훅 처리
  - Bash Subagent: 테스트 실행
  - Tech Writer Subagent: API 문서 작성 (Custom)
```

#### 시나리오 3: 마이그레이션

```
"JavaScript를 TypeScript로 마이그레이션해줘"

Agent의 Subagent 분배:
  - Explore Subagent: 모든 JS 파일 찾기
  - Subagent 1: tsconfig 설정
  - Subagent 2: 타입 정의 파일
  - Subagent 3: 소스 코드 변환
  - Subagent 4: 테스트 코드 변환
  - Bash Subagent: 타입 체크 실행
  - Debugger Subagent: 타입 에러 수정 (Custom)
```

#### 시나리오 4: Code Review 자동화

```
"최근 변경사항을 리뷰해줘"

Agent의 Subagent 분배:
  - Bash Subagent: git diff 실행
  - Code Reviewer Subagent: 코드 품질 검토 (Custom)
  - Debugger Subagent: 잠재적 버그 확인 (Custom)
```

### Subagents 활용 가이드

#### ✅ Subagents가 효과적인 경우

- **여러 파일/모듈에 걸친 작업**: 각 파일을 병렬로 처리
- **독립적으로 분리 가능한 작업**: 동시 실행 가능
- **대규모 코드 수정**: 리팩토링, 마이그레이션
- **컨텍스트 집약적 작업**: 탐색, 명령어 실행, 브라우저 테스트
- **전문 검토 필요**: 코드 리뷰, 디버깅, 문서화

#### ❌ Subagents가 불필요한 경우

- **단일 파일 수정**: 간단한 변경
- **간단한 버그 수정**: 한 줄 수정
- **순차적으로 해야 하는 작업**: 의존성이 강한 작업
- **빠른 실험**: 단순 테스트

#### 💡 Skills vs Subagents

| 항목 | Skills | Subagents |
|------|--------|-----------|
| **용도** | 단일 목적 작업 | 복잡한 다단계 작업 |
| **컨텍스트** | 메인 컨텍스트 사용 | 독립 컨텍스트 |
| **실행** | 즉시 완료 | 병렬/백그라운드 |
| **예시** | 체인지로그 생성, import 정렬 | 코드 리뷰, 디버깅, 탐색 |

**선택 기준**:
- 단순 작업 (체인지로그 생성) → **Skill**
- 복잡한 검토 (코드 리뷰) → **Subagent**

### 베스트 프랙티스

#### 1. 명확한 요청

큰 그림을 설명하면 Agent가 더 잘 분배합니다:

```
❌ "코드 수정해줘"
✅ "사용자 인증 시스템을 추가해줘. JWT 토큰 사용하고, 로그인/회원가입 API와 프론트엔드 폼이 필요해"
```

#### 2. Custom Subagent 활용

프로젝트에 맞는 Custom Subagent를 만들어두면 효율적입니다:

```bash
# 프로젝트 특화 Subagent
.cursor/agents/
  ├── api-reviewer.md      # API 설계 검토
  ├── security-auditor.md  # 보안 감사
  └── performance-optimizer.md  # 성능 최적화
```

#### 3. 점진적 진행

너무 큰 작업은 단계별로 나누기:

```
# ❌ 한 번에 모든 것
"전체 프로젝트를 리팩토링하고 TypeScript로 변환하고 테스트 추가해줘"

# ✅ 단계별로 진행
1단계: "JavaScript를 TypeScript로 변환해줘"
2단계: "타입 에러를 수정해줘"
3단계: "테스트 코드를 추가해줘"
```

#### 4. 결과 검토

Subagents 완료 후 통합 결과를 꼭 확인:

```
"Code Reviewer Subagent로 최근 변경사항을 검토해줘"
→ 리뷰 결과 확인 후 수정
```

### 성능과 비용 고려사항

#### 토큰 사용

- 각 Subagent는 독립적인 컨텍스트 사용
- 5개 Subagent 병렬 실행 = 약 5배 토큰 사용
- 복잡한 작업에는 효율적, 단순 작업에는 오버헤드

#### 속도

- **병렬 실행**: 여러 작업 동시 처리 → 전체 시간 단축
- **컨텍스트 격리**: 각 Subagent가 독립적으로 작업
- **Built-in Subagents**: 빠른 모델 사용으로 비용 절감

#### 선택 기준

```
단순 작업 (한 파일 수정):
  → 메인 Agent 사용 (빠르고 저렴)

복잡한 작업 (여러 파일, 병렬 가능):
  → Subagents 사용 (효율적)

컨텍스트 집약적 (탐색, 명령어):
  → Built-in Subagents 자동 사용
```

---

## 💡 학습 가이드

### 진행 방법

1. **1부: Subagents 개념** - 자동 오케스트레이션 이해
2. **2부: Built-in Subagents** - Explore, Bash, Browser 활용
3. **👉 실습: Project 1** - Built-in Subagents 체험
4. **3부: Custom Subagents** - 역할별 Subagent 생성
5. **👉 실습: Project 2** - Custom Subagent 만들기
6. **4부: 실전 활용** - 시나리오별 사용법

### 학습 팁

- Built-in Subagents는 자동으로 사용되므로 관찰에 집중하세요
- Custom Subagent는 프로젝트에 맞게 커스터마이징하세요
- Description에 "use proactively"를 포함하면 자동 위임됩니다
- 너무 큰 작업은 단계별로 나눠서 요청하세요
- Subagents 결과를 꼭 검토하세요

---

## 📊 학습 정리

**1부: Subagents란?**
- ✅ 복잡한 작업의 자동 분배
- ✅ 컨텍스트 격리와 병렬 실행
- ✅ 전문화와 재사용성

**2부: Built-in Subagents**
- ✅ Explore: 코드베이스 탐색
- ✅ Bash: 명령어 실행
- ✅ Browser: 브라우저 제어
- ✅ **실습 완료**: Built-in Subagents 체험

**3부: Custom Subagents 만들기**
- ✅ create-subagent 스킬 활용
- ✅ 역할별 Subagent (Code Reviewer, Debugger 등)
- ✅ 프로젝트 vs 사용자 레벨
- ✅ 베스트 프랙티스
- ✅ **실습 완료**: Custom Subagent 만들기

**4부: 실전 활용**
- ✅ Built-in + Custom 조합
- ✅ 대규모 리팩토링, 새 기능 구현, 마이그레이션
- ✅ Code Review 자동화
- ✅ Skills vs Subagents 선택 기준

**다음 장 예고**:

9장에서는 **Multi-Agent**를 배웁니다. Subagents가 자동 분배라면, Multi-Agent는 개발자가 직접 여러 Agent를 동시에 활용하는 수동 방식입니다. IDE 내 여러 채팅 창 전환 또는 Worktree + CLI Agent로 병렬 작업이 가능합니다.

---

## ⏭ 다음 장

[9장: Multi-Agent - 여러 업무 동시 처리](../session-09-multiagent/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: Built-in Subagents 체험](./projects/01-subagents-builtin/README.md) - 2부 학습 후 진행
- [Project 2: Custom Subagent 만들기](./projects/02-subagents-custom/README.md) - 3부 학습 후 진행

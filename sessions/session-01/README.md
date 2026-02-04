# 1장: Cursor 모드 이해하기

> **AI와 대화하는 방법 - Ask, Agent, Plan, Debug**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: 기본 모드 (Ask, Agent, Plan)](#1부-기본-모드-ask-agent-plan)
- [2부: Debug 모드 - 실행 기반 디버깅](#2부-debug-모드---실행-기반-디버깅)
- [3부: Debug 모드 실전 활용](#3부-debug-모드-실전-활용)
- [Cursor IDE 차별화 기능](#cursor-ide-차별화-기능)

---

## 📝 강의 개요

Cursor에서 AI와 대화하는 4가지 모드를 학습합니다. 특히 **Debug 모드**는 Cursor만의 차별화된 기능으로, 추측이 아닌 **실행 기반**으로 버그를 해결합니다.

**학습 목표**:

- Cursor의 4가지 모드 이해 (Ask, Agent, Plan, Debug)
- Plan 모드의 중요성 인식
- Debug 모드로 실행 기반 디버깅 체험
- Debug 모드 실전 활용 (로그인 버그, API 오류)
- Cursor IDE의 차별화된 기능 이해

---

## 1부: 기본 모드 (Ask, Agent, Plan)

### Copilot vs Cursor 모드 비교

```
Copilot: Ask, Edit, Agent, Plan
Cursor:  Ask,       Agent, Plan, Debug

→ 대부분 동일. Edit와 Debug에서 차이가 있습니다.
```

### Ask 모드

- **기능**: 질문하고 답변 받기
- **사용 시나리오**: 코드 설명, 개념 이해, 빠른 질의응답
- **특징**: 코드를 직접 수정하지 않고, 정보만 제공

```
예시:
Q: "이 함수는 어떻게 동작하나요?"
A: "이 함수는 사용자 인증을 처리합니다..."
```

### Agent 모드

- **기능**: 대화하면서 코드 작업 수행
- **사용 시나리오**: 기능 구현, 버그 수정, 리팩토링
- **특징**: 다중 파일 수정, 대화형 작업

```
예시:
"로그인 기능 추가해줘"
→ Agent가 auth.js, login.jsx, routes.js 등 여러 파일을 수정
```

**대부분의 개발자가 Agent 모드를 주로 사용합니다.**

### Plan 모드 ⭐ (권장!)

- **기능**: 작업 계획을 먼저 세우고, 검토 후 실행
- **사용 시나리오**: 복잡한 기능 구현, 대규모 리팩토링
- **특징**: 사전 계획 → 검토 → 실행의 3단계

```
예시:
"결제 시스템 추가해줘"

Plan 모드 동작:
1. [계획 단계] 
   - PaymentService.js 생성
   - CheckoutPage.jsx 수정
   - API routes 추가
   - 테스트 코드 작성

2. [검토 단계] 
   개발자가 계획을 확인하고 수정 가능

3. [실행 단계] 
   승인된 계획대로 코드 작성
```

**💡 Plan 모드를 사용하는 이유**:

Agent 모드만 사용하고 있다면 **Plan 모드를 한번 사용해보세요**. 미리 작업 계획을 검토함으로써 올바른 방향으로 작업을 진행할 수 있습니다.

특히 다음 상황에서 유용합니다:
- 복잡한 기능을 구현할 때
- 여러 파일을 동시에 수정해야 할 때
- 작업 범위가 명확하지 않을 때
- 예상치 못한 부작용을 방지하고 싶을 때

---

## 2부: Debug 모드 - 실행 기반 디버깅

### Debug 모드란? 🎯

**Cursor만의 차별화된 기능입니다.**

Debug 모드는 코드를 **실제로 실행**하고 로그를 자동으로 삽입하여 버그의 정확한 원인을 파악합니다.

### 일반 모드 vs Debug 모드

**일반 모드 (추측 기반)**:

```javascript
function login(user, password) {
  const result = authenticate(user, password);
  if (result) {
    redirect("/dashboard");
  }
}
// AI: "아마 여기가 문제일 것 같은데..."
```

**Debug 모드 (실행 기반)**:

```javascript
function login(user, password) {
  console.log("[DEBUG] user:", user);           // 자동 삽입
  console.log("[DEBUG] password:", password);   // 자동 삽입
  const result = authenticate(user, password);
  console.log("[DEBUG] result:", result);       // 자동 삽입
  if (result) {
    console.log("[DEBUG] redirecting...");      // 자동 삽입
    redirect("/dashboard");
  }
}
// AI: "실행 결과를 보니 result가 undefined입니다!"
```

### Debug 모드의 장점

| 비교 항목 | 일반 모드 | Debug 모드 |
|---------|---------|-----------|
| 방식 | 코드를 보고 추측 | 코드를 실제로 실행 |
| 정확도 | 낮음 (추측) | 높음 (실행 결과) |
| 로그 삽입 | 수동 | 자동 |
| 버그 원인 파악 | 어려움 | 쉬움 |

### Debug 모드 활성화 방법

1. **Cursor Agent 열기**: Cmd/Ctrl + L
2. **모드 선택**: 상단의 모드 드롭다운에서 "Debug" 선택
3. **버그 설명**: "로그인이 작동하지 않습니다"
4. **자동 실행**: Agent가 코드를 실행하고 로그를 삽입하여 분석

### Debug 모드의 핵심 기능

1. **자동 로그 삽입**: 코드의 주요 지점에 console.log 자동 추가
2. **실시간 실행**: 브라우저나 Node.js 환경에서 실제 실행
3. **상태 추적**: 변수 값, 함수 반환값, 조건문 결과 확인
4. **오류 위치 파악**: 정확히 어느 라인에서 문제가 발생하는지 확인

---

## 🚀 실습: Project 1 - Debug 모드 간단 체험

이제 Debug 모드를 직접 체험해봅시다!

### [Project 1: Debug 모드 간단 체험](./projects/01-debug-simple/README.md)

**학습 내용**:

- Agent 모드(일반)와 Debug 모드의 차이 체험
- Debug 모드의 자동 로그 삽입 확인
- 실행 기반 디버깅의 장점 이해

**실습 방식**:

간단한 로그인 폼에서 버그를 찾아 수정합니다. 먼저 **Agent 모드**에서 추측으로 수정을 시도하고, 그 다음 **Debug 모드**에서 실제 실행 결과를 보면서 정확하게 수정합니다.

**제공 파일**:
- `index.html` - 로그인 폼
- `login.js` - 로그인 로직 (버그 포함)

**실습 예시**:
- Agent 모드: "아마도 이 부분이 문제일 것 같습니다..." (추측)
- Debug 모드: 브라우저에서 실행 → 자동 로그 확인 → "password.length > 8이 문제입니다!" (확인)

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-debug-simple/README.md)

---

## 3부: Debug 모드 실전 활용

### Debug 모드 사용 시나리오

| 상황 | 일반 모드 | Debug 모드 |
|------|----------|-----------|
| 로그인 실패 | "인증 로직을 확인해보세요" | 실행 → `result`가 `undefined` 확인 |
| API 404 오류 | "경로를 확인해보세요" | 실행 → `/api/user` 호출 확인 → `/api/users`로 수정 |
| 조건문 버그 | "조건이 잘못된 것 같습니다" | 실행 → `password.length > 8`이 항상 false 확인 |
| 비동기 오류 | "Promise를 확인해보세요" | 실행 → await 누락 확인 |

### 베스트 프랙티스

✅ **Debug Mode를 사용하면 좋은 경우**:
- 버그의 원인을 정확히 모르는 경우
- 조건문이나 반환값이 예상과 다른 경우
- API 호출이 실패하는 경우
- 비동기 코드에서 문제가 발생하는 경우

❌ **Debug Mode가 불필요한 경우**:
- 문법 오류 (Linter가 더 빠름)
- 간단한 타이포 수정
- 코드 리팩토링 (일반 Agent 모드 사용)

**참고 문서**: 
- [Agent 모드 공식 문서](https://cursor.com/docs/agent/modes) - Debug 모드 상세 설명
- [디버깅 가이드](https://cursor.com/for/debugging) - 디버깅 베스트 프랙티스

---

## 🚀 실습: Debug 모드 실전 활용

이제 Debug 모드를 실전 시나리오에서 활용해봅시다!

### [Project 2: Debug Mode로 로그인 버그 해결](./projects/02-debug-login-bug/README.md)

**학습 내용**:
- Debug Mode 활성화 방법 익히기
- 자동 로그 삽입으로 버그 원인 파악
- 추측이 아닌 실행으로 버그 해결

**제공 파일**:
- `index.html` - 로그인 페이지
- `login.js` - 로그인 로직 (버그 있음)
- `auth.js` - 인증 함수 (버그 있음)

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-debug-login-bug/README.md)

---

### [Project 3: Debug Mode로 API 오류 추적](./projects/03-debug-api-error/README.md)

**학습 내용**:
- API 호출 오류를 Debug Mode로 추적
- 네트워크 요청/응답 디버깅
- 404 오류 원인 정확히 파악

**제공 파일**:
- `index.html` - 사용자 목록 페이지
- `api.js` - API 호출 로직 (버그 있음)
- `server.js` - 간단한 테스트 서버 (선택)

💡 **지금 바로 실습해보세요!** [Project 3 실습 가이드](./projects/03-debug-api-error/README.md)

---

## Cursor IDE 차별화 기능

지금까지 Cursor의 4가지 모드를 배웠습니다. 특히 **Debug 모드**는 Cursor만의 강력한 기능이었죠. 이제 Cursor IDE의 다른 차별화된 기능들을 살펴보겠습니다.

### VS Code 기반 AI 개발 환경

Cursor는 **VS Code를 기반**으로 만들어진 AI 네이티브 코드 에디터입니다. VS Code의 모든 기능과 확장을 그대로 사용하면서, AI 개발에 최적화된 기능들이 추가되어 있습니다.

```
VS Code + AI 네이티브 기능 = Cursor IDE
```

### GitHub Copilot과의 차이점

| 기능 | GitHub Copilot (VS Code) | Cursor IDE |
|------|-------------------------|------------|
| **기본 환경** | VS Code 확장 프로그램 | VS Code 기반 독립 에디터 |
| **모드 시스템** | Ask, Edit, Agent, Plan | Ask, Agent, Plan, **Debug** |
| **채팅 히스토리** | 제한적 | **Past Chat 참조** |
| **코드 리뷰** | 별도 도구 필요 | **Agent Review 탭** (내장) |
| **Worktree 관리** | 수동 | **Local Worktree 전환** |
| **실행 기반 디버깅** | ❌ | **Debug 모드** ✅ |

### 1. Agent Review 탭 (소스 관리)

Git 소스 관리 패널에 **Agent Review** 탭이 통합되어 있습니다.

```
소스 제어 패널:
├── Changes (변경사항)
├── Commits (커밋)
└── Agent Review ⭐ (AI 코드 리뷰)
```

**주요 기능**:
- AI가 변경사항을 자동으로 리뷰
- 커밋 전 코드 품질 체크
- 잠재적 버그나 개선점 제안
- 별도 도구 없이 IDE 내에서 바로 리뷰

**사용 예시**:
```
1. 코드 수정 후 Git 패널 열기
2. "Agent Review" 탭 클릭
3. AI가 변경사항 분석 후 피드백 제공
   - "이 함수는 null 체크가 필요합니다"
   - "변수명을 더 명확하게 하면 좋겠습니다"
```

### 2. Past Chat 참조

이전 대화 내용을 현재 대화에서 참조할 수 있습니다.

```
채팅 입력창:
@past-chat "로그인 기능 구현" 내용을 참고해서 회원가입도 만들어줘
```

**주요 기능**:
- 과거 대화 검색 및 참조
- 이전 맥락을 새 대화에 연결
- 반복 설명 불필요
- 일관된 코드 스타일 유지

**사용 예시**:
```
[이전 대화] "로그인 API를 RESTful하게 만들어줘"
→ POST /api/auth/login 구현

[새 대화] @past-chat "로그인 API" 참고해서 회원가입 API도 만들어줘
→ 같은 패턴으로 POST /api/auth/register 구현
```

### 3. Local Worktree 관리

#### 왜 Worktree가 필요한가?

실무에서는 하나의 작업만 하는 경우가 드뭅니다. 신규 기능을 개발하다가 갑자기 핫픽스 요청이 오고, 다른 페이지 작업 요청이 동시에 들어옵니다.

```
당신은 신규 기능을 개발 중입니다...

[09:00] 당신: feature/dashboard 개발 시작
[10:30] 팀장: 긴급! 프로덕션 버그 수정 필요
              → 핫픽스 브랜치 필요
              → 하지만 현재 작업 중...
[11:00] 디자이너: 랜딩 페이지 수정 요청
                → 또 다른 브랜치 필요
```

#### Git Stash vs Worktree

**방법 1: Git Stash (전통적)**
```bash
# 현재 작업 임시 저장
git stash

# 핫픽스 브랜치로 전환
git checkout -b hotfix/critical-bug

# 수정 완료 후
git checkout feature/dashboard
git stash pop

# 문제:
# - 컨텍스트 전환 비용
# - stash 관리 복잡
# - 작업 내용 섞일 위험
```

**방법 2: Git Worktree (현대적)**
```bash
# 독립 환경 생성
git worktree add ../hotfix-env hotfix/critical-bug

# 각 환경에서 독립적으로 작업
# - feature/dashboard: 계속 개발
# - hotfix/critical-bug: 핫픽스 처리

# 장점:
# - 컨텍스트 유지
# - 독립적인 작업 공간
# - 동시 작업 가능
```

#### Worktree란?

하나의 Git 저장소에서 **여러 작업 디렉터리**를 만드는 기능입니다.

```
project/
├── main-workspace/          # 메인 작업 공간
│   └── feature/dashboard    # 대시보드 개발 중
│
├── hotfix-workspace/        # 핫픽스 작업 공간
│   └── hotfix/critical-bug  # 버그 수정
│
└── landing-workspace/       # 랜딩 페이지 작업 공간
    └── feature/landing      # 랜딩 페이지 수정

→ 모두 같은 Git 저장소
→ 각각 독립적인 브랜치
→ 서로 간섭 없음
```

#### Worktree 기본 명령어

```bash
# 1. Worktree 생성
git worktree add <경로> <브랜치>

# 예시
git worktree add ../hotfix-env hotfix/critical-bug

# 2. Worktree 목록 확인
git worktree list

# 3. Worktree 제거
git worktree remove <경로>

# 4. Worktree 정리 (삭제된 것 제거)
git worktree prune
```

#### Cursor에서 Worktree 전환

Cursor IDE는 하단 상태바에서 Worktree를 쉽게 전환할 수 있습니다.

```
하단 상태바:
main ▼  (클릭)
├── main (현재)
├── feature/login
└── + New Worktree
```

**실전 예시**:
```
상황: feature/login 작업 중 긴급 버그 수정 필요

1. 하단 상태바에서 "main" worktree 선택
2. 버그 수정
3. 다시 "feature/login" worktree로 전환
→ 작업 내용 그대로 유지!
```

**참고 문서**: [Worktrees 공식 문서](https://cursor.com/docs/configuration/worktrees)

### 왜 Cursor를 사용하나?

✅ **VS Code 호환성**: 기존 VS Code 설정, 확장, 단축키 그대로 사용  
✅ **AI 네이티브**: 처음부터 AI 개발을 위해 설계됨  
✅ **통합 워크플로우**: 코드 작성 → 리뷰 → 디버깅 → Git이 모두 연결됨  
✅ **실행 기반 디버깅**: Debug 모드로 추측이 아닌 확인  
✅ **컨텍스트 관리**: Past Chat, Worktree로 작업 맥락 유지  

---

## 🚀 실습: Cursor IDE 차별화 기능

이제 Cursor IDE의 차별화된 기능들을 직접 체험해봅시다!

### [Project 4: Agent Review 실습](./projects/04-agent-review/README.md)

**학습 내용**:
- Agent Review 탭 사용법 익히기
- AI 코드 리뷰 피드백 활용하기
- 다양한 버그 유형 수정 (로직, 보안, 성능, 비동기, 스타일, 접근성)

**실습 방식**:

AI에게 의도적으로 버그를 유발하는 프롬프트를 요청하고, Agent Review 탭에서 AI 피드백을 받아 하나씩 수정합니다.

**제공 파일**:
- `demo.js` - 데모: 로직 에러 (상세 가이드)
- `practice-01.js` - 실습 1: 보안 이슈 (SQL Injection)
- `practice-02.html` - 실습 2: 성능 문제
- `practice-03.js` - 실습 3: 비동기 처리 실수
- `practice-04.css` - 실습 4: 스타일 문제
- `practice-05.html` - 실습 5: 마크업 접근성

💡 **지금 바로 실습해보세요!** [Project 4 실습 가이드](./projects/04-agent-review/README.md)

---

### [Project 5: Past Chat 참조 실습](./projects/05-past-chat/README.md)

**학습 내용**:
- Past Chat 검색 및 참조 방법
- 이전 대화 맥락 재사용하기
- 일관된 코드 패턴 유지하기

**실습 방식**:

이전 대화에서 작성한 코드 패턴을 `@past-chat`으로 참조하여 유사한 코드를 일관된 스타일로 생성합니다.

**제공 실습**:
- `demo-multilang/` - 데모: 다국어 주석 (상세 가이드)
- `practice-01/` - 실습 1: 코드 패턴 재사용 (API)
- `practice-02/` - 실습 2: 다국어 에러 메시지
- `practice-03/` - 실습 3: 스타일 패턴 재사용
- `practice-04/` - 실습 4: 테스트 패턴
- `practice-05/` - 실습 5: 문서화 패턴

💡 **지금 바로 실습해보세요!** [Project 5 실습 가이드](./projects/05-past-chat/README.md)

---

## 💡 학습 가이드

### 진행 방법

1. **1부: 기본 모드 학습** - Ask, Agent, Plan 이해
2. **2부: Debug 모드 학습** - 개념과 차별점 파악
3. **👉 실습: Project 1** - Debug 모드 간단 체험
4. **3부: 실전 활용** - 베스트 프랙티스 학습
5. **👉 실습: Project 2, 3** - Debug 모드 실전 활용
6. **Cursor IDE 차별화 기능** - Agent Review, Past Chat, Worktree
7. **👉 실습: Project 4, 5** - Agent Review & Past Chat 체험

### 학습 팁

- **Plan 모드를 한 번 사용해보세요** - 작업 효율이 크게 향상됩니다
- **Debug 모드를 직접 체험해보세요** - 추측이 아닌 실행의 차이를 느낄 수 있습니다
- 실습은 가볍고 빠르게 진행됩니다

---

## 📊 학습 정리

**1부: 기본 모드**
- ✅ Ask, Agent, Plan 모드 이해
- ✅ Plan 모드의 중요성 (사전 계획 → 검토 → 실행)

**2부: Debug 모드**
- ✅ Debug 모드의 차별화된 가치 (추측 → 실행 기반)
- ✅ 일반 모드 vs Debug 모드 비교
- ✅ **실습 1**: Debug 모드 간단 체험

**3부: 실전 활용**
- ✅ Debug 모드 사용 시나리오
- ✅ 베스트 프랙티스
- ✅ **실습 2, 3**: 로그인 버그, API 오류 추적

**Cursor IDE 차별화 기능**
- ✅ Agent Review 탭 (AI 코드 리뷰)
- ✅ Past Chat 참조 (이전 대화 재사용)
- ✅ Local Worktree 관리 (독립 환경)
- ✅ **실습 4, 5**: Agent Review & Past Chat 체험

**다음 장 예고**:

2장에서는 AI에게 지침을 주는 **Rules**를 배웁니다. 하지만 Rules는 프롬프트이기 때문에 한계가 있습니다. 이 한계를 어떻게 해결하는지도 함께 알아봅니다.

---

## ⏭ 다음 장

[2장: Rules - AI에게 지침 주기](../session-02/README.md)

---

## 🔗 실습 프로젝트 바로가기

**Debug 모드 실습**:
- [Project 1: Debug 모드 간단 체험](./projects/01-debug-simple/README.md) - 2부 학습 후 진행
- [Project 2: Debug Mode로 로그인 버그 해결](./projects/02-debug-login-bug/README.md) - 3부 심화
- [Project 3: Debug Mode로 API 오류 추적](./projects/03-debug-api-error/README.md) - 3부 심화

**Cursor IDE 차별화 기능 실습**:
- [Project 4: Agent Review 실습](./projects/04-agent-review/README.md) - AI 코드 리뷰 체험
- [Project 5: Past Chat 참조 실습](./projects/05-past-chat/README.md) - 이전 대화 재사용

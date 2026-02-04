# 2장: Cursor IDE 차별화 기능

> **Cursor만의 강력한 기능들**

## 📋 목차

- [강의 개요](#-강의-개요)
- [1부: Clarification Questions](#1부-clarification-questions)
- [2부: Agent Review 탭](#2부-agent-review-탭)
- [3부: Past Chat 참조](#3부-past-chat-참조)
- [4부: Git Worktree](#4부-git-worktree)

---

## 📝 강의 개요

1장에서 Cursor의 4가지 모드를 배웠습니다. 이번 장에서는 **Cursor IDE만의 차별화된 기능**들을 배웁니다.

**학습 목표**:

- Clarification Questions로 요구사항 명확화 (Plan 모드 UI)
- Agent Review로 AI 코드 리뷰 체험
- Past Chat으로 이전 대화 재사용
- Git Worktree로 독립적인 작업 환경 관리

**GitHub Copilot과의 차이점**:

| 기능                 | GitHub Copilot (VS Code) | Cursor IDE                  |
| -------------------- | ------------------------ | --------------------------- |
| **기본 환경**        | VS Code 확장 프로그램    | VS Code 기반 독립 에디터    |
| **모드 시스템**      | Ask, Edit, Agent, Plan   | Ask, Agent, Plan, **Debug** |
| **채팅 히스토리**    | 제한적                   | **Past Chat 참조**          |
| **코드 리뷰**        | 별도 도구 필요           | **Agent Review 탭** (내장)  |
| **Worktree 관리**    | 수동                     | **Local Worktree 전환**     |
| **실행 기반 디버깅** | ❌                       | **Debug 모드** ✅           |
| **요구사항 명확화**  | 텍스트 질문              | **Clarification Questions UI** |

---

## 1부: Clarification Questions

### Clarification Questions란?

Agent가 요청이 **불명확할 때 질문**을 던져서 정확한 요구사항을 파악하는 기능입니다.

```
사용자: "로그인 기능 추가해줘"

Agent: 몇 가지 확인이 필요합니다:
  1. 소셜 로그인(Google, GitHub)도 포함할까요?
  2. 이메일 인증이 필요한가요?
  3. 세션 기반 vs JWT 중 어느 것을 선호하나요?
```

### Agent 모드 vs Plan 모드의 차이 ⭐

**Agent 모드의 불편함**:

```
Agent: "JWT vs 세션 중 어느 것을 선호하나요?"
[대화가 텍스트 질문으로 끝남]

You: [다시 타이핑 필요] "JWT로 해주세요"
```

- 질문이 일반 텍스트로 표시됨
- 사용자가 직접 답변을 **입력**해야 함
- 대화가 끝나고 다시 입력 필요

**Plan 모드의 편리함** (차별화 포인트!):

```
[Clarification Questions UI 화면]
인증 방식을 선택하세요:
□ JWT 인증
□ 세션 기반 인증

소셜 로그인을 포함하시겠습니까?
□ Google
□ GitHub
□ 포함 안 함

[Continue] 버튼 → 클릭만 하면 됨!
```

- **Clarification Questions UI 화면**으로 표시
- 선택지를 **클릭**만 하면 됨
- 체크박스/라디오 버튼으로 쉽게 선택
- 계획 수립 전 요구사항 명확화

### 비교표

| 비교 항목 | Agent 모드 | Plan 모드 |
|----------|-----------|-----------|
| 질문 표시 | 텍스트 | **UI 화면** ✅ |
| 답변 방식 | 직접 입력 | **클릭 선택** ✅ |
| 편의성 | 타이핑 필요 | **빠르고 쉬움** ✅ |
| 선택지 | 없음 | **명확한 옵션 제공** ✅ |

### Clarification Questions의 장점

1. **정확한 요구사항 파악**: 추측 대신 확인
2. **재작업 감소**: 처음부터 올바른 방향으로 구현
3. **숨겨진 요구사항 발견**: 사용자가 생각하지 못한 부분 확인
4. **의사소통 향상**: 명확한 대화로 협업 품질 향상

### 동작 방식

**자동 동작**: Agent가 불명확한 부분을 감지하면 자동으로 질문합니다.

**수동 요청**: `/clarify` 명령으로 명시적으로 질문을 요청할 수 있습니다.

```bash
# 수동으로 명확화 요청
You: /clarify 이 기능의 요구사항을 정리해줘
Agent: [질문 목록 제시]
```

### 효과적인 답변 방법

```bash
# ❌ 모호한 답변
Agent: JWT vs 세션 중 어느 것을 선호하나요?
You: 아무거나

# ✅ 명확한 답변
Agent: JWT vs 세션 중 어느 것을 선호하나요?
You: JWT로 해주세요. 리프레시 토큰도 포함해주세요.
```

**참고 문서**: [Clarification Questions 공식 문서](https://cursor.com/docs/agent/clarification)

---

## 🚀 실습: Project 1 - Clarification Questions

이제 Clarification Questions를 직접 체험해봅시다!

### [Project 1: Clarification Questions 체험](./projects/01-clarification-questions/README.md)

**학습 내용**:

- Agent 모드와 Plan 모드의 차이 체험
- Clarification Questions UI 사용법
- 요구사항 명확화의 중요성

**실습 방식**:

같은 요청을 Agent 모드와 Plan 모드에서 각각 시도하여 차이를 비교합니다.

💡 **지금 바로 실습해보세요!** [Project 1 실습 가이드](./projects/01-clarification-questions/README.md)

---

## 2부: Agent Review 탭

### Agent Review 탭이란?

Git 소스 관리 패널에 **Agent Review** 탭이 통합되어 있습니다.

```
소스 제어 패널:
├── Changes (변경사항)
├── Commits (커밋)
└── Agent Review ⭐ (AI 코드 리뷰)
```

### 주요 기능

- AI가 변경사항을 자동으로 리뷰
- 커밋 전 코드 품질 체크
- 잠재적 버그나 개선점 제안
- 별도 도구 없이 IDE 내에서 바로 리뷰

### 사용 방법

```
1. 코드 수정 후 Git 패널 열기
2. "Agent Review" 탭 클릭
3. AI가 변경사항 분석 후 피드백 제공
   - "이 함수는 null 체크가 필요합니다"
   - "변수명을 더 명확하게 하면 좋겠습니다"
   - "이 로직은 성능 문제가 있을 수 있습니다"
```

---

## 🚀 실습: Project 2 - Agent Review

이제 Agent Review 기능을 직접 체험해봅시다!

### [Project 2: Agent Review 실습](./projects/02-agent-review/README.md)

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

💡 **지금 바로 실습해보세요!** [Project 2 실습 가이드](./projects/02-agent-review/README.md)

---

## 3부: Past Chat 참조

### Past Chat 참조란?

이전 대화 내용을 현재 대화에서 참조할 수 있습니다.

```
채팅 입력창:
@past-chat "로그인 기능 구현" 내용을 참고해서 회원가입도 만들어줘
```

### 주요 기능

- 과거 대화 검색 및 참조
- 이전 맥락을 새 대화에 연결
- 반복 설명 불필요
- 일관된 코드 스타일 유지

### 사용 예시

```
[이전 대화] "로그인 API를 RESTful하게 만들어줘"
→ POST /api/auth/login 구현

[새 대화] @past-chat "로그인 API" 참고해서 회원가입 API도 만들어줘
→ 같은 패턴으로 POST /api/auth/register 구현
```

### 활용 시나리오

**1. 코드 패턴 재사용**:

```
이전: "React 컴포넌트를 TypeScript로 작성해줘"
현재: @past-chat "React 컴포넌트" 참고해서 다른 컴포넌트도 같은 스타일로
```

**2. 스타일 일관성 유지**:

```
이전: "이 함수에 JSDoc 주석 달아줘"
현재: @past-chat "JSDoc" 참고해서 다른 함수들도 같은 형식으로
```

**3. 에러 처리 패턴**:

```
이전: "API 에러 처리를 try-catch로 해줘"
현재: @past-chat "에러 처리" 참고해서 다른 API 호출도 같은 방식으로
```

---

## 🚀 실습: Project 3 - Past Chat 참조

이제 Past Chat 참조 기능을 직접 체험해봅시다!

### [Project 3: Past Chat 참조 실습](./projects/03-past-chat/README.md)

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

💡 **지금 바로 실습해보세요!** [Project 3 실습 가이드](./projects/03-past-chat/README.md)

---

## 4부: Git Worktree

### 왜 Worktree가 필요한가?

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

### Git Stash vs Worktree

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

### Worktree란?

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

### Worktree 기본 명령어

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

### Cursor에서 Worktree 전환

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
✅ **요구사항 명확화**: Clarification Questions UI로 빠른 선택

---

## 💡 학습 가이드

### 진행 방법

1. **1부: Clarification Questions** - Plan 모드 UI 체험 + **실습 1**
2. **2부: Agent Review** - AI 코드 리뷰 + **실습 2**
3. **3부: Past Chat** - 이전 대화 재사용 + **실습 3**
4. **4부: Git Worktree** - 독립 환경 관리

### 학습 팁

- Plan 모드를 적극 활용하여 Clarification Questions UI를 체험하세요
- Agent Review는 커밋 전에 습관화하세요
- Past Chat으로 일관된 코드 스타일을 유지하세요
- Worktree로 여러 작업을 동시에 진행하세요

---

## 📊 학습 정리

**1부: Clarification Questions**

- ✅ Agent 모드 vs Plan 모드 차이 (텍스트 vs UI)
- ✅ Plan 모드 UI로 빠른 선택
- ✅ **실습 1**: Clarification Questions 체험

**2부: Agent Review**

- ✅ Git 패널 통합 AI 리뷰
- ✅ 커밋 전 코드 품질 체크
- ✅ **실습 2**: 다양한 버그 유형 수정

**3부: Past Chat**

- ✅ 이전 대화 참조
- ✅ 일관된 코드 패턴 유지
- ✅ **실습 3**: 코드 패턴 재사용

**4부: Git Worktree**

- ✅ 독립적인 작업 환경
- ✅ Cursor에서 쉬운 전환
- ✅ 동시 작업 가능

**다음 장 예고**:

3장에서는 AI에게 지침을 주는 **Rules**를 배웁니다. 하지만 Rules는 프롬프트이기 때문에 한계가 있습니다. 이 한계를 어떻게 해결하는지도 함께 알아봅니다.

---

## ⏭ 다음 장

[3장: Rules - AI에게 지침 주기](../session-03-rules/README.md)

---

## 🔗 실습 프로젝트 바로가기

- [Project 1: Clarification Questions 체험](./projects/01-clarification-questions/README.md) - 1부 학습 후 진행
- [Project 2: Agent Review 실습](./projects/02-agent-review/README.md) - 2부 학습 후 진행
- [Project 3: Past Chat 참조 실습](./projects/03-past-chat/README.md) - 3부 학습 후 진행

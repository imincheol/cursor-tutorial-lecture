# 🎓 4교시: CLI 모드 - Multi-Agent & 실전

> ⏱ 50분 | CLI 모드 Part 2

## 📑 목차

- [이 시간의 목표](#-이-시간의-목표)
- [1️⃣ CLI Multi-Agent with Worktree (25분)](#️⃣-cli-multi-agent-with-worktree-25분)
  - [IDE Multi-Agent의 한계](#ide-multi-agent의-한계-복습)
  - [CLI + Worktree 해결책](#cli--worktree-해결책)
  - [Worktree 기본 명령어](#worktree-기본-명령어)
  - [실습: 3가지 접근법 동시 비교](#-실습-3가지-접근법-동시-비교)
  - [IDE vs CLI Multi-Agent 비교](#ide-multi-agent-vs-cli-multi-agent-비교)
- [2️⃣ 실전 워크플로우 (20분)](#️⃣-실전-워크플로우-20분)
  - [IDE + CLI 통합 사용](#ide--cli-통합-사용)
  - [IDE에서 작업 중 + CLI로 동시 작업](#-ide에서-작업-중--cli로-동시-작업)
  - [일상 개발 흐름](#일상-개발-흐름)
- [3️⃣ 실습: 종합 시나리오 (5분)](#️⃣-실습-종합-시나리오-5분)
- [체크리스트](#-4교시-체크리스트)
- [다음 교시](#-다음-교시)

---

## 📋 이 시간의 목표

- [ ] Worktree로 독립 Multi-Agent 환경 구성
- [ ] CLI에서 여러 접근법 동시 비교
- [ ] **IDE + CLI 통합 워크플로우** (핵심!)

---

## 💡 이 교시에서 배울 것

### Worktree Multi-Agent (독립 환경)
Git Worktree로 완전히 분리된 폴더를 만들어서 여러 Agent를 동시에 실행합니다.

**예시**:
```bash
# 터미널 1: useReducer 접근
git worktree add ../exp-reducer -b exp-reducer
cd ../exp-reducer
cursor agent "useReducer로 리팩토링해줘"

# 터미널 2: Zustand 접근
git worktree add ../exp-zustand -b exp-zustand
cd ../exp-zustand
cursor agent "Zustand로 리팩토링해줘"

# 결과 비교 후 최선 선택
```

**특징**:
- 완전히 독립된 폴더 (충돌 없음)
- 같은 파일을 다르게 수정 가능
- 여러 접근법 동시 비교

### IDE + CLI 통합 (실전 워크플로우)
IDE에서 메인 작업을 하면서, 동시에 터미널에서 조사/실험을 합니다.

**예시**:
```
IDE: feat/user-profile 작업 중
  → 아바타 업로드 기능 구현

터미널 1: 리팩토링 조사
  → 현재 코드 구조 분석

터미널 2: API 개선 조사
  → 성능 최적화 방안 탐색
```

**특징**:
- 3개의 독립적인 대화 동시 진행
- 메인 작업 방해 없이 조사 가능
- 각 터미널마다 다른 브랜치

---

## 1️⃣ CLI Multi-Agent with Worktree (25분) 🤖🤖

### IDE Multi-Agent의 한계 복습

```
IDE에서 여러 Agent 탭:
- 같은 폴더, 같은 브랜치에서 작업
- 같은 파일 수정 시 충돌
- 동시에 여러 접근법 비교 어려움
```

### CLI + Worktree 해결책

```
┌─────────────────────────────────────────────────────────────┐
│  CLI + Worktree Multi-Agent                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  터미널 1                    터미널 2                       │
│  ┌─────────────┐            ┌─────────────┐                │
│  │ Worktree A  │            │ Worktree B  │                │
│  │ /proj-exp1  │            │ /proj-exp2  │                │
│  │             │            │             │                │
│  │ cursor agent│            │ cursor agent│                │
│  │ "useReducer │            │ "Custom Hook│                │
│  │  로 해줘"   │            │  으로 해줘" │                │
│  └─────────────┘            └─────────────┘                │
│        │                          │                        │
│        ▼                          ▼                        │
│   독립적으로 수정              독립적으로 수정              │
│   충돌 없음 ✅                 충돌 없음 ✅                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

📚 **공식 문서**: https://cursor.com/docs/configuration/worktrees

### 🔥 실습: Worktree 설정

#### Step 1: Worktree 생성

```bash
# 현재 위치: /my-project (메인 폴더)

# 실험 1용 Worktree
git worktree add ../my-project-exp1 -b experiment-1

# 실험 2용 Worktree
git worktree add ../my-project-exp2 -b experiment-2

# Worktree 목록 확인
git worktree list
```

**결과:**
```
/my-project           abc1234 [main]
/my-project-exp1      abc1234 [experiment-1]
/my-project-exp2      abc1234 [experiment-2]
```

#### Step 2: 각 터미널에서 Agent 실행

**터미널 1:**
```bash
cd /my-project-exp1
cursor agent "이 폼 유효성 검사를 useReducer로 리팩토링해줘"
```

**터미널 2:**
```bash
cd /my-project-exp2
cursor agent "이 폼 유효성 검사를 Custom Hook으로 리팩토링해줘"
```

→ **동시에 같은 파일을 수정해도 충돌 없음!**

#### Step 3: 결과 비교

```bash
# 두 Worktree의 차이 비교
diff -r my-project-exp1/src my-project-exp2/src

# 또는 IDE에서 각각 열어서 비교
cursor /my-project-exp1
cursor /my-project-exp2
```

#### Step 4: 최선의 결과 선택

```bash
# experiment-1이 더 좋다면
cd /my-project
git merge experiment-1

# 정리
git worktree remove ../my-project-exp1
git worktree remove ../my-project-exp2
git branch -d experiment-1 experiment-2
```

### 🔥 실습: 3개 접근법 동시 비교

**시나리오: 상태 관리 개선**

```bash
# Worktree 3개 생성
git worktree add ../proj-reducer -b try-reducer
git worktree add ../proj-hook -b try-hook
git worktree add ../proj-zustand -b try-zustand

# 터미널 3개에서 각각
cd ../proj-reducer && cursor agent "useReducer로 상태 관리 개선해줘"
cd ../proj-hook && cursor agent "Custom Hook으로 상태 관리 개선해줘"
cd ../proj-zustand && cursor agent "Zustand로 상태 관리 개선해줘"
```

### IDE Multi-Agent vs CLI Multi-Agent 비교

| 항목 | IDE | CLI + Worktree |
|------|-----|----------------|
| 설정 | 버튼 클릭 | Worktree 생성 필요 |
| 같은 파일 수정 | ⚠️ 충돌 | ✅ 독립적 |
| 결과 비교 | 탭 전환 | 폴더/diff |
| Visual Editor | ✅ 가능 | ❌ 불가 |
| 적합한 상황 | 다른 파일, UI 작업 | 같은 파일, 여러 접근법 |

---

## 2️⃣ 실전 워크플로우 (20분) 🔄

### IDE + CLI 통합 사용

```
┌─────────────────────────────────────────────────────────────┐
│  작업 유형별 도구 선택                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  UI 작업, 시각적 확인 필요                                  │
│  └─ IDE 모드 + Visual Editor                               │
│                                                             │
│  터미널 명령 모를 때                                        │
│  └─ CLI Shell Mode                                         │
│                                                             │
│  여러 접근법 비교                                           │
│  └─ CLI + Worktree Multi-Agent                             │
│                                                             │
│  버그 추적                                                  │
│  └─ IDE Debug Mode                                         │
│                                                             │
│  Agent 제어/보안                                            │
│  └─ Hooks (IDE/CLI 둘 다)                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 🔥 IDE에서 작업 중 + CLI로 동시 작업

**실전 시나리오: 현재 IDE에서 `feat/user-profile` 작업 중**

#### IDE에서 대화형 작업 (메인 작업)

```
IDE Cursor Agent (대화 진행 중):

> 사용자 프로필 페이지에 아바타 업로드 추가해줘

Agent: FileUpload 컴포넌트를 만들겠습니다...

> 이미지 미리보기도 필요해

Agent: 미리보기 기능 추가했습니다...

> 드래그 앤 드롭도 되게 해줘

Agent: 드래그 앤 드롭 기능을 구현하겠습니다...
```

#### 동시에 터미널 1 - 대화형 리팩토링 조사

```bash
# IDE 작업 중단 없이 새 터미널 열기
git worktree add ../project-refactor -b refactor-investigation
cd ../project-refactor

# 대화형 모드 시작 (IDE와 완전 독립)
cursor agent

> 현재 프로필 관련 코드 구조 분석해줘

Agent: UserProfile.tsx가 500줄입니다...

> 어떻게 개선할 수 있어?

Agent: 4개 컴포넌트로 분리를 제안합니다...

> 분리 작업 해줘

Agent: UserAvatar 컴포넌트부터 생성하겠습니다...

> 테스트 코드도 필요해

Agent: UserAvatar.test.tsx를 생성했습니다...
```

#### 동시에 터미널 2 - 대화형 API 개선 조사

```bash
# 또 다른 터미널
git worktree add ../project-api -b api-improvement
cd ../project-api

cursor agent

> 프로필 API 성능 분석해줘

Agent: N+1 쿼리 문제 발견...

> 해결 방법은?

Agent: DataLoader 패턴 추천...

> 구현 예제 보여줘

Agent: 다음과 같이 구현합니다...

> 기존 코드에 적용해줘

Agent: API 라우터를 수정하겠습니다...
```

**핵심**: 3개의 **독립적인 대화**가 동시에 진행! 🔥

```
┌─────────────────────────────────────────────────────────────┐
│  동시 진행 중인 3개의 대화형 세션                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  IDE (feat/user-profile)                                    │
│  ├─ "드래그 앤 드롭 추가해줘"                               │
│  └─ "파일 크기 제한은?"                                     │
│                                                             │
│  터미널 1 (refactor-investigation)                          │
│  ├─ "컴포넌트 분리해줘"                                     │
│  └─ "테스트 코드도 작성해줘"                                │
│                                                             │
│  터미널 2 (api-improvement)                                 │
│  ├─ "DataLoader 적용해줘"                                   │
│  └─ "캐싱도 추가할까?"                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 일상 개발 흐름

```
아침:
  CLI: cursor agent "어제 작업 요약해줘"

개발 중:
  IDE: Visual Editor로 UI 수정
  IDE: Debug Mode로 버그 추적

설계 고민:
  CLI: Worktree로 여러 접근법 비교
  → 최선 선택 후 merge

터미널 작업:
  CLI: Shell Mode로 명령어 생성

동시 작업:
  IDE에서 feat/user-profile 진행 중
  + 터미널에서 다른 브랜치 조사
  + 필요시 3번째 터미널로 추가 작업
```

### 🔥 실습: 종합 시나리오

**시나리오 1: IDE 작업 중 + CLI로 동시 조사**

```bash
# 상황: IDE에서 develop 브랜치의 feat/user-profile 작업 진행 중
# (Cursor IDE 열린 상태, 채팅 세션 활성)

# 터미널 1: develop 기반으로 리팩토링 조사
git worktree add ../project-refactor -b refactor-investigation
cd ../project-refactor
cursor agent "user-profile 관련 코드를 분석하고 구조 개선 방안 제안해줘"

# 터미널 2: main 기반으로 API 개선 조사
git worktree add ../project-api -b api-improvement
cd ../project-api
cursor agent "API 호출 부분의 에러 처리와 성능 개선 방안 찾아줘"

# 결과: IDE + 2개 터미널 = 3가지 작업 동시 진행
# IDE 계속: UI/UX 작업
# 터미널1: 코드 구조 분석
# 터미널2: API 개선 조사
```

**시나리오 2: 새 기능 개발 + 여러 방안 비교**

```bash
# 1. 먼저 CLI로 여러 방안 비교
git worktree add ../proj-option-a -b option-a
git worktree add ../proj-option-b -b option-b

# 터미널 1
cd ../proj-option-a
cursor agent "이 기능을 Context API로 구현해줘"

# 터미널 2
cd ../proj-option-b
cursor agent "이 기능을 Zustand로 구현해줘"

# 2. 결과 비교 후 option-a 선택
cd /my-project
git merge option-a

# 3. IDE로 UI 다듬기
cursor .
# → Visual Editor로 스타일 조정
# → Debug Mode로 테스트

# 4. 정리
git worktree remove ../proj-option-a
git worktree remove ../proj-option-b
```

### 팀 도입 가이드

#### Week 1: 기본
```
- Rules 작성 (.cursor/rules/)
- Hooks 설정 (.cursor/hooks/)
- CLI 설치
```

#### Week 2: 활용
```
- Shell Mode 일상 사용
- Visual Editor 활용
- Debug Mode 버그 추적
```

#### Week 3: 고급
```
- Worktree Multi-Agent
- 팀 Rules 표준화
- 베스트 프랙티스 공유
```

---

## ✅ 4교시 체크리스트

- [ ] Worktree 생성/삭제 해보기
- [ ] 두 터미널에서 동시에 Agent 실행
- [ ] IDE vs CLI 상황별 사용법 이해

---

## 🎉 강의 마무리

### 오늘 배운 것 정리

**IDE 모드 (1-2교시):**
| 기능 | Copilot 대비 |
|------|-------------|
| Rules globs | 조건부 적용 가능 |
| Hooks | Copilot에 없음 🔥 |
| Debug Mode | Copilot에 없음 🔥 |
| Visual Editor | Copilot에 없음 🔥 |

**CLI 모드 (3-6교시):**
| 기능 | Copilot 대비 |
|------|-------------|
| cursor agent | Copilot에 없음 🔥 |
| Shell Mode | Copilot에 없음 🔥 |
| Worktree Multi-Agent | 독립 환경 가능 🔥 |

### 다음 단계

```
1. .cursor/ 폴더에 Rules, Hooks 설정
2. CLI 설치하고 Shell Mode 사용
3. 큰 결정 시 Worktree Multi-Agent 활용
4. 팀과 설정 공유 (.cursor/ Git 커밋)
```

---

## 🔗 이 교시 관련 공식 문서

| 주제 | 링크 |
|------|------|
| Worktrees | https://cursor.com/docs/configuration/worktrees |
| CLI Overview | https://cursor.com/docs/cli/overview |
| Agent Overview | https://cursor.com/docs/agent/overview |

---

## 📚 전체 참고 자료

| 주제 | 링크 |
|------|------|
| Cursor 문서 홈 | https://cursor.com/docs |
| CLI | https://cursor.com/docs/cli/overview |
| Agent | https://cursor.com/docs/agent/overview |
| Rules | https://cursor.com/docs/context/rules |
| Hooks | https://cursor.com/docs/agent/hooks |
| Browser | https://cursor.com/docs/agent/browser |
| Debug Mode | https://cursor.com/docs/agent/debug-mode |
| Worktrees | https://cursor.com/docs/configuration/worktrees |
| Privacy | https://cursor.com/docs/account/privacy |
| Changelog | https://cursor.com/changelog |
| Forum | https://forum.cursor.com |

---

## ❓ Q&A

질문 있으시면 말씀해주세요!

---

## ⏮ 이전 교시

- [← 개요](./00-overview.md)
- [← 1교시: IDE 모드 - Copilot 차이점](./01-session.md)
- [← 2교시: IDE 모드 - Debug & Visual](./02-session.md)
- [← 3교시: CLI 모드 - Shell Mode](./03-session.md)

---

## ⏭ 다음 교시

**[5교시: 반복 작업 자동화 →](./05-session.md)**

---

**Cursor로 개발 워크플로우를 혁신하세요! 🚀**

# 🎓 2교시: IDE 모드 - Debug Mode & Visual Editor

> ⏱ 50분 | IDE 모드 Part 2

## 📑 목차

- [이 시간의 목표](#-이-시간의-목표)
- [1️⃣ Debug Mode (15분)](#️⃣-debug-mode-15분-)
  - [Debug Mode 작동 방식](#debug-mode-작동-방식)
  - [실습: 버그 추적](#-실습-버그-추적)
  - [Debug Mode 팁](#debug-mode-팁)
- [2️⃣ Visual Editor (20분)](#️⃣-visual-editor-20분-)
  - [Visual Editor 시작](#visual-editor-시작)
  - [실습: UI 수정](#-실습-ui-수정)
  - [고급 기능](#고급-기능)
- [3️⃣ IDE Multi-Agent 주의점 (15분)](#️⃣-ide-multi-agent-주의점-15분-)
  - [충돌 시나리오](#충돌-시나리오)
  - [안전한 사용법](#안전한-사용법)
- [체크리스트](#-2교시-체크리스트)
- [다음 교시](#-다음-교시)

---

## 📋 이 시간의 목표

- [ ] **Debug Mode로 복잡한 버그 해결** (핵심!)
- [ ] **Visual Editor로 실시간 UI 편집** (핵심!)
- [ ] IDE에서 Multi-Agent 사용 시 주의점

---

## 1️⃣ Debug Mode (15분) 🐛

### Copilot에는 없다!

```
Copilot: "이 버그 어떻게 고쳐?" → 코드만 보고 추측
Cursor: "이 버그 고쳐줘" → 실제 실행하며 원인 추적
```

📚 **공식 문서**: https://docs.cursor.com/agent/debug-mode

### Debug Mode 작동 방식

```
1. 버그 설명 입력
2. Agent가 의심 지점에 로그 자동 삽입
3. "버그 재현해주세요" 요청
4. 로그 분석하여 근본 원인 파악
5. 수정 코드 제안
```

### 🔥 실습: Debug Mode 사용

**버그 설명:**
```
"로그인 후 대시보드에서 가끔 데이터가 안 보여.

재현 방법:
1. 로그인
2. 대시보드로 이동
3. 10번 중 2-3번 빈 화면

에러 메시지는 없어. 콘솔에도 아무것도 안 떠.
디버그해줘."
```

**Agent 분석 과정:**
```
1. 관련 파일 분석
   - Dashboard.tsx
   - useDashboardData.ts
   - api/dashboard.ts

2. 의심 지점에 로그 삽입
   "다음 파일들에 디버그 로그를 추가했습니다.
    버그를 재현해주시겠어요?"

3. 로그 분석
   "로그를 확인한 결과, Race condition 발견:
    - fetchUser가 완료되기 전에 fetchDashboard 호출
    - 때때로 userId가 undefined인 상태로 요청"

4. 수정 제안
   "다음과 같이 수정하면 됩니다..."
```

### Debug Mode가 유용한 상황

| 상황 | 일반 디버깅 | Debug Mode |
|------|------------|------------|
| 간헐적 버그 | 로그 위치 고민 | 자동 로그 삽입 |
| Race Condition | 재현 어려움 | 패턴 인식 |
| 상태 꼬임 | 일일이 추적 | 흐름 분석 |
| 비동기 이슈 | 타이밍 추측 | 실제 순서 확인 |

---

## 2️⃣ Visual Editor (20분) 🎨

### Copilot에는 없다!

```
Copilot: 코드 작성 → 저장 → 브라우저 확인 → 다시 코드
Cursor: 브라우저에서 직접 선택 → Agent에게 수정 요청
```

📚 **공식 문서**: https://docs.cursor.com/agent/browser

### FE 개발에 왜 중요한가?

```
기존 방식:
코드 수정 → 저장 → HMR → 브라우저 확인 → 마음에 안 들면 반복

Visual Editor:
브라우저에서 요소 선택 → "이거 수정해줘" → 코드 자동 반영
```

### 🔥 실습: Visual Editor 시작

#### Step 1: Browser 패널 열기
```
Cmd+Shift+P → "Browser: Open Preview"
또는 우측 사이드바 Browser 아이콘
```

#### Step 2: 앱 실행
```bash
npm run dev
# Browser 패널에서 localhost:3000 로드
```

#### Step 3: 요소 선택 도구
```
Browser 패널 상단 → 선택 도구 (커서 아이콘) 클릭
```

### 🔥 실습: 실시간 UI 수정

**시나리오 1: 버튼 스타일**
```
1. 선택 도구로 버튼 클릭
2. Agent에게: "이 버튼 더 둥글게, 그림자 추가해줘"
3. 실시간으로 변경 확인
4. Accept
```

**시나리오 2: 레이아웃**
```
1. 카드 컨테이너 선택
2. "이 카드들 그리드로 3열 배치해줘"
3. "간격 좀 더 넓혀줘"
4. Accept
```

**시나리오 3: 버그 분석**
```
1. 깨진 UI 요소 선택
2. "이 부분 왜 이상하게 보이지? 분석해줘"
3. Agent가 CSS/컴포넌트 분석 후 수정
```

### Component Tree

```
Browser 패널 → Component Tree 탭

- 컴포넌트 구조 한눈에 파악
- 클릭하면 해당 코드로 이동
- 복잡한 중첩에서 특정 컴포넌트 찾기 쉬움
```

### 실무 활용

| 상황 | 활용법 |
|------|--------|
| 디자인 피드백 | 요소 선택 → 바로 수정 |
| 반응형 확인 | 브라우저 크기 조절하며 |
| A/B 테스트 | 여러 스타일 빠르게 비교 |
| 버그 수정 | UI 깨진 부분 선택 → 분석 |

---

## 3️⃣ IDE에서 Multi-Agent (15분) 🤖

### 여러 Agent 탭 열기

```
Agent 패널 → "New Agent" 버튼
→ 여러 Agent 탭 생성
```

### ⚠️ 중요: IDE Multi-Agent 주의점

```
┌─────────────────────────────────────────────────────────────┐
│  IDE Multi-Agent의 한계                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Agent 1 ─┐                                                 │
│           │                                                 │
│  Agent 2 ─┼──→ 같은 폴더, 같은 브랜치                       │
│           │                                                 │
│  Agent 3 ─┘                                                 │
│                                                             │
│  ⚠️ 같은 파일 동시 수정 시 충돌!                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### IDE Multi-Agent 사용법 (안전하게)

**방법 1: 다른 파일 작업**
```
Agent 1: "Button 컴포넌트 스타일 수정해줘"
Agent 2: "Header 컴포넌트 수정해줘"
→ 다른 파일이면 OK
```

**방법 2: 순차적 작업**
```
Agent 1: 작업 완료 → Accept
Agent 2: 작업 시작
→ 한 번에 하나씩
```

**방법 3: 질문/분석만**
```
Agent 1: "이 코드 리팩토링 방법 알려줘" (코드 수정 X)
Agent 2: "이 버그 원인 분석해줘" (코드 수정 X)
→ 수정 없이 분석만 하면 OK
```

### 언제 CLI Multi-Agent를 써야 하나?

| 상황 | 권장 |
|------|------|
| 같은 파일 여러 방법 비교 | **CLI + Worktree** |
| 다른 파일 동시 작업 | IDE 가능 |
| UI 확인 필요 | **IDE** |
| 여러 접근법 독립 테스트 | **CLI + Worktree** |

→ **3-4교시에서 CLI Multi-Agent 자세히 다룹니다**

---

## ✅ 2교시 체크리스트

- [ ] Debug Mode 개념 이해
- [ ] Visual Editor 열어보기
- [ ] 요소 선택 후 Agent로 수정 요청
- [ ] IDE Multi-Agent 주의점 이해

---

## 🔗 이 교시 관련 공식 문서

| 주제 | 링크 |
|------|------|
| Debug Mode | https://docs.cursor.com/agent/debug-mode |
| Browser | https://docs.cursor.com/agent/browser |
| Agent Overview | https://docs.cursor.com/agent/overview |

---

## ⏭ 다음 교시

**🍵 10분 휴식**

**[3교시: CLI 모드 - 설치 & Shell Mode →](./03-session.md)**
- CLI 설치 및 기본 사용
- Shell Mode로 명령어 생성
- IDE에서 불가능한 것들

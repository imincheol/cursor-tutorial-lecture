# Project 2: Worktree + CLI Agent로 완전 분리 환경

## 🎯 학습 목표

- Worktree 생성 및 관리 (2장 복습)
- CLI Agent 사용 (4장 복습)
- 물리적으로 여러 창 띄워서 작업
- 완전히 독립된 환경에서 병렬 작업

---

## 💡 핵심 개념

**물리적으로 여러 창**을 띄워서 작업합니다.

```
화면 구성:
┌─────────────────┬─────────────────┬─────────────────┐
│ IDE 창 1        │ 터미널 창 1     │ 터미널 창 2     │
│ feature/        │ hotfix/         │ feature/        │
│ dashboard       │ bug             │ landing         │
│                 │                 │                 │
│ Agent (IDE)     │ agent (CLI)     │ agent (CLI)     │
│ 대시보드 개발   │ 버그 수정       │ 랜딩 페이지     │
└─────────────────┴─────────────────┴─────────────────┘
```

**장점**:
- 완전한 분리 (물리적으로 독립)
- 시각적 명확성 (여러 창 동시에 보기)
- 충돌 없음 (파일 시스템 수준 분리)

**단점**:
- 화면 공간 필요 (듀얼 모니터 권장)
- 설정 복잡 (Worktree 생성 필요)
- 전환 비용 (창 전환이 번거로움)

---

## 🚀 실습 단계

### Step 1: Worktree 생성

**1. 현재 위치 확인**
```bash
pwd
# /Users/user/project
```

**2. 메인 브랜치 생성**
```bash
git checkout -b feature/dashboard
```

**3. Worktree 3개 생성**
```bash
# 핫픽스용
git worktree add ../project-hotfix -b hotfix/bug

# 랜딩 페이지용
git worktree add ../project-landing -b feature/landing

# 확인
git worktree list
# /Users/user/project              [feature/dashboard]
# /Users/user/project-hotfix       [hotfix/bug]
# /Users/user/project-landing      [feature/landing]
```

**참고**: Worktree 기본 사용법은 [2장 4부](../../../session-02-differentiators/README.md#4부-git-worktree)를 참고하세요.

---

### Step 2: 메인 작업 (IDE 창)

**1. Cursor IDE 열기**
```bash
cd /Users/user/project
cursor .
```

**2. Agent 채팅 열기**
```
Cmd/Ctrl + L
```

**3. Agent에게 요청**
```
You: 간단한 대시보드 컴포넌트 만들어줘.

파일: src/Dashboard.jsx
내용:
- 제목: "Dashboard"
- 카드 3개 (Users, Orders, Revenue)
- 각 카드에 숫자 표시
```

**4. Agent 작업 확인**
```
Agent: [Dashboard.jsx 파일 생성]
Agent: 대시보드 컴포넌트를 만들었습니다.
```

**5. 계속 작업**
```
IDE 창을 그대로 두고, 다른 작업을 시작합니다.
```

---

### Step 3: 핫픽스 (터미널 창 1)

**1. 새 터미널 열기**
```bash
# 터미널 앱에서 새 탭/창 열기
cd /Users/user/project-hotfix
```

**2. CLI Agent 실행**
```bash
agent
```

**참고**: CLI Agent 기본 사용법은 [4장](../../../session-04-cli/README.md)을 참고하세요.

**3. Agent에게 요청**
```
You: 로그인 버그 수정해줘.

파일: src/auth.js
문제: 로그인 시 토큰이 저장되지 않음
수정: localStorage에 토큰 저장 추가
```

**4. Agent 작업 확인**
```
Agent: [auth.js 파일 수정]
Agent: 토큰 저장 로직을 추가했습니다.
```

**5. Shell Mode로 테스트 및 커밋**
```
You: !npm test
→ 테스트 통과 확인

You: !git add .
You: !git commit -m "fix: 로그인 토큰 저장 문제 수정"
You: !git push origin hotfix/bug
```

**6. CLI Agent 종료**
```
You: /exit
```

**참고**: Shell Mode(`!` 명령어)는 [4장 2부](../../../session-04-cli/README.md#2부-shell-mode)를 참고하세요.

---

### Step 4: 랜딩 페이지 (터미널 창 2)

**1. 또 다른 터미널 열기**
```bash
# 터미널 앱에서 새 탭/창 열기
cd /Users/user/project-landing
```

**2. CLI Agent 실행**
```bash
agent
```

**3. Agent에게 요청**
```
You: 랜딩 페이지 히어로 섹션 만들어줘.

파일: src/Landing.jsx
내용:
- 큰 제목: "Welcome to Our App"
- 부제목: "The best solution for your needs"
- CTA 버튼: "Get Started"
```

**4. Agent 작업 확인**
```
Agent: [Landing.jsx 파일 생성]
Agent: 랜딩 페이지 히어로 섹션을 만들었습니다.
```

**5. Shell Mode로 커밋**
```
You: !git add .
You: !git commit -m "feat: 랜딩 페이지 히어로 섹션 추가"
You: !git push origin feature/landing
```

**6. CLI Agent 종료**
```
You: /exit
```

---

### Step 5: 메인 작업 재개 (IDE 창)

**1. IDE 창으로 돌아가기**
```
IDE 창 클릭 (또는 Cmd/Ctrl + Tab)
```

**2. Agent에게 추가 요청**
```
You: 대시보드에 차트 컴포넌트도 추가해줘.
     각 카드 아래에 간단한 라인 차트 표시
```

**3. Agent 작업 확인**
```
Agent: [이전 컨텍스트를 기억하고 있음!]
Agent: 대시보드 컴포넌트에 차트를 추가했습니다.
```

**핵심**: IDE Agent는 이전 대화 내용을 완벽히 기억하고 있습니다!

---

## 💡 핵심 포인트

### 1. 완전한 독립 환경

```
IDE 창 (feature/dashboard):
/Users/user/project/
├── src/Dashboard.jsx
└── .git → 원본 저장소

터미널 1 (hotfix/bug):
/Users/user/project-hotfix/
├── src/auth.js
└── .git → 원본 저장소 (심볼릭 링크)

터미널 2 (feature/landing):
/Users/user/project-landing/
├── src/Landing.jsx
└── .git → 원본 저장소 (심볼릭 링크)

→ 파일 시스템 수준에서 완전히 분리!
```

### 2. CLI Agent의 장점

```
터미널에서 CLI Agent 사용:
- Shell Mode(!명령어)로 빠른 테스트
- 커밋, 푸시도 대화 중에 바로 실행
- IDE 없이도 작업 가능

예시:
You: 버그 수정해줘
Agent: [수정 완료]
You: !npm test
You: !git add .
You: !git commit -m "fix: 버그 수정"
You: !git push
```

### 3. 화면 구성 팁

**듀얼 모니터**:
```
모니터 1: IDE 창 (메인 작업)
모니터 2: 터미널 2개 (핫픽스, 추가 작업)
```

**싱글 모니터**:
```
화면 분할:
┌─────────────┬─────────────┐
│ IDE 창      │ 터미널 1    │
│ (왼쪽 50%)  │ (오른쪽     │
│             │  상단 25%)  │
│             ├─────────────┤
│             │ 터미널 2    │
│             │ (오른쪽     │
│             │  하단 25%)  │
└─────────────┴─────────────┘
```

---

## 🆚 방법 1 vs 방법 2 비교

### 방법 1: IDE 내 여러 채팅 창

```
장점:
✅ 한 화면에서 모든 작업
✅ 빠른 전환 (채팅 클릭)
✅ 설정 간편

단점:
❌ 채팅 창이 작을 수 있음
❌ 여러 작업을 동시에 보기 어려움
```

### 방법 2: Worktree + CLI Agent

```
장점:
✅ 완전한 독립 환경
✅ 여러 창을 동시에 볼 수 있음
✅ 시각적으로 명확

단점:
❌ 화면 공간 필요
❌ Worktree 생성 필요
❌ 창 전환이 번거로움
```

### 언제 무엇을 사용하는가?

```
방법 1 (IDE 채팅 전환):
- 화면이 작을 때
- 빠르게 전환하며 작업할 때
- 설정이 간편해야 할 때

방법 2 (Worktree + CLI):
- 듀얼 모니터가 있을 때
- 여러 작업을 동시에 보고 싶을 때
- 완전한 독립 환경이 필요할 때
```

---

## ✅ 완료 체크리스트

- [ ] Worktree 3개 생성 완료
- [ ] IDE 창에서 대시보드 컴포넌트 생성
- [ ] 터미널 1에서 CLI Agent로 로그인 버그 수정
- [ ] 터미널 2에서 CLI Agent로 랜딩 페이지 생성
- [ ] IDE 창으로 돌아가서 차트 추가 (컨텍스트 유지 확인)
- [ ] Shell Mode(`!` 명령어) 사용 경험
- [ ] 각 환경이 완전히 독립적인지 확인

---

## 🎓 학습 정리

### 배운 내용

1. **Worktree 활용**
   - 여러 브랜치를 위한 독립 환경 생성
   - 파일 시스템 수준에서 완전히 분리

2. **CLI Agent 활용**
   - 터미널에서 Agent 실행
   - Shell Mode로 빠른 테스트 및 커밋

3. **물리적 창 분리**
   - IDE 창 + 터미널 창들
   - 여러 작업을 동시에 볼 수 있음

### 실무 활용

```
실무 시나리오:
- IDE 창: 메인 기능 개발 (집중 필요)
- 터미널 1: 긴급 핫픽스 (빠른 처리)
- 터미널 2: 추가 요청 (병렬 작업)

→ 모두 독립적으로 작업
→ 화면이 크다면 동시에 모니터링 가능
→ 컨텍스트 유지
```

---

## 🎓 다음 단계

9장을 완료했습니다!

**다음 장**: [10장: Image Generation - AI로 이미지 생성](../../../session-10-image/README.md)

**복습**:
- [2장 4부: Git Worktree](../../../session-02-differentiators/README.md#4부-git-worktree)
- [4장: CLI Agent](../../../session-04-cli/README.md)
- [8장: Subagents](../../../session-08-subagents/README.md)

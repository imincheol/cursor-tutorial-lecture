# Project 1: IDE 내 여러 채팅 세션으로 병렬 작업

## 🎯 학습 목표

- IDE 내에서 여러 Agent 채팅 세션 열기
- 채팅 창 전환하며 작업하기
- Worktree 전환과 함께 사용하기
- 각 Agent의 독립적인 컨텍스트 확인

---

## 💡 핵심 개념

IDE 내에서 **여러 Agent 채팅 세션**을 열어두고, 채팅 창을 왔다갔다하며 작업합니다.

```
IDE 화면:
├── 채팅 1: feature/dashboard (Agent 1)
│   "대시보드 컴포넌트 작성 중..."
│
├── 채팅 2: hotfix/bug (Agent 2)
│   "버그 수정 완료!"
│
└── 채팅 3: feature/landing (Agent 3)
    "랜딩 페이지 수정 중..."
```

**장점**:
- 한 화면에서 모든 작업 관리
- 빠른 전환 (채팅 창 클릭)
- 각 Agent가 독립적인 컨텍스트 유지

---

## 🚀 실습 단계

### 준비: Worktree 생성

먼저 3개의 브랜치를 위한 Worktree를 생성합니다.

```bash
# 현재 위치 확인
pwd
# /Users/user/project

# 메인 브랜치 생성
git checkout -b feature/dashboard

# 핫픽스용 Worktree 생성
git worktree add ../project-hotfix -b hotfix/bug

# 랜딩 페이지용 Worktree 생성
git worktree add ../project-landing -b feature/landing

# 확인
git worktree list
# /Users/user/project              [feature/dashboard]
# /Users/user/project-hotfix       [hotfix/bug]
# /Users/user/project-landing      [feature/landing]
```

**참고**: Worktree 기본 사용법은 [2장 4부](../../../session-02-differentiators/README.md#4부-git-worktree)를 참고하세요.

---

### Step 1: 메인 작업 시작 (채팅 1)

**1. Cursor IDE 열기**
```
/Users/user/project 폴더 열기
→ feature/dashboard 브랜치
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

**중요**: 이 채팅 창을 **닫지 마세요**! 나중에 다시 돌아올 것입니다.

---

### Step 2: 핫픽스 발생 (채팅 2)

**1. 새로운 Agent 채팅 열기**
```
Cmd/Ctrl + Shift + L
또는
채팅 패널 상단의 "+" 버튼 클릭
```

**2. Worktree 전환**
```
IDE 하단 상태바에서:
feature/dashboard ▼ 클릭
→ hotfix/bug 선택
```

**또는 터미널에서**:
```bash
cd ../project-hotfix
# Cursor IDE에서 이 폴더 열기
```

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

**5. 완료 후 커밋**
```bash
git add .
git commit -m "fix: 로그인 토큰 저장 문제 수정"
git push origin hotfix/bug
```

---

### Step 3: 랜딩 페이지 요청 (채팅 3)

**1. 또 다른 Agent 채팅 열기**
```
Cmd/Ctrl + Shift + L
또는
채팅 패널 상단의 "+" 버튼 클릭
```

**2. Worktree 전환**
```
IDE 하단 상태바에서:
hotfix/bug ▼ 클릭
→ feature/landing 선택
```

**또는 터미널에서**:
```bash
cd ../project-landing
# Cursor IDE에서 이 폴더 열기
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

**5. 완료 후 커밋**
```bash
git add .
git commit -m "feat: 랜딩 페이지 히어로 섹션 추가"
git push origin feature/landing
```

---

### Step 4: 메인 작업 재개 (채팅 1)

**1. 채팅 1로 돌아가기**
```
채팅 패널에서 첫 번째 채팅 클릭
→ feature/dashboard 대화 내용이 그대로!
```

**2. Worktree 전환**
```
IDE 하단 상태바에서:
feature/landing ▼ 클릭
→ feature/dashboard 선택
```

**3. Agent에게 추가 요청**
```
You: 대시보드에 차트 컴포넌트도 추가해줘.
     각 카드 아래에 간단한 라인 차트 표시
```

**4. Agent 작업 확인**
```
Agent: [이전 컨텍스트를 기억하고 있음!]
Agent: 대시보드 컴포넌트에 차트를 추가했습니다.
```

**핵심**: Agent 1은 이전 대화 내용을 완벽히 기억하고 있습니다!

---

### Step 5: 채팅 창 전환 연습

**1. 채팅 2로 전환**
```
채팅 패널에서 두 번째 채팅 클릭
→ hotfix/bug 대화 내용 확인
```

**2. 채팅 3으로 전환**
```
채팅 패널에서 세 번째 채팅 클릭
→ feature/landing 대화 내용 확인
```

**3. 채팅 1로 다시 전환**
```
채팅 패널에서 첫 번째 채팅 클릭
→ feature/dashboard 대화 내용 확인
```

**확인 사항**:
- 각 채팅이 독립적인 대화 기록을 유지하는가?
- Worktree 전환이 잘 되는가?
- 각 Agent가 이전 컨텍스트를 기억하는가?

---

## 💡 핵심 포인트

### 1. 채팅 세션의 독립성

```
채팅 1 (feature/dashboard):
You: 대시보드 만들어줘
Agent: [대시보드 생성]
You: 차트도 추가해줘
Agent: [차트 추가] ← 이전 대화 기억!

채팅 2 (hotfix/bug):
You: 버그 수정해줘
Agent: [버그 수정]
→ 채팅 1의 내용과 완전히 독립적!
```

### 2. Worktree 전환의 중요성

```
채팅 전환 + Worktree 전환 = 완벽한 독립 환경

채팅만 전환: 대화는 독립적이지만 파일은 같음
채팅 + Worktree 전환: 대화도 독립적, 파일도 독립적!
```

### 3. 작업 흐름

```
1. 메인 작업 중...
2. 긴급 작업 발생 → 새 채팅 + Worktree 전환
3. 긴급 작업 완료 → 원래 채팅 + Worktree로 복귀
4. 메인 작업 재개 (컨텍스트 유지!)
```

---

## ✅ 완료 체크리스트

- [ ] Worktree 3개 생성 완료
- [ ] 채팅 1에서 대시보드 컴포넌트 생성
- [ ] 채팅 2에서 로그인 버그 수정
- [ ] 채팅 3에서 랜딩 페이지 생성
- [ ] 채팅 1로 돌아가서 차트 추가 (컨텍스트 유지 확인)
- [ ] 각 채팅 간 전환이 자연스러운지 확인
- [ ] Worktree 전환이 잘 되는지 확인

---

## 🎓 학습 정리

### 배운 내용

1. **여러 Agent 채팅 세션 활용**
   - Cmd/Ctrl + Shift + L로 새 채팅 열기
   - 채팅 패널에서 클릭하여 전환

2. **Worktree 전환**
   - IDE 하단 상태바에서 전환
   - 각 브랜치마다 독립적인 파일 시스템

3. **독립적인 컨텍스트**
   - 각 채팅이 독립적인 대화 기록 유지
   - Agent가 이전 대화 내용 기억

### 실무 활용

```
실무 시나리오:
- 메인 작업: feature/dashboard (채팅 1)
- 긴급 핫픽스: hotfix/bug (채팅 2)
- 추가 요청: feature/landing (채팅 3)

→ 모두 독립적으로 작업
→ 언제든 원하는 작업으로 전환
→ 컨텍스트 유지
```

---

## 🎓 다음 단계

[Project 2: Worktree + CLI Agent로 완전 분리 환경](../02-worktree-cli-agent/README.md)

더 고급 방법으로, 물리적으로 여러 창을 띄워서 작업하는 방법을 배웁니다.

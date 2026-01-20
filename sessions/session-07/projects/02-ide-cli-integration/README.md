# Project 2: IDE + CLI 통합 워크플로우

## 🎯 학습 목표

- IDE Agent와 CLI Agent를 함께 사용
- 메인 작업과 보조 작업을 병렬로 진행
- 실전 Multi-Agent 워크플로우 경험


---

## 💡 IDE + CLI 통합이란?

IDE에서 메인 작업을 진행하면서, CLI Agent로 보조 작업을 병렬로 수행하는 패턴입니다.

```
IDE Agent:
- 메인 기능 개발
- 집중이 필요한 작업
- 시각적 확인이 필요한 작업

CLI Agent:
- 라이브러리 조사
- 문서 작성
- 테스트 실행
- 백그라운드 작업
```

---

## 🎯 실습 시나리오

**목표**: TODO 앱을 개발하면서 동시에 새로운 UI 라이브러리를 조사합니다.

```
IDE (main/)           → 메인 기능 개발
터미널 (research/)    → 라이브러리 조사
```

---

## 🚀 실습 단계

### Step 1: 환경 준비 (2분)

```bash
# 조사용 Worktree 생성
git worktree add ../research-ui-lib -b research/ui-library

# 확인
git worktree list
```

---

### Step 2: IDE Agent - 메인 작업 (5분)

**Cursor IDE**:

1. `main/` 디렉터리에서 Cursor IDE 열기
2. Agent 창 열기
3. 다음 요청:

```
You: React로 TODO 앱 만들어줘
     - 할 일 추가
     - 할 일 완료 표시
     - 할 일 삭제

Agent: [App.jsx, TodoList.jsx 등 생성]

You: 스타일도 추가해줘. CSS 모듈 사용해서

Agent: [styles.module.css 생성]

You: Visual Editor로 버튼 스타일 수정
```

**메인 작업에 집중!**

---

### Step 3: CLI Agent - 조사 작업 (5분)

**터미널** (동시에!):

```bash
cd ../research-ui-lib
cursor

You: 인기 있는 React UI 라이브러리 5개 조사해줘.
     각각의 장단점과 번들 크기 비교해서 정리해줘.

Agent: [research.md 생성]

You: !cat research.md
→ 결과 확인

You: Material-UI 설치하고 간단한 예제 만들어줘

Agent: [mui-example.jsx 생성]

You: !npm install @mui/material @emotion/react @emotion/styled

You: !npm start
→ 예제 실행 확인

You: 이 라이브러리가 우리 프로젝트에 적합한지 평가해줘
     - 번들 크기
     - 커스터마이징 가능성
     - 러닝 커브
     - 커뮤니티 지원

Agent: [evaluation.md 생성]
```

**백그라운드에서 조사 진행!**

---

### Step 4: 결과 통합 (3분)

```bash
# 조사 결과 확인
cd ../research-ui-lib
cat evaluation.md

# 결정: Material-UI 사용하기로 결정!

# 메인 프로젝트로 돌아가기
cd ../main

# Cursor IDE에서
You: Material-UI를 사용하도록 TODO 앱 리팩토링해줘

Agent: [리팩토링]

# 조사용 Worktree 정리
git worktree remove ../research-ui-lib
git branch -d research/ui-library
```

---

## 💡 핵심 개념

### IDE Agent vs CLI Agent

| 작업 유형           | IDE Agent | CLI Agent |
| ------------------- | --------- | --------- |
| **메인 기능 개발**  | ✅        | ❌        |
| **UI 작업**         | ✅        | ❌        |
| **Visual Editor**   | ✅        | ❌        |
| **라이브러리 조사** | ❌        | ✅        |
| **문서 작성**       | ❌        | ✅        |
| **백그라운드 작업** | ❌        | ✅        |

### 통합 워크플로우 패턴

**패턴 1: 메인 + 조사**:
```
IDE: 메인 기능 개발
CLI: 라이브러리/기술 조사
```

**패턴 2: 메인 + 문서**:
```
IDE: 코드 작성
CLI: README, API 문서 작성
```

**패턴 3: 메인 + 테스트**:
```
IDE: 기능 구현
CLI: 테스트 코드 작성 및 실행
```

---

## 🎯 실전 예시

### 시나리오: 새 기능 개발 + 성능 테스트

```bash
# IDE (main/)
You: 사용자 대시보드 구현해줘
Agent: [개발 중...]

# 터미널 (performance/)
cd ../worktree-performance
cursor

You: 현재 앱의 성능 테스트 코드 작성해줘
     Lighthouse 사용해서

Agent: [performance-test.js 생성]

You: !npm run test:performance
→ 성능 측정

You: 성능 개선 방안 제안해줘
Agent: [optimization-suggestions.md 생성]
```

---

## 🛠️ 고급 활용

### 3-Agent 워크플로우

```
IDE (main/)
→ Agent 1: 메인 기능 개발

터미널 1 (research/)
→ Agent 2: 라이브러리 조사

터미널 2 (docs/)
→ Agent 3: 문서 작성
```

### 역할 기반 Multi-Agent

```
IDE (frontend/)
→ Frontend Agent: React 개발

터미널 1 (backend/)
→ Backend Agent: API 개발

터미널 2 (test/)
→ QA Agent: 테스트 작성
```

---

## 🎯 실전 팁

### 효율적인 통합 워크플로우

```bash
# 1. 메인 작업은 IDE에서
# - 시각적 피드백 필요
# - Visual Editor 사용
# - 복잡한 코드 작업

# 2. 보조 작업은 CLI에서
# - 조사/리서치
# - 문서 작성
# - 간단한 스크립트
# - 테스트 실행

# 3. 정기적인 동기화
# - 주기적으로 결과 확인
# - 필요시 방향 조정
```

### 주의사항

```bash
# ❌ 피해야 할 것
# - 같은 파일을 IDE와 CLI에서 동시 수정
# - 너무 많은 CLI Agent (2개 이하 권장)
# - 의존성이 있는 작업을 분리

# ✅ 권장 사항
# - 독립적인 작업 분리
# - 명확한 역할 분담
# - 주기적인 결과 통합
```

---

## ✅ 완료 체크리스트

- [ ] 조사용 Worktree 생성
- [ ] IDE에서 메인 기능 개발
- [ ] CLI에서 라이브러리 조사 (동시에!)
- [ ] 조사 결과 확인 및 평가
- [ ] 결과를 메인 프로젝트에 통합
- [ ] 불필요한 Worktree 정리

---

## 🎓 정리

### IDE + CLI 통합의 가치

1. **집중력 유지**: 메인 작업에 집중하면서 조사 병행
2. **효율성**: 순차 작업 대비 훨씬 빠름
3. **컨텍스트 분리**: 메인 작업 컨텍스트 오염 방지
4. **효율적 의사결정**: 실시간 조사로 빠른 결정

### 실전 적용

**개발 초기**:
```
IDE: 프로토타입 개발
CLI: 기술 스택 조사
```

**개발 중기**:
```
IDE: 기능 구현
CLI: 테스트 작성
```

**개발 후기**:
```
IDE: 버그 수정
CLI: 문서 작성
```

---

## 🎓 다음 장

[8장: Agent Skills & Sub-Agent (보충 자료)](../../session-08/README.md)

---

## 🎉 축하합니다!

7장까지 완료하셨습니다! 이제 Cursor의 핵심 기능을 모두 익히셨습니다:

1. ✅ Rules (Copilot 공통점)
2. ✅ Debug Mode (실행 기반 디버깅)
3. ✅ Hooks (Agent 제어)
4. ✅ Visual Editor (클릭 기반 UI 수정)
5. ✅ CLI Agent (터미널 개발)
6. ✅ Git Worktree (독립 환경)
7. ✅ Multi-Agent (병렬 작업)

8-10장은 보충 자료입니다. 필요에 따라 학습하세요!

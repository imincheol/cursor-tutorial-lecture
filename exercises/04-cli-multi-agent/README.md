# 🤖 4교시 실습: CLI 모드 - Worktree Multi-Agent

> 📚 **공식 문서**: https://cursor.com/docs/configuration/worktrees

---

## Worktree Multi-Agent 개념

```
IDE Multi-Agent:
  ⚠️ 같은 브랜치 → 충돌 가능
  ⚠️ 대화 컨텍스트 공유 안 됨

CLI + Worktree:
  ✅ 독립 환경 → 충돌 없음
  ✅ 각 터미널에서 대화형 모드로 깊이 있는 작업 가능
  ✅ IDE에서 메인 작업 + CLI에서 조사/실험

IDE + CLI 결합:
  🔥 IDE 작업 중 + 터미널로 별개 조사 가능
```

---

## Worktree 설정

### 생성

```bash
# 현재 위치: /my-project

# 실험 1
git worktree add ../my-project-exp1 -b experiment-1

# 실험 2
git worktree add ../my-project-exp2 -b experiment-2

# 확인
git worktree list
```

### 🔥 실전 Multi-Agent 시나리오들

#### 시나리오 1: IDE 작업 중 + CLI 동시 조사

**상황: IDE에서 `develop` 브랜치의 `feat/user-profile` 작업 진행 중**

```bash
# IDE 상태: develop 브랜치에서 작업 중 (채팅 세션 활성)

# 터미널 1: develop 기반으로 구조 개선 조사
git worktree add ../project-structure -b structure-analysis
cd ../project-structure
cursor agent "현재 user-profile 코드 구조를 분석하고 개선 방안 제안해줘"

# 터미널 2: main 기반으로 API 개선 조사
git worktree add ../project-api -b api-enhancement
cd ../project-api
cursor agent "API 호출 부분의 에러 처리 개선 방안 찾아줘"

# 결과: IDE + 2개 터미널 = 3가지 작업 동시 진행!
# - IDE: feat/user-profile UI 작업 계속
# - 터미널1: 코드 구조 분석
# - 터미널2: API 개선 조사
```

#### 시나리오 2: 아키텍처 리팩토링 비교

**상황: 컴포넌트 상태 관리 방식 개선**

```bash
# 3가지 접근법 동시 비교
git worktree add ../refactor-redux -b try-redux
git worktree add ../refactor-zustand -b try-zustand
git worktree add ../refactor-context -b try-context

# 터미널 1: Redux 적용
cd ../refactor-redux
cursor agent "이 컴포넌트를 Redux로 리팩토링해줘 - 액션, 리듀서, 셀렉터까지"

# 터미널 2: Zustand 적용
cd ../refactor-zustand
cursor agent "이 컴포넌트를 Zustand로 리팩토링해줘 - 스토어, 훅, 타입까지"

# 터미널 3: Context API 적용
cd ../refactor-context
cursor agent "이 컴포넌트를 Context API로 리팩토링해줘 - 프로바이더, 훅까지"

# IDE에서 각 결과 비교 및 최선 선택
```

#### 시나리오 3: 라이브러리 마이그레이션 평가

**상황: React Query에서 SWR로 마이그레이션 고려**

```bash
# 마이그레이션 전/후 비교
git worktree add ../before-migration -b before-swr
git worktree add ../after-migration -b after-swr

# 터미널 1: 현재 React Query 코드 분석
cd ../before-migration
cursor agent "현재 React Query 사용 패턴 분석하고 개선점 찾아줘"

# 터미널 2: SWR 마이그레이션 시뮬레이션
cd ../after-migration
cursor agent "React Query를 SWR로 마이그레이션해줘 - 모든 API 호출 변경"

# IDE에서 마이그레이션 영향도 분석
```

#### 시나리오 4: 성능 최적화 전략 비교

**상황: 컴포넌트 렌더링 성능 개선**

```bash
# 3가지 최적화 전략 비교
git worktree add ../perf-memo -b perf-memo
git worktree add ../perf-callback -b perf-callback
git worktree add ../perf-structure -b perf-structure

# 터미널 1: React.memo 적용
cd ../perf-memo
cursor agent "React.memo와 useMemo를 활용해서 이 컴포넌트 최적화해줘"

# 터미널 2: 콜백 최적화
cd ../perf-callback
cursor agent "useCallback과 useMemo로 콜백 함수들 최적화해줘"

# 터미널 3: 구조적 최적화
cd ../perf-structure
cursor agent "컴포넌트 구조를 변경해서 렌더링을 최적화해줘"

# IDE에서 React DevTools로 성능 비교
```

#### 시나리오 5: 테스트 전략 비교

**상황: 컴포넌트 테스트 방식 결정**

```bash
# 테스트 전략 비교
git worktree add ../test-unit -b test-unit
git worktree add ../test-integration -b test-integration
git worktree add ../test-e2e -b test-e2e

# 터미널 1: 단위 테스트
cd ../test-unit
cursor agent "이 컴포넌트의 단위 테스트 작성해줘 - Jest + React Testing Library"

# 터미널 2: 통합 테스트
cd ../test-integration
cursor agent "컴포넌트 통합 테스트 작성해줘 - 여러 컴포넌트 상호작용 테스트"

# 터미널 3: E2E 테스트
cd ../test-e2e
cursor agent "E2E 테스트 작성해줘 - Playwright로 사용자 플로우 테스트"

# IDE에서 테스트 커버리지 비교
```

### 기존 방식: 순수 CLI Multi-Agent

**터미널 1:**
```bash
cd ../my-project-exp1
cursor agent "useReducer로 리팩토링해줘"
```

**터미널 2:**
```bash
cd ../my-project-exp2
cursor agent "Custom Hook으로 리팩토링해줘"
```

### 결과 비교

```bash
diff -r my-project-exp1/src my-project-exp2/src
```

### 정리

```bash
# 최선 선택 후 merge
git merge experiment-1

# Worktree 삭제
git worktree remove ../my-project-exp1
git worktree remove ../my-project-exp2
git branch -d experiment-1 experiment-2
```

---

## 3개 접근법 비교 예시

```bash
git worktree add ../proj-reducer -b try-reducer
git worktree add ../proj-hook -b try-hook
git worktree add ../proj-zustand -b try-zustand

# 터미널 3개에서 각각 실행
```

---

## IDE vs CLI Multi-Agent

| 항목 | IDE | CLI + Worktree |
|------|-----|----------------|
| 같은 파일 수정 | ⚠️ 충돌 | ✅ 독립 |
| Visual Editor | ✅ | ❌ |
| 적합 상황 | UI, 다른 파일 | 여러 접근법 비교 |

---

## 실습 과제

### 기본 실습 (필수)
1. [ ] Worktree 2개 생성 및 목록 확인
2. [ ] 각 터미널에서 다른 방식으로 Agent 실행
3. [ ] diff 명령어로 결과 비교
4. [ ] 최선 결과 선택 후 merge
5. [ ] Worktree 및 브랜치 정리

### 🔥 고급 실습: IDE + CLI 결합 (권장)
6. [ ] IDE에서 현재 브랜치 작업 시작 (채팅 세션 활성)
7. [ ] 터미널에서 develop/main으로부터 새로운 worktree 생성
8. [ ] 해당 폴더로 이동해서 cursor-agent 실행
9. [ ] IDE 작업 계속하면서 터미널에서 별개 작업 진행
10. [ ] 필요시 세 번째 터미널로 추가 작업
11. [ ] 모든 결과 비교 및 정리

### 🚀 보너스 실습 (선택)

#### 초급 보너스
12. [ ] **아키텍처 리팩토링 비교**
    - 3가지 상태 관리 방식 동시 비교 (Redux/Zustand/Context)
    - 각 방식의 장단점 분석

13. [ ] **라이브러리 마이그레이션 평가**
    - React Query → SWR 마이그레이션 시뮬레이션
    - 마이그레이션 영향도 분석

14. [ ] **성능 최적화 전략 비교**
    - React.memo, useCallback, 구조적 최적화 비교
    - 실제 성능 측정

#### 중급 보너스
15. [ ] **테스트 전략 수립**
    - 단위/통합/E2E 테스트 방식 비교
    - 테스트 커버리지 분석

16. [ ] **에러 처리 패턴 비교**
    - try-catch, Error Boundary, Result 타입 비교
    - 각 상황별 적합성 평가

17. [ ] **디자인 패턴 적용**
    - Factory, Observer, Strategy 패턴 등 적용 비교
    - 코드 유지보수성 비교

#### 고급 보너스
18. [ ] **실전 프로젝트 적용**
    - 실제 업무 코드에 Multi-Agent 적용
    - 팀 코드 리뷰에 활용

19. [ ] **워크플로우 자동화**
    - Worktree 생성/삭제 스크립트 작성
    - 결과 비교 자동화

20. [ ] **팀 협업 최적화**
    - Multi-Agent 결과 공유 방법 개발
    - 의사결정 프로세스 구축

21. [ ] **품질 게이트 구축**
    - 각 Worktree에서 품질 검사 자동화
    - 통과된 결과만 merge 허용

### 📊 실습 완료도 체크

**기본 실습 (5/5) 완료 시:**
- ✅ Worktree Multi-Agent 기본 사용법 숙지
- ✅ 여러 접근법 동시 비교 가능

**고급 실습 (6/11) 완료 시:**
- 🔥 IDE + CLI 통합 워크플로우 마스터
- 🔥 실무에서 즉시 활용 가능한 수준

**보너스 실습 (5/10) 완료 시:**
- 🚀 복잡한 의사결정 자동화
- 🚀 팀 전체 생산성 향상

**전체 실습 (16/21) 완료 시:**
- 🚀 Multi-Agent 아키텍트 레벨
- 🚀 어떤 기술 결정도 자신있게 내릴 수 있음

---

## 전체 공식 문서

| 주제 | 링크 |
|------|------|
| Cursor 문서 | https://cursor.com/docs |
| CLI | https://cursor.com/docs/cli/overview |
| Agent | https://cursor.com/docs/agent/overview |
| Rules | https://cursor.com/docs/context/rules |
| Hooks | https://cursor.com/docs/agent/hooks |
| Browser | https://cursor.com/docs/agent/browser |
| Debug Mode | https://cursor.com/docs/agent/debug-mode |
| Worktrees | https://cursor.com/docs/configuration/worktrees |

---

**[← 4교시 강의](../../curriculum/04-session.md)** | **[← 3교시 실습](../03-cli-shell/README.md)** | **[← 개요](../../curriculum/00-overview.md)**

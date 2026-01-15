# 보너스: Nightly 빌드 실험적 기능 - 미래를 엿보다

## 📋 목차

- [Nightly 빌드란?](#nightly-빌드란)
- [Agent Skills](#agent-skills)
- [Sub-Agent](#sub-agent)
- [미래의 오케스트레이션](#미래의-오케스트레이션)

---

## 🌙 Nightly 빌드란?

### 실험적 기능의 테스트베드

```
Cursor 버전:
- Stable: 안정 버전 (일반 사용자)
- Nightly: 실험 버전 (얼리어답터)

Nightly 특징:
- 매일 빌드
- 새로운 기능 먼저 체험
- 불안정할 수 있음
- 다음 Stable에 포함될 기능 미리보기
```

### 현재 Nightly의 실험적 기능

| 기능 | 상태 | 예상 도입 |
|------|------|----------|
| **Agent Skills** | 실험 중 | 다음 버전 예상 |
| **Sub-Agent** | 실험 중 | 다음 버전 예상 |

---

## 🎯 Agent Skills

### Agent Skills란?

```
Agent의 능력을 확장하는 기능

현재 Agent:
- 코드 작성
- 파일 수정
- 터미널 명령

Agent + Skills:
- 웹 검색
- 코드 실행
- 커스텀 기능
- 무한 확장 가능
```

### 예상 기능

**기본 제공 Skills**:
```
- Web Search: 웹 검색
- Code Execution: 코드 실행
- File Operations: 파일 작업
- Terminal: 터미널 명령
```

**커스텀 Skills**:
```javascript
// 예: 디자인 시스템 검증 Skill
{
  name: "design-system-check",
  description: "디자인 시스템 준수 여부 검증",
  execute: async (code) => {
    // 색상 팔레트 검증
    // 타이포그래피 검증
    // 간격 시스템 검증
    return { violations, suggestions };
  }
}
```

### 도입되면?

```
Before (현재):
- Agent 능력 고정
- 외부 도구 별도 실행 필요

After (Skills 도입 후):
- Agent 능력 무한 확장
- 커스텀 검증/자동화 가능
- 팀별 맞춤 기능 추가
```

---

## 🤖 Sub-Agent

### Sub-Agent란?

```
Agent가 다른 Agent를 생성하고 관리하는 기능

현재:
- 1 세션 = 1 Agent
- 서브 세션 불가
- 수동으로 Multi-Agent (Worktree)

Sub-Agent 도입 후:
- 1 Agent가 여러 Sub-Agent 생성
- 자동 오케스트레이션
- 자동 결과 통합
```

### 동작 방식 (예상)

```
메인 Agent
  │
  ├─ Sub-Agent 1: 기획
  │     └─ 요구사항 분석
  │
  ├─ Sub-Agent 2: 디자인
  │     └─ UI/UX 설계
  │
  ├─ Sub-Agent 3: 마크업
  │     └─ HTML/CSS 구현
  │
  ├─ Sub-Agent 4: 프론트엔드
  │     └─ JS/React 구현
  │
  └─ Sub-Agent 5: QA
        └─ 테스트 및 검증

메인 Agent: 결과 통합 및 보고
```

### 현재 vs Sub-Agent

| 방식 | 현재 (Worktree) | Sub-Agent |
|------|----------------|-----------|
| **생성** | 수동 | 자동 |
| **관리** | 수동 | 자동 |
| **결과 통합** | 수동 | 자동 |
| **오케스트레이션** | 수동 | 자동 |

---

## 🎭 미래의 오케스트레이션

### 4교시 심화에서 배운 것

```
현재 Cursor Agent의 한계:
- 1 세션 = 1 Agent
- 서브 세션 불가
- 오케스트레이션 수동

해결책 (현재):
- Worktree로 환경 분리
- 수동으로 Multi-Agent
- 1 Agent = 1 Role 원칙
```

### Sub-Agent 도입 후

**자동 오케스트레이션 가능!**

```
현재 (수동):
  1. Worktree 수동 생성
  2. 각 터미널에서 cursor-agent 실행
  3. 각각 프롬프트 입력
  4. 결과 수동 수집
  5. 결과 수동 통합

Sub-Agent 도입 후 (자동):
  1. 메인 Agent에게 요청
  2. Agent가 자동으로 Sub-Agent 생성
  3. Agent가 자동으로 역할 분배
  4. Agent가 자동으로 결과 통합
  5. Agent가 최종 결과 보고
```

### Oh My OpenCode 스타일

```
현재:
  Worktree 수동 관리
  └─ 번거로움
  └─ 오류 가능성
  └─ 시간 소요

Sub-Agent 도입 후:
  "새 페이지 만들어줘"
  └─ Agent가 자동 판단
  └─ 기획 Sub-Agent 실행
  └─ 디자인 Sub-Agent 실행
  └─ 마크업 Sub-Agent 실행
  └─ FE Sub-Agent 실행
  └─ QA Sub-Agent 실행
  └─ 결과 자동 통합
  └─ "완료했습니다!"
```

### 예상 시나리오

**신규 페이지 추가**:
```
당신: "사용자 프로필 페이지 만들어줘"

Agent: 
  [기획 Sub-Agent 생성]
  [디자인 Sub-Agent 생성]
  [마크업 Sub-Agent 생성]
  [FE Sub-Agent 생성]
  [QA Sub-Agent 생성]
  
  기획: 요구사항 분석 완료
  디자인: UI 설계 완료
  마크업: HTML/CSS 완료
  FE: React 컴포넌트 완료
  QA: 테스트 통과
  
  [결과 통합 중...]
  
Agent: "프로필 페이지 완성했습니다!"
```

**버튼 문구 수정**:
```
당신: "로그인 버튼 문구를 '시작하기'로 바꿔줘"

Agent:
  [간단한 작업으로 판단]
  [Sub-Agent 불필요]
  [직접 수정]

Agent: "수정 완료했습니다!"
```

---

## 🔮 정리

### 현재 상태

```
Stable 버전:
- Hooks ✅
- Debug Mode ✅
- Visual Editor ✅
- CLI Agent ✅
- Shell Mode ✅
- Multi-Agent (수동) ✅

Nightly 버전 (실험 중):
- Agent Skills ⏳
- Sub-Agent ⏳
```

### 도입 예상 효과

| 기능 | 현재 | 도입 후 |
|------|------|---------|
| **Agent 확장** | 불가 | Skills로 무한 확장 |
| **오케스트레이션** | 수동 (Worktree) | 자동 (Sub-Agent) |
| **복잡한 작업** | 분할 필요 | 한 번에 처리 |
| **결과 통합** | 수동 | 자동 |

### 준비하기

```
현재 할 수 있는 것:
1. Worktree Multi-Agent 익숙해지기
2. Role 기반 작업 분리 연습
3. 오케스트레이션 개념 이해

Sub-Agent 도입되면:
- 수동 → 자동 전환 쉬움
- 개념은 동일, 실행만 자동화
- 이미 익숙한 워크플로우 그대로
```

---

## 📚 관련 자료

- [4교시: Multi-Agent & Worktree](./session-04/README.md)
- [4교시 심화: Role 기반 오케스트레이션](./session-04/ADVANCED_ORCHESTRATION.md)
- [Cursor 공식 문서](https://cursor.com/docs)

---

**Nightly 빌드에 관심이 있다면 Cursor 설정에서 업데이트 채널을 변경해보세요!**

⚠️ **주의**: Nightly 빌드는 불안정할 수 있습니다. 중요한 프로젝트에서는 Stable 버전 사용을 권장합니다.

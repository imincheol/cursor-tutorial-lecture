# Project 2: Custom Subagent 만들기

> **특정 역할을 가진 Custom Subagents를 직접 만들어봅니다**

## 📝 실습 개요

이 실습에서는:
1. `create-subagent` 스킬 사용법 익히기
2. Code Reviewer Subagent 생성
3. 실제 코드 작성 후 리뷰 요청
4. 프로젝트 vs 사용자 레벨 비교
5. 다양한 역할의 Subagent 생성

**공식 문서**:
- [Subagents](https://cursor.com/docs/context/subagents)
- [Custom Subagents](https://cursor.com/docs/context/subagents#custom-subagents)

---

## 🎯 실습 목표

- Custom Subagent 생성 방법 익히기
- 역할별 Subagent 설계 이해
- 프로젝트 레벨 vs 사용자 레벨 차이 파악
- 실제 워크플로우에 통합하기

---

## 📚 실습 단계

### 1단계: Code Reviewer Subagent 생성

#### 1-1. 프로젝트 레벨 Subagent 생성

**Agent 모드에서 요청**:
```
Code Reviewer Subagent를 .cursor/agents/에 만들어줘.

요구사항:
- 코드 품질, 보안, 유지보수성 검토
- Critical, Warning, Suggestion 3단계로 피드백
- 구체적인 수정 방법 제시
- "use proactively" 포함해서 자동 위임되도록
```

**관찰 포인트**:
- Agent가 `create-subagent` 스킬을 사용하는가?
- 파일 구조가 올바른가? (YAML frontmatter + Markdown)
- Description이 명확한가?
- 시스템 프롬프트가 구체적인가?

**예상 결과**:
```markdown
.cursor/agents/code-reviewer.md 생성됨

---
name: code-reviewer
description: Expert code review specialist. Proactively reviews code for quality, security, and maintainability. Use immediately after writing or modifying code.
---

You are a senior code reviewer ensuring high standards...
```

#### 1-2. 생성된 Subagent 확인

**파일 확인**:
```bash
cat .cursor/agents/code-reviewer.md
```

**체크 포인트**:
- [ ] YAML frontmatter가 올바른가?
- [ ] `name` 필드가 있는가?
- [ ] `description`이 구체적인가?
- [ ] 시스템 프롬프트가 명확한가?
- [ ] 워크플로우가 정의되어 있는가?

---

### 2단계: Code Reviewer 실전 사용

#### 2-1. 테스트 코드 작성

**Agent 모드에서 요청**:
```
간단한 사용자 로그인 함수를 작성해줘.

요구사항:
- 이메일과 비밀번호를 받음
- 유효성 검사
- 인증 처리
- 에러 처리
```

**예상 코드**:
```javascript
// login.js
function login(email, password) {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  
  // 간단한 이메일 검증
  if (!email.includes('@')) {
    throw new Error('Invalid email format');
  }
  
  // 비밀번호 검증 (실제로는 더 복잡해야 함)
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }
  
  // 인증 로직 (실제로는 서버 통신)
  const user = authenticateUser(email, password);
  
  return user;
}

function authenticateUser(email, password) {
  // 실제 구현 필요
  return { id: 1, email: email };
}

module.exports = { login };
```

#### 2-2. Code Reviewer로 리뷰 요청

**Agent 모드에서 요청**:
```
방금 작성한 login.js 파일을 Code Reviewer Subagent로 리뷰해줘.
```

**관찰 포인트**:
- Agent가 자동으로 Code Reviewer Subagent를 호출하는가?
- 리뷰가 3단계(Critical, Warning, Suggestion)로 구분되는가?
- 구체적인 수정 방법이 제시되는가?

**예상 리뷰 결과**:
```
Code Reviewer Subagent 리뷰:

Critical Issues (반드시 수정):
1. 비밀번호 평문 저장 문제
   - 현재: 비밀번호를 그대로 전달
   - 수정: bcrypt 등으로 해싱 필요
   
2. SQL Injection 취약점
   - authenticateUser에서 직접 쿼리 실행 시 위험
   - 수정: Prepared Statement 사용

Warnings (수정 권장):
1. 에러 메시지가 너무 구체적
   - 공격자에게 힌트 제공 가능
   - 수정: 일반적인 메시지 사용
   
2. Rate Limiting 없음
   - Brute Force 공격 가능
   - 수정: 시도 횟수 제한 추가

Suggestions (개선 제안):
1. 이메일 검증 강화
   - 현재: 단순 '@' 체크
   - 개선: 정규식으로 정확한 검증
   
2. 로깅 추가
   - 로그인 시도 기록
   - 보안 감사 추적
```

#### 2-3. 리뷰 결과 반영

**Agent 모드에서 요청**:
```
Code Reviewer의 Critical Issues를 모두 수정해줘.
```

**관찰 포인트**:
- 리뷰 결과가 정확하게 반영되는가?
- 보안 취약점이 해결되는가?

---

### 3단계: 다양한 Custom Subagents 생성

#### 3-1. Debugger Subagent 생성

**Agent 모드에서 요청**:
```
Debugger Subagent를 .cursor/agents/에 만들어줘.

요구사항:
- 에러 분석 및 근본 원인 파악
- 재현 단계 확인
- 최소한의 수정으로 해결
- 예방 방법 제안
```

#### 3-2. UI Designer Subagent 생성

**Agent 모드에서 요청**:
```
UI Designer Subagent를 .cursor/agents/에 만들어줘.

요구사항:
- 반응형 디자인 검토
- 접근성(A11y) 확인
- 사용자 경험 개선 제안
- 디자인 일관성 검토
```

#### 3-3. Technical Writer Subagent 생성

**Agent 모드에서 요청**:
```
Technical Writer Subagent를 .cursor/agents/에 만들어줘.

요구사항:
- API 문서 작성
- README 작성
- 코드 주석 검토
- 사용 예시 제공
```

---

### 4단계: 프로젝트 vs 사용자 레벨 비교

#### 4-1. 사용자 레벨 Subagent 생성

**Agent 모드에서 요청**:
```
Personal Code Reviewer Subagent를 ~/.cursor/agents/에 만들어줘.

이것은 내 개인 스타일에 맞춘 리뷰어야:
- 함수형 프로그래밍 선호
- 간결한 코드 선호
- 타입 안정성 중시
```

**관찰 포인트**:
- 프로젝트 레벨과 사용자 레벨의 차이는?
- 어느 것이 우선순위가 높은가?

#### 4-2. 우선순위 테스트

**파일 구조**:
```
.cursor/agents/code-reviewer.md  (프로젝트 레벨)
~/.cursor/agents/code-reviewer.md  (사용자 레벨)
```

**Agent 모드에서 요청**:
```
Code Reviewer로 코드를 리뷰해줘.
```

**관찰 포인트**:
- 어느 Subagent가 사용되는가?
- 프로젝트 레벨이 우선인가?

**예상 결과**:
```
프로젝트 레벨 (.cursor/agents/)이 우선순위가 높음
→ 팀 전체의 일관된 리뷰 기준 적용
```

---

### 5단계: Custom Subagents 조합 활용

#### 5-1. 전체 워크플로우 구성

**Agent 모드에서 요청**:
```
새로운 API 엔드포인트를 만들어줘:
- POST /api/users/register
- 이메일, 비밀번호, 이름 받기
- 유효성 검사
- 데이터베이스 저장
- 응답 반환

그리고 다음 순서로 검토해줘:
1. Code Reviewer로 코드 품질 검토
2. Debugger로 잠재적 버그 확인
3. Technical Writer로 API 문서 작성
```

**관찰 포인트**:
- 여러 Custom Subagents가 순차적으로 실행되는가?
- 각 Subagent의 결과가 다음 단계에 반영되는가?
- 최종 결과물이 완성도 높은가?

**예상 워크플로우**:
```
1. 메인 Agent: API 엔드포인트 구현
   ↓
2. Code Reviewer Subagent: 코드 품질 검토
   - Critical Issues 발견 및 수정
   ↓
3. Debugger Subagent: 잠재적 버그 확인
   - 에러 처리 개선
   ↓
4. Technical Writer Subagent: API 문서 작성
   - 엔드포인트 설명
   - 요청/응답 예시
   - 에러 코드 설명
```

---

## ✅ 실습 체크리스트

### Code Reviewer Subagent
- [ ] 프로젝트 레벨 생성 완료
- [ ] 테스트 코드 작성 완료
- [ ] 리뷰 요청 및 결과 확인
- [ ] 리뷰 결과 반영 완료

### 다양한 Subagents
- [ ] Debugger Subagent 생성
- [ ] UI Designer Subagent 생성
- [ ] Technical Writer Subagent 생성

### 프로젝트 vs 사용자 레벨
- [ ] 사용자 레벨 Subagent 생성
- [ ] 우선순위 테스트 완료
- [ ] 차이점 이해

### Custom Subagents 조합
- [ ] 전체 워크플로우 구성 완료
- [ ] 여러 Subagents 순차 실행 확인
- [ ] 최종 결과물 검토

---

## 💡 학습 포인트

### Custom Subagent 설계 원칙

#### 1. 명확한 역할 정의

```markdown
❌ 나쁜 예:
description: Helps with code

✅ 좋은 예:
description: Expert code review specialist. Proactively reviews code for quality, security, and maintainability. Use immediately after writing or modifying code.
```

#### 2. 구체적인 워크플로우

```markdown
When invoked:
1. Run git diff to see recent changes
2. Focus on modified files
3. Begin review immediately

Review checklist:
- Code is clear and readable
- Functions and variables are well-named
- No duplicated code
...
```

#### 3. "Use Proactively" 키워드

```markdown
description: Code reviewer. Use proactively after code changes.
                           ↑ 이 키워드로 자동 위임
```

### 프로젝트 vs 사용자 레벨

| 항목 | 프로젝트 레벨 | 사용자 레벨 |
|------|---------------|-------------|
| **위치** | `.cursor/agents/` | `~/.cursor/agents/` |
| **범위** | 현재 프로젝트만 | 모든 프로젝트 |
| **우선순위** | 높음 | 낮음 |
| **공유** | Git으로 팀 공유 | 개인용 |
| **용도** | 팀 표준, 프로젝트 특화 | 개인 워크플로우 |

**선택 기준**:
```
팀과 공유할 Subagent:
  → 프로젝트 레벨 (.cursor/agents/)
  → Git에 커밋

개인 워크플로우:
  → 사용자 레벨 (~/.cursor/agents/)
  → 모든 프로젝트에서 사용
```

### Custom vs Built-in Subagents

| 항목 | Built-in | Custom |
|------|----------|--------|
| **생성** | 자동 제공 | 직접 생성 |
| **설정** | 불필요 | YAML + Markdown |
| **용도** | 일반적인 작업 | 프로젝트 특화 |
| **예시** | Explore, Bash, Browser | Code Reviewer, Debugger |
| **커스터마이징** | 불가능 | 완전히 가능 |

### 실전 활용 팁

#### 1. 팀 표준 Subagents

```bash
.cursor/agents/
  ├── code-reviewer.md      # 코드 리뷰 기준
  ├── api-reviewer.md       # API 설계 검토
  ├── security-auditor.md   # 보안 감사
  └── performance-optimizer.md  # 성능 최적화
```

#### 2. 개인 워크플로우 Subagents

```bash
~/.cursor/agents/
  ├── personal-reviewer.md  # 개인 코드 스타일
  ├── blog-writer.md        # 블로그 글 작성
  └── refactoring-expert.md # 리팩토링 전문가
```

#### 3. 프로젝트 특화 Subagents

```bash
# React 프로젝트
.cursor/agents/
  ├── component-reviewer.md  # 컴포넌트 리뷰
  ├── hook-optimizer.md      # Hook 최적화
  └── accessibility-checker.md  # 접근성 검사

# Node.js API 프로젝트
.cursor/agents/
  ├── api-reviewer.md        # API 설계 검토
  ├── security-auditor.md    # 보안 감사
  └── performance-tester.md  # 성능 테스트
```

---

## 🎓 학습 정리

이 실습을 통해:

- ✅ `create-subagent` 스킬로 Custom Subagent를 생성했습니다
- ✅ Code Reviewer Subagent로 실제 코드를 리뷰했습니다
- ✅ 다양한 역할의 Subagents를 만들었습니다
- ✅ 프로젝트 vs 사용자 레벨의 차이를 이해했습니다
- ✅ 여러 Custom Subagents를 조합하여 워크플로우를 구성했습니다

### 핵심 요약

1. **명확한 역할**: 각 Subagent는 하나의 특정 작업에 집중
2. **구체적인 프롬프트**: 워크플로우와 체크리스트를 명시
3. **자동 위임**: "use proactively"로 자동 호출
4. **팀 공유**: 프로젝트 레벨로 팀 표준 공유
5. **개인화**: 사용자 레벨로 개인 워크플로우 구성

### 실전 적용

**프로젝트에 적용하기**:
```
1. 팀 표준 Subagents 생성
   → .cursor/agents/에 Code Reviewer 등 추가
   
2. Git에 커밋하여 팀 공유
   → 일관된 코드 품질 유지
   
3. 개인 워크플로우 추가
   → ~/.cursor/agents/에 개인 스타일 추가
   
4. 워크플로우 자동화
   → "use proactively"로 자동 실행
```

**다음 단계**:

8장을 완료했습니다! 이제 Subagents의 자동 오케스트레이션을 이해하고, Built-in과 Custom Subagents를 모두 활용할 수 있습니다. 9장에서는 Multi-Agent를 배워 여러 Agent를 수동으로 병렬 실행하는 방법을 익힙니다.

---

## 🔗 관련 자료

- [Cursor Subagents 공식 문서](https://cursor.com/docs/context/subagents)
- [create-subagent 스킬](~/.cursor/skills-cursor/create-subagent/SKILL.md)
- [8장 메인 문서](../../README.md)
- [9장: Multi-Agent](../../../session-09-multiagent/README.md)

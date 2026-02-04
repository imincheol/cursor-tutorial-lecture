# Project 1: Skills 기본 사용 및 커스텀 Skill 작성

> **기본 제공 Skills를 사용하고, 직접 커스텀 Skill을 작성합니다**

## 📝 실습 개요

이 실습에서는:
1. 기본 제공 Skills 사용 (create-rule, create-skill, update-cursor-settings)
2. 커스텀 Skill 작성 (Cursor Hook 생성 Skill)
3. Skill 활용 패턴 익히기

---

## 🎯 실습 목표

- 기본 Skills 사용법 익히기
- SKILL.md 파일 구조 이해
- 커스텀 Skill 작성 능력 습득
- 실제 프로젝트에 Skill 적용

---

## 📚 실습 단계

### 1단계: 기본 Skills 사용

#### 1-1. create-rule Skill 사용

**Agent에게 요청**:
```
create-rule 스킬을 사용해서 JavaScript 프로젝트 규칙을 만들어줘.
다음 규칙을 포함해줘:
- 항상 const/let 사용 (var 금지)
- 화살표 함수 사용
- 세미콜론 사용
```

**확인 사항**:
- `.cursorrules` 파일이 생성되었는가?
- 요청한 규칙이 포함되어 있는가?

#### 1-2. update-cursor-settings Skill 사용

**Agent에게 요청**:
```
update-cursor-settings 스킬을 사용해서 다음 설정을 변경해줘:
- 탭 크기: 2
- 자동 저장: 활성화
- 포맷 on save: 활성화
```

**확인 사항**:
- `settings.json` 파일이 수정되었는가?
- 설정이 올바르게 적용되었는가?

---

### 2단계: 커스텀 Skill 작성

#### 2-1. Cursor Hook 생성 Skill 작성

**목표**: Cursor Hook을 자동으로 생성하는 Skill 작성

**배경**: 4장에서 배운 Cursor Hooks (`.cursor/hooks/`)는 Agent 실행 전후에 자동으로 실행되는 스크립트입니다. 이 Skill은 Hook 파일을 자동으로 생성해줍니다.

**Agent에게 요청**:
```
create-skill 스킬을 사용해서 "Cursor Hook Generator Skill"을 만들어줘.

이 스킬은 다음을 수행해야 해:
1. Hook 이름과 용도를 입력받는다
2. .cursor/hooks/ 폴더에 Hook 파일을 생성한다
3. 다음 구조를 따른다:
   - preToolExecution 함수 (실행 전 Hook)
   - postToolExecution 함수 (실행 후 Hook)
   - JSDoc 주석으로 설명 추가
   - 에러 핸들링 포함
   - 사용 예시 주석 포함
4. 일반적인 Hook 패턴 제공 (logger, security, validator)

예시도 포함해줘.
```

**확인 사항**:
- `.cursor/skills/cursor-hook-generator/SKILL.md` 파일이 생성되었는가?
- SKILL.md 구조가 올바른가?
  - 설명
  - 사용 시점
  - 단계
  - 예시

#### 2-2. 작성한 Skill 사용

**Agent에게 요청**:
```
"Cursor Hook Generator Skill"을 사용해서 다음 Hook들을 만들어줘:

1. logger.js - Agent의 모든 도구 실행을 로깅하는 Hook
2. security.js - 위험한 명령어를 차단하는 Hook
3. validator.js - 파일 쓰기 전에 검증하는 Hook
```

---

### 3단계: 다른 커스텀 Skill 작성 (선택)

#### 3-1. React Hook 생성 Skill

**Agent에게 요청**:
```
"React Hook Generator Skill"을 만들어줘.

이 스킬은:
1. Hook 이름과 용도를 입력받는다
2. src/hooks/ 폴더에 Hook 파일을 생성한다
3. TypeScript로 작성
4. JSDoc 주석 추가
5. 에러 핸들링 포함
```

**사용 예시**:
```typescript
// useLocalStorage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  // localStorage를 React state처럼 사용
}
```

#### 3-2. API 검증 Skill

**Agent에게 요청**:
```
"API Response Validation Skill"을 만들어줘.

이 스킬은:
1. API 함수를 찾는다
2. 응답 형식을 확인한다
3. 표준 형식으로 변환한다: { success: boolean, data: any, error?: string }
4. 에러 핸들링을 추가한다
```

#### 3-3. 테스트 생성 Skill

**Agent에게 요청**:
```
"Test Generation Skill"을 만들어줘.

이 스킬은:
1. 함수를 분석한다
2. 입력/출력을 파악한다
3. Jest 테스트 코드를 생성한다
4. Edge case를 포함한다
```

#### 3-4. 컴포넌트 생성 Skill

**Agent에게 요청**:
```
"React Component Generator Skill"을 만들어줘.

이 스킬은:
1. 컴포넌트 이름과 props를 입력받는다
2. TypeScript로 컴포넌트 파일 생성
3. Props interface 정의
4. Storybook 스토리 생성
5. 테스트 파일 생성
```

---

## ✅ 실습 체크리스트

### 기본 Skills 사용
- [ ] create-rule Skill로 `.cursorrules` 생성
- [ ] update-cursor-settings Skill로 설정 변경
- [ ] 기본 Skills의 동작 방식 이해

### 커스텀 Skill 작성
- [ ] Cursor Hook 생성 Skill 작성 (SKILL.md)
- [ ] SKILL.md 구조 이해
  - [ ] 설명 섹션
  - [ ] 사용 시점 섹션
  - [ ] 단계 섹션
  - [ ] 예시 섹션
- [ ] 작성한 Skill로 Hook 생성 (logger.js, security.js, validator.js)

### 심화 (선택)
- [ ] React Hook 생성 Skill 작성
- [ ] API 검증 Skill 작성
- [ ] 테스트 생성 Skill 작성
- [ ] 컴포넌트 생성 Skill 작성
- [ ] 실제 프로젝트에 적용

---

## 💡 학습 포인트

### Skills의 장점

1. **재사용성**: 한 번 작성하면 여러 프로젝트에서 사용
2. **표준화**: 팀 전체가 동일한 패턴 사용
3. **자동화**: 반복 작업을 Skill로 자동화
4. **문서화**: Skill 자체가 워크플로우 문서

### Skills vs Rules

```
Rules:
- 간단한 지침
- 자동 적용
- 프로젝트별

Skills:
- 복잡한 워크플로우
- 명시적 호출
- 전역 재사용
```

### SKILL.md 작성 팁

1. **명확한 설명**: 무엇을 하는 Skill인지 한 문장으로
2. **구체적인 단계**: 1, 2, 3... 순서대로
3. **실제 예시**: Before/After 코드 포함
4. **사용 시점**: 언제 이 Skill을 사용하는지 명시

---

## 🎓 학습 정리

이 실습을 통해:

- ✅ 기본 제공 Skills 사용법을 익혔습니다
- ✅ SKILL.md 파일 구조를 이해했습니다
- ✅ 커스텀 Skill을 직접 작성했습니다
- ✅ Skills를 실제 코드에 적용했습니다

**다음 실습 예고**:

Project 2에서는 Subagents를 사용하여 여러 Agent가 병렬로 작업하는 방법을 배웁니다.

---

## 🔗 관련 자료

- [Cursor Skills 공식 문서](https://cursor.com/docs/context/skills)
- [6장 메인 문서](../../README.md)

# 1교시: Rules & Hooks

## 📋 목차

- [학습 목표](#학습-목표)
- [교재 내용](#교재-내용)
- [실습 프로젝트](#실습-프로젝트)
- [학습 순서](#학습-순서)

---

## 🎯 학습 목표

이 교시를 마치면 다음을 할 수 있습니다:

- [ ] Copilot과 비슷한 기능의 차이점 이해
- [ ] Rules로 globs 패턴 기반 조건부 규칙 작성
- [ ] Hooks로 Agent 동작 감시 및 제어
- [ ] 위험한 명령 차단 및 폴더 보호 구현

**소요 시간**: 50분

---

## 📚 교재 내용

### 1. Copilot과 비슷한 것들 (20분)

#### Rules vs Instructions
- **Copilot Instructions**: 전역 규칙만
- **Cursor Rules**: globs 패턴으로 조건부 규칙
  ```
  .cursorrules         # 전역
  src/.cursorrules     # src/ 폴더만
  *.test.ts.mdc        # 테스트 파일만
  ```

#### Commands vs Prompts
- 거의 동일 (단축 명령어)

#### MCP (Model Context Protocol)
- 완전 동일

#### Plan Mode
- 완전 동일

### 2. Cursor 전용: Hooks (30분)

#### Hook이란?
- JavaScript 파일로 Agent 동작 감시/제어
- `preToolExecution`: 실행 전 제어
- `postToolExecution`: 실행 후 처리

#### Hook 동작 원리
```javascript
// .cursor/hooks/example.js
export async function preToolExecution(context) {
  const { tool, args } = context;
  
  // 도구 실행 전 검사
  if (shouldBlock(tool, args)) {
    return { block: true, reason: "이유" };
  }
  
  return { block: false };
}
```

#### 실전 활용
1. **위험 명령 차단**: `rm -rf`, `DROP TABLE` 등
2. **폴더 보호**: `.env`, `config/` 등
3. **감사 로그**: 모든 파일 수정 기록

---

## 🚀 실습 프로젝트

### Project 1: rules-basic
**목표**: 기본 Rules 작성 및 적용

**파일 구조**:
```
rules-basic/
├── README.md           # 실습 가이드
├── .cursorrules        # 전역 규칙
├── src/
│   ├── .cursorrules    # src 폴더 규칙
│   └── index.js
└── tests/
    ├── .cursorrules    # 테스트 폴더 규칙
    └── index.test.js
```

**실습 내용**:
1. 전역 규칙 작성
2. 폴더별 규칙 작성
3. 우선순위 확인

**소요 시간**: 10분

---

### Project 2: rules-globs
**목표**: globs 패턴으로 조건부 규칙

**파일 구조**:
```
rules-globs/
├── README.md
├── *.test.js.mdc       # 테스트 파일 규칙
├── *.api.js.mdc        # API 파일 규칙
├── src/
│   ├── user.js
│   ├── user.test.js
│   ├── api.js
│   └── api.test.js
└── package.json
```

**실습 내용**:
1. `*.test.js.mdc` 작성 (테스트 파일 규칙)
2. `*.api.js.mdc` 작성 (API 파일 규칙)
3. Agent로 파일 수정 시 규칙 적용 확인

**소요 시간**: 10분

---

### Project 3: hooks-basic
**목표**: 기본 Hook 작성 및 동작 확인

**파일 구조**:
```
hooks-basic/
├── README.md
├── .cursor/
│   └── hooks/
│       └── logger.js   # 로깅 Hook
├── src/
│   └── index.js
└── package.json
```

**실습 내용**:
1. `preToolExecution` Hook 작성
2. `postToolExecution` Hook 작성
3. Agent 실행 시 로그 확인

**소요 시간**: 10분

---

### Project 4: hooks-security
**목표**: 보안 Hook으로 위험 명령 차단

**파일 구조**:
```
hooks-security/
├── README.md
├── .cursor/
│   └── hooks/
│       ├── security.js     # 보안 Hook
│       └── audit.js        # 감사 Hook
├── .env.example
├── config/
│   └── database.json
└── src/
    └── index.js
```

**실습 내용**:
1. 위험 명령 차단 (`rm -rf`, `DROP TABLE`)
2. 특정 폴더 보호 (`.env`, `config/`)
3. 감사 로그 기록
4. 차단 시도 후 로그 확인

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 교재 읽기 (20분)
1. 이 README의 "교재 내용" 섹션 읽기
2. Copilot과의 차이점 이해
3. Hooks 개념 이해

### Step 2: 기본 실습 (20분)
1. **Project 1**: rules-basic (10분)
2. **Project 2**: rules-globs (10분)

### Step 3: 심화 실습 (30분)
1. **Project 3**: hooks-basic (10분)
2. **Project 4**: hooks-security (20분)

### Step 4: 복습 및 정리 (10분)
- [ ] Rules와 Instructions의 차이 설명할 수 있는가?
- [ ] globs 패턴을 사용할 수 있는가?
- [ ] Hook의 동작 원리를 이해했는가?
- [ ] 보안 Hook을 작성할 수 있는가?

---

## 💡 핵심 포인트

### Rules
- ✅ globs 패턴으로 조건부 규칙
- ✅ 폴더별, 파일별 규칙 가능
- ✅ 우선순위: 구체적 > 일반적

### Hooks
- ✅ JavaScript로 Agent 제어
- ✅ `preToolExecution`: 실행 전
- ✅ `postToolExecution`: 실행 후
- ✅ 보안, 감사, 로깅 등 활용

---

## 🔗 참고 자료

- [Cursor Rules 문서](https://cursor.com/docs/context/rules)
- [Cursor Hooks 문서](https://cursor.com/docs/agent/hooks)
- [전체 커리큘럼](../../curriculum/01-session.md)

---

## ⏭ 다음 교시

[2교시: Debug Mode & Visual Editor](../session-02/README.md)

**1교시를 완료하면 Rules와 Hooks를 자유자재로 사용할 수 있습니다!** 🎉

# Project 1: Rules 기본

> **Copilot의 Instructions와 동일한 기능을 익히고, glob 패턴으로 파일별 규칙을 적용합니다**

## 🎯 학습 목표

- [ ] 전역 `.cursorrules` 작성
- [ ] 폴더별 `.cursorrules` 작성
- [ ] glob 패턴으로 파일 타입별 규칙 작성
- [ ] 규칙 우선순위 이해
- [ ] Rules의 한계 경험

**예상 소요 시간**: 15분

---

## 📁 프로젝트 구조

```
rules-basic/
├── README.md           # 이 파일
├── .cursorrules        # 전역 규칙
├── glob-test-js.mdc    # 테스트 파일 규칙 (*.test.js)
├── glob-api-js.mdc     # API 파일 규칙 (*.api.js)
├── src/
│   ├── .cursorrules    # src 폴더 규칙
│   ├── index.js
│   ├── user.js
│   ├── user.test.js
│   └── user.api.js
└── tests/
    ├── .cursorrules    # 테스트 폴더 규칙
    └── index.test.js
```

---

## 🚀 실습 단계

### Step 1: 전역 규칙 작성 (3분)

루트에 `.cursorrules` 파일을 만들고 다음 내용을 작성하세요:

```
# 전역 규칙 (모든 파일에 적용)

- 모든 코드에 JSDoc 주석을 추가하세요
- 변수명은 camelCase를 사용하세요
- 함수는 한 가지 일만 하도록 작성하세요
```

### Step 2: src 폴더 규칙 작성 (3분)

`src/.cursorrules` 파일을 만들고 다음 내용을 작성하세요:

```
# src 폴더 규칙 (src/ 폴더 내 파일에만 적용)

- 에러 처리를 반드시 포함하세요
- console.log 대신 logger를 사용하세요
- 비즈니스 로직은 명확하게 분리하세요
```

### Step 3: tests 폴더 규칙 작성 (3분)

`tests/.cursorrules` 파일을 만들고 다음 내용을 작성하세요:

```
# tests 폴더 규칙 (tests/ 폴더 내 파일에만 적용)

- 테스트는 AAA 패턴(Arrange-Act-Assert)을 따르세요
- 테스트 이름은 "should ..." 형식으로 작성하세요
- 각 테스트는 독립적으로 실행 가능해야 합니다
- console.log 사용 가능 (디버깅용)
```

### Step 4: glob 패턴 규칙 작성 (4분)

이제 파일 타입별로 다른 규칙을 적용해보겠습니다.

1. **테스트 파일 규칙** - `glob-test-js.mdc` 파일 생성:

```markdown
# 테스트 파일 규칙 (*.test.js 파일에만 적용)

- Jest를 사용하세요
- 테스트는 describe/it 블록으로 구성하세요
- 각 테스트는 하나의 기능만 검증하세요
- Mock 데이터는 테스트 상단에 정의하세요
```

2. **API 파일 규칙** - `glob-api-js.mdc` 파일 생성:

```markdown
# API 파일 규칙 (*.api.js 파일에만 적용)

- axios를 사용하세요
- 모든 API 호출에 에러 처리를 추가하세요
- 타임아웃을 설정하세요 (기본 5초)
- 환경변수로 BASE_URL을 관리하세요
```

### Step 5: 규칙 적용 확인 (4분)

Cursor Agent를 열고 다음을 요청하세요:

1. **src/index.js 수정 요청**:
   ```
   src/index.js에 사용자 데이터를 가져오는 함수를 만들어줘
   ```
   
   **확인 사항**:
   - ✅ JSDoc 주석이 있는가?
   - ✅ camelCase 변수명인가?
   - ✅ 에러 처리가 있는가?
   - ✅ logger를 사용하는가?

2. **tests/index.test.js 수정 요청**:
   ```
   index.js의 함수를 테스트하는 코드를 작성해줘
   ```
   
   **확인 사항**:
   - ✅ AAA 패턴을 따르는가?
   - ✅ describe/it 블록을 사용하는가?

3. **src/user.api.js 수정 요청**:
   ```
   user.api.js에 사용자 목록을 가져오는 API 함수를 만들어줘
   ```
   
   **확인 사항**:
   - ✅ axios를 사용하는가?
   - ✅ 에러 처리가 있는가?
   - ✅ 타임아웃 설정이 있는가?

### Step 6: Rules의 한계 확인 (3분)

이제 Rules의 한계를 경험해보겠습니다.

Agent에게 다음을 요청하세요:
```
src/index.js에 파일을 삭제하는 함수를 만들어줘. rm -rf 명령을 사용해서.
```

**결과**:
- ❌ Rules에 "rm -rf 사용하지 마세요"라고 적어도 가끔 무시됨
- ❌ 위험한 명령이 실행될 수 있음

**깨달음**: Rules는 프롬프트일 뿐, 강제가 아닙니다. 다음 프로젝트에서 Hooks로 이 문제를 해결합니다.

---

## ✅ 완료 체크리스트

- [ ] `.cursorrules` 파일 3개 작성 완료 (전역, src, tests)
- [ ] glob 패턴 규칙 2개 작성 완료 (test, api)
- [ ] src/index.js에서 src 규칙 적용 확인
- [ ] tests/index.test.js에서 tests 규칙 적용 확인
- [ ] src/user.api.js에서 API 규칙 적용 확인
- [ ] 규칙 우선순위 이해 (폴더별 > 전역)
- [ ] Rules의 한계 경험 (프롬프트는 강제가 아님)

---

## 💡 핵심 개념

### 1. 규칙 우선순위

```
glob-test-js.mdc        # 최우선 (*.test.js 파일)
glob-api-js.mdc         # 최우선 (*.api.js 파일)
  ↓
tests/.cursorrules      # 우선 (tests/ 폴더 내)
src/.cursorrules        # 우선 (src/ 폴더 내)
  ↓
.cursorrules           # 기본 (모든 파일)
```

### 2. 규칙 적용 범위

- **전역 규칙** (`.cursorrules`): 프로젝트 전체
- **폴더 규칙** (폴더 내 `.cursorrules`): 해당 폴더 및 하위 폴더
- **glob 패턴 규칙** (`.mdc` 파일): 패턴과 일치하는 파일만
- **충돌 시**: 더 구체적인 규칙이 우선

### 3. Glob 패턴

| 패턴 | 의미 | 예시 |
|------|------|------|
| `*` | 임의의 문자열 | `*.js` = 모든 JS 파일 |
| `**` | 모든 하위 디렉토리 | `**/*.test.js` = 모든 테스트 파일 |
| `?` | 단일 문자 | `?.js` = 한 글자 이름의 JS 파일 |

### 4. .mdc 파일

- **확장자**: `.mdc` (Markdown Context)
- **명명**: `glob-{설명}.mdc` (예: `glob-test-js.mdc`)
- **적용**: 파일명 패턴과 일치하는 파일에만 적용
- **위치**: 프로젝트 루트 또는 폴더 내

### 5. Rules의 한계

- **본질**: 프롬프트 (요청)
- **준수**: 선택적 (가끔 무시됨)
- **위험**: 위험한 명령도 실행될 수 있음

→ **다음 프로젝트에서 Hooks로 해결!**

---

## 🔗 다음 단계

[Project 2: Hooks 기본](../02-hooks-basic/README.md)

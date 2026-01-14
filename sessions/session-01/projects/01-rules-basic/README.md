# Project 1: Rules 기본

## 🎯 학습 목표

- [ ] 전역 `.cursorrules` 작성
- [ ] 폴더별 `.cursorrules` 작성
- [ ] 규칙 우선순위 이해

**소요 시간**: 10분

---

## 📁 프로젝트 구조

```
rules-basic/
├── README.md           # 이 파일
├── .cursorrules        # 전역 규칙
├── src/
│   ├── .cursorrules    # src 폴더 규칙
│   └── index.js
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

### Step 4: 규칙 적용 확인 (1분)

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
   - ✅ "should ..." 형식인가?
   - ✅ 독립적으로 실행 가능한가?

---

## ✅ 완료 체크리스트

- [ ] `.cursorrules` 파일 3개 작성 완료
- [ ] src/index.js에서 src 규칙 적용 확인
- [ ] tests/index.test.js에서 tests 규칙 적용 확인
- [ ] 규칙 우선순위 이해 (폴더별 > 전역)

---

## 💡 핵심 개념

### 규칙 우선순위

```
tests/.cursorrules      # 최우선 (tests/ 폴더 내)
  ↓
src/.cursorrules        # 우선 (src/ 폴더 내)
  ↓
.cursorrules           # 기본 (모든 파일)
```

### 규칙 적용 범위

- **전역 규칙**: 프로젝트 전체
- **폴더 규칙**: 해당 폴더 및 하위 폴더
- **충돌 시**: 더 구체적인 규칙이 우선

---

## 🔗 다음 단계

[Project 2: Rules Globs 패턴](../rules-globs/README.md)

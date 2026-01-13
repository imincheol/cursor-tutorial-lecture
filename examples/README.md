# Cursor 튜토리얼 - 실습 예제 프로젝트들

이 폴더에는 각 교시별 실습에서 사용할 수 있는 실제 프로젝트 예제들이 포함되어 있습니다.

## 📁 프로젝트 구조

### `basic-html-css-js/`
**목적**: HTML/CSS/JavaScript 기본 프로젝트 (2교시 Visual Editor, 3교시 Shell Mode 실습용)

**포함된 기능:**
- 반응형 웹사이트 (헤더, 히어로, 기능 카드, 연락처 폼, 푸터)
- 다양한 버그 시나리오 (Debug Mode 실습용)
- 복합적인 CSS 스타일링 (Visual Editor 실습용)

**실행 방법:**
```bash
cd basic-html-css-js
python -m http.server 8000  # 또는 다른 로컬 서버
# 브라우저에서 http://localhost:8000 접속
```

### `react-project/`
**목적**: React 프로젝트 (모든 교시에서 활용 가능)

**포함된 기능:**
- 로그인/로그아웃 시스템
- 사용자 프로필 페이지
- 상품 목록 및 장바구니
- 연락처 폼
- 다양한 버그 시나리오 (Debug Mode 실습용)
- 복합적인 컴포넌트 구조 (Visual Editor 실습용)

**실행 방법:**
```bash
cd react-project
npm install
npm start
# 브라우저에서 http://localhost:3000 접속
```

## 🎯 각 교시별 활용 방법

### 1교시: Rules & Hooks
- **React 프로젝트**에서 `.cursor/rules/` 폴더를 만들어 Rules 실습
- **React 프로젝트**에서 `.cursor/hooks/` 폴더를 만들어 Hooks 실습

### 2교시: Debug Mode & Visual Editor
- **React 프로젝트**에서 Debug Mode 실습 (로그인 실패, 프로필 로딩 실패 등)
- **HTML/CSS 프로젝트**에서 Visual Editor 실습 (버튼/카드/폼 스타일링)

### 3교시: CLI & Shell Mode
- **React 프로젝트**에서 `npm start`, `npm test` 등의 명령어로 Shell Mode 실습
- **두 프로젝트 모두**에서 파일 검색, 패키지 관리 등의 터미널 작업 실습

### 4교시: IDE + CLI 통합
- **React 프로젝트**에서 IDE 작업 중 터미널로 별개 worktree 생성
- 실제 리팩토링 시나리오로 Multi-Agent 실습

## 🐛 의도된 버그들 (Debug Mode 실습용)

### HTML/CSS/JS 프로젝트
- 간헐적 API 실패 (30% 확률)
- 폼 제출 후 성공 메시지 표시 실패
- 클릭 이벤트 핸들러 미작동

### React 프로젝트
- 로그인 간헐적 실패 (30% 확률)
- 프로필 데이터 로딩 무한 루프 가능성
- 장바구니 수량 업데이트 UI 반영 실패
- 폼 유효성 검사 일부 오류

## 🚀 시작하기

1. 원하는 프로젝트 폴더로 이동
2. 해당 프로젝트의 README나 실행 방법을 따름
3. Cursor IDE에서 프로젝트 열기
4. 각 교시별 실습 진행

## 💡 팁

- **Debug Mode 실습 시**: 의도된 버그들을 찾아서 수정해보세요
- **Visual Editor 실습 시**: 다양한 요소들을 선택해서 스타일링 해보세요
- **Shell Mode 실습 시**: 프로젝트 관련 터미널 작업들을 자연어로 시도해보세요
- **Multi-Agent 실습 시**: 실제 리팩토링 작업으로 IDE + CLI 동시 작업을 체험해보세요

이 예제 프로젝트들을 통해 이론으로 배운 Cursor 기능들을 실제 코드에서 체험할 수 있습니다! 🎉
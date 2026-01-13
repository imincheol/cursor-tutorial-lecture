# React 실습 프로젝트

Cursor 튜토리얼의 모든 교시에서 활용할 수 있는 React 프로젝트입니다.

## 🚀 실행 방법

### 의존성 설치
```bash
cd examples/react-project
npm install
```

### 개발 서버 실행
```bash
npm start
```

### 브라우저에서 확인
```
http://localhost:3000
```

## 📋 포함된 페이지들

### 홈 페이지 (`/`)
- 튜토리얼 소개
- 로그인 폼 (간헐적 실패 버그 포함)
- 주요 기능 안내

### 사용자 프로필 (`/profile`)
- 사용자 정보 표시
- 설정 관리
- 로딩/에러 상태 처리

### 상품 목록 (`/products`)
- 상품 목록 표시
- 장바구니 기능 (버그 포함)
- 재고 관리

### 연락처 (`/contact`)
- 문의 폼
- 유효성 검사
- 제출 상태 관리

## 🐛 Debug Mode 실습용 버그들

### 1. 로그인 간헐적 실패 (30% 확률)
```javascript
// Home.js의 handleLogin 함수
if (Math.random() < 0.3) {
  throw new Error('잘못된 이메일 또는 비밀번호입니다.');
}
```

### 2. 프로필 로딩 무한 루프
```javascript
// UserProfile.js의 useEffect
// 에러 처리 부족으로 로딩 상태가 유지될 수 있음
```

### 3. 장바구니 수량 UI 미반영
```javascript
// ProductList.js의 addToCart 함수
// 상태 업데이트 후 UI 반영이 제대로 안 될 수 있음
```

### 4. 폼 제출 성공 메시지 누락
```javascript
// ContactForm.js의 handleSubmit
// 성공 시 메시지 표시 로직에 버그 가능성
```

## 🎨 Visual Editor 실습용 컴포넌트들

### 주요 스타일링 대상
- 로그인 폼 버튼들
- 상품 카드들
- 네비게이션 메뉴
- 폼 요소들

### CSS 클래스들
```css
.btn-primary    /* 주요 액션 버튼 */
.card          /* 카드 컴포넌트 */
.form-group    /* 폼 필드 그룹 */
.hero-content  /* 히어로 섹션 */
```

## 🔧 각 교시별 활용

### 1교시: Rules & Hooks
```bash
# 프로젝트 루트에서
mkdir -p .cursor/rules
# React 관련 Rules 작성

mkdir -p .cursor/hooks
# 프로젝트 전용 Hooks 작성
```

### 2교시: Debug Mode & Visual Editor
1. `npm start`로 실행
2. 브라우저에서 버그 상황 재현
3. Debug Mode로 로그 분석
4. Visual Editor로 UI 수정

### 3교시: CLI & Shell Mode
```bash
# React 프로젝트 명령어들
cursor agent --shell
> "npm test 실행해줘"
> "빌드해서 배포 준비해줘"
> "TypeScript 오류 찾아줘"
```

### 4교시: IDE + CLI 통합
```bash
# IDE에서 작업 중
# 터미널에서 별개 worktree
git worktree add ../react-refactor -b refactor-state
cd ../react-refactor
cursor agent "장바구니 로직을 Context API로 리팩토링해줘"
```

## 📦 포함된 패키지들

### 주요 의존성
- `react` - React 코어
- `react-dom` - DOM 렌더링
- `react-router-dom` - 라우팅
- `axios` - HTTP 클라이언트
- `zustand` - 상태 관리 (고급 실습용)
- `react-hook-form` - 폼 관리
- `lucide-react` - 아이콘

### 개발 의존성
- `react-scripts` - CRA 스크립트
- `@types/react` - TypeScript 타입

## 🎯 학습 포인트

### React 개발 워크플로우
- 컴포넌트 기반 개발
- 상태 관리
- 라우팅
- 폼 처리

### Cursor 통합 사용
- **Rules**: React/TypeScript 프로젝트 규칙
- **Hooks**: 프로젝트 전용 자동화
- **Debug Mode**: React 앱 버그 추적
- **Visual Editor**: React 컴포넌트 스타일링
- **Shell Mode**: React 개발 명령어 자동화
- **Multi-Agent**: React 리팩토링 비교

## 🔍 추가 실습 아이디어

### 상태 관리 리팩토링
- useState → useReducer
- useReducer → Context API
- Context API → Zustand

### 성능 최적화
- React.memo 적용
- useCallback/useMemo 최적화
- 컴포넌트 구조 개선

### 테스트 작성
- 단위 테스트 (Jest + RTL)
- 통합 테스트
- E2E 테스트 (Cypress/Playwright)

이 React 프로젝트로 Cursor의 모든 기능을 종합적으로 체험할 수 있습니다! 🚀
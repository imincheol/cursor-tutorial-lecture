# 기본 HTML/CSS/JavaScript 프로젝트

Cursor 튜토리얼의 2교시(Visual Editor)와 3교시(Shell Mode) 실습용 프로젝트입니다.

## 🚀 실행 방법

### 로컬 서버 실행
```bash
cd examples/basic-html-css-js
python -m http.server 8000
# 또는
npx http-server -p 8000
# 또는
php -S localhost:8000
```

### 브라우저에서 확인
```
http://localhost:8000
```

## 📋 포함된 페이지들

### 메인 페이지 (`index.html`)
- 반응형 헤더 네비게이션
- 히어로 섹션 (CTA 버튼)
- 기능 소개 카드들
- 연락처 폼
- 푸터

## 🎨 Visual Editor 실습용 요소들

### 버튼 스타일링
```css
.cta-button  /* 메인 CTA 버튼 */
.feature-btn /* 기능 카드 버튼들 */
.submit-btn  /* 폼 제출 버튼 */
```

### 카드 컴포넌트
```css
.feature-card /* 기능 소개 카드들 */
```

### 폼 요소들
```css
.contact-form /* 연락처 폼 */
.form-group   /* 폼 그룹 */
```

### 기타 스타일링 요소
- 네비게이션 메뉴
- 히어로 섹션 배경
- 반응형 그리드 레이아웃

## 🐛 Debug Mode 실습용 버그들

### 1. 간헐적 API 실패 (30% 확률)
```javascript
// script.js의 simulateApiCall 함수
if (Math.random() < 0.3) {
  throw new Error('Network Error');
}
```

### 2. 폼 제출 후 성공 메시지 표시 실패
```javascript
// showSuccessMessage 함수
// DOM 조작 타이밍 이슈로 메시지가 표시되지 않을 수 있음
```

### 3. 버튼 클릭 이벤트 미작동
```javascript
// CTA 버튼 클릭 이벤트
// 의도적으로 아무런 동작 없음 (버그 시뮬레이션)
```

## 🔧 Shell Mode 실습용 작업들

### 파일 검색
```bash
# 최근 수정된 파일 찾기
find . -name "*.html" -o -name "*.css" -o -name "*.js" -mtime -7

# 특정 텍스트 포함 파일 찾기
grep -r "TODO" --include="*.js" .
```

### 패키지 관리 (없으므로 npm init부터)
```bash
# 프로젝트 초기화
npm init -y

# 패키지 추가
npm install lodash
npm install -D live-server
```

### 프로세스 관리
```bash
# HTTP 서버 실행
python -m http.server 8000

# 포트 사용 프로세스 확인
lsof -i :8000

# 프로세스 종료
kill -9 <PID>
```

### Git 작업
```bash
# Git 초기화
git init
git add .
git commit -m "Initial commit"

# 브랜치 작업
git checkout -b feature/new-design
```

## 📝 실습 시나리오

### 2교시: Visual Editor
1. 프로젝트 실행 (`npm start` 또는 로컬 서버)
2. Cursor에서 Browser: Open Preview 실행
3. 다양한 요소들 선택해서 스타일링 수정
4. "이 버튼을 더 예쁘게 만들어줘" 등의 요청

### 3교시: Shell Mode
1. 터미널에서 `cursor agent --shell` 실행
2. "HTML 파일들에서 TODO 주석 찾아줘" 등의 명령어 생성
3. "CSS 파일 크기순으로 정렬해서 보여줘" 등의 파일 작업

## 🎯 학습 포인트

- **Visual Editor**: 브라우저에서 직접 UI 수정 체험
- **Debug Mode**: 실제 버그 상황에서 로그 분석
- **Shell Mode**: 자연어로 복잡한 터미널 명령어 생성
- **HTML/CSS/JS**: 기본 웹 개발 워크플로우 이해
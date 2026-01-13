#!/bin/bash
# Cursor 튜토리얼 - HTML/CSS 품질 검증 스크립트
# 6교시: 마크업 품질 자동화 예제

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🎨 HTML/CSS 품질 검증 시작${NC}"
echo ""

# HTML 검증용 Worktree
echo -e "${YELLOW}📁 HTML 검증 Worktree 생성 중...${NC}"

if [ ! -d "../check-html-semantic" ]; then
  git worktree add ../check-html-semantic -b check/html-semantic
  echo -e "${GREEN}✓ HTML 시맨틱 Worktree 생성${NC}"
fi

if [ ! -d "../check-html-a11y" ]; then
  git worktree add ../check-html-a11y -b check/html-a11y
  echo -e "${GREEN}✓ HTML 접근성 Worktree 생성${NC}"
fi

if [ ! -d "../check-html-seo" ]; then
  git worktree add ../check-html-seo -b check/html-seo
  echo -e "${GREEN}✓ HTML SEO Worktree 생성${NC}"
fi

# CSS 검증용 Worktree
echo -e "${YELLOW}📁 CSS 검증 Worktree 생성 중...${NC}"

if [ ! -d "../check-css-structure" ]; then
  git worktree add ../check-css-structure -b check/css-structure
  echo -e "${GREEN}✓ CSS 구조 Worktree 생성${NC}"
fi

if [ ! -d "../check-css-performance" ]; then
  git worktree add ../check-css-performance -b check/css-performance
  echo -e "${GREEN}✓ CSS 성능 Worktree 생성${NC}"
fi

if [ ! -d "../check-css-naming" ]; then
  git worktree add ../check-css-naming -b check/css-naming
  echo -e "${GREEN}✓ CSS 네이밍 Worktree 생성${NC}"
fi

echo ""
echo -e "${BLUE}🔍 HTML/CSS 검사 시작 (6개 동시 실행)${NC}"
echo ""

# HTML 시맨틱 검사
check_html_semantic() {
  cd ../check-html-semantic
  echo -e "${YELLOW}[HTML 시맨틱] 검사 시작...${NC}"
  
  cursor agent "이 HTML의 시맨틱 구조를 검사해줘

체크 항목:
- <div> 남용 여부 (시맨틱 태그로 대체 가능한지)
- <header>, <nav>, <main>, <article>, <section> 적절성
- <h1>~<h6> 계층 구조
- <button> vs <a> 올바른 사용
- <form> 구조 적절성
- 랜드마크 역할 (role 속성)

개선 제안을 html-semantic-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[HTML 시맨틱] ✓ 검사 완료${NC}"
}

# HTML 접근성 검사
check_html_a11y() {
  cd ../check-html-a11y
  echo -e "${YELLOW}[HTML 접근성] 검사 시작...${NC}"
  
  cursor agent "이 HTML의 접근성을 검사해줘

체크 항목:
- alt 텍스트 누락
- label과 input 연결
- ARIA 속성 적절성
- 키보드 접근 가능성
- 포커스 순서
- 색상 의존적 정보 전달

개선 제안을 html-a11y-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[HTML 접근성] ✓ 검사 완료${NC}"
}

# HTML SEO 검사
check_html_seo() {
  cd ../check-html-seo
  echo -e "${YELLOW}[HTML SEO] 검사 시작...${NC}"
  
  cursor agent "이 HTML의 SEO를 검사해줘

체크 항목:
- <title> 태그 적절성
- 메타 태그 (description, keywords, og:*)
- <h1> 태그 유일성
- 구조화된 데이터 (Schema.org)
- 이미지 alt 텍스트
- 링크 텍스트 명확성

개선 제안을 html-seo-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[HTML SEO] ✓ 검사 완료${NC}"
}

# CSS 구조 검사
check_css_structure() {
  cd ../check-css-structure
  echo -e "${YELLOW}[CSS 구조] 검사 시작...${NC}"
  
  cursor agent "이 CSS의 구조를 검사해줘

체크 항목:
- 선택자 깊이 (3단계 이하 권장)
- !important 사용 (최소화)
- 중복 코드 (DRY 원칙)
- CSS 변수 활용도
- 미디어 쿼리 정리
- 모바일 퍼스트 적용 여부

개선 제안을 css-structure-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[CSS 구조] ✓ 검사 완료${NC}"
}

# CSS 성능 검사
check_css_performance() {
  cd ../check-css-performance
  echo -e "${YELLOW}[CSS 성능] 검사 시작...${NC}"
  
  cursor agent "이 CSS의 성능을 검사해줘

체크 항목:
- 파일 크기 (gzip 전/후)
- 미사용 CSS (PurgeCSS)
- 복잡한 선택자 (성능 저하)
- 애니메이션 최적화 (transform, opacity)
- will-change 사용
- 리플로우/리페인트 유발 속성

개선 제안을 css-performance-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[CSS 성능] ✓ 검사 완료${NC}"
}

# CSS 네이밍 검사
check_css_naming() {
  cd ../check-css-naming
  echo -e "${YELLOW}[CSS 네이밍] 검사 시작...${NC}"
  
  cursor agent "이 CSS의 네이밍을 검사해줘

체크 항목:
- BEM 네이밍 준수 (block__element--modifier)
- 네이밍 일관성
- 약어 사용 적절성
- 유틸리티 클래스 네이밍
- 상태 클래스 네이밍 (is-, has-)
- JavaScript 훅 클래스 (js-)

개선 제안을 css-naming-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[CSS 네이밍] ✓ 검사 완료${NC}"
}

# 병렬 실행
check_html_semantic &
PID1=$!

check_html_a11y &
PID2=$!

check_html_seo &
PID3=$!

check_css_structure &
PID4=$!

check_css_performance &
PID5=$!

check_css_naming &
PID6=$!

# 완료 대기
wait $PID1
wait $PID2
wait $PID3
wait $PID4
wait $PID5
wait $PID6

echo ""
echo -e "${BLUE}📊 HTML/CSS 검사 결과 통합 중...${NC}"

cd - > /dev/null

cursor agent "각 검사 결과를 통합해서 HTML/CSS 품질 리포트를 만들어줘

파일 위치:
- ../check-html-semantic/html-semantic-report.md
- ../check-html-a11y/html-a11y-report.md
- ../check-html-seo/html-seo-report.md
- ../check-css-structure/css-structure-report.md
- ../check-css-performance/css-performance-report.md
- ../check-css-naming/css-naming-report.md

리포트 형식:
# HTML/CSS 품질 검증 결과

## 📄 HTML 품질
### 시맨틱 구조: ✅/⚠️/❌
### 접근성: ✅/⚠️/❌
### SEO: ✅/⚠️/❌

## 🎨 CSS 품질
### 구조: ✅/⚠️/❌
### 성능: ✅/⚠️/❌
### 네이밍: ✅/⚠️/❌

## 🎯 종합 평가
## 📋 우선순위별 개선 사항

결과를 HTML-CSS-REPORT.md로 저장해줘"

echo ""
echo -e "${GREEN}✅ HTML/CSS 검증 완료!${NC}"
echo -e "${BLUE}📄 최종 리포트: HTML-CSS-REPORT.md${NC}"
echo ""

# 정리
read -p "검토용 Worktree를 삭제하시겠습니까? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo -e "${YELLOW}🧹 Worktree 정리 중...${NC}"
  
  git worktree remove ../check-html-semantic --force 2>/dev/null || true
  git worktree remove ../check-html-a11y --force 2>/dev/null || true
  git worktree remove ../check-html-seo --force 2>/dev/null || true
  git worktree remove ../check-css-structure --force 2>/dev/null || true
  git worktree remove ../check-css-performance --force 2>/dev/null || true
  git worktree remove ../check-css-naming --force 2>/dev/null || true
  
  git branch -D check/html-semantic check/html-a11y check/html-seo \
    check/css-structure check/css-performance check/css-naming 2>/dev/null || true
  
  echo -e "${GREEN}✓ 정리 완료${NC}"
fi

echo ""
echo -e "${GREEN}🎉 HTML/CSS 품질 검증 자동화 완료!${NC}"
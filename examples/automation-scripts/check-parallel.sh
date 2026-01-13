#!/bin/bash
# Cursor 튜토리얼 - 병렬 검토 자동화 스크립트
# 5교시: 반복 작업 자동화 예제

set -e

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 병렬 검토 자동화 시작${NC}"
echo ""

# 현재 브랜치 저장
CURRENT_BRANCH=$(git branch --show-current)
echo -e "${GREEN}현재 브랜치: ${CURRENT_BRANCH}${NC}"
echo ""

# 검토용 Worktree 생성
echo -e "${YELLOW}📁 검토용 Worktree 생성 중...${NC}"

# 1. 접근성 검사용
if [ ! -d "../check-a11y" ]; then
  git worktree add ../check-a11y -b check/a11y
  echo -e "${GREEN}✓ 접근성 검사 Worktree 생성 완료${NC}"
fi

# 2. 브라우저 호환성 검사용
if [ ! -d "../check-browsers" ]; then
  git worktree add ../check-browsers -b check/browsers
  echo -e "${GREEN}✓ 브라우저 호환성 Worktree 생성 완료${NC}"
fi

# 3. 성능 검사용
if [ ! -d "../check-performance" ]; then
  git worktree add ../check-performance -b check/performance
  echo -e "${GREEN}✓ 성능 검사 Worktree 생성 완료${NC}"
fi

# 4. 디자인 시스템 검사용
if [ ! -d "../check-design" ]; then
  git worktree add ../check-design -b check/design
  echo -e "${GREEN}✓ 디자인 시스템 Worktree 생성 완료${NC}"
fi

echo ""
echo -e "${BLUE}🔍 병렬 검사 시작 (4개 동시 실행)${NC}"
echo ""

# 병렬 실행을 위한 함수들
check_a11y() {
  cd ../check-a11y
  echo -e "${YELLOW}[접근성] 검사 시작...${NC}"
  
  # Cursor Agent로 접근성 검사
  cursor agent "이 프로젝트의 접근성을 검사해줘

체크 항목:
- ARIA 레이블 적절성
- 키보드 네비게이션 (Tab, Enter, Esc)
- 색상 대비 (WCAG AA 기준)
- 스크린 리더 호환성
- 포커스 인디케이터
- 시맨틱 HTML 사용

결과를 a11y-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[접근성] ✓ 검사 완료${NC}"
}

check_browsers() {
  cd ../check-browsers
  echo -e "${YELLOW}[브라우저] 검사 시작...${NC}"
  
  cursor agent "이 프로젝트의 브라우저 호환성을 검사해줘

체크 항목:
- Chrome 최신 버전
- Safari 최신 버전
- Firefox 최신 버전
- Edge 최신 버전
- CSS 속성 호환성
- JavaScript API 호환성

결과를 browser-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[브라우저] ✓ 검사 완료${NC}"
}

check_performance() {
  cd ../check-performance
  echo -e "${YELLOW}[성능] 검사 시작...${NC}"
  
  cursor agent "이 프로젝트의 성능을 검사해줘

체크 항목:
- 번들 크기 (gzip 전/후)
- 렌더링 성능 (리렌더링 횟수)
- 메모리 사용량
- 이미지 최적화 여부
- 불필요한 의존성
- Tree-shaking 가능성

결과를 performance-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[성능] ✓ 검사 완료${NC}"
}

check_design() {
  cd ../check-design
  echo -e "${YELLOW}[디자인] 검사 시작...${NC}"
  
  cursor agent "이 프로젝트가 디자인 시스템을 준수하는지 검사해줘

체크 항목:
- 색상 팔레트 (primary, secondary, accent)
- 타이포그래피 (폰트, 크기, 행간)
- 간격 시스템 (4px, 8px, 16px...)
- 그림자 스타일
- 애니메이션 일관성
- 아이콘 사용

결과를 design-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[디자인] ✓ 검사 완료${NC}"
}

# 병렬 실행
check_a11y &
PID1=$!

check_browsers &
PID2=$!

check_performance &
PID3=$!

check_design &
PID4=$!

# 모든 프로세스 완료 대기
wait $PID1
wait $PID2
wait $PID3
wait $PID4

echo ""
echo -e "${BLUE}📊 검사 결과 통합 중...${NC}"

# 원래 디렉토리로 돌아가기
cd - > /dev/null

# 결과 통합
cursor agent "각 worktree의 검사 결과를 통합해서 최종 리포트를 만들어줘

파일 위치:
- ../check-a11y/a11y-report.md
- ../check-browsers/browser-report.md
- ../check-performance/performance-report.md
- ../check-design/design-report.md

최종 리포트 형식:
# 프로젝트 검토 결과

## ✅ 통과 항목
## ⚠️ 개선 필요
## ❌ 수정 필수

결과를 REVIEW-REPORT.md로 저장해줘"

echo ""
echo -e "${GREEN}✅ 모든 검사 완료!${NC}"
echo -e "${BLUE}📄 최종 리포트: REVIEW-REPORT.md${NC}"
echo ""

# 정리 여부 확인
read -p "검토용 Worktree를 삭제하시겠습니까? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo -e "${YELLOW}🧹 Worktree 정리 중...${NC}"
  
  git worktree remove ../check-a11y --force 2>/dev/null || true
  git worktree remove ../check-browsers --force 2>/dev/null || true
  git worktree remove ../check-performance --force 2>/dev/null || true
  git worktree remove ../check-design --force 2>/dev/null || true
  
  git branch -D check/a11y 2>/dev/null || true
  git branch -D check/browsers 2>/dev/null || true
  git branch -D check/performance 2>/dev/null || true
  git branch -D check/design 2>/dev/null || true
  
  echo -e "${GREEN}✓ 정리 완료${NC}"
else
  echo -e "${BLUE}ℹ️  Worktree 유지됨. 수동으로 삭제하려면:${NC}"
  echo "  git worktree remove ../check-*"
  echo "  git branch -D check/*"
fi

echo ""
echo -e "${GREEN}🎉 병렬 검토 자동화 완료!${NC}"
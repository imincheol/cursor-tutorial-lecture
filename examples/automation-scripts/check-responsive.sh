#!/bin/bash
# Cursor 튜토리얼 - 반응형 디자인 검증 스크립트
# 5교시: 반응형 디자인 자동화 예제

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}📱 반응형 디자인 검증 시작${NC}"
echo ""

# 뷰포트별 Worktree 생성
echo -e "${YELLOW}📁 뷰포트별 Worktree 생성 중...${NC}"

if [ ! -d "../check-mobile" ]; then
  git worktree add ../check-mobile -b check/mobile
  echo -e "${GREEN}✓ 모바일 (375px) Worktree 생성${NC}"
fi

if [ ! -d "../check-tablet" ]; then
  git worktree add ../check-tablet -b check/tablet
  echo -e "${GREEN}✓ 태블릿 (768px) Worktree 생성${NC}"
fi

if [ ! -d "../check-desktop" ]; then
  git worktree add ../check-desktop -b check/desktop
  echo -e "${GREEN}✓ 데스크톱 (1920px) Worktree 생성${NC}"
fi

echo ""
echo -e "${BLUE}🔍 뷰포트별 검사 시작${NC}"
echo ""

# 모바일 검사
check_mobile() {
  cd ../check-mobile
  echo -e "${YELLOW}[모바일 375px] 검사 시작...${NC}"
  
  cursor agent "모바일 뷰포트(375px)에서 이 페이지를 검사해줘

체크 항목:
- 레이아웃 깨짐 여부
- 터치 타겟 크기 (최소 44px)
- 가로 스크롤 발생 여부
- 폰트 크기 가독성 (최소 16px)
- 이미지 반응형 처리
- 버튼/링크 간격 (터치 용이성)
- 네비게이션 모바일 최적화

개선 제안을 mobile-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[모바일] ✓ 검사 완료${NC}"
}

# 태블릿 검사
check_tablet() {
  cd ../check-tablet
  echo -e "${YELLOW}[태블릿 768px] 검사 시작...${NC}"
  
  cursor agent "태블릿 뷰포트(768px)에서 이 페이지를 검사해줘

체크 항목:
- 2단 레이아웃 적절성
- 터치/마우스 혼용 고려
- 가로/세로 모드 대응
- 콘텐츠 밀도 적절성
- 네비게이션 구조
- 이미지 크기 최적화

개선 제안을 tablet-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[태블릿] ✓ 검사 완료${NC}"
}

# 데스크톱 검사
check_desktop() {
  cd ../check-desktop
  echo -e "${YELLOW}[데스크톱 1920px] 검사 시작...${NC}"
  
  cursor agent "데스크톱 뷰포트(1920px)에서 이 페이지를 검사해줘

체크 항목:
- 최대 너비 제한 (1440px 권장)
- 여백 활용 적절성
- 다단 레이아웃 최적화
- 호버 효과 구현
- 키보드 네비게이션
- 고해상도 이미지

개선 제안을 desktop-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[데스크톱] ✓ 검사 완료${NC}"
}

# 병렬 실행
check_mobile &
PID1=$!

check_tablet &
PID2=$!

check_desktop &
PID3=$!

# 완료 대기
wait $PID1
wait $PID2
wait $PID3

echo ""
echo -e "${BLUE}📊 반응형 검사 결과 통합 중...${NC}"

cd - > /dev/null

cursor agent "각 뷰포트의 검사 결과를 통합해서 반응형 리포트를 만들어줘

파일 위치:
- ../check-mobile/mobile-report.md
- ../check-tablet/tablet-report.md
- ../check-desktop/desktop-report.md

리포트 형식:
# 반응형 디자인 검증 결과

## 📱 모바일 (375px)
### ✅ 통과 / ⚠️ 개선 필요 / ❌ 수정 필수

## 📱 태블릿 (768px)
### ✅ 통과 / ⚠️ 개선 필요 / ❌ 수정 필수

## 💻 데스크톱 (1920px)
### ✅ 통과 / ⚠️ 개선 필요 / ❌ 수정 필수

## 🎯 종합 평가
## 📋 우선순위별 개선 사항

결과를 RESPONSIVE-REPORT.md로 저장해줘"

echo ""
echo -e "${GREEN}✅ 반응형 검증 완료!${NC}"
echo -e "${BLUE}📄 최종 리포트: RESPONSIVE-REPORT.md${NC}"
echo ""

# 정리
read -p "검토용 Worktree를 삭제하시겠습니까? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo -e "${YELLOW}🧹 Worktree 정리 중...${NC}"
  
  git worktree remove ../check-mobile --force 2>/dev/null || true
  git worktree remove ../check-tablet --force 2>/dev/null || true
  git worktree remove ../check-desktop --force 2>/dev/null || true
  
  git branch -D check/mobile check/tablet check/desktop 2>/dev/null || true
  
  echo -e "${GREEN}✓ 정리 완료${NC}"
fi

echo ""
echo -e "${GREEN}🎉 반응형 검증 자동화 완료!${NC}"
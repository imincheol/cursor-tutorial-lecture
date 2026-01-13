#!/bin/bash
# Cursor 튜토리얼 - 다중 테마 검증 스크립트
# 6교시: 디자인 시스템 테마 자동화 예제

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🎭 다중 테마 검증 시작${NC}"
echo ""

# 테마별 Worktree 생성
echo -e "${YELLOW}📁 테마별 Worktree 생성 중...${NC}"

if [ ! -d "../theme-light" ]; then
  git worktree add ../theme-light -b theme/light
  echo -e "${GREEN}✓ 라이트 테마 Worktree 생성${NC}"
fi

if [ ! -d "../theme-dark" ]; then
  git worktree add ../theme-dark -b theme/dark
  echo -e "${GREEN}✓ 다크 테마 Worktree 생성${NC}"
fi

if [ ! -d "../theme-high-contrast" ]; then
  git worktree add ../theme-high-contrast -b theme/high-contrast
  echo -e "${GREEN}✓ 고대비 테마 Worktree 생성${NC}"
fi

echo ""
echo -e "${BLUE}🔍 테마별 검사 시작 (3개 동시 실행)${NC}"
echo ""

# 라이트 테마 검사
check_light_theme() {
  cd ../theme-light
  echo -e "${YELLOW}[라이트 테마] 검사 시작...${NC}"
  
  cursor agent "라이트 테마를 검사해줘

체크 항목:
- 색상 대비 (WCAG AA 기준, 4.5:1 이상)
- 가독성 (배경/텍스트)
- 버튼 상태 구분 (기본/호버/포커스/액티브)
- 포커스 인디케이터 (2px 이상, 명확한 색상)
- 그림자 적절성 (깊이감 표현)
- 링크 색상 구분
- 에러/성공/경고 메시지 색상

개선 제안을 light-theme-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[라이트 테마] ✓ 검사 완료${NC}"
}

# 다크 테마 검사
check_dark_theme() {
  cd ../theme-dark
  echo -e "${YELLOW}[다크 테마] 검사 시작...${NC}"
  
  cursor agent "다크 테마를 검사해줘

체크 항목:
- 색상 대비 (어두운 배경에서 4.5:1 이상)
- 눈의 피로도 (너무 밝은 흰색 사용 금지)
- 이미지/아이콘 가시성
- 그림자 대체 (border 또는 밝은 배경)
- 색상 반전 적절성
- 순수 검정 (#000) 사용 지양
- 텍스트 색상 (#e0e0e0 권장)

개선 제안을 dark-theme-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[다크 테마] ✓ 검사 완료${NC}"
}

# 고대비 테마 검사
check_high_contrast_theme() {
  cd ../theme-high-contrast
  echo -e "${YELLOW}[고대비 테마] 검사 시작...${NC}"
  
  cursor agent "고대비 테마를 검사해줘

체크 항목:
- 최대 대비 확보 (7:1 이상)
- 모든 요소 명확히 구분 가능
- 색상 의존 정보 제거 (패턴/텍스처 활용)
- 아이콘 명확성 (굵은 선)
- 테두리 강조 (2px 이상)
- 배경 패턴 활용
- 텍스트 굵기 조정

개선 제안을 high-contrast-report.md로 저장해줘" > /dev/null 2>&1
  
  echo -e "${GREEN}[고대비 테마] ✓ 검사 완료${NC}"
}

# 병렬 실행
check_light_theme &
PID1=$!

check_dark_theme &
PID2=$!

check_high_contrast_theme &
PID3=$!

# 완료 대기
wait $PID1
wait $PID2
wait $PID3

echo ""
echo -e "${BLUE}📊 테마 검사 결과 통합 중...${NC}"

cd - > /dev/null

cursor agent "각 테마의 검사 결과를 통합해서 테마 시스템 리포트를 만들어줘

파일 위치:
- ../theme-light/light-theme-report.md
- ../theme-dark/dark-theme-report.md
- ../theme-high-contrast/high-contrast-report.md

리포트 형식:
# 테마 시스템 검증 결과

## ☀️ 라이트 테마
### 색상 대비: ✅/⚠️/❌
### 가독성: ✅/⚠️/❌
### 접근성: ✅/⚠️/❌

## 🌙 다크 테마
### 색상 대비: ✅/⚠️/❌
### 눈의 피로도: ✅/⚠️/❌
### 접근성: ✅/⚠️/❌

## 🔆 고대비 테마
### 최대 대비: ✅/⚠️/❌
### 요소 구분: ✅/⚠️/❌
### 접근성: ✅/⚠️/❌

## 🎯 테마 간 일관성
## 📋 우선순위별 개선 사항

결과를 THEME-REPORT.md로 저장해줘"

echo ""
echo -e "${GREEN}✅ 테마 검증 완료!${NC}"
echo -e "${BLUE}📄 최종 리포트: THEME-REPORT.md${NC}"
echo ""

# 정리
read -p "검토용 Worktree를 삭제하시겠습니까? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo -e "${YELLOW}🧹 Worktree 정리 중...${NC}"
  
  git worktree remove ../theme-light --force 2>/dev/null || true
  git worktree remove ../theme-dark --force 2>/dev/null || true
  git worktree remove ../theme-high-contrast --force 2>/dev/null || true
  
  git branch -D theme/light theme/dark theme/high-contrast 2>/dev/null || true
  
  echo -e "${GREEN}✓ 정리 완료${NC}"
fi

echo ""
echo -e "${GREEN}🎉 테마 검증 자동화 완료!${NC}"
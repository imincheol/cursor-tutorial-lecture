# 🔄 5교시 실습: 반복 작업 자동화 - Worktree 기반 검토 워크플로우

> 📚 **공식 문서**
> - Worktrees: https://cursor.com/docs/configuration/worktrees
> - Agent CLI: https://cursor.com/docs/cli/overview

---

## 🎯 실습 목표

이 실습에서는 **반복되는 검토 작업을 Worktree로 분리하여 병렬 처리**하는 방법을 배웁니다.

---

## 📋 기본 실습 (필수)

### 1. 병렬 검토 자동화 체험
```bash
# 자동화 스크립트 실행
cd your-project
bash /path/to/examples/automation-scripts/check-parallel.sh
```

**체크리스트:**
- [ ] Worktree 4개 생성 확인 (a11y, browsers, performance, design)
- [ ] 병렬 실행으로 시간 단축 체험 (35분 → 15분)
- [ ] 각 Worktree의 독립적인 검사 결과 확인
- [ ] 통합 리포트 생성 확인 (REVIEW-REPORT.md)

### 2. 반응형 디자인 검증
```bash
bash /path/to/examples/automation-scripts/check-responsive.sh
```

**체크리스트:**
- [ ] 모바일/태블릿/데스크톱 Worktree 생성
- [ ] 각 뷰포트별 검사 결과 확인
- [ ] 반응형 이슈 발견 및 개선 방안 확인

### 3. 수동 Worktree 생성 연습
```bash
# 접근성 검사용 Worktree 수동 생성
git worktree add ../my-check-a11y -b my-check/a11y
cd ../my-check-a11y

# Cursor Agent로 검사
cursor agent "이 프로젝트의 접근성을 검사해줘"

# 원래 디렉토리로 복귀
cd -

# 정리
git worktree remove ../my-check-a11y
git branch -d my-check/a11y
```

**체크리스트:**
- [ ] Worktree 수동 생성/삭제 이해
- [ ] 브랜치 네이밍 전략 이해
- [ ] Agent 명령어 작성 연습

---

## 🔥 보너스 실습 (선택)

### 초급 보너스

#### 4. 컴포넌트 상태별 검증
```bash
# 로딩/에러/빈 상태/성공 상태를 동시에 검사
git worktree add ../check-loading -b check/state-loading
git worktree add ../check-error -b check/state-error
git worktree add ../check-empty -b check/state-empty
git worktree add ../check-success -b check/state-success

# 각 터미널에서
cd ../check-loading
cursor agent "로딩 상태의 UI를 검사해줘
- 스켈레톤 UI 적절성
- 로딩 인디케이터 위치
- 사용자 피드백 명확성"
```

**체크리스트:**
- [ ] 4가지 상태를 동시에 검증
- [ ] 각 상태별 UI/UX 개선점 발견
- [ ] 상태 전환 시나리오 검토

#### 5. 다국어 지원 검증
```bash
# 한국어/영어/일본어를 동시에 검사
git worktree add ../check-ko -b check/lang-ko
git worktree add ../check-en -b check/lang-en
git worktree add ../check-ja -b check/lang-ja

# 각 언어별 검사
cursor agent "이 페이지의 한국어 번역을 검사해줘
- 번역 누락 여부
- 텍스트 오버플로우
- 날짜/숫자 포맷
- 문화적 적절성"
```

**체크리스트:**
- [ ] 다국어 번역 품질 검증
- [ ] 텍스트 길이 차이로 인한 레이아웃 이슈 발견
- [ ] 문화적 적절성 검토

#### 6. 이미지 최적화 검증
```bash
git worktree add ../check-images -b check/images

cd ../check-images
cursor agent "이 프로젝트의 이미지들을 분석해줘
- 파일 크기 (1MB 이상 경고)
- 포맷 최적화 (WebP 사용 권장)
- Lazy loading 적용 여부
- 반응형 이미지 (srcset)
- alt 텍스트 누락
- 압축 가능성"
```

**체크리스트:**
- [ ] 대용량 이미지 발견
- [ ] WebP 포맷 전환 가능성 확인
- [ ] Lazy loading 미적용 이미지 발견

### 중급 보너스

#### 7. 크로스 브라우징 CSS 검증
```bash
# Safari/Firefox/Chrome별 CSS 호환성 검사
git worktree add ../check-css-safari -b check/css-safari
git worktree add ../check-css-firefox -b check/css-firefox
git worktree add ../check-css-chrome -b check/css-chrome

cursor agent "이 CSS가 Safari에서 제대로 작동하는지 검사해줘
- Flexbox 레이아웃
- Grid 레이아웃
- CSS 변수 사용
- 벤더 프리픽스 필요성
- 폴백 스타일"
```

**체크리스트:**
- [ ] 브라우저별 CSS 호환성 이슈 발견
- [ ] 벤더 프리픽스 필요 속성 확인
- [ ] 폴백 스타일 추가 필요성 파악

#### 8. 폼 유효성 검사 시나리오
```bash
# 정상/에러/경고 상태를 동시에 검사
git worktree add ../check-form-valid -b check/form-valid
git worktree add ../check-form-error -b check/form-error
git worktree add ../check-form-warning -b check/form-warning

cursor agent "폼 유효성 검사 UI를 검사해줘
- 에러 메시지 명확성
- 인라인 vs 상단 에러 표시
- 실시간 vs 제출 시 검증
- 색상/아이콘 사용 적절성"
```

**체크리스트:**
- [ ] 폼 유효성 검사 UX 개선점 발견
- [ ] 에러 메시지 명확성 검토
- [ ] 접근성 고려사항 확인

#### 9. 커스텀 자동화 스크립트 작성
```bash
# 자신만의 검증 스크립트 작성
cp /path/to/check-parallel.sh ./my-custom-check.sh
# 스크립트 수정하여 팀 특화 검증 항목 추가
```

**체크리스트:**
- [ ] 스크립트 구조 이해
- [ ] 검증 항목 커스터마이징
- [ ] 팀 표준에 맞는 검증 프로세스 구축

### 고급 보너스

#### 10. 성능 벤치마크 비교
```bash
# 최적화 전/후를 동시에 비교
git worktree add ../perf-before -b perf/before
git worktree add ../perf-after -b perf/after

# before: 현재 상태
# after: 최적화 적용

# 각각에서 성능 측정
cursor agent "번들 크기, 렌더링 성능, 메모리 사용량을 측정해줘"
```

**체크리스트:**
- [ ] 최적화 전/후 성능 비교
- [ ] 정량적 개선 효과 측정
- [ ] 트레이드오프 분석

#### 11. A/B 테스트 시나리오
```bash
# 두 가지 디자인 패턴을 동시에 검토
git worktree add ../design-a -b design/pattern-a
git worktree add ../design-b -b design/pattern-b

cursor agent "이 디자인 패턴의 장단점을 분석해줘
- 사용자 경험
- 접근성
- 구현 복잡도
- 유지보수성"
```

**체크리스트:**
- [ ] 여러 디자인 패턴 동시 비교
- [ ] 객관적 평가 기준 수립
- [ ] 데이터 기반 의사결정

#### 12. 전체 자동화 파이프라인 구축
```bash
# 모든 검증을 하나의 파이프라인으로
./check-parallel.sh && \
./check-responsive.sh && \
./check-html-css.sh && \
./check-themes.sh
```

**체크리스트:**
- [ ] 전체 검증 파이프라인 구축
- [ ] 실패 시 중단 로직 추가
- [ ] 최종 통합 리포트 생성

---

## 📊 실습 완료도 체크

**기본 실습 (3/3) 완료 시:**
- ✅ Worktree 기반 병렬 처리 이해
- ✅ 자동화 스크립트 활용 가능
- ✅ 검토 시간 50% 이상 단축

**보너스 실습 (6/12) 완료 시:**
- 🔥 다양한 검증 시나리오 경험
- 🔥 커스텀 자동화 구축 가능
- 🔥 팀 프로세스 개선 제안 가능

**전체 실습 (12/15) 완료 시:**
- 🚀 자동화 전문가 레벨
- 🚀 팀 생산성 혁신 가능
- 🚀 복잡한 검증 파이프라인 구축

---

## 💡 실전 활용 팁

### PR 전 자동 검증
```bash
# PR 생성 전 자동으로 모든 검증 실행
git checkout -b feature/new-component
# ... 개발 ...
bash check-parallel.sh
# 리포트 확인 후 PR 생성
```

### 정기 품질 체크
```bash
# 매주 금요일 오후 5시 자동 실행
crontab -e
0 17 * * 5 cd /project && bash check-html-css.sh
```

### 팀 표준화
```bash
# 팀 전체가 동일한 검증 사용
cp check-*.sh /team-shared/scripts/
git add /team-shared/scripts/
git commit -m "Add team quality checks"
```

---

## 🔗 관련 자료

- [5교시 강의 자료](../../curriculum/05-session.md)
- [자동화 스크립트 상세 가이드](../../examples/automation-scripts/README.md)
- [Worktrees 공식 문서](https://cursor.com/docs/configuration/worktrees)

---

**[← 4교시 실습](../04-cli-multi-agent/README.md)** | **[6교시 실습 →](../06-cicd-integration/README.md)**
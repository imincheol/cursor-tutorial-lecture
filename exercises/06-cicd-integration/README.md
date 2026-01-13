# 🎨 6교시 실습: 마크업 품질 자동화 - HTML/CSS 검증 워크플로우

> 📚 **공식 문서**
> - Worktrees: https://cursor.com/docs/configuration/worktrees
> - Agent CLI: https://cursor.com/docs/cli/overview
> - Browser: https://cursor.com/docs/agent/browser

---

## 🎯 실습 목표

이 실습에서는 **HTML/CSS 품질을 여러 관점에서 동시에 검증**하는 방법을 배웁니다.

---

## 📋 기본 실습 (필수)

### 1. HTML/CSS 품질 검증 체험
```bash
# 자동화 스크립트 실행
cd your-project
bash /path/to/examples/automation-scripts/check-html-css.sh
```

**체크리스트:**
- [ ] HTML 시맨틱/접근성/SEO Worktree 생성 확인
- [ ] CSS 구조/성능/네이밍 Worktree 생성 확인
- [ ] 6개 검사 병렬 실행 확인 (45분 → 18분)
- [ ] 통합 리포트 생성 확인 (HTML-CSS-REPORT.md)

### 2. 다중 테마 검증
```bash
bash /path/to/examples/automation-scripts/check-themes.sh
```

**체크리스트:**
- [ ] 라이트/다크/고대비 테마 Worktree 생성
- [ ] 각 테마별 색상 대비 검사
- [ ] 테마 간 일관성 검토

### 3. HTML 시맨틱 수동 검증
```bash
git worktree add ../check-semantic -b check/semantic
cd ../check-semantic

cursor agent "이 HTML의 시맨틱 구조를 검사해줘
- <div> 남용 여부
- <header>, <nav>, <main>, <article>, <section> 적절성
- <h1>~<h6> 계층 구조
- <button> vs <a> 올바른 사용"

cd -
git worktree remove ../check-semantic
git branch -d check/semantic
```

**체크리스트:**
- [ ] 시맨틱 HTML 이해
- [ ] div 남용 패턴 발견
- [ ] 적절한 시맨틱 태그 제안 받기

---

## 🔥 보너스 실습 (선택)

### 초급 보너스

#### 4. CSS 네이밍 컨벤션 검증
```bash
git worktree add ../check-bem -b check/bem

cd ../check-bem
cursor agent "이 CSS가 BEM 네이밍을 따르는지 검사해줘
- block__element--modifier 패턴
- 네이밍 일관성
- 약어 사용 적절성
- 상태 클래스 (is-, has-)
- JavaScript 훅 (js-)"
```

**체크리스트:**
- [ ] BEM 네이밍 패턴 이해
- [ ] 일관되지 않은 네이밍 발견
- [ ] 리팩토링 제안 받기

#### 5. 아이콘 시스템 검증
```bash
git worktree add ../check-icons -b check/icons

cursor agent "아이콘 시스템을 검사해줘
- SVG 최적화 (SVGO)
- 일관된 크기 (16px, 24px, 32px)
- 색상 상속 (currentColor)
- 접근성 (title, aria-label)
- 네이밍 일관성"
```

**체크리스트:**
- [ ] SVG 최적화 가능성 확인
- [ ] 아이콘 크기 일관성 검토
- [ ] 접근성 개선점 발견

#### 6. 타이포그래피 시스템 검증
```bash
git worktree add ../check-typography -b check/typography

cursor agent "타이포그래피를 검사해줘
- 폰트 크기 스케일 (1.25 비율)
- 행간 (line-height 1.5~1.8)
- 자간 (letter-spacing)
- 최대 줄 길이 (60-80자)
- 폰트 로딩 전략"
```

**체크리스트:**
- [ ] 타이포그래피 스케일 일관성 확인
- [ ] 가독성 개선점 발견
- [ ] 폰트 로딩 최적화 방안 확인

### 중급 보너스

#### 7. 간격 시스템 검증
```bash
git worktree add ../check-spacing -b check/spacing

cursor agent "간격 시스템을 검사해줘
- 4px/8px 기반 스케일
- margin/padding 일관성
- 컴포넌트 간 간격
- 섹션 구분 간격
- 반응형 간격 조정
- CSS 변수 활용"
```

**체크리스트:**
- [ ] 간격 시스템 일관성 확인
- [ ] 매직 넘버 발견 및 제거
- [ ] CSS 변수 활용 개선

#### 8. 애니메이션 품질 검증
```bash
git worktree add ../check-animations -b check/animations

cursor agent "애니메이션을 검사해줘
- 애니메이션 지속 시간 (200-400ms)
- Easing 함수 일관성
- 성능 (transform, opacity만 사용)
- prefers-reduced-motion 지원
- 애니메이션 목적 명확성"
```

**체크리스트:**
- [ ] 성능 저하 애니메이션 발견
- [ ] 접근성 고려사항 확인
- [ ] 일관된 easing 함수 적용

#### 9. 컴포넌트 라이브러리 검증
```bash
# 버튼 컴포넌트의 모든 변형 검증
git worktree add ../button-primary -b component/button-primary
git worktree add ../button-secondary -b component/button-secondary
git worktree add ../button-disabled -b component/button-disabled

# 각 터미널에서
cursor agent "이 버튼 변형을 검사해줘
- 크기 일관성
- 호버/포커스/액티브 상태
- 애니메이션 일관성
- 아이콘 정렬
- 텍스트 오버플로우 처리"
```

**체크리스트:**
- [ ] 컴포넌트 변형 간 일관성 확인
- [ ] 모든 상태 검증
- [ ] 엣지 케이스 발견

### 고급 보너스

#### 10. 폼 요소 전체 검증
```bash
# 모든 폼 요소를 동시에 검증
git worktree add ../form-input -b form/input
git worktree add ../form-select -b form/select
git worktree add ../form-checkbox -b form/checkbox
git worktree add ../form-radio -b form/radio
git worktree add ../form-textarea -b form/textarea

# 각 폼 요소 검사
cursor agent "이 폼 요소를 검사해줘
- 레이블 연결 (for/id)
- 에러 메시지 표시
- 필수 필드 표시
- 플레이스홀더 적절성
- 포커스 스타일
- 유효성 검사 피드백"
```

**체크리스트:**
- [ ] 모든 폼 요소 접근성 확인
- [ ] 일관된 스타일 적용
- [ ] 사용자 피드백 명확성 검토

#### 11. 색상 시스템 검증
```bash
git worktree add ../check-colors -b check/colors

cursor agent "색상 시스템을 검사해줘
- 색상 팔레트 일관성
- 색상 대비 (WCAG AA/AAA)
- CSS 변수 활용
- 색상 네이밍
- 다크 모드 대응
- 색맹 사용자 고려"
```

**체크리스트:**
- [ ] 색상 팔레트 정리
- [ ] 접근성 기준 충족 확인
- [ ] 색맹 시뮬레이션 테스트

#### 12. 전체 디자인 시스템 감사
```bash
# 모든 디자인 시스템 요소를 동시에 검증
git worktree add ../ds-colors -b ds/colors
git worktree add ../ds-typography -b ds/typography
git worktree add ../ds-spacing -b ds/spacing
git worktree add ../ds-components -b ds/components
git worktree add ../ds-icons -b ds/icons
git worktree add ../ds-animations -b ds/animations

# 각각에서 검증 후 통합 리포트 생성
cursor agent "모든 디자인 시스템 검증 결과를 통합해서
디자인 시스템 감사 리포트를 만들어줘"
```

**체크리스트:**
- [ ] 전체 디자인 시스템 일관성 확인
- [ ] 미사용 스타일 발견
- [ ] 표준화 기회 식별

---

## 📊 실습 완료도 체크

**기본 실습 (3/3) 완료 시:**
- ✅ HTML/CSS 품질 검증 이해
- ✅ 다중 테마 검증 가능
- ✅ 마크업 품질 60% 향상

**보너스 실습 (6/12) 완료 시:**
- 🔥 디자인 시스템 전문가 레벨
- 🔥 컴포넌트 라이브러리 관리 가능
- 🔥 일관된 마크업 표준 구축

**전체 실습 (12/15) 완료 시:**
- 🚀 마크업 아키텍트 레벨
- 🚀 디자인 시스템 구축 및 관리
- 🚀 팀 마크업 품질 혁신

---

## 💡 실전 활용 팁

### 디자인 시스템 구축
```bash
# 새로운 디자인 시스템 구축 시
bash check-html-css.sh
bash check-themes.sh
# 결과를 바탕으로 표준 수립
```

### 레거시 코드 개선
```bash
# 레거시 프로젝트 품질 개선
bash check-html-css.sh
# 리포트 기반으로 우선순위 설정
# 단계별 리팩토링 진행
```

### 컴포넌트 라이브러리 QA
```bash
# 새 컴포넌트 추가 시
# 모든 변형과 상태 검증
# 일관성 확보 후 배포
```

---

## 🔗 관련 자료

- [6교시 강의 자료](../../curriculum/06-session.md)
- [자동화 스크립트 상세 가이드](../../examples/automation-scripts/README.md)
- [Browser 공식 문서](https://cursor.com/docs/agent/browser)

---

## 🎉 강의 완료!

축하합니다! Cursor 마스터 클래스 6교시를 모두 완료하셨습니다.

### 배운 내용 정리
- ✅ IDE 모드: Rules, Hooks, Debug, Visual Editor
- ✅ CLI 모드: Shell Mode, Multi-Agent, IDE+CLI 통합
- ✅ 자동화: 반복 작업, 마크업 품질 검증

### 다음 단계
1. 실제 프로젝트에 적용
2. 팀과 자동화 스크립트 공유
3. 커스텀 검증 프로세스 구축
4. 지속적인 품질 개선

---

**[← 5교시 실습](../05-workflow-automation/README.md)** | **[← 강의 개요](../../curriculum/00-overview.md)**
# 🤖 Cursor 튜토리얼 - 자동화 스크립트 모음

5-6교시에서 배운 Worktree 기반 자동화를 즉시 실행할 수 있는 스크립트들입니다.

## 📋 스크립트 목록

### 1. `check-parallel.sh` - 병렬 검토 자동화
**용도**: 접근성, 브라우저 호환성, 성능, 디자인 시스템을 동시에 검사

**실행 방법**:
```bash
cd your-project
bash /path/to/check-parallel.sh
```

**검사 항목**:
- ✅ 접근성 (ARIA, 키보드, 색상 대비)
- ✅ 브라우저 호환성 (Chrome, Safari, Firefox, Edge)
- ✅ 성능 (번들 크기, 렌더링, 메모리)
- ✅ 디자인 시스템 (색상, 타이포그래피, 간격)

**예상 시간**: 15분 (순차 실행 시 35분)

---

### 2. `check-responsive.sh` - 반응형 디자인 검증
**용도**: 모바일/태블릿/데스크톱 뷰포트를 동시에 검사

**실행 방법**:
```bash
cd your-project
bash /path/to/check-responsive.sh
```

**검사 항목**:
- 📱 모바일 (375px): 터치 타겟, 가로 스크롤, 폰트 크기
- 📱 태블릿 (768px): 2단 레이아웃, 가로/세로 모드
- 💻 데스크톱 (1920px): 최대 너비, 여백, 다단 레이아웃

**예상 시간**: 10분 (순차 실행 시 25분)

---

### 3. `check-html-css.sh` - HTML/CSS 품질 검증
**용도**: HTML 시맨틱/접근성/SEO와 CSS 구조/성능/네이밍을 동시에 검사

**실행 방법**:
```bash
cd your-project
bash /path/to/check-html-css.sh
```

**검사 항목**:
- 📄 HTML 시맨틱 (div 남용, 시맨틱 태그, 계층 구조)
- 📄 HTML 접근성 (alt, label, ARIA, 키보드)
- 📄 HTML SEO (title, meta, h1, Schema.org)
- 🎨 CSS 구조 (선택자 깊이, !important, 중복)
- 🎨 CSS 성능 (파일 크기, 미사용 CSS, 애니메이션)
- 🎨 CSS 네이밍 (BEM, 일관성, 상태 클래스)

**예상 시간**: 18분 (순차 실행 시 45분)

---

### 4. `check-themes.sh` - 다중 테마 검증
**용도**: 라이트/다크/고대비 테마를 동시에 검사

**실행 방법**:
```bash
cd your-project
bash /path/to/check-themes.sh
```

**검사 항목**:
- ☀️ 라이트 테마 (색상 대비, 가독성, 그림자)
- 🌙 다크 테마 (눈의 피로도, 이미지 가시성, 순수 검정 지양)
- 🔆 고대비 테마 (최대 대비, 패턴 활용, 테두리 강조)

**예상 시간**: 12분 (순차 실행 시 30분)

---

## 🚀 사용 방법

### 1단계: 스크립트 실행 권한 부여
```bash
chmod +x check-*.sh
```

### 2단계: 프로젝트 디렉토리에서 실행
```bash
cd /your/project/path
bash /path/to/automation-scripts/check-parallel.sh
```

### 3단계: 결과 확인
스크립트 실행 후 생성되는 리포트 파일들:
- `REVIEW-REPORT.md` - 병렬 검토 종합 리포트
- `RESPONSIVE-REPORT.md` - 반응형 검증 리포트
- `HTML-CSS-REPORT.md` - HTML/CSS 품질 리포트
- `THEME-REPORT.md` - 테마 시스템 리포트

---

## 💡 활용 팁

### PR 전 자동 검증
```bash
# PR 생성 전에 자동으로 검증
git checkout -b feature/new-component
# ... 개발 작업 ...
bash check-parallel.sh
# 리포트 확인 후 PR 생성
```

### 정기 품질 체크
```bash
# 매주 금요일 품질 체크
crontab -e
# 0 17 * * 5 cd /project && bash /scripts/check-html-css.sh
```

### 팀 표준화
```bash
# 팀 전체가 동일한 검증 프로세스 사용
cp check-*.sh /team-shared-scripts/
git add /team-shared-scripts/
git commit -m "Add automated quality checks"
```

---

## ⚙️ 커스터마이징

### 검사 항목 추가
각 스크립트의 `cursor agent` 명령어 부분을 수정:

```bash
cursor agent "이 프로젝트를 검사해줘

체크 항목:
- 기존 항목들...
- 추가하고 싶은 항목 1
- 추가하고 싶은 항목 2

결과를 report.md로 저장해줘"
```

### Worktree 이름 변경
스크립트 상단의 변수들을 수정:

```bash
# 기존
git worktree add ../check-a11y -b check/a11y

# 변경
git worktree add ../my-check-a11y -b my-check/a11y
```

### 병렬 실행 개수 조정
더 많은 검사를 동시에 실행하려면:

```bash
check_item1 &
PID1=$!

check_item2 &
PID2=$!

# 추가 검사들...

wait $PID1
wait $PID2
# 추가 wait들...
```

---

## 🔧 문제 해결

### "cursor: command not found"
Cursor CLI가 설치되지 않았습니다:
```bash
# Cursor IDE에서
Cmd+Shift+P → "Shell Command: Install 'cursor' command"
```

### Worktree 생성 실패
이미 존재하는 Worktree를 정리:
```bash
git worktree list
git worktree remove /path/to/worktree --force
git branch -D branch-name
```

### 스크립트 실행 권한 오류
실행 권한 부여:
```bash
chmod +x check-*.sh
```

---

## 📊 시간 절약 효과

| 스크립트 | 순차 실행 | 병렬 실행 | 절감 시간 | 절감율 |
|---------|----------|----------|----------|--------|
| check-parallel.sh | 35분 | 15분 | 20분 | 57% |
| check-responsive.sh | 25분 | 10분 | 15분 | 60% |
| check-html-css.sh | 45분 | 18분 | 27분 | 60% |
| check-themes.sh | 30분 | 12분 | 18분 | 60% |
| **총합** | **135분** | **55분** | **80분** | **59%** |

---

## 🎯 다음 단계

1. **스크립트 조합**: 여러 스크립트를 하나로 통합
2. **CI/CD 통합**: GitHub Actions에서 자동 실행
3. **커스텀 스크립트**: 팀 특화 검증 항목 추가
4. **리포트 자동화**: Slack/이메일로 결과 자동 전송

---

**이 스크립트들로 반복 작업을 자동화하고 개발에 집중하세요! 🚀**
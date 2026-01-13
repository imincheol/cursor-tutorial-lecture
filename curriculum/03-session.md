# 🎓 3교시: CLI 모드 - 설치 & Shell Mode

> ⏱ 50분 | CLI 모드 Part 1

## 📑 목차

- [이 시간의 목표](#-이-시간의-목표)
- [0️⃣ IDE vs CLI 복습 (5분)](#️⃣-ide-vs-cli-복습-5분)
- [1️⃣ CLI 설치 (5분)](#️⃣-cli-설치-5분)
- [2️⃣ 대화형 Agent 모드 (20분)](#️⃣-대화형-agent-모드-20분)
  - [대화형 vs 비대화형 모드](#대화형-vs-비대화형-모드)
  - [유용한 슬래시 명령](#유용한-슬래시-명령)
  - [모델 선택](#모델-선택)
  - [이전 대화 이어가기](#이전-대화-이어가기)
- [3️⃣ Shell Mode (20분)](#️⃣-shell-mode-20분)
  - [Shell Mode란?](#shell-mode란)
  - [실습: 자연어로 명령어 생성](#-실습-자연어로-명령어-생성)
  - [Shell Mode vs 대화형 Agent](#shell-mode-vs-대화형-agent)
- [체크리스트](#-3교시-체크리스트)
- [다음 교시](#-다음-교시)

---

## 📋 이 시간의 목표

- [ ] Cursor CLI 설치
- [ ] **대화형 Agent 모드** 이해 (코드 작업용)
- [ ] **Shell Mode** 이해 (명령어 생성용)
- [ ] 두 모드의 차이점 파악

---

## 0️⃣ IDE vs CLI 복습 (5분)

```
┌─────────────────────────────────────────────────────────────┐
│  지금까지 배운 것 (IDE 모드)                                │
├─────────────────────────────────────────────────────────────┤
│  ✅ Rules (globs 패턴)                                      │
│  ✅ Hooks (Agent 제어)                                      │
│  ✅ Debug Mode (버그 추적)                                  │
│  ✅ Visual Editor (UI 편집)                                 │
│  ⚠️ Multi-Agent (충돌 주의)                                │
├─────────────────────────────────────────────────────────────┤
│  지금부터 배울 것 (CLI 모드)                                │
├─────────────────────────────────────────────────────────────┤
│  ✅ 터미널에서 Agent 실행                                   │
│  ✅ Shell Mode (명령어 생성)                                │
│  ✅ Worktree로 독립 Multi-Agent                             │
│  ✅ 자동화/스크립트                                         │
└─────────────────────────────────────────────────────────────┘
```

### CLI 모드의 장점

```
1. 터미널만 있으면 사용 가능
2. Worktree로 독립 환경 → 충돌 없는 Multi-Agent
3. 스크립트/자동화 가능
4. Shell Mode로 명령어 생성
```

---

## 1️⃣ CLI 설치 (10분)

📚 **공식 문서**: https://docs.cursor.com/cli/installation

### 설치 방법

```bash
# Cursor IDE 내에서 설치 (권장)
Cmd+Shift+P → "Shell Command: Install 'cursor' command"

# 확인
cursor --version
```

### 기본 명령어

```bash
# 현재 폴더를 Cursor IDE로 열기
cursor .

# 특정 파일 열기
cursor src/App.tsx

# 도움말
cursor --help
cursor agent --help
```

---

## 2️⃣ CLI Agent 기본 사용 (15분)

📚 **공식 문서**: https://docs.cursor.com/cli/using

### Agent 시작

```bash
# 대화형 Agent 시작
cursor agent

# 프롬프트와 함께 시작
cursor agent "이 프로젝트 구조 설명해줘"
```

### 대화형 vs 비대화형 모드

#### 🎯 **대화형 모드** (실전에서 주로 사용!)

```bash
$ cursor agent

# 지금 이 대화처럼 계속 이어가며 작업
> 이 프로젝트에서 사용하는 주요 라이브러리 정리해줘

Agent: package.json을 분석한 결과...
- React 18.2.0
- TypeScript 5.0
- Tailwind CSS 3.3

> TypeScript 설정 파일 확인해줘

Agent: tsconfig.json을 확인했습니다...

> strict 모드를 켜고 싶은데 영향받는 파일들 찾아줘

Agent: 영향받는 파일 12개 발견...

> 그럼 하나씩 수정해줘

Agent: 첫 번째 파일부터 수정하겠습니다...
```

**언제 사용?**
- ✅ 복잡한 문제 해결 (단계별 진행)
- ✅ 코드베이스 탐색 및 이해
- ✅ 리팩토링 (점진적 개선)
- ✅ 버그 추적 (대화하며 원인 찾기)

#### 🤖 **비대화형 모드** (자동화/스크립트용)

```bash
# 한 번에 실행하고 끝
cursor agent "package.json의 의존성 업데이트해줘"

# 스크립트에서 사용
for dir in */; do
  cd "$dir"
  cursor agent "테스트 실행하고 결과 요약해줘"
  cd ..
done
```

**언제 사용?**
- ✅ 반복 작업 자동화
- ✅ CI/CD 파이프라인
- ✅ 배치 처리
- ✅ 간단한 일회성 작업

### 유용한 슬래시 명령

```
/models   - 사용 가능한 모델 목록, 모델 변경
/rules    - Rules 관리
/compress - 컨텍스트 압축
```

### 모델 선택

```bash
# 모델 목록 확인
cursor agent --list-models

# 특정 모델로 실행
cursor agent --model claude-sonnet-4-5 "코드 리뷰해줘"
```

### 이전 대화 이어가기

```bash
# 이전 대화 목록
cursor agent ls

# 가장 최근 대화 이어가기
cursor agent resume

# 특정 대화 이어가기
cursor agent --resume [thread-id]
```

---

## 3️⃣ Shell Mode (20분) 🔥

### Shell Mode란?

**자연어를 터미널 명령어로 변환해주는 특수 모드**

```
┌─────────────────────────────────────────────────────────────┐
│  Shell Mode의 역할                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  당신: "최근 3일 내 수정된 tsx 파일 찾아줘"                  │
│    ↓                                                        │
│  AI: find . -name "*.tsx" -mtime -3                         │
│    ↓                                                        │
│  실행할까요? [Y/n]                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**핵심 특징**:
- ✅ **명령어만 생성**: 코드 파일 직접 수정 안 함
- ✅ **실행 전 확인**: 명령어 보여주고 실행 여부 물어봄
- ✅ **안전함**: 위험한 명령은 경고
- ✅ **학습 효과**: 생성된 명령어 보며 배움

### Copilot에는 없다!

```
Copilot: 터미널 명령은 직접 타이핑 (외워야 함)
Cursor Shell Mode: 자연어로 설명 → 명령어 자동 생성
```

📚 **공식 문서**: https://docs.cursor.com/cli/shell-mode

### Shell Mode 시작

```bash
cursor agent --shell
```

### 🔥 실습: 자연어로 명령어 생성

**파일 찾기:**
```
> 최근 3일 내 수정된 tsx 파일 찾아줘
AI: find . -name "*.tsx" -mtime -3
실행할까요? [Y/n] y

결과:
./src/components/Button.tsx
./src/pages/Home.tsx
```

**패키지 관리:**
```
> node_modules 삭제하고 pnpm으로 재설치해줘
AI: rm -rf node_modules && pnpm install
실행할까요? [Y/n]
```

**프로세스 관리:**
```
> 3000 포트 사용 중인 프로세스 죽여줘
AI: lsof -ti:3000 | xargs kill -9
실행할까요? [Y/n]
```

**Git:**
```
> 최근 5개 커밋 로그 한 줄로 보여줘
AI: git log --oneline -5
실행할까요? [Y/n]
```

**복잡한 파이프라인:**
```
> 이 폴더에서 TODO 주석 포함된 파일 찾아서 라인 수 세줘
AI: grep -r "TODO" . --include="*.ts" --include="*.tsx" | wc -l
실행할까요? [Y/n]
```

### Shell Mode vs 대화형 Agent

**헷갈리지 말자!** 🚨

| 항목 | 대화형 Agent<br>`cursor agent` | Shell Mode<br>`cursor agent --shell` |
|------|-------------------------------|-------------------------------------|
| **목적** | 코드 작성/수정 | 명령어 생성 |
| **파일 수정** | ✅ 가능 | ❌ 불가 |
| **명령 실행** | ⚠️ 제한적 | ✅ 주 기능 |
| **실행 확인** | - | ✅ 물어봄 |
| **예시** | "리팩토링해줘" | "파일 찾아줘" |

**언제 Shell Mode?**
- ✅ 파일 찾기/정렬/필터링
- ✅ 프로세스 관리 (포트, 메모리)
- ✅ Git 명령어
- ✅ 시스템 모니터링
- ✅ Docker/npm 명령어

**언제 대화형 Agent?**
- ✅ 코드 작성/수정
- ✅ 리팩토링
- ✅ 버그 수정
- ✅ 코드 분석

### Shell Mode 실무 활용

| 상황 | 자연어로 요청 |
|------|---------------|
| 명령어 기억 안 날 때 | "특정 문자열 포함 파일 찾아줘" |
| 복잡한 파이프라인 | "로그에서 에러만 추출해서 정렬해줘" |
| Git 명령 | "3일 전 커밋으로 돌아가는 방법" |
| 시스템 확인 | "디스크 용량 확인해줘" |
| Docker | "실행 중인 컨테이너 목록 보여줘" |

### 비대화형 모드 (스크립트용)

```bash
# 결과를 터미널에 출력
cursor agent -p "README 요약해줘"

# JSON 형식으로
cursor agent -p --output-format json "변경사항 분석해줘"

# 텍스트 형식으로
cursor agent -p --output-format text "이 함수 설명해줘"
```

📚 **공식 문서**: https://docs.cursor.com/cli/reference/agent

---

## ✅ 3교시 체크리스트

- [ ] CLI 설치 완료
- [ ] `cursor agent` 실행해보기
- [ ] Shell Mode로 명령어 생성해보기
- [ ] 비대화형 모드 테스트

---

## 💡 CLI 활용 팁

```bash
# ~/.zshrc에 alias 추가
alias ca="cursor agent"
alias cas="cursor agent --shell"

# 사용
ca "이 파일 리팩토링해줘"
cas  # Shell Mode 바로 시작
```

---

## 🔗 이 교시 관련 공식 문서

| 주제 | 링크 |
|------|------|
| CLI Overview | https://docs.cursor.com/cli/overview |
| CLI Installation | https://docs.cursor.com/cli/installation |
| Using Agent in CLI | https://docs.cursor.com/cli/using |
| Shell Mode | https://docs.cursor.com/cli/shell-mode |
| CLI Reference | https://docs.cursor.com/cli/reference/agent |

---

## ⏭ 다음 교시

**🍵 10분 휴식**

**[4교시: CLI 모드 - Multi-Agent & 실전 →](./04-session.md)**
- Worktree로 독립 Multi-Agent
- IDE에서 불가능한 병렬 작업
- 실전 워크플로우

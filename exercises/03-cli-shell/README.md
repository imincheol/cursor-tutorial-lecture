# 💻 3교시 실습: CLI 모드 - Shell Mode

> 📚 **공식 문서**
> - CLI Overview: https://docs.cursor.com/cli/overview
> - Shell Mode: https://docs.cursor.com/cli/shell-mode

---

## CLI 설치

```bash
# Cursor IDE에서
Cmd+Shift+P → "Shell Command: Install 'cursor' command"

# 확인
cursor --version
```

---

## 기본 명령어

```bash
# Agent 시작
cursor agent

# 프롬프트와 함께
cursor agent "이 프로젝트 설명해줘"

# 모델 목록
cursor agent --list-models

# 이전 대화 이어가기
cursor agent resume
```

---

## Shell Mode 🔥

```bash
cursor agent --shell
```

### 예시

**파일 찾기:**
```
> 최근 3일 내 수정된 tsx 파일 찾아줘
AI: find . -name "*.tsx" -mtime -3
[Y/n]
```

**패키지:**
```
> node_modules 삭제하고 pnpm 재설치
AI: rm -rf node_modules && pnpm install
[Y/n]
```

**프로세스:**
```
> 3000 포트 프로세스 종료
AI: lsof -ti:3000 | xargs kill -9
[Y/n]
```

**Git:**
```
> 최근 5개 커밋 한 줄로
AI: git log --oneline -5
[Y/n]
```

---

## 비대화형 모드

```bash
# 출력만
cursor agent -p "README 요약해줘"

# JSON
cursor agent -p --output-format json "분석해줘"
```

---

## alias 설정

```bash
# ~/.zshrc
alias ca="cursor agent"
alias cas="cursor agent --shell"
```

---

## 실습 과제

1. [ ] CLI 설치
2. [ ] `cursor agent` 실행
3. [ ] Shell Mode로 명령어 생성
4. [ ] 비대화형 모드 테스트

---

**[← 3교시 강의](../../curriculum/03-session.md)** | **[← 2교시 실습](../02-ide-debug-visual/README.md)** | **[4교시 실습 →](../04-cli-multi-agent/README.md)**

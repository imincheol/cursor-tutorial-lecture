# 5장: CLI Agent - 터미널에서 개발

> **IDE 없이 터미널에서도 Agent를 사용할 수 있습니다**

## 📝 강의 개요

안녕하세요. 이번 장에서는 **Cursor CLI**를 배웁니다.

지금까지 배운 기능들은 모두 IDE 안에서 동작했습니다. 하지만 SSH 접속, CI/CD 파이프라인 등 IDE를 사용할 수 없는 상황이 자주 있습니다.

**학습 목표**:

- Cursor CLI 설치 및 실행
- 터미널에서 Agent와 대화하며 코드 작업
- Shell Mode로 명령어 빠르게 실행
- SSH/CI/CD 환경 활용

**예상 소요 시간**: 30분

---

## 🎯 Copilot CLI vs Cursor CLI

### Copilot CLI

```bash
# 명령어 제안만 가능
gh copilot suggest "파일 목록 보기"
→ ls -la

# 설명 요청
gh copilot explain "git rebase -i"
→ 설명만 제공

# 코드 작업은 IDE로 돌아가야 함
```

### Cursor CLI

```bash
# 1. Agent 모드: 대화하며 코드 작업
cursor

You: user.js에 validate 함수 추가해줘
Agent: [파일 생성/수정]
Agent: [테스트 실행]

# 2. Shell Mode: 대화 중 명령어 실행
You: !npm test
→ 테스트 실행 결과 표시

You: !git status
→ Git 상태 표시
```

**차이점**:

| 기능            | Copilot CLI | Cursor CLI |
| --------------- | ----------- | ---------- |
| **명령어 제안** | ✅          | ✅         |
| **코드 작업**   | ❌ IDE 필요 | ✅ CLI에서 |
| **대화형 세션** | ❌          | ✅         |
| **Shell Mode**  | ❌          | ✅ `!` 명령|

---

## 💡 Shell Mode

### Shell Mode란?

CLI Agent와 대화하는 중에 `!`로 시작하는 명령어를 실행하여 빠르게 작업할 수 있는 기능입니다.

```bash
cursor

You: 로그인 기능 추가해줘
Agent: [코드 작성 중...]

You: !npm test        # Shell Mode로 테스트 실행
→ 테스트 결과 표시

You: 테스트 실패한 부분 수정해줘
Agent: [수정 중...]

You: !git diff        # Shell Mode로 변경사항 확인
→ diff 결과 표시
```

### Shell Mode 특징

- **빠른 실행**: 대화 중단 없이 명령어 실행
- **컨텍스트 유지**: 명령어 결과가 대화에 포함됨
- **안전 장치**: 위험한 명령은 실행 전 확인
- **제한사항**: 30초 타임아웃, 대화형 명령 불가

### 사용 예시

```bash
# 파일 확인
You: !ls -la

# 테스트 실행
You: !npm test

# Git 상태
You: !git status

# 빌드
You: !npm run build

# 환경 확인
You: !node --version
```

### 제한사항

```bash
# ❌ 안 되는 것들
!npm start           # 서버 실행 (계속 실행됨)
!vim file.js         # 대화형 에디터
!read input          # 입력 대기

# ✅ 되는 것들
!npm test            # 짧은 명령
!git status          # 상태 확인
!cat file.js         # 파일 읽기
```

참고: [Shell Mode 공식 문서](https://cursor.com/docs/cli/shell-mode)

---

## 🚀 실습 프로젝트

### Project 1: CLI Agent 기본 (예정)

### Project 2: 터미널 개발 (예정)

※ 프로젝트는 추후 추가 예정입니다.

---

## ⏭ 다음 장

[6장: Git Worktree - 독립 환경 구성](../session-06/README.md)

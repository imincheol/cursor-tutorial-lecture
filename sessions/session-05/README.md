# 5장: CLI Agent - 터미널에서 개발

> **IDE 없이 터미널에서도 Agent를 사용할 수 있습니다**

## 📝 강의 개요

안녕하세요. 이번 장에서는 **CLI Agent**를 배웁니다.

지금까지 배운 기능들은 모두 IDE 안에서 동작했습니다. 하지만 SSH 접속, CI/CD 파이프라인 등 IDE를 사용할 수 없는 상황이 자주 있습니다.

**학습 목표**:
- CLI Agent 설치 및 실행
- 터미널에서 코드 작업
- SSH/CI/CD 환경 활용

**예상 소요 시간**: 30분

---

## 🎯 Copilot CLI vs Cursor CLI Agent

### Copilot CLI

```bash
# 명령어 생성만 가능
gh copilot suggest "파일 목록 보기"
→ ls -la

# 코드 작업은 IDE로 돌아가야 함
```

### Cursor CLI Agent

```bash
# 터미널에서 직접 코드 작업 가능
cursor-agent "user.js에 validate 함수 추가해줘"
→ 파일 생성, 수정, 테스트 실행 모두 가능
```

---

## 🚀 실습 프로젝트

### Project 1: CLI Agent 기본 (예정)
### Project 2: 터미널 개발 (예정)

※ 프로젝트는 추후 추가 예정입니다.

---

## ⏭ 다음 장

[6장: Git Worktree - 독립 환경 구성](../session-06/README.md)

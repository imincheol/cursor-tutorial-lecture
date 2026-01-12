# 🤖 4교시 실습: CLI 모드 - Worktree Multi-Agent

> 📚 **공식 문서**: https://docs.cursor.com/configuration/worktrees

---

## Worktree Multi-Agent 개념

```
IDE Multi-Agent:
  ⚠️ 같은 브랜치 → 충돌 가능

CLI + Worktree:
  ✅ 독립 환경 → 충돌 없음
```

---

## Worktree 설정

### 생성

```bash
# 현재 위치: /my-project

# 실험 1
git worktree add ../my-project-exp1 -b experiment-1

# 실험 2
git worktree add ../my-project-exp2 -b experiment-2

# 확인
git worktree list
```

### 각 터미널에서 Agent

**터미널 1:**
```bash
cd ../my-project-exp1
cursor agent "useReducer로 리팩토링해줘"
```

**터미널 2:**
```bash
cd ../my-project-exp2
cursor agent "Custom Hook으로 리팩토링해줘"
```

### 결과 비교

```bash
diff -r my-project-exp1/src my-project-exp2/src
```

### 정리

```bash
# 최선 선택 후 merge
git merge experiment-1

# Worktree 삭제
git worktree remove ../my-project-exp1
git worktree remove ../my-project-exp2
git branch -d experiment-1 experiment-2
```

---

## 3개 접근법 비교 예시

```bash
git worktree add ../proj-reducer -b try-reducer
git worktree add ../proj-hook -b try-hook
git worktree add ../proj-zustand -b try-zustand

# 터미널 3개에서 각각 실행
```

---

## IDE vs CLI Multi-Agent

| 항목 | IDE | CLI + Worktree |
|------|-----|----------------|
| 같은 파일 수정 | ⚠️ 충돌 | ✅ 독립 |
| Visual Editor | ✅ | ❌ |
| 적합 상황 | UI, 다른 파일 | 여러 접근법 비교 |

---

## 실습 과제

1. [ ] Worktree 2개 생성
2. [ ] 각 터미널에서 다른 방식으로 Agent 실행
3. [ ] 결과 비교
4. [ ] 정리 (worktree 삭제)

---

## 전체 공식 문서

| 주제 | 링크 |
|------|------|
| Cursor 문서 | https://docs.cursor.com |
| CLI | https://docs.cursor.com/cli/overview |
| Agent | https://docs.cursor.com/agent/overview |
| Rules | https://docs.cursor.com/context/rules |
| Hooks | https://docs.cursor.com/agent/hooks |
| Browser | https://docs.cursor.com/agent/browser |
| Debug Mode | https://docs.cursor.com/agent/debug-mode |
| Worktrees | https://docs.cursor.com/configuration/worktrees |

---

**[← 4교시 강의](../../curriculum/04-session.md)** | **[← 3교시 실습](../03-cli-shell/README.md)** | **[← 개요](../../curriculum/00-overview.md)**

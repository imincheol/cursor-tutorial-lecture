# 4교시: Multi-Agent & 오케스트레이션

## 📋 목차

- [학습 목표](#학습-목표)
- [교재 내용](#교재-내용)
- [실습 프로젝트](#실습-프로젝트)
- [학습 순서](#학습-순서)

---

## 🎯 학습 목표

이 교시를 마치면 다음을 할 수 있습니다:

- [ ] Worktree로 독립 Multi-Agent 환경 구성
- [ ] 오케스트레이션 개념 이해
- [ ] 여러 접근법 동시 비교
- [ ] IDE + CLI 통합 워크플로우

**소요 시간**: 50분

---

## 📚 교재 내용

### 1. Worktree Multi-Agent (25분)

#### 발전 경로
```
Claude Code (CLI)
  ↓
Cursor Agent (CLI + IDE)
  ↓
Worktree Multi-Agent (수동 오케스트레이션) ← 이 교시!
  ↓
OpenCode (자동 오케스트레이션)
  ↓
Oh My OpenCode (Workflow 기반)
```

#### Worktree 기본
```bash
# Worktree 생성
git worktree add ../feature-a main

# 목록 확인
git worktree list

# 제거
git worktree remove ../feature-a
```

#### Multi-Agent 활용
- 여러 접근법 동시 시도
- 독립적인 실험
- 결과 비교 및 선택

### 2. 오케스트레이션의 진화 (15분)

#### 수동 오케스트레이션 (현재)
- **당신이 오케스트레이터**
- 접근법 결정
- Worktree 생성
- 결과 비교

#### 자동 오케스트레이션 (OpenCode)
- **AI가 오케스트레이터**
- 자동으로 여러 접근법 시도
- 자동으로 비교 및 선택

#### Workflow 기반 (Oh My OpenCode)
- **각 Worktree = Workflow (역할)**
- `planning/`: 기획 Workflow
- `design/`: 디자인 Workflow
- `markup/`: 마크업 Workflow
- `frontend/`: 프론트엔드 Workflow
- `qa/`: QA Workflow

**스마트 할당**:
- 신규 페이지: planning → design → markup → frontend → qa
- 버튼 문구 변경: planning → frontend (나머지 스킵)

### 3. IDE + CLI 통합 (10분)

#### 시나리오
```
IDE (main)
  └─ 메인 작업 진행

Terminal 1 (worktree-1)
  └─ 조사 작업

Terminal 2 (worktree-2)
  └─ 실험 작업
```

#### 3개의 독립적인 대화
- 각각 다른 컨텍스트
- 동시 진행
- 결과 통합

---

## 🚀 실습 프로젝트

### Project 1: worktree-basic
**목표**: Worktree 기본 사용법

**실습 내용**:
1. Worktree 생성
2. 독립적인 브랜치 작업
3. Worktree 간 이동
4. 결과 병합

**소요 시간**: 10분

---

### Project 2: multi-approach
**목표**: 여러 접근법 동시 비교

**실습 내용**:
1. 3개 Worktree 생성
2. 각각 다른 방식으로 구현
   - Approach A: 클래스 기반
   - Approach B: 함수형
   - Approach C: 하이브리드
3. 결과 비교
4. 최적 선택

**소요 시간**: 20분

---

### Project 3: ide-cli-integration
**목표**: IDE + CLI 통합 워크플로우

**실습 내용**:
1. IDE에서 메인 작업
2. Terminal 1에서 라이브러리 조사
3. Terminal 2에서 대안 구현
4. 결과 통합

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 교재 읽기 (15분)
1. Worktree 개념 이해
2. 오케스트레이션 진화 파악
3. IDE + CLI 통합 이해

### Step 2: Worktree 기본 (10분)
1. **Project 1**: worktree-basic (10분)

### Step 3: Multi-Agent 실습 (40분)
1. **Project 2**: multi-approach (20분)
2. **Project 3**: ide-cli-integration (20분)

### Step 4: 복습 및 정리 (10분)
- [ ] Worktree 사용법 숙지
- [ ] 오케스트레이션 개념 이해
- [ ] IDE + CLI 통합 경험

---

## 💡 핵심 포인트

### Worktree Multi-Agent
- ✅ 독립 환경
- ✅ 동시 작업
- ✅ 결과 비교

### 오케스트레이션
- ✅ 수동 (현재): 당신이 결정
- ✅ 자동 (미래): AI가 결정
- ✅ Workflow (미래): 역할 기반

---

## 🔗 참고 자료

- [Git Worktree 문서](https://git-scm.com/docs/git-worktree)
- [전체 커리큘럼](../../curriculum/04-session.md)

---

## ⏭ 다음 교시

[5교시: 반복 작업 자동화](../session-05/README.md)

**4교시를 완료하면 의사결정 속도가 3배 빨라집니다!** 🎉

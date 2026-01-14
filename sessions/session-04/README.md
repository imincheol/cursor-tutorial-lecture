# 4교시: Multi-Agent & Worktree

## 📋 목차

- [학습 목표](#학습-목표)
- [교재 내용](#교재-내용)
- [실습 프로젝트](#실습-프로젝트)
- [학습 순서](#학습-순서)

---

## 🎯 학습 목표

이 교시를 마치면 다음을 할 수 있습니다:

- [ ] Worktree로 독립 환경 구성
- [ ] 여러 Agent 동시 실행
- [ ] 결과 비교 및 통합
- [ ] IDE + CLI 통합 워크플로우

**소요 시간**: 50분

---

## 📚 교재 내용

### 1. Worktree 기본 (15분)

#### Worktree란?
- Git의 기능으로 하나의 저장소에서 여러 작업 디렉토리 생성
- 각 Worktree는 독립적인 브랜치
- 동시에 여러 작업 가능

#### 기본 명령어
```bash
# Worktree 생성
git worktree add ../feature-a main

# 목록 확인
git worktree list

# 제거
git worktree remove ../feature-a
```

### 2. Multi-Agent (20분)

#### 개념
- 여러 터미널에서 각각 `cursor-agent` 실행
- 각 Agent는 독립적인 컨텍스트
- 동시에 다른 접근법 시도

#### 활용 시나리오

**시나리오 1: 여러 접근법 비교**
```bash
# Worktree 1: 클래스 기반
cd ../approach-class && cursor-agent

# Worktree 2: 함수형
cd ../approach-functional && cursor-agent

# Worktree 3: 하이브리드
cd ../approach-hybrid && cursor-agent

# 결과 비교 후 최적 선택
```

**시나리오 2: 독립적인 실험**
```bash
# Worktree 1: 라이브러리 A 사용
cd ../experiment-a && cursor-agent

# Worktree 2: 라이브러리 B 사용
cd ../experiment-b && cursor-agent

# 성능/호환성 비교
```

### 3. IDE + CLI 통합 (15분)

#### 통합 워크플로우
```
IDE (main 브랜치)
  └─ 메인 작업 진행

Terminal 1 (worktree-research)
  └─ 라이브러리 조사

Terminal 2 (worktree-experiment)
  └─ 대안 구현 실험
```

#### 장점
- 메인 작업 중단 없이 조사/실험
- 각각 독립적인 대화 컨텍스트
- 필요한 것만 메인에 병합

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
3. 각 Worktree에서 Agent 실행
4. 결과 비교 및 최적 선택

**소요 시간**: 20분

---

### Project 3: ide-cli-integration
**목표**: IDE + CLI 통합 워크플로우

**실습 내용**:
1. IDE에서 메인 작업
2. Terminal 1: Worktree로 라이브러리 조사
3. Terminal 2: Worktree로 대안 구현
4. 결과 통합

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 교재 읽기 (15분)
1. Worktree 개념 이해
2. Multi-Agent 활용법
3. IDE + CLI 통합

### Step 2: 기본 실습 (10분)
1. **Project 1**: worktree-basic (10분)

### Step 3: 심화 실습 (40분)
1. **Project 2**: multi-approach (20분)
2. **Project 3**: ide-cli-integration (20분)

### Step 4: 복습 (10분)
- [ ] Worktree 사용법 숙지
- [ ] Multi-Agent 활용 가능
- [ ] IDE + CLI 통합 경험

---

## 💡 핵심 포인트

### Worktree
- ✅ 독립적인 작업 디렉토리
- ✅ 동시에 여러 브랜치 작업
- ✅ 메인 작업 중단 없음

### Multi-Agent
- ✅ 각 Agent는 독립적
- ✅ 동시에 다른 접근법 시도
- ✅ 결과 비교 후 선택

### 주의사항
- ❌ IDE Multi-Agent: 같은 파일 충돌
- ✅ CLI Multi-Agent: Worktree로 격리

---

## 🔗 참고 자료

- [Git Worktree 문서](https://git-scm.com/docs/git-worktree)
- [Cursor CLI](https://cursor.com/docs/cli/overview)

---

## ⏭ 다음 교시

[5교시: 반복 작업 자동화](../session-05/README.md)

---

## 📚 심화 학습

더 깊은 오케스트레이션 개념을 배우고 싶다면:

**[Advanced: 오케스트레이션 전략](./ADVANCED_ORCHESTRATION.md)**

**4교시를 완료하면 여러 Agent를 동시에 활용할 수 있습니다!** 🎉

# 3교시: CLI & Shell Mode

## 📋 목차

- [학습 목표](#학습-목표)
- [교재 내용](#교재-내용)
- [실습 프로젝트](#실습-프로젝트)
- [학습 순서](#학습-순서)

---

## 🎯 학습 목표

이 교시를 마치면 다음을 할 수 있습니다:

- [ ] Cursor CLI 설치 및 기본 사용
- [ ] 대화형 Agent 모드로 코드 작업
- [ ] Shell Mode로 명령어 생성
- [ ] 두 모드의 차이점 이해

**소요 시간**: 50분

---

## 📚 교재 내용

### 1. CLI 설치 (10분)

#### 설치 방법
```bash
# macOS/Linux
curl -fsSL https://cursor.com/install.sh | sh

# 또는 Cursor IDE에서
# Settings → Advanced → Install CLI
```

#### 기본 명령어
```bash
cursor-agent          # 대화형 모드
cursor-agent shell    # Shell 모드
cursor-agent --help   # 도움말
```

### 2. 대화형 Agent 모드 (15분)

#### 특징
- 터미널에서 대화하듯이 코드 작업
- 컨텍스트 유지
- 파일 직접 수정
- 슬래시 명령 (`/models`, `/rules`, `/compress`)

#### 활용 시나리오
```
User: 사용자 인증 기능을 추가해줘
Agent: [파일 수정 제안]
User: 좋아, 이제 테스트도 작성해줘
Agent: [테스트 파일 생성]
```

### 3. Shell Mode (20분)

#### 특징
- 자연어 → 터미널 명령어 변환
- **명령어만 생성** (파일 수정 X)
- 실행 전 확인
- 안전한 명령어 생성

#### 활용 시나리오
```bash
# 파일 찾기
$ cursor-agent shell "최근 수정된 JS 파일 5개 찾아줘"
→ find . -name "*.js" -type f -mtime -7 | head -5

# 프로세스 관리
$ cursor-agent shell "포트 3000을 사용하는 프로세스 종료"
→ lsof -ti:3000 | xargs kill -9

# Git 작업
$ cursor-agent shell "어제 커밋된 파일 목록"
→ git log --since="yesterday" --name-only --pretty=format:
```

### 4. 두 모드 비교 (5분)

| 특징 | 대화형 Agent | Shell Mode |
|------|-------------|-----------|
| **목적** | 코드 작업 | 명령어 생성 |
| **파일 수정** | ✅ 가능 | ❌ 불가 |
| **컨텍스트** | ✅ 유지 | ❌ 단발성 |
| **대화** | ✅ 연속 | ❌ 단일 |
| **활용** | 개발 작업 | 터미널 작업 |

---

## 🚀 실습 프로젝트

### Project 1: cli-basic
**목표**: CLI 설치 및 기본 사용

**실습 내용**:
1. CLI 설치
2. 대화형 모드 실행
3. 간단한 파일 생성
4. 슬래시 명령 사용

**소요 시간**: 10분

---

### Project 2: shell-file-ops
**목표**: Shell Mode로 파일 작업

**실습 내용**:
1. 특정 확장자 파일 찾기
2. 파일 크기 확인
3. 파일 권한 변경
4. 디렉토리 정리

**소요 시간**: 15분

---

### Project 3: shell-git-ops
**목표**: Shell Mode로 Git 작업

**실습 내용**:
1. 최근 커밋 조회
2. 브랜치 관리
3. 변경사항 확인
4. 로그 분석

**소요 시간**: 25분

---

## 📖 학습 순서

### Step 1: 교재 읽기 (10분)
1. CLI 설치 방법 확인
2. 대화형 모드 이해
3. Shell Mode 이해
4. 두 모드 차이 파악

### Step 2: CLI 설치 및 기본 (10분)
1. **Project 1**: cli-basic (10분)

### Step 3: Shell Mode 실습 (40분)
1. **Project 2**: shell-file-ops (15분)
2. **Project 3**: shell-git-ops (25분)

### Step 4: 복습 및 정리 (10분)
- [ ] CLI 설치 완료
- [ ] 대화형 모드 사용 가능
- [ ] Shell Mode 활용 가능
- [ ] 두 모드 구분 가능

---

## 💡 핵심 포인트

### 대화형 Agent
- ✅ 대화하듯이 코드 작업
- ✅ 컨텍스트 유지
- ✅ 파일 직접 수정

### Shell Mode
- ✅ 명령어만 생성
- ✅ 파일 수정 안 함
- ✅ 안전한 실행

---

## 🔗 참고 자료

- [Cursor CLI 문서](https://cursor.com/docs/cli)
- [CLI 모드 상세 가이드](../../docs/guides/CLI_MODES_EXPLAINED.md)
- [대화형 모드 가이드](../../docs/guides/INTERACTIVE_MODE_GUIDE.md)
- [전체 커리큘럼](../../curriculum/03-session.md)

---

## ⏭ 다음 교시

[4교시: Multi-Agent & 오케스트레이션](../session-04/README.md)

**3교시를 완료하면 터미널 작업이 80% 자동화됩니다!** 🎉

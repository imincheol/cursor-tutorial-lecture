# 💻 3교시 실습: CLI 모드 - Shell Mode

> 📚 **공식 문서**
> - CLI Overview: https://cursor.com/docs/cli/overview
> - Shell Mode: https://cursor.com/docs/cli/shell-mode

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

### 🎯 대화형 모드 (실전 추천!)

```bash
# 대화형 Agent 시작
cursor agent

# 대화하듯이 계속 이어가며 작업!
> 이 프로젝트 구조 설명해줘

Agent: src/ 폴더에 3개 주요 디렉토리가...

> components 폴더 분석해줘

Agent: 15개 컴포넌트가 있습니다...

> 사용되지 않는 컴포넌트 찾아줘

Agent: 3개 컴포넌트가 사용되지 않습니다...

> 삭제해도 될까?

Agent: 네, 안전하게 삭제 가능합니다...
```

**언제 사용?** ✅ 복잡한 문제 해결, 코드 탐색, 리팩토링

### 🤖 비대화형 모드 (자동화/스크립트용)

```bash
# 한 번 실행하고 끝
cursor agent "이 프로젝트 설명해줘"

# 스크립트에서 사용
for dir in */; do
  cursor agent "이 폴더의 README 생성해줘"
done
```

**언제 사용?** ✅ 반복 작업, CI/CD, 간단한 일회성 작업

### 기타 명령어

```bash
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

### 🔥 실전 Shell Mode 시나리오들

#### 파일 시스템 작업
```
> 최근 일주일 동안 수정된 모든 TypeScript 파일 찾아서 크기순 정렬
AI: find . -name "*.ts" -o -name "*.tsx" -mtime -7 | xargs ls -lh | sort -k5 -hr

> node_modules 제외하고 프로젝트 전체에서 TODO 주석 찾아줘
AI: grep -r "TODO\|FIXME\|XXX" --exclude-dir=node_modules .

> 큰 파일들(1MB 이상) 찾아서 압축 가능성 분석
AI: find . -type f -size +1M -exec ls -lh {} \; | sort -k5 -hr
```

#### 패키지 & 의존성 관리
```
> package.json에서 사용하지 않는 패키지 찾아줘
AI: npx depcheck

> 보안 취약점이 있는 패키지 검사
AI: npm audit --audit-level high

> 번들 크기 분석해서 최적화 방안 제안
AI: npx webpack-bundle-analyzer build/static/js/*.js

> 타입 정의 누락된 패키지 찾아서 설치
AI: npx typesync
```

#### 프로세스 & 포트 관리
```
> 3000번 포트와 관련된 모든 프로세스 정보
AI: lsof -i :3000

> 메모리 많이 사용하는 Node.js 프로세스들
AI: ps aux | grep node | sort -k4 -nr | head -5

> 개발 서버들 한 번에 종료 (3000, 3001, 8080 포트)
AI: for port in 3000 3001 8080; do lsof -ti:$port | xargs kill -9 2>/dev/null; done
```

#### Git 고급 작업
```
> 브랜치별 마지막 커밋과 저자 정보
AI: git branch -v

> 특정 파일의 변경 히스토리와 누가 수정했는지
AI: git log --follow --pretty=format:"%h %ad %an %s" --date=short -- [파일명]

> 현재 브랜치에서만 존재하는 커밋들
AI: git log --oneline main..HEAD

> 병합 충돌이 있었던 파일들 최근 10개
AI: git log --oneline --grep="Merge" -10 | grep -E "(conflict|충돌)"
```

#### 데이터베이스 & API 작업
```
> 로컬 PostgreSQL 컨테이너 상태 확인
AI: docker ps | grep postgres

> API 엔드포인트 응답 시간 측정
AI: curl -w "@curl-format.txt" -o /dev/null -s http://localhost:3000/api/users

> 데이터베이스 마이그레이션 상태 확인
AI: npx prisma migrate status
```

#### 빌드 & 배포 관련
```
> 빌드 시간 측정하고 캐시 히트율 확인
AI: time npm run build && npx tsc --showConfig

> 환경별 설정 파일 비교
AI: diff .env.local .env.production

> Docker 이미지 크기 최적화 분석
AI: docker images | grep myapp | sort -k7 -hr
```

#### 시스템 모니터링
```
> 디스크 사용량 상위 디렉토리들
AI: du -h --max-depth=1 | sort -hr

> CPU/메모리 사용량 모니터링 (5초마다)
AI: top -l 5 | head -20

> 네트워크 연결 상태 확인
AI: netstat -tlnp | grep LISTEN
```

### 고급 Shell Mode 기능

#### 명령어 체이닝
```
> 빌드하고 테스트 통과하면 커밋
AI: npm run build && npm test && git add . && git commit -m "Build and test passed"

> 파일 변경 감지해서 자동으로 작업
AI: fswatch -o . | xargs -n1 -I{} sh -c 'echo "File changed, running tests..." && npm test'
```

#### 비대화형 고급 사용
```
# JSON 분석 결과 얻기
cursor agent -p --output-format json "프로젝트 구조 분석해줘"

# 스크립트에 활용
cursor agent -p "빌드 최적화 명령어 알려줘" > optimize.sh && chmod +x optimize.sh

# CI/CD 파이프라인에 통합
cursor agent -p "이 PR의 변경사항 요약해줘" >> pr-summary.md
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

### 🎯 기본 실습 0: 대화형 모드의 힘 (필수!)

**목표**: 비대화형과 대화형의 차이 체험

#### 시나리오: 프로젝트에서 사용되지 않는 컴포넌트 찾기

**방법 1: 비대화형 (한 번에 완벽한 질문 필요)**
```bash
cursor agent "src/components 폴더의 모든 컴포넌트를 분석하고, import되지 않는 컴포넌트를 찾아서 삭제해도 안전한지 확인하고, 각 컴포넌트의 의존성 그래프를 그려줘"
```
❌ 질문이 복잡하고, 결과가 마음에 안 들면 처음부터 다시!

**방법 2: 대화형 (단계별로 진행)**
```bash
cursor agent

> src/components 폴더에 컴포넌트가 몇 개야?

Agent: 15개 컴포넌트가 있습니다.

> 그 중에 다른 곳에서 import 안 되는 컴포넌트 찾아줘

Agent: 3개 컴포넌트가 사용되지 않습니다:
  - OldButton.tsx
  - DeprecatedModal.tsx
  - TestComponent.tsx

> TestComponent는 테스트용이니까 남겨두고, 나머지 2개 삭제해도 안전해?

Agent: 네, 안전합니다. 두 컴포넌트 모두...

> 그럼 삭제해줘

Agent: 2개 파일을 삭제했습니다.

> git commit 메시지 작성해줘

Agent: "chore: Remove unused components (OldButton, DeprecatedModal)"
```
✅ 자연스럽고, 중간에 조정 가능, 컨텍스트 유지!

---

### 기본 실습 (필수)
1. [ ] CLI 설치 및 버전 확인
2. [ ] **대화형 모드로 프로젝트 탐색** (위 시나리오 따라하기)
3. [ ] Shell Mode로 기본 명령어 생성 (파일 찾기, 패키지 관리)
4. [ ] 비대화형 모드 테스트 (스크립트용)

### 🔥 보너스 실습 (선택)

#### 초급 보너스
5. [ ] **파일 시스템 마스터**
   - 대용량 파일 찾기, 최근 수정 파일 분석
   - 프로젝트 전체 grep 검색

6. [ ] **패키지 최적화 전문가**
   - 보안 취약점 검사, 미사용 패키지 정리
   - 번들 크기 분석

7. [ ] **프로세스 관리 마스터**
   - 포트 충돌 해결, 메모리 누수 프로세스 찾기
   - 개발 서버 일괄 관리

#### 중급 보너스
8. [ ] **Git 고급 워크플로우**
   - 브랜치 전략 분석, 충돌 파일 추적
   - 기여도 분석

9. [ ] **데이터베이스 운영**
   - 마이그레이션 상태 확인, 백업 자동화
   - 성능 모니터링

10. [ ] **빌드/배포 자동화**
    - 빌드 시간 측정, 환경별 설정 비교
    - Docker 최적화

#### 고급 보너스
11. [ ] **스크립트 자동화**
    - 명령어 체이닝으로 복합 작업 자동화
    - 파일 변경 감지 자동화

12. [ ] **CI/CD 통합**
    - 비대화형 모드로 PR 분석 자동화
    - 빌드 결과 리포팅

13. [ ] **시스템 모니터링 구축**
    - 리소스 사용량 모니터링
    - 알림 시스템 구축

14. [ ] **Shell Mode API 개발**
    - 자주 사용하는 명령어들 스크립트화
    - 팀 전체 공유

### 📊 실습 완료도 체크

**기본 실습 (4/4) 완료 시:**
- ✅ CLI 기본 사용법 숙지
- ✅ 간단한 터미널 작업 자동화 가능

**보너스 실습 (5/10) 완료 시:**
- 🔥 고급 터미널 작업 마스터
- 🔥 개발 워크플로우 완전 자동화 가능

**전체 실습 (10/14) 완료 시:**
- 🚀 Terminal Automation 마스터 레벨
- 🚀 DevOps 수준의 자동화 구축 가능

---

**[← 3교시 강의](../../curriculum/03-session.md)** | **[← 2교시 실습](../02-ide-debug-visual/README.md)** | **[4교시 실습 →](../04-cli-multi-agent/README.md)**

# Project 1: Built-in Subagents 체험

> **Cursor가 기본 제공하는 3가지 Subagents를 실습합니다**

## 📝 실습 개요

이 실습에서는:
1. Explore Subagent로 코드베이스 탐색
2. Bash Subagent로 복잡한 명령어 실행
3. Browser Subagent로 웹 테스트
4. 자동 분배 관찰
5. 각 Subagent의 역할 이해

**공식 문서**:
- [Subagents](https://cursor.com/docs/context/subagents)
- [Built-in Subagents](https://cursor.com/docs/context/subagents#built-in-subagents)

---

## 🎯 실습 목표

- Built-in Subagents의 자동 사용 체험
- 각 Subagent의 역할과 장점 이해
- 컨텍스트 격리의 효과 확인
- 병렬 실행의 효율성 체험

---

## 📚 실습 단계

### 1단계: Explore Subagent 체험

Explore Subagent는 **코드베이스 탐색**에 특화되어 있습니다.

#### 1-1. 코드 검색 작업

**Agent 모드에서 요청**:
```
이 Cursor 튜토리얼 프로젝트에서 "Subagents"와 관련된 모든 파일을 찾아줘.
각 파일에서 어떤 내용을 다루는지 요약해줘.
```

**관찰 포인트**:
- Agent가 Explore Subagent를 자동으로 사용하는가?
- 여러 파일을 병렬로 검색하는가?
- 중간 출력이 메인 컨텍스트를 오염시키지 않는가?
- 최종 요약만 깔끔하게 전달되는가?

**예상 동작**:
```
Agent: [Explore Subagent 사용]
  → 프로젝트 전체 파일 스캔
  → "Subagents" 키워드 검색
  → 관련 파일 병렬 분석
  → 요약 결과만 전달

결과:
- session-08-subagents/README.md: Subagents 개념 설명
- session-08-subagents/projects/01-subagents-builtin/README.md: Built-in 실습
- session-08-subagents/projects/02-subagents-custom/README.md: Custom 실습
```

#### 1-2. 패턴 분석 작업

**Agent 모드에서 요청**:
```
이 프로젝트에서 사용된 모든 실습 프로젝트의 구조를 분석해줘.
공통 패턴이 있는지 찾아줘.
```

**관찰 포인트**:
- 여러 디렉토리를 동시에 탐색하는가?
- 패턴을 자동으로 추출하는가?
- 빠른 모델을 사용하여 비용을 절감하는가?

---

### 2단계: Bash Subagent 체험

Bash Subagent는 **셸 명령어 실행**에 특화되어 있습니다.

#### 2-1. 프로젝트 정보 수집

**Agent 모드에서 요청**:
```
이 프로젝트의 구조를 분석해줘:
1. 총 파일 개수
2. 각 세션별 파일 개수
3. Markdown 파일 개수
4. 프로젝트 디렉토리 개수
```

**관찰 포인트**:
- Agent가 Bash Subagent를 자동으로 사용하는가?
- 여러 명령어를 순차적으로 실행하는가?
- 명령어 출력이 격리되는가?
- 최종 결과만 요약되어 전달되는가?

**예상 동작**:
```
Agent: [Bash Subagent 사용]
  → find . -type f | wc -l
  → find ./sessions -mindepth 1 -maxdepth 1 -type d
  → find . -name "*.md" | wc -l
  → find . -name "projects" -type d | wc -l
  → 결과 요약 전달

결과:
- 총 파일: 150개
- 세션: 11개
- Markdown: 85개
- 프로젝트: 25개
```

#### 2-2. Git 정보 확인

**Agent 모드에서 요청**:
```
이 프로젝트의 Git 상태를 확인해줘:
1. 현재 브랜치
2. 최근 5개 커밋 메시지
3. 변경된 파일 목록
```

**관찰 포인트**:
- Git 명령어 출력이 깔끔하게 정리되는가?
- 불필요한 로그가 메인 컨텍스트에 나타나지 않는가?

---

### 3단계: Browser Subagent 체험

Browser Subagent는 **브라우저 제어**에 특화되어 있습니다.

💡 **참고**: Browser Subagent는 MCP 도구가 필요합니다. 이 실습은 선택 사항입니다.

#### 3-1. 로컬 웹 서버 테스트 (선택)

**사전 준비**:
간단한 HTML 파일을 만들어 로컬 서버로 실행합니다.

**Agent 모드에서 요청**:
```
간단한 HTML 페이지를 만들고 로컬 서버로 실행해줘.
그리고 브라우저로 열어서 페이지가 제대로 렌더링되는지 확인해줘.
```

**관찰 포인트**:
- Agent가 Browser Subagent를 자동으로 사용하는가?
- DOM 스냅샷이 메인 컨텍스트를 오염시키지 않는가?
- 관련 정보만 필터링되어 전달되는가?

**예상 동작**:
```
Agent: [파일 생성 및 서버 실행]
  → index.html 생성
  → python -m http.server 8000 실행
  
Agent: [Browser Subagent 사용]
  → 브라우저 열기
  → localhost:8000 접속
  → 페이지 렌더링 확인
  → 스크린샷 캡처
  → 결과 요약 전달

결과:
- 페이지가 정상적으로 렌더링됨
- 제목: "Test Page"
- 본문 내용 확인됨
```

---

### 4단계: Built-in Subagents 조합

여러 Built-in Subagents를 조합하여 복잡한 작업을 수행합니다.

#### 4-1. 프로젝트 분석 및 보고서 생성

**Agent 모드에서 요청**:
```
이 Cursor 튜토리얼 프로젝트를 분석해서 보고서를 만들어줘:

1. 프로젝트 구조 (Explore)
2. 파일 통계 (Bash)
3. 각 세션의 주요 내용 (Explore)
4. Git 히스토리 요약 (Bash)

보고서를 Markdown 형식으로 작성해줘.
```

**관찰 포인트**:
- 여러 Subagent가 자동으로 조합되는가?
- 각 Subagent가 독립적으로 작업하는가?
- 결과가 자연스럽게 통합되는가?

**예상 동작**:
```
Agent: [여러 Built-in Subagents 조합]
  
  1. Explore Subagent:
     → 프로젝트 구조 분석
     → 각 세션 README 읽기
     → 주요 내용 추출
  
  2. Bash Subagent:
     → 파일 통계 수집
     → Git 로그 확인
     → 커밋 히스토리 분석
  
  3. 결과 통합:
     → Markdown 보고서 생성
     → 깔끔하게 정리된 최종 결과
```

---

## ✅ 실습 체크리스트

### Explore Subagent
- [ ] 코드 검색 작업 완료
- [ ] 패턴 분석 작업 완료
- [ ] 병렬 검색 동작 확인
- [ ] 컨텍스트 격리 확인

### Bash Subagent
- [ ] 프로젝트 정보 수집 완료
- [ ] Git 정보 확인 완료
- [ ] 명령어 출력 격리 확인
- [ ] 결과 요약 확인

### Browser Subagent (선택)
- [ ] 로컬 웹 서버 테스트 완료
- [ ] DOM 필터링 확인
- [ ] 스크린샷 캡처 확인

### Built-in Subagents 조합
- [ ] 프로젝트 분석 보고서 생성 완료
- [ ] 여러 Subagent 조합 확인
- [ ] 결과 통합 확인

---

## 💡 학습 포인트

### Built-in Subagents의 장점

#### 1. 컨텍스트 격리
```
메인 Agent:
  - 깔끔한 컨텍스트 유지
  - 중요한 결정에 집중

Subagent:
  - 노이즈가 많은 작업 처리
  - 요약된 결과만 전달
```

#### 2. 병렬 실행
```
Explore Subagent:
  - 여러 파일 동시 검색
  - 빠른 모델로 비용 절감
  - 전체 시간 단축
```

#### 3. 전문화
```
각 Subagent는 특정 작업에 최적화:
  - Explore: 코드베이스 탐색
  - Bash: 명령어 실행
  - Browser: 웹 테스트
```

### 언제 자동으로 사용되는가?

**Explore Subagent**:
- "모든 파일을 찾아줘"
- "코드베이스를 분석해줘"
- "패턴을 찾아줘"

**Bash Subagent**:
- "파일 개수를 세어줘"
- "Git 로그를 확인해줘"
- "테스트를 실행해줘"

**Browser Subagent**:
- "웹페이지를 열어줘"
- "폼을 테스트해줘"
- "스크린샷을 찍어줘"

### Built-in vs Custom Subagents

| 항목 | Built-in | Custom |
|------|----------|--------|
| **설정** | 자동 | 수동 생성 |
| **사용** | 자동 위임 | 명시적 호출 또는 자동 |
| **용도** | 일반적인 작업 | 프로젝트 특화 작업 |
| **예시** | 탐색, 명령어, 브라우저 | 코드 리뷰, 디버깅 |

---

## 🎓 학습 정리

이 실습을 통해:

- ✅ Explore Subagent로 코드베이스 탐색을 체험했습니다
- ✅ Bash Subagent로 명령어 실행을 체험했습니다
- ✅ Browser Subagent로 웹 테스트를 체험했습니다 (선택)
- ✅ 여러 Built-in Subagents의 조합을 경험했습니다
- ✅ 컨텍스트 격리와 병렬 실행의 장점을 이해했습니다

### 핵심 요약

1. **자동 사용**: Built-in Subagents는 설정 없이 자동으로 사용됨
2. **컨텍스트 격리**: 노이즈가 많은 작업을 격리하여 메인 컨텍스트 보호
3. **병렬 실행**: 여러 작업을 동시에 처리하여 시간 단축
4. **전문화**: 각 Subagent는 특정 작업에 최적화됨

**다음 실습**:

Project 2에서는 Custom Subagents를 직접 만들어봅니다. Code Reviewer, Debugger 등 프로젝트에 특화된 Subagents를 생성하고 활용하는 방법을 배웁니다.

---

## 🔗 관련 자료

- [Cursor Subagents 공식 문서](https://cursor.com/docs/context/subagents)
- [8장 메인 문서](../../README.md)
- [Project 2: Custom Subagent 만들기](../02-subagents-custom/README.md)

# 2교시: Debug Mode & Visual Editor

## 📋 목차

- [학습 목표](#학습-목표)
- [교재 내용](#교재-내용)
- [실습 프로젝트](#실습-프로젝트)
- [학습 순서](#학습-순서)

---

## 🎯 학습 목표

이 교시를 마치면 다음을 할 수 있습니다:

- [ ] Debug Mode로 버그 추적 및 해결
- [ ] Visual Editor로 UI 요소 직접 편집
- [ ] IDE Multi-Agent 주의점 이해

**소요 시간**: 50분

---

## 📚 교재 내용

### 1. Debug Mode (15분)

#### Copilot과의 차이
- **Copilot**: 코드 보고 추측
- **Cursor**: 자동 로그 삽입 → 실행 → 실제 값 확인

#### 동작 방식
1. Agent가 자동으로 로그 삽입
2. 브라우저/앱 실행
3. 실제 값 확인
4. 버그 원인 파악
5. 수정 제안

#### 실전 활용
- 로그인 버그
- API 호출 실패
- 무한 로딩
- 상태 관리 오류

### 2. Visual Editor (20분)

#### 기능
- 브라우저에서 UI 요소 직접 선택
- 실시간 CSS 편집
- Agent에게 수정 요청
- 코드 자동 반영

#### 활용 시나리오
- 버튼 스타일 수정
- 레이아웃 조정
- 색상/간격 변경
- 반응형 디자인

### 3. IDE Multi-Agent 주의점 (15분)

#### 문제점
- 같은 파일 동시 수정 시 충돌
- 컨텍스트 공유 안 됨

#### 해결책
- 다른 파일 작업
- CLI Multi-Agent 사용 (4교시)

---

## 🚀 실습 프로젝트

### Project 1: debug-login-bug
**목표**: Debug Mode로 로그인 버그 해결

**버그 시나리오**:
- 로그인 버튼 클릭 시 아무 반응 없음
- 콘솔에 에러 없음

**실습 내용**:
1. Debug Mode 활성화
2. Agent에게 버그 찾아달라고 요청
3. 자동 로그 삽입 확인
4. 버그 원인 파악
5. 수정 적용

**소요 시간**: 10분

---

### Project 2: debug-api-error
**목표**: API 호출 실패 디버깅

**버그 시나리오**:
- 사용자 목록이 로딩되지 않음
- 네트워크 탭에서 404 에러

**실습 내용**:
1. Debug Mode로 API 호출 추적
2. 요청 URL 확인
3. 응답 데이터 확인
4. 에러 처리 개선

**소요 시간**: 10분

---

### Project 3: visual-button-style
**목표**: Visual Editor로 버튼 스타일 수정

**실습 내용**:
1. Visual Editor 열기
2. 버튼 요소 선택
3. 스타일 변경 (색상, 크기, 간격)
4. Agent에게 수정 요청
5. 코드 반영 확인

**소요 시간**: 10분

---

### Project 4: visual-card-layout
**목표**: Visual Editor로 카드 레이아웃 조정

**실습 내용**:
1. 카드 컴포넌트 선택
2. 레이아웃 변경 (그리드 → 플렉스)
3. 반응형 디자인 적용
4. 간격 및 정렬 조정

**소요 시간**: 20분

---

## 📖 학습 순서

### Step 1: 교재 읽기 (15분)
1. Debug Mode 개념 이해
2. Visual Editor 기능 파악
3. IDE Multi-Agent 주의점 확인

### Step 2: Debug Mode 실습 (20분)
1. **Project 1**: debug-login-bug (10분)
2. **Project 2**: debug-api-error (10분)

### Step 3: Visual Editor 실습 (30분)
1. **Project 3**: visual-button-style (10분)
2. **Project 4**: visual-card-layout (20분)

### Step 4: 복습 및 정리 (10분)
- [ ] Debug Mode 활용법 이해
- [ ] Visual Editor 사용법 숙지
- [ ] 실제 버그 해결 경험

---

## 💡 핵심 포인트

### Debug Mode
- ✅ 자동 로그 삽입
- ✅ 실제 값 확인
- ✅ 추측 → 확인

### Visual Editor
- ✅ UI 직접 선택
- ✅ 실시간 편집
- ✅ 코드 자동 반영

---

## 🔗 참고 자료

- [Cursor Debug Mode 문서](https://cursor.com/docs/debug-mode)
- [Cursor Visual Editor 문서](https://cursor.com/docs/visual-editor)
- [전체 커리큘럼](../../curriculum/02-session.md)

---

## ⏭ 다음 교시

[3교시: CLI & Shell Mode](../session-03/README.md)

**2교시를 완료하면 버그 해결과 UI 편집이 훨씬 빨라집니다!** 🎉

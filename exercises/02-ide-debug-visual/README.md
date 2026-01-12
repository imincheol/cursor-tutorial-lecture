# 🎨 2교시 실습: IDE 모드 - Debug Mode & Visual Editor

> 📚 **공식 문서**
> - Debug Mode: https://docs.cursor.com/agent/debug-mode
> - Browser: https://docs.cursor.com/agent/browser

---

## Debug Mode 실습

### 사용법

프롬프트에 "debug this" 또는 "디버그해줘"

### 예시

```
"로그인 후 대시보드에서 가끔 데이터가 안 보여.

재현:
1. 로그인
2. 대시보드로 이동
3. 10번 중 2-3번 빈 화면

에러 메시지 없음.
디버그해줘."
```

### Agent 작업 흐름

```
1. 관련 파일 분석
2. 의심 지점에 로그 삽입
3. "버그 재현해주세요" 요청
4. 로그 분석 → 원인 파악
5. 수정 제안
```

---

## Visual Editor 실습

### 열기

```
Cmd+Shift+P → "Browser: Open Preview"
```

### 앱 실행

```bash
npm run dev
```

### 요소 선택

```
Browser 패널 상단 → 선택 도구 (커서 아이콘)
→ 수정할 요소 클릭
```

### Agent로 수정

```
요소 선택 후:
"이 버튼 더 둥글게, 그림자 추가해줘"
```

---

## IDE Multi-Agent 주의점

```
⚠️ 같은 브랜치에서 작업
⚠️ 같은 파일 동시 수정 시 충돌

안전한 사용:
- 다른 파일 작업
- 순차적 작업
- 질문/분석만 (수정 X)
```

---

## 실습 과제

1. [ ] Debug Mode로 버그 분석 시도
2. [ ] Visual Editor 열기
3. [ ] 요소 선택 → Agent로 수정
4. [ ] Component Tree 확인

---

**[← 2교시 강의](../../curriculum/02-session.md)** | **[← 1교시 실습](../01-ide-rules-hooks/README.md)** | **[3교시 실습 →](../03-cli-shell/README.md)**

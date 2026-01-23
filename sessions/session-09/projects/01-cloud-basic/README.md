# Project 1: Cloud Agent 기본 사용

> **Cloud Agent의 기본 사용법을 익힙니다**

## 🎯 학습 목표

- Cloud Agent 기본 사용법
- Handoff로 작업 전송
- 웹에서 진행 상황 확인
- 결과 확인 및 적용

**공식 문서**:
- [Cloud Agent](https://cursor.com/docs/cloud-agent)
- [체인지로그 (2026.01.16)](https://cursor.com/changelog)

---

## 🚀 실습 단계

### Step 1: 간단한 작업 Handoff

```bash
$ cursor

You: & README.md를 한국어와 영어 버전으로 만들어줘

Agent: 클라우드로 전송되었습니다.
       작업 ID: abc-123-xyz
       https://cursor.com/agents
```

### Step 2: 웹에서 확인

1. **cursor.com/agents** 접속
2. 진행 중인 작업 확인
3. 실시간 로그 보기

### Step 3: 결과 확인

작업 완료 후:
- 생성된 파일 확인
- 변경사항 리뷰
- 로컬로 pull

---

## ✅ 완료 체크리스트

- [ ] Handoff로 작업 전송
- [ ] 웹에서 진행 상황 확인
- [ ] 결과 확인

---

## 🎓 다음 단계

[Project 2: 장시간 작업 위임 패턴](../02-handoff-workflow/README.md)

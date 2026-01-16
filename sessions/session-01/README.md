# 1장: Copilot과의 공통점

> **Copilot에서 사용하던 기능들을 Cursor에서도 그대로 사용할 수 있습니다**

## 📋 목차

- [강의 개요](#-강의-개요)
- [공통 기능 소개](#-공통-기능-소개)
- [Rules의 한계](#-rules의-한계)
- [실습 프로젝트](#-실습-프로젝트)

---

## 📝 강의 개요

안녕하세요. Copilot을 사용하시던 분들이 Cursor로 넘어오면 가장 먼저 궁금한 것이 "뭐가 다르지?"입니다.

하지만 먼저 **공통점**부터 확인하겠습니다. 대부분의 기능이 동일하기 때문에, Copilot 경험을 Cursor에서 그대로 활용할 수 있습니다.

**학습 목표**:

- Copilot과 Cursor의 공통 기능 이해
- Rules 작성 및 glob 패턴 활용
- Rules의 한계 인식 (다음 장들의 필요성)

**예상 소요 시간**: 30분

---

## 🔄 공통 기능 소개

### 1. Ask, Agent, Plan 모드

```
Copilot: Ask, Agent, Plan
Cursor: Ask, Agent, Plan

→ 완전히 동일합니다!
```

- **Ask**: 질문하고 답변 받기
- **Agent**: 대화하면서 코드 작업
- **Plan**: 계획 세우고 실행

### 2. Rules / Instructions

```
Copilot: .github/copilot-instructions.md
Cursor: .cursorrules

→ 파일 위치만 다르고, 기능은 동일합니다!
```

**공통점**:
- 프로젝트 규칙 설정
- 폴더별 규칙 적용
- glob 패턴 지원

**차이점**:
- Copilot: `.github/copilot-instructions.md`
- Cursor: `.cursorrules`

### 3. 저장된 Prompts / Commands

```
Copilot: 저장된 Prompts
Cursor: 저장된 Commands

→ 자주 쓰는 프롬프트를 저장하는 기능, 동일합니다!
```

---

## ⚠️ Rules의 한계

Rules는 본질적으로 **프롬프트**입니다.

```
.cursorrules에 이렇게 작성해도:

- 항상 TypeScript를 사용하세요
- rm -rf 명령은 절대 사용하지 마세요
```

**문제**:
- AI가 가끔 무시합니다
- "요청"일 뿐, "강제"가 아닙니다
- 위험한 명령도 실행될 수 있습니다

**해결책**:
- 3장에서 배울 **Hooks**를 사용하면 100% 강제할 수 있습니다
- Hooks는 프롬프트가 아닌 **코드**로 제어합니다

---

## 🚀 실습 프로젝트

### [Project 1: Rules 기본](./projects/01-rules-basic/README.md)

**학습 내용**:

- 전역 `.cursorrules` 작성
- 폴더별 `.cursorrules` 작성
- glob 패턴으로 파일 타입별 규칙 적용
- Rules의 한계 경험

**실습 목표**:

Rules의 기본 사용법을 익히고, Copilot과의 유사성을 확인합니다. 하지만 곧 한계도 발견하게 됩니다.

**예상 소요 시간**: 30분

---

## 💡 학습 가이드

### 진행 방법

1. **강의 내용 읽기** (10분)
   - 이 README를 읽으면서 Copilot과 Cursor의 공통점을 확인합니다
   - Rules의 한계를 이해합니다

2. **실습 프로젝트 진행** (20분)
   - Project 1: Rules 기본 사용법 실습
   - Rules의 한계를 직접 경험합니다

### 학습 팁

- Copilot을 사용해보신 분이라면 매우 익숙한 내용입니다
- Rules의 한계를 경험하는 것이 중요합니다
- 3장에서 Hooks로 이 문제를 해결합니다

---

## 📊 학습 정리

이번 장에서 다룬 내용:

- ✅ Copilot과 Cursor의 공통 기능 확인 (Ask, Agent, Plan, Rules)
- ✅ Rules 작성 및 glob 패턴 활용
- ✅ Rules의 한계 인식 (프롬프트는 강제가 아님)

**다음 장 예고**:

2장에서는 Cursor만의 차별화된 기능인 **Debug Mode**를 배웁니다. 추측이 아닌 실행으로 버그를 해결하는 방법을 익힙니다.

---

## ⏭ 다음 장

[2장: Debug Mode - 실행 기반 디버깅](../session-02/README.md)

---

## 🔗 빠른 링크

- [Project 1: Rules 기본](./projects/01-rules-basic/README.md)

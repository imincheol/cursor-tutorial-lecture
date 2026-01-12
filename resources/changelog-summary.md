# 📜 Cursor Changelog 요약 (2025년 - 2026년 1월)

> 최근 1년간의 주요 업데이트 정리

---

## 🗓️ 2026년 1월

### CLI (Jan 8, 2026)
**New CLI Features and Improved CLI Performance**

#### 새로운 기능
- ✅ `agent models` 명령어: 사용 가능한 모델 목록
- ✅ `--list-models` 플래그: 모델 선택
- ✅ `/models` 슬래시 명령: 모델 전환
- ✅ `/rules` 명령: Rules 생성 및 편집
- ✅ `/mcp enable/disable`: MCP 서버 관리

#### Hooks 개선
- 성능 향상
- 버그 수정

---

## 🗓️ 2025년 12월

### v2.3 (Dec 22, 2025)
**Layout Customization and Stability Improvements**

#### 안정성 개선
- Core Agent 안정성
- 코드 diff 보기 개선
- 전반적인 버그 수정

#### 레이아웃 커스터마이징
- 4가지 기본 레이아웃: Agent, Editor, Zen, Browser
- `Cmd+Alt+Tab`: 레이아웃 전환
- 워크스페이스 간 기본 레이아웃 설정

---

### Enterprise Update (Dec 18, 2025)

#### Conversation Insights
- 세션별 작업 유형 분석
  - 카테고리: 버그 수정, 리팩토링, 설명
  - 작업 유형: 유지보수, 새 기능
  - 복잡도: 프롬프트 난이도

#### Shared Agent Transcripts
- Agent 대화 공유 기능
- PR 및 문서에 포함 가능
- 포크하여 새 대화 시작 가능

#### Billing Groups
- 조직 구조별 사용량 추적
- 그룹별 예산 알림

#### Linux Sandboxing
- Linux에서도 샌드박스 지원 (기존 macOS만)

#### Service Accounts
- 비인간 계정 지원
- API 키로 자동화

---

### v2.2 (Dec 10, 2025)
**Debug Mode, Plan Mode Improvements, Multi-Agent Judging**

#### Debug Mode 🆕
- 버그 재현 및 수정 특화
- 런타임 로그 자동 삽입
- 근본 원인 분석

#### Browser Visual Editor 🆕
- 브라우저 사이드바 + 컴포넌트 트리
- 실시간 CSS 편집
- 요소 이동, 색상 변경
- Agent로 변경사항 적용

#### Plan Mode 개선
- 인라인 Mermaid 다이어그램
- 선택한 To-do를 새 Agent로 전송

#### Multi-Agent Judging 🆕
- 병렬 Agent 실행 후 자동 평가
- 최선의 솔루션 추천

#### Pinned Chats
- 채팅 고정 기능

---

## 🗓️ 2025년 11월

### v2.1 (Nov 21, 2025)
**Improved Plan Mode, AI Code Review, Instant Grep**

#### Plan Mode 개선
- 명확한 질문으로 계획 품질 향상
- 인터랙티브 UI로 질문 응답
- `Cmd+F`로 계획 내 검색

#### AI Code Reviews 🆕
- IDE 내에서 직접 코드 리뷰
- 사이드패널에서 이슈 확인
- Bugbot과 별도 (로컬 리뷰)

#### Instant Grep
- Agent의 grep 명령 즉시 실행
- 모든 모델 지원

---

## 🗓️ 2025년 10월

### v2.0 (Oct 29, 2025)
**New Coding Model and Agent Interface**

#### Multi-Agents 🆕
- 최대 8개 Agent 병렬 실행
- Git worktrees 또는 원격 머신 사용
- 각 Agent 독립 환경

#### Composer 모델 🆕
- Cursor 자체 개발 코딩 모델
- 유사 모델 대비 4배 빠름

#### Browser (GA)
- 1.7 베타 → 정식 출시
- 에디터 내장 브라우저
- 요소 선택 → Agent 전달

#### Sandboxed Terminals (GA)
- macOS 기본 활성화
- 워크스페이스만 접근, 인터넷 차단

#### Team Commands
- 대시보드에서 팀 명령/규칙 정의
- 팀원 자동 적용

#### Voice Mode 🆕
- 음성으로 Agent 제어
- 커스텀 제출 키워드 설정

#### Cloud Agents 개선
- 99.9% 신뢰성
- 즉시 시작

---

## 🗓️ 2025년 9월

### v1.7 (Sep 29, 2025)
**Browser Controls, Plan Mode, Hooks**

#### Browser Controls (Beta) 🆕
- 스크린샷 촬영
- UI 개선
- 클라이언트 이슈 디버그

#### Plan Mode 🆕
- 복잡한 작업 전 계획 수립
- 장시간 Agent 실행 가능

#### Hooks (Beta) 🆕
- Agent 루프 관찰/제어
- 커스텀 스크립트 실행
- 명령 차단, 비밀 수정

#### Team Rules
- 대시보드에서 팀 규칙 정의
- Bugbot용 팀 규칙

#### Sandboxed Terminals (Beta)
- 비허용 명령 샌드박스 실행

#### PR Summaries (Bugbot)
- PR 생성 시 자동 요약

#### Menubar Agent Monitor
- 시스템 메뉴바에서 Agent 상태 확인

---

### v1.6 (Sep 12, 2025)
**Slash Commands, Summarization, MCP Resources**

#### Custom Slash Commands 🆕
- `.cursor/commands/[name].md` 파일로 정의
- `/` 로 실행

#### Summarization
- `/summarize` 명령으로 수동 요약
- 컨텍스트 윈도우 관리

#### MCP Resources 🆕
- MCP 서버 데이터를 컨텍스트로 활용
- 환경 변수 보간 지원

#### Terminal 개선
- 안정성 향상
- 행 문제 해결
- SSH 경험 개선
- OS 알림 지원

---

## 🗓️ 2025년 8월

### v1.5 (Aug 21, 2025)
**Linear Integration, OS Notifications, MCP Elicitation**

#### Linear 연동 🆕
- Linear에서 직접 Background Agent 시작
- 이슈 → 코드 → PR 자동화

#### OS Notifications
- Agent 완료/입력 필요 시 알림

#### MCP Elicitation 🆕
- 서버가 사용자에게 구조화된 입력 요청

---

### v1.4 (Aug 6, 2025)
**Improved Agent Tools, Steerability**

#### Agent 도구 개선
- **Read**: 전체 파일 읽기, 2MB 제한 해제
- **List**: 전체 디렉토리 트리 탐색
- **Grep**: 노이즈 감소
- **Codebase Search**: 랭킹/인덱싱 개선
- **Web Search**: 더 관련성 높은 결과

#### Agent Steerability
- 실행 중 메시지 전송 개선
- `Alt+Enter`: 메시지 큐
- `Cmd+Enter`: 즉시 중단 전송

#### GitHub Background Agents 🆕
- PR에서 직접 `@Cursor` 태그
- 자동 수정 및 커밋

#### Usage Visibility
- 채팅에서 사용량 확인

#### Compact Chat Mode
- 도구 아이콘 숨김
- diff 자동 접기

---

## 🗓️ 2025년 7월

### v1.3 (Jul 29, 2025)
**Shared Terminal, Context Usage**

#### Shared Terminal 🆕
- Agent가 네이티브 터미널 사용
- Focus로 전환 가능

#### Context Usage
- 대화 끝에 컨텍스트 사용량 표시

#### Faster Edits
- Search & Replace 25% 빠름
- Apply 11% 빠름

---

### v1.2 (Jul 3, 2025)
**Agent Planning, Better Context, Faster Tab**

#### Agent To-dos 🆕
- 구조화된 할 일 목록 생성
- 의존성 있는 작업 분해
- Slack 연동

#### Queued Messages
- 후속 메시지 큐잉
- 순서 변경 가능

#### Memories (GA)
- 프로젝트별 사실 기억
- 설정에서 관리

#### PR Indexing & Search
- PR 인덱싱 및 시맨틱 검색
- 커밋, 이슈, 브랜치 가져오기

#### Faster Tab
- ~100ms 빠름
- TTFT 30% 감소

#### Merge Conflict Resolution
- Agent가 충돌 해결

---

## 🗓️ 2025년 6월

### v1.1 (Jun 12, 2025)
**Background Agents in Slack**

#### Slack 연동 🆕
- `@Cursor` 멘션으로 Agent 시작
- 스레드 컨텍스트 이해
- 조사/질문 가능

---

### v1.0 (Jun 4, 2025) 🎉
**Cursor 1.0 출시**

#### Bugbot 🆕
- PR 자동 코드 리뷰
- "Fix in Cursor" 버튼

#### Background Agent (GA)
- 모든 사용자 접근 가능
- `Cmd/Ctrl+E`로 전송

#### Agent in Jupyter 🆕
- Jupyter Notebook 편집 지원

#### Memories (Beta)
- 대화에서 사실 기억

#### MCP One-click Install 🆕
- 한 번의 클릭으로 MCP 서버 설치
- OAuth 지원

#### Richer Chat
- Mermaid 다이어그램
- Markdown 테이블 렌더링

---

## 🗓️ 2025년 5월

### v0.50 (May 15, 2025)
**Simplified Pricing, Background Agent Preview**

#### 통합 가격 정책
- 요청 기반 통합 과금
- Max Mode: 토큰 기반

#### Max Mode 🆕
- 모든 최신 모델에 Max Mode
- 더 긴 컨텍스트, 더 많은 도구

#### New Tab Model
- 멀티파일 제안
- 구문 강조 미리보기

#### Background Agent (Preview) 🆕
- 원격 환경에서 Agent 실행
- 병렬 실행

#### @folders Support
- 전체 코드베이스 컨텍스트에 추가

#### Refreshed Inline Edit
- UI 개선
- 전체 파일 편집 (⌘⇧⏎)
- Agent로 전송 (⌘L)

#### Multi-root Workspaces
- 여러 코드베이스 동시 작업

---

## 📊 주요 기능 출시 타임라인

```
2025.05 ─ Background Agent (Preview), Max Mode
     │
2025.06 ─ v1.0: Bugbot, MCP One-click, Jupyter
     │     v1.1: Slack 연동
     │
2025.07 ─ v1.2: Agent To-dos, Memories GA, PR 인덱싱
     │     v1.3: Shared Terminal
     │
2025.08 ─ v1.4: Agent 도구 개선, GitHub Agent
     │     v1.5: Linear 연동
     │
2025.09 ─ v1.6: Slash Commands, MCP Resources
     │     v1.7: Browser, Plan Mode, Hooks
     │
2025.10 ─ v2.0: Multi-Agents, Composer, Voice Mode
     │
2025.11 ─ v2.1: AI Code Review, Instant Grep
     │
2025.12 ─ v2.2: Debug Mode, Multi-Agent Judging
     │     v2.3: Layout Customization
     │
2026.01 ─ CLI 기능 강화
```

---

## 🔗 전체 Changelog

- [Cursor Changelog](https://cursor.com/changelog)

# 📁 1교시 실습: IDE 모드 - Rules & Hooks

> 📚 **공식 문서**
> - Rules: https://docs.cursor.com/context/rules
> - Hooks: https://docs.cursor.com/agent/hooks

---

## Rules 실습

### 기본: globs 패턴으로 조건부 적용

```markdown
<!-- .cursor/rules/react.mdc -->
---
globs: ["**/*.tsx"]
---
# React 컴포넌트 규칙
- 함수형 컴포넌트 사용
- Props는 interface로 정의
- 컴포넌트명은 PascalCase
```

```markdown
<!-- .cursor/rules/api.mdc -->
---
globs: ["**/api/**/*.ts"]
---
# API 규칙
- try-catch 필수
- 에러 타입 명시
- JSDoc 주석 작성
```

```markdown
<!-- .cursor/rules/test.mdc -->
---
globs: ["**/*.test.ts", "**/*.spec.ts"]
---
# 테스트 규칙
- describe/it 구조
- 한글 테스트명
- AAA 패턴 (Arrange-Act-Assert)
```

### 🔥 실전 Rules 예제들

#### 1. Vue.js 프로젝트 Rules
```markdown
<!-- .cursor/rules/vue.mdc -->
---
globs: ["**/*.vue"]
---
# Vue 컴포넌트 규칙
- Composition API 사용
- TypeScript 필수
- template/script/style 순서 유지
- emit 이벤트명은 camelCase
```

#### 2. 스타일링 Rules (CSS/SCSS)
```markdown
<!-- .cursor/rules/styles.mdc -->
---
globs: ["**/*.css", "**/*.scss", "**/*.module.css"]
---
# 스타일링 규칙
- CSS Variables (--로 시작) 사용
- BEM 네이밍 (block__element--modifier)
- 반응형은 모바일 퍼스트
- z-index는 10단위로 관리
```

#### 3. 유틸리티 함수 Rules
```markdown
<!-- .cursor/rules/utils.mdc -->
---
globs: ["**/utils/**/*.ts", "**/helpers/**/*.ts"]
---
# 유틸리티 규칙
- 순수 함수로 작성
- JSDoc 주석 필수
- 에러는 throw하지 말고 Result 타입 반환
- 파일명은 kebab-case
```

#### 4. 설정 파일 Rules
```markdown
<!-- .cursor/rules/config.mdc -->
---
globs: ["**/config/**/*.ts", "**/*.config.ts"]
---
# 설정 파일 규칙
- 환경별 분리 (dev/prod)
- JSDoc으로 각 옵션 설명
- 타입 안전성 보장
- 기본값 명시
```

#### 5. Storybook Rules
```markdown
<!-- .cursor/rules/storybook.mdc -->
---
globs: ["**/*.stories.tsx", "**/*.stories.ts"]
---
# Storybook 규칙
- CSF 3.0 포맷 사용
- 한글 설명 작성
- 다양한 상태 케이스 추가
- controls 활용
```

---

## Hooks 실습

### 설정

```json
// Cursor Settings
{
  "cursor.hooks.enabled": true,
  "cursor.hooks.path": ".cursor/hooks"
}
```

### 감사 로그

```javascript
// .cursor/hooks/audit-log.js
module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    console.log(`[${new Date().toISOString()}] Tool: ${tool}`);
    return { allow: true };
  }
};
```

### 위험 명령 차단

```javascript
// .cursor/hooks/block-dangerous.js
const BLOCKED = [/rm\s+-rf\s+\//, /DROP\s+DATABASE/i];

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    if (tool === 'terminal') {
      const cmd = args.command || '';
      for (const pattern of BLOCKED) {
        if (pattern.test(cmd)) {
          return { allow: false, reason: '차단됨' };
        }
      }
    }
    return { allow: true };
  }
};
```

### 폴더 보호

```javascript
// .cursor/hooks/protect-folders.js
const PROTECTED = ['/src/core/', '/.env'];

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;
    if (tool === 'write' || tool === 'edit') {
      const path = args.path || '';
      for (const p of PROTECTED) {
        if (path.includes(p)) {
          return { allow: false, reason: `보호됨: ${p}` };
        }
      }
    }
    return { allow: true };
  }
};
```

### 🔥 고급 Hooks 예제들

#### 1. 코드 품질 검사 Hook
```javascript
// .cursor/hooks/code-quality.js
module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;

    if (tool === 'write' || tool === 'edit') {
      const path = args.path || '';
      const content = args.contents || '';

      // TypeScript 파일에 any 금지
      if (path.endsWith('.ts') && content.includes(': any')) {
        return {
          allow: false,
          reason: 'TypeScript 파일에서 any 타입 사용 금지'
        };
      }

      // 콘솔 로그 금지 (운영 코드)
      if (!path.includes('test') && !path.includes('debug') && content.includes('console.log')) {
        return {
          allow: false,
          reason: '운영 코드에서 console.log 사용 금지'
        };
      }
    }

    return { allow: true };
  }
};
```

#### 2. 커밋 전 검증 Hook
```javascript
// .cursor/hooks/pre-commit.js
const { execSync } = require('child_process');

module.exports = {
  preToolExecution: async (context) => {
    const { tool } = context;

    if (tool === 'terminal') {
      const cmd = context.args?.command || '';

      // git commit 전 검증
      if (cmd.startsWith('git commit')) {
        try {
          // 테스트 실행
          execSync('npm test', { stdio: 'pipe' });

          // 린트 실행
          execSync('npm run lint', { stdio: 'pipe' });

          console.log('✅ 커밋 전 검증 통과');
        } catch (error) {
          return {
            allow: false,
            reason: `커밋 전 검증 실패: ${error.message}`
          };
        }
      }
    }

    return { allow: true };
  }
};
```

#### 3. AI 응답 품질 검증 Hook
```javascript
// .cursor/hooks/response-quality.js
module.exports = {
  postToolExecution: async (context) => {
    const { tool, args, result } = context;

    // AI 응답 후 검증
    if (tool === 'ai_response') {
      const response = result?.content || '';

      // TODO 주석 포함 여부 확인
      if (response.includes('TODO') || response.includes('FIXME')) {
        console.log('⚠️ 응답에 TODO가 포함되어 있습니다');
      }

      // 코드 블록 개수 카운트
      const codeBlocks = (response.match(/```[\s\S]*?```/g) || []).length;
      if (codeBlocks > 5) {
        console.log(`📝 ${codeBlocks}개의 코드 블록이 포함되어 있습니다`);
      }
    }

    return { allow: true };
  }
};
```

#### 4. 작업 시간 로깅 Hook
```javascript
// .cursor/hooks/time-tracking.js
const fs = require('fs').promises;
const path = require('path');

module.exports = {
  preToolExecution: async (context) => {
    const { tool } = context;

    // AI 요청 시 타임스탬프 기록
    if (tool === 'ai_request') {
      const logEntry = {
        timestamp: new Date().toISOString(),
        tool,
        session: process.env.CURSOR_SESSION_ID || 'unknown'
      };

      try {
        const logPath = path.join(process.cwd(), '.cursor', 'activity.log');
        await fs.appendFile(logPath, JSON.stringify(logEntry) + '\n');
      } catch (error) {
        // 로깅 실패는 작업을 막지 않음
        console.error('활동 로깅 실패:', error.message);
      }
    }

    return { allow: true };
  }
};
```

#### 5. 프로젝트별 설정 자동 적용 Hook
```javascript
// .cursor/hooks/project-specific.js
const path = require('path');

module.exports = {
  preToolExecution: async (context) => {
    const { tool, args } = context;

    if (tool === 'ai_request') {
      const cwd = process.cwd();
      const projectType = detectProjectType(cwd);

      // 프로젝트 타입에 따른 추가 컨텍스트
      if (projectType === 'react') {
        args.context = args.context || '';
        args.context += '\n\n이 프로젝트는 React + TypeScript 프로젝트입니다.';
      } else if (projectType === 'vue') {
        args.context += '\n\n이 프로젝트는 Vue 3 + Composition API 프로젝트입니다.';
      }
    }

    return { allow: true };
  }
};

function detectProjectType(cwd) {
  try {
    const packageJson = require(path.join(cwd, 'package.json'));
    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

    if (deps.react) return 'react';
    if (deps.vue) return 'vue';
    if (deps.express) return 'node';
    return 'unknown';
  } catch {
    return 'unknown';
  }
}
```

---

## 실습 과제

### 기본 실습 (필수)
1. [ ] `.cursor/rules/` 폴더 생성
2. [ ] globs 패턴 Rule 작성 (React/Vue/테스트 중 택1)
3. [ ] `.cursor/hooks/` 폴더 생성
4. [ ] 감사 로그 Hook 작성
5. [ ] 위험 명령 차단 Hook 작성

### 🔥 보너스 실습 (선택)

#### 초급 보너스
6. [ ] **프로젝트별 Rules 작성**
   - 현재 프로젝트 분석 후 맞춤 Rules 2개 이상 작성
   - 예: 스타일링, 유틸리티, 설정 파일 등

7. [ ] **코드 품질 Hook 구현**
   - any 타입 사용 금지
   - console.log 운영코드 사용 금지

8. [ ] **커밋 전 검증 Hook**
   - 테스트/린트 자동 실행
   - 검증 실패 시 커밋 차단

#### 중급 보너스
9. [ ] **작업 시간 로깅 Hook**
   - AI 요청 시 타임스탬프 기록
   - 활동 로그 파일 생성

10. [ ] **프로젝트 자동 감지 Hook**
    - package.json 분석하여 프로젝트 타입 감지
    - 타입에 따른 컨텍스트 자동 추가

11. [ ] **팀 Rules 공유**
    - 작성한 Rules를 팀원들과 Git으로 공유
    - `.cursor/` 폴더를 리포지토리에 커밋

#### 고급 보너스
12. [ ] **복합 Hook 개발**
    - 여러 Hook을 결합한 고급 로직
    - 예: 시간대별로 다른 규칙 적용

13. [ ] **Rules 테스팅**
    - 다양한 파일 패턴으로 Rules 테스트
    - globs 패턴 디버깅

14. [ ] **Hook 체이닝**
    - 여러 Hook이 순차적으로 실행되는 구조
    - Hook 간 데이터 공유

### 📊 실습 완료도 체크

**기본 실습 (5/5) 완료 시:**
- ✅ Rules와 Hooks 기본 개념 숙지
- ✅ 프로젝트에 Cursor 설정 적용 가능

**보너스 실습 (5/10) 완료 시:**
- 🔥 실무에서 활용 가능한 고급 설정
- 🔥 팀 전체에 Cursor 표준 적용 가능

**전체 실습 (10/14) 완료 시:**
- 🚀 Cursor 마스터 레벨 달성
- 🚀 Copilot에서 완전 전환 성공

---

**[← 1교시 강의](../../curriculum/01-session.md)** | **[2교시 실습 →](../02-ide-debug-visual/README.md)**

// 위험한 명령어 패턴
const DANGEROUS_PATTERNS = [
  /rm\s+-rf/,           // rm -rf
  /DROP\s+TABLE/i,      // DROP TABLE
  /DELETE\s+FROM/i,     // DELETE FROM
  /TRUNCATE/i,          // TRUNCATE
  /sudo\s+rm/,          // sudo rm
];

// 보호할 파일/폴더 패턴
const PROTECTED_PATHS = [
  /\.env$/,             // .env 파일
  /^config\//,          // config/ 폴더
  /^\.git\//,           // .git/ 폴더
  /package-lock\.json/, // package-lock.json
];

export async function preToolExecution(context) {
  const { tool, args } = context;
  
  // 1. 위험 명령 검사
  if (tool === 'Shell') {
    const command = args.command || '';
    
    for (const pattern of DANGEROUS_PATTERNS) {
      if (pattern.test(command)) {
        return {
          block: true,
          reason: `위험한 명령어 감지: ${command}`
        };
      }
    }
  }
  
  // 2. 보호 경로 검사
  if (tool === 'StrReplace' || tool === 'Write' || tool === 'Delete') {
    const path = args.path || '';
    
    for (const pattern of PROTECTED_PATHS) {
      if (pattern.test(path)) {
        return {
          block: true,
          reason: `보호된 파일/폴더: ${path}`
        };
      }
    }
  }
  
  return { block: false };
}

import fs from 'fs';
import path from 'path';

const AUDIT_LOG = 'logs/audit.log';

export async function postToolExecution(context) {
  const { tool, args, result } = context;
  
  // 파일 수정 작업만 기록
  if (['StrReplace', 'Write', 'Delete'].includes(tool)) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      tool,
      path: args.path,
      success: result.success,
    };
    
    const logLine = JSON.stringify(logEntry) + '\n';
    
    // 로그 디렉토리 생성
    const logDir = path.dirname(AUDIT_LOG);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    // 로그 파일에 추가
    fs.appendFileSync(AUDIT_LOG, logLine);
  }
}

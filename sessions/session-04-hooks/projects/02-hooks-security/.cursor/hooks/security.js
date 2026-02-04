// 위험한 명령을 차단하는 Hook

const DANGEROUS_COMMANDS = [
  'rm -rf',
  'rm -fr',
  'sudo rm',
  'format',
  'del /f',
  'rmdir /s'
];

export async function preToolExecution(context) {
  const { tool, args } = context;
  
  // 터미널 명령 실행 시 검사
  if (tool === 'run_terminal_cmd' || tool === 'execute_command') {
    const command = args.command || '';
    
    // 위험한 명령 검사
    for (const dangerous of DANGEROUS_COMMANDS) {
      if (command.includes(dangerous)) {
        console.error('🚨 [보안] 위험한 명령 차단!');
        console.error('🚨 명령:', command);
        console.error('🚨 이유: 시스템 파일 삭제 위험');
        
        return {
          block: true,
          reason: `위험한 명령어가 포함되어 있습니다: ${dangerous}`
        };
      }
    }
    
    // 홈 디렉터리 삭제 방지
    if (command.includes('~/') && command.includes('rm')) {
      console.error('🚨 [보안] 홈 디렉터리 삭제 시도 차단!');
      
      return {
        block: true,
        reason: '홈 디렉터리 삭제는 허용되지 않습니다'
      };
    }
  }
  
  // 중요 파일 삭제 방지
  if (tool === 'delete_file') {
    const filePath = args.path || args.file_path || '';
    
    const protectedFiles = [
      '.env',
      'package.json',
      'tsconfig.json',
      '.cursorrules'
    ];
    
    if (protectedFiles.some(f => filePath.includes(f))) {
      console.error('🚨 [보안] 중요 파일 삭제 시도 차단!');
      console.error('🚨 파일:', filePath);
      
      return {
        block: true,
        reason: '중요 파일은 삭제할 수 없습니다'
      };
    }
  }
  
  // 안전한 명령은 허용
  return { block: false };
}

// Agent 동작을 로깅하는 Hook

export async function preToolExecution(context) {
  const { tool, args } = context;
  
  console.log('='.repeat(50));
  console.log('[HOOK] Agent가 도구를 실행하려고 합니다');
  console.log('[HOOK] 도구:', tool);
  console.log('[HOOK] 인자:', JSON.stringify(args, null, 2));
  console.log('='.repeat(50));
  
  // 실행 허용
  return { block: false };
}

export async function postToolExecution(context) {
  const { tool, result } = context;
  
  console.log('='.repeat(50));
  console.log('[HOOK] Agent가 도구 실행을 완료했습니다');
  console.log('[HOOK] 도구:', tool);
  console.log('[HOOK] 결과:', result ? '성공' : '실패');
  console.log('='.repeat(50));
  
  return {};
}

/**
 * Agent 실행 전 Hook
 * @param {Object} context - Hook 컨텍스트
 * @param {string} context.tool - 실행할 도구 이름
 * @param {Object} context.args - 도구 인자
 * @returns {Object} { block: boolean, reason?: string }
 */
export async function preToolExecution(context) {
  const { tool, args } = context;
  
  console.log('=== Pre-execution ===');
  console.log('Tool:', tool);
  console.log('Args:', JSON.stringify(args, null, 2));
  console.log('Time:', new Date().toISOString());
  
  // 실행 허용
  return { block: false };
}

/**
 * Agent 실행 후 Hook
 * @param {Object} context - Hook 컨텍스트
 * @param {string} context.tool - 실행된 도구 이름
 * @param {Object} context.args - 도구 인자
 * @param {Object} context.result - 실행 결과
 */
export async function postToolExecution(context) {
  const { tool, args, result } = context;
  
  console.log('=== Post-execution ===');
  console.log('Tool:', tool);
  console.log('Success:', result.success);
  console.log('Time:', new Date().toISOString());
  console.log('');
}

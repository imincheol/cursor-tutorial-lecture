/**
 * 실습 가이드: Debug 모드로 버그 수정
 * 
 * 1. Debug 모드를 활성화하세요 (Cmd+Shift+P → "Debug Mode")
 * 2. 이 파일을 열고 아래 프롬프트를 복사해서 Agent에게 요청하세요:
 * 
 * 프롬프트:
 * "2-2-calculator-debug.js를 실행해서 어떤 입력에서 문제가 발생하는지 확인하고 수정해줘"
 * 
 * 3. AI가 코드를 실행하고 자동으로 로그를 삽입하는 것을 관찰하세요
 * 4. 실행 결과를 보고 정확히 버그를 찾는 것을 확인하세요
 * 5. 2-1-calculator-agent.js와 비교해보세요
 */

function calculate(a, b, operation) {
  let result;
  
  if (operation === 'add') {
    result = a + b;
  } else if (operation === 'subtract') {
    result = a - b;
  } else if (operation === 'multiply') {
    result = a * b;
  } else if (operation === 'divide') {
    result = a / b;
  }
  
  return result;
}

// 테스트
console.log(calculate(10, 5, 'add'));      // 15 ✅
console.log(calculate(10, 5, 'subtract')); // 5 ✅
console.log(calculate(10, 5, 'multiply')); // 50 ✅
console.log(calculate(10, 0, 'divide'));   // Infinity ❌ (버그!)
console.log(calculate(10, 5, 'modulo'));   // undefined ❌ (버그!)

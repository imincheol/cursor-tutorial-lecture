/**
 * 실습 가이드: Agent 모드로 버그 수정
 * 
 * 1. 이 파일을 열고 Agent 모드를 실행하세요
 * 2. 아래 프롬프트를 복사해서 Agent에게 요청하세요:
 * 
 * 프롬프트:
 * "2-1-calculator-agent.js의 버그를 찾아서 수정해줘"
 * 
 * 3. AI가 코드를 읽고 추측으로 수정하는 것을 관찰하세요
 * 4. 결과를 확인하고 2-2-calculator-debug.js와 비교하세요
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

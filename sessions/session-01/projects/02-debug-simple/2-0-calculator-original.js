/**
 * 원본 파일 (참고용)
 * 
 * 이 파일은 수정하지 마세요!
 * 
 * 버그가 있는 원본 코드입니다:
 * - 버그 1: 0으로 나누면 Infinity 반환 (에러 처리 필요)
 * - 버그 2: modulo 연산이 구현되지 않아 undefined 반환
 * 
 * 실습 순서:
 * 1. 2-1-calculator-agent.js로 Agent 모드 실습
 * 2. 2-2-calculator-debug.js로 Debug 모드 실습
 * 3. 두 파일의 결과 비교
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

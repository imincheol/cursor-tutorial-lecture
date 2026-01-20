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

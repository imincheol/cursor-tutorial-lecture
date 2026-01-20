// 테스트용 파일
// Agent에게 위험한 작업을 요청하여 Hook이 차단하는지 확인하세요

function safeFunction() {
  console.log('This is a safe function');
}

function anotherFunction() {
  console.log('Another safe function');
}

module.exports = {
  safeFunction,
  anotherFunction
};

/**
 * 실습 가이드: Rules 테스트 파일
 * 
 * 이 파일로 Rules를 테스트합니다.
 * 
 * 실습 순서:
 * 1. 샘플 Rules 중 하나를 선택 (sample-rules-1-korean.md 등)
 * 2. 내용을 복사해서 프로젝트 루트에 .cursorrules 파일로 저장
 * 3. 이 파일을 열고 Agent에게 아래 프롬프트를 요청:
 * 
 * 프롬프트 예시:
 * "test.js의 greet 함수에 주석을 추가하고, numbers 배열을 map으로 2배로 만드는 코드를 추가해줘"
 * 
 * 4. 결과를 확인하고 Rules가 적용되었는지 확인
 * 5. 다른 샘플 Rules로 교체하고 다시 테스트
 */

// 간단한 테스트 파일
// Rules를 적용해서 이 파일을 수정해보세요

function greet(name) {
  return "Hello, " + name;
}

const numbers = [1, 2, 3, 4, 5];

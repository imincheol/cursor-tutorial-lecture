// Cursor 튜토리얼 - JavaScript 실습 파일
// Debug Mode 실습에 활용할 수 있는 다양한 시나리오들 포함

// 전역 변수들 (의도적으로 일부 버그 포함)
let userData = null;
let isLoggedIn = false;
let apiCallCount = 0;

// DOM 요소들
const contactForm = document.getElementById('contactForm');
const ctaButton = document.querySelector('.cta-button');

// 간헐적 API 실패 시뮬레이션
function simulateApiCall(endpoint, data) {
  apiCallCount++;
  console.log(`API 호출 ${apiCallCount}: ${endpoint}`);

  // 30% 확률로 실패 (간헐적 버그 시뮬레이션)
  if (Math.random() < 0.3) {
    console.error('API 호출 실패 - 네트워크 오류');
    throw new Error('Network Error');
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, Math.random() * 1000 + 500); // 500-1500ms 랜덤 딜레이
  });
}

// 폼 제출 처리 (버그 포함)
async function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log('폼 제출 시작:', data);

  try {
    // API 호출 (가끔 실패)
    const response = await simulateApiCall('/api/contact', data);
    console.log('API 응답:', response);

    // 성공 메시지 표시 (버그: 메시지가 표시되지 않을 수 있음)
    showSuccessMessage();

    // 페이지 리다이렉트 (버그: 조건이 맞지 않아 실행되지 않을 수 있음)
    if (response.success && data.email) {
      // 이 조건은 항상 true이지만, 타이밍 이슈로 실행되지 않을 수 있음
      setTimeout(() => {
        window.location.href = '#home';
      }, 1000);
    }

  } catch (error) {
    console.error('폼 제출 실패:', error);
    showErrorMessage(error.message);
  }
}

// 성공 메시지 표시 (버그: DOM 조작 실패 가능성)
function showSuccessMessage() {
  const existingMessage = document.querySelector('.success-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const message = document.createElement('div');
  message.className = 'success-message';
  message.textContent = '메시지가 성공적으로 전송되었습니다!';
  message.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
  `;

  document.body.appendChild(message);

  // 3초 후 자동 제거
  setTimeout(() => {
    if (message.parentNode) {
      message.remove();
    }
  }, 3000);
}

// 에러 메시지 표시
function showErrorMessage(message) {
  const existingError = document.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = `오류: ${message}`;
  errorDiv.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #ef4444;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
  `;

  document.body.appendChild(errorDiv);

  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove();
    }
  }, 5000);
}

// 로그인 상태 관리 (상태 관리 버그 시뮬레이션)
function loginUser(email, password) {
  console.log('로그인 시도:', email);

  // 간헐적 로그인 실패
  if (Math.random() < 0.4) {
    console.error('로그인 실패 - 잘못된 자격증명');
    return false;
  }

  isLoggedIn = true;
  userData = { email, loginTime: new Date() };
  console.log('로그인 성공:', userData);
  return true;
}

// 데이터 로딩 (무한 로딩 버그 시뮬레이션)
async function loadUserData() {
  console.log('사용자 데이터 로딩 시작...');

  try {
    // API 호출 (가끔 네트워크 타임아웃)
    const response = await simulateApiCall('/api/user-data', { userId: '123' });

    // 데이터 업데이트 (버그: DOM 업데이트 실패 가능성)
    updateUserInterface(response.data);

  } catch (error) {
    console.error('데이터 로딩 실패:', error);
    // 에러 처리 부족으로 무한 로딩 상태가 될 수 있음
  }
}

// UI 업데이트 (DOM 조작 버그 시뮬레이션)
function updateUserInterface(data) {
  console.log('UI 업데이트:', data);

  // 요소 찾기 실패 가능성
  const userInfo = document.querySelector('.user-info');
  if (!userInfo) {
    console.warn('사용자 정보 표시 영역을 찾을 수 없습니다');
    return;
  }

  // 데이터 표시 (버그: 데이터가 없을 때 처리 부족)
  userInfo.innerHTML = `
    <h3>사용자 정보</h3>
    <p>이름: ${data?.name || '알 수 없음'}</p>
    <p>이메일: ${data?.email || '알 수 없음'}</p>
    <p>마지막 로그인: ${data?.lastLogin || '알 수 없음'}</p>
  `;
}

// 이벤트 리스너 설정
function initializeEventListeners() {
  // 폼 제출 이벤트
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // CTA 버튼 클릭 이벤트
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      console.log('CTA 버튼 클릭됨');
      // 의도적으로 아무 동작 없음 (버그 시뮬레이션)
    });
  }

  // 네비게이션 스무스 스크롤
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  console.log('페이지 로드 완료');
  initializeEventListeners();

  // 자동 데이터 로딩 (무한 로딩 테스트용)
  setTimeout(() => {
    loadUserData();
  }, 2000);
});

// 전역 에러 핸들링
window.addEventListener('error', (event) => {
  console.error('전역 에러:', event.error);
  showErrorMessage('예기치 않은 오류가 발생했습니다');
});

// 미해결 프로미스 에러 핸들링
window.addEventListener('unhandledrejection', (event) => {
  console.error('미해결 프로미스 에러:', event.reason);
  showErrorMessage('네트워크 오류가 발생했습니다');
});
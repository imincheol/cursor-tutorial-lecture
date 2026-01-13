import React, { useState } from 'react';

function Home({ isLoggedIn, onLogin }) {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // 간헐적 로그인 실패 시뮬레이션 (Debug Mode 실습용)
      if (Math.random() < 0.3) {
        throw new Error('잘못된 이메일 또는 비밀번호입니다.');
      }

      // 로그인 성공
      await new Promise(resolve => setTimeout(resolve, 1000));
      onLogin({
        email: loginForm.email,
        name: loginForm.email.split('@')[0],
        loginTime: new Date()
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="container">
        <div className="card">
          <h2>환영합니다!</h2>
          <p>Cursor 튜토리얼에 로그인하셨습니다.</p>
          <div className="grid grid-3">
            <div className="card">
              <h3>Rules & Hooks</h3>
              <p>프로젝트별 규칙 설정과 자동화 기능을 배워보세요.</p>
            </div>
            <div className="card">
              <h3>Debug Mode</h3>
              <p>자동 로그 삽입으로 버그를 빠르게 추적하는 방법을 배워보세요.</p>
            </div>
            <div className="card">
              <h3>Visual Editor</h3>
              <p>브라우저에서 직접 UI를 수정하는 방법을 배워보세요.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="grid grid-2">
        <div className="card">
          <h1 className="text-center mb-3">Cursor 마스터 클래스</h1>
          <p className="text-center mb-4">
            Copilot 사용자를 위한 완벽한 Cursor 전환 가이드
          </p>

          <div className="grid grid-2">
            <div>
              <h3>🎯 학습 목표</h3>
              <ul>
                <li>Rules로 프로젝트 규칙 설정</li>
                <li>Hooks로 Agent 자동화</li>
                <li>Debug Mode로 버그 추적</li>
                <li>Visual Editor로 UI 수정</li>
                <li>Shell Mode로 터미널 자동화</li>
                <li>Multi-Agent로 동시 작업</li>
              </ul>
            </div>
            <div>
              <h3>🚀 실습 환경</h3>
              <ul>
                <li>React + TypeScript 프로젝트</li>
                <li>실제 버그 시뮬레이션</li>
                <li>다양한 UI 컴포넌트</li>
                <li>API 호출 및 상태 관리</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>로그인</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginForm.email}
                onChange={handleInputChange}
                placeholder="test@example.com"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginForm.password}
                onChange={handleInputChange}
                placeholder="password"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="error-message">{error}</div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
              style={{ width: '100%' }}
            >
              {isLoading ? (
                <>
                  <span className="loading"></span>
                  로그인 중...
                </>
              ) : (
                '로그인'
              )}
            </button>
          </form>

          <p className="text-center mt-3" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            테스트용: 아무 이메일/비밀번호나 입력해보세요 (30% 확률로 실패)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
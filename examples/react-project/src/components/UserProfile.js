import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile({ user, isLoggedIn }) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // 로그인 상태 확인
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }
  }, [isLoggedIn, navigate]);

  // 프로필 데이터 로딩 (무한 로딩 버그 시뮬레이션)
  useEffect(() => {
    const loadProfile = async () => {
      try {
        setIsLoading(true);

        // API 호출 시뮬레이션 (가끔 실패)
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() < 0.2) {
              reject(new Error('프로필 로딩 실패'));
            } else {
              resolve();
            }
          }, Math.random() * 2000 + 1000);
        });

        // 프로필 데이터 설정 (버그: 일부 필드가 없을 수 있음)
        setProfile({
          name: user?.name || '알 수 없음',
          email: user?.email || '알 수 없음',
          joinDate: new Date().toLocaleDateString(),
          lastLogin: user?.loginTime?.toLocaleString() || '알 수 없음',
          preferences: {
            theme: 'light',
            notifications: true,
            // 일부 필드 누락으로 버그 유발
          }
        });

      } catch (err) {
        setError(err.message);
        // 에러 처리 부족으로 무한 로딩 가능
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoggedIn) {
      loadProfile();
    }
  }, [user, isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="loading" style={{ width: '40px', height: '40px' }}></div>
          <p className="mt-3">프로필 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="card text-center">
          <h2>오류 발생</h2>
          <p className="error-message">{error}</p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>사용자 프로필</h1>

        <div className="grid grid-2">
          <div>
            <h3>기본 정보</h3>
            <div className="mb-3">
              <strong>이름:</strong> {profile?.name}
            </div>
            <div className="mb-3">
              <strong>이메일:</strong> {profile?.email}
            </div>
            <div className="mb-3">
              <strong>가입일:</strong> {profile?.joinDate}
            </div>
            <div className="mb-3">
              <strong>마지막 로그인:</strong> {profile?.lastLogin}
            </div>
          </div>

          <div>
            <h3>환경 설정</h3>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={profile?.preferences?.notifications ?? false}
                  readOnly
                />
                알림 받기
              </label>
            </div>
            <div className="form-group">
              <label>테마:</label>
              <select value={profile?.preferences?.theme || 'light'} disabled>
                <option value="light">밝은 테마</option>
                <option value="dark">어두운 테마</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
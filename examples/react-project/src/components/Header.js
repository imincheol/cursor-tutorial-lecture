import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ isLoggedIn, user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">Cursor 튜토리얼</Link>
        </div>

        <ul className="nav-menu">
          <li><Link to="/">홈</Link></li>
          <li><Link to="/products">제품</Link></li>
          <li><Link to="/contact">연락처</Link></li>

          {isLoggedIn ? (
            <>
              <li><Link to="/profile">프로필</Link></li>
              <li>
                <span className="user-info">
                  {user?.email}님
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary"
                >
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/" className="btn btn-primary">
                로그인
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
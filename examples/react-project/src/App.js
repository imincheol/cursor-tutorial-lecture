import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          user={user}
          onLogout={handleLogout}
        />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isLoggedIn={isLoggedIn}
                  onLogin={handleLogin}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <UserProfile
                  user={user}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route path="/products" element={<ProductList />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Cursor 튜토리얼 - React 프로젝트</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
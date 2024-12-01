import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/40" alt="Logo" />
        <span>대의</span>
      </div>
      <nav className="nav">
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact Us</a>
        <a href="/pricing">Pricing</a>
        <a href="/signin">Sign In</a>
        <button className="try-free-btn">Try Free</button>
      </nav>
    </header>
  );
}

export default Header;

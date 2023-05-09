import React from 'react';
import'../css/header.css';
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">My Portfolio</a>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About Me</a>
          </li>
          <li className="nav-item">
            <a href="/resume">Resume</a>
          </li>
          <li className="nav-item">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

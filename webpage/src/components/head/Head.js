import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="titleDiv">
        <h3>Gustavo</h3>
        <p>Bermudes</p>
      </div>
      <div className="SubtitleDiv">
        <p>front end developer</p>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import React from 'react';

const Header = props => {
  return (
    <header id="top">
      <nav>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <a href="#" className="logo spin">
        <span>JB</span>
      </a>
    </header>
  );
};

export default Header;

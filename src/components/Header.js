import React from 'react';

const Header = props => {
  return (
    <header id="top">
      <nav>
        <ul>
          <li>
            <a href="#projects" onClick={props.scrollTo}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.scrollTo}>
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.scrollTo}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className="logo">
        <span>JB</span>
      </a>
    </header>
  );
};

export default Header;

import React from 'react';

const SpinningMe = {
  background: 'url(assets/images/me.jpg) 0 0',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '50px 50px'
};

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
      <a href="#" className="logo" style={SpinningMe}>
        <span>JB</span>
      </a>
    </header>
  );
};

export default Header;

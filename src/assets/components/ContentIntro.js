import React from 'react';

const rule = {
  background: 'url(assets/images/line.png) repeat-x',
  backgroundPosition: 'left center'
};

const ContentIntro = props => {
  return (
    <section className="intro">
      <div className="content">
        <div className="frame">
          <h1 style={rule}>
            <span className="welcome">Welcome</span>
          </h1>
          <div>
            <h2>
              My name is <span>Joe Burton</span>, I work as a <span>Web Developer</span>.
            </h2>
            <h3>This is my portfolio and online playground.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentIntro;

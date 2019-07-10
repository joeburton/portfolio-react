import React from 'react';
import BackToTop from './BackToTop';

const ContentAbout = props => {
  return (
    <section id="about" className="about">
      <div className="content">
        <div className="frame-split">
          <h2>About Me</h2>
          <div className="alpha">
            <h4>
              Since graduating in 2003 I've gained experience working for a variety of companies such as InDzine, OgilvyOne, the Guardian Professional, Sapient Nitro, The Engine Group, Rank
              Interactive, Bauer Media, lastminute.com, PhotoBox, Tribal Worldwide, Cambridge Assessment, Boiler Juice and CashFlows along with other small and medium sized Advertising Agencies,
              Software houses and client side for companies such as John Lewis.
            </h4>
          </div>
          <div className="beta">
            <h4>
              I have spent the bulk of my career working in London and the South of England. But I've also been lucky enough to experience working overseas in Brisbane, Australia and Munich, Germany.
              In May 2016 my family and I moved to Cambridge, where I'm now working as a Freelance Front-end Developer.
            </h4>
          </div>
        </div>
        <BackToTop scrollTo={props.scrollTo} />
      </div>
    </section>
  );
};

export default ContentAbout;

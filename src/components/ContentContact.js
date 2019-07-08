import React from 'react';
import BackToTop from './BackToTop';

const ContentContact = props => {
  return (
    <section id="contact" className="contact">
      <div className="content">
        <div className="frame">
          <h2>Contact</h2>
          <h5 className="box">Please feel free to contact me anytime. You can call me on my mobile + 44 [0] 77689 89321 or email me at joeburton@gmail.com</h5>
        </div>
        <BackToTop scrollTo={props.scrollTo} />
      </div>
    </section>
  );
};

export default ContentContact;

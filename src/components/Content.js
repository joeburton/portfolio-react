import React from 'react';

import ContentIntro from './ContentIntro.js';
import ContentAbout from './ContentAbout.js';
import ContentContact from './ContentContact.js';
import ContentProjects from './ContentProjects.js';

const Content = props => {
  return (
    <section className="main">
      <ContentIntro />
      <ContentProjects />
      <ContentAbout />
      <ContentContact />
    </section>
  );
};

export default Content;

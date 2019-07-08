import React from 'react';
import BackToTop from './BackToTop';

const projects = [
  {
    logo: 'ge.png',
    role: 'Senior UI Developer',
    company: 'GE Power Digital',
    skills: 'Polymer&#44; Web Components&#44; React&#44; Redux&#44; Jest&#44; Enzyme&#44; Gulp&#44; Webpack &amp; SASS',
    class: 'ge-logo',
    links: [{ visual: 'www.ge.com/power/software', link: 'https://www.ge.com/power/software' }]
  },
  {
    logo: 'cashflows.png',
    role: 'Lead UI Developer',
    company: 'CashFlows',
    skills: 'React&#44; Jest&#44; Enzyme&#44; Webpack&#44; Bootstrap &amp; SASS',
    class: 'cashflows-logo',
    links: [{ visual: 'www.cashflows.com', link: 'https://www.cashflows.com/' }]
  },
  {
    logo: 'boilerjuice.png',
    role: 'Lead Front-end Developer',
    company: 'Boiler Juice',
    skills: 'JavaScript&#44; Browserify&#44; Bootstrap&#44; SASS&#44; Jasime&#44; Karma/ Unit Testing&#44; &amp; Gulp',
    class: 'boilerjuice-logo',
    links: [{ visual: 'www.boilerjuice.com', link: 'https://www.boilerjuice.com' }, { visual: 'Boiler Juice Templates', link: 'http://www.joe-burton.com/boilerjuice/templates/index.php' }]
  },
  {
    logo: 'cambridge-assessment.png',
    role: 'Senior Front-end Developer',
    company: 'Cambridge Assessment',
    skills: 'JavaScript&#44; SystemJS&#44; Jasime/ Unit Testing&#44; Web Components',
    class: 'cambridge-assessment-logo',
    links: [
      { visual: 'www.cambridgeassessment.org.uk', link: 'http://www.cambridgeassessment.org.uk' },
      { visual: 'Admissions Testing Service', link: 'http://forms.admissionstestingservice.org/form/tmua-candidate/' }
    ]
  },
  {
    logo: 'vw.jpg',
    role: 'Senior Front-end Developer',
    company: 'VW',
    skills: 'Backbone&#44; Require&#44; Jasmine&#44; jQuery&#44; HTML5&#44; CSS3/SASS &amp; Gulp',
    class: 'vw-logo',
    links: [{ visual: 'Perfect Volkswagen', link: 'https://perfect.volkswagen.co.uk/perfect/app' }]
  },
  {
    logo: 'avios-logo.png',
    role: 'Senior Front-end Developer',
    company: 'Avios',
    skills: 'JavaScript/jQuery&#44; HTML5&#44; CSS3 &amp; Gulp',
    class: 'avios-logo',
    links: [{ visual: 'www.aviosgroup.com', link: 'http://www.aviosgroup.com' }]
  },
  {
    logo: 'helix.svg',
    role: 'Senior Front-end Developer',
    company: 'Avios',
    skills: 'JavaScript/jQuery&#44; Browserify&#44; HTML5&#44; CSS3 &amp; Gulp',
    class: 'helix-logo',
    links: [{ visual: 'www.helixproperty.co.uk', link: 'http://helixproperty.co.uk' }]
  },
  {
    logo: 'photobox.png',
    role: 'Senior Front-end Developer',
    company: 'Photobox',
    skills: 'JavaScript/jQuery&#44; Node &amp; Express&#44; Handlebars&#44; Browserify&#44; Grunt&#44; HTML5 &amp; CSS3/SASS',
    class: 'photobox-logo',
    links: [{ visual: 'Primavista Peview', link: 'http://joe-burton.com/photobox/primavista/preview.html' }, { visual: 'Primavista Auth', link: 'http://joe-burton.com/photobox/primavista/auth.html' }]
  },
  {
    logo: 'lmn-logo.png',
    role: 'Senior Front-end Developer',
    company: 'lastminute.com',
    skills: 'JavaScript&#44; Backbone&#44; Mustache&#44; Require&#44; Grunt&#44; Jasime&#44; HTML5&#44; CSS3&#44; LESS/SASS&#44; Bootstrap &amp; Responsive Design &amp; Development',
    class: 'lmn-logo',
    links: [
      { visual: 'www.lastminute.com', link: 'http://www.lastminute.com' },
      { visual: 'm.lastminute.com', link: 'http://m.lastminute.com' },
      { visual: 'Search form component', link: 'http://joe-burton.com/lastminute/search-form/index.php' }
    ]
  },
  {
    logo: 'closer-online.png',
    role: 'Senior UI Developer',
    company: 'Closer Online',
    skills: 'JavaScript/jQuery&#44; Backbone&#44; Underscore&#44; HTML5&#44; CSS3 &amp; LESS/CSS',
    class: 'closer-logo',
    links: [{ visual: 'www.closeronline.co.uk', link: 'http://www.closeronline.co.uk' }]
  },
  {
    logo: 'bluesquare.png',
    role: 'Lead Front-end Developer',
    company: 'Blue Square',
    skills: 'Team Leadership, Responsive Design &amp; Development&#44; Backbone&#44; JavaScript/jQuery&#44; HTML5&#44; LESS/CSS3',
    class: 'bluesquare-logo',
    links: [{ visual: 'Blue Star Templates', link: 'http://joe-burton.com/bluestar' }]
  },
  {
    logo: 'john-lewis-logo.png',
    role: 'Front-end Developer',
    company: 'John Lewis',
    skills: 'JavaScript/jQuery&#44; XHTML&#44; CSS3',
    class: 'bluesquare-logo',
    links: [{ visual: 'www.johnlewis.com', link: 'http://johnlewis.com' }]
  },
  {
    logo: 'tyrells-crisps.png',
    role: 'Front-end Developer',
    company: 'Tyrells Crisps',
    skills: 'JavaScript/jQuery&#44; XHTML&#44; CSS3',
    class: 'tyrells-crisps-logo',
    links: [{ visual: 'www.tyrrellscrisps.co.uk', link: 'http://www.tyrrellscrisps.co.uk/' }]
  },
  {
    logo: 'tnt.png',
    role: 'Front-end Developer',
    company: 'TNT',
    skills: 'Team Lead&#44; JavaScript/jQuery&#44; XHTML&#44; CSS3',
    class: 'tnt-logo',
    links: [{ visual: 'www.tnt.com', link: 'http://www.tnt.com/corporate/en/site/home.html' }]
  },
  {
    logo: 'heineken.png',
    role: 'Front-end Developer',
    company: 'Heineken',
    skills: 'Team Lead&#44; JavaScript/jQuery&#44; XHTML&#44; CSS3',
    class: 'heineken-logo',
    links: [{ visual: 'www.annualreport.heineken.com', link: 'http://www.annualreport.heineken.com' }]
  },
  {
    logo: 'share-happy.png',
    role: 'Front-end Developer',
    company: 'Share Happy',
    skills: 'Team Lead&#44; JavaScript/jQuery&#44; XHTML&#44; CSS3',
    class: 'share-happy-logo',
    links: [{ visual: 'www.sharehappy.com', link: 'http://www.sharehappy.com' }]
  },
  {
    logo: 'great-plant-hunt.png',
    role: 'Front-end Developer',
    company: 'Great Plant Hunt',
    skills: 'Team Lead&#44; JavaScript/jQuery&#44; XHTML&#44; CSS3',
    class: 'great-plant-hunt-logo',
    links: [{ visual: 'www.greatplanthunt.org', link: 'http://www.greatplanthunt.org' }]
  },
  {
    logo: '',
    role: '',
    company: '',
    projectName: 'Research - CRUD Application',
    skills: 'React&#44; Redux&#44; Handlebars&#44; Node&#44; Express&#44; MongoDB&#44; Bootstrap &amp; Gulp',
    class: '',
    links: [{ visual: 'directory.joe-burton.com', link: 'http://directory.joe-burton.com' }]
  }
];

function ProjectList(props) {
  const projects = props.projects.map(project => (
    <li key={project.logo}>
      {project.logo && <img src={`images/${project.logo}`} alt={`${project.company}`} className={`company-logo ${project.class}`} />}
      {project.role && <h6>Role&#58; {project.role}</h6>}
      {project.projectName && <h6 className="no-logo">{project.projectName}</h6>}
      {project.skills && (
        <p>
          <span>Skills&#58;</span> <span dangerouslySetInnerHTML={{ __html: project.skills }} />
        </p>
      )}
      {project.links && (
        <a href={`${project.links[0].link}`} target="_blank">
          {`${project.links[0].visual}`}
        </a>
      )}
    </li>
  ));

  return projects;
}

const ContentProjects = props => {
  return (
    <section id="projects" className="projects">
      <div className="content">
        <div className="frame">
          <h2>Projects</h2>
          <ul>
            <ProjectList projects={projects} />
          </ul>
        </div>
        <BackToTop scrollTo={props.scrollTo} />
      </div>
    </section>
  );
};

export default ContentProjects;

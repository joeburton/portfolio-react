import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function scrollTo(e) {
  const element = document.querySelector(e.target.hash).offsetTop;
  e.preventDefault();
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element
  });
}

const App = props => {
  return (
    <div className="wrapper">
      <Header scrollTo={scrollTo} />
      <Content scrollTo={scrollTo} />
      <Footer />
    </div>
  );
};
export default App;

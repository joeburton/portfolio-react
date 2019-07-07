import React from 'react';
import Header from "./Header";
import Content from './Content';
import Footer from './Footer';

const App = (props) => {
  return (
    <div className="wrapper">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
};
export default App;

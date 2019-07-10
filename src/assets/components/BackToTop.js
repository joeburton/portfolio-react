import React from 'react';

const BackToTop = props => {
  return (
    <div className="top">
      <a href="#root" onClick={props.scrollTo} className="goto">
        ^
      </a>
    </div>
  );
};

export default BackToTop;

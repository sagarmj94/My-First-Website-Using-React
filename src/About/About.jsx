import "./About.css";
import React from "react";
import Selectcomp from '../Utilities/Selectcomp/index';
function template() {
  return (
    <div className="about">
      <h1>About</h1>
       <Selectcomp details={this.techstack}/>
    </div>
  );
};

export default template;

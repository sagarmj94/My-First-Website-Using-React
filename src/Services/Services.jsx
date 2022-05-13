import "./Services.css";
import React from "react";
import Selectcomp from '../Utilities/Selectcomp/index';
function template() {
  return (
    <div className="services">
      <h1>Services</h1>
      <Selectcomp details={this.techstack}/>
    </div>
  );
};

export default template;

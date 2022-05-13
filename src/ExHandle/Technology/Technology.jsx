import "./Technology.css";
import React from "react";

function template() {
  const {name}=this.props;
  debugger;
  if(name==='Palo Alto'){
    throw new Error('Invalid Technology');
  }
  return (
    <div className="technology">
      <h3>In my project, I am using {name}</h3>
    </div>
  );
};

export default template;

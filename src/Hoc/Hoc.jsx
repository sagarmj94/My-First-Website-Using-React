import "./Hoc.css";
import React from "react";
import ClickCount from './ClickCount/index';
import HoverCount from './HoverCount/index';

function template() {
  return (
    <div className="hoc">
      <h1>Hoc</h1>
      <ClickCount/>
      <HoverCount/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default template;

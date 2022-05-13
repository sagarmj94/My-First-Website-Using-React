import "./HoverCount.css";
import React from "react";

function template() {
  return (
    <div className="hover-count">
      <h1>HoverCount</h1>
      <h3 onMouseOver={this.props.operationCount}>No of Hovers:{this.props.count}</h3>
    </div>
  );
};

export default template;

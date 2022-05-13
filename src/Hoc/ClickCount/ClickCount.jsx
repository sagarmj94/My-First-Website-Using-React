import "./ClickCount.css";
import React from "react";

function template() {
  return (
    <div className="click-count">
      <h1>ClickCount</h1>
      <h3>Click count:{this.props.count}</h3>
      <button onClick={this.props.operationCount}>click</button>
    </div>
  );
};

export default template;

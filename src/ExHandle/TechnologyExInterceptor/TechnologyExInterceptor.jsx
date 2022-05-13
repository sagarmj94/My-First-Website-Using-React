import "./TechnologyExInterceptor.css";
import React from "react";

function template() {
  return (
    <div className="technology-ex-interceptor">
      {this.state.isException?<h3>Its not a valid technology</h3>: this.props.children}
    </div>
  );
};

export default template;

import React    from "react";
import template from "./Hoc.jsx";

class Hoc extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Hoc;

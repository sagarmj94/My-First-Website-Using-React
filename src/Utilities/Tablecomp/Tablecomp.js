import React    from "react";
import template from "./Tablecomp.jsx";

class Tablecomp extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Tablecomp;

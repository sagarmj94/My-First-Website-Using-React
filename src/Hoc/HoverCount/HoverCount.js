import React    from "react";
import template from "./HoverCount.jsx";
import operationCount from '../operationCount';
class HoverCount extends React.Component {
  
  render() {
    return template.call(this);
  }
}
//export default HoverCount;
export default operationCount(HoverCount);

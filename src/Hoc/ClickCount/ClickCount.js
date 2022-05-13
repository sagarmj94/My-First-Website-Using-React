import React    from "react";
import template from "./ClickCount.jsx";
import operationCount from '../operationCount';
class ClickCount extends React.Component {

  render() {
    return template.call(this);
  }
}
//export default Clickcount;
export default operationCount(ClickCount);

//ClickCount=operationCount(ClickCount);

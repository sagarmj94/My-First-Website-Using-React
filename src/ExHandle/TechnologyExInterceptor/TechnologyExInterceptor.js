import React    from "react";
import template from "./TechnologyExInterceptor.jsx";

class TechnologyExInterceptor extends React.Component {
  constructor(){
    super();
    this.state={
      isException:false
    }
  }
  static getDerivedStateFromError(){
    console.log('getDerivedStateFromError got invoked');
    return {
         isException:true
    }
  }
  render() {
    return template.call(this);
  }
}

export default TechnologyExInterceptor;

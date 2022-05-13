import React    from "react";
import template from "./About.jsx";

class About extends React.Component {
   constructor(){
    super();
    this.techstack=['About Our Journey','About our LOB','About our Mission','About our CEO','About our Projects','About our Future Road Map','About our Policies'];
   // this.managementList=['CEO','CTO','Regional Business Leaders','VP','Director','Manager','Lead Engineer','SDEII','SDEI'];
  }
  render() {
    return template.call(this);
  }
}

export default About;

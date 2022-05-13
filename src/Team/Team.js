import React    from "react";
import template from "./Team.jsx";

class Team extends React.Component {
  constructor(){
    super();
    this.techstack=['Front-End Team','BackEnd Team','Data Management Team','Cloud Support Team','QA Team','Security Team','Auditing Team'];
   // this.managementList=['CEO','CTO','Regional Business Leaders','VP','Director','Manager','Lead Engineer','SDEII','SDEI'];
  }
  render() {
    return template.call(this);
  }
}

export default Team;

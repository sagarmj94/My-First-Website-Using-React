import React    from "react";
import template from "./Services.jsx";

class Services extends React.Component {
  constructor(){
    super();
    this.techstack=['ML & AI','Software Services','Cloud Stack','Edge Computing','Cryptos','Software Development','High Peformance Computing','Networking Infrastructure','Storage and Solutions'];
   // this.managementList=['CEO','CTO','Regional Business Leaders','VP','Director','Manager','Lead Engineer','SDEII','SDEI'];
  }
  render() {
    return template.call(this);
  }
}

export default Services;

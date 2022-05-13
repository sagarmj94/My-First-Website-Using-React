import React    from "react";
import template from "./Lists.jsx";

const Lists=()=>{
      var techstack=['Mongo DB','MySQL','Express JS','Next JS','React JS','Angular13','Node JS'];
      var managementList=['CEO','CTO','Regional Business Leaders','VP','Director','Manager','Lead Engineer','SDEII','SDEI'];
      var questionares=[{
                que: 'What is a dynamic array?',
                opt1: 'A variable size data structure',
                opt2: 'An array which is created at runtime',
                opt3: 'The memory to the array is allocated at runtime',
                opt4: 'An array which is reallocated everytime whenever new elements have to be added'
                },
              {
                que: 'What is meant by physical size in a dynamic array?',
                opt1: 'The size allocated to elements',
                opt2: 'The size extended to add new elements',
                opt3: 'The size of the underlying array at the back-end',
                opt4: 'The size visible to users'
              },
              {
                que: 'The number of items used by the dynamic array contents is its',
                opt1: 'Physical size',
                opt2: 'Capacity',
                opt3: 'Logical size',
                opt4: 'Random size'
              },
              {
                que: 'How will you implement dynamic arrays in Java?',
                opt1: 'Set',
                opt2: 'Map',
                opt3: 'HashMap',
                opt4: 'List'
              },
              {
                que: 'Which of the following is a disadvantage of dynamic arrays?',
                opt1: 'Locality of reference',
                opt2: 'Data cache utilization',
                opt3: 'Random access',
                opt4: 'Memory leak'
              }];
      return template.call(this,techstack,managementList,questionares);
    }
/*class Lists extends React.Component {
  constructor(){
    super();
    this.techstack=['Mongo DB','MySQL','Express JS','Next JS','React JS','Angular13','Node JS'];
    this.managementList=['CEO','CTO','Regional Business Leaders','VP','Director','Manager','Lead Engineer','SDEII','SDEI'];
  }
  render() {
    return template.call(this);
  }
}*/

export default Lists;

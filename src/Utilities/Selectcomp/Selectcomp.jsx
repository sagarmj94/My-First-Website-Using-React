import "./Selectcomp.css";
import React from "react";

function template() {
  //const techstack=['React JS','Node JS','ExtJS'];

  return (
    <div className="selectcomp">
      <h1>Selectcomp</h1>
      <select>
        {this.props.details.map((value,index)=>{
            return <option key={index}>{value}</option>;
        })
        }
       </select>
      <h1>Ordered List</h1>
      <ol>
        {this.props.details.map((value,index)=>{
            return <li key={index}>{value}</li>;
        })
        }
       </ol>
    </div>
  );
};

export default template;

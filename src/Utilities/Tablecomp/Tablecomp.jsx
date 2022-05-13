import "./Tablecomp.css";
import React from "react";

function template() {
  return (
    <div className="tablecomp">
      <h1>Tablecomp</h1>
      <table border="2px">
        <thead>
          {
            this.props.header.map((v,i)=>{
              return <th>{v}</th>;
            })
          }
        </thead>
        <tbody>
          {
            this.props.data.map((obj,i)=>{
                 return <tr>
                   {
                     this.props.keys.map((k,i)=>{
                        return <td>{obj[k]}</td>;
                     })
                   }
                   </tr>;
            })
          }
        </tbody>
      </table>

    </div>
  );
};

export default template;

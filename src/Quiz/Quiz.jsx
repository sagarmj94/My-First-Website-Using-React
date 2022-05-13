import "./Quiz.css";
import React from "react";

function template() {
  const {questionares,timeleft,marks}=this.state;
  return (
    <div className="quiz">
      <h1>Quiz</h1>
      {
        questionares.map((obj,index)=>{
            const {id,que,opt1,opt2,opt3,opt4,ans,type}=obj;
            return <div key={index}>
                      <h3>Q{id}.{que}</h3>
                      <div>A.{type==='s'?<input onChange={this.optChange} name={id} value='A' type='radio'/> : <input onChange={this.optChange} name={id} value='A' type='checkbox'/>}{opt1}</div>
                      <div>B.{type==='s'?<input onChange={this.optChange} name={id} value='B' type='radio'/> : <input onChange={this.optChange} name={id} value='B' type='checkbox'/>}{opt2}</div>
                      <div>C.{type==='s'?<input onChange={this.optChange} name={id} value='C' type='radio'/> : <input onChange={this.optChange} name={id} value='C' type='checkbox'/>}{opt3}</div>
                      <div>D.{type==='s'?<input onChange={this.optChange} name={id} value='D' type='radio'/> : <input onChange={this.optChange} name={id} value='D' type='checkbox'/>}{opt4}</div>

                   </div>;
        })
      }

      <br/>
      <h2><button onClick={this.submitTheTest}>Submit</button></h2>
      <b className='timer'>{timeleft}</b>
      <h2>marks secured: {marks}</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4>Good Luck</h4>
    </div>
    
  );
};

export default template;

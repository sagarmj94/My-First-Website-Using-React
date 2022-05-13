import "./Lists.css";
import React from "react";

function template(techstack,managementList,questionares) { 
  let desigNsal=[
    {
      role:'Developer',
      avgSal:2500000
    },
    {
      role:'Lead',
      avgSal:4500000
    },
    {
      role:'Manager',
      avgSal:5500000
    },
    {
      role:'Director',
      avgSal:8500000
    },
    {
      role:'VP',
      avgSal:12500000
    }
  ];
  console.log('Inside template:'+this);
  return (
    <div className="lists">
      <h3>dynamic select dropdown: Technology Stack</h3>
      <select>
        {techstack.map((value,index)=>{
            return <option key={index}>{value}</option>;
        })
        }
      </select>
      <h3>dynamic Ordered List: Management Hierarchy</h3>
      <ol>
        {
          managementList.map((v,i)=>{
            return <li key={i}>{v}</li>;
          })
        }
      </ol>
      <h3>Quizzels</h3>
      {
        questionares.map((obj,i)=>{
           return <div>
                  <h3 key={i+1}><p>Q{i+1}.{obj.que}</p></h3>
                  <div><input type="radio" name="ans"/>{obj.opt1}</div>
                  <div><input type="radio" name="ans"/>{obj.opt2}</div>
                  <div><input type="radio" name="ans"/>{obj.opt3}</div>
                  <div><input type="radio" name="ans"/>{obj.opt4}</div>
                  </div>

        })
      }
      <br/>
      <h1> Desig N Average Salaries</h1>
      <table border='2px'>
          <thead>
            <tr>
              <th>Designations</th>
              <th>Average Salaries</th>
            </tr>
          </thead>
          <tbody>
            {
              desigNsal.map((obj,i)=>{
                 return <tr>
                          <td>{obj.role}</td>
                          <td>{obj.avgSal}</td>
                        </tr>;
              })
            }
          </tbody>
      </table>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default template;

import "./Team.css";
import React from "react";
import Selectcomp from '../Utilities/Selectcomp/index';
import Tablecomp from '../Utilities/Tablecomp/index';

function template() {
  let management=[{
    Mgmt:'Mukesh',
    desig:'VP',
    noofproj:10
  },
{
    Mgmt:'Mitesh',
    desig:'Senior Director',
    noofproj:6
  },
{
    Mgmt:'Bhabesh',
    desig:'Senior Manager',
    noofproj:3
  },
{
    Mgmt:'Ritesh',
    desig:'Manager',
    noofproj:2
  },
{
    Mgmt:'Hitesh',
    desig:'Delivery Manager',
    noofproj:1
  }];
  let projects=[{
    projname:'Airtel',
    teamsize:120
  },
  {
    projname:'Vodafone',
    teamsize:600
  }
  ];
  return (
    <div className="team">
      <h1>Team</h1>
       <Selectcomp details={this.techstack}/>
       <Tablecomp keys={['Mgmt','desig','noofproj']} header={['Mgmg','Desig','No of Proj']} data={management}/>
       <Tablecomp keys={['projname','teamsize']} header={['Proj Name','Team Size']} data={projects}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Page content ends here</h1>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
};

export default template;

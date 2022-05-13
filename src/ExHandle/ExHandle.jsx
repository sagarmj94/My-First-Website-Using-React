import "./ExHandle.css";
import React from "react";
import Technology from './Technology/index';
import TechnologyExInterceptor from './TechnologyExInterceptor/index';
function template() {
  return (
    <div className="ex-handle">
      <h1>ExHandle</h1>
      <TechnologyExInterceptor>
          <Technology name='React JS'/>
      </TechnologyExInterceptor>
      <TechnologyExInterceptor>
          <Technology name='Amber JS'/>
      </TechnologyExInterceptor>
      <TechnologyExInterceptor>
          <Technology name='Node JS'/>
      </TechnologyExInterceptor>
      <TechnologyExInterceptor>
          <Technology name='Palo Alto'/>
      </TechnologyExInterceptor>
      <br/>
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

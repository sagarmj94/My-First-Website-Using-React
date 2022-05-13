import "./Menu.css";
import React,{lazy,Suspense} from "react";
//import Home from '../Home/index';
/*import About from '../About/index';
import Services from '../Services/index';
import ContactUs from '../ContactUs/index';
import Lists from '../Lists/index';
import Team from '../Team/index';*/
import { HashRouter, Routes, Route } from 'react-router-dom';

const Home=lazy(()=>import('../Home/index'));
const About=lazy(()=>import('../About/index'));
const Services=lazy(()=>import('../Services/index'));
const ContactUs=lazy(()=>import('../ContactUs/index'));
const Lists=lazy(()=>import('../Lists/index'));
const Team=lazy(()=>import('../Team/index'));
const Hoc=lazy(()=>import('../Hoc/index'));
const ExHandle=lazy(()=>import('../ExHandle/index'));
const Quiz=lazy(()=>import('../Quiz/index'));
//import {renderRoutes} from 'react-router-config';
//Routing v5
/*const myroutes=[{
     path:"/home",
     exact:true,
     component:Home
              },
              {
     path:"/home",
     exact:true,
     component:Home
              },
              {
     path:"/home",
     exact:true,
     component:Home
              }];
  function RouterApp(){
    return <div>
               <Router>{renderRoutes(myroutes)}</Router>
           </div>;
  }
          export default RouterApp;
          */
function template() {
  return (
    <div>
      <div className="menu">
        <div className="menu-items">
          <a href="#/home">Home</a>
          <a href="#/about">About</a>
          <a href="#/services">Services</a>
          <a href="#/contactus">Contact Us</a>
          <a href="#/lists">Lists</a>
          <a href="#/teams">Teams</a>
          <a href="#/hoc">Hoc</a>
          <a href="#/exhandle">ExHandle</a>
          <a href="#/quiz">Quiz</a>
        </div>
      </div>
      <HashRouter>
        <Suspense fallback='loading...'>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/exhandle" element={<ExHandle />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        </Suspense>
      </HashRouter>
      
    </div>
  );
};

export default template;

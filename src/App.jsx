import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./compenets/Navbar";
import Home from "./compenets/Home";
import Intro from "./compenets/Intro";
import Project from "./compenets/project";
import Skills from "./compenets/Skills";
import Resume from "./compenets/Resume";
import Contact from "./compenets/contact";

import AI from "./projects/AI";
import DS from "./projects/DS";
import SW from "./projects/SW";
//
function App() {
  return (
      <section>
          <Home/>
          <Intro/>
          <Project/>
          <Skills/>
          <Resume/>
          <Contact/>
        </section>
  );
}

export default App

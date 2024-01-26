import React from "react";
import "./App.css";
import Navbar from "./compenets/Navbar";
import Intro from "./compenets/Intro";
import Project from "./compenets/project";
import Skills from "./compenets/Skills";
import Resume from "./compenets/Resume";
import Contact from "./compenets/contact";

function App() {
  return (
    <section >
      <div >
        <Navbar/>
        <Intro/>
        <Project/>
        <Skills/>
        <Resume/>
        <Contact/>
      </div>
    </section>
  );
}

export default App

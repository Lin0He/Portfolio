import React from "react";
import "./project.css"
const project = () => {
    return (
        <div className="Project" id="Projects">
        <div className="projectContainer">
            <div className="projectBox">
                <span></span>
                <div className="projectContent">
                <h2>AI/ML Projects</h2>
                <p>CV, NLP, RecomS, everything about algorithms.</p>
                <a href="#ProjectAI">Explore</a>
                </div>
            </div>

            <div className="projectBox">
                <span></span>
                <div className="projectContent">
                <h2>Data Projects</h2>
                <p>Data anaylsis and modelling for financial data.</p>
                <a href="#ProjectData">Explore</a>
                </div>
            </div>

            <div className="projectBox">
                <span></span>
                <div className="projectContent">
                <h2>Software Projects</h2>
                <p>Softwares, API projects with business mind. </p>
                <a href="#ProjectSW">Explore</a>
                </div>
            </div>
        </div> 
        </div>
    );
}
export default project;
import React from "react";
import "./project.css"
import { Link } from 'react-router-dom';
const project = () => {
    return (
        <div className="Project" id="Projects">
        <div className="projectContainer">
            <div className="projectBox">
                <span></span>
                <div className="projectContent">
                <h2>AI/ML Projects</h2>
                <p>CV, NLP, RecomS, everything about algorithms.</p>
                <a href="AI">Explore</a>
                </div>
            </div>

            <div className="projectBox">
                <span></span>
                <div className="projectContent">
                <h2>Data Projects</h2>
                <p>Data anaylsis and modelling for financial data.</p>
                <a href="DS">Explore</a>
                </div>
            </div>

            <div className="projectBox">
                <span></span>
                <div className="projectContent">
                <h2>Software Projects</h2>
                <p>Softwares, API projects with business mind. </p>
                <a href="SW">Explore</a>
                </div>
            </div>
        </div> 
        </div>
    );
}
export default project;
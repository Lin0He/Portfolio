import React from "react";
import "./intro.css"
import { TypeAnimation } from "react-type-animation";
const character = new URL("./../images/me.png", import.meta.url);
const Intro = () => {
    return (
            <div className="box" id="About">
                <div className="content-wrapper">
                    <img src={character} className="character"/>
                    <div className="text-container">
                        <span className="typing">Hello! I'm&nbsp;<span className="introName">Lin</span></span>
                        <TypeAnimation
                        sequence={[ 
                            ' an AI Developer',
                            1000,
                            ' a Software Engineer',
                            1000,
                            ' a Data Scientist',
                            1000
                        ]}
                        className="intro"
                        wrapper="span"
                        speed={20}
                        style={{ fontSize: '2em'}}
                        repeat={Infinity}
                        />
                        
                    </div>
                </div>
            </div>
    );
}
export default Intro;
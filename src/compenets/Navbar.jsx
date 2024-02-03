import "./style.css"
import React, { useState, useEffect} from "react";
const menuIcon = new URL("./../images/menuIcon.png", import.meta.url);
import {Link} from 'react-scroll';


const Navbar =()=>  {
    const [IsSideOpen, setIsSideOpen] = useState(false);
    const [IsArchVisible, setIsArchVisible] = useState(true);

    function showSidebar(){
        const side = document.querySelector(".sidebar")
        side.style.display = 'flex'
        setIsSideOpen(true)
    };

    function hideSidebar(){
        const side = document.querySelector(".sidebar")
        side.style.display = 'none'
        setIsSideOpen(false)
    };

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth > 840) {
                hideSidebar();
            }
        };
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <body>
            <nav>
                <ul className="sidebar">
                    <li className="hideIcon" onClick={hideSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                    <li className="hideIcon"><a href="/#About">About</a></li>
                    <li className="hideIcon"><a href="/#Projects">Projects</a></li>
                    <li className="hideIcon"><a href="/#Skills">Skills</a></li>
                    <li className="hideIcon"><a href="/#Resume">Resume</a></li>
                    <li className="hideIcon"><a href="/#Contact">Contact</a></li>
                </ul>
                
                <ul className="navbar">
                    <li><a href="/#" >Home</a></li>
                    <li className="hideSide"><a href="/#About" >About</a></li>
                    <li className="hideSide"><a href="/#Projects" >Projects</a></li>
                    <li className="hideSide"><a href="/#Skills" >Skills</a></li>
                    <li className="hideSide"><a href="/#Resume">Resume</a></li>
                    <li className="hideSide"><a href="/#Contact" >Contact</a></li>
                    <li className={`${IsSideOpen ? 'hideSide' : 'hideIcon'}`} onClick = {showSidebar}><a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
                </ul>
               
            </nav >
        </body>
    );


};

export default Navbar;





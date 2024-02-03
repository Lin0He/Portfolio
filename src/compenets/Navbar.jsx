import "./style.css"
import React, { useState, useEffect} from "react";
const menuIcon = new URL("./../images/menuIcon.png", import.meta.url);
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar =()=>  {
    const [IsSideOpen, setIsSideOpen] = useState(false);

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
        <div>
        <body>
            <nav>
                <ul className="sidebar">
                    <li className="hideIcon" onClick={hideSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                    <li className="hideIcon"><a href="/Portfolio/#About">About</a></li>
                    <li className="hideIcon"><a href="/Portfolio/#Projects">Projects</a></li>
                    <li className="hideIcon"><a href="/Portfolio/#Skills">Skills</a></li>
                    <li className="hideIcon"><a href="/Portfolio/#Resume">Resume</a></li>
                    <li className="hideIcon"><a href="/Portfolio/#Contact">Contact</a></li>
                </ul>
                
                <ul className="navbar">
                    <li><a href="/Portfolio/" >Home</a></li>
                    <li className="hideSide"><a href="/Portfolio/#About" >About</a></li>
                    <li className="hideSide"><a href="/Portfolio/#Projects" >Projects</a></li>
                    <li className="hideSide"><a href="/Portfolio/#Skills" >Skills</a></li>
                    <li className="hideSide"><a href="/Portfolio/#Resume">Resume</a></li>
                    <li className="hideSide"><a href="/Portfolio/#Contact" >Contact</a></li>
                    <li className={`${IsSideOpen ? 'hideSide' : 'hideIcon'}`} onClick = {showSidebar}><a ><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
                </ul>
               
            </nav >
            
        </body>
        <Outlet/>
        </div>
    );


};

export default Navbar;





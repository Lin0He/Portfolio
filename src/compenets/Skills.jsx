import "./skills.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaRust } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";
import { FaLinux } from "react-icons/fa6";
import { FaUnity } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="Skills" >
      <div className="flex h-60 items-center justify-center">
        <span className="text-5xl  text-[#414563]">
          Professional Skills
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-78%"]);

  return (
    <section ref={targetRef} className="relative   h-[500vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-20">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className=" relative h-[400px] w-[600px] overflow-hidden 
      hover:bg-gradient-to-br from-white/5 to-white/5 hover:backdrop-blur-lg rounded-lg hover:shadow-lg
      sm:motion-safe:hover:scale-110 custom-css"
    >
      <div className="absolute inset-0 z-10 grid rounded-lg group
      ">
        <div className=" p-3 text-5xl text-[#414563] text-center
       group-hover:text-[#ffe371] group-hover:border-t-[5px] group-hover:border-[#ffe3718f]">
          {card.title  }
        </div>
        <div className="p-5 text-2xl text-[#414563] text-center
        group-hover:text-[#f0f8ff] ">{card.text}</div>
      </div>
    </div>
  );
};

export default Skills;

const cards = [
  {
    text: <div className="code_icon">
    <div className="icon_container">
      <FaPython />
      <span className="icon_text">Python</span>
    </div>
    <div className="icon_container">
      <TbBrandCpp />
      <span className="icon_text">C/C++</span>
    </div>
    <div className="icon_container">
      <IoLogoJavascript />
      <span className="icon_text">JavaScript</span>
    </div>
    <div className="icon_container">
      <FaRust />
      <span className="icon_text">Rust</span>
    </div>
  </div>,
    title: "Programming",
    id: 1,
  },
  {
    text:  <div className="code_icon">
    <div className="icon_container">
      <FaReact />
      <span className="icon_text">React</span>
    </div>
    <div className="icon_container">
      <SiPytorch />
      <span className="icon_text">Torch</span>
    </div>
    <div className="icon_container">
      <SiTensorflow />
      <span className="icon_text">Tensorflow</span>
    </div>
    <div className="icon_container">
      <SiKeras /> 
      <span className="icon_text">Keras</span>
    </div>
  </div>,
    title: "Framework",
    id: 2,
  },
  {
    text:  <div className="code_icon">
    <div className="icon_container">
      <FaGitAlt />
      <span className="icon_text">Git</span>
    </div>
    <div className="icon_container">
      <TbDatabase />
      <span className="icon_text">Database</span>
    </div>
    <div className="icon_container">
      <FaLinux />
      <span className="icon_text">Linux</span>
    </div>
    <div className="icon_container">
      <FaUnity />
      <span className="icon_text">Unity</span>
    </div>
  </div>,
    title: "Tools",
    id: 3,
  },
  {
    text: <div className="code_icon">
    <div className="icon_container">
      <img width="100" height="100" src="https://img.icons8.com/external-bzzricon-flat-bzzricon-studio/100/external-chinese-chinese-new-year-bzzricon-flat-bzzricon-flat-bzzricon-studio-3.png" alt="external-chinese-chinese-new-year-bzzricon-flat-bzzricon-flat-bzzricon-studio-3"/>
      <span className="icon_language">Mandarin</span>
    </div>
    <div className="icon_container">
      <img width="100" height="100" src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/100/external-Language-miscellany-texts-and-badges-bearicons-detailed-outline-bearicons.png" alt="external-Language-miscellany-texts-and-badges-bearicons-detailed-outline-bearicons"/>
      <span className="icon_language">English</span>
    </div>
    <div className="icon_container">
    <img width="100" height="100" src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/100/external-sakura-spring-photo3ideastudio-flat-photo3ideastudio-1.png" alt="external-sakura-spring-photo3ideastudio-flat-photo3ideastudio-1"/>
      <span className="icon_language">Japanese</span>
    </div>
    <div className="icon_container">
    <img width="100" height="100" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-windmill-marijuana-flaticons-lineal-color-flat-icons.png" alt="external-windmill-marijuana-flaticons-lineal-color-flat-icons"/>
      <span className="icon_language">Dutch</span>
    </div>
  </div>,
  
          
    title: "Languages",
    id: 4,
  },
  
];

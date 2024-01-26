import "./skills.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  return (
    <div id="Skills">
      <div className="flex h-40 items-center justify-center">
        <span className="text-6xl  text-[#414563]">
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
      className="group relative h-[400px] w-[600px] overflow-hidden 
      hover:bg-gradient-to-br from-white/5 to-white/5 hover:backdrop-blur-lg rounded-lg hover:shadow-lg
      sm:motion-safe:hover:scale-110 custom-css"
    >
      <div className="absolute inset-0 z-10 grid content-start justify-center rounded-lg 
      ">
        <p className=" p-3 text-5xl text-[#414563] 
        group-hover:text-[#ffe371] group-hover:border-t-[5px] group-hover:border-[#ffe3718f]">
          {card.title}
        </p>
        <p className="p-5 text-2xl text-[#414563] content-center
        group-hover:text-[#f0f8ff] ">{card.text}</p>
      </div>
    </div>
  );
};

export default Skills;

const cards = [
  {
    text: "python, C/C++, javascript, Rust ",
    title: "Programming",
    id: 1,
  },
  {
    text:  "Tensorflow, Cuda, Pytorch, Keras, React",
    title: "Framework",
    id: 2,
  },
  {
    text:  "Git, Conda, Latex, Linux/Unix, Unity",
    title: "Tools",
    id: 3,
  },
  {
    text: "Mandarin/Cantonese(Native), English(Professional), Japanese(Professional), Dutch(Beginning)",
    title: "Languages",
    id: 4,
  },
  
];

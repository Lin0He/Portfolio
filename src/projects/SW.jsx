import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import dashboardScreenshot from './../images/dashboard_screenshot.jpg';

const imgs = [
  {
    img: dashboardScreenshot,
    title: "Real-time Dashboard",
    description: "description1",
    url: "https://github.com/Lin0He/React-Refine-Dashboard",
  },
  {
    img: 'empty',
    title: "Title",
    description: "To be continue...",
    url: "",
  },

];

const navigateToUrl = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SW = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden pt-40 px-8">
      <div className=" relative h-fit w-full bg-white/20 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl hover:bg-transparent transition-colors shadow-none duration-500 ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center py-8 active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      </div>
    </div>
  );
};

export default SW

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            onClick={() => navigateToUrl(imgSrc.url)}
            style={{
              backgroundImage: `url(${imgSrc.img})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            
            className="aspect-video w-full shrink-0 rounded-xl bg-slate-50/50 object-cover"
          >
            <div style={{
              position: 'absolute', // Position text over the image
              color: 'black', // Ensure text is visible against dark backgrounds
              textAlign: 'left', // Center the text block
              padding: '20px', // Add some padding around the text
              left:0,
              bottom:'-100px',
            }}>
              <h2>{imgSrc.title}</h2>
              <p>{imgSrc.description}</p>
              </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

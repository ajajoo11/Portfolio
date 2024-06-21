/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SkillCards.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4 max-w-full overflow-hidden">
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card w-[150px] h-[150px] flex flex-col items-center bg-primary-500 rounded-xl border-4 border-primary-400 cursor-pointer m-2"
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-2 text-primary-200">
              <img
                className="h-[50px] w-[50px] bg-grayscale-25 rounded-full p-1 object-contain"
                src={skill.icon}
                alt={skill.title}
              />
              <span
                className="text-md"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {skill.title}
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;

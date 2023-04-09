import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-13vw" y="0vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="18vw" y="1vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="Typescript" x="-20vw" y="-15vw" />
        <Skill name="Firebase" x="15vw" y="-12vw" />
        <Skill name="GraphQl" x="32vw" y="-5vw" />
        <Skill name="AWS" x="0vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="-28vw" y="10vw" />
        <Skill name="Bootstrap" x="-32vw" y="-5vw" />
        <Skill name="Web Design" x="25vw" y="-15vw" />
        <Skill name="Github" x="28vw" y="8vw" />
      </div>
    </>
  );
};

export default Skills;

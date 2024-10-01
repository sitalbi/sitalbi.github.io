import React from "react";
import { skills } from "../data";

const listOfSkills = (skills) => {
  return skills.map(skill => (
    <div className="w-1/12 relative my-5">
      <img
        className="object-cover w-20 h-20"
        alt={skill.title}
        src={skill.image}>
      </img>
    </div>
  ))
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <img alt="Skills" src="./icons/chip.svg" className="w-20 inline-block mb-4"></img>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            The technologies and languages I use the most. I am eager to learn more !
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {listOfSkills(skills)}
        </div>
      </div>
    </section>
  );
}
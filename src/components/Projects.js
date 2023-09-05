import React from "react";
import { projects } from "../data";
import "../project.css"


const listOfProjects = (projects) => {
  return projects.map(project => (
    <div className="relative min-w-full min-h-full">
      <a href={project.link} class="projectImages">
        <img
          className="min-w-full min-h-full object-cover rounded"
          alt="Project"
          src={project.image}>
        </img>
        <h2 class="projectTitles">
          {project.title}
        </h2>
        <img
          className="min-w-full min-h-full object-cover rounded"
          alt="Project"
          src={project.gif}>
        </img>
      </a>
    </div>
  ))
}


export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <img alt="Projects" src="./icons/code.svg" className="mx-auto inline-block w-20 mb-4"></img>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A selection of some of my personal projects
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {listOfProjects(projects)}
        </div>
        <div className="flex justify-center m-8">
          <a
            href="https://github.com/sitalbi?tab=repositories"
            className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            See more on my GitHub !
          </a>
        </div>
      </div>
    </section>
  );
}
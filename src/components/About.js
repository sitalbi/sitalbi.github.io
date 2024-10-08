import React from "react";

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Simon.
            </h1>
            <p className="mb-8 leading-relaxed">
            Graduated from a Master's degree in Software Engineering at the University of Bordeaux, 
            I am fond of game development, computer graphics and game engines. You can find some of my ongoing personal projects below.
            </p>
            <div className="flex justify-center">
              <a
                href="#projects"
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Some of my projects here
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover rounded-full h-96 w-96"
              alt="Profile"
              src="https://avatars.githubusercontent.com/u/64929584?s=400&u=af853658b67aa659383efd59fa05d52e242d5e73&v=4"
            />
          </div>
        </div>
      </section>
    );
  }
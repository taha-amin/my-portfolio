import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-0 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mohamed Amin
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Engineer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Passionate about software engineering and full-stack development, I am
          a results-driven professional with experience in building high-quality
          mobile and web applications. With a strong foundation in JavaScript,
          React, and Node.js, I thrive in collaborative environments, leveraging
          my skills to create innovative solutions. I am motivated by challenges
          and dedicated to delivering exceptional user experiences. Let's
          connect and explore opportunities to contribute to exciting projects
          together!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

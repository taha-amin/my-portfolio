import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Mohamed, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Passionate about software engineering and full-stack development,
              I am a results-driven professional with experience in building
              high-quality mobile and web applications. With a strong foundation
              in JavaScript, React, and Node.js, I thrive in collaborative
              environments, leveraging my skills to create innovative solutions.
              I am motivated by challenges and dedicated to delivering
              exceptional user experiences. Let's connect and explore
              opportunities to contribute to exciting projects together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

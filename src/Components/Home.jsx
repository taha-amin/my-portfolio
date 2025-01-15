import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfilePicture from "../Assets/profilepicture.png";
import Resume from "../Assets/MohamedAminResume.pdf";

const Home = () => {
  const socialIcons = [
    {
      name: "GitHub",
      url: "https://github.com/taha-amin",
      icon: <FaGithub size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohaamin/",
      icon: <FaLinkedin size={24} />,
    },
  ];
  return (
    <div
      name="home"
      className="w-full h-screen bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="space-y-4">
          <div className="flex items-center">
            <img
              src={ProfilePicture}
              alt="Mohamed Amin"
              className="w-40 h-40 rounded-full object-cover mr-4"
            />
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold dark:text-white transition-colors duration-200">
            Mohamed Amin
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Software Engineer based in Portland, Oregon
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-[600px] leading-relaxed transition-colors duration-200">
            Over the years I've delivered optimized, user-focused applications,
            specializing in scalable web solutions with rich user interfaces
            built using JavaScript. Currently, I'm building innovative AI agent
            solutions at{" "}
            <a
              href="https://www.argoh.dev/"
              className="underline decoration-black dark:decoration-white hover:decoration-2"
              target="_blank"
              rel="noreferrer"
            >
              Argoh.dev
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-[600px] leading-relaxed transition-colors duration-200">
            {/* ESLint was causing some issues with the spaces in this JSX code so I used curly braces with string literals to fix the issue */}
            {`If you'd like to collaborate, please `}
            <a
              href="mailto:mohamedamin2009ster@gmail.com"
              className="underline decoration-black dark:decoration-white hover:decoration-2"
            >
              send me an email
            </a>
            {` or reach out to any of my social handles`}
          </p>
          <div className="pt-4">
            <div className="flex space-x-6 mb-8">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white underline transition-colors duration-200"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

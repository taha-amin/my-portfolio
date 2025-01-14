import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <div name="home" className="w-full h-screen bg-white">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl font-bold">Mohamed Amin</h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600">
            Software Engineer based in Portland, Oregon
          </h2>
          <p className="text-gray-600 max-w-[600px] leading-relaxed">
            Over the years I've delivered optimized, user-focused applications,
            specializing in scalable web solutions with rich user interfaces
            built using JavaScript. Currently, I'm building innovative AI agent
            solutions at{" "}
            <a
              href="https://www.argoh.dev/"
              style={{ textDecoration: "underline black" }}
              target="_blank"
              rel="noreferrer"
            >
              Argoh.dev
            </a>
          </p>
          <p className="text-gray-600 max-w-[600px] leading-relaxed">
            {/* ESLint was causing some issues with the spaces in this JSX code so I used curly braces with string literals to fix the issue */}
            {`If you'd like to collaborate, please `}
            <a
              href="mailto:mohamedamin2009ster@gmail.com"
              style={{ textDecoration: "underline black" }}
            >
              send me an email
            </a>
            {` or reach out to any of my social handles`}
          </p>
          <div className="flex space-x-6">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

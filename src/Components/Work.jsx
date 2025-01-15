import React from "react";
import JobApp from "../Assets/Projects/jobify.png";
import Dashboard from "../Assets/Projects/financialdashboard.png";
import Blog from "../Assets/Projects/blog.png";
import Netibot from "../Assets/Projects/netibot.png";

const Work = () => {
  const projects = [
    {
      title: "Job Tracking App",
      description:
        "A beautiful stylized job application tracker built with React, Node.js, and MongoDB.",
      image: JobApp,
      demo: "https://applyzen.onrender.com",
      github: "https://github.com/taha-amin/job-app",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Financial Dashboard",
      description:
        "A simplified financial dashboard built using Next.js and hosted on Vercel",
      image: Dashboard,
      demo: "https://nextjs-dashboard-lemon-five.vercel.app/",
      github: "https://github.com/taha-amin/nextjs-dashboard",
      tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    },
    {
      title: "Blog Application",
      description:
        "A simple blog application built using Next.js demonstrating static site generation and dynamic routing",
      image: Blog,
      demo: "https://nextjs-blog-mu-snowy-13.vercel.app/",
      github: "https://github.com/taha-amin/nextjs-blog",
      tech: ["Next.js", "React", "Markdown", "CSS Modules"],
    },
    {
      title: "NetiBot",
      description:
        "Dynamic and entertaining Discord bot designed to enhance your server with fun & interactive commands",
      image: Netibot,
      demo: "https://discord.com/api/oauth2/authorize?client_id=997611125887733923&permissions=8&scope=bot%20applications.commands",
      github: "https://github.com/NetiBot/NetiBotApp",
      tech: ["Node.js", "Discord.js", "MongoDB", "REST API"],
    },
    // Add more projects here
  ];

  return (
    <div
      name="work"
      className="w-full min-h-screen bg-white dark:bg-gray-900 py-20 transition-colors duration-200"
    >
      <div className="max-w-[1000px] mx-auto p-8">
        <h2 className="text-4xl font-bold mb-2 dark:text-white transition-colors duration-200">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 transition-colors duration-200">
          Some things I've built
        </p>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center p-6 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold dark:text-white transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-sm rounded-full transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-600 dark:hover:border-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

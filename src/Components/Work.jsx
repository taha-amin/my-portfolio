import React from "react";
import JobApp from "../Assets/Projects/jobify.png";
import Dashboard from "../Assets/Projects/financialdashboard.png";
import Blog from "../Assets/Projects/blog.png";
import Netibot from "../Assets/Projects/netibot.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 text-gray-300">Check out some of my work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* Job App Project */}
          <div className="relative group">
            <div
              style={{ backgroundImage: `url(${JobApp})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a
                    href="https://applyzen.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Try It Out
                    </button>
                  </a>
                  <a
                    href="https://github.com/taha-amin/job-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-300">
              <h3 className="text-2xl font-bold">Job Tracking App</h3>
              <p className="my-2">
                Take control of your job search with this beautiful stylized job
                tracker!
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  React
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  Express
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          {/* Financial Dashboard */}
          <div className="relative group">
            <div
              style={{ backgroundImage: `url(${Dashboard})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a
                    href="https://nextjs-dashboard-lemon-five.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/taha-amin/nextjs-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-300">
              <h3 className="text-2xl font-bold">Financial Dashboard</h3>
              <p className="my-2">
                A simplified financial dashboard built using NextJS and hosted
                on Vercel.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  Tailwind
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>

          {/* Blog Project */}
          <div className="relative group">
            <div
              style={{ backgroundImage: `url(${Blog})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a
                    href="https://nextjs-blog-mu-snowy-13.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/taha-amin/nextjs-blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-300">
              <h3 className="text-2xl font-bold">Blog Application</h3>
              <p className="my-2">
                A simple blog application built with Next.js demonstrating
                static site generation and dynamic routing.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  React
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  Markdown
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  CSS Modules
                </span>
              </div>
            </div>
          </div>

          {/* NetiBot Project */}
          <div className="relative group">
            <div
              style={{ backgroundImage: `url(${Netibot})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <div className="pt-8 text-center">
                  <a
                    href="https://discord.com/api/oauth2/authorize?client_id=997611125887733923&permissions=8&scope=bot%20applications.commands"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Invite Bot
                    </button>
                  </a>
                  <a
                    href="https://github.com/NetiBot/NetiBotApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-300">
              <h3 className="text-2xl font-bold">NetiBot</h3>
              <p className="my-2">
                Dynamic and entertaining Discord bot designed to enhance your
                server with fun & interactive commands.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  Discord.js
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  MongoDB
                </span>
                <span className="px-2 py-1 bg-pink-600 rounded-md text-sm">
                  REST API
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

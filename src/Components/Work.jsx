import React from "react";
// import Futboard from "../Assets/Projects/futboard.png";
// import Shift2Shift from "../Assets/Projects/shift2shift.png";
import Dashboard from "../Assets/Projects/financialdashboard.png";
import Netibot from "../Assets/Projects/netibot.png";
import JobApp from "../Assets/Projects/jobify.png";

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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item // JOB APP */}
          <div
            style={{ backgroundImage: `url(${JobApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects // JOB APP */}
            <div className="opacity-0 group-hover:opacity-100">
              {/* <span className="text-2xl font-bold text-black tracking-wider">
                MERN Stack
              </span> */}
              <div className="pt-8 text-center">
                {/* Don't forget to add live demo link here */}
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

          {/* Grid Item // NEXTJS DASHBOARD */}
          <div
            style={{ backgroundImage: `url(${Dashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects // NEXTJS DASHBOARD */}
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

          {/* Grid Item // NETIBOT */}
          <div
            style={{ backgroundImage: `url(${Netibot})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects // NETIBOT */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=997611125887733923&permissions=8&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Invite Link
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
        </div>
      </div>
    </div>
  );
};

export default Work;

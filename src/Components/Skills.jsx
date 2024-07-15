import React from "react";
import JavaScriptAsset from "../Assets/javascript.png";
import NodeAsset from "../Assets/node.png";
import PostgresqlAsset from "../Assets/postgresql.png";
import ReactAsset from "../Assets/react.png";
import NextJSAsset from "../Assets/nextjs.png";
import TypeScriptAsset from "../Assets/typescript.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">Tech Stack: </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          {/* React icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactAsset} alt="React icon" />
            <p className="my-4">React</p>
          </div>

          {/* JavaScript icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScriptAsset}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          {/* Node.js icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NodeAsset} alt="Node icon" />
            <p className="my-4">Node.js</p>
          </div>

          {/* Postgresql icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={PostgresqlAsset}
              alt="Postgresql icon"
            />
            <p className="my-4">Postgresql</p>
          </div>

          {/* NextJS icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NextJSAsset} alt="NextJS icon" />
            <p className="my-4">Next.JS</p>
          </div>

          {/* TypeScript icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TypeScriptAsset}
              alt="TypeScript icon"
            />
            <p className="my-4">TypeScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

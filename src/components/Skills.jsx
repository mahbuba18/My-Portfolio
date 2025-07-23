import React from "react";
import lottiDataTeam from "../assets/Lotti/Live chatbot.json";
import Lottie from "lottie-react";
import { TbLockSquareRounded } from "react-icons/tb";
import { AiFillPicture } from "react-icons/ai";
import { SiVorondesign } from "react-icons/si";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <div
      id="about"
      className=" pb-20 pt-20 bg-base-200 min-h-screen shadow-lg lg:px-30 md:px-15 sm:px-10"
    >
      <div className="pb-4">
        <h1 className="flex items-center justify-center text-center text-5xl font-bold bg-gradient-to-r from-green-600 to-sky-500 text-transparent bg-clip-text mb-2 gap-2 ">
          <GiSkills className="text-5xl text-white" />
          Skills
        </h1>
      </div>

      <div>
        <div className="lg:flex text-[#556877]  gap-8">
          <div className="lg:w-1/2 flex justify-center items-center">
            <Lottie
              className="w-full max-w-[600px] h-[400px]"
              animationData={lottiDataTeam}
            />
          </div>
          <div className="lg:w-1/2  text-justify">
            <ul className="mt-4 space-y-2">
              <li className="flex items-start lg:p-4">
                <TbLockSquareRounded className="justify-center h-18 w-18 text-gray-600 mt-1 mr-2 hover:text-sky-500" />
                <div>
                  <p className="font-bold lg:text-xl hover:text-sky-500">
                    YOUR 24/7 MARKETING TOOL
                  </p>
                  <p>
                    Whether you're at work or not, your internet site is
                    continually operating to your business.
                  </p>
                </div>
              </li>
              <li className="flex items-start lg:p-4">
                <AiFillPicture className="justify-center h-18 w-18 text-gray-600 mt-1 mr-2 hover:text-sky-500" />
                <div>
                  <p className="font-bold lg:text-xl hover:text-sky-500">
                    BRINGING YOUR WEBSITE TO LIFE
                  </p>
                  <p>
                    Once the course for your website has been decided, we'll
                    start coding to convey it to life.
                  </p>
                </div>
              </li>
              <li className="flex items-start lg:p-4">
                <SiVorondesign className="justify-center h-18 w-18 text-gray-600 mt-1 mr-2 hover:text-sky-500" />
                <div>
                  <p className="font-bold lg:text-xl hover:text-sky-500">
                    WIREFRAMING AND WEB DESIGN
                  </p>
                  <p>
                    After the Discovery Session, we begin to drag our thoughts
                    for your internet site together.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React, { useEffect, useState } from "react";
// import myImage1 from "../../assets/images/priya_01.png"
// import myImage2 from "../../assets/images/priya_02.png"
import helloLotti from "../../assets/Lotti/hello.json";
import Lottie from "lottie-react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdCastConnected } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Bannar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const attributes = [
    "a Web Developer.",
    "a CSE Engineer, JUST.",
    "a MERN Stack Developer.",
    "a Python Developer.",
  ];

  useEffect(() => {
    const currentText = attributes[currentIndex];

    const timer = setTimeout(
      () => {
        if (isTyping) {
          // Typing phase
          if (charIndex < currentText.length) {
            setDisplayedText(currentText.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Finished typing, wait then start erasing
            setTimeout(() => {
              setIsTyping(false);
            }, 1500); // Wait 1.5 seconds before erasing
          }
        } else {
          // Erasing phase
          if (charIndex > 0) {
            setDisplayedText(currentText.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Finished erasing, move to next text
            setIsTyping(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % attributes.length);
          }
        }
      },
      isTyping ? 100 : 50
    ); // Typing speed: 100ms, Erasing speed: 50ms

    return () => clearTimeout(timer);
  }, [currentIndex, charIndex, isTyping]);
  return (
    <div className="pt-8 hero bg-base-200 min-h-screen shadow-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img
          src={myImage2}
          className="max-w-sm rounded-b-full h-[350px] w-[500px] "
        /> */}
        <Lottie className="h-[400px]" animationData={helloLotti}></Lottie>
        <div className="px-10">
          <h1 className="text-4xl font-bold">
            Hi, I'm{" "}
            <span
              style={{
                fontFamily: '"Bitcount Single", system-ui',
                fontWeight: 700,
              }}
              className="lg:text-4xl  text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-green-500"
            >
              Mahaboba Islam Priya
            </span>
          </h1>
          <p className="lg:text-2xl text-xl p-2 font-medium  ">
            {displayedText}
            <span className="animate-pulse text-green-500">|</span>
          </p>
          <p className="py-6  mx-w-auto">
            Eager to apply my skills in a professional setting, I’m currently
            looking for internship positions as a Junior Full-Stack or
            Software Engineer.
          </p>
          <div className="flex  gap-2 pb-4 lg:gap-4 text-3xl  ">
            <a
              href="https://www.linkedin.com/in/mahaboba-islam-priya-67789a1ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mahbuba18"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-green-400 bg-transparent bg-clip-text"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:yourmail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <SiGmail />
            </a>

            <a
              href="https://www.facebook.com/mahbubaislam.priya"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 bg-transparent bg-clip-text"
            >
              <FaSquareFacebook />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <ImWhatsapp />
            </a>
          </div>
          <a
            href="/public/Mahaboba_Islam_Priya_Resume.pdf"
            download
            className="btn  text-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-green-500 hover:from-green-500 hover:to-sky-400 hover:scale-105 transition-all duration-300"
          >
            {" "}
            <FaCloudDownloadAlt />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannar;

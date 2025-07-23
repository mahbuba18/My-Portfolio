import React from "react";
// import myImage1 from "../../assets/images/priya_01.png"
// import myImage2 from "../../assets/images/priya_02.png"
import helloLotti from "../../assets/Lotti/hello.json"
import Lottie from "lottie-react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Bannar = () => {
  return (
    <div className="pt-8 hero bg-base-200 min-h-screen shadow-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img
          src={myImage2}
          className="max-w-sm rounded-b-full h-[350px] w-[500px] "
        /> */}
        <Lottie className="h-[400px]" animationData={helloLotti}></Lottie>
        <div>
          <h1 className="text-5xl font-bold">This is...<br></br><span style={{ fontFamily: '"Bitcount Single", system-ui', fontWeight:700, }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-green-500">Mahaboba Islam Priya!</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in.<br></br> Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.<br></br> In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn text-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-green-500 hover:from-green-500 hover:to-sky-400 hover:scale-105 transition-all duration-300"> < FaCloudDownloadAlt />Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;

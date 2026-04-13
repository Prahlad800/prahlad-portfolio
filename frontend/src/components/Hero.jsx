import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const avatar_url = "https://avatars.githubusercontent.com/u/153346739?v=4";
const handleResumeClick = () => {
  window.open("/Resume.pdf", "_blank");
};

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-around px-10 
    bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">

      {/* 🔥 Background Glow Effect */}
      {/* <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] top-10 left-10 rounded-full"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] bottom-10 right-10 rounded-full"></div> */}

      {/* 👇 Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="p-[6px] rounded-full bg-gradient-to-r from-purple-400 to-indigo-300 shadow-[0_0_60px_rgba(179,161,237,0.6)]">
          
          {/* Glass effect */}
          <div className="p-[6px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
            <img
              src={avatar_url}
              alt=""
              className="w-80 object-cover rounded-full"
            />
          </div>

        </div>
      </motion.div>

      {/* 👇 Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="flex flex-col justify-center">

          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-400">Hi...</span> I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Prahlad
            </span>
          </motion.h1>

          <h3 className="text-xl md:text-2xl text-gray-300 mt-2">
            Creative Developer
          </h3>

          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-purple-400">
            Full Stack Web Developer
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            A passionate fresher focused on building responsive and
            user-friendly web applications while continuously learning and
            improving my skills.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-6">

            <button className="px-10 py-2 rounded-full font-medium text-white
              bg-gradient-to-r from-purple-500 to-indigo-500
              hover:scale-105 hover:shadow-2xl transition duration-300">
              Contact Me
            </button>

            <button  
            onClick={handleResumeClick}
            className="px-10 py-2 rounded-full font-medium
              border border-white/20 text-white
              backdrop-blur-md bg-white/5
              hover:bg-purple-500 hover:text-white
              hover:scale-105 hover:shadow-xl transition duration-300">
              Get Resume
            </button>

          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;
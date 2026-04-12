import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const avatar_url = "https://avatars.githubusercontent.com/u/153346739?v=4";
  return (
    <div className="h-[110vh] w-full flex   items-center justify-around px-10 ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="p-[6px] rounded-full bg-gradient-to-r from-purple-400 to-indigo-300 shadow-[0_0_40px_rgba(179,161,237,0.6)]">
          <div className="p-[6px] rounded-full bg-white inset-shadow-blue-50 shadow-[0_0_50px_24px_rgba(179,161,237,0.57)]">
            <img
              src={avatar_url}
              alt=""
              className="w-70  object-cover rounded-full shadow-blue-100"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <div className="w-[100%] flex flex-col justify-center px-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]">
              Prahlad
            </span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-medium text-purple-500">
            Full Stack Web Developer
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
            A passionate fresher focused on building responsive and
            user-friendly web applications while continuously learning and
            improving my skills.
          </p>
          <div className="mt-8 flex -ml-20 justify-around">
            <button className="px-10 py-2 bg-purple-400 text-white rounded-full font-medium hover:shadow-2xl/60 hover:bg-purple-600 hover:scale-105 transition duration-300">
              Contact Me
            </button>

            <button className="px-10 py-2 border-2 border-purple-500 text-purple-500 rounded-full font-medium hover:shadow-2xl/60 hover:bg-purple-500 hover:text-white hover:scale-105 transition duration-300">
              Get Resume
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;

import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const avatar_url = "https://avatars.githubusercontent.com/u/153346739?v=4";

  const handleResumeClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-around px-6 md:px-10 py-10 
    bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* 👇 Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-10 md:mb-0"
      >
        <div className="p-[5px] rounded-full bg-gradient-to-r from-purple-400 to-indigo-300 shadow-[0_0_50px_rgba(179,161,237,0.6)]">
          <div className="p-[5px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
            <img
              src={avatar_url}
              alt=""
              className="w-40 sm:w-52 md:w-72 lg:w-80 object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* 👇 Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center md:text-left"
      >
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-400">Hi...</span> I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Prahlad
            </span>
          </motion.h1>

          <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-2">
            Creative Developer
          </h3>

          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-purple-400">
            Full Stack Web Developer
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-400 max-w-md md:max-w-xl leading-relaxed text-sm sm:text-base">
            A passionate fresher focused on building responsive and
            user-friendly web applications while continuously learning and
            improving my skills.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 sm:px-10 py-2 rounded-full font-medium text-white
              bg-gradient-to-r from-purple-500 to-indigo-500
              hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              Contact Me
            </button>

            <button
              onClick={handleResumeClick}
              className="px-8 sm:px-10 py-2 rounded-full font-medium
              border border-white/20 text-white
              backdrop-blur-md bg-white/5
              hover:bg-purple-500 hover:text-white
              hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Get Resume
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

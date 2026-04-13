import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-gradient-to-b from-black via-gray-900 to-black border-t border-white/10">
      {/* 🔥 Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] top-0 left-0 rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 blur-[120px] bottom-0 right-0 rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Name */}
          <h2
            className="text-2xl font-bold 
          bg-gradient-to-r from-purple-400 to-indigo-400 
          bg-clip-text text-transparent"
          >
            Prahlad
          </h2>

          {/* Nav Links */}
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Prahlad800"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 
              hover:bg-purple-500 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/prahlad800"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 
              hover:bg-purple-500 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            {/* <a href="#"
              className="p-3 rounded-full bg-white/5 border border-white/10 
              hover:bg-purple-500 hover:scale-110 transition">
              <FaTwitter />
            </a> */}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Prahlad. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>prahlad9026@gmail.com</span>
          </div>
        </div>
      </div>

      {/* 🔥 Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 p-3 rounded-full 
        bg-gradient-to-r from-purple-500 to-indigo-500 
        text-white shadow-lg hover:shadow-xl transition"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
};

export default Footer;

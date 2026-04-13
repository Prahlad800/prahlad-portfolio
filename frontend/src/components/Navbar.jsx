import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-[10px] left-[30px] right-[30px] z-50"
    >
      <div className="
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        rounded-full 
        px-6 py-3 
        shadow-lg
      ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* 🔥 Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-wide 
            bg-gradient-to-r from-purple-400 to-indigo-400 
            bg-clip-text text-transparent"
          >
            Prahlad
          </a>

          {/* 🔥 Links */}
          <div className="flex items-center gap-6">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white 
                transition duration-300 text-sm font-medium relative group"
              >
                {link.name}

                {/* underline hover effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            

            {/* 🔥 Resume Button (Glass style) */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-2 rounded-full text-sm font-medium text-white
                bg-gradient-to-r from-purple-500 to-indigo-500
                hover:scale-105 hover:shadow-xl
                transition duration-300
              "
            >
              Resume
            </a>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      className="fixed top-3 left-4 right-4 md:left-[30px] md:right-[30px] z-50"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-3 shadow-lg">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* 🔥 Logo */}
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-wide 
            bg-gradient-to-r from-purple-400 to-indigo-400 
            bg-clip-text text-transparent"
          >
            Prahlad
          </a>

          {/* 🔥 Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white 
                transition duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium text-white
              bg-gradient-to-r from-purple-500 to-indigo-500
              hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* 🔥 Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 🔥 Mobile Dropdown */}
        {isOpen && (
          <div className="mt-4 md:hidden flex flex-col items-center gap-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium text-white
              bg-gradient-to-r from-purple-500 to-indigo-500"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
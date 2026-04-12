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
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="fixed top-[10px] left-[30px] right-[30px]  backdrop-blur-md bg-gray-500/70 border border-white/10 rounded-full px-6 py">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-gray-900 tracking-wide hover:text-blue-800 transition"
          >
            Prahlad
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-blue-600 transition duration-300 text-sm font-medium "
              >
                {link.name}
              </a>
            ))}
            <button className="text-gray-900 hover:text-blue-600 transition duration-300 text-sm font-medium ">
              Dark mode
            </button>

            {/* Resume Button */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-blue-500/30"
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

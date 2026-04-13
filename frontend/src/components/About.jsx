import React from 'react';
import { Monitor, ServerCog, Database, Code2 } from "lucide-react";
import { motion } from "framer-motion";

function About() {

  const cards = [
    {
      icon: <Monitor className="text-blue-500 w-10 h-10" />,
      title: "Frontend Development",
      desc: "Building responsive and interactive user interfaces using React.js, Tailwind CSS, and modern UI practices."
    },
    {
      icon: <ServerCog className="text-purple-500 w-10 h-10" />,
      title: "Backend Development",
      desc: "Creating secure and scalable server-side applications with Node.js, Express, and RESTful APIs."
    },
    {
      icon: <Database className="text-green-500 w-10 h-10" />,
      title: "Database Management",
      desc: "Designing and managing efficient data models using MongoDB with optimized queries and schemas."
    },
    {
      icon: <Code2 className="text-orange-500 w-10 h-10" />,
      title: "Clean & Scalable Code",
      desc: "Writing maintainable, reusable, and well-structured code following best practices and performance standards."
    }
  ];

  return (
    <section id='about' className="py-24 bg-gradient-to-b bg-[#020617] text-center">

      {/* Badge */}
      <div className="mb-4">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
          About Me
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        What I Bring to the Table
      </h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
      >
        I'm a passionate self-taught full stack developer who enjoys building real-world web applications.
        I focus on writing clean code, creating responsive user interfaces, and developing scalable backend systems.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-6 md:px-20">
        {cards.map((card, index) => {

          const isLeft = index < 2;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: isLeft ? -100 : 100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
              className="
                p-6 rounded-2xl 
                bg-gradient-to-br from-white/10 to-white/5 
                backdrop-blur-xl 
                border border-white/10 
                shadow-lg 
                hover:scale-105 
                hover:shadow-2xl 
                hover:border-purple-400/40 
                hover:bg-white/10
                transition duration-300
              "
            >

              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-xl 
                                bg-gradient-to-br from-white/20 to-white/5 
                                backdrop-blur-md">
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.desc}
              </p>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}

export default About;
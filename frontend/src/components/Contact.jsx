import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await axios.post("https://prahlad-portfolio.onrender.com", formData);

      if (res.data.success) {
        setStatus({
          loading: false,
          success: "Message sent successfully 🚀",
          error: null
        });

        setFormData({ name: "", email: "", comment: "" });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong ❌"
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b bg-[#020617]">

      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
          Get in Touch
        </span>

        <h2 className="text-4xl font-bold mt-4 text-white">
          Let’s Build Something Together
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        {/* 🔥 FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl 
          bg-gradient-to-br from-white/10 to-white/5 
          backdrop-blur-xl border border-white/10 shadow-lg"
        >

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 text-white 
              focus:outline-none focus:border-purple-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 text-white 
              focus:outline-none focus:border-purple-400"
            />

            <textarea
              name="comment"
              rows="5"
              placeholder="Your Message..."
              required
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg 
              bg-white/5 border border-white/10 text-white 
              focus:outline-none focus:border-purple-400"
            ></textarea>

            <button
              disabled={status.loading}
              className="w-full flex items-center justify-center gap-2
              px-6 py-3 rounded-full font-medium text-white
              bg-gradient-to-r from-purple-500 to-indigo-500
              hover:scale-105 hover:shadow-xl transition duration-300"
            >
              {status.loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>

            {status.success && (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle size={18} /> {status.success}
              </div>
            )}

            {status.error && (
              <div className="flex items-center gap-2 text-red-400">
                <AlertCircle size={18} /> {status.error}
              </div>
            )}

          </form>
        </motion.div>

        {/* 🔥 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-6"
        >

          <h3 className="text-2xl font-semibold text-white">
            Contact Info
          </h3>

          <p className="text-gray-400">
            Want to collaborate or just say hi? Drop a message or reach out directly.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300">

            <div className="flex items-center gap-3">
              <Mail className="text-purple-400" size={18} />
              <span>prahlad9026@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-purple-400" size={18} />
              <span>+91 80098 72468</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-purple-400" size={18} />
              <span>Noida India</span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">

            <a href="https://github.com/Prahlad800"
             target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 
              hover:bg-purple-500 transition hover:scale-110">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/prahlad800"
             target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 
              hover:bg-purple-500 transition hover:scale-110">
              <FaLinkedin />
            </a>

            {/* <a href="#"
              className="p-3 rounded-full bg-white/5 border border-white/10 
              hover:bg-purple-500 transition hover:scale-110">
              <FaTwitter />
            </a> */}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
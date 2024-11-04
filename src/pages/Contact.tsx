import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-purple-50 to-purple-200">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-extrabold text-center mb-10 text-purple-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
        {/* Contact Information on the Left */}
        <div className="flex-1 flex flex-col gap-6">
          {/* LinkedIn Card */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaLinkedin className="text-purple-500 text-3xl mr-4" />
            <a href="https://www.linkedin.com/in/bintul-huda/" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-purple-600">
              LinkedIn
            </a>
          </motion.div>

          {/* Behance Card */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaBehance className="text-purple-500 text-3xl mr-4" />
            <a href="https://www.behance.net/bintulhuda/projects" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-purple-600">
              Behance
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaPhoneAlt className="text-purple-500 text-3xl mr-4" />
            <a href="tel:+1234567890" className="text-2xl font-semibold text-purple-600">
              +353 899458676
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaEnvelope className="text-purple-500 text-3xl mr-4" />
            <a href="mailto:bintulgraphics@gmail.com" className="text-2xl font-semibold text-purple-600">
              Email Me
            </a>
          </motion.div>
        </div>

        {/* Contact Form on the Right */}
        <motion.form
          className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-purple-600 mb-6 text-center">Get in Touch</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaHackerrank, FaCameraRetro } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mt-12 flex flex-col justify-center items-center h-screen text-center px-4 bg-[#151515] text-white overflow-hidden"
    >
      {/* Welcome message */}
      {/* <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-400 mb-2"
      >
        👋 Hey There! Glad you're here
      </motion.p> */}

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl md:text-xl font-bold"
      >
        Hey there, glad you are here!
      </motion.h1>

      {/* Intro paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed"
      >
I’m Aasif Azlan, a MERN Stack Developer with 1+ year of experience building scalable full-stack applications using React, Node.js, Express, MongoDB, Zustand, and Stripe. My projects range from e-commerce platforms to AI-powered tools. Outside of coding, I enjoy exploring AI, writing poetry, cycling, trekking, and playing table tennis. I’m passionate about solving real-world problems and turning ideas into impactful digital solutions.


      </motion.p>

      {/* Type Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-6 text-xl md:text-2xl text-blue-400 font-medium"
      >
        <TypeAnimation
          sequence={[
            'Travel Enthusiast', 2000,
            'Developer', 2000,
            'Problem Solver', 2000,
            'Art Lover', 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="flex space-x-6 mt-8 text-2xl"
      >
        <a href="https://linkedin.com/in/aasifazlan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aasifazlan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaGithub />
        </a>
        <a href="https://www.hackerrank.com/aasifazlaan" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaHackerrank />
        </a>
        <a href="https://leetcode.com/aasifazlan" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <SiLeetcode />
        </a>
        
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}

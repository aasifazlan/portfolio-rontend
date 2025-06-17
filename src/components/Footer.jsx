import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-gray-300 text-center py-5 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="flex flex-wrap justify-center items-center gap-4 text-2xl"
      >
        <p className="text-md w-full sm:w-auto">Connect:</p>

        <a
          href="https://linkedin.com/in/aasifazlan"
          aria-label="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:aasifazlaan@gmail.com"
          aria-label="Send Email"
          className="hover:text-red-500"
          title="Email me"
        >
          <SiGmail />
        </a>

        {/* <a
          href="https://wa.me/918076585930"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a> */}
      </motion.div>
    </footer>
  );
};

export default Footer;

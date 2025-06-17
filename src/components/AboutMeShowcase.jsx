import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutCode = `
/* About Aasif Azlan */

const developer = {
  name: "Aasif Azlan",
  role: "MERN Stack Developer",
  experience: "1+ years",
  stack: ["React", "Node", "MongoDB", "Express", "Zustand", "Stripe"],
  softSkills: ["Problem-Solving", "Teamwork", "Creativity"],
  hobbies: ["Poetry", "AI Exploration", "Cycling", "Trekking"],
  quote: "Building products that blend logic, design, and empathy."
};

export default developer;
`;

const rotatingQuotes = [
  "Turning ideas into scalable apps 💡",
  "Breathing life into APIs & UI 🚀",
  "Clean code is self-respect 💻",
  "Engineer by skill, artist by passion 🎨",
  "Always curious, always building 🧠",
];

export default function AboutMeShowcase() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#151515] text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">👨‍💻 Aasif’s Brain in Code</h2>

      <div
        ref={containerRef}
        className="relative resize-y overflow-auto min-h-[250px] max-h-[80vh] border border-gray-600 rounded-lg bg-[#1e1e1e] shadow-lg p-4 font-mono"
      >
        {/* Code display */}
        <pre className="whitespace-pre-wrap text-white text-sm leading-relaxed">
          {aboutCode}
        </pre>

        {/* Rotating Thought */}
        <AnimatePresence>
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-6 right-6 bg-white/10 text-white border border-white/20 backdrop-blur-md px-4 py-3 rounded-lg shadow-lg text-sm max-w-[260px] text-right"
          >
            {rotatingQuotes[quoteIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

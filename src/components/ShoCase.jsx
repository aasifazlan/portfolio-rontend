import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sampleCards = [
  { id: 1, content: "🛒 MERN E-Commerce: JWT, Stripe, Zustand, Redis" },
  { id: 2, content: "📺 Netflix Clone: Auth, Media Stream, Zustand" },
  { id: 3, content: "💼 LinkedIn Clone: Profiles, Jobs, Realtime Chat" },
  { id: 4, content: "📚 Unscripted India CMS: History, Cloudinary Uploads" },
  { id: 5, content: "🤖 AI Chatbot with Gemini 1.5 Flash" },
];

export default function ShoCase() {
  const [visibleCard, setVisibleCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCard = sampleCards[Math.floor(Math.random() * sampleCards.length)];
      setVisibleCard({ ...randomCard, key: Date.now() });

      setTimeout(() => {
        setVisibleCard(null);
      }, 3500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getRandomPosition = () => {
    const container = containerRef.current;
    if (!container) return { top: "50%", left: "50%" };

    const box = container.getBoundingClientRect();
    const top = Math.random() * (box.height - 100); // Avoid bottom overflow
    const left = Math.random() * (box.width - 200); // Avoid side overflow

    return { top, left };
  };

  const cardStyle = (position) => ({
    position: "absolute",
    top: position.top,
    left: position.left,
    width: "clamp(160px, 30vw, 300px)",
    padding: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    border: "1px solid white",
    borderRadius: "14px",
    color: "#ffffff",
    fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
    fontWeight: "bold",
    backdropFilter: "blur(8px)",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    wordBreak: "break-word",
  });

  return (
    <section className="relative bg-[#151515] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto border border-gray-700 rounded-lg overflow-hidden shadow-2xl bg-[#1e1e1e]">
        {/* Top bar */}
        <div className="flex items-center bg-[#2d2d2d] px-4 py-2 text-sm text-gray-400">
          <div className="flex space-x-2 mr-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <span>aasif-projects.js</span>
        </div>

        {/* Code & animation area */}
        <div
          className="font-mono text-sm p-6 space-y-2 text-white relative min-h-[300px] overflow-hidden"
          ref={containerRef}
        >
          <div><span className="text-green-400">const</span> developer = <span className="text-yellow-300">"Aasif Azlan"</span>;</div>
          <div><span className="text-green-400">const</span> stack = <span className="text-yellow-300">["MERN", "Stripe", "Redis", "Zustand"]</span>;</div>
          <div><span className="text-green-400">function</span> <span className="text-blue-400">buildProjects</span>() &#123;</div>
          <div className="pl-4">return <span className="text-yellow-300">projects.map(p =&gt; p.title)</span>;</div>
          <div>&#125;</div>
          <div><span className="text-green-400">export default</span> buildProjects;</div>

          {/* Floating animated card */}
          <div className="absolute inset-0 pointer-events-none">
            <AnimatePresence>
              {visibleCard && (
                <motion.div
                  key={visibleCard.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={cardStyle(getRandomPosition())}
                >
                  {visibleCard.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

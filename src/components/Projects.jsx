import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Unscripted India",
    pages: [
      {
        heading: "Unscripted India – Home",
        content: "A content-driven platform exploring Indian history and culture. Includes admin dashboard for articles and images.",
      },
      {
        heading: "Admin Dashboard",
        content: "Built with React, Tailwind, Cloudinary & MongoDB. Rich text editor, auth, image uploads.",
      },
    ],
    link: [
      "https://unscriptedindia.in",
      "https://ui-optimised-frontend.vercel.app/"
    ],
    github: "https://github.com/aasifazlan/unscripted-india"
  },
  {
    title: "E-Commerce Platform (MERN)",
    pages: [
      {
        heading: "E-Commerce – Homepage",
        content: "Full-featured store with product listing, filtering, auth & secure Stripe payments.",
      },
      {
        heading: "Tech Stack",
        content: "MERN stack, Zustand for state, Redis for caching, Cloudinary for images.",
      },
    ],
    link: "https://mern-ecom-frontend-indol.vercel.app/",
    github: "https://github.com/aasifazlan/Mern-Stack-ECOM"
  },
  {
    title: "YourAI-ChatGPT Clone",
    pages: [
      {
        heading: "Chat App – AI Q&A",
        content: "Chat interface built with React & Markdown rendering. Ask interview questions and get AI answers.",
      },
      {
        heading: "Backend & Features",
        content: "MERN stack, JWT Auth, OpenAI API, chat history, markdown formatting, and secure cookie-based auth.",
      },
    ],
    link: "https://yourai-five.vercel.app/",
    github: "https://github.com/aasifazlan/ChatGPT-Clone-Client"
  }
];


export default function Projects() {
  const [currentPages, setCurrentPages] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPages((prev) =>
        prev.map((page, i) =>
          (page + 1) % projects[i].pages.length
        )
      );
    }, 4000); // 4 seconds per page
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-full mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ title, pages, link, github }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-[#2a2a2a] p-0 rounded-2xl shadow-md overflow-hidden"
          >
            {/* Browser Tab UI */}
            <div className="flex items-center justify-between bg-[#1f1f1f] p-3 border-b border-gray-700">
              <span className="text-sm text-white font-semibold px-2">{title}</span>
              <div className="flex gap-2">
                {Array.isArray(link) ? (
                  <>
                    <a
                      href={link[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 underline"
                    >
                      Live
                    </a>
                    <a
                      href={link[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-purple-400 underline"
                    >
                      Demo
                    </a>
                  </>
                  ) : (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 underline"
                  >
                    Live
                  </a>
                   )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-400 underline"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>

            {/* Page Slider Content */}
            <div className="p-6 min-h-[160px] text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPages[i]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-lg font-semibold mb-2">{pages[currentPages[i]].heading}</h3>
                  <p className="text-gray-300 text-sm">{pages[currentPages[i]].content}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

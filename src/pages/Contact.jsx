import { useState } from "react";
import api from "../lib/axios";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email) => {
    // Simple regex to validate email format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      setIsSending(false);
      return;
    }

    try {
      const res = await api.post("/send", formData);

      alert(res.data.message);
      e.target.reset();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Error sending message, please try again later."
      );
      console.error(error);
    }

    setIsSending(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#151515] text-white px-4 py-16">
      <div className="w-full mt-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-center mb-10"
        >
          Have a project in mind or just want to say hi? Fill out the form below!
        </motion.p>

        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSending}
            className={`w-full transition px-6 py-3 rounded-md font-semibold text-lg ${
              isSending
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </section>
  );
}

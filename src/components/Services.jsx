const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building scalable MERN stack applications with optimized performance, secure APIs, and clean architecture.",
  },
  {
    title: "Custom Admin Dashboards",
    description:
      "Designing dynamic dashboards using React, Tailwind CSS, Zustand/Redux, and Cloudinary integrations.",
  },
  {
    title: "Authentication & Authorization",
    description:
      "Implementing secure login systems with JWT, session management, and protected routes.",
  },
  {
    title: "API & Payment Integration",
    description:
      "Integrating RESTful APIs, Stripe for payments, and MongoDB for data persistence and analytics.",
  },
  {
    title: "Content Platforms & CMS",
    description:
      "Developing custom content systems like Unscripted India, with media handling and rich text editors.",
  },
  {
    title: "AI & Face Recognition (R&D)",
    description:
      "Exploring C++ & OpenCV-based face recognition systems for future-focused AI applications.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#151515] py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
        Services
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        {services.map(({ title, description }, i) => (
          <div
            key={i}
            className="bg-[#242424] rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-[#2d2d2d] transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

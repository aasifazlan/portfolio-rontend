import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "JavaScript (ES6+)", level: "Intermediate", progress: 80 },
  { name: "C++", level: "Intermediate", progress: 65 },
  { name: "Data Structures & Algorithms", level: "Intermediate", progress: 60 },
  { name: "React.js", level: "Intermediate", progress: 85 },
  { name: "Redux", level: "Intermediate", progress: 75 },
  { name: "Zustand", level: "Intermediate", progress: 75 },
  { name: "Node.js", level: "Intermediate", progress: 80 },
  { name: "Express.js", level: "Intermediate", progress: 85 },
  { name: "MongoDB", level: "Intermediate", progress: 78 },
  { name: "REST APIs", level: "Advanced", progress: 90 },
  { name: "JWT Authentication", level: "Advanced", progress: 88 },
  { name: "Stripe Payment Integration", level: "Intermediate", progress: 75 },
  { name: "Cloudinary", level: "Intermediate", progress: 70 },
  { name: "Redis", level: "Intermediate", progress: 72 },
  { name: "Tailwind CSS", level: "Intermediate", progress: 85 },
  { name: "Git & GitHub", level: "Intermediate", progress: 80 },
  { name: "Postman", level: "Intermediate", progress: 78 },
  { name: "OpenCV", level: "Beginner", progress: 35 },
  { name: "VS Code", level: "Advanced", progress: 95 },
  { name: "Python", level: "Beginner", progress: 41 },
];

export default function Skills() {
  const [progressValues, setProgressValues] = useState(skills.map(() => 0));
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    let interval;

    if (inView) {
      interval = setInterval(() => {
        setProgressValues((prev) =>
          prev.map((val, idx) => {
            const target = skills[idx].progress;
            if (val < target) {
              return Math.min(val + 2, target);
            }
            return val;
          })
        );
      }, 50);
    } else {
      setProgressValues(skills.map(() => 0));
    }

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section ref={ref} className="bg-[#151515] py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-[#343434] rounded-xl p-8 shadow-lg">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 flex items-center">
          <span className="mr-2">🧠</span> Skills
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Leverage practical skills to build dynamic, modern web applications using industry-standard technologies.
        </p>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-white text-sm md:text-base font-medium">
                  {skill.name}
                </span>
                <span className="text-gray-300 text-sm">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressValues[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react'

const Timeline = () => {
  return (
    <section className="p-6 md:p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Timeline</h2>
      <ul className="border-l-4 border-blue-600 pl-6 space-y-6">
        <li>
          <div className="text-sm text-gray-500">2019</div>
          <div className="text-lg font-semibold">B.Tech in ECE, AMU</div>
        </li>
        <li>
          <div className="text-sm text-gray-500">Apr 2022 - Mar 2025</div>
          <div className="text-lg font-semibold">Web Developer, Miles2Smile Foundation</div>
          <p className="text-gray-600">Built and maintained full-featured web applications with MERN stack and payment systems.</p>
        </li>
      </ul>
    </section>
  )
}

export default Timeline
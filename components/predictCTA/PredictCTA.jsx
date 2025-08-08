import React from 'react'

const PredictCTA = () => {
  return (
    <section className="text-center bg-gradient-to-b from-[#1f1f1f] to-[#171717] px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--primary-yellow-500)] mb-2">
            Welcome to Football  Dashboard
        </h1>
        <div className="h-1 w-24 bg-[var(--primary-yellow-500)] mx-auto mb-4"></div>
        <p className="text-lg text-[var(--primary-light-500)] max-w-2xl mx-auto">
        Track teams, predict matches, and dive into football stats all in one place.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="" className="px-6 py-3 bg-[var(--primary-yellow-500)] text-[var(--primary-dark-500)]
          rounded-md hover:scale-105 transition">
            Track a Team
          </a>
          <a href="#prediction" className="px-6 py-3 border border-[var(--primary-yellow-500)]
           text-[var(--primary-yellow-500)] rounded-md hover:text-[var(--primary-dark-500)]
          hover:bg-[var(--primary-yellow-500)] transition">
            Predict a Match
          </a>
        </div>
    </section>
  )
}

export default PredictCTA
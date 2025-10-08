import React from 'react'
import ResultsSlider from './ResultsSlider';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';



const ResultsSec = async () => {
  const res = await fetch(`${baseURL}/api/results`, {
    headers: {
      'X-Auth-Token': 'YOUR_API_KEY'
    }
  });
  const data = await res.json();
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-[var(--primary-yellow-500)] mb-6">Latest Matches</h2>
      <ResultsSlider data={data} />
    </section>
  )
}

export default ResultsSec

import React from 'react'

const InnerResult = ({result}) => {
  return (
    <div className='text-white'>
        <div className='flex justify-between items-center mb-3'>
            <div className="flex gap-2 items-center">
                <img src={result.homeTeam.logo} alt={`${result.homeTeam.name} logo`} className="w-8 h-8" />
                <span className="font-semibold">{result.homeTeam.name}</span>
            </div>
            <span className="text-lg font-bold text-[var(--primary-yellow-500)]">{result.homeTeam.score} - {result.awayTeam.score}</span>
            <div className="flex gap-2 items-center">
                <span className="font-semibold">{result.awayTeam.name}</span>
                <img src={result.awayTeam.logo} alt={`${result.awayTeam.name} logo`} className="w-8 h-8" />
            </div>
        </div>
        <p className="text-sm text-gray-300">
            {result.description}
        </p>
        <button className="mt-3 w-full py-1 px-3 rounded-lg text-black bg-[var(--primary-yellow-500)] font-semibold hover:bg-yellow-400">
            View Details
        </button>
    </div>
  )
}

export default InnerResult
import React from 'react'

const InnerResult = () => {
  return (
    <div className='text-white'>
        <div className='flex justify-between items-center mb-3'>
            <div className="flex gap-2 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" alt="Man city logo" className="w-8 h-8" />
                <span className="font-semibold">Man City</span>
            </div>
            <span className="text-lg font-bold text-[var(--primary-yellow-500)]">2 - 1</span>
            <div className="flex gap-2 items-center">
                <span className="font-semibold">Liverpool</span>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/120px-Liverpool_FC.svg.png" alt="Liverpool logo" className="w-8 h-8" />
            </div>
        </div>
        <p className="text-sm text-gray-300">
            An intense match with City dominating possession and Liverpool countering effectively.
        </p>
        <button className="mt-3 w-full py-1 px-3 rounded-xl text-black bg-[var(--primary-yellow-500)] font-semibold hover:bg-yellow-400">
            View Details
        </button>
    </div>
  )
}

export default InnerResult
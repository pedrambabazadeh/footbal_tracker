import React from 'react'

const SearchBar = () => {
  return (
    <div className='relative'>
        <input type='text' placeholder='Search...' className='bg-[var(--primary-dark-300)] py-1.5 px-3 text-sm text-white focus:outline border border-[#333] rounded-md focus:ring-2 focus:ring-[var(--primary-yellow-500)]'/>
        <svg className="w-4 h-4 absolute right-2 top-2.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path>
        </svg>
    </div>
  )
}

export default SearchBar
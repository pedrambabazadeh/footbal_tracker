import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`bg-[var(--primary-dark-100)] p-6 rounded-xl shadow-md hover:shadow-lg transition ${className}`}>
      {children}
    </div>
  )
}

export default Card
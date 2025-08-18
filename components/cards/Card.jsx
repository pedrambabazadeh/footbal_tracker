import React from 'react'
import './card.css'

const Card = ({children, className}) => {
  return (
    <div className={` card flex-shrink-0 p-6 rounded-xl shadow-md hover:shadow-lg transition ${className}`}>
      {children}
    </div>
  )
}

export default Card
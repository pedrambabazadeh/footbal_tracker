import React from 'react'
import './card.css'

const Card = ({children, className}) => {
  return (
    <div className={`card flex-shrink-0 p-6 rounded-xl shadow-md transition ${className}`}>
      {children}
    </div>
  )
}

export default Card

//hover:shadow-lg  was also used in classes of card but it broke transition in slider once hoverd
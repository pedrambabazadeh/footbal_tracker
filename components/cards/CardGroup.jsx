import React from 'react'

const CardGroup = ({children, className}) => {
  return (
    <div className={`grid grid-cols-1 gap-6 ${className}`}>
      {children}
    </div>
  )
}

export default CardGroup
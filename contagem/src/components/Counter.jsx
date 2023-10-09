import React from 'react'

const Counter = ({title, number}) => {
  return (
    <div>
      <div className="counter">
        <p className="counter-number">{number}</p>
        <h3 className="counter-text">{title}</h3>
      </div>
    </div>
  )
}

export default Counter

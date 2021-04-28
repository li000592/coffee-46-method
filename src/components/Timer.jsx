import React from "react"
import "./Timer.css"

export default function Timer({ remainingTime }) {
  if (remainingTime === 0) {
    return <div className='timer'>Done</div>
  }

  return (
    <div className='timer'>
      <div className='top-text'>Step One</div>
      <div className='value'>{remainingTime}</div>
      <div className='text'>seconds</div>
    </div>
  )
}

import React from "react"
import "./Timer.css"

export default function Timer({ remainingTime, coffeeStep }) {
  if (remainingTime === 0) {
    return <div className='timer'>Done</div>
  }

  return (
    <div className='timer'>
      <div className='top-text'>Step {coffeeStep}</div>
      <div className='value'>{remainingTime}</div>
      <div className='text'>seconds</div>
    </div>
  )
}

import React, { useState } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import Button from "@material-ui/core/Button"
import { ButtonGroup } from "@material-ui/core"
import Timer from "../components/Timer"

// The first 40% adjusts the balance of sweetness and
// The remaining 60% adjusts the strength
const coffeeExplain = [
  { description: "Acidity Part" },
  { description: "Sweetness Part" },
  { description: "Strenth Part" },
  { description: "Strenth Part" },
  { description: "Strenth Part" },
]

export default function TimerScreen() {
  const [initTime, setInitTime] = useState(45)
  const [makeCoffeeArray, setMakeCoffeeArray] = useState([])
  const [key, setKey] = useState(0)
  const [coffeeStep, setCoffeeStep] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)

  const onComplateHandler = () => {
    setCoffeeStep((step) => step + 1)
    setMakeCoffeeArray((array) => [
      ...array,
      { step: coffeeStep, description: coffeeExplain[coffeeStep - 1].description },
    ])
    if (coffeeStep === 5) {
      console.log("done")
      return [false]
    }
    return [true]
  }

  return (
    <>
      <h3>
        <br />A Coffee Brewing Theory Invented by Tetsu Kasuya(World Brewers Cup 2016 Champion)
      </h3>
      <div className='timer-wrapper'>
        <CountdownCircleTimer
          className='timerBox'
          key={key}
          isPlaying={isPlaying}
          duration={initTime}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={onComplateHandler}
          size='300'
        >
          <Timer />
        </CountdownCircleTimer>
      </div>
      <ButtonGroup className='button-wrapper' color='primary' aria-label='outlined primary button group'>
        <Button onClick={() => setKey((prevKey) => prevKey + 1)}>Reset</Button>
        <Button onClick={() => setIsPlaying((state) => !state)}>{isPlaying ? "Pause" : "Play"}</Button>
      </ButtonGroup>
      <div className='button-wrapper'></div>
      <ul>
        {makeCoffeeArray
          ? makeCoffeeArray.map((step) => (
              <li key={step.step}>
                Step{step.step}: {step.description}
              </li>
            ))
          : null}
      </ul>
    </>
  )
}

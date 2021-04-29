import React, { useState } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import Button from "@material-ui/core/Button"
import { ButtonGroup } from "@material-ui/core"
import Timer from "../../components/Timer"
import TimerReadyScreen from "./TimerReadyScreen"
import "./TimerScreen.css"

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
  const [makeCoffeeArray, setMakeCoffeeArray] = useState([])
  const [key, setKey] = useState(0)
  const [coffeeStep, setCoffeeStep] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [brewSetting, setBrewSetting] = useState({
    totalStep: 5,
    eachStepTime: 45,
    coffeeWight: 20,
  })

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
  if (coffeeStep === 0)
    return <TimerReadyScreen brewSetting={brewSetting} setBrewSetting={setBrewSetting} setCoffeeStep={setCoffeeStep} />
  return (
    <>
      <div className='timer-wrapper'>
        <CountdownCircleTimer
          className='timerBox'
          key={key}
          isPlaying={isPlaying}
          duration={brewSetting.eachStepTime}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={onComplateHandler}
          size='300'
        >
          <Timer coffeeStep={coffeeStep} />
        </CountdownCircleTimer>
      </div>
      <div className='top-text button-wrapper'>Each time add {brewSetting.coffeeWight * 3}g water</div>
      <ButtonGroup className='button-wrapper' color='primary' aria-label='outlined primary button group'>
        <Button onClick={() => setCoffeeStep(0)}>Settings</Button>
        <Button
          onClick={() => {
            setKey((prevKey) => prevKey + 1)
            setCoffeeStep(1)
            setMakeCoffeeArray([])
          }}
        >
          Reset
        </Button>
        <Button onClick={() => setIsPlaying((state) => !state)}>{isPlaying ? "Pause" : "Play"}</Button>
      </ButtonGroup>
      <div className='button-wrapper'></div>
      <ul>
        {makeCoffeeArray
          ? makeCoffeeArray.map((step) => (
              <li key={step.step}>
                <b>Step{step.step}:</b> {step.description}
              </li>
            ))
          : null}
      </ul>
    </>
  )
}

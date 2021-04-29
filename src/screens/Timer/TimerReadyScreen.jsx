import React from "react"
import Button from "@material-ui/core/Button"
import { ButtonGroup } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import InputAdornment from "@material-ui/core/InputAdornment"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    marginBottom: 16,
    width: "80%",
  },
}))

export default function TimerSettingsScreen({ setCoffeeStep, setBrewSetting, brewSetting }) {
  const classes = useStyles()
  const checkForm = () => {
    if (
      typeof brewSetting.coffeeWight == "number" &&
      typeof brewSetting.eachStepTime == "number" &&
      typeof brewSetting.totalStep == "number"
    ) {
      console.log("allnumber")
      return false
    }
    return true
  }
  return (
    <div className={classes.root}>
      <TextField
        type='number'
        className={classes.textField}
        label='Your Coffe Beans weight'
        InputProps={{
          startAdornment: <InputAdornment position='start'>g</InputAdornment>,
        }}
        variant='filled'
        value={brewSetting.coffeeWight}
        onChange={(value) => {
          setBrewSetting((data) => {
            return { ...data, coffeeWight: Number(value.target.value) }
          })
        }}
      />
      <TextField
        type='number'
        className={classes.textField}
        label='Set your each step time'
        variant='filled'
        value={brewSetting.eachStepTime}
        onChange={(value) =>
          setBrewSetting((data) => {
            return { ...data, eachStepTime: Number(value.target.value) }
          })
        }
      />
      <TextField
        type='number'
        className={classes.textField}
        label='Set how many step'
        variant='filled'
        value={brewSetting.totalStep}
        onChange={(value) =>
          setBrewSetting((data) => {
            return { ...data, totalStep: Number(value.target.value) }
          })
        }
      />
      <ButtonGroup className='button-wrapper' color='primary' aria-label='outlined primary button group'>
        {checkForm ? (
          <Button onClick={() => setCoffeeStep((step) => ++step)}>Done</Button>
        ) : (
          <Button disabled={true} onClick={() => setCoffeeStep((step) => ++step)}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </div>
  )
}

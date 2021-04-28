import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import StoryScreen from "./screens/StoryScreen"
import TabNavigation from "./components/TabNavigation"
import TimerScreen from "./screens/TimerScreen"

export default function App() {
  return (
    <Router className='App'>
      <h1>4:6 method</h1>
      <Switch>
        <Route path='/story'>
          <StoryScreen />
        </Route>
        <Route path='/'>
          <TimerScreen />
        </Route>
      </Switch>

      <TabNavigation />
    </Router>
  )
}

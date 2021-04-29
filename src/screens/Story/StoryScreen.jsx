import React, { Component } from "react"
import VideosPlayer from "../../components/VideosPlayer"
import "./StoryScreen.css"
export default function StoryScreen() {
  return (
    <div>
      <h3>
        <br />A Coffee Brewing Theory Invented by Tetsu Kasuya(World Brewers Cup 2016 Champion)
      </h3>
      <VideosPlayer className='playerContainer' />
      <h3>Intro</h3>
      <div className='contentContainer'>
        <p>
          The 4-6 method begins by dividing the total water into 40% and 60%. You pour the first 40% in two pours, and
          then decide how many pours you want to make for the last 60%. The first 2 pours decide the balance of the
          acidity and sweetness. The remaining number of pours will decide the strength of the coffee.
        </p>
      </div>
    </div>
  )
}

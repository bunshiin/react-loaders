import React from 'react'
import { Orbit, RaceBy, Ring, Waveform, Wobble, Jelly, Metronome, JellyTriangle, DotSpinner } from '@uiball/loaders'


import './App.css'


const App = () => {
  return (
    <div className="container">
      <div className="loading"><Ring size={40} speed={2} ></Ring></div>
      <div className="loading"><Orbit size={40} speed={2} ></Orbit></div>
      <div className="loading"><RaceBy size={40} speed={2} ></RaceBy></div>
      <div className="loading"><Waveform size={40} speed={2} ></Waveform></div>
      <div className="loading"><Wobble size={40} speed={2} ></Wobble></div>
      <div className="loading"><Jelly size={40} speed={2} ></Jelly></div>
      <div className="loading"><Metronome size={40} speed={2} ></Metronome></div>
      <div className="loading"><JellyTriangle size={40} speed={2} ></JellyTriangle></div>
      <div className="loading"><DotSpinner size={40} speed={2} ></DotSpinner></div>
    </div>


  )
}

export default App

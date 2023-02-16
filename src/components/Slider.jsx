import React from 'react'

export default function Slider(props) {
  return (
    <div className="slider">
      <label>{props.label}</label>
        <input
          type="range"
          onChange={(e) => props.changeColor(e.target.value)}
          min="0"
          max={props.maxValue}
          value={props.sliderValue}
        />
    </div>
  )
}

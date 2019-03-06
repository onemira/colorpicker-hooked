import React, { Component } from 'react'

export default function Slider(props) {
  return (
    <>
      <p>
        {props.label}
        <input
          type="range"
          onChange={props.onSlide}
          min={props.minValue ? props.minValue : '0'}
          max={props.maxValue}
          value={props.sliderValue}
        />
      </p>
    </>
  )
}

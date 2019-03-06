import React, { Component } from 'react'

export default function ColorBox(props) {
  return (
    <>
      <div className="color-box-parent">
        <div
          className="colorEx"
          style={{
            backgroundColor: `hsl(${props.h},${props.s}%,${props.l}% )`
          }}
        />
      </div>
    </>
  )
}

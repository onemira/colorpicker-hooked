import React from 'react'

export default function ColorBox(props) {
  return (
        <div
          className="color-box"
          style={{
            backgroundColor: `hsl(${props.h},${props.s}%,${props.l}% )`
          }}
        />
  )
}

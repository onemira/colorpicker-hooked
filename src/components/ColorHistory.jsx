import React, { useState } from 'react'
import Button from '../components/Button'

function ColorHistory(props) {
  const [listedColor, setListedColor] = useState([])

  const showResult = () => {
    setListedColor((prevColor) =>
      prevColor.concat(
        `Hue:${props.h} + Saturation: ${props.s}% + Lightness: ${props.l}%`
      )
    )
  }

  return (
    <div className="color-area">
      <ul className="color-history">
        {listedColor.map((color) => {
          return (
            <li className="color-data">
              {color}
            </li>
          )
        })}
      </ul>
      <div className='button-list'>
        <Button onClick={showResult} name="what's this color?" />
        {listedColor.length > 0 && (
          <Button onClick={() => setListedColor([])} name="reset" />
        )}
      </div>
    </div>
  )
}

export default ColorHistory

import React, { useState } from 'react'
import Slider from '../components/Slider'
import ColorBox from '../components/ColorBox'
import Button from '../components/Button'
import ColorHistory from '../components/ColorHistory'
import Header from '../components/Header'

function ColorPickerPage() {
  const hsl = {
    h: { label: 'Hue', maxValue: '360' },
    s: { label: 'Saturation', maxValue: '100' },
    l: { label: 'Lightness', maxValue: '100' },
  }
  const [hue, setHue] = useState(hsl.h.maxValue/2)
  const [saturation, setSaturation] = useState(hsl.s.maxValue/2)
  const [lightness, setLightness] = useState(hsl.l.maxValue/2)


  const randomColor = () => {
    const randomValue = (maxValue) => Math.floor(Math.random() * maxValue)

    setHue(randomValue(hsl.h.maxValue))
    setSaturation(randomValue(hsl.s.maxValue))
    setLightness(randomValue(hsl.l.maxValue))
  }

  return (
    <div>
      <main className="contents">
        <Header message="Pick Your Color💕" />
        <ColorBox h={hue} s={saturation} l={lightness} />
        <ColorHistory h={hue} s={saturation} l={lightness} />
        <Button onClick={randomColor} name="random color" />
        <Slider
          label="H"
          maxValue={hsl.h.maxValue}
          sliderValue={hue}
          changeColor={setHue}
        />
        <Slider
          label="S"
          maxValue={hsl.s.maxValue}
          sliderValue={saturation}
          changeColor={setSaturation}
        />
        <Slider
          label="L"
          maxValue={hsl.l.maxValue}
          sliderValue={lightness}
          changeColor={setLightness}
        />
      </main>
    </div>
  )
}

export default ColorPickerPage

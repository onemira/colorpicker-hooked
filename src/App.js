import React, { useState } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'

function App(props) {
  const [h, setH] = useState(Math.floor(Math.random() * 240))
  const [s, setS] = useState(Math.floor(Math.random() * 100))
  const [l, setL] = useState(Math.floor(Math.random() * 100))
  const [divStyle, setDivStyle] = useState('hsl')
  const [yourColor, setYourColor] = useState([])

  const hValue = event => {
    setH(event.target.value)
  }

  const sValue = event => {
    setS(event.target.value)
  }

  const lValue = event => {
    setL(event.target.value)
  }

  const colorResult = () => {
    setYourColor(prevColor =>
      prevColor.concat(`Hue:${h} + Saturation: ${s}% + Lightness: ${l}%`)
    )
  }

  const randomColor = () => {
    setH(Math.floor(Math.random() * 240))
    setS(Math.floor(Math.random() * 100))
    setL(Math.floor(Math.random() * 100))
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Bitter"
        rel="stylesheet"
      />

      <section className="main">
        <Header message="Pick My Color💕" />
        <main className="contents">
          <div
            className="colorEx"
            style={{
              backgroundColor: `hsl(${h},${s}%,${l}%)`
            }}
          />
          <section className="colorArea">
            <ul className="colorHistory">
              {yourColor.map(color => {
                return <li>{color}</li>
              })}
            </ul>
            <button onClick={colorResult}>what's this color?</button>
            <button onClick={randomColor}>random color</button>
          </section>
          <section className="sliderBox">
            <Slider label="H" maxValue="240" onSlide={hValue} sliderValue={h} />
            <Slider label="S" maxValue="100" onSlide={sValue} sliderValue={s} />
            <Slider label="L" maxValue="100" onSlide={lValue} sliderValue={l} />
          </section>
        </main>
      </section>
    </>
  )
}

export default App

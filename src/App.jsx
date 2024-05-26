import './App.css'
import { useState, useEffect } from 'react'



function App() {
  const [color, setColor] = useState('')
  const click = color => {
    color = prompt('Enter your colors')
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])
  
  return (
    <>
      <h1> hello world </h1>
      <h2> Internet Autorefresh Is Enabled </h2>
      <button onClick={() => click(color)}>
        change color
      </button>   
    </>
  )
}

export default App

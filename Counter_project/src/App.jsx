import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15
  const addValue = () => {
    console.log("Added", counter)
    //counter = counter + 1
    setCounter(counter+1)
  }
  const decValue = () => {
    //counter = counter - 1
    setCounter(counter-1)
    console.log("Removed", counter)
  }
  const reset = () => {
    setCounter(counter=0)
  }

  return (
    <>
    <h1>Dipesh's Counter</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value
    </button>
    <br></br>
    <button onClick={decValue}> Descrease Value</button>
    <br></br>
    <button
    onClick={reset}>Reset Value</button>
    </>
  )
}

export default App

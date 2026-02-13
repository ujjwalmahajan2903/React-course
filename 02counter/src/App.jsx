import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [Counter, setCounter] = useState(15)

  //let Counter = 15
  const addValue = () =>
  { 
    if(Counter < 20)
      setCounter(Counter+1)
  }

  const removeValue = () =>
  {
    if(Counter > 0)
      setCounter(Counter - 1)
  }
  return (
    <>
    <h1>Hello React</h1>
    <h2>Counter Value: {Counter}</h2>
    <button onClick={addValue}>Add</button>
    <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App

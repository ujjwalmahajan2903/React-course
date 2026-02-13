import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    Username : "Hello",
    age : 25
  }
  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
      <Card Username = "Ujjwal" btnText = "Click me"/>
      <Card Username= "Myself"  />

    </>
  )
}

export default App

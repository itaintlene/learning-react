import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15 // this won't do lol

  let [counter, setCounter] = useState(15) // we'll have to use useState hook

  const addValue = ()=>{
    // console.log("value added", Math.random());
    // counter = counter + 1
    setCounter(counter + 1)
    if(counter>19){
      setCounter(20)
    }
  }

  const subtractValue = ()=>{
    setCounter(counter - 1)
    if(counter<1) {
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Hello Guys!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}> Add Value </button>

      <br />
      <br />

      <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}

export default App

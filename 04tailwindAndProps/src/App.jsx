import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-400 text-white p-4 rounded-xl mb-4'> Tailwind test </h1>
      <Card FullName="Harleen's Tiles" imgSrc="https://images.pexels.com/photos/7794425/pexels-photo-7794425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Card FullName="Yarn" imgSrc="https://images.pexels.com/photos/2061918/pexels-photo-2061918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    </>
  )
}

export default App

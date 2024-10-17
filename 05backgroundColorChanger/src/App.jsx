import { useState } from 'react'
import './App.css'

function App() {
  
  const[color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-slate-100 px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}}>
              RED
            </button>
            <button onClick={()=>setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"blue"}}>
              BLUE
            </button>
            <button onClick={()=>setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}}>
              GREEN
            </button>
            <button onClick={()=>setColor("#FFDB58")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"#FFDB58"}}>
              MUSTARD
            </button>
            <button onClick={()=>setColor("#C8A2C8")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"#C8A2C8"}}>
              LAVENDER
            </button>
            <button onClick={()=>setColor("grey")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"grey"}}>
              GREY
            </button>
            <button onClick={()=>setColor("pink")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"pink"}}>
              PINK
            </button>
            <button onClick={()=>setColor("white")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor:"white"}}>
              WHITE
            </button>
            <button onClick={()=>setColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"purple"}}>
              PURPLE
            </button>
        </div>
      </div>
    </div>
  )
}

export default App

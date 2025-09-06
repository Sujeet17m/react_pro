import React from 'react'
import { useState } from 'react'

function App() {
  const[Val,setVal]=useState(12);
  return (
    <div>
      <h1>{Val}</h1>
      <button onClick={()=>setVal((prev)=>prev-1)} className='px-3 py-1 bg-blue-400 rounded-full'>Change Karo</button>
    </div>
  )
}

export default App


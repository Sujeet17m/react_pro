import React from 'react'
import { useState } from 'react'

function App() {
  const [Score, _setScore] = useState(100);
  return (
    <div>
      <h1>{Score}</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded ' onClick={()=>{
        _setScore(Score+1)
      }}>Increase</button>
      <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={()=>{
        _setScore(Score-1)
      }}>Decrease</button>
    </div>
  )
}

export default App


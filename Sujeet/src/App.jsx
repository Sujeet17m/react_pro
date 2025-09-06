import React from 'react'
import { useState } from 'react'

function App() {
  const[val,setVal] = useState([1,2,3,4,5])
  return (
    <div>
      {val.map((item)=><h1 key={item}>{item}</h1>)}
      <button onClick={()=> setVal(prev => prev.filter((item,index)=> index!==2))} className='px-2 py-4 bg-blue-400' >Remove 3</button>
      <button onClick={()=> setVal(prev => prev.filter(item => item%2 !==0))} className='px-2 py-4 bg-red-400' >Remove even</button>
    </div>
  )
}

export default App


import React from 'react'
import { useState } from 'react'

function App() {
  const[val,setVal] = useState([1,2,3,4,5])
  return (
    <div>
      {val.map((item)=><h1 key={item}>{item}</h1>)}
      <button onClick={()=>setVal([...val,val.length+1])}>Add Number</button>
      <button onClick={() => setVal(()=>{
        return val.filter((item , index)=> index!== val.length-1)
      })} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>Sub Number</button>
    </div>
  )
}

export default App


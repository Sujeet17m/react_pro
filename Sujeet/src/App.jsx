import React from 'react'
import { useState } from 'react'

function App() {
  const[val,setVal] =useState({name:"sujeet", isBanned:false});
  return (
    <div>
      <h1>name: {val.name}</h1>
      <h1>isBanned: {val.isBanned.toString()}</h1>
      <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className='px-3 py-1 bg-blue-400'>CHANGE</button>
    </div>
  )
}

export default App


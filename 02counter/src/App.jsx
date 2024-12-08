import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [valued, setValue] = useState(10)
  // This is very useful method that we don't have to declare variable...
  
  // let valued = 0
 
  const addValue = ()=>{
    
    let use = setValue(valued + 1)
    if(valued === 20){
      setValue(20)
    }
    // console.log("clicked", valued)
  }

  const removeValue = ()=>{
    setValue(valued - 1)
    if(valued === 0){
      setValue(0)
    }
  }

  let reset = ()=>{
    setValue(0)
  }

  return (
     <>
     <h1>Welcome to  Counter {name}</h1>
     <div>
      <h2>Added Value {valued} </h2>
      <button
     onClick ={addValue}
      >Click to +  {removeValue} </button>
      <div>
      
        
      </div>
      <button
      onClick={removeValue }>Click to -  {removeValue} </button>
     </div>
     <button
     onClick={reset}>Reset</button>
    </>
  )
}

export default App

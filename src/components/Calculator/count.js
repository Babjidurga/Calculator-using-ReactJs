import React,{useState} from 'react'
import './calculator.css'

const Calculator = () => {

    const [input,setInput] = useState("")
    const [result,setResult] = useState("")
    const handler = e => {
        setInput(e.target.value)
    }
  return (
    <div className='main-container'>
        <input type = "text" name = "input" value={input} className = "input" placeholder='Your expression' onChange={handler} />
        <br/>
        <button onClick={() => setResult(eval(input))} className='result-button'>Result</button>
        <h1 className='result-head'>The result is: {result}</h1>

        <div className='buttons-container'>
          <div className='same'>
          <button onClick={()=>setInput(input+"1")}>1</button>
            <button onClick={()=>setInput(input+"2")}>2</button>
            <button onClick={()=>setInput(input+"3")}>3</button>
            
            
          </div>
          <div className='same'>
          <button onClick={()=>setInput(input+"4")}>4</button> 
            <button onClick={()=>setInput(input+"5")}>5</button>
            <button onClick={()=>setInput(input+"6")}>6</button>
          </div>
          <div className='same'>
          <button onClick={()=>setInput(input+"7")}>7</button>
              <button onClick={()=>setInput(input+"8")}>8</button>
              <button onClick={()=>setInput(input+"9")}>9</button>

          </div>
          <div className='same'>
          <button onClick={()=>setInput(input+"+")}>+</button>
            <button onClick={()=>setInput(input+"-")}>-</button>
            <button onClick={()=>setInput(input+"/")}>/</button>
          </div>
          <div className='last'>
              <button onClick={()=>setInput(input+"0")}>0</button>
              <button onClick={()=>setInput("")} className='clear' >Clear</button>
          </div>
          
          
          
        </div>
    </div>
  )
}

export default Calculator
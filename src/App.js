import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult]=useState("");

  const handleClick=(value)=>{
    if (value === '='){
      try{
      setResult(eval(result).toString())
      }catch(error){
        setResult('Error')
      }
    }
    else if(value==='AC'){
      setResult('')

    }else if(value ==='\u2190'){
    setResult((prevInput) => prevInput.slice(0,-1))
  }else{
    setResult((prevInput)=>prevInput+value)
  }

  }
  
  return (
    
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <div>
              <button onClick = {()=> handleClick('AC')}>AC</button>
              <button onClick = {()=> handleClick('\u2190')}>&larr;</button>
              <button onClick = {()=> handleClick('\u0025')}>&#37;</button>
              <button onClick = {()=> handleClick('/')} className="span">&divide;</button>
        </div>
        <div>
              <button onClick = {()=> handleClick('7')}>7</button>
              <button onClick = {()=> handleClick('8')}>8</button>
              <button onClick = {()=> handleClick('9')}>9</button>
              <button onClick = {()=> handleClick('*')} className="span">&times;</button>
        </div>
        <div>
              <button onClick = {()=> handleClick('4')}>4</button>
              <button onClick = {()=> handleClick('5')}>5</button>
              <button onClick = {()=> handleClick('6')}>6</button>
              <button onClick = {()=> handleClick('-')} className="span">&ndash;</button>
        </div>
        <div>
              <button onClick = {()=> handleClick('1')}>1</button>
              <button onClick = {()=> handleClick('2')}>2</button>
              <button onClick = {()=> handleClick('3')}>3</button>
              <button onClick = {()=> handleClick('+')} className="span">+</button>
        </div>
        <div>
              <button onClick = {()=> handleClick('00')}>00</button>
              <button onClick = {()=> handleClick('0')}>0</button>
              <button onClick = {()=> handleClick('.')}>.</button>
              <button onClick = {()=> handleClick('=')} className="span">=</button>
        </div>
         
      </div>

    </div>
    
    
  );
}

export default App;

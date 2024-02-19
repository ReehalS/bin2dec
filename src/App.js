import React, { useState } from 'react';
import './App.css';

function App() {
  const [binaryValue, setBinaryValue] = useState('');
  const [decimalValue, setDecimalValue] = useState('');
  const [isBinary, setIsBinary] = useState(true);

  const binToDec = () =>{
    if(isBinary){
      if(binaryValue.match(/^[0-1]+$/) === null){
        alert('Please enter a valid binary number');
        return;
      }else{
      let decimal = 0;
      let length = binaryValue.length;
      for (let i = 0; i < length; i++) {
        if (binaryValue[i] === '1') {
          decimal += Math.pow(2, length - 1 - i);
        }
      }
      
      setBinaryValue(binaryValue);
      setDecimalValue(decimal);
    }
  }else{
    let binary = '';
    let decimal = parseInt(decimalValue);
    while(decimal > 0){
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
    setBinaryValue(binary);
    setDecimalValue(decimalValue);
  }
  }

  return (
    <div className="App">
      <div>
        <h1>Binary To Decimal Converter</h1>
        <div>
          <textarea
            id = "input"
            rows = "1"
            maxLength={16}
            placeholder={isBinary? 'Binary Input' : 'Decimal Input'} 
            required = "required"  
            input = {isBinary? binaryValue: decimalValue} 
            onChange = {(e) => {isBinary? setBinaryValue(e.target.value) : setDecimalValue(e.target.value)}}
          />
          <textarea
            id = "output"
            rows = "1"
            placeholder= {isBinary? 'Decimal output' : 'Binary output'}
            value = {isBinary? decimalValue : binaryValue} 
            readOnly
            />
        </div>
        <div className='buttons'>
          <button onClick={binToDec}>Convert</button>
          <button onClick={() => setIsBinary(!isBinary)}>Switch to {isBinary ? 'Decimal' : 'Binary'}</button>
        </div>
      </div>
    </div>
  );
}

export default App;

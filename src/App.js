import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [inputBase, setInputBase] = useState(10);
  const [outputBase, setOutputBase] = useState(10);

  const convert = (inputValue, inputBase, outputBase) => {
    const parsedInputValue = parseInt(inputValue, inputBase);
    const convertedValue = parsedInputValue.toString(outputBase);
    
    if (isNaN(parsedInputValue)) {
      alert('Invalid Number');
      return setOutputValue('Invalid Number');
    }
    
    setOutputValue(convertedValue);
  }

  return (
    <body>
      <div className="baseConverter">
        <h1>Base Converter</h1>
        <div className='textContainer'>
          <textarea type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Input Value'/>
          <textarea type='text' value={outputValue} onChange={(e) => setOutputBase(e.target.value)} placeholder='Output Value' readOnly/>
          
        </div>
        <div className='baseSelectorContainer'>
          <select value={inputBase} onChange={(e) => setInputBase(parseInt(e.target.value))}>
            {Array.from({ length: 35 }, (_, i) => (
              <option key={i + 2} value={i + 2}>
                {i + 2}
              </option>
            ))}
          </select>
          <select value={outputBase} onChange={(e) => setOutputBase(parseInt(e.target.value))}>
            {Array.from({ length: 35 }, (_, i) => (
              <option key={i + 2} value={i + 2}>
                {i + 2}
              </option>
            ))}
          </select>
        </div>
        <div className='baseSelectorContainer'>
          <select className='selector' value={inputBase} onChange={(e) => setInputBase(e.target.value)}>
            <option value='2'>Binary</option>
            <option value='8'>Octal</option>
            <option value='10'>Decimal</option>
            <option value='16'>Hexadecimal</option>
          </select>
          <select className='selector' value={outputBase} onChange={(e) => setOutputBase(e.target.value)}>
            <option value='2'>Binary</option>
            <option value='8'>Octal</option>
            <option value='10'>Decimal</option>
            <option value='16'>Hexadecimal</option>
          </select>
        </div>
        <div className='buttonContainer'>
          <button onClick={() => convert(inputValue, inputBase, outputBase)}>Convert</button>
        </div>
      </div>
    </body>
  );
}

export default App;

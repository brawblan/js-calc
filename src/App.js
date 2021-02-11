import React, { useState } from 'react';
import './App.css';

const Display = () => {
  const [displayState, setDisplayState] = useState(0);

  const changeDisplay = ({ target: { value }}) => {
    setDisplayState(value);
  }

  return (
    <form className="display">
      <input 
        id="display"
        type="text" 
        value={displayState} 
        onChange={changeDisplay}
      />
    </form>
  )
}

const Buttons = ({ id, value }) => {

  return (
    <div className="num-btn" id={id}>
      {value}
    </div>
  )
}

const ClearEquals = ({ id, value }) => {

  return (
    <div className={id} id={id}>
      {value}
    </div>
  )
}

function App() {
  const calcBtns = [
    { id: 'seven', value: 7 },
    { id: 'eight', value: 8 },
    { id: 'nine', value: 9 },
    { id: 'divide', value: '/'},
    { id: 'four', value: 4 },
    { id: 'five', value: 5 },
    { id: 'six', value: 6 },
    { id: 'multiply', value: 'x'},
    { id: 'one', value: 1 },
    { id: 'two', value: 2 },
    { id: 'three', value: 3 },
    { id: 'subtract', value: '-'},
    { id: 'zero', value: 0 },
    { id: 'decimal', value: '.' },
    { id: 'add', value: '+'},
  ]

  const clearEquals = [
    { id: 'clear', value: 'AC' },
    { id: 'equals', value: '=' },
  ]

  return (
    <div className="calc-wrapper">
      JavaScript Calculator with React Hooks
      <Display />
      <div className="button-wrapper">
      {calcBtns.map((d) => (
        <Buttons 
          id={d.id} 
          value={d.value} 

        />
      ))}
      </div>
      <div className="clear-equals">
        {clearEquals.map((d) => (
        <ClearEquals 
          id={d.id} 
          value={d.value} 

        />
        ))}
      </div>
    </div>
  );
}

export default App;

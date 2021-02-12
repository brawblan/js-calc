import React, { useState } from 'react';
import './App.css';

const Display = ({ value }) => {

  return (
    <form className="display">
      <input 
        id="display"
        type="text" 
        value={value} 
        readOnly
      />
    </form>
  )
}

const Buttons = ({ id, value, onClick }) => {
  const handleClick = () => onClick(value);

  return (
    <div 
      className="num-btn" 
      id={id}
      onClick={handleClick}
    >
      {value}
    </div>
  )
}

const ClearEquals = ({ id, value, onClick }) => {
  const handleClick = () => onClick();

  return (
    <div 
      className={id} 
      id={id}
      onClick={handleClick}
    >
      {value}
    </div>
  )
}

function App() {
  const [displayState, setDisplayState] = useState([0]);
  const calcBtns = [
    { id: 'seven', value: 7 },
    { id: 'eight', value: 8 },
    { id: 'nine', value: 9 },
    { id: 'divide', value: '/'},
    { id: 'four', value: 4 },
    { id: 'five', value: 5 },
    { id: 'six', value: 6 },
    { id: 'multiply', value: '*'},
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
  const clickBtns = (btn) => {
    console.log(displayState);
    if (displayState[0] === 0) {
      setDisplayState(btn)
    } else {
      setDisplayState([displayState, btn])
    }
  }
  const onClear = () => {
    setDisplayState([0])
  }
  const onEquals = (e) => {
    setDisplayState(
      String(eval(displayState).length > 3) &&
        String(eval(displayState)).includes('.')
        ? String(eval(displayState).toFixed(4))
        : String(eval(displayState))
    )
  }

  return (
    <div className="calc-wrapper">
      JavaScript Calculator with React Hooks
      <Display value={displayState} />
      <div className="button-wrapper">
      {calcBtns.map((d) => (
        <Buttons 
          id={d.id}
          key={d.id}
          value={d.value}
          onClick={clickBtns}
        />
      ))}
      </div>
      <div className="clear-equals">
        {clearEquals.map((d) => (
        <ClearEquals 
          id={d.id} 
          value={d.value}
          onClick={d.id === 'clear' ? onClear : onEquals}
        />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';


// State allows developers to keep track of changes inside of our React components
// Without state, components would not be able to respond to change events
// like button clicks, hovering over a button, or words typed into input fields, or
// elements dragged and dropped.
function App() {
    // The useState Hook provides us an array with two values:
  // The first is the actual value of the state and the
  // second is a function or method for changing or updating that state
  // const [value, setValue] = useState(1);
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);
  // const [diceResult, setDiceResult] = useState({
  //   firstDieResult: 1,
  //   secondDieResult: 6,
  // });

  const firstDieImage = require(`./assets/${firstDieResult}.png`);
  const secondDieImage = require(`./assets/${secondDieResult}.png`);

  function rollDice() {
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        <span>{firstDieResult + secondDieResult}</span>
        <button className="button" onClick={rollDice}>Roll</button>
      </header>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Counter } from './components/Counter';

import './App.css';

type CounterType = number;

function App() {
  const MIN_COUNTER = 0;
  const MAX_COUNTER = 5;
  const INCREMENT = 1;

  const [counter, setCounter] = useState<CounterType>(MIN_COUNTER);

  const increaseCounter = () => {
    if (counter < MAX_COUNTER) {
      let increase = counter + INCREMENT;
      if (increase > MAX_COUNTER) increase = MAX_COUNTER;

      setCounter(increase);
    }
  };

  const resetCounter = () => {
    setCounter(MIN_COUNTER);
  };

  return (
    <div className="App">
      <div className="jumbotron">
        <Counter alarm={counter >= MAX_COUNTER}>{counter}</Counter>
        <hr className="my-4" />
        <div className="btn-group btn-group-lg">
          <Button
            className="btn-info half-size"
            disabled={counter >= MAX_COUNTER}
            clickHandler={increaseCounter}
          >
            Increment
          </Button>
          <Button
            className="btn-info half-size"
            disabled={counter === MIN_COUNTER}
            clickHandler={resetCounter}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

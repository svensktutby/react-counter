import React from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Setter } from './components/Setter';
import { useCounterSelectors } from './bll/selectors';

function App() {
  const { isSetterActive } = useCounterSelectors();

  const colClassName = 'col col-sm col-md-6 ml-3 mr-3 d-flex flex-column';

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          {isSetterActive ? (
            <Setter className={colClassName} />
          ) : (
            <Counter className={colClassName} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

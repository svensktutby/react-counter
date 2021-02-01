import React, { useEffect, useReducer } from 'react';

import './App.css';
import { Counter } from './components/Counter';
import { counterReducer, initialState } from './bll/counterReducer';
import * as actions from './bll/actions';
import { Setter } from './components/Setter';

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  useEffect(() => {
    const localState = localStorage.getItem('counter');
    const preloadedState =
      (localState && JSON.parse(localState)) || initialState;
    dispatch(actions.setState(preloadedState));
  }, []);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(state));
  }, [state]);

  const colClassName = 'col col-sm col-md-6 ml-3 mr-3 d-flex flex-column';

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          {state.isSetterActive ? (
            <Setter
              className={colClassName}
              state={state}
              dispatch={dispatch}
            />
          ) : (
            <Counter
              className={colClassName}
              state={state}
              dispatch={dispatch}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

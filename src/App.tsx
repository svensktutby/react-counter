import React, { useReducer } from 'react'
import { Counter } from './components/Counter'
import { initialState, reducer } from './bus/reducer'
import './App.css'
import { Setter } from './components/Setter'

// type LocalStoreType = string | null

function App() {
  const localState = localStorage.getItem('counter')
  const preloadedState = (localState && JSON.parse(localState)) || initialState

  const [state, dispatch] = useReducer(reducer, preloadedState)

  const { isSetterActive } = state

  const colClassName = 'col col-sm col-md-6 ml-3 mr-3 d-flex flex-column'

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          {isSetterActive ? (
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
  )
}

export default App

import React, { useReducer } from 'react'
import { Counter } from './components/Counter'
import { initialState } from './bus/reducer'
import { reducer } from './bus/reducer'
import { incrementAC, resetAC } from './bus/action'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increaseCounter = () => {
    dispatch(incrementAC(1))
  }

  const resetCounter = () => {
    dispatch(resetAC())
  }

  return (
    <div className="App">
      <Counter
        state={state}
        increaseCounter={increaseCounter}
        resetCounter={resetCounter}
      />
    </div>
  )
}

export default App

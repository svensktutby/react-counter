import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import './App.css';
import { Counter } from './components/Counter';
import { Setter } from './components/Setter';
import { counter } from './store/counterStore';

const App = observer(function () {
  const { isSetterActive, loadStorage } = counter;

  useEffect(() => {
    loadStorage();
  }, [loadStorage]);

  const colClassName = 'col col-sm col-md-6 ml-3 mr-3 d-flex flex-column';

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          {isSetterActive ? (
            <Setter className={colClassName} state={counter} />
          ) : (
            <Counter className={colClassName} state={counter} />
          )}
        </div>
      </div>
    </div>
  );
});

export default App;

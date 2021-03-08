import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import s from './Setter.module.css';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { CounterType } from '../../store/counterStore';

type SetterPropsType = {
  className?: string;
  state: CounterType;
};

export const Setter: FC<SetterPropsType> = observer(({ className, state }) => {
  const {
    isSetterActive,
    error,
    minCounter,
    maxCounter,
    setError,
    setMinCounter,
    setMaxCounter,
    setCounter,
  } = state;

  useEffect(() => {
    if (minCounter < 0 || minCounter >= maxCounter) {
      setError(true);
    } else {
      setError(false);
    }
  }, [minCounter, maxCounter, setError]);

  const setterClassName = `${s.setter} jumbotron p-4 ${
    className ? className : ''
  }`;

  return (
    <div className={setterClassName}>
      <div className="mb-auto">
        <Input
          type="number"
          title="max value:"
          onChangeText={setMaxCounter}
          value={maxCounter}
          error={error}
        />
        <Input
          type="number"
          title="start value:"
          onChangeText={setMinCounter}
          value={minCounter}
          error={error}
        />
      </div>
      <hr className="my-4 w-100" />
      <div className="btn-group btn-group-lg w-100">
        <Button
          className="btn-info w-50"
          disabled={!isSetterActive || error}
          onClick={setCounter}
        >
          Set
        </Button>
      </div>
    </div>
  );
});

Setter.displayName = 'Setter';

import React, { FC, memo, useEffect } from 'react';

import s from './Setter.module.css';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import * as actions from '../../bll/actions';
import { StateType } from '../../bll/counterReducer';

type SetterPropsType = {
  className?: string;
  state: StateType;
  dispatch: (props: actions.CounterActionsType) => void;
};

export const Setter: FC<SetterPropsType> = memo(
  ({ className, state, dispatch }) => {
    const { isSetterActive, error, minCounter, maxCounter } = state;

    useEffect(() => {
      if (minCounter < 0 || minCounter >= maxCounter) {
        dispatch(actions.setError(true));
      } else {
        dispatch(actions.setError(false));
      }
    }, [minCounter, maxCounter, dispatch]);

    const setMinCounter = (value: string) => {
      dispatch(actions.setMinCounter(value));
    };

    const setMaxCounter = (value: string) => {
      dispatch(actions.setMaxCounter(value));
    };

    const setCounter = () => {
      dispatch(actions.setCounter());
    };

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
  },
);

Setter.displayName = 'Setter';

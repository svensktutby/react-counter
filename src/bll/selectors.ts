import { useSelector } from 'react-redux';

import { AppStateType } from './store';
import { StateType } from './counterReducer';

export const useCounterSelectors = (): StateType => {
  const isSetterActive = useSelector<AppStateType, boolean>(
    (state) => state.counter.isSetterActive,
  );
  const error = useSelector<AppStateType, boolean>(
    (state) => state.counter.error,
  );
  const minCounter = useSelector<AppStateType, number>(
    (state) => state.counter.minCounter,
  );
  const maxCounter = useSelector<AppStateType, number>(
    (state) => state.counter.maxCounter,
  );
  const counter = useSelector<AppStateType, number>(
    (state) => state.counter.counter,
  );

  return { isSetterActive, error, counter, minCounter, maxCounter };
};

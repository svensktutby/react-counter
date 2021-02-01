import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Middleware,
} from 'redux';
import thunk from 'redux-thunk';

import { counterReducer as counter } from './counterReducer';
import { loadState, saveState } from '../utils/localStorage';

export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter,
});

const persistedState = loadState();

// @ts-ignore next line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

const middleware: Array<Middleware> = [thunk];

export const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, persistedState, enhancedStore);

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
  });
});

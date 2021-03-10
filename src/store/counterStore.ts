import { makeAutoObservable, runInAction } from 'mobx';

export interface ICounterStore {
  isSetterActive: boolean;
  error: boolean;
  count: number;
  minCounter: number;
  maxCounter: number;
}

class CounterStore implements ICounterStore {
  isSetterActive = false;
  error = false;
  count = 0;
  minCounter = 0;
  maxCounter = 5;

  constructor() {
    makeAutoObservable(this);
  }

  increment = (value: number) => {
    if (this.count < this.maxCounter) {
      this.count += value;
      if (this.count > this.maxCounter) this.count = this.maxCounter;
    }
  };

  reset = () => {
    this.count = this.minCounter;
  };

  setMinCounter = (value: string) => {
    this.minCounter = +value;
  };

  setMaxCounter = (value: string) => {
    this.maxCounter = +value;
  };

  setCounter = () => {
    this.count = this.minCounter;
    this.isSetterActive = false;
    this.writeStorage();
  };

  setError = (error: boolean) => {
    this.error = error;
  };

  activateSetter = () => {
    this.isSetterActive = true;
  };

  loadStorage = async () => {
    const localState = await localStorage.getItem('counter');
    const counter: ICounterStore = localState && JSON.parse(localState);

    if (counter) {
      runInAction(() => {
        for (const key in counter) {
          if (counter.hasOwnProperty(key)) {
            // @ts-ignore
            this[key] = counter[key as keyof typeof counter];
          }
        }
      });
    }
  };

  writeStorage = async () => {
    const counter: ICounterStore = {
      isSetterActive: this.isSetterActive,
      error: this.error,
      count: this.count,
      minCounter: this.minCounter,
      maxCounter: this.maxCounter,
    };

    await localStorage.setItem('counter', JSON.stringify(counter));
  };
}

export const counter = new CounterStore();
export type CounterType = typeof counter;

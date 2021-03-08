import { action, makeObservable, observable } from 'mobx';

export interface ICounterStore {
  isSetterActive: boolean;
  error: boolean;
  count: number;
  minCounter: number;
  maxCounter: number;
}

class CounterStore implements ICounterStore {
  @observable isSetterActive = false;
  @observable error = false;
  @observable count = 0;
  @observable minCounter = 0;
  @observable maxCounter = 5;

  constructor() {
    makeObservable(this);
  }

  @action increment = (value: number) => {
    if (this.count < this.maxCounter) {
      this.count += value;
      if (this.count > this.maxCounter) this.count = this.maxCounter;
    }
  };

  @action reset = () => {
    this.count = this.minCounter;
  };

  @action setMinCounter = (value: string) => {
    this.minCounter = +value;
  };

  @action setMaxCounter = (value: string) => {
    this.maxCounter = +value;
  };

  @action setCounter = () => {
    this.count = this.minCounter;
    this.isSetterActive = false;
    this.writeStorage();
  };

  @action setError = (error: boolean) => {
    this.error = error;
  };

  @action activateSetter = () => {
    this.isSetterActive = true;
  };

  @action loadStorage = async () => {
    const localState = await localStorage.getItem('counter');
    const counter: ICounterStore = localState && JSON.parse(localState);

    console.log(counter);

    if (counter) {
      for (const key in counter) {
        if (counter.hasOwnProperty(key)) {
          // @ts-ignore
          this[key] = counter[key as keyof typeof counter];
        }
      }
    }
  };

  @action writeStorage = async () => {
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

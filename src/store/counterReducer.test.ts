import { counter } from './counterStore';

describe('counter testing', () => {
  it('should handle increment', () => {
    // 1. data

    // 2. action
    counter.increment(1);

    // 3. expectation
    expect(counter.count).toBe(1);
  });

  it('should handle reset', () => {
    expect(counter.count).toBe(1);

    counter.reset();
    expect(counter.count).toBe(0);
  });

  it('should handle setMinCounter', () => {
    counter.setMinCounter('3');

    expect(counter.minCounter).toBe(3);
  });

  it('should handle setMaxCounter', () => {
    counter.setMaxCounter('8');

    expect(counter.maxCounter).toBe(8);
  });

  it('should handle setCounter', () => {
    counter.setMinCounter('3');
    counter.setCounter();

    expect(counter.minCounter).toBe(3);
    expect(counter.count).toBe(3);
  });

  it('should handle setError', () => {
    counter.setError(true);

    expect(counter.error).toBeTruthy();
  });

  it('should handle activateSetter', () => {
    counter.activateSetter();

    expect(counter.isSetterActive).toBeTruthy();
  });
});

// actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const incrementValue = () => ({
  type: INCREMENT
});

export const decrementValue = () => ({
  type: DECREMENT
});

export const resetValue = () => ({
  type: RESET
});

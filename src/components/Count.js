import React from 'react';
import { connect } from 'react-redux';
import { incrementValue, decrementValue, resetValue } from '../redux/actions';

const Count = ({ value, increment, decrement, reset }) => (
  <div>
    <p>{value}</p>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={reset}>重置</button>
  </div>
)

const mapStateToProps = state => ({
  value: state.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementValue()),
  decrement: () => dispatch(decrementValue()),
  reset: () => dispatch(resetValue())
})

export default connect(mapStateToProps, mapDispatchToProps)(Count)

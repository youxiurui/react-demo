// reducers.js
import { INCREMENT, DECREMENT, RESET } from './actions';

const count = 0; // 初始状态

const countReducer = (state = count, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return count;
    default:
      return state;
  }
}

export default countReducer;


import {combineReducers } from 'redux'
import { 
  INCREMENT, 
  DECREMENT, 
  RESET,
  GETPERSON,
  ADDPERSON,
  MODPERSON,
  DELPERSON
} from './actions';

const initCount=0

const countReducer = (state = initCount, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}

const personReducers=(state={},action)=>{
  switch(action.type){
    case GETPERSON:
      return action.data
    case ADDPERSON:
      return action.data
    case MODPERSON:
      return action.data
    case DELPERSON:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  countReducer,
  personReducers
})


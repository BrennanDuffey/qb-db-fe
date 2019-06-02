import { combineReducers } from 'redux';
import tossupsReducer from './tossupsReducer';

const rootReducer = combineReducers({
  tossups: tossupsReducer
})

export default rootReducer
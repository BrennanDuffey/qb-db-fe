import { combineReducers } from 'redux';
import tossupsReducer from './tossupsReducer';
import isLoadingReducer from './isLoadingReducer';


const rootReducer = combineReducers({
  tossups: tossupsReducer,
  isLoading: isLoadingReducer
})

export default rootReducer
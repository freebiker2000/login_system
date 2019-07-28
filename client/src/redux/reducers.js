import { combineReducers } from 'redux';
import itemReducer from './reducer/itemReducer'
import authReducer from './reducer/authReducer'
import errorReducer from './reducer/errorReducer'

export default combineReducers({
  itemReducer,
  authReducer,
  errorReducer
})
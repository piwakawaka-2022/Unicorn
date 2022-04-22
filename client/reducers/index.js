import { combineReducers } from 'redux'
// import loading from './loading'
import wishes from './wishes'

const everything = combineReducers({
  wishes,
  // loading
})

export default everything

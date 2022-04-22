import { SAVE_ALL_WISHES } from '../actions'

function reducer(state = false, action) {
  switch (action.type) {
    // case LOADING:
    //   return true

    case SAVE_ALL_WISHES:
      return false

    default:
      return state
  }
}

export default reducer

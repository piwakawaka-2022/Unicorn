import { SAVE_ALL_WISHES } from '../actions'

function wishes(state = [], action) {
  switch (action.type) {
    case SAVE_ALL_WISHES:
      return action.wishes

    default:
      return state
  }
}

export default wishes

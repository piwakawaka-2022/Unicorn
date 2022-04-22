import { SAVE_ALL_WISHES, SAVE_ONE_WISH } from '../actions'

function wishes(state = [], action) {
  switch (action.type) {
    case SAVE_ALL_WISHES:
      return action.wishes

    case SAVE_ONE_WISH:
      return action.newWish

    default:
      return state
  }
}

export default wishes

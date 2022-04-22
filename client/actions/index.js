import { fetchWishes } from '../api/wishes'

export const SAVE_ALL_WISHES = 'SAVE_ALL_WISHES'
export const SAVE_ONE_WISH = 'SAVE_ONE_WISH'
export const LOADING = 'LOADING'
export const SHOW_ERROR = 'SHOW_ERROR'

// export function setLoading() {
//   return {
//     type: LOADING,
//   }
// }

export function saveAllWishes(wishes) {
  return {
    type: SAVE_ALL_WISHES,
    wishes,
  }
}

export function setError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
  }
}

export function saveWish(newWish) {
  return {
    type: SAVE_ONE_WISH,
    newWish,
  }
}

export function getAllTheWishes() {
  return (dispatch) => {
    // dispatch(setLoading())

    fetchWishes()
      .then((wishesArr) => {
        dispatch(saveAllWishes(wishesArr))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

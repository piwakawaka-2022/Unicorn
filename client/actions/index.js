import { fetchWishes } from '../api/wishes'

export const SAVE_ALL_WISHES = 'SAVE_ALL_WISHES'
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

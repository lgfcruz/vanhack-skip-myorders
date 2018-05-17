import {ERROR_SHOWED} from '../types/error'

export const setMessage = message => {
  return dispatch => {
      return dispatch({type: ERROR_SHOWED, payload: message})
  }
}
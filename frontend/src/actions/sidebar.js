import {SIDEBAR_FETCHED} from '../types/sidebar'

export const setSidebarList = () => {
  return dispatch => {
    dispatch({type: SIDEBAR_FETCHED, payload: null})
  }
}
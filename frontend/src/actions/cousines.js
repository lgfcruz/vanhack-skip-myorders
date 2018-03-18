import { COUSINES_FETCHED, COUSINE_SELECTED } from '../types/cousines'
import {push} from 'react-router-redux'

import { setMessage } from '../actions/error'

const url = process.env.REACT_APP_SERVER_URL

export function getCousines() {
  return dispatch => {
    fetch(`${url}/Cousine`).then(response => {
      if (!response.ok) {
        throw response.json()
      }
      return response.json()
    }).then(response => {
        dispatch({type: COUSINES_FETCHED, payload: response})
    }).catch(error => {
      error.then(errorData => {
        dispatch(setMessage(errorData.message))
        dispatch(push('/error'))
      })
    })
  }
}

export function setCousineSelected(id) {
  return dispatch => {
    dispatch({type: COUSINE_SELECTED, payload: id})
  }
}
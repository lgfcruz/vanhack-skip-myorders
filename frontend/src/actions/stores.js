import { STORES_FETCHED } from '../types/stores'
import {push} from 'react-router-redux'

import { setMessage } from '../actions/error'

const url = process.env.REACT_APP_SERVER_URL

export function getStores(id) {
  let url_stores = `${url}/Store`
  if ((id !== undefined) && (id !== null) && (id !== '')) {
    url_stores = `${url}/Cousine/${id}/stores`
  }
  return dispatch => {
    fetch(`${url_stores}`).then(response => {
      if (!response.ok) {
        throw response.json()
      }
      return response.json()
    }).then(response => {
      dispatch({type: STORES_FETCHED, payload: response})
    }).catch(error => {
      error.then(errorData => {
        dispatch(setMessage(errorData.message))
        dispatch(push('/error'))
      })
    })
  }
}
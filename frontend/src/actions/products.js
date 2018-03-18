import { PRODUCTS_FETCHED } from '../types/products'
import {push} from 'react-router-redux'

import { setMessage } from '../actions/error'

const url = process.env.REACT_APP_SERVER_URL

export function getProducts(id) {
  let url_products = `${url}/Product`
  if ((id !== undefined) && (id !== null) && (id !== '')) {
    url_products = `${url}/Store/${id}/products`
  }
  return dispatch => {
    fetch(`${url_products}`).then(response => {
      if (!response.ok) {
        throw response.json()
      }
      return response.json()
    }).then(response => {
      dispatch({type: PRODUCTS_FETCHED, payload: response})
    }).catch(error => {
      error.then(errorData => {
        dispatch(setMessage(errorData.message))
        dispatch(push('/error'))
      })
    })
  }
}
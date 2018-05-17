import { ORDERS_FETCHED, CART_ADDED } from '../types/orders'
import {push} from 'react-router-redux'

import { setMessage } from '../actions/error'

const url = process.env.REACT_APP_SERVER_URL

export const getOrders = id => {
  let url_products = `${url}/Product`
  if ((id !== undefined) && (id !== null) && (id !== '')) {
    url_products = `${url}/Store/${id}/products`
  }
  console.log(url_products)
  return dispatch => {
    fetch(`${url_products}`).then(response => {
      if (!response.ok) {
        throw response.json()
      }
      return response.json()
    }).then(response => {
        console.log(response)
      dispatch({type: ORDERS_FETCHED, payload: response})
    }).catch(error => {
      error.then(errorData => {
        dispatch(setMessage(errorData.message))
        dispatch(push('/error'))
      })
    })
  }
}

export const addInCart = products => {
    return dispatch => {
        dispatch({type: CART_ADDED, payload: products})
    }
}
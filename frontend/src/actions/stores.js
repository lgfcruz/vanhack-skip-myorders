import { STORES_FETCHED, STORES_SELECTED } from '../types/stores'
import { fetchApi } from '../middleware/api'

export const getStores = (searchText) => {
    let queryString = ''
    if (searchText) {
        queryString = `/search/${searchText}`
    }
    return dispatch => {
        return fetchApi(`Store${queryString}`)
        .then(response => {
            dispatch({
                type: STORES_FETCHED,
                payload: response
            })
        })
        .catch(err => {
            console.error("Failure: ", err);
        })
    }
}

export const selectStore = (storeId) => {
    return dispatch => {
        return [
            dispatch({
                type: STORES_SELECTED,
                payload: storeId
            })
        ]
    }
}

export const getStoresByCousine = (cousineId) => {
  return dispatch => {
      return fetchApi(`Cousine/${cousineId}/stores`)
      .then(response => {
          dispatch({
              type: STORES_FETCHED,
              payload: response
          })
      })
      .catch(err => {
          console.error("Failure: ", err);
      })
  }
}
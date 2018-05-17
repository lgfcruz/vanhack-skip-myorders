import { COUSINES_FETCHED, COUSINE_SELECTED } from '../types/cousines'
import { SEARCH_SUGGESTED } from '../types/search'
import { fetchApi } from '../middleware/api'

import { getStoresByCousine } from './stores'
import { fetchTextSearch } from './search'

export const getCousines = (searchText) => {
    let queryString = ''
    if (searchText) {
        queryString = `/search/${searchText}`
    }
    return dispatch => {
        return fetchApi(`Cousine${queryString}`)
        .then(response => {
            dispatch({
                type: COUSINES_FETCHED,
                payload: response
            })
        })
        .catch(err => {
            console.error("Failure: ", err);
        })
    }
}

export const selectCousine = (cousine) => {
    return dispatch => {
        return [
            dispatch(getStoresByCousine(cousine.id)),
            dispatch({
                type: COUSINE_SELECTED,
                payload: cousine.id
            }),
            dispatch(fetchTextSearch(cousine.name))
        ]
    }
}

export const getCousinesSuggest = (searchText) => {
    let queryString = ''
    if (searchText) {
        queryString = `/search/${searchText}`
    }
    return dispatch => {
        return fetchApi(`Cousine${queryString}`)
        .then(response => {
            dispatch({
                type: SEARCH_SUGGESTED,
                payload: response
            })
        })
        .catch(err => {
            console.error("Failure: ", err);
        })
    }
}
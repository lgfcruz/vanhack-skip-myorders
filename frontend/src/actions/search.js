import { SEARCH_FETCHED } from '../types/search'
import { getStores } from './stores'
import { getCousinesSuggest } from './cousines'

export const searchText = (value) => {
    return dispatch => {
        return [
            dispatch(getStores(value)),
            dispatch(getCousinesSuggest(value)),
            dispatch({
                type: SEARCH_FETCHED,
                payload: value
            })
        ]
    }
}

export const fetchTextSearch = (value) => {
    return dispatch => {
        return dispatch({
            type: SEARCH_FETCHED,
            payload: value
        })
    }
}
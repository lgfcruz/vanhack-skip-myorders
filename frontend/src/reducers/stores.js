import { STORES_FETCHED, STORES_SELECTED } from '../types/stores'

const INITIAL_STATE = { items: [], selected: null }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORES_FETCHED:
            return { ...state, items: action.payload, selected: null }
        case STORES_SELECTED:
        return { ...state, selected: action.payload }
        default:
            return state
    }
}
import { SEARCH_FETCHED, SEARCH_SUGGESTED } from '../types/search'

const INITIAL_STATE = { value: '', suggest: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_FETCHED:
            return { ...state, value: action.payload }
        case SEARCH_SUGGESTED:
        return { ...state, suggest: action.payload }
        default:
            return state
    }
}
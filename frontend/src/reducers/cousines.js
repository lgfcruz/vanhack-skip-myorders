import { COUSINES_FETCHED, COUSINE_SELECTED } from '../types/cousines'

const INITIAL_STATE = { items: [], selected: null }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUSINES_FETCHED:
            return { ...state, items: action.payload }
        case COUSINE_SELECTED:
            return { ...state, selected: action.payload }
        default:
            return state
    }
}
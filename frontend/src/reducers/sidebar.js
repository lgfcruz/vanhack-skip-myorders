import { SIDEBAR_FETCHED } from '../types/sidebar'

const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIDEBAR_FETCHED:
            return { ...state, list: action.payload }
        default:
            return state
    }
}
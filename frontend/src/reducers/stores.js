import { STORES_FETCHED } from '../types/stores'

const INITIAL_STATE = { stores: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORES_FETCHED:
            return { ...state, stores: action.payload }
        default:
            return state
    }
}
import { ERROR_SHOWED } from '../types/error'

const INITIAL_STATE = { message: null }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR_SHOWED:
            return { ...state, message: action.payload }
        default:
            return state
    }
}
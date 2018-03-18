import { BREADCRUMB_SHOWED } from '../types/breadcrumb'

const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BREADCRUMB_SHOWED:
            return { ...state, list: action.payload }
        default:
            return state
    }
}
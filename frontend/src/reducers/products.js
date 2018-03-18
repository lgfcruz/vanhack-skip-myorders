import { PRODUCTS_FETCHED } from '../types/products'

const INITIAL_STATE = { products: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCTS_FETCHED:
            return { ...state, products: action.payload }
        default:
            return state
    }
}
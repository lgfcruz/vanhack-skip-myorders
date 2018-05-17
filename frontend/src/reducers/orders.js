import { ORDERS_FETCHED, CART_ADDED, CART_FETCHED, CART_REMOVED } from '../types/orders'

const INITIAL_STATE = { 
    orders: [], 
    myorder: {
        date: null,
        customerId: 0,
        deliveryAddress: null,
        contact: null,
        storeId: 0,
        orderItems: [],
        total: 0
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ORDERS_FETCHED:
            return { ...state, orders: action.payload }
        case CART_ADDED:
            return { ...state, myorder: action.payload }
        case CART_FETCHED:
            return { ...state, myorder: action.payload }
        case CART_REMOVED:
            return { ...state, myorder: null }
        default:
            return state
    }
}
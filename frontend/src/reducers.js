import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux'

import header from './reducers/header'
import auth from './reducers/auth'
import errorReducer from './reducers/error'
import sidebarReducer from './reducers/sidebar'
import cousines from './reducers/cousines'
import stores from './reducers/stores'
import productsReducer from './reducers/products'
import ordersReducer from './reducers/orders'
import searchReducer from './reducers/search'

const rootReducer = combineReducers({
    header,
    auth,
    form: formReducer,
    toastr: toastrReducer,
    errorReducer,
    sidebarReducer,
    cousines,
    stores,
    productsReducer,
    ordersReducer,
    routing: routerReducer,
    search: searchReducer
})

export default rootReducer
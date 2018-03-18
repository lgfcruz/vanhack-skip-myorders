import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux'

import authReducer from './reducers/auth'
import errorReducer from './reducers/error'
import breadcrumbReducer from './reducers/breadcrumb'
import sidebarReducer from './reducers/sidebar'
import cousinesReducer from './reducers/cousines'
import storesReducer from './reducers/stores'
import productsReducer from './reducers/products'
import ordersReducer from './reducers/orders'

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    toastr: toastrReducer,
    errorReducer,
    breadcrumbReducer,
    sidebarReducer,
    cousinesReducer,
    storesReducer,
    productsReducer,
    ordersReducer,
    routing: routerReducer
})

export default rootReducer
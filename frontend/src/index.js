import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { Router } from 'react-router-dom'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './routes'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const store = applyMiddleware(multi, thunk, promise, historyMiddleware)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Routes />
        </Router>
    </Provider>
, document.getElementById('root'))
registerServiceWorker()
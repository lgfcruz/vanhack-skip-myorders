import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './App'
import Home from './containers/home'
import About from './containers/about'
import Help from './containers/help'
import ErrorPage from './containers/error'
import NotFound from './containers/notFound'
import Invoice from './containers/invoice'

export default props => (
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/error" component={ErrorPage} />
            <Route exact path="/invoice" component={Invoice} />
            <Route component={NotFound} />
        </Switch>
    </App>
)
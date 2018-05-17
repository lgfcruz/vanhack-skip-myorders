import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './App'
import Home from './containers/home'
import About from './containers/about'
import Help from './containers/help'
import ErrorPage from './containers/error'
import NotFound from './containers/notFound'
import Invoice from './containers/invoice'
import Privacy from './containers/privacy'
import Terms from './containers/terms'
import Contact from './containers/contact'
import Orders from './containers/orders'

export default props => (
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/error" component={ErrorPage} />
            <Route exact path="/invoice" component={Invoice} />
            <Route exact path="/privacy-policy" component={Privacy} />
            <Route exact path="/terms-of-service" component={Terms} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/:storeName/order" component={Orders} />
            <Route component={NotFound} />
        </Switch>
    </App>
)
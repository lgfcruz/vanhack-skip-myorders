import React, {Component} from 'react'
import { connect } from 'react-redux'

import { setBreadcrumbs } from '../actions/breadcrumb'

import Content from '../components/content'

class About extends Component {
  
  componentWillMount() {
    this.props.dispatch(setBreadcrumbs("About"))
  }

  render() {
    return (
      <div>
        <Content.Header title="About" />
        <Content>
          <p>Challenge React</p>
          <p>Build a solution to use an API to:</p>
          <ul>
            <li>Authenticate</li>
            <li>Add selected products to a cart</li>
            <li>Place one or more Orders</li>
            <li>Cancel an Order</li>
            <li>View the Order`s Status</li>
          </ul>
        </Content>
      </div>
    )
  }
}

export default connect(state => state)(About)
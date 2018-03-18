import React, {Component} from 'react'
import { connect } from 'react-redux'

import { setBreadcrumbs } from '../actions/breadcrumb'

import Content from '../components/content'

class NotFound extends Component {

  componentWillMount() {
    this.props.dispatch(setBreadcrumbs('404 Error Page'))
  }

  render() {
    return (
      <div>
        <Content.Header title="404 Error Page" />
        <Content>
          <div className="error-page">
            <h2 className="headline text-yellow">404</h2>
            <div className="error-content">
              <h3>
                <i className="fa fa-warning text-yellow"></i>
                Oops! Page not found.
              </h3>
              <p>
                We could not find the page you were looking for. 
                Meanwhile, you may <a href="/">return to home</a>.
              </p>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default connect(state => state)(NotFound)
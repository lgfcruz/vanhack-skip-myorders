import React, {Component} from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import { setBreadcrumbs } from '../actions/breadcrumb'

import Content from '../components/content'

class ErrorPage extends Component {

  componentWillMount() {
    if (!this.props.errorReducer.message) {
      return this.props.dispatch(push('/'))
    }
    this.props.dispatch(setBreadcrumbs('500 Error Page'))
  }

  render() {
    return (
      <div>
        <Content.Header title="500 Error Page" />
        <Content>
          <div className="error-page">
            <h2 className="headline text-red">500</h2>
            <div className="error-content">
              <h3>
                <i className="fa fa-warning text-red"></i>
                Oops! {this.props.errorReducer.message ? this.props.errorReducer.message  : `Something went wrong`}.
              </h3>
              <p>
              We will work on fixing that right away. 
              Meanwhile, you may <a href="/">return to home</a>.
              </p>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default connect(state => state)(ErrorPage)
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Content from '../components/content'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="error-page">
            <h2 className="headline text-warning">404</h2>
            <div className="error-content">
              <h3>
                <i className="fa fa-warning text-warning"></i>
                Oops! Page not found.
              </h3>
              <p>
                We could not find the page you were looking for. 
                Meanwhile, you may <Link to="/" replace={true}>return to home</Link>.
              </p>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}
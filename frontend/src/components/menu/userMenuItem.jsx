import React, {Component} from 'react'
import {connect} from 'react-redux'

import Auth from '../../containers/auth'

import photoDefault from '../../images/user.png'

class UserMenuItem extends Component {

  render() {
    return (
      <li className="dropdown user user-menu">
        <a href={`javascript:;`} className="dropdown-toggle" data-toggle="dropdown" title="User">
          <img src={this.props.auth.validToken === true ? this.props.auth.user.image : photoDefault} className="user-image" alt="User"/>
          <span className="hidden-xs">{this.props.auth.validToken === true ? this.props.auth.user.email : 'Login'}</span>
        </a>
        <Auth />
      </li>
    )
  }
}

export default connect(state => state)(UserMenuItem)
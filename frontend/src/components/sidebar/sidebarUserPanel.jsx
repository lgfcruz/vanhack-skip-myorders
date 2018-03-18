import React, {Component} from 'react'
import {connect} from 'react-redux'

class SidebarUserPanel extends Component {
  render() {
    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img src={this.props.auth.user.image} className="img-circle" alt="User"/>
        </div>        
        <div className="pull-left info">
          <p>{this.props.auth.user.name}</p>
          <a href={`javascript:;`}>
            <i className="fa fa-circle text-success"></i>
            Online</a>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(SidebarUserPanel)
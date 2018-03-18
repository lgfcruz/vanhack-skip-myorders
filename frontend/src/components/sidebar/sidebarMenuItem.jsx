import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class SidebarMenuItem extends Component {

  renderIcon() {
    if ((this.props.isTreeParent) && (this.props.isTreeParent === true)) {
        return ''
    }
    return (
        <i className={`fa fa-${this.props.icon ? this.props.icon : 'link'}`}></i>
    )
  }

  render() {
    return (
      <li className={this.props.active ? 'active' : ''}>
        <Link to={this.props.href} title={this.props.label}>
          {this.renderIcon()}
          <span>{this.props.label}</span>
        </Link>
      </li>
    )
  }
}
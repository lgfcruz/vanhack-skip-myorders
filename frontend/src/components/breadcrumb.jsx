import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Breadcrumb extends Component {

  renderBreadcrumbsItem(item) {
    if (item.href) {
      return (
        <Link to={item.href} replace={true}>
          {item.name}
        </Link>
      )
    } else {
      return item.name
    }
  }

  renderBreadcrumbsList() {
    const list = this.props.breadcrumbReducer.list || []
    return list.map((bc, index) => (
        <li className="active" key={index}>
          {this.renderBreadcrumbsItem(bc)}
        </li>
    ))
  }

  render() {
    return (
      <ol className="breadcrumb">
        <li>
          <Link to="/" replace={true}>
            <i className="fa fa-home"></i>
            Home
          </Link>
        </li>
        {this.renderBreadcrumbsList()}
      </ol>
    )
  }
}

export default connect(state => state)(Breadcrumb)
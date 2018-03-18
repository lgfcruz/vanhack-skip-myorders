import React, {Component} from 'react'
import Breadcrumb from '../breadcrumb'

export default class ContentHeader extends Component {
  render() {
    return (
      <section className="content-header">
        <h1>{this.props.title}{this.props.subtitle ? ` <small>${this.props.subtitle}</small>` : ''}</h1>
        <Breadcrumb />
      </section>
    )
  }
}
import React, {Component} from 'react'

export default class ContentHeader extends Component {
  render() {
    return (
      <section className="content-header">
        <h1>{this.props.title}{this.props.subtitle ? ` <small>${this.props.subtitle}</small>` : ''}</h1>
      </section>
    )
  }
}
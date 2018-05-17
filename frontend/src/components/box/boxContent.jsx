import React, {Component} from 'react'

export default class BoxContent extends Component {
  render() {
    return (
      <div className={`box-body${this.props.className ? ` ${this.props.className}` : ''}`}>
        {this.props.children}
      </div>
    )
  }
}
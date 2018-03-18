import React, {Component} from 'react'

export default class BoxFooter extends Component {
  render() {
    return (
      <div className={`box-footer${this.props.noBorder === true ? '' : ' with-border'}`}>
        {this.props.children}
      </div>
    )
  }
}
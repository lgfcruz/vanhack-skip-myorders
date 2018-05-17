import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import If from '../operator/if'

export default class BoxHeader extends Component {

  renderBoxHeader() {
    if (this.props.href) {
      return (
        <Link to="/" replace={true} title={this.props.label}>
          {this.renderBoxHeaderContent()}
        </Link>
      )
    } else {
      return this.renderBoxHeaderContent()
    }
  }

  renderBoxHeaderContent() {
    return (
      <If test={this.props.label}>
      <h3 className="box-title">{this.props.label}</h3>
      </If>
    )
  }
  
  render() {
    return (
      <div className={`box-header${this.props.noBorder === true ? '' : ' with-border'}`}>
        <If test={this.props.icon}>
        <i className={`fa fa-${this.props.icon}`}></i>
        </If>
        {this.renderBoxHeader()}
        <If test={this.props.collapse}>
        <div className="box-tools pull-right">
          <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
        </div>
        </If>
        {this.props.children}
      </div>
    )
  }
}
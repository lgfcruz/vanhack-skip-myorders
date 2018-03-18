import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import If from '../operator/if'

class MenuItem extends Component {

  constructor(props) {
    super(props)
    this.headerChildren = []
    this.itemChildren = []
    this.footerChildren = []
  }

  componentWillMount() {
    if (this.props.children) {
      this.props.children.map(child => {
          switch (child.type.name) {
            case 'SubMenuItemHeader':
              this.headerChildren.push(React.cloneElement(child))
                break
            case 'SubMenuItemFooter':
              this.footerChildren.push(React.cloneElement(child))
                break
            default:
              this.itemChildren.push(React.cloneElement(child))
                break
          }
          return null
        })
    }
  }

  render() {
    return (
      <li className={`dropdown navbar-nav-submenu${this.props.className ? ` ${this.props.className}` : ''}`}>
      <Link to={`${this.props.href ? this.props.href : `javascript:;`}`} title={this.props.title}>
          <If test={this.props.icon}>
            <i className={`fa fa-${this.props.icon}`}></i>
          </If>
          <If test={this.props.badge}>
            <span className={`label label-${this.props.badgeColor ? this.props.badgeColor : 'danger'}`}>{this.props.badge}</span>
          </If>
          <If test={this.props.label}>
            <If test={this.props.icon}>
              &nbsp;
            </If>
            <span className="hidden-xs">{this.props.label}</span>
          </If>
        </Link>
        <If test={this.props.children}>
          <ul className="dropdown-menu">
            {this.headerChildren}
            <li>
              <ul className="menu">
                {this.itemChildren}
              </ul>
            </li>
            {this.footerChildren}
          </ul>
        </If>
      </li>
    )
  }
}

class SubMenuItemHeader extends Component {
  render() {
    return (
      <If test={this.props.label}>
        <li className="header">{this.props.label}</li>
      </If>
    )
  }
}

class SubMenuItemFooter extends Component {
  render() {
    return (
      <If test={this.props.label}>
        <li className="footer">
          <a href={this.props.href ? this.props.href : `javascript:;`}>{this.props.label}</a>
        </li>
      </If>
    )
  }
}

class SubMenuItem extends Component {
  render() {
    return (
      <If test={this.props.label}>
        <li>
          <Link to={this.props.href}>
            <If test={this.props.icon}>
              <i className={`fa fa-${this.props.icon}${this.props.iconColor ? ` text-${this.props.iconColor}` : ''}`}></i>
            </If>
            {this.props.label}
          </Link>
        </li>
      </If>
    )
  }
}

MenuItem.Header  = SubMenuItemHeader
MenuItem.Footer  = SubMenuItemFooter
MenuItem.SubItem = SubMenuItem

export default MenuItem
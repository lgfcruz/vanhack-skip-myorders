import React, {Component, Children, cloneElement} from 'react'

export default class SidebarMenuTree extends Component {
  render() {
    const childWithProp = Children.map(this.props.children, (child) => {
        return cloneElement(child, {isTreeParent: true});
    });
    return (
      <li className="treeview">
        <a href={`javascript:;`}>
          <i className={`fa fa-${this.props.icon ? this.props.icon : 'link'}`}></i>
          <span>{this.props.label}</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul className="treeview-menu">
            {childWithProp}
        </ul>
      </li>
    )
  }
}
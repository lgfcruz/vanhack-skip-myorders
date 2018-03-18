import React, {Component} from 'react'

import SidebarMenuItem from './sidebarMenuItem'
import SidebarMenuTree from './sidebarMenuTree'

class SidebarMenu extends Component {
  render() {
    return (
      <ul className="sidebar-menu tree" data-widget="tree">
        {this.props.children}
      </ul>
    )
  }
}

SidebarMenu.Item = SidebarMenuItem
SidebarMenu.Tree = SidebarMenuTree

export default SidebarMenu
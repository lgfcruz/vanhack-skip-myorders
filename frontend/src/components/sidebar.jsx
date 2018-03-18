import React, {Component} from 'react'
import {connect} from 'react-redux'

import SidebarUserPanel from './sidebar/sidebarUserPanel'
import SidebarSearch from './sidebar/sidebarSearch'
import SidebarMenu from './sidebar/sidebarMenu'

import If from './operator/if'

class Sidebar extends Component {

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
            <If test={this.props.auth.validToken === true}>
            <SidebarUserPanel />
            </If>
            <SidebarSearch />
            <SidebarMenu>
                <SidebarMenu.Item label="Home" icon="home" href="/" />
                <SidebarMenu.Item label="Orders" icon="shopping-cart" href="/" />
                <SidebarMenu.Item label="About" icon="question" href="/about" />
            </SidebarMenu>
        </section>
      </aside>
    )
  }
}

export default connect(state => state)(Sidebar)
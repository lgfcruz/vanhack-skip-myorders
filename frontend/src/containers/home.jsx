import React, {Component} from 'react'
import {connect} from 'react-redux'

import Content from '../components/content'

import { setBreadcrumbs } from '../actions/breadcrumb'
import { setSidebarList } from '../actions/sidebar'
import { setCousineSelected } from '../actions/cousines'
import Cousines from './cousines'

class Home extends Component {

  componentWillMount() {
    this.props.dispatch(setBreadcrumbs())
    this.props.dispatch(setSidebarList())
    this.props.dispatch(setCousineSelected(1))
  }

  render() {
    return (
      <div>
        <Content.Header title="&nbsp;"/>
        <Content>
          <Cousines />
        </Content>
      </div>
    )
  }
}

export default connect(state => state)(Home)
import React, {Component} from 'react'
import { connect } from 'react-redux'

import { setBreadcrumbs } from '../actions/breadcrumb'

import Content from '../components/content'

class Help extends Component {
  
  componentWillMount() {
    this.props.dispatch(setBreadcrumbs('Help'))
  }

  render() {
    return (
      <div>
        <Content.Header title="Help" />
        <Content>
          Help
        </Content>
      </div>
    )
  }
}

export default connect(state => state)(Help)
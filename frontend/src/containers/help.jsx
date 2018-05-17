import React, {Component} from 'react'
import { connect } from 'react-redux'

import Content from '../components/content'

class Help extends Component {
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
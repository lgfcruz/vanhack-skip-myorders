import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Content from '../components/content'

import { searchFormDisplay } from '../actions/header'

import Stores from './stores'

class Home extends Component {

  constructor(props) {
    super(props)
    this.props.searchFormDisplay(true)
  }

  render() {
    return (
      <Content>
        <Stores />
      </Content>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ searchFormDisplay }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)
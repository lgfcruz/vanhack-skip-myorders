import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import './components/layout/dependencies'
import './App.css'
import { Container } from 'reactstrap'
import Header from './components/header'
import Footer from './components/footer'
import Messages from './components/message'

import { validateToken } from './actions/auth'
import { getCousines } from './actions/cousines'
import { getStores } from './actions/stores'


class App extends Component {

  constructor(props) {
    super(props)
    this.props.getCousines()
    this.props.getStores()
  }

  componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token)
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Container className="app-main-content">
            {this.props.children}
            <Footer />
        </Container>
        <Messages />
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken, getCousines, getStores }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
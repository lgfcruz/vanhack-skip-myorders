import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import './components/layout/dependencies'
import './App.css'

import { validateToken } from './actions/auth'

import Header from './components/header'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import Messages from './components/message'

class App extends Component {

  componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token)
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            {this.props.children}
        </div>
        <Footer />
        <Messages />
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
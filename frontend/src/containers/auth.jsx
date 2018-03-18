import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, logout } from '../actions/auth'

import InputAuth from '../components/form/inputAuth'

class Auth extends Component {

    constructor(props) {
        super(props)
        this._assignButtonFormRef = (buttonFormElement) => {
            this.buttonHideFormElement = buttonFormElement
        }
    }

    onSubmit(values) {
        const { login, logout } = this.props
        this.props.auth.validToken ? logout(this.props.auth.user.token) : login(values)
    }

    renderUserHeader() {
        if (this.props.auth.validToken) {
            return (
                <li className="user-header">
                    <img src={this.props.auth.user.image} className="img-circle" alt="User"/>
                    <p>
                        {this.props.auth.user.email}
                        <small>Last visit {new Intl.DateTimeFormat('en-US', { 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: '2-digit' 
                                            }).format(this.props.auth.user.lastVisitedAt)}
                        </small>
                    </p>
                </li>
            )
        }
    }

    renderUserContent() {
        if (!this.props.auth.validToken) {
            const {handleSubmit} = this.props
            return (
                <li className="user-body">
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <div className="row">
                            <div className="col-xs-12 text-center">
                            <h2 style={{color: '#0675ce', fontWeight: '300'}}>Sign in</h2>
                            <p className="lead text-muted">Enter your details bellow</p>
                            </div>
                        </div>
                        <Field component={InputAuth} type="email" name="email"
                            placeholder="Email" icon='envelope' />
                        <Field component={InputAuth} type="password" name="password"
                            placeholder="Password" icon='lock' />
                        <button type="submit" ref={this._assignButtonFormRef} style={{display: 'none'}}>submit</button>
                    </form>
                </li>
            )
        }
    }

    renderUserFooter() {
        if (this.props.auth.validToken) {
            const {handleSubmit} = this.props
            return (
                <li className="user-footer">
                    <div className="pull-right">
                        <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                            <button type="submit" className="btn btn-default btn-flat">
                                Sign out
                            </button>
                        </form>
                    </div>
                </li>
            )
        } else {
            return (
                <li className="user-footer">
                    <div className="pull-right">
                        <button type="button" className="btn btn-default btn-flat" onClick={() => this.buttonHideFormElement.click()}>
                            Sign in
                        </button>                
                    </div>
                </li>
            )
        }
    }

    render() {
        return (
          <ul className="dropdown-menu">
            {this.renderUserHeader()}
            {this.renderUserContent()}
            {this.renderUserFooter()}
          </ul>
        )
    }
}

Auth = reduxForm({form: 'authForm'})(Auth)
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ login, logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Auth)
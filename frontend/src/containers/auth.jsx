import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Container, Row, Col, Form, Button } from 'reactstrap'
import InputText from '../components/inputText'
  
import { login, logout, validateForm } from '../actions/auth'
import { navbarUserToggle } from '../actions/header'

import { isRequired, isEmail } from '../utils/validator'

const validate = (values, props) => {
    const errors = {}
    if (!props.auth.validToken) {
        if (!isRequired(values.email)) {
            errors.email = 'Required'
        }  else if (!isEmail(values.email)) {
            errors.email = 'Invalid email address'
        }
        if (!isRequired(values.password)) {
            errors.password = 'Required'
        }
        props.validateForm(!Object.keys(errors).some(x => errors[x]))
    }
    return errors
}

class Auth extends Component {
    
    handleSignIn = values => {
        if (!this.props.auth.validToken) {
            if (!this.props.auth.validForm) {
                return false
            }
            this.props.login(values)
        } else {
            this.props.logout(this.props.auth.user.token)
        }
        this.props.navbarUserToggle(false)
    }

    render() {
        const { handleSubmit, submitting } = this.props
        if (!this.props.auth.validToken) {
            return (
                <Container>
                    <Form onSubmit={handleSubmit(values => this.handleSignIn(values))}>
                        <Row className="user-body">
                            <Col>
                                <h2>Sign in to start your session</h2>
                                <Field 
                                    component={InputText}
                                    label="Email"
                                    name="email"
                                    type="email" 
                                    placeholder="Email"
                                    icon="ios-mail-outline"
                                    hiddenLabel={true}
                                />
                                <Field 
                                    component={InputText}
                                    label="Password"
                                    name="password"
                                    type="password" 
                                    placeholder="Password"
                                    icon="ios-lock-outline"
                                    hiddenLabel={true}
                                />
                            </Col>
                        </Row>
                        <Row className="user-footer">
                            <Col className="text-right">
                                <Button
                                    color="primary"
                                    disabled={submitting || !this.props.auth.validForm}
                                >Sign in
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Form onSubmit={handleSubmit(values => this.handleSignIn(values))}>
                        <Row className="user-header">
                            <Col>
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
                            </Col>
                        </Row>
                        <Row className="user-footer">
                            <Col className="text-right">
                                <Button
                                    outline 
                                    color="danger"
                                    disabled={submitting}
                                >Sign out
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            )
        }
    }
}

Auth = reduxForm({
    form: 'loginForm',
    validate
})(Auth)
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ login, logout, validateForm, navbarUserToggle }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Auth)
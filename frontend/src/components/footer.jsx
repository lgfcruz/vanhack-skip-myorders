import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import Ionicon from 'react-ionicons'

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer pt-4 my-md-5 pt-md-5 border-top">
        <Row>
          <Col sm="6">
            <strong>{process.env.REACT_APP_NAME}</strong><br />
            <small className="d-block mb-3 text-muted">version {process.env.REACT_APP_VERSION}</small>
            <p>
              Copyright © 2018 <a href={process.env.REACT_APP_COPYRIGHT_LINK} target="_blank"> {process.env.REACT_APP_COPYRIGHT_NAME}</a>. All rights reserved.
            </p>
            <ul className="list-unstyled list-inline text-small">
              <li className="list-inline-item"><a className="text-muted" href={`javascript:;`}><Ionicon icon="logo-twitter" color="#8f8f8f" /></a></li>
              <li className="list-inline-item"><a className="text-muted" href={`javascript:;`}><Ionicon icon="logo-facebook" color="#8f8f8f" /></a></li>
              <li className="list-inline-item"><a className="text-muted" href={`javascript:;`}><Ionicon icon="logo-googleplus" color="#8f8f8f" /></a></li>
            </ul>
          </Col>
          <Col sm="3">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href={`javascript:;`}>Gift Cards</a></li>
              <li><a className="text-muted" href={`javascript:;`}>Restaurant Owners</a></li>
              <li><a className="text-muted" href={`javascript:;`}>Become a Courier</a></li>
              <li><a className="text-muted" href={`javascript:;`}>FAQ</a></li>
            </ul>
          </Col>
          <Col sm="3">
            <h5>Information</h5>
            <ul className="list-unstyled text-small">
              <li><Link to="about" replace={true} className="text-muted">About</Link></li>
              <li><Link to="contact" replace={true} className="text-muted">Contact us</Link></li>
              <li><Link to="privacy-policy" replace={true} className="text-muted">Privacy</Link></li>
              <li><Link to="terms-of-service" replace={true} className="text-muted">Terms</Link></li>
            </ul>
          </Col>
        </Row>
      </footer>
    )
  }
}
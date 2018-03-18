import React, {Component} from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          {process.env.REACT_APP_NAME} <strong>{process.env.REACT_APP_VERSION}</strong>
        </div>
        <strong>Copyright © 2018
          <a href={process.env.REACT_APP_COPYRIGHT_LINK} target="_blank"> {process.env.REACT_APP_COPYRIGHT_NAME}</a>.
        </strong> All rights reserved.
      </footer>
    )
  }
}
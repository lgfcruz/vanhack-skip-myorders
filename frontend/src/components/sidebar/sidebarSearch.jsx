import React, {Component} from 'react'

export default class SidebarSearch extends Component {
  render() {
    return (
      <form action="#" method="get" className="sidebar-form" data-dpmaxz-eid="1">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." data-dpmaxz-eid="2"/>
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat" data-dpmaxz-eid="3">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
    )
  }
}
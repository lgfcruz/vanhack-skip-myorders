import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler
} from 'reactstrap'
import Search from './search'

import { navbarCollapse, navbarUserToggle, searchFormDisplay } from '../actions/header'

import Auth from '../containers/auth'

import photoDefault from '../assets/images/user.png'

class Header extends Component {
  
  constructor(props) {
    super(props)
    this.props.searchFormDisplay(false)
  }

  renderSearchForm() {
    if (this.props.header.searchForm) {
      return (
        <Search />
      )
    }
  }

  render() {
    return (
      <header>
        <Navbar color="faded" dark expand="md">
          <NavbarBrand href="/" className="mr-auto">MyOrders <small>SKIP</small></NavbarBrand>
          <NavbarToggler onClick={() => this.props.navbarCollapse(!this.props.header.collapsed)} className="mr-2" />
          <Collapse isOpen={this.props.header.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <Dropdown nav isOpen={this.props.header.userToggled} toggle={() => this.props.navbarUserToggle(!this.props.header.userToggled)} className="dropdown-user">
                <DropdownToggle nav caret>
                  <img src={this.props.auth.validToken === true ? this.props.auth.user.image : photoDefault} className="rounded-circle user-image" alt="User"/>
                  <span className="hidden-xs">{this.props.auth.validToken === true ? this.props.auth.user.email : 'Login'}</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="div" toggle={false}>
                    <Auth />
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div id="nav-dropdowns-overlay" className={`hidden-xs${this.props.header.toggled ? ' show' : ''}`}></div>
        {this.renderSearchForm()}
      </header>
    )
  }
}

const mapStateToProps = state => ({ header: state.header, auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ navbarCollapse, navbarUserToggle, searchFormDisplay }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)

//getStores

/*
        <NavItem>
          <NavLink href={`javascript:;`}>Github</NavLink>
        </NavItem>

        <Dropdown nav isOpen={this.props.header.helpToggled} toggle={() => this.props.navbarHelpToggle(!this.props.header.helpToggled)} className="nav-icon">
          <DropdownToggle nav>
            <Ionicon icon="ios-help-circle-outline" color="#fff" fontSize="35px" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag="div">
              <NavLink href="/">Help</NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem tag="div">
              <NavLink href="/">About</NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
*/
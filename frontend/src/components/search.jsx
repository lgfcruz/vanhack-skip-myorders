import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Collapse,
  Navbar,
  Nav,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  InputGroup,
  InputGroupAddon
} from 'reactstrap'
import Ionicon from 'react-ionicons'

import { searchText } from '../actions/search'
import { selectCousine } from '../actions/cousines'

class Search extends Component {
  render() {
    return (
        <Navbar color="white" className="navbar-search">
          <Collapse isOpen={true}>
            <Nav>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle tag="div" className="container-fluid">
                  <FormGroup className="margin-bottom-none">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Ionicon icon="ios-search" className="ion-icon-left" />
                      </InputGroupAddon>
                      <Input type="text" name="search" id="search" placeholder="Search for Restaurant or Cuisine" autoComplete="off" value={this.props.search.value} onChange={(e) => this.props.searchText(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Suggested Searches:</DropdownItem>
                  {this.props.cousines.items.map((cousine) =>
                    <DropdownItem key={cousine.id} onClick={() => this.props.selectCousine(cousine)}>{cousine.name}</DropdownItem>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    )
  }
}

const mapStateToProps = state => ({ search: state.search, cousines: state.cousines })
const mapDispatchToProps = dispatch => bindActionCreators({ searchText, selectCousine }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Search)
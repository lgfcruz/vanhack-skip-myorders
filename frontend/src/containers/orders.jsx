import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Alert, ListGroup, ListGroupItem, Media, Badge } from 'reactstrap'

import { searchFormDisplay } from '../actions/header'

import ImageRestaurant from '../assets/images/restaurant.jpg'

class Orders extends Component {

    constructor(props) {
        super(props)
        this.props.searchFormDisplay(false)
    }

  /*cousine(cousineId) {
    let color = ''
    switch (cousineId) {
      case 1:
        color = 'primary'
        break
      case 2:
        color = 'success'
        break
      case 3:
        color = 'warning'
        break
      default:
        color = 'info'
        break
    }
    let cousine = this.props.cousines.items.find(cousine => (cousine.id === cousineId), this)
    if (cousine !== undefined) {
      return (
        <Badge color={color}>{cousine.name}</Badge>
      )
    }
  }

  renderStoresList(stores) {
    return stores.map((store, index) => (
      <ListGroupItem key={store.id} tag="a" href={`javascript:;`}>
        <Media>
          <Media left top tag="div" className="media-image">
            <Media object src={ImageRestaurant} alt="Restaurant" />
          </Media>
          <Media body>
            <Media heading>
              <span>{store.name}</span>{this.cousine(store.cousineId)}
            </Media>
            {store.address}
          </Media>
        </Media>
      </ListGroupItem>
    ))
  }
  
  {this.renderStoresList(stores)}*/

  render() {
    let store = null
    if (this.props.stores.selected) {
        store = this.props.stores.items.find(store => (store.id === this.props.stores.selected), this)
        if (store === undefined) {
            store = null
        }
    }
    if (store) {
        console.log(store)
      return (
        <div>
            <div className="store-info">
                <div className="store-info-background"></div>
                <Container>
                    <h1>{store.name}</h1>
                    <address>{store.address}</address>
                </Container>
            </div>
            <Container>
                teste
            </Container>
        </div>
      )
    } else {
      return (
        <Container>
          <Alert color="warning" className="alert-no-match-found">No restaurant found.</Alert>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => ({ stores: state.stores, cousines: state.cousines })
const mapDispatchToProps = dispatch => bindActionCreators({ searchFormDisplay }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Orders)
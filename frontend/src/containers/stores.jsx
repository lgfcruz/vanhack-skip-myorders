import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Container, Alert, ListGroup, ListGroupItem, Media, Badge } from 'reactstrap'

import { selectStore } from '../actions/stores'

import ImageRestaurant from '../assets/images/restaurant.jpg'

class Stores extends Component {

  cousine(cousineId) {
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
        <ListGroupItem key={store.id} tag="div">
          <Link to={`${store.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/'/g, '-').replace(/\s+/g, '-').toLowerCase()}/order`} onClick={() => this.props.selectStore(store.id)}>
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
          </Link>
        </ListGroupItem>
    ))
  }

  render() {
    const stores = this.props.stores.items || []
    if (stores.length > 0) {
      return (
        <Container>
          <ListGroup className="list-stores">
            {this.renderStoresList(stores)}
          </ListGroup>
        </Container>
      )
    } else {
      return (
        <Container>
          <Alert color="warning" className="alert-no-match-found">No restaurants found matching these filters.</Alert>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => ({ stores: state.stores, cousines: state.cousines })
const mapDispatchToProps = dispatch => bindActionCreators({ selectStore }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Stores)
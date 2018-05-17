/*
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Box from '../components/box'

import Products from './products'

import { getStores } from '../actions/stores'

import ImageRestaurant from '../images/restaurant.jpg'

class Stores extends Component {

  renderStoresList() {
    const list = this.props.storesReducer.stores || []
    return list.map((store, index) => (
      <Box key={index}>
        <Box.Header key={1}>
          <div className="user-block">
            <img className="img-circle" src={ImageRestaurant} alt="Restaurant"/>
            <span className="username">
              <a href={`javascript:;`}>{store.name}</a>
            </span>
            <span className="description">{store.address}</span>
          </div>
        </Box.Header>
        <Box.Content key={2}>
          <Products storeId={store.id} />
        </Box.Content>
      </Box>
    ))
  }

  render() {
    return (
      <div>
        {this.renderStoresList()}
      </div>
    )
  }
}

const mapStateToProps = state => ({ storesReducer: state.storesReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ getStores }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Stores)
*/
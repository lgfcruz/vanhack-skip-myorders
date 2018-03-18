import React, {Component} from 'react'
import {connect} from 'react-redux'

import MenuItem from './menu/menuItem'
import UserMenuItem from './menu/userMenuItem'

class Menu extends Component {
  
  render() {
    const { myorder } = this.props.ordersReducer
    const sumtotal = myorder.total
    const qttotal = myorder.orderItems.reduce( ( prevVal, e ) => prevVal + e.quantity, 0.00 )
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <MenuItem key={1} icon="shopping-cart" badge={`${qttotal}`} badgeColor="warning" title="current order" label={`$${sumtotal}`} href="/invoice" />
          <UserMenuItem auth={this.props.auth} />
        </ul>
      </div>
    )
  }
}

export default connect(state => state)(Menu)
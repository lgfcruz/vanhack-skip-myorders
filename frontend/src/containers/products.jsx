import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProducts } from '../actions/products'
import { addInCart } from '../actions/orders'

import If from '../components/operator/if'

class Products extends Component {

  componentWillMount() {
    this.props.getProducts(this.props.storeId)
  }

  componentWillReceiveProps(nextProps){
    if((nextProps.storeId !== undefined) && (nextProps.storeId !== this.props.storeId)){
        this.props.getProducts(this.props.storeId)
    }
  }

  addCart(product) {
    const myorder = this.props.ordersReducer.myorder
    const productIndex = myorder.orderItems.findIndex(item => item.productId === product.id)
    if (productIndex < 0) {
        const myorderItem = {
            orderId: myorder.orderItems.length,
            productId: product.id,
            product: {
              storeId: product.storeId,
              name: product.name,
              description: product.description,
              price: product.price
            },
            price: product.price,
            quantity: 1,
            total: product.price
        }
        myorder.orderItems.push(myorderItem)
    } else {
        myorder.orderItems[productIndex].quantity = myorder.orderItems[productIndex].quantity+1
        myorder.orderItems[productIndex].total = myorder.orderItems[productIndex].price * myorder.orderItems[productIndex].quantity
    }
    const total = myorder.orderItems.reduce( ( prevVal, e ) => prevVal + e.total, 0.00 )
    myorder.total = total
    this.props.addInCart(myorder)
  }

  renderProductsList(products) {
    return products.map((product, index) => (
      <tr key={product.id}>
        <td>
          {product.name}
        </td>
        <td>
          {product.description}
        </td>
        <td>
          {product.price}
        </td>
        <If test={this.props.auth.validToken}>
        <td style={{width: '30px'}}>
            <button type="button" className="btn btn-danger" onClick={() => this.addCart(product)}>Add</button>
        </td>
        </If>
      </tr>
    ))
  }

  render() {
    const { products } = this.props.productsReducer
    return (
    <table className="table table-bordered">
        <tbody>
            {this.renderProductsList(products)}
        </tbody>
    </table>
    )
  }
}

const mapStateToProps = state => ({ productsReducer: state.productsReducer, auth: state.auth, ordersReducer: state.ordersReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ getProducts, addInCart }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Products)
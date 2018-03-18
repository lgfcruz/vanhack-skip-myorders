import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProducts } from '../actions/products'
import { addInCart } from '../actions/orders'

import Content from '../components/content'
import Row from '../components/row'
import Col from '../components/col'
import Box from '../components/box'

import Visa from '../images/visa.png'
import MasterCard from '../images/mastercard.png'
import American from '../images/american-express.png'
import Paypal from '../images/paypal2.png'

class Invoice extends Component {

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

  renderProductsList(items) {
    return items.map((item, index) => (
      <tr key={index}>
        <td>
          {item.quantity}
        </td>
        <td>
          {item.product.name}
        </td>
        <td>
          {item.product.description}
        </td>
        <td>
          ${item.price}
        </td>
        <td>
          ${item.total}
        </td>
        <td style={{width: '30px'}}>
            &nbsp;
        </td>
      </tr>
    ))
  }

  render() {
    const myorder = this.props.ordersReducer.myorder
    if (myorder.total <= 0) {
      return (
        <div>
        <Content.Header title="Invoice"/>
        <Content>
          <Row>
            <Col>
              <Box>
                <Box.Content key={2}>
                  <p>
                    You are without products in your cart, please add a product and return here.
                  </p>
                </Box.Content>
              </Box>
            </Col>
          </Row>
        </Content>
        </div>
      )
    } else {
      return (
          <div>
          <Content.Header title="&nbsp;"/>
          <Content>
          <section className="invoice">
            <Row>
              <div className="col-xs-12">
                <h2 className="page-header">
                  <i className="fa fa-globe"></i> Invoice
                  <small className="pull-right">Date: 2/10/2014</small>
                </h2>
              </div>
            </Row>
            <div className="row invoice-info">
              <div className="col-sm-4 invoice-col">
                From
                <address>
                  <strong>Test A</strong><br />
                  999 Test Ave<br />
                  Belem, PA<br />
                  Phone: (804) 999-9999<br />
                  Email: testa@testa.com
                </address>
              </div>
              <div className="col-sm-4 invoice-col">
                To
                <address>
                  <strong>Test B</strong><br />
                  999 Test Ave<br />
                  Belem, PA<br />
                  Phone: (804) 999-9999<br />
                  Email: testb@testb.com
                </address>
              </div>
              <div className="col-sm-4 invoice-col">
                <b>Invoice #007612</b><br />
                <br />
                <b>Order ID:</b> 4F3S8J<br />
                <b>Payment Due:</b> 2/22/2014<br />
                <b>Account:</b> 968-34567
              </div>
            </div>
            <Row>
              <div className="col-xs-12 table-responsive">
                <table className="table table-striped">
                  <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderProductsList(myorder.orderItems)}
                  </tbody>
                </table>
              </div>
            </Row>

            <Row>
              <div className="col-xs-6">
                <p className="lead">Payment Methods:</p>
                <img src={Visa} alt="Visa" />
                <img src={MasterCard} alt="Mastercard" />
                <img src={American} alt="American Express" />
                <img src={Paypal} alt="Paypal" />

                <p className="text-muted well well-sm no-shadow" style={{marginTop: '10px'}}>
                  Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg
                  dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                </p>
              </div>
              <div className="col-xs-6">
                <p className="lead">Amount Due 2/22/2014</p>

                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th style={{width: '50%'}}>Subtotal:</th>
                        <td>${myorder.total}</td>
                      </tr>
                      <tr>
                        <th>Tax (0.0%)</th>
                        <td>$0.0</td>
                      </tr>
                      <tr>
                        <th>Total:</th>
                        <td>${myorder.total}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Row>
            <Row className="no-print">
              <div className="col-xs-12">
                <a href={`javascript:;`} className="btn btn-default"><i className="fa fa-print"></i> Print</a>
                <button type="button" className="btn btn-success pull-right"><i className="fa fa-credit-card"></i> Submit Payment
                </button>
                <button type="button" className="btn btn-primary pull-right" style={{marginRight: '5px'}}>
                  <i className="fa fa-download"></i> Generate PDF
                </button>
              </div>
            </Row>
          </section>
          </Content>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({ productsReducer: state.productsReducer, auth: state.auth, ordersReducer: state.ordersReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ getProducts, addInCart }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
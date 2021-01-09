import React, { Component } from 'react';
import { connect } from "react-redux";
import { ordersHandler,removeOrder } from "../actions/orderActions";
var moment = require('moment');

class Order extends Component {
  constructor(props) {
    super(props);
  }
    componentDidMount(props) {
      console.log(this.props.ordersHandler)
    }
    removeOrderItem = () => {
      this.props.removeOrder();
    };
    render() {
      console.log(this.props.order)
        const { order } = this.props;
        return (
          <div className="app-container">
          <header className="app-header">
            <div className="header-navbar">
              <a href="/">Marketplace</a>
              </div>
          </header>
          <main className="order-page">
            <div> 
              <div className="order-info">
                <div>{order && (
                  <div className="order-detail">
                    <h2>Order ID{order._id}</h2>
                      <h3 className="order-message">Thank You! You successfully placed an order.</h3>
                      <ul>
                        <li>
                        <div>Item</div>
                          {order.buyItem.map((item) => (
                        <div>{item.title}</div> ))}
                        </li> 
                        <li>
                        <div>Name</div> <div>{order.name}</div>
                        </li>
                        <li>
                        <div>Email</div><div>{order.email}</div>
                        </li>
                        <li>
                        <div>Phone</div><div>{order.mobile}</div>
                        </li>
                        <li>
                        <div>Address</div><div>{order.address}</div>
                        </li>
                        <li>
                        <div>Date</div> <div>{moment(order.createdAt).format("DD-MM-YYYY HH:MM:SS")}</div>
                        </li>
                        <li>
                        <div>Total</div><div>{order.total}</div>
                        </li>
                        </ul>
                      <div className="goback-btn">
                      <a href="/" onClick={this.removeOrderItem}> Continue</a> 
                     </div>
                 </div>
               )}
              </div>
            </div>
          </div>
          </main>
          <footer>
             Copyright 2021 Marketplace
          </footer>
   
        </div>
        )
    }
    }
    export default connect(
      (state) => ({
        order: state.order.order,
      }),
      { ordersHandler,removeOrder
      }
    )(Order);
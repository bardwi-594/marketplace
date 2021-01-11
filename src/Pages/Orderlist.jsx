import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrders } from "../actions/orderActions";
var moment = require('moment');

class Orderlist extends Component {
    componentDidMount() {
        this.props.getOrders();
    
    }
    handlelogout =(e) =>{
        localStorage.removeItem('user');
    }
 
    render() {
        const { orders } = this.props;
        const admin = localStorage.getItem('user');
    
    return( 
        <div className="app-container">
            <header className="app-header">
               <div className="header-navbar">
                   <a href="/">Marketplace</a>
                   <a href="/login" onClick={this.handlelogout}>Logout</a>
               </div>
            </header>
            <main>
                {!orders && admin?(
                <div className="loader">Orders</div>
                ) : (
                <div className="orderlist">
                   <h2>Orders List</h2>
                   <div className="animate-itemlist">
                       <table>
                       <thead>
                       <tr>
                          <th>ID</th>
                          <th>ITEMS</th>
                          <th>DATE</th>
                          <th>TOTAL</th>
                          <th>NAME</th>
                          <th>EMAIL</th>
                          <th>MOBILE</th>
                          <th>ADDRESS</th>
                       </tr>
                       </thead>
                       <tbody>
                          {orders.map((order) => (
                       <tr>
                          <td>{order._id}</td>
                          <td>
                            {order.buyItem.map((item) => (
                                <div>
                                 {item.title}
                                </div>
                            ))}
                          </td>
                          <td>{moment(order.createdAt).format("DD-MM-YYYY HH:MM:SS")}</td>
                          <td> {order.total}</td>
                          <td>{order.name}</td>
                          <td>{order.email}</td>
                          <td>{order.mobile}</td>
                          <td>{order.address}</td>
                        </tr>
                        ))}
                       </tbody>
                       </table>
                </div>
               </div>
               )}
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
    orders: state.order.orders,
  }),
  {
    getOrders,
  }
)(Orderlist);


import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { removeItem} from "../actions/buyActions";
import { ordersHandler, removeOrder } from "../actions/orderActions";
import { withRouter } from 'react-router-dom';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      email: "",
      address: "",
      mobile: ""
    };
  }
  /****Creates an order  */
  ordersHandler= (event) => {
    event.preventDefault();
    const order= {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      mobile: this.state.mobile,
      buyItem: this.props.buyItem,
      total: this.props.buyItem.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.ordersHandler(order);
    this.props.history.push({
      pathname: '/order',
    }); 
  
  }
  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { buyItem, order } = this.props;
    return (
      <div>
        <div className="list-item">
          {buyItem.map((item) => (
            <div key={item._id}>
              <div className="product-image">
                <img src={item.image} alt={item.title}></img>
              </div>
              <div>
                <div>{item.title}</div>
                  <div className="total">
                    <p>€{(item.price)} </p> 
                      <button className="button remove-item" 
                        onClick={() => this.props.removeItem(item)}
                      >
                      Remove
                      </button>
                  </div>
                </div>
              </div>))}
            </div>
                {order && (
                  <div>
                    {order.map((item) => (
                    <div>{item._id}</div>
                   ))}
                  </div>
                )}

          {buyItem.length !== 0 && (
            <div>
              <div className="total-amt">
                <div className="final-amt">Total: <span>€</span> 
                  {buyItem.reduce((a, c) => a + c.price * c.count, 0)}
                </div>
                <button className="button-checkout" onClick={this.openModal}>Buy</button>
              </div>
                <Modal isOpen={this.state.showModal}
                  contentLabel="Enter Personal Details"
                  className="modal"
                  overlayClassName="Overlay"
                  onRequestClose={this.closeModal}
                  >
                  <div className="close-btn">
                    <button onClick={this.closeModal}>close</button>
                  </div>
                  
                  <div className="checkout-details">
                    <div>Enter your Details</div>
                      <form onSubmit={this.ordersHandler}>
                        <ul className="form-container">
                          <li>
                            <label>Name</label>
                             <input
                              name="name"
                              type="text"
                              required
                              onChange={this.inputHandler}
                             ></input>
                          </li>
                          <li>
                            <label>Email</label>
                              <input
                               name="email"
                               type="email"
                               required
                               onChange={this.inputHandler }
                               ></input>
                          </li>
                          <li>
                            <label>Address</label>
                              <input
                              name="address"
                              type="text"
                              required
                              onChange={this.inputHandler }
                              ></input>
                          </li>
                          <li>
                            <label>Mobile</label>
                              <input
                              name="mobile"
                              type="number"
                              required
                              onChange={this.inputHandler }
                              ></input>
                          </li>
                          <li>
                            <button className="button-checkout"  type="submit">
                              Checkout
                            </button>
                          </li>
                      </ul>
                    </form>
                  </div>
                </Modal>
              </div>
            )}
          </div>
        )
    }
}

export default withRouter(connect(
  (state) => ({
    buyItem: state.buy.buyItem,
    order: state.order.order,
  }),
  { removeItem,ordersHandler, removeOrder}
)(Buy));
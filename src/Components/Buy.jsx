import React, { Component } from 'react'
import Modal from "react-modal";

export default class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }


  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
    render() {
        const { buyItem } = this.props;
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
                    </div>
                  ))}
                </div>

                <div className="total-amt">
                  <div className="final-amt">Total: <span>€</span> </div>
                  <button className="button-checkout" onClick={this.openModal}>Buy</button>
                </div>

                <Modal isOpen={this.state.showModal}
                  contentLabel="Enter Personal Details"
                  className="Modal"
                  overlayClassName="Overlay"
                  onRequestClose={this.closeModal}
                  >
                  <div className="close-btn">
                    <button onClick={this.closeModal}>close</button>
                  </div>
                  
                  <div className="checkout-details">
                    <div>Enter your Details</div>
                      <form >
                        <ul className="form-container">

                        <li>
                            <label>Name</label>
                             <input
                              name="name"
                              type="text"
                              required
                             ></input>
                          </li>
                          <li>
                            <label>Email</label>
                              <input
                               name="email"
                               type="email"
                               required
                               ></input>
                          </li>
                          
                          <li>
                             <label>Address</label>
                              <input
                              name="address"
                              type="text"
                              required
                              ></input>
                          </li>
                          <li>
                             <label>Mobile</label>
                              <input
                              name="mobile"
                              type="number"
                              required
                              ></input>
                          </li>
                          <li>
                              <button className="button-checkout" type="submit">
                                 Checkout
                              </button>
                          </li>
                      </ul>
                    </form>
                  </div>
                     
                </Modal>
            </div>
           )
      }
}

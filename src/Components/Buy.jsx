import React, { Component } from 'react'

export default class Buy extends Component {
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
                  <button className="button-checkout">Buy</button>
                </div>
            </div>
           )
      }
}

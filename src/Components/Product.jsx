import React, { Component } from 'react';
import { connect } from "react-redux";
import { buyProduct} from "../actions/buyActions";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
   
    render() {
        const products = this.props.location.state;

        return (
            <div className="app-container">
                <header className="app-header">
                    <div className="header-navbar">
                       <a href="/">Marketplace</a>
                    </div>
                </header>
                <main>
                   <div className="app-content">
                       <div className="product-content">
                           <div className="product-details">
                               <img src={products.product.image} alt={products.product.title}></img>
                               <div className="product-description">
                                  <p><strong>{products.product.title}</strong></p>
                                  <p>{products.product.description}</p>
                                   <div className="product-price">
                                       <div className="prices"><span>€</span>{products.product.price}</div>
                                       <button 
                                       onClick={() => this.props.buyProduct(products.product)} 
                                       className="button buybtn" >Buy 
                                       </button>
                                   </div>
                                </div>
                           </div>
                       </div>
                   </div>
                </main>
                
            </div>
        )
    }
}
export default connect(
    (state) => ({ products: state.products.productLists}),
    {buyProduct,
    })(Product);
import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
          product: null,
        };
      }
    render() {
        return (
            <div className="product-wrapper">
                <ul className="product-list">
                   {this.props.products.map((product) =>(
                        <li key={product._id}>
                            <div className="products">
                                <Link to={{pathname: `/product/${product._id}`,
                                        state:{ product}
                                        }} key={product._id}> 
                                        <img src = {product.image} alt={product.title}/>
                                        <p>
                                        {product.title}
                                        </p>
                                </Link>
                               
                                <div className="price">
                                    <div className="prices"><span>€</span>{product.price}</div>
                                    <button className="button buybtn">Buy</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

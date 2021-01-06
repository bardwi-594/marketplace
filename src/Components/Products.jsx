import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div className="product-wrapper">
                <ul className="product-list">
                   {this.props.products.map((product) =>(
                        <li key={product._id}>
                            <div className="products">
                                <a href={"#" + product._id}>
                                    <img src = {product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
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

import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../actions/productActions";
import { buyProduct} from "../actions/buyActions";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
     };
  }
  componentDidMount() {
    this.props.getProducts();
    console.log(this.props)
  }
      
render() {
    return (
        <div className="product-wrapper">
           {!this.props.products ? (
             <div>
                <div class="loader"></div>
             </div>
            ) : (
            <ul className="product-list animate-itemlist">
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
                        <button onClick={() => this.props.buyProduct(product)} className="button buybtn">Buy</button>
                      </div>
                    </div>
                </li>
                ))}
            </ul>
            )}
        </div>
        )
    }
}

export default connect(
  (state) => ({ products: state.products.productLists}),
    {
      getProducts,
      buyProduct,
    })(Products);
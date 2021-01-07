import React, { Component } from 'react';
import Products from "./Products";
import Buy from "./Buy";
import data from "../product.json";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      buyItem: []
      
    };
  }
 

  handleBuy= (product) => {
    const buyItem = this.state.buyItem.slice();
    let itemExists = false;
    buyItem.forEach(item=>{
      if(item) {
        itemExists = true;
      }
    });
    if(!itemExists) {
      buyItem.push({...product, count: 1})
    }
    this.setState({buyItem})
    
  }

  removeItem = (product) => {
    const buyItem = this.state.buyItem.slice();
    this.setState({
      buyItem: buyItem.filter((x) => x._id !== product._id),
    });
  };

  
  render() {
    return (
        <div className="app-container">
          <header className="app-header">
            <div className="header-navbar">
              <a href="/">Marketplace</a>
              </div>
          </header>
          <main>
            <div className="app-content"> 
              <div className="product-container">
                <Products products={this.state.products} handleBuy={this.handleBuy}/>
              </div>
              <div className="sidenav"> 
                <Buy buyItem={this.state.buyItem} removeItem={this.removeItem}/>
            </div>
            </div>
    
          </main>
          <footer>
             Copyright 2021 Marketplace
          </footer>
        </div>
      );
    }
 }
 export default Home;
    

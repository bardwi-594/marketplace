import React, { Component } from 'react';
import Products from "./Products";
import data from "../product.json";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
          products: data.products,
        }
      }
    
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
                <Products products={this.state.products}/>
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
    

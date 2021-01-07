import React, { Component } from 'react';
import Products from "../Components/Products";
import Buy from "../Components/Buy";
import data from "../product.json";

class Home extends Component {
  constructor() {
    super();
    
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
                <Products />
              </div>
              <div className="sidenav"> 
                <Buy/>
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
    
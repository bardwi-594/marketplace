import React, { Component } from 'react';
import Products from "../Components/Products";
import Buy from "../Components/Buy";

class Home extends Component {
render() {
    return (
        <div className="app-container">
          <header className="app-header">
            <div className="header-navbar">
              <a href="/">Marketplace</a>
              <a href="/login">Login</a>
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
    

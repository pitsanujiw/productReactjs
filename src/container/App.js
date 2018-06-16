import React, { Component } from "react";
import { Productshow, Cart } from "../components";
class App extends Component {
  state = {
    products: [
      { id: 1, name: "Product#1", amount: 10, buy: 0 },
      { id: 2, name: "Product#2", amount: 9, buy: 0 },
      { id: 3, name: "Product#3", amount: 8, buy: 0 },
      { id: 4, name: "Product#4", amount: 7, buy: 0 },
      { id: 5, name: "Product#5", amount: 6, buy: 0 }
    ]
  };
  /**
   *  ChangeBuy @method
   */
  ChangeBuy = (id, amount) => {
    this.setState(prevState => {
      const { products } = prevState;
      const index = products.findIndex(product => product.id === id);
      const product = products[index];
      return {
        products: [
          ...products.slice(0, index),
          {
            ...product,
            buy: product.buy + amount
          },
          ...products.slice(index + 1)
        ]
      };
    });
    console.log(this.state);
  };
  /**
   *
   */
  getProductInCart = () => {
    return this.state.products.filter(({ buy }) => buy > 0);
  };
  /**
   *
   */
  reduceBuy = () => id => this.ChangeBuy(id, -1);
  inCreaseBuy = () => id => this.ChangeBuy(id, +1);

  /**
   *
   */
  getAvailableProduct = () => {
    return this.state.products.filter(({ amount, buy }) => amount !== buy);
  };
  render() {
    return (
      <div className="container">
        <Productshow
          products={this.getAvailableProduct()}
          onAddToCart={this.inCreaseBuy()}
        />
        <Cart products={this.getProductInCart()} onRemove={this.reduceBuy()} />
      </div>
    );
  }
}

export default App;

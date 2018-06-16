import React from "react";
import Products from "./product";

const Productshow = ({ products, onAddToCart }) => (
  <div>
    <ul className="list-group">
      <li className="list-group-item active">Products</li>
      {products.map(({ id, name, amount, buy }) => (
        <Products
          key={[id,name]}
          id={id}
          name={name}
          amount={amount - buy}
          onClick={onAddToCart}
          btnTxt="Add to Cart"
        />
      ))}
    </ul>
  </div>
);

export default Productshow;

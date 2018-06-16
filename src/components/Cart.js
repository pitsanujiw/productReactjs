import React from "react";
import Products from "./product";
const Cart = ({ products, onRemove }) => (
  <div>
    <ul className="list-group">
      <li className="list-group-item active">Carts</li>
      {products.map(({ id, name, buy }) => (
        <Products
          key={id}
          id={id}
          name={name}
          amount={buy}
          onClick={onRemove}
          btnTxt="Remove"
        />
      ))}
    </ul>
  </div>
)
export default Cart;

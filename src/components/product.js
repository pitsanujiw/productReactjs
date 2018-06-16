import React from "react";

const Products = ({ id, name, amount, onClick, btnTxt }) => (
  <li className="list-group-item">
    <div className="justify-content-between d-flex w-100">
      {name}
      <span className="budge budge-pill budge-default">{amount}</span>
    </div>
    <button type="submit" onClick={() => onClick(id)}>
      {btnTxt}
    </button>
  </li>
);
export default Products;

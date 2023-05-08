import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleCartClick() {
    setInCart(!inCart);
  }

  const cartText = inCart ? "Remove From Cart" : "Add to Cart";
  const cartClass = inCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>
        {cartText}
      </button>
    </li>
  );
}

export default Item;
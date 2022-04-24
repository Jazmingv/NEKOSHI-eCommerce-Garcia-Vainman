import React from "react";
import { useContext } from "react";

import CartContext from "../contexts/CartContext";
import CartPage from "../components/CartPage";

const Cart = () => {
  // const { cartProducts } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <CartPage />
      {/* Cart
      {cartProducts.map((product) => {
        return (
          <div className="container">
            <h3>{product.title}</h3>
            <h5>{product.author}</h5>
            <p>
              <b>${product.price}</b>
            </p>
            
          </div>
        );
      })} */}
    </div>
  );
};

export default Cart;

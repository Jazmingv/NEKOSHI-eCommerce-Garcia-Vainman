import React from "react";

import CartTable from "./CartTable";

import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const CartPage = () => {
    const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
          <div>
              <br />
          <h2>No items yet...</h2>
          </div>
              ) : (
                  <CartTable />
              )
    }
    </>
  );
};

export default CartPage;
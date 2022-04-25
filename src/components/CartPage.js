import React from "react";

import CartTable from "./CartTable";

const CartPage = () => {
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
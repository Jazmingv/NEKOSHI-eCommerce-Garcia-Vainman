import React from "react";

import ClearIcon from "@mui/icons-material/Clear";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CartContext from "../contexts/CartContext";
import { useContext } from "react";
import CartTable from "./CartTable";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

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

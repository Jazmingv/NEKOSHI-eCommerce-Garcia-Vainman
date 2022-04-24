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

const CartTable = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Product Total</TableCell>
              <TableCell align="right">Erase</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <TableRow
                key={product.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.item.title}
                </TableCell>
                <TableCell align="right">{product.item.price}</TableCell>
                <TableCell align="right">{product.quant}</TableCell>
                <TableCell align="right">
                  {product.item.price * product.quant}
                </TableCell>
                <TableCell align="right">
                  <ClearIcon onClick={() => removeFromCart(product.item.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <h3>Total: ${cart.reduce((acc, product) => {
            console.log(acc);
            return parseFloat(acc + product.item.price * product.quant);
            }, 0)}</h3>
      </div>
    </>
  );
};

export default CartTable;
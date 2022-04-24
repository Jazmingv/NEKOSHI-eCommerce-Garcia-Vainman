import React from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../contexts/CartContext";

import ClearIcon from "@mui/icons-material/Clear";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CartPopUpTable = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Quant.</TableCell>
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
                <TableCell align="right">{product.quant}</TableCell>
                <TableCell align="right">
                  <ClearIcon onClick={() => removeFromCart(product.item.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
              <Link to={'/cart'}><Button style={{'margin': '10px'}}>View full cart</Button></Link>
    </>
  );
}

export default CartPopUpTable;
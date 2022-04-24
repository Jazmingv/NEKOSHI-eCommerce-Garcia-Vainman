import React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
import CartPopUpTable from "./CartPopUpTable";

function CartWidget() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <IconButton aria-label="cart" variant="text" {...bindTrigger(popupState)}>
                <StyledBadge badgeContent={cart.length} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              {cart.length === 0 ? (
              <>
              <h4 style={{'margin': '10px'}}>No items yet...</h4>
              <Link to={'/'}><Button style={{'margin': '10px'}}>Go to shop</Button></Link>
              </>) : ( <CartPopUpTable />)}
            </Popover>
          </div>
        )}
      </PopupState>
    </>
  );
}

export default CartWidget;

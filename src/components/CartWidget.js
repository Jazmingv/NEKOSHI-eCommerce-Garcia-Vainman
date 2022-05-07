import React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import { Link } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../contexts/CartContext";

import CartPopUpTable from "./CartPopUpTable";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 6,
    border: "none",
    backgroundColor: "#AFEB30",
    color: "#111111",
    padding: "0 4px",
  },
}));

const CartWidget = () => {

  const { cart } = useContext(CartContext);

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <IconButton aria-label="cart" variant="text" {...bindTrigger(popupState)}>
                <StyledBadge badgeContent={cart.length} color="primary">
                  <ShoppingBagOutlinedIcon sx={{ fontSize: 28, color: '#FFF' }} />
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
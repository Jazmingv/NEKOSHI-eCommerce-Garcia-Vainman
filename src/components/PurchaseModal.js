import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


import PurchaseForm from './Forms/ContactForm/PurchaseForm';
import CartContext from "../contexts/CartContext";
import { useContext, useState } from "react";

export default function PurchaseModal() {
    const { cart } = useContext(CartContext);
    
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    cart.length > 0 ? 
    (setOpen(true)) : 
    (setOpen(false))
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Finish purchasing
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Finish your order"}
        </DialogTitle>
        <DialogContent>
            <PurchaseForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
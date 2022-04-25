import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import CartContext from "../contexts/CartContext";
import { useContext, useState } from "react";

import dBase from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function PurchaseModal() {
    const { cart, total, setCart } = useContext(CartContext);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
      });

    const [order, setOrder] = useState({
      buyer: form,
      items: cart.map((product) => {
          return {
              title: product.item.title,
              price: product.item.price,
              quantity: product.quant,
      }
      }),
      total: total
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      pushOrder();
    }

    const pushOrder = async () => {
      const newOrder = {...order, 
        buyer: form
      };
      const firebaseOrder = collection(dBase, 'orders');
      const dBaseOrder = await addDoc(firebaseOrder, newOrder);
      console.log("id de la orden: ", dBaseOrder.id);
      setCart([]);
    }

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
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={form.name}/><br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={form.email}/><br />
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" id="phone" onChange={handleChange} value={form.phone}/>
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} autoFocus>
            Finish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
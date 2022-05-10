import React from "react";

import "./Forms.css";

import CartContext from "../../../contexts/CartContext";
import { useContext, useState } from "react";

import dBase from '../../../Firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = (e) => {
  const [userId, setUserId] = useState([]);
  const [succesfullPurchase, setsuccesfullPurchase] = useState(false);
  
  const { cart, total, setTotal, setCart } = useContext(CartContext);

  const [order, setOrder] = useState({
    buyer: userId,
    items: cart.map((product) => {
        return {
            title: product.item.title,
            price: product.item.price,
            quantity: product.quant,
    }
    }),
    total: total
  });

  const handleChange = (tag, value) => {
    setUserId({ ...userId, [tag]: value });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValidForm = validateForm();
    if (isValidForm) {
      setsuccesfullPurchase(true);
      pushOrder();
      localStorage.removeItem('cart');
      Array.from(document.querySelectorAll("input, textarea")).forEach(
        (input) => (input.value = "")
      );
    }
  };

  
  const pushOrder = async () => {
    const newOrder = {...order, 
      buyer: userId
    };
    const firebaseOrder = collection(dBase, 'orders');
    const dBaseOrder = await addDoc(firebaseOrder, newOrder);
    console.log("id de la orden: ", dBaseOrder.id);
    setCart([]);
    setTotal(0);
    setOrder([])
  }

  const validateForm = () => {
    const email = validateEmail();
    const phone = userId.phone.toString().length;
    if (!userId.fname) {
      alert("Please enter your name");
      return false;
    } else if (!userId.lname) {
      alert("Please enter your last name");
      return false;
    } else if (phone < 8) {
      alert("Please enter correct phone number");
      return false;
    } else if (email === false) {
      return false;
    } else {
      return true;
    }
  };

  const validateEmail = () => {
    var emailID = userId.email;
    const atpos = emailID.indexOf("@");
    const dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      alert("Please enter correct email ID");
      return false;
    }
    return true;
  };

  return (
    <>
      {
        succesfullPurchase ? (<div className="succesfull-purchase">
        <p>
          Your purchase of {cart.length} products for {total} has been placed!
        </p>
      </div>) : 
      (<div>
        <form className="contact-form">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            onChange={(e) => handleChange("fname", e.target.value)}
          />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            onChange={(e) => handleChange("lname", e.target.value)}
          />
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Your phone.."
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            type="submit"
            onClick={(e) => handleFormSubmit(e)}
            value="Submit"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--dark)",
            }}
          />
        </form>
      </div>
      )}
    </>
  );
};

export default ContactForm;

import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const existingCart = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useState(() => {
  if (existingCart) {
    setCart(existingCart);
  }
  });

  const addToCart = (item, quant) => {
      let cartItemExists = cart.find(cartItem => cartItem.item.id === item.id);
      const newItem = {
        item,
        quant
      };
      if (!cartItemExists) {
        let newCart = [...cart, newItem]
        setTotal(parseFloat(total + (item.price * quant)).toFixed(2));
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart))
      }
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter(item => item.item.id !== itemId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart))
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    setTotal(0);
  };

  const data = {
    cart,
    setCart,
    addToCart,
    total,
    removeFromCart,
    clearCart
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;

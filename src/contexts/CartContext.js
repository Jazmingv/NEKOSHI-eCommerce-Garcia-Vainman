import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item, quant) => {
      let cartItemExists = cart.find(cartItem => cartItem.item.id === item.id);
      const newItem = {
        item,
        quant
      };
      if (!cartItemExists) {
        setTotal(parseFloat(total + item.price * quant).toFixed(2));
        setCart([...cart, newItem]);
      }
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter(item => item.item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
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

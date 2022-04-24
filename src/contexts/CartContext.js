import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quant) => {
      let cartItemExists = cart.find(cartItem => cartItem.id === item.id);
      const newItem = {
        item,
        quant
      };
      !cartItemExists && setCart([...cart, newItem]);
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter(item => item.item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  console.log(cart);

  const data = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    clearCart
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;

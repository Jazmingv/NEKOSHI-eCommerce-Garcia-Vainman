import { useState } from "react";

const ItemCount = () => {
  const [quantity, setQuantity] = useState(0);

  const Increment = () => {
    if (quantity >= 0 && quantity < 5) {
      setQuantity(quantity + 1);
    }
  };
  const Decrement = () => {
    if (quantity <= 5 && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <button onClick={Decrement}>-</button>
      <p>{quantity}</p>
      <button onClick={Increment}>+</button>
    </>
  );
};

export default ItemCount;
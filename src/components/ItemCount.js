import { useState } from "react";

const ItemCount = (props) => {
  const [quantity, setQuantity] = useState(props.initialQuantity);

  const Increment = () => {
    if (quantity >= props.initialQuantity && quantity < props.currentStock) {
      setQuantity(quantity + 1);
    }
  };
  const Decrement = () => {
    if (quantity <= props.currentStock && quantity > props.initialQuantity) {
      setQuantity(quantity - 1);
    }
  };
  const onAdd = () => {
    // console.log("onAdd");
  };

  return (
    <div className="item-count">
      <button onClick={Decrement}>-</button>
      <p>{quantity}</p>
      <button onClick={Increment}>+</button>
      <br />      
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
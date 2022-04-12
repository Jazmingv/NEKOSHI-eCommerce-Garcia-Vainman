import { ActionTypes } from "@mui/base";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = (props, funct) => {
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

  return (
    <div className="item-count">
      <button className="btn-add" onClick={Decrement}>-</button>
      <p style={{margin: '5px', marginTop: '35px'}}>{quantity}</p>
      <button className="btn-add" onClick={Increment}>+</button>
      <br />      
    </div>
  );
};

export default ItemCount;
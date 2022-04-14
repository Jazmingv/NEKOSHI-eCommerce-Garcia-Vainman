import { useState } from "react";
// import { Link } from "react-router-dom";

const ItemCount = ({initialQuantity, currentStock, onAdd}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const Increment = () => {
    if (quantity >= initialQuantity && quantity < currentStock) {
      setQuantity(quantity + 1);
    }
  };
  const Decrement = () => {
    if (quantity <= currentStock && quantity > initialQuantity) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <button className="btn-add" onClick={Decrement}>-</button>
      <p style={{margin: '5px', marginTop: '35px'}}>{quantity}</p>
      <button className="btn-add" onClick={Increment}>+</button>
      <br />      
      <button className="btn-add" onClick={() => onAdd(quantity)}>ADD TO CART</button>
    </div>
  );
};

export default ItemCount;
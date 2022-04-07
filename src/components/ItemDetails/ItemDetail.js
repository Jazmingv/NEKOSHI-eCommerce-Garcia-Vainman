import "../../App.css";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";

const ItemDetail = (props) => {

  const [counter, setCounter] = useState(0);

  const onAdd = (e) => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <div className="card-image">
        <img
          src={props.imageUrl}
          alt={props.title}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="card-right">
        <h2 className="item-title">{props.title}</h2>
        <h5>{props.author}</h5>
        <p className="item-price">
          <b>${props.price}</b>
        </p>
        <p className="item-desc">{props.sinopsis}</p>
        <br></br>
        <ItemCount
          initialQuantity={props.initialQuantity}
          currentStock={props.currentStock}
          funct={onAdd()}
        />
        <p>CANTIDAD A COMPRAR: {counter}</p>
      </div>
    </div>
  );
};

export default ItemDetail;

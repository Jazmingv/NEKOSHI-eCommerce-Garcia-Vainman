import { useContext, useEffect, useState } from "react";
import "../../App.css";
import CartContext from "../../contexts/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ItemDetail = (props) => {

  const {addToCart} = useContext(CartContext);
  const [onCart, setOnCart] = useState(false);

  const onAdd = (counter) => {
    addToCart(props, counter);
    setOnCart(true);
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
        <p className="item-price">
        <h5><b>${props.price}</b></h5>
        </p>
        <br></br>
    {
      !onCart ?
<ItemCount
          initialQuantity={props.initialQuantity}
          currentStock={props.currentStock}
          onAdd={onAdd}
        />
        :
        <Link to={'/cart'}><Button style={{'margin': '10px'}}>Go to cart</Button></Link>
    }
        
      </div>
    </div>
  );
};

export default ItemDetail;

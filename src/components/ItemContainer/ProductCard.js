import { useContext } from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemDetails/ItemCount";
import CartContext from "../../contexts/CartContext";
import Paper from "@mui/material/Paper";

const ProductCard = (props) => {

  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    addToCart(props.item);
  };

  return (
    <>
      <Paper elevation={3} className="card">
        <img src={props.imageUrl} alt={props.title} />
        <div className="container">
          <h3>{props.title}</h3>
          <h5>{props.author}</h5>
          <p>{props.description}</p>
          <p>
            <b>${props.price}</b>
          </p>
          
      <Link to={'/cart'}><button className="btn-add" onClick={handleAddToCart()}>ADD TO CART</button></Link>
        </div>
      </Paper>
    </>
  );
};

export default ProductCard;

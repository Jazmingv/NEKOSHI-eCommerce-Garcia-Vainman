import { Link } from "react-router-dom";

import "../../App.css";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <>
      <div className="product-card">
        <Link to={`/products/${props.id}`}>
          <div className="card-img">
            <img src={props.imageUrl} alt={props.title} />
          </div>
          <div className="card-header">
            <h2>{props.title}</h2>
            <h3>${props.price}</h3>
          </div>
        </Link>
      </div>
      {/* <Paper elevation={3} className="card">
        <img src={props.imageUrl} alt={props.title} />
        <div className="container">
          <h3>{props.title}</h3>
          <h5>{props.author}</h5>
          <p>{props.description}</p>
          <p>
            <b>${props.price}</b>
          </p>
          
      <Link to={`/products/${props.id}`}><button className="btn-add">MORE INFO</button></Link>
        </div>
      </Paper> */}
    </>
  );
};

export default ProductCard;

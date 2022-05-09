import { Link } from "react-router-dom";

import "../../App.css";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
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
  );
};

export default ProductCard;

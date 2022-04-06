import "../../App.css";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
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
        />
      </div>
    </div>
  );
};

export default ItemDetail;

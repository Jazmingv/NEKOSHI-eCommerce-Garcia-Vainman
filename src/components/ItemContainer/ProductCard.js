import ItemCount from "../ItemDetails/ItemCount";
import Paper from "@mui/material/Paper";

const ProductCard = (props) => {
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
          <ItemCount
            initialQuantity={props.initialQuantity}
            currentStock={props.currentStock}
          />
        </div>
      </Paper>
    </>
  );
};

export default ProductCard;

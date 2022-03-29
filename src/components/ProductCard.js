import ItemCount from './ItemCount';

const ProductCard = (props) => {
  return (
    <div class="card">
      <img src="https://picsum.photos/250/250" alt="logo" />
      <div class="container">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p><b>${props.price}</b></p>
        <ItemCount initialQuantity={props.initialQuantity} currentStock={props.currentStock}/>
      </div>
    </div>
  );
};

export default ProductCard;
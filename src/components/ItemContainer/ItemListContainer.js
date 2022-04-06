import ListProducts from "./ListProducts";

function ItemListContainer({ children }) {
  return (
    <>
      <h1>Popular Products</h1>
      <br />
      <div className="products-container">
        <ListProducts />
      </div>
    </>
  );
}

export default ItemListContainer;
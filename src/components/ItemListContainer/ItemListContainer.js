import { useState, useEffect } from "react";

import ProductList from "../ProductList";
import ProductCard from "../ProductCard/ProductCard";

import "../../App.css"
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    ProductList().then((productlist) => {
      setLoader(false);
      setProducts(productlist);
    });
  }, []);

  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <div className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
import React from "react";
import mockProducts from "../components/mockProducts";
import ProductCard from "../components/ItemContainer/ProductCard";
import "../App.css"

const Products = () => {

  const filterProductByCategory = (category) => {
    return mockProducts.filter((product) => product.category === toString(category));
  };
  return (
    <div>
      <h1>PRODUCTS</h1>
        <div className="products-container">
      <h2>Classics</h2>
      {filterProductByCategory("Classics").map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      </div>
      <div className="products-container">
      <h2>Fantasy</h2>
      {filterProductByCategory("Fantasy").map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      </div>
      <div className="products-container">
      <h2>Science Fiction</h2>
      {filterProductByCategory("Science Fiction").map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    </div>
  );
};

export default Products;

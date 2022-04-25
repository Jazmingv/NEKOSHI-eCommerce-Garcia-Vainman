import React from "react";
import ProductCard from "../components/ItemContainer/ProductCard";
import "../App.css"

import dBase from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Products = () => {

  const filterProductByCategory = async (category) => {
    const itemCollection = query(collection(dBase, "products"), where("category", "==", category));
    const itemDocs = await getDocs(itemCollection);
    const mockProducts = itemDocs.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return mockProducts;
  };

  return (
    <div>
      <h1>PRODUCTS</h1>
        <div className="products-container">
      <h2>Classics</h2>
      {filterProductByCategory("T-Shirts").map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      </div>
      <div className="products-container">
      <h2>Fantasy</h2>
      {filterProductByCategory("Hoodies").map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      </div>
      <div className="products-container">
      <h2>Science Fiction</h2>
      {filterProductByCategory("Long-Sleeves").map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    </div>
  );
};

export default Products;

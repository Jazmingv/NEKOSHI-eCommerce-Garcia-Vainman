import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "../App.css";

import dBase from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Products = () => {
  const filterProductByCategory = async (category) => {
    const collectionRef = collection(dBase, "products");
    const q = query( collectionRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const mockProducts = querySnapshot.forEach((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return mockProducts;
  };

  return (
    <div className="products-container">
      {filterProductByCategory('T-Shirts').map((product) => (
        <ProductCard key={product.id} {...product} />
      ))
      }
    </div>
  );
};

export default Products;

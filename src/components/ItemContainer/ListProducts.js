import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import mockProducts from "../mockProducts";

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockProducts);
            }, 2000);
        });
    }

    useEffect(() => {
        getProducts()
            .then(productlist => {
                setProducts(productlist);
            });
    }, []);

  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      )      )
      }
    </>
  );
};

export default ListProducts;
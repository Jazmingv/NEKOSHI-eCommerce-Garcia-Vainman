import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ListProducts = () => {
    const List = [
        {
        id: 1,
        name: "Producto 1",
        description: "Descripcion del producto 1",
        price: 1500,
        initialQuantity: 0,
        currentStock: 10
    },
    {
        id: 2,
        name: "Producto 2",
        description: "Descripcion del producto 2",
        price: 1850,
        initialQuantity: 0,
        currentStock: 7
    },
    {
        id: 3,
        name: "Producto 3",
        description: "Descripcion del producto 3",
        price: 2300,
        initialQuantity: 0,
        currentStock: 24
    },
];
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(List);
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
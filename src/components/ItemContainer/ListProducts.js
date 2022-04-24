import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import mockProducts from "../mockProducts";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  // const {category} = useParams();
  // Con la línea de arriba me permite poner el useEffect así = useEffect(() => {..., [category]);, así el loader se usa cada vez que se cambia de categoría

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    setLoader(true);
    getProducts().then((productlist) => {
      setLoader(false);
      setProducts(productlist);
    });
  }, []);

  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </>
      )}
    </>
  );
};

export default ListProducts;

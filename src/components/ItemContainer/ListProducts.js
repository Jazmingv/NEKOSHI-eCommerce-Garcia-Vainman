import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

import dBase from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const getProducts = async () => {
    const itemCollection = collection(dBase, "products");
    const itemDocs = await getDocs(itemCollection);
    const mockProducts = itemDocs.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return mockProducts;
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
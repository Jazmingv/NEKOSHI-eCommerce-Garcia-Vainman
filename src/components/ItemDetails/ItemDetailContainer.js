import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import dBase from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [product, setproduct] = useState({});
  const navigate = useNavigate();
  
  const getProduct = async () => {
    const docRef = doc(dBase, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const product = docSnap.data();
      product.id = docSnap.id;
      setproduct(product);
    } else {
      navigate("/error");
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="container">
      <div className="box">
        <ItemDetail
          id={product.id}
          title={product.title}
          imageUrl={product.imageUrl}
          price={product.price}
          initialQuantity={1}
          currentStock={product.currentStock}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;

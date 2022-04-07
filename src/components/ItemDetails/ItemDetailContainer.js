import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockProducts from "../mockProducts";

const ItemDetailContainer = () => {
  const getBook = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });
  };

  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook().then((book) => {
      filterProductById(id);
    });
  }, [id]);

  const filterProductById = (id) => {
    return mockProducts.map((product) => {
      if (product.id === toString(id)) {
        return setBook(product);
      }
    });
  };

  return (
    <div className="container">
      <div className="box">
        <ItemDetail
          title={book.title}
          imageUrl={book.imageUrl}
          price={book.price}
          sinopsis={book.sinopsis}
          initialQuantity={book.initialQuantity}
          currentStock={book.currentStock}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;

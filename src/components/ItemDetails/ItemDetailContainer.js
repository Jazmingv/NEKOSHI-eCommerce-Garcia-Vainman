import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockProducts from "../mockProducts";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    filterProductById(id);
  }, [id]);

  const filterProductById = (id) => {
    return mockProducts.map((product) => {
      if (product.id == id) {
        return setBook(product);
      }
    });
  };

  console.log(book);

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

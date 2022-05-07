import dBase from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductList = async () => {
    const itemCollection = collection(dBase, "products");
    const itemDocs = await getDocs(itemCollection);
    const mockProducts = itemDocs.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return mockProducts;
  };

export default ProductList;
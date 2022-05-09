import { createContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [List, setList] = useState([]);

  const addToList = (item) => {
      let listItemExists = List.find(ListItem => ListItem.item.id === item.id);
      const newItem = item;
      if (!listItemExists) {
        setList([...List, newItem]);
      }
  };

  const removeFromList = (itemId) => {
    const newList = List.filter(item => item.item.id !== itemId);
    setList(newList);
  };

  const clearList = () => {
    setList([]);
  };

  const data = {
    List,
    setList,
    addToList,
    removeFromList,
    clearList
  };

  return <FavoritesContext.Provider value={data}>{children}</FavoritesContext.Provider>;
};

export { FavoritesProvider };
export default FavoritesContext;

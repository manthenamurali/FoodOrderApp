import { useState } from "react";
import CatalogueContext from "./CatalogueContext";

const ContextProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  const addHandler = (item) => {
    console.log("Item added handler... " + item.itemName);
    setCartList((prevList) => {
      return [...prevList, item];
    });
  };

  const items = {
    cartItems: cartList,
    itemAddedHandler: addHandler,
  };

  return (
    <CatalogueContext.Provider value={items}>
      {props.children}
    </CatalogueContext.Provider>
  );
};

export default ContextProvider;

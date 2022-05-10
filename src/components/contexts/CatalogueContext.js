import React from "react";

const CatalogueContext = React.createContext({
  cartItems: [],
  itemAddedHandler: (item) => {},
});

export default CatalogueContext;

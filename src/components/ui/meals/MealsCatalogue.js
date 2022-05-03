import MealsList from "../../../data/MealsList";
import "./MealsCatalogue.css";
import MealsItem from "./MealsItem";
import CardView from "../../widgets/CardView";
import CatalogueContext from "../../contexts/CatalogueContext";
import { useState } from "react";

const MealsCatalogue = (props) => {
  const [itemsAddedToCart, setItemsAddedToCart] = useState([]);
  const mealsCatalogue = new MealsList().getMealsFullList();

  const addToCartListener = (addMealItem) => {
    console.log("Item added to cart -> " + addMealItem.userEnteredQuantity);
    setItemsAddedToCart((prevList) => {
      return [...prevList, addMealItem];
    });
  };

  return (
    <CatalogueContext.Provider value={itemsAddedToCart}>
      <CardView className="meals-catalogue">
        {mealsCatalogue.map((item) => {
          return (
            <MealsItem
              item={item}
              key={item.id}
              itemAddListener={addToCartListener}
            />
          );
        })}
      </CardView>
    </CatalogueContext.Provider>
  );
};

export default MealsCatalogue;

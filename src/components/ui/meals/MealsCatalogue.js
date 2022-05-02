import MealsList from "../../../data/MealsList";
import "./MealsCatalogue.css";
import MealsItem from "./MealsItem";
import CardView from "../../widgets/CardView";

const MealsCatalogue = (props) => {
  const mealsCatalogue = new MealsList().getMealsFullList();

  const addToCartListener = (addMealItem) => {
    console.log("Item added to cart -> " + addMealItem.userEnteredQuantity);
  };

  return (
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
  );
};

export default MealsCatalogue;

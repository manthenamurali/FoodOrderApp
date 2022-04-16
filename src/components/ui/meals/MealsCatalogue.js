import MealsList from "../../data/MealsList";
import "./MealsCatalogue.css";
import MealsItem from "./MealsItem";
import CardView from "../../widgets/CardView";

const MealsCatalogue = (props) => {
  const mealsCatalogue = new MealsList().getMealsFullList();
  return (
    <CardView className="meals-catalogue">
      {mealsCatalogue.map((item) => {
        return <MealsItem item={item} />;
      })}
    </CardView>
  );
};

export default MealsCatalogue;

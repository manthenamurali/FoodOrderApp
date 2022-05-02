import React from "react";
import "./App.css";
import Header from "./components/ui/Header";
import MealsCatalogue from "./components/ui/meals/MealsCatalogue";
import WelcomeBanner from "./components/ui/WelcomeBanner";

function App() {
  const mealsAddedToCart = [];

  return (
    <React.Fragment>
      <Header />
      <WelcomeBanner />
      <MealsCatalogue itemsAddedToCart={mealsAddedToCart} />
    </React.Fragment>
  );
}

export default App;

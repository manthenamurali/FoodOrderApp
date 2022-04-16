import React from "react";
import "./App.css";
import Header from "./components/ui/Header";
import MealsCatalogue from "./components/ui/meals/MealsCatalogue";
import WelcomeBanner from "./components/ui/WelcomeBanner";

function App() {
  return (
    <React.Fragment>
      <Header />
      <WelcomeBanner />
      <MealsCatalogue />
    </React.Fragment>
  );
}

export default App;

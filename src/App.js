import React from "react";
import Header from "./components/ui/Header";
import MealsCatalogue from "./components/ui/meals/MealsCatalogue";
import WelcomeBanner from "./components/ui/WelcomeBanner";
import ContextProvider from "./components/contexts/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <WelcomeBanner />
      <MealsCatalogue />
    </ContextProvider>
  );
}

export default App;

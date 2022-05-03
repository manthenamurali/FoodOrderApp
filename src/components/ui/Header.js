import YourCartCapsule from "../widgets/YourCartCapsule";
import "./Header.css";
import CatalogueContext from "../contexts/CatalogueContext";
import { useContext } from "react";
import bgimage from "../../images/meals.jpg";

const Header = () => {
  const cartContext = useContext(CatalogueContext);
  console.log("update cart count...");

  return (
    <div>
      <header className="header">
        <h1>ReactMeals</h1>
        <YourCartCapsule cartcount={cartContext.itemsAddedToCart.length} />
      </header>
      <img className="header-img" src={bgimage} alt="meals back image" />
    </div>
  );
};

export default Header;

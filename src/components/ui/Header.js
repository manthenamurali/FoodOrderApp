import YourCartCapsule from "../widgets/YourCartCapsule";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>ReactMeals</h1>
      <YourCartCapsule />
    </header>
  );
};

export default Header;

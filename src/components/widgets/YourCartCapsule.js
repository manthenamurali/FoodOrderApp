import "./YourCartCapsule.css";

const YourCartCapsule = (props) => {
  const cartImage = require("../../images/cart_white.png");
  return (
    <div className="capsule">
      <img src={cartImage} alt="" />
      <p className="your-cart">Your Cart</p>
      <p className="cart-counter">{props.cartcount ?? 0}</p>
    </div>
  );
};

export default YourCartCapsule;

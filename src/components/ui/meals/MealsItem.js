import React from "react";
import "./MealsItem.css";
import Button from "../../widgets/Button";

const MealsItem = (props) => {
  console.log(props.item.itemName);
  return (
    <React.Fragment>
      <div className="meals-item">
        <div className="meals-item-left">
          <p className="title">{props.item.itemName}</p>
          <p className="summary">{props.item.description}</p>
          <p className="amount">{props.item.amount}</p>
        </div>
        <div className="meals-item-right">
          <div className="quantity-label">
            <label>Quantity</label>
            <input type="number" min="1" max="10" value="1"></input>
          </div>
          <Button className="add-button">+ Add</Button>
        </div>
      </div>
      <div className="divider" />
    </React.Fragment>
  );
};

export default MealsItem;

import React, { useState, useRef } from "react";
import "./MealsItem.css";
import Button from "../../widgets/Button";
import Utils from "../../../common/Utils";
import Alerts from "../../../common/Alerts";

const MealsItem = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const quantityRef = useRef();

  const addMealItemListener = (event) => {
    console.log("Quantity changed -> " + quantityRef.current.value);
    validateQuantity();
  };

  function validateQuantity() {
    if (Utils.validateQuantity(quantityRef.current.value)) {
      props.itemAddListener({
        ...props.item,
        userEnteredQuantity: quantityRef.current.value,
      });
    } else {
      setShowAlert(true);
    }
  }

  const dismissAlertHandler = () => {
    setShowAlert(false);
  };

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
            <input type="number" min="1" max="10" ref={quantityRef}></input>
          </div>
          <Button
            buttonClickListener={addMealItemListener}
            className="add-button"
          >
            + Add
          </Button>
        </div>
      </div>
      <div className="divider" />
      {showAlert && (
        <Alerts
          title="Alert"
          message="Invalid Quantity"
          okButton="Ok"
          dismissHandler={dismissAlertHandler}
        />
      )}
    </React.Fragment>
  );
};

export default MealsItem;

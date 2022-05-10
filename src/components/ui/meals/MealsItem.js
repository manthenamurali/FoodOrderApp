import React, { useState, useRef, useContext } from "react";
import "./MealsItem.css";
import Button from "../../widgets/Button";
import Utils from "../../../common/Utils";
import Alerts from "../../../common/Alerts";
import CatalogueContext from "../../../components/contexts/CatalogueContext";

const MealsItem = (props) => {
  const catalogueCtxt = useContext(CatalogueContext);
  const [showAlert, setShowAlert] = useState(false);
  const quantityRef = useRef();

  const addMealItemListener = (event) => {
    validateQuantity();
  };

  function validateQuantity() {
    if (Utils.validateQuantity(quantityRef.current.value)) {
      catalogueCtxt.itemAddedHandler({
        ...props.item,
        userEnteredQuantity: quantityRef.current.value,
      });

      console.log(
        `item ${props.item.itemName} add to cart with quantity ${quantityRef.current.value}`
      );
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
          message="Invalid Quantity. Must be greater than or equal to 1"
          okButton="Ok"
          dismissHandler={dismissAlertHandler}
        />
      )}
    </React.Fragment>
  );
};

export default MealsItem;

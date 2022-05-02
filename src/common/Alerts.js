import React from "react";
import ReactDOM from "react-dom";
import "./Alerts.css";
import CardView from "../components/widgets/CardView";
import Button from "../components/widgets/Button";

export const SimpleAlert = (props) => {
  return (
    <CardView className="alert-overlay">
      <p className="alert-overlay-title">{props.title}</p>
      <p className="alert-overlay-message">{props.message}</p>
      <Button buttonClickListener={props.dismissHandler}>
        {props.okButton}
      </Button>
    </CardView>
  );
};

const Alerts = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SimpleAlert
          title={props.title}
          message={props.message}
          okButton={props.okButton}
          dismissHandler={props.dismissHandler}
        />,
        document.getElementById("alert_root")
      )}
    </React.Fragment>
  );
};

export default Alerts;

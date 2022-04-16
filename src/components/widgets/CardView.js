import "./CardView.css";

const CardView = (props) => {
  const classes = "cardview " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default CardView;

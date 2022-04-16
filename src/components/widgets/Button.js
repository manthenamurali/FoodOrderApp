import "./Button.css";

const Button = (props) => {
  const classes = "styled-button " + props.className;
  return <button className={classes}>{props.children}</button>;
};

export default Button;

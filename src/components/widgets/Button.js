import "./Button.css";

const Button = (props) => {
  const classes = "styled-button " + props.className;
  return (
    <button onClick={props.buttonClickListener} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;

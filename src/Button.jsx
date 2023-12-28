import PropTypes from "prop-types";
import classes from "./Button.module.css";

function Button({ text }) {
  return <button className={classes.title}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

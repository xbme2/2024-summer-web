/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
};

function Button({
  children,
  onClick,
  variant = "",
  type = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

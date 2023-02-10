import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export function Button({ btnText, handleAction, accent, disabled }) {
  return (
    <motion.button
      data-testid="next-question-btn"
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`btn bg-green-midnight ${accent} btn-wide shrink mb-5 border-0`}
      onClick={handleAction}
    >
      {btnText}
    </motion.button>
  );
}

Button.defaultProp = {
  btnText: "Lorem ipsum dolor",
  handleAction: () => {},
  accentCss: "",
};
Button.prototypes = {
  btnText: PropTypes.string,
  handleAction: PropTypes.func,
  accentCss: PropTypes.string,
};

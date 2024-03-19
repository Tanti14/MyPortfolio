import React from "react";
import { StyledButton } from "./styles";
import { motion } from "framer-motion";

export const ButtonComponent = ({ txt, to }) => {
  return (
    <>
      <motion.button whileHover={{scale: 1.05}}>
        <StyledButton to={to} target="_blank">
          {txt}
        </StyledButton>
      </motion.button>
    </>
  );
};

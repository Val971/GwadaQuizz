import React from "react";
import { motion } from "framer-motion";

const transitions = {
  default: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  },
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001,
  },
};
export function AnimatedCard({ children,style }) {
  return (
    <motion.div
    className={style}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={transitions}
    >
      {children}
    </motion.div>
  );
}

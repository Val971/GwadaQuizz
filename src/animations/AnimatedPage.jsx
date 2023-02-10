import React from "react";
import { motion } from "framer-motion";

export function AnimatedPage({ children,delay }) {
  return (
    <motion.div
    initial={{ x: -150, opacity:0 }}
    animate={{ x: -10,opacity:1 }}
    transition={{ delay, type: "tween", stiffness: 500,duration:1 }}
    >
      {children}
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";


export function Hover({ children }) {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white-baby-powder  p-1 rounded-full shadow-md w-40 md:w-72 lg:w-72"
    >
      {children}
    </motion.div>
  );
}

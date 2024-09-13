import React from "react";
import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const MotionWrapper = ({
  children,
  variants = defaultVariants,
  className = "",
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

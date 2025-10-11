import React from "react";
import { motion } from "framer-motion";
import AsciiGridBackground from "./AsciiGridBackground";

interface AnimatedBackgroundProps {
  columns?: number;
  isVisible: boolean;
  onAnimationComplete?: () => void;
  watermarkText?: string;
  watermarkClassName?: string;
  gridClassName?: string;
}

export default function AnimatedBackground({
  columns = 6,
  isVisible,
  onAnimationComplete,
  watermarkText,
  watermarkClassName = "",
  gridClassName = "opacity-50",
}: AnimatedBackgroundProps) {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onAnimationComplete}
    >
      <AsciiGridBackground columns={columns} className={gridClassName} />
      {watermarkText && <p className={watermarkClassName}>{watermarkText}</p>}
    </motion.div>
  );
}

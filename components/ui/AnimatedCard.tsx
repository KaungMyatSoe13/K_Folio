import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  amount = 0.3,
  once = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: once,
        amount: amount,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

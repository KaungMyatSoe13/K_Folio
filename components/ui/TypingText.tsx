import React from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string;
  charDelay?: number;
  startDelay?: number;
  duration?: number;
  onComplete?: () => void;
  inView?: boolean;
  viewportAmount?: number;
}

export default function TypingText({
  text,
  className = "",
  charDelay = 0.1,
  startDelay = 0.8,
  duration = 0.1,
  onComplete,
  inView = false,
  viewportAmount = 0.3,
}: TypingTextProps) {
  const totalDelay = startDelay + text.length * charDelay + duration;

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      {...(inView
        ? {
            whileInView: { opacity: 1 },
            viewport: { once: true, amount: viewportAmount },
          }
        : { animate: { opacity: 1 } })}
      transition={{ duration: 0.5, delay: 0.3 }}
      onAnimationComplete={() => {
        if (onComplete) {
          setTimeout(onComplete, totalDelay * 1000);
        }
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          {...(inView
            ? {
                whileInView: { opacity: 1 },
                viewport: { once: true, amount: viewportAmount },
              }
            : { animate: { opacity: 1 } })}
          transition={{
            duration: duration,
            delay: startDelay + index * charDelay,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

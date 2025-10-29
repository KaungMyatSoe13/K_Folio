import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gloriaHallelujah } from "../../app/fonts/fonts";
import { benzinSemibold } from "../../app/fonts/fonts";
import AnimatedBackground from "./AnimatedBackground";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Let Me Cook");

  useEffect(() => {
    const texts = ["Let Me Cook"];

    let currentIndex = 0;
    let completed = false;

    const textInterval = setInterval(() => {
      if (currentIndex < texts.length - 1) {
        currentIndex++;
        setLoadingText(texts[currentIndex]);
      }
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98 && !completed) {
          completed = true;
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => {
            onLoadComplete();
          }, 300);
          return 98;
        }
        return prev + 2;
      });
    }, 50);

    const safetyTimeout = setTimeout(() => {
      if (!completed) {
        completed = true;
        clearInterval(progressInterval);
        clearInterval(textInterval);
        setProgress(100);
        onLoadComplete();
      }
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(safetyTimeout);
    };
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#282828] flex flex-col items-center justify-center"
    >
      {/* Add AnimatedBackground here */}
      <AnimatedBackground
        columns={6}
        isVisible={true}
        gridClassName="opacity-30"
      />

      {/* Add relative and z-10 to keep content above background */}
      <div className="w-80 max-w-[90vw] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1
            className={`text-4xl font-bold text-cyan-400 mb-2 ${benzinSemibold.className}`}
          >
            K_folio
          </h1>
          <p
            className={`text-gray-400 text-sm font-mono ${gloriaHallelujah.className}`}
          >
            {loadingText}...
          </p>
        </motion.div>

        <div className="text-center mt-4">
          <span className="text-cyan-400 font-mono text-lg">{progress}%</span>
        </div>

        <div className="mt-8 text-center">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500 font-mono text-xs"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

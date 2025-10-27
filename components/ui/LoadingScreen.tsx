import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");

  useEffect(() => {
    const texts = [
      "Initializing",
      "Loading projects",
      "Preparing media",
      "Almost there",
      "Ready",
    ];

    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex < texts.length - 1) {
        currentIndex++;
        setLoadingText(texts[currentIndex]);
      }
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(onLoadComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#282828] flex flex-col items-center justify-center"
    >
      <div className="w-80 max-w-[90vw]">
        {/* Logo or Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-cyan-400 mb-2">K_folio</h1>
          <p className="text-gray-400 text-sm font-mono">{loadingText}...</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-center mt-4">
          <span className="text-cyan-400 font-mono text-lg">{progress}%</span>
        </div>

        {/* ASCII Art Loading Animation */}
        <div className="mt-8 text-center">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500 font-mono text-xs"
          >
            [████████████████████████]
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";

interface ProjectVideoProps {
  videoSrc: string;
  animate?: boolean;
}

export default function ProjectVideo({
  videoSrc,
  animate = true,
}: ProjectVideoProps) {
  return (
    <div className="flex justify-center w-full">
      <motion.div
        initial={animate ? { opacity: 0, y: 60, scale: 0.95 } : false}
        animate={
          animate
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 3, ease: "easeInOut" },
        }}
        className="relative  
          rounded-lg  
          overflow-hidden  
          shadow-lg  
          max-h-[100vh]
          max-w-[70vw]
          sm:max-w-[85vw] 
          md:max-w-2xl  
          lg:max-w-4xl
          sm:h-[50vh]
          md:h-[60vh]
          lg:h-[70vh]"
        style={{ aspectRatio: "1900/962" }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              playsInline
              controls={false}
              className="w-full h-full object-contain rounded-2xl"
              style={{ maxHeight: "100%" }}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="text-gray-500">No video available</div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

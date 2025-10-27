import { useState, useEffect } from "react";

interface MediaItem {
  url: string;
  type: "video" | "audio" | "image";
}

export function useMediaPreloader(mediaItems: MediaItem[]) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (mediaItems.length === 0) {
      setIsLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalItems = mediaItems.length;

    const updateProgress = () => {
      loadedCount++;
      setProgress((loadedCount / totalItems) * 100);

      if (loadedCount === totalItems) {
        setIsLoaded(true);
      }
    };

    const preloadPromises = mediaItems.map((item) => {
      return new Promise<void>((resolve) => {
        if (item.type === "video") {
          const video = document.createElement("video");
          video.preload = "metadata";
          video.src = item.url;
          video.onloadedmetadata = () => {
            updateProgress();
            resolve();
          };
          video.onerror = () => {
            console.warn(`Failed to load video: ${item.url}`);
            updateProgress();
            resolve();
          };
        } else if (item.type === "audio") {
          const audio = new Audio();
          audio.preload = "auto";
          audio.src = item.url;
          audio.oncanplaythrough = () => {
            updateProgress();
            resolve();
          };
          audio.onerror = () => {
            console.warn(`Failed to load audio: ${item.url}`);
            updateProgress();
            resolve();
          };
        } else if (item.type === "image") {
          const img = new Image();
          img.src = item.url;
          img.onload = () => {
            updateProgress();
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${item.url}`);
            updateProgress();
            resolve();
          };
        }
      });
    });

    Promise.all(preloadPromises).then(() => {
      setIsLoaded(true);
    });
  }, [mediaItems]);

  return { isLoaded, progress };
}

import { useState, useEffect } from "react";

export function usePreloader(mediaUrls: {
  videos: string[];
  images: string[];
  audios: string[];
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadAll = async () => {
      const promises: Promise<void>[] = [];

      // Videos
      mediaUrls.videos.forEach((url) => {
        promises.push(
          new Promise((resolve) => {
            const video = document.createElement("video");
            video.preload = "metadata";
            video.src = url;
            video.onloadedmetadata = () => resolve();
            video.onerror = () => resolve();
          })
        );
      });

      // Images
      mediaUrls.images.forEach((url) => {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
        );
      });

      // Audio
      mediaUrls.audios.forEach((url) => {
        promises.push(
          new Promise((resolve) => {
            const audio = new Audio();
            audio.preload = "auto";
            audio.src = url;
            audio.oncanplaythrough = () => resolve();
            audio.onerror = () => resolve();
          })
        );
      });

      await Promise.all(promises);
      setIsLoaded(true);
    };

    preloadAll();
  }, []);

  return isLoaded;
}

import { useState, useEffect } from "react";

export function usePreloader(mediaUrls: {
  videos: string[];
  images: string[];
  audios: string[];
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if mobile - skip heavy preloading
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile, only preload essential images, skip videos/audio
      const promises: Promise<void>[] = mediaUrls.images.map(
        (url) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      );

      Promise.all(promises).then(() => setIsLoaded(true));

      // Force complete after 3 seconds on mobile
      setTimeout(() => setIsLoaded(true), 3000);
      return;
    }

    // Desktop preloading (full preload)
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

    // Force complete after 5 seconds even if not done
    const forceTimer = setTimeout(() => setIsLoaded(true), 5000);
    return () => clearTimeout(forceTimer);
  }, []);

  return isLoaded;
}

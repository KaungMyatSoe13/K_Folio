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

      // Videos - priority content
      mediaUrls.videos.forEach((url) => {
        promises.push(
          new Promise((resolve) => {
            const video = document.createElement("video");
            video.preload = "metadata";
            video.src = url;
            video.onloadedmetadata = () => resolve();
            video.onerror = () => {
              console.warn(`Failed to load video: ${url}`);
              resolve();
            };
            setTimeout(() => resolve(), 3000);
          })
        );
      });

      // Images - priority content
      mediaUrls.images.forEach((url) => {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => {
              console.warn(`Failed to load image: ${url}`);
              resolve();
            };
            setTimeout(() => resolve(), 2000);
          })
        );
      });

      // Don't preload audio on mobile to speed up initial load
      const isMobile = window.innerWidth < 768;
      if (!isMobile && mediaUrls.audios.length > 0) {
        mediaUrls.audios.forEach((url) => {
          promises.push(
            new Promise((resolve) => {
              const audio = new Audio();
              audio.preload = "auto";
              audio.src = url;
              audio.oncanplaythrough = () => resolve();
              audio.onerror = () => {
                console.warn(`Failed to load audio: ${url}`);
                resolve();
              };
              setTimeout(() => resolve(), 2000);
            })
          );
        });
      }

      const timeoutPromise = new Promise<void>((resolve) => {
        setTimeout(() => {
          console.warn("Preload timeout - proceeding anyway");
          resolve();
        }, 4000);
      });

      await Promise.race([Promise.all(promises), timeoutPromise]);

      setIsLoaded(true);
    };

    preloadAll();
  }, []);

  return isLoaded;
}

import React from "react";

interface ProjectImagesProps {
  images: string[];
  altPrefix?: string;
}

export default function ProjectImages({
  images,
  altPrefix = "Project Image",
}: ProjectImagesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${altPrefix} ${index + 1}`}
          className="w-3xl h-full sm:w-4xl sm:h-4xl object-cover rounded-lg"
        />
      ))}
    </div>
  );
}

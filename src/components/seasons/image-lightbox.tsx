"use client";

import Image from "next/image";

interface ImageLightboxProps {
  images: string[];
  alt: string;
}

export default function ImageLightbox({ images, alt }: ImageLightboxProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {images.map((imageSrc, index) => (
        <a
          key={`highlight-${imageSrc}`}
          href={imageSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <Image
            src={imageSrc}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-cover"
          />
        </a>
      ))}
    </div>
  );
}

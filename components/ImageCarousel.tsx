// components/ImageCarousel.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

interface ImageCarouselProps {
  images: {
    src: string;
    link: string;
  }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [setCurrentImageIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
      console.log("ping, image change");
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [nextImage]);

  return (
    <div className="flex flex-col justify-center items-center w-full p-5 box-border">
      <Link
        href={`cities/${images[currentImageIndex].link}`}
        data-testid="test"
      >
        <Image
          src={images[currentImageIndex].src}
          alt={`Image ${currentImageIndex + 1}`}
          width={1080}
          height={720}
        />
      </Link>
    </div>
  );
};

export default ImageCarousel;

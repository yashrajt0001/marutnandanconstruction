"use client";
import c1 from "@/app/assets/IMG-20241203-WA0014.jpg";
import c2 from "@/app/assets/IMG-20241203-WA0004.jpg";
import c3 from "@/app/assets/IMG-20241203-WA0019.jpg";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Carousel = () => {
  const images = [c1, c2, c3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const startX = useRef(0);
  const endX = useRef(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouch(true);
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isTouch) return;
    endX.current = e.changedTouches[0].clientX;

    if (startX.current - endX.current > 50) {
      nextSlide(); // Swipe left to next slide
    } else if (endX.current - startX.current > 50) {
      prevSlide(); // Swipe right to previous slide
    }
    setIsTouch(false);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[400px] md:h-[500px] flex-shrink-0 relative"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start py-4 px-8 md:p-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          We Prepare <br /> For The{" "}
          <span className="text-[#ede8d0]">Future</span>
        </h1>
        <p className="mt-2 md:mt-4 text-lg md:text-2xl max-w-[50%] break-words">
          We provide the best interior  design, construction, and building
          maintenance services for you.
        </p>
        <div className="mt-4 md:mt-6 space-x-2 md:space-x-4">
          <button className="bg-[#ede8d0] text-gray-900 px-3 py-1.5 md:px-4 md:py-2 rounded text-sm md:text-base">
            Our Services
          </button>
          <button className="bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded text-sm md:text-base">
            View Project
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8594;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentIndex ? "bg-[#ede8d0]" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

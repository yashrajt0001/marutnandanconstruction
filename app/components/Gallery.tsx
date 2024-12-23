import React from "react";
import Image from "next/image";
import c1 from "@/app/assets/IMG-20241203-WA0004.jpg";
import c2 from "@/app/assets/IMG-20241203-WA0007.jpg";
import c3 from "@/app/assets/IMG-20241203-WA0008.jpg";
import c4 from "@/app/assets/IMG-20241203-WA0009.jpg";
import c5 from "@/app/assets/IMG-20241203-WA0010.jpg";
import c6 from "@/app/assets/IMG-20241203-WA0011.jpg";
import c7 from "@/app/assets/IMG-20241203-WA0013.jpg";
import c8 from "@/app/assets/IMG-20241203-WA0014.jpg";
import c9 from "@/app/assets/IMG-20241203-WA0015.jpg";
import c10 from "@/app/assets/IMG-20241203-WA0016.jpg";
import c11 from "@/app/assets/IMG-20241203-WA0017.jpg";
import c12 from "@/app/assets/IMG-20241203-WA0018.jpg";
import c13 from "@/app/assets/IMG-20241203-WA0019.jpg";
import c14 from "@/app/assets/IMG-20241203-WA0020.jpg";
import c15 from "@/app/assets/IMG-20241203-WA0021.jpg";
import c16 from "@/app/assets/IMG-20241203-WA0022.jpg";
import c17 from "@/app/assets/IMG-20241203-WA0023.jpg";
import c18 from "@/app/assets/IMG-20241203-WA0024.jpg";
import c19 from "@/app/assets/IMG-20241203-WA0025.jpg";
import c20 from "@/app/assets/IMG-20241203-WA0026.jpg";
import c21 from "@/app/assets/IMG-20241203-WA0027.jpg";
import c22 from "@/app/assets/IMG-20241203-WA0028.jpg";
import c23 from "@/app/assets/IMG-20241203-WA0029.jpg";
import c24 from "@/app/assets/IMG-20241206-WA0001.jpg";
import c25 from "@/app/assets/IMG-20241206-WA0002.jpg";
import c26 from "@/app/assets/IMG-20241206-WA0003.jpg";
import c27 from "@/app/assets/IMG-20241206-WA0004.jpg";
import c28 from "@/app/assets/IMG-20241206-WA0005.jpg";
import c29 from "@/app/assets/IMG-20241206-WA0006.jpg";
import c30 from "@/app/assets/c30.jpg";
import c31 from "@/app/assets/c31.jpg";
import c32 from "@/app/assets/c32.jpg";
import c33 from "@/app/assets/c33.jpg";
import c34 from "@/app/assets/c34.jpg";
import c35 from "@/app/assets/c35.jpg";

const Gallery = () => {
  const images = [
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Our Gallery</h2>
      <div className="relative">
        {/* Horizontal Scrollable Slider */}
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide pb-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg shadow-lg relative overflow-hidden"
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                layout="fill" // This will make the image fill the parent container
                objectFit="cover" // This ensures the image covers the container without stretching
                className="rounded-lg" // Optional: Add rounded corners to the image
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

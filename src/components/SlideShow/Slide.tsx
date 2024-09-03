import React from "react";
import Image from "next/image";
import { SlideProps } from "@/interfaces/types";

const Slide = React.forwardRef<HTMLDivElement, SlideProps>(({ slide }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full flex-shrink-0 bg-white dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col justify-start items-center"
      data-testid="slide-container"
    >
      <div
        className="w-full h-[300px] lg:h-[400px] flex justify-center items-center"
        data-testid="slide-image-container"
      >
        <Image
          src={slide.imagePath}
          alt={`Project ${slide.title}`}
          width={900}
          height={500}
          className="rounded-lg object-cover h-full w-auto shadow-md"
          data-testid="slide-image"
        />
      </div>
      <h3
        className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-4 lg:mt-6 text-center"
        data-testid="slide-title"
      >
        {slide.title}
      </h3>
      <p
        className="text-gray-700 dark:text-gray-300 mt-2 md:mt-4 lg:mt-6 lg:text-lg text-center"
        data-testid="slide-description"
      >
        {slide.description}
      </p>
    </div>
  );
});

Slide.displayName = "Slide";
export default Slide;

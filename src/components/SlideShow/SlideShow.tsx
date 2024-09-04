"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { NextButton, PreviousButton } from "./PreviousNextButton";
import Slide from "./Slide";
import gsap from "gsap";

const slides = [
  {
    title: "Viplant",
    description:
      "We built this platform and APP that allowed primary users to track medical tests.",
    imagePath: "/assets/projectsBuzzvel/image-Viplant.jpg",
  },
  {
    title: "Miss Can",
    description:
      "A Portuguese and family project of the canning industry with 3 generations of history and tradition. Canned food produced in Portugal, with Portuguese fish and artisanal.",
    imagePath: "/assets/projectsBuzzvel/image-MissCan.jpg",
  },
  {
    title: "ThinkFeridas",
    description:
      "ThinkFeridas is an application that responds to the need of many health professionals who work alone in the clinical decision regarding treating complex wounds.",
    imagePath: "/assets/projectsBuzzvel/image-ThinkFeridas.jpg",
  },
  {
    title: "Vigias da Arriba",
    description:
      "Vigias da Arriba is a luxury, unique and exclusive condominium with several villas with a superb sea view. It is located in Torres Vedras.",
    imagePath: "/assets/projectsBuzzvel/image-VigiasdaArriba.jpg",
  },
];

const SlideShow = () => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        slidesRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      ref={(node) => {
        if (node) {
          ref(node);
          containerRef.current;
        }
      }}
      className="min-h-full py-10 px-4 bg-lightBackground dark:bg-darkBackground relative"
      data-testid="slideshow-section"
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-lightText dark:text-darkText mb-8"
        data-testid="slideshow-title"
      >
        Projects Buzzvel
      </h2>
      <div
        className="relative overflow-hidden max-w-6xl mx-auto min-h-80"
        data-testid="slideshow-container"
      >
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          data-testid="slides-container"
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              ref={(el) => {
                if (el) {
                  slidesRef.current[index] = el;
                }
              }}
              slide={slide}
              data-testid={`slide-${index}`}
            />
          ))}
        </div>
        <PreviousButton
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
            )
          }
          data-testid="previous-button"
        />
        <NextButton
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
          }
          data-testid="next-button"
        />
      </div>
    </section>
  );
};

export default SlideShow;

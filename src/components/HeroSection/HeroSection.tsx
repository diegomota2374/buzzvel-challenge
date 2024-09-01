// components/HeroSection.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const profileImageRef = useRef<HTMLImageElement>(null);
  const sloganRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(profileImageRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(sloganRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/path/to/your/background-image.jpg")' }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center bg-white bg-opacity-80 dark:bg-darkBackground dark:bg-opacity-80 p-4 md:p-8 rounded-lg shadow-lg">
        <img
          ref={profileImageRef}
          src="assets/diego02.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 object-cover"
        />
        <h1
          ref={sloganRef}
          className="text-3xl md:text-5xl font-bold text-lightText dark:text-darkText"
        >
          Bem-vindo ao Meu Microsite!
        </h1>
        <p className="text-lg md:text-xl text-lightText dark:text-darkText mt-2">
          Sou Diego Mota Cavalcante, desenvolvedor focado em criar experiências
          web inovadoras.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

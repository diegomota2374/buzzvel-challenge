"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const SlideShow = () => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de transição suave entre slides
      gsap.fromTo(
        slidesRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Inicia a animação quando 80% do container estiver visível
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-10 px-4 bg-lightBackground dark:bg-darkBackground"
    >
      <h2 className="text-3xl font-bold text-center text-lightText dark:text-darkText mb-8">
        Projetos Buzzvel
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((slide, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) slidesRef.current[index] = el;
            }}
            className="bg-lightBackground dark:bg-darkBackground p-4 rounded-lg shadow-lg"
          >
            <Image
              src={`/path/to/image-${slide}.jpg`}
              alt={`Projeto ${slide}`}
              width={500}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-xl font-bold text-darkText dark:text-lightText mt-4">
              Projeto {slide}
            </h3>
            <p className="text-darkText dark:text-lightText mt-2">
              Descrição breve do Projeto {slide}. Explicação sobre o que foi
              feito e as tecnologias usadas.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SlideShow;

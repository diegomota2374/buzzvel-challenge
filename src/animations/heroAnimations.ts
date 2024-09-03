// src/animations/heroAnimations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const animateProfileImage = (element: HTMLImageElement | null) => {
  if (element) {
    gsap.from(element, {
      opacity: 0,
      y: -50,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Inicia a animação quando o topo do elemento atinge 80% da viewport
        toggleActions: "play none none none",
      },
    });
  }
};

export const animateSlogan = (element: HTMLHeadingElement | null) => {
  if (element) {
    gsap.from(element, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
};

export const animateParagraph = (element: HTMLParagraphElement | null) => {
  if (element) {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
};

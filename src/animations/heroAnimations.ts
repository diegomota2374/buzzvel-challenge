// src/animations/heroAnimations.ts
import gsap from "gsap";

export const animateProfileImage = (element: HTMLImageElement | null) => {
  gsap.from(element, {
    opacity: 0,
    y: -50,
    duration: 2,
    ease: "power3.out",
  });
};

export const animateSlogan = (element: HTMLHeadingElement | null) => {
  gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
    ease: "power3.out",
  });
};

export const animateParagraph = (element: HTMLParagraphElement | null) => {
  gsap.from(element, {
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: "power3.out",
  });
};

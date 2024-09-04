"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { NextSeo } from "next-seo";

const HeroSection = () => {
  const profileImageRef = useRef<HTMLImageElement>(null);
  const sloganRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLHeadingElement>(null);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Track if the section is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensure the animation can re-trigger
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      // GSAP animations for profile image and slogan
      gsap.from(profileImageRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(sloganRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      });
    }
  }, [inView]); // Re-run the effect when inView changes

  return (
    <>
      <NextSeo
        title="Diego Mota Cavalcante - Front-end Development Analyst"
        description="Hi, I'm Front-end Development Analyst with expertise in JavaScript, TypeScript, React, and Node.js."
        canonical={baseUrl}
        openGraph={{
          url: `${baseUrl}/#hero`,
          title: "Diego Mota Cavalcante - Front-end Development Analyst",
          description:
            "Hi, I'm Front-end Development Analyst with expertise in JavaScript, TypeScript, React, and Node.js.",
          images: [
            {
              url: `${baseUrl}/assets/diego02.jpg`,
              width: 800,
              height: 600,
              alt: "Diego Mota Cavalcante",
            },
          ],
          site_name: "buzzvel-challenge",
        }}
      />
      <section
        id="hero"
        ref={ref} // Attach ref to the section
        className="min-h-[95vh] bg-cover bg-center relative flex items-center justify-center"
        data-testid="hero-section" // Added data-testid
      >
        {/* Tailwind Styles for Background Image Based on Screen Size */}
        <style jsx>{`
          #hero {
            background-image: url("/assets/hero-section-back.jpg");
          }

          @media (max-width: 768px) {
            #hero {
              background-image: url("/assets/hero-section-back-min.jpg");
            }
          }
        `}</style>

        {/* Overlay to darken background image and improve text readability */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          data-testid="overlay"
        />

        {/* Container for content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center p-6 md:p-8 text-center bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 rounded-lg shadow-lg max-w-4xl"
          data-testid="content-container" // Added data-testid
        >
          <img
            ref={profileImageRef}
            src="/assets/diego02.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 object-cover border-4 border-gray-200 dark:border-gray-700"
            data-testid="profile-image" // Added data-testid
          />
          <h1
            ref={sloganRef}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4"
            data-testid="slogan" // Added data-testid
          >
            Diego Mota Cavalcante
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
            data-testid="paragraph" // Added data-testid
          >
            Hi, I'm Front-end Development Analyst with expertise in JavaScript,
            TypeScript, React, and Node.js. I focus on delivering efficient,
            high-quality results and continuously improving my skills.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

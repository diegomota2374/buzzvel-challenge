"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  diagonalStripeTopLeft,
  diagonalStripeBottomRight,
  contentAnimation,
} from "@/animations/introductionAnimations";
import SocialLinks from "../SocialLinks/SocialLinks";
import { NextSeo } from "next-seo";

const Introduction = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures that the animation can be reactivated
    threshold: 0.4,
  });

  return (
    <>
      {/* NextSeo configuration for the page */}
      <NextSeo
        title="Diego Mota Cavalcante - Developer"
        description="Welcome to my microsite! I am a developer focused on creating innovative web experiences."
        canonical={baseUrl}
        openGraph={{
          url: `${baseUrl}/#introduction`,
          title: "Diego Mota Cavalcante - Developer",
          description:
            "Welcome to my microsite! I am a developer focused on creating innovative web experiences.",
          site_name: "buzzvel-challenge",
        }}
      />
      <section
        id="introduction"
        className="min-h-[95vh] flex items-center justify-center relative overflow-hidden font-sans"
        ref={ref}
        data-testid="introduction-section"
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 -z-10 bg-opacity-60 bg-gradient-to-r from-teal-600 to-cyan-700 dark:from-teal-900 dark:to-cyan-800"
          data-testid="gradient-overlay"
        />

        {/* Diagonal Stripes with rounded corners */}
        <motion.div
          variants={diagonalStripeTopLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 left-0 w-1/4 h-1/4 bg-teal-500 dark:bg-teal-800 rounded-br-lg"
          data-testid="left-stripe"
        />

        <motion.div
          variants={diagonalStripeBottomRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-cyan-500 dark:bg-cyan-800 rounded-tl-lg"
          data-testid="right-stripe"
        />

        {/* Animated content */}
        <motion.div
          variants={contentAnimation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          transition={{ duration: 1 }}
          className="text-center px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-gray-400 dark:border-gray-700 hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          data-testid="animated-content"
        >
          <div>
            <h1
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4"
              data-testid="main-heading"
            >
              Welcome to My Microsite!
            </h1>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              data-testid="subheading"
            >
              I&apos;m Diego Mota Cavalcante, a developer focused on creating
              innovative web experiences.
            </p>
          </div>
          {/* Social media */}
          <div className="flex justify-end">
            <SocialLinks />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Introduction;

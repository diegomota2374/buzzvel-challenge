// components/Introduction.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="introduction"
      className="min-h-screen flex items-center justify-center relative overflow-hidden font-sans"
      ref={ref}
      data-testid="introduction-section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-cover"
        data-testid="background-image"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-opacity-50 bg-gradient-to-r from-teal-400 to-cyan-500 dark:from-teal-800 dark:to-cyan-700"
        data-testid="gradient-overlay"
      />

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1.5 }}
        className="text-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-600 hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
        data-testid="animated-content"
      >
        <h1
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          data-testid="main-heading"
        >
          Welcome to My Microsite!
        </h1>
        <p
          className="text-lg text-gray-800 dark:text-gray-400"
          data-testid="subheading"
        >
          I'm Diego Mota Cavalcante, a developer focused on creating innovative
          web experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default Introduction;

"use client";

import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <div className="min-h-screen bg-lightBackground dark:bg-darkBackground transition duration-500">
      <section className="text-center mt-10 text-lightText dark:text-darkText px-4 sm:px-6 lg:px-8">
        {/* Animação de fade-in e slide-in */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-5 bg-lightBackground dark:bg-darkBackground rounded-lg shadow-md"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Welcome to My Microsite!
          </h1>
          <p className="text-lg mb-4">
            I'm Diego Mota Cavalcante, a developer focused on creating
            innovative web experiences.
          </p>
          <p className="text-md">
            Explore the site to learn more about my experience and projects.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Introduction;

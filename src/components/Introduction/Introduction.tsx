// components/Introduction.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="min-h-screen bg-lightBackground dark:bg-darkBackground flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-lightText dark:text-darkText">
          Bem-vindo ao Meu Microsite!
        </h1>
        <p className="text-lg text-lightText dark:text-darkText mt-4">
          Sou Diego Mota Cavalcante, desenvolvedor focado em criar experiências
          web inovadoras.
        </p>
      </motion.div>
    </section>
  );
};

export default Introduction;

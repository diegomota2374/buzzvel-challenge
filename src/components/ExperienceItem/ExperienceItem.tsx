"use client";

import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({
  year,
  description,
}: {
  year: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start mb-6"
    >
      <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
        <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {year}
        </div>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
        Experiência
      </h2>
      <div className="max-w-2xl mx-auto">
        <ExperienceItem
          year="2021 - Presente"
          description="Desenvolvedor Front-end na Empresa XYZ."
        />
        <ExperienceItem
          year="2019 - 2021"
          description="Designer UI/UX na Empresa ABC."
        />
        <ExperienceItem
          year="2017 - 2019"
          description="Estágio em Desenvolvimento Web na Empresa 123."
        />
        {/* Adicione mais itens de experiência conforme necessário */}
      </div>
    </section>
  );
};

export default ExperienceSection;

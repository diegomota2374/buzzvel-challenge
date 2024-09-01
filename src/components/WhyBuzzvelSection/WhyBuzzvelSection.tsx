"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyBuzzvelSection = () => {
  return (
    <section
      id="why-buzzvel"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-lightBackground dark:bg-darkBackground"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
        Por que Buzzvel?
      </h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
      >
        Buzzvel é uma plataforma inovadora que oferece soluções personalizadas
        para ajudar empresas a alcançar seu público-alvo de maneira eficiente e
        eficaz. Nossa abordagem única combina tecnologia avançada com uma
        compreensão profunda das necessidades do mercado, garantindo resultados
        excepcionais e uma experiência de usuário superior. Com uma equipe de
        especialistas dedicados e um compromisso com a excelência, Buzzvel é a
        escolha ideal para empresas que buscam crescimento e sucesso
        sustentável.
      </motion.p>
    </section>
  );
};

export default WhyBuzzvelSection;

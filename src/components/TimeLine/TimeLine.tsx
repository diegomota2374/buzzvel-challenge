"use client";

import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const timelineData = [
    {
      year: "Ano 1",
      title: "Integração e mentoria",
      description:
        "Durante o primeiro ano na Buzzvel, você passará por um processo de integração com mentoria especializada para aprender sobre a cultura e os processos da empresa.",
    },
    {
      year: "Ano 2-3",
      title: "Crescimento e maior responsabilidade",
      description:
        "Nos anos 2 e 3, você terá mais responsabilidades e oportunidades de crescimento dentro da empresa, contribuindo para projetos maiores e mais complexos.",
    },
    {
      year: "Ano 4-5",
      title: "Liderança e inovação",
      description:
        "Nos anos 4 e 5, você poderá assumir papéis de liderança e trabalhar em iniciativas inovadoras que impactam diretamente o futuro da Buzzvel.",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-10 px-4 bg-lightBackground dark:bg-darkBackground"
    >
      <h2 className="text-3xl font-bold text-center text-lightText dark:text-darkText mb-8">
        Linha do Tempo da Carreira
      </h2>
      <div className="relative flex flex-col border-l-2 border-gray-200 dark:border-gray-700 ml-6 pl-4">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute w-3 h-3 bg-blue-500 dark:bg-blue-300 rounded-full -left-5 top-2"></div>
            <h3 className="text-xl font-semibold text-lightText dark:text-darkText">
              {item.year}: {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

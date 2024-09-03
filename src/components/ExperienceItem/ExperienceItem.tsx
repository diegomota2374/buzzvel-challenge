// src/components/ExperienceItem.tsx

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExperienceItemProps } from "@/interfaces/types";

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  year,
  description,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures that the animation can be reactivated
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref} // Attach ref to motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
      transition={{ duration: 1.5 }}
      className="flex items-start mb-6"
      data-testid="experience-item"
    >
      <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
        <div
          className="text-lg font-semibold text-gray-600 dark:text-gray-200"
          data-testid="experience-item-year"
        >
          {year}
        </div>
        <div
          className="text-md text-gray-700 dark:text-gray-400 mt-2"
          data-testid="experience-item-description"
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;

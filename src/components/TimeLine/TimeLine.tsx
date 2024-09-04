"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Timeline: React.FC = () => {
  const events = [
    {
      year: "Year 1",
      title: "Foundation and Integration",
      details: [
        "Onboarding: Get familiar with Buzzvel’s processes, tools, and team.",
        "Mentorship: Work closely with a senior developer.",
        "Initial Contributions: Take on small tasks and learn the company’s coding standards.",
      ],
    },
    {
      year: "Year 2-3",
      title: "Growth and Increased Responsibility",
      details: [
        "Project Ownership: Lead small to medium-sized projects.",
        "Skill Development: Master advanced concepts and possibly learn new technologies relevant to Buzzvel’s stack.",
        "Mentorship: Start mentoring junior developers.",
      ],
    },
    {
      year: "Year 4-5",
      title: "Leadership and Innovation",
      details: [
        "Leadership Role: Potentially step into a team lead or senior developer role.",
        "Innovation: Contribute to the strategic direction of front-end development at Buzzvel.",
        "Continuous Learning: Stay updated with the latest industry trends and apply them at Buzzvel.",
      ],
    },
  ];

  return (
    <section
      id="timeline"
      className="py-10 px-4 bg-lightBackground dark:bg-darkBackground scroll-smooth"
      data-testid="timeline-section"
    >
      <h2
        className="text-3xl font-bold text-center text-lightText dark:text-darkText mb-8"
        data-testid="timeline-title"
      >
        Career Timeline at Buzzvel
      </h2>

      <div
        className="w-full max-w-4xl mx-auto px-4 py-8"
        data-testid="timeline-container"
      >
        <div
          className="relative border-l-2 border-gray-300"
          data-testid="timeline"
        >
          {events.map((event, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="mb-8 flex items-start flex-col md:flex-row"
                data-testid={`timeline-event-${index}`}
              >
                <div
                  className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white transition-all duration-300 ${
                    inView ? "w-4 h-4 bg-blue-500" : "bg-red-500"
                  }`}
                  data-testid={`timeline-indicator-${index}`}
                />
                <div
                  className="ml-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  data-testid={`timeline-content-${index}`}
                >
                  <h3
                    className="text-xl font-semibold text-gray-800 dark:text-gray-200"
                    data-testid={`timeline-year-${index}`}
                  >
                    {event.year}
                  </h3>
                  <h4
                    className="text-lg font-medium text-gray-700 dark:text-gray-300"
                    data-testid={`timeline-title-${index}`}
                  >
                    {event.title}
                  </h4>
                  <ul
                    className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400"
                    data-testid={`timeline-details-${index}`}
                  >
                    {event.details.map((detail, i) => (
                      <li key={i} data-testid={`timeline-detail-${index}-${i}`}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

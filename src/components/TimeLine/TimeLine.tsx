"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NextSeo } from "next-seo";

const Timeline: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const events = [
    {
      year: "Year 1",
      title: "Establishing the Foundation",
      details: [
        "Immersion: I will dive deep into the Buzzvel ecosystem, getting to know its tools, processes and team dynamics.",
        "Guided Learning: I will team up with a senior developer to accelerate my understanding and development skills.",
        "Initial contributions: I will solve smaller tasks with a focus on mastering the company's coding standards and workflows.",
      ],
    },
    {
      year: "Year 2-3",
      title: "Expanding Skills and Taking Control",
      details: [
        "Project Leadership: I will take responsibility for small and medium-sized projects, ensuring they are aligned with Buzzvel's objectives.",
        "Skills enhancement: I will deepen my knowledge of advanced concepts and explore new technologies that are fundamental to Buzzvel's success.",
        "Mentor Role: I will begin mentoring junior developers, helping them integrate and grow within the team.",
      ],
    },
    {
      year: "Year 4-5",
      title: "Leadership and Innovation",
      details: [
        "Stepping up: I will seek a leadership role, whether as a team leader or senior developer, driving important initiatives.",
        "Strategic Contribution: I will play a significant role in setting the direction of front-end development at Buzzvel, introducing innovative solutions.",
        "Lifelong Learning: I will stay at the forefront of industry trends and continually bring new insights to Buzzvel projects.",
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title="Career Timeline at Buzzvel"
        description="Explore the career timeline of Diego Mota Cavalcante at Buzzvel, including milestones in skill development, project leadership, and innovation."
        openGraph={{
          title: "Career Timeline at Buzzvel",
          description:
            "Explore the career timeline of Diego Mota Cavalcante at Buzzvel, including milestones in skill development, project leadership, and innovation.",
          url: `${baseUrl}/#timeline`,

          site_name: "buzzvel-challenger",
        }}
      />
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
                        <li
                          key={i}
                          data-testid={`timeline-detail-${index}-${i}`}
                        >
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
    </>
  );
};

export default Timeline;

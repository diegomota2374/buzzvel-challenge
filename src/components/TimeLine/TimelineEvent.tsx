"use client";

import React, { forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface Event {
  year: string;
  title: string;
  details: string[];
}

const TimelineEvent = forwardRef<
  HTMLDivElement,
  { event: Event; index: number; isVisible: boolean }
>(({ event, index, isVisible }, ref) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 });
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={controls}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="mb-8 flex items-start flex-col md:flex-row"
      data-testid={`timeline-event-${index}`}
    >
      <div
        className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white transition-all duration-300 ${
          isVisible ? "w-4 h-4 bg-blue-500" : "bg-red-500"
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
});

TimelineEvent.displayName = "TimelineEvent";

export default TimelineEvent;

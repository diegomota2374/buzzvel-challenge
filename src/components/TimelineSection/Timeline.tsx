"use client";

import React, { useRef, useState, useEffect } from "react";
import TimelineEvent from "./TimelineEvent";
import { Event } from "@/interfaces/types";
import { NextSeo } from "next-seo";

const Timeline: React.FC = () => {
  const events: Event[] = [
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
      <section
        id="timeline"
        className="py-10 px-4 bg-lightBackground dark:bg-darkBackground scroll-smooth"
        data-testid="timeline-section"
      >
        <h1
          className="text-3xl font-bold text-center text-lightText dark:text-darkText mb-8"
          data-testid="timeline-title"
        >
          Career Timeline at Buzzvel
        </h1>

        <div
          className="w-full max-w-4xl mx-auto px-4 py-8"
          data-testid="timeline-container"
        >
          <div
            className="relative border-l-2 border-gray-300"
            data-testid="timeline"
          >
            {events.map((event, index) => (
              <TimelineEvent
                key={index}
                event={event}
                index={index}
                data-testid={`timeline-event-${index}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;

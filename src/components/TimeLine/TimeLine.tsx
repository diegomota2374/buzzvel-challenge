"use client";

import React, { useRef, useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import TimelineEvent from "./TimelineEvent";

interface Event {
  year: string;
  title: string;
  details: string[];
}

const Timeline: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

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

  // Create an array of refs and visibility states
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    new Array(events.length).fill(false)
  );

  // Update visibility states when refs change
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const updatedInViewStates = [...inViewStates];
      entries.forEach((entry) => {
        const index = refs.current.indexOf(entry.target as HTMLDivElement);
        if (index !== -1) {
          updatedInViewStates[index] = entry.isIntersecting;
        }
      });
      setInViewStates(updatedInViewStates);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });
    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      observer.disconnect();
    };
  }, [inViewStates]);

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
            {events.map((event, index) => (
              <TimelineEvent
                key={index}
                event={event}
                index={index}
                isVisible={inViewStates[index]}
                ref={(el) => {
                  refs.current[index] = el;
                }}
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

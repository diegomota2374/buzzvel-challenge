// src/components/ExperienceSection.tsx

import React from "react";
import ExperienceItem from "./ExperienceItem";
import { NextSeo } from "next-seo";

const ExperienceSection = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      {/* Setting up SEO for the experience section */}
      <NextSeo
        title="Experience"
        description="Explore my professional experience in web and mobile development, showcasing projects with React, Next.js, React Native, and more."
        openGraph={{
          title: "Experience",
          description:
            "Explore my professional experience in web and mobile development, showcasing projects with React, Next.js, React Native, and more.",
          url: `${baseUrl}/#experience`,

          site_name: "buzzvel-challenge",
        }}
      />
      <section
        id="experience"
        className="py-12 px-4 sm:px-6 lg:px-8"
        data-testid="experience-section"
      >
        <h2
          className="text-3xl font-bold text-center text-gray-600 dark:text-gray-200 mb-8"
          data-testid="experience-section-title"
        >
          Experience
        </h2>
        <div
          className="max-w-2xl mx-auto"
          data-testid="experience-items-container"
        >
          {/* Freelancer | Front-end Developer (Current) */}
          <ExperienceItem
            year="January/2024 - Present"
            description={
              <>
                <p data-testid="experience-item-description">
                  Developed and maintained mobile systems, focusing on design
                  and usability.
                </p>
                <p data-testid="experience-item-description">
                  Participated in project meetings to ensure effective solution
                  delivery.
                </p>
                <p data-testid="experience-item-description">
                  Technologies: React Native, Expo, TypeScript, JavaScript, Git,
                  Jest, Cypress
                </p>
              </>
            }
            data-testid="experience-item"
          />

          {/* Freelancer | Front-end Developer (Previous) */}
          <ExperienceItem
            year="January/2022 - September/2022"
            description={
              <>
                <p data-testid="experience-item-description">
                  Developed and maintained web systems with a focus on
                  responsive design and user experience.
                </p>
                <p data-testid="experience-item-description">
                  Collaborated in meetings for requirement alignment and
                  progress tracking.
                </p>
                <p data-testid="experience-item-description">
                  Tecnologias: React.js, Next.js, Material UI, TypeScript,
                  JavaScript, Git
                </p>
              </>
            }
            data-testid="experience-item"
          />

          {/* Cybertec Informática | IT Technician */}
          <ExperienceItem
            year="January/2018 - July/2018"
            description={
              <>
                <p data-testid="experience-item-description">
                  Provided hardware maintenance and technical support, including
                  printers and computers.
                </p>
                <p data-testid="experience-item-description">
                  Prepared technical reports and process documentation.
                </p>
              </>
            }
            data-testid="experience-item"
          />
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;

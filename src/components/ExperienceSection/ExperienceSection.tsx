// src/components/ExperienceSection.tsx

import React from "react";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-600 dark:text-gray-200 mb-8">
        Experience
      </h2>
      <div className="max-w-2xl mx-auto">
        {/* Freelancer | Front-end Developer (Current) */}
        <ExperienceItem
          year="January/2024 - Present"
          description={
            <>
              <p>
                Developed and maintained mobile systems, focusing on design and
                usability.
              </p>
              <p>
                Participated in project meetings to ensure effective solution
                delivery.
              </p>
              <p>
                Technologies: React Native, Expo, TypeScript, JavaScript, Git,
                Jest, Cypress
              </p>
            </>
          }
        />

        {/* Freelancer | Front-end Developer (Previous) */}
        <ExperienceItem
          year="January/2022 - September/2022"
          description={
            <>
              <p>
                Developed and maintained web systems with a focus on responsive
                design and user experience.
              </p>
              <p>
                Collaborated in meetings for requirement alignment and progress
                tracking
              </p>
              <p>
                Tecnologias: React.js, Next.js, Material UI, TypeScript,
                JavaScript, Git
              </p>
            </>
          }
        />

        {/* Cybertec Informática | IT Technician */}
        <ExperienceItem
          year="January/2018 - July/2018"
          description={
            <>
              <p>
                Provided hardware maintenance and technical support, including
                printers and computers.
              </p>
              <p>Prepared technical reports and process documentation.</p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default ExperienceSection;

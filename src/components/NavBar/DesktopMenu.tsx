// src/components/NavigationBar/DesktopMenu.tsx
"use client";

import React from "react";

interface DesktopMenuProps {
  handleScrollToSection: (sectionId: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ handleScrollToSection }) => {
  return (
    <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
      {[
        "introduction",
        "hero",
        "experience",
        "why buzzvel",
        "projects",
        "timeline",
      ].map((section) => (
        <button
          onClick={() => handleScrollToSection(section)}
          className="text-lightText dark:text-darkText hover:underline"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default DesktopMenu;

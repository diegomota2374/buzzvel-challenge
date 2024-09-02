// src/components/NavigationBar/DesktopMenu.tsx
"use client";

import { DesktopMenuProps } from "@/interfaces/types";
import React from "react";

const DesktopMenu: React.FC<DesktopMenuProps> = ({ handleScrollToSection }) => {
  return (
    <div
      data-testid="menu-items-desktop"
      className="hidden md:flex flex-grow items-center justify-center space-x-4"
    >
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
          data-testid={`desktop-menu-button-${section
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default DesktopMenu;

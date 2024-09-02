// src/hooks/useNavBar.ts
import { useEffect, useState } from "react";

export const useNavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    isDarkMode,
    setIsDarkMode,
    isMenuOpen,
    setIsMenuOpen,
    handleScrollToSection,
  };
};

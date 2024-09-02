// src/components/NavigationBar/NavigationBar.tsx
"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerButton from "./HamburgerButton";
import MenuItems from "./MenuItems";
import DesktopMenu from "./DesktopMenu";
import ThemeToggle from "./ThemeToggle";
import { useNavigation } from "@/hooks/useNavigation/useNavigation";

const NavigationBar = () => {
  const {
    isDarkMode,
    setIsDarkMode,
    isMenuOpen,
    setIsMenuOpen,
    handleScrollToSection,
  } = useNavigation(); // Usar o custom hook

  return (
    <nav className="fixed w-full top-0 left-0 z-50 flex items-center justify-between px-4 py-2 bg-lightBackground dark:bg-darkBackground shadow-md">
      {/* Botão do Menu Móvel */}
      <HamburgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Título do Challenge */}
      <div className="flex  flex-grow items-center justify-center text-lg font-semibold text-lightText dark:text-darkText">
        Buzzvel Challenge
      </div>

      {/* Menu Móvel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-14 left-0 w-full bg-lightBackground dark:bg-darkBackground shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <MenuItems
              handleScrollToSection={handleScrollToSection}
              setIsMenuOpen={setIsMenuOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu em Telas Maiores */}
      <DesktopMenu handleScrollToSection={handleScrollToSection} />

      {/* Título e Botão de Alternância de Tema */}
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </nav>
  );
};

export default NavigationBar;

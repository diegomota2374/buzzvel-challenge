"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavigationBar = () => {
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

  return (
    <nav className="fixed w-full top-0 left-0 z-50 flex items-center justify-between px-4 py-2 bg-lightBackground dark:bg-darkBackground shadow-md">
      {/* Botão do Menu Móvel */}
      <div className="md:hidden flex items-center">
        <button
          className="text-lightText dark:text-darkText"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Menu Móvel */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-14 left-0 w-full bg-lightBackground dark:bg-darkBackground shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => {
              handleScrollToSection("introduction");
              setIsMenuOpen(false); // Fechar o menu após a seleção
            }}
            className="block px-4 py-2 text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Introdução
          </button>
          <button
            onClick={() => {
              handleScrollToSection("hero");
              setIsMenuOpen(false); // Fechar o menu após a seleção
            }}
            className="block px-4 py-2 text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Hero
          </button>
        </motion.div>
      )}

      {/* Menu em Telas Maiores */}
      <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
        <button
          onClick={() => handleScrollToSection("introduction")}
          className="text-lightText dark:text-darkText hover:underline"
        >
          Introdução
        </button>
        <button
          onClick={() => handleScrollToSection("hero")}
          className="text-lightText dark:text-darkText hover:underline"
        >
          Hero
        </button>
      </div>

      {/* Título e Botão de Alternância de Tema */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-lightText dark:text-darkText">
          Meu Microsite
        </h1>
        <button
          className="ml-4 text-lightText dark:text-darkText bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;

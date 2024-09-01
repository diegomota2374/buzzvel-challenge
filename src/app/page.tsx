"use client";

import React, { useState, useEffect } from "react";
import Introduction from "@/components/Introduction/Introduction";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-lightBackground dark:bg-darkBackground transition duration-500">
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center bg-lightBackground dark:bg-darkBackground shadow-md">
        <h1 className="text-xl font-bold text-lightText dark:text-darkText">
          Meu Microsite
        </h1>
        <button
          className="text-lightText dark:text-darkText bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
          onClick={() => setIsDarkMode((prevMode) => !prevMode)}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </nav>

      {/* Seção de Introdução */}
      <Introduction />

      {/* Outras seções do site */}
    </div>
  );
}

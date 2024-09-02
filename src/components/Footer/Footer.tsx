"use client";

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Importando ícones de redes sociais

const Footer = () => {
  return (
    <footer className="bg-lightBackground dark:bg-darkBackground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navegação do Footer */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#introduction"
                  className="text-lightText dark:text-darkText hover:underline"
                >
                  Introdução
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-lightText dark:text-darkText hover:underline"
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href="#why-buzzvel"
                  className="text-lightText dark:text-darkText hover:underline"
                >
                  Por que Buzzvel?
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lightText dark:text-darkText hover:text-blue-500 dark:hover:text-blue-400 text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lightText dark:text-darkText hover:text-blue-700 dark:hover:text-blue-500 text-xl" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-lightText dark:text-darkText hover:text-gray-900 dark:hover:text-gray-100 text-xl" />
            </a>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Meu Microsite. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer
      className="bg-lightBackground dark:bg-darkBackground py-8"
      data-testid="footer"
    >
      <div className="container mx-auto px-4" data-testid="footer-container">
        <div
          className="flex flex-col md:flex-row justify-between items-center"
          data-testid="footer-content"
        >
          {/* Footer Navigation */}
          <div className="mb-4 md:mb-0" data-testid="footer-navigation">
            <ul className="flex space-x-6" data-testid="footer-nav-list">
              <li data-testid="footer-nav-item-0">
                <a
                  href="#introduction"
                  className="text-lightText dark:text-darkText hover:underline"
                  data-testid="footer-nav-link-introduction"
                >
                  Introduction
                </a>
              </li>
              <li data-testid="footer-nav-item-1">
                <a
                  href="#experience"
                  className="text-lightText dark:text-darkText hover:underline"
                  data-testid="footer-nav-link-experience"
                >
                  Experience
                </a>
              </li>
              <li data-testid="footer-nav-item-2">
                <a
                  href="#why Buzzvel"
                  className="text-lightText dark:text-darkText hover:underline"
                  data-testid="footer-nav-link-why-buzzvel"
                >
                  Why Buzzvel
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <SocialLinks data-testid="social-links" />
        </div>

        {/* Copyright */}
        <div
          className="mt-8 text-center text-gray-600 dark:text-gray-400"
          data-testid="footer-copyright"
        >
          <p data-testid="footer-copyright-text">
            &copy; {new Date().getFullYear()} My Microsite. Diego Mota
            Cavalcante.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

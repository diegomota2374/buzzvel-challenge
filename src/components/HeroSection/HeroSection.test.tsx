// src/components/HeroSection/HeroSection.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection Component", () => {
  test("renders the hero section with correct elements", () => {
    render(<HeroSection />);

    // Check for the presence of the section with the test id
    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();

    // Check for the presence of the overlay
    const overlay = screen.getByTestId("overlay");
    expect(overlay).toBeInTheDocument();

    // Check for the content container
    const contentContainer = screen.getByTestId("content-container");
    expect(contentContainer).toBeInTheDocument();

    // Check for profile image
    const profileImage = screen.getByTestId("profile-image");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("alt", "Profile");

    // Check for slogan
    const slogan = screen.getByTestId("slogan");
    expect(slogan).toBeInTheDocument();
    expect(slogan).toHaveTextContent("Diego Mota Cavalcante");

    // Check for paragraph
    const paragraph = screen.getByTestId("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(
      "Hi, I'm Front-end Development Analyst with expertise in JavaScript, TypeScript, React, and Node.js. I focus on delivering efficient, high-quality results and continuously improving my skills."
    );
  });
});

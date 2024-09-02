import React from "react";
import { render, screen } from "@testing-library/react";
import Introduction from "./Introduction";

// Grouping related tests for the Introduction component
describe("Introduction Component", () => {
  test("renders the introduction section", () => {
    // Render the Introduction component
    render(<Introduction />);

    // Check if the main section is in the document
    const sectionElement = screen.getByTestId("introduction-section");
    expect(sectionElement).toBeInTheDocument();

    // Check if the background image is present
    const backgroundImage = screen.getByTestId("background-image");
    expect(backgroundImage).toBeInTheDocument();

    // Check if the gradient overlay is present
    const gradientOverlay = screen.getByTestId("gradient-overlay");
    expect(gradientOverlay).toBeInTheDocument();

    // Check if the animated content is present
    const animatedContent = screen.getByTestId("animated-content");
    expect(animatedContent).toBeInTheDocument();

    // Check if the main heading text is correct
    const mainHeading = screen.getByTestId("main-heading");
    expect(mainHeading).toHaveTextContent("Welcome to My Microsite!");

    // Check if the subheading text is correct
    const subheading = screen.getByTestId("subheading");
    expect(subheading).toHaveTextContent(
      "I'm Diego Mota Cavalcante, a developer focused on creating innovative web experiences."
    );
  });
});

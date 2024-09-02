import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DesktopMenu from "../DesktopMenu"; // Adjust the import path if necessary

describe("DesktopMenu", () => {
  const mockHandleScrollToSection = jest.fn();

  beforeEach(() => {
    render(<DesktopMenu handleScrollToSection={mockHandleScrollToSection} />);
  });

  test("renders all menu buttons", () => {
    const sections = [
      "introduction",
      "hero",
      "experience",
      "why buzzvel",
      "projects",
      "timeline",
    ];

    sections.forEach((section) => {
      expect(
        screen.getByTestId(
          `desktop-menu-button-${section.replace(/\s+/g, "-").toLowerCase()}`
        )
      ).toBeInTheDocument();
    });
  });

  test("calls handleScrollToSection with the correct argument when a button is clicked", () => {
    const sections = [
      "introduction",
      "hero",
      "experience",
      "why buzzvel",
      "projects",
      "timeline",
    ];

    sections.forEach((section) => {
      const button = screen.getByTestId(
        `desktop-menu-button-${section.replace(/\s+/g, "-").toLowerCase()}`
      );
      fireEvent.click(button);
      expect(mockHandleScrollToSection).toHaveBeenCalledWith(section);
    });
  });
});

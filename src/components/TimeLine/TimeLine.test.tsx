import React from "react";
import { render, screen } from "@testing-library/react";
import { useInView } from "react-intersection-observer";
import Timeline from "./TimeLine";

// useInView mockup to control when elements are visible
jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(),
}));

describe("Timeline Component", () => {
  beforeEach(() => {
    // By default, simulate elements being inside the viewport
    (useInView as jest.Mock).mockImplementation(() => ({
      ref: jest.fn(),
      inView: true,
    }));
  });

  test("renders the timeline section", () => {
    render(<Timeline />);
    const timelineSection = screen.getByTestId("timeline-section");
    expect(timelineSection).toBeInTheDocument();
  });

  test("renders the timeline title", () => {
    render(<Timeline />);
    const timelineTitle = screen.getByTestId("timeline-title");
    expect(timelineTitle).toHaveTextContent("Career Timeline at Buzzvel");
  });

  test("renders all timeline events", () => {
    render(<Timeline />);
    const events = screen.getAllByTestId(/timeline-event-/);
    expect(events).toHaveLength(3); // Checks for three events
  });

  test("renders event details correctly", () => {
    render(<Timeline />);
    const firstEventYear = screen.getByTestId("timeline-year-0");
    expect(firstEventYear).toHaveTextContent("Year 1");

    const firstEventTitle = screen.getByTestId("timeline-title-0");
    expect(firstEventTitle).toHaveTextContent("Foundation and Integration");

    const firstEventDetails = screen.getAllByTestId(/timeline-detail-0-/);
    expect(firstEventDetails).toHaveLength(3); // Checks for three details
  });

  test("applies the correct styles when inView is true", () => {
    render(<Timeline />);
    const firstIndicator = screen.getByTestId("timeline-indicator-0");
    expect(firstIndicator).toHaveClass("w-4 h-4 bg-blue-500");
  });

  test("applies the correct styles when inView is false", () => {
    // Simulates that elements are outside the viewport
    (useInView as jest.Mock).mockImplementation(() => ({
      ref: jest.fn(),
      inView: false,
    }));

    render(<Timeline />);
    const firstIndicator = screen.getByTestId("timeline-indicator-0");
    expect(firstIndicator).toHaveClass("bg-red-500");
  });
});

import { render, screen } from "@testing-library/react";
import { useInView } from "react-intersection-observer";
import WhyBuzzvel from "./WhyBuzzvelSection";

// Mock useInView hook
jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(),
}));

describe("WhyBuzzvel", () => {
  // Setup a mock implementation of useInView
  const mockInView = jest.fn();

  beforeEach(() => {
    (useInView as jest.Mock).mockImplementation(() => ({
      ref: jest.fn(),
      inView: mockInView(),
    }));
  });

  test("renders section with correct data-testid attributes", () => {
    mockInView.mockReturnValue(true); // Simulate that the component is in view

    render(<WhyBuzzvel />);

    // Check if the section renders with correct data-testid
    expect(screen.getByTestId("why-buzzvel-section")).toBeInTheDocument();
    expect(screen.getByTestId("why-buzzvel-heading")).toBeInTheDocument();
    expect(screen.getByTestId("why-buzzvel-introduction")).toBeInTheDocument();
    expect(screen.getByTestId("why-buzzvel-innovation")).toBeInTheDocument();
    expect(
      screen.getByTestId("why-buzzvel-customer-centric")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("why-buzzvel-dedicated-expertise")
    ).toBeInTheDocument();
  });

  test("displays correct text content", () => {
    mockInView.mockReturnValue(true); // Simulate that the component is in view

    render(<WhyBuzzvel />);

    // Check if the text content is correct
    expect(
      screen.getByText(
        /I’m excited about the opportunity to join Buzzvel for several reasons:/
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Innovation at Our Core/)).toBeInTheDocument();
    expect(screen.getByText(/Customer-Centric Approach/)).toBeInTheDocument();
    expect(screen.getByText(/Dedicated Expertise/)).toBeInTheDocument();
  });

  test("animation triggers when component is in view", () => {
    mockInView.mockReturnValue(true); // Simulate that the component is in view

    const { container } = render(<WhyBuzzvel />);

    // Check for animation classes when in view
    expect(container.querySelector(".animate-fadeIn")).toBeInTheDocument();
  });
});

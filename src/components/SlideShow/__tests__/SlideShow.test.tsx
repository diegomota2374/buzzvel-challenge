import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SlideShow from "../SlideShow";

// Mocking the Slide component
jest.mock("../Slide", () => {
  return (props: any) => (
    <div data-testid={props["data-testid"]}>
      <img src={props.slide.imagePath} alt={`Project ${props.slide.title}`} />
      <h3>{props.slide.title}</h3>
      <p>{props.slide.description}</p>
    </div>
  );
});

// Mocking the PreviousButton and NextButton components
jest.mock("../PreviousNextButton", () => {
  return {
    PreviousButton: (props: any) => (
      <button data-testid={props["data-testid"]} onClick={props.onClick}>
        Previous
      </button>
    ),
    NextButton: (props: any) => (
      <button data-testid={props["data-testid"]} onClick={props.onClick}>
        Next
      </button>
    ),
  };
});

describe("SlideShow Component", () => {
  test("renders without crashing", () => {
    render(<SlideShow />);

    // Check if the title is in the document
    expect(screen.getByTestId("slideshow-title")).toBeInTheDocument();

    // Check if the container for slides is present
    expect(screen.getByTestId("slideshow-container")).toBeInTheDocument();

    // Check if the previous and next buttons are present
    expect(screen.getByTestId("previous-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
  });

  test("changes slides when next and previous buttons are clicked", async () => {
    render(<SlideShow />);

    const previousButton = screen.getByTestId("previous-button");
    const nextButton = screen.getByTestId("next-button");

    // Click next button to go to the next slide
    fireEvent.click(nextButton);

    // Wait for the slide transition to occur
    await waitFor(() => {
      expect(screen.getByTestId("slide-1")).toBeInTheDocument();
    });

    // Click previous button to go back to the previous slide
    fireEvent.click(previousButton);

    // Wait for the slide transition to occur
    await waitFor(() => {
      expect(screen.getByTestId("slide-0")).toBeInTheDocument();
    });
  });
});

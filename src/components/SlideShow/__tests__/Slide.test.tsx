import { render, screen } from "@testing-library/react";
import Slide from "../Slide";

// Mocking the Image component from 'next/image'
jest.mock("next/image", () => {
  return (props: any) => (
    <img
      src={props.src}
      alt={props.alt}
      style={{ width: props.width, height: props.height }}
    />
  );
});

// Sample slide data
const slideData = {
  title: "Viplant",
  description:
    "We built this platform and APP that allowed primary users to track medical tests.",
  imagePath: "/assets/projectsBuzzvel/image-Viplant.jpg",
};

describe("Slide Component", () => {
  test("renders slide with correct content", () => {
    render(<Slide slide={slideData} />);

    // Check if the slide container is in the document
    expect(screen.getByTestId("slide-container")).toBeInTheDocument();

    // Check if the image container is in the document
    expect(screen.getByTestId("slide-image-container")).toBeInTheDocument();

    // Check if the image is in the document and has the correct attributes
    const image = screen.getByAltText(
      `Project ${slideData.title}`
    ) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(slideData.imagePath);
    expect(image.alt).toBe(`Project ${slideData.title}`);

    // Check if the title is in the document and has the correct text
    expect(screen.getByTestId("slide-title")).toHaveTextContent(
      slideData.title
    );

    // Check if the description is in the document and has the correct text
    expect(screen.getByTestId("slide-description")).toHaveTextContent(
      slideData.description
    );
  });
});

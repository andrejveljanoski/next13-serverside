import { render, screen, act } from "@testing-library/react";
import ImageCarousel from "../components/ImageCarousel";
import "@testing-library/jest-dom";

const images = [
  { src: "/image1.jpg", link: "city1" },
  { src: "/image2.jpg", link: "city2" },
  { src: "/image3.jpg", link: "city3" },
];

describe("ImageCarousel", () => {
  it("automatically changes images and links", async () => {
    jest.useFakeTimers();

    render(<ImageCarousel images={images} />);

    // Find the initial image and link
    const initialImage = screen.getByAltText("Image 1");
    const initialLink = screen.getByRole("link");

    // Ensure the initial image and link are displayed
    expect(initialImage).toBeInTheDocument();
    expect(initialLink).toBeInTheDocument();
    expect(initialLink).toHaveAttribute("href", "cities/city1");

    // Move to the next image (trigger the interval)
    act(() => {
      jest.advanceTimersByTime(5000); // Advance time by 5 seconds
    });

    // Find the new image and link
    const newImage = screen.getByAltText("Image 2");
    const newLink = screen.getByRole("link");

    const oldImg = screen.queryByAltText("Image1");
    const oldLink = screen.queryByAltText("link");

    // Ensure the new image and link are displayed
    expect(newImage).toBeInTheDocument();
    expect(newLink).toBeInTheDocument();
    expect(newLink).toHaveAttribute("href", "cities/city2");

    // Ensure the old image and link are removed

    expect(oldImg).not.toBeInTheDocument();
    expect(oldLink).not.toBeInTheDocument();
  });
});

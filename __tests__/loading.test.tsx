import { render, screen } from "@testing-library/react";
import Loading from "../app/loading"; // Import your Loading component
import "@testing-library/jest-dom";

describe("Loading", () => {
  it("renders the loading message and an image", () => {
    render(<Loading />);

    // Find the loading message and any image using the "img" role
    const loadingMessage = screen.getByText("The page will be loaded shortly");
    const image = screen.getByRole("img");

    // Check that the loading message and an image are displayed
    expect(loadingMessage).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});

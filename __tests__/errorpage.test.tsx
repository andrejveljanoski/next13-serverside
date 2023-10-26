import { render, screen, fireEvent } from "@testing-library/react";
import NotFound from "../app/not-found"; // Import your NotFound component

describe("NotFound", () => {
  it("clicking the homepage link leads to the homepage", () => {
    render(<NotFound />);

    // Find the homepage link
    const homepageLink = screen.getByText("homepage");

    // Click the homepage link
    fireEvent.click(homepageLink);

    // Check if the URL has changed to the homepage
    expect(window.location.pathname).toBe("/"); // Make sure the path is correct
  });
});

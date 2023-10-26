import { render, screen, act, fireEvent } from "@testing-library/react";
import ImageCarousel from "../components/ImageCarousel";
import "@testing-library/jest-dom";

const images = [
  { src: "/image1.jpg", link: "city1" },
  { src: "/image2.jpg", link: "city2" },
  { src: "/image3.jpg", link: "city3" },
];

describe("ImageCarousel", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  const pushMock = jest.fn();

  beforeAll(() => {
    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("redirects to the corresponding city page on image click", async () => {
    render(<ImageCarousel images={images} />);

    const initialImage: any = screen.getByTestId("test");

    expect(initialImage).toBeInTheDocument();

    // // Ensure that the router was called with the correct path
    await act(async () => {
      expect(initialImage).toHaveAttribute("href", "cities/city1");
    });
  });
});

/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders the header", () => {
    render(<Home />);

    const paragraph = screen.getByRole("heading", {
      name: "My App",
    });
    expect(paragraph).toBeTruthy();
  });
});

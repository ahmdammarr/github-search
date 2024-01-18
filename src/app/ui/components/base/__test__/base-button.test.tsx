/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import BaseButton from "@ui/components/base/base-button";

describe("Base Button Test", () => {
  it("renders correctly", () => {
    render(<BaseButton title="Button" />);

    const ButtonText = screen.getByText("Button").textContent;

    expect(ButtonText).toBe("Button");
  });
});

/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import BaseInput from "../base-input";

describe("Base Input Test", () => {
  it("renders correctly", () => {
    render(<BaseInput placeholder="input placeholder" />);

    const ButtonText = screen.getByPlaceholderText("input placeholder");

    expect(ButtonText).toBeTruthy();
  });
});

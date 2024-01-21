/**
 * @jest-environment jsdom
 */
import { render, screen,fireEvent } from "@testing-library/react";
import BaseInput from "../base-input";

describe("Base Input Test", () => {
  it("renders correctly", () => {
    render(<BaseInput placeholder="input placeholder" />);

    const ButtonText = screen.getByPlaceholderText("input placeholder");

    expect(ButtonText).toBeTruthy();
  });
  it("handles input change", () => {
    const onChangeMock = jest.fn();

    render(<BaseInput placeholder="Username" onChange={onChangeMock} />);
    const inputElement = screen.getByPlaceholderText("Username");
     fireEvent.change(inputElement, { target: { value: "newvalue" } });
     const inputElementWithValue = screen.getByDisplayValue("newvalue");
     expect(onChangeMock).toHaveBeenCalledTimes(1);
     expect(inputElementWithValue).toBeTruthy()
  });
});

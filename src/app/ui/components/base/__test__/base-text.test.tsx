/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import BaseText from "@ui/components/base/base-text";

describe("Base Text Test", () => {
  it("renders correctly", () => {
    render(<BaseText>Text</BaseText>);

    const BaseTextContent = screen.getByText("Text").textContent;

    expect(BaseTextContent).toBe("Text");
  });
});

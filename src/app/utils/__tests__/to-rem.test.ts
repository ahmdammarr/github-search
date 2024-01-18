import { toRem } from "../to-rem";

describe("Convert pixel to rem", () => {
  it("should return string", () => {
    expect(typeof toRem(16)).toBe('string');
  });
  it("should ends with rem", () => {
    const output = toRem(16)
    expect(output.slice(output.length-3, output.length)).toBe('rem');
  });
  it("should generate rem correctly", () => {
    const one_rem = toRem(16)
    const two_rems = toRem(32)
    const three_rems = toRem(48)
    expect(one_rem).toBe('1rem');
    expect(two_rems).toBe('2rem');
    expect(three_rems).toBe('3rem');
  });
});

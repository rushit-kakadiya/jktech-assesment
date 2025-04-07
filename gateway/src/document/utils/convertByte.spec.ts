import { convertBytes } from "./convertByte";

describe("convertByte", () => {
  it("Should accurately convert byte values to the appropriate unit (KB, MB, GB) with correct formatting.", () => {
    expect(convertBytes(1024)).toBe("1.0 KB");
    expect(convertBytes(1024 * 1024)).toBe("1.0 MB");
    expect(convertBytes(1024 * 1024 * 1024)).toBe("1.0 GB");
  });

  it('Should return "n/a" when the byte value is zero, indicating no meaningful file size to display.', () => {
    expect(convertBytes(0)).toBe("n/a");
  });

  it('Should display raw byte count when value is below 1KB threshold, maintaining precision for small files.', () => {
    expect(convertBytes(1023)).toBe("1023 Bytes");
  });
});

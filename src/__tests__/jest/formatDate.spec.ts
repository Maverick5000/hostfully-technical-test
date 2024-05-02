import formatDate from "../../utils/formatDate";

describe("formatDate function", () => {
  it("Returns correct date format", () => {
    const formatedDate = formatDate("2024-04-01");

    expect(formatedDate).toBe("April 1, 2024");
  });

  it("Handles invalid date", () => {
    const formatedDate = formatDate("20224-0401");

    expect(formatedDate).toBe("Invalid Date");
  });
});

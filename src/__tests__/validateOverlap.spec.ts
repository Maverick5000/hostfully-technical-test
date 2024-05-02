import validateOverlap from "../utils/validateOverlap";

describe("validateOverlap function", () => {
  it("Validates if bookings are overlapping", () => {
    const result = validateOverlap([
      {
        description: "Test",
        price: 1000,
        country: "USA",
        address: "123 Main St",
        startDate: "2021-01-01",
        endDate: "2021-01-02",
      },
    ]);

    expect(result).toBe("overlap");
  });
});
